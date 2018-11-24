'use strict';

// Пакеты, использующиеся при обработке
const { series, parallel, src, dest, watch, lastRun } = require('gulp');
const fs = require('fs');
const plumber = require('gulp-plumber');
const del = require('del');
const pug = require('gulp-pug');
const through2 = require('through2');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const getClassesFromHtml = require('get-classes-from-html');
const jsonFormat = require('json-format');
const browserSync = require('browser-sync').create();
const debug = require('gulp-debug');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const postcss = require('gulp-postcss');
const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");
const atImport = require("postcss-import");
const cleanss = require('gulp-cleancss');
const inlineSVG = require('postcss-inline-svg');
const objectFitImages = require('postcss-object-fit-images');
const cpy = require('cpy');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const spritesmith = require('gulp.spritesmith');
const merge = require('merge-stream');
const imagemin = require('gulp-imagemin');
const prettyHtml = require('gulp-pretty-html');

// Настройки из файла
let config = require('./config.js');
// Директории из настроек (dir.src = "./src/", dir.build = "./build/")
let dir = config.dir;
dir.blocks = `${dir.src}blocks/`;
// Список блоков, который будет получен из классов HTML после компиляции pug
let blocksList = [];
// Старый список блоков в виде строки
let oldBlocksListString = JSON.stringify(config.blocks);
// Адрес репозитория
let repoUrl = require('./package.json').repository.url.replace(/\.git$/g, '');
// Определение: разработка это или финальная сборка
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';
// Сообщение для компилируемых файлов
let doNotEditMsg = '\n ВНИМАНИЕ! Этот файл генерируется автоматически.\n Любые изменения этого файла будут потеряны при следующей компиляции.\n Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раза.\n\n';
// Настройки pug-компилятора
let pugOption = {
  data: { repoUrl: repoUrl, },
  filters: { 'show-code': filterShowCode, },
};
// Настройки бьютификатора
let prettyOption = {
  indent_size: 2,
  indent_char: ' ',
  unformatted: ['code', 'em', 'strong', 'span', 'i', 'b', 'br'],
  content_unformatted: [],
};
// Список и настройки плагинов postCSS
let postCssPlugins = [
  autoprefixer(), // настройки вынесены в package.json, дабы получать их для любой задачи
  mqpacker({
    sort: true
  }),
  atImport(),
  inlineSVG(),
  objectFitImages(),
];


function compilePug() {
  return src([ `${dir.src}pages/**/*.pug` ])
    .pipe(plumber())
    .pipe(debug({title: 'Compiles '}))
    .pipe(pug(pugOption))
    .pipe(prettyHtml(prettyOption))
    .pipe(through2.obj(getClassesToBlocksList))
    .on('end', function(){checkBlockList(true)}) // компилируются все; можно убирать блоки, которых больше нет
    .pipe(dest(dir.build));
}
exports.compilePug = compilePug;


function compilePugFast() {
  return src([ `${dir.src}pages/**/*.pug` ], { since: lastRun(compilePugFast) })
    .pipe(plumber())
    .pipe(debug({title: 'Compiles '}))
    .pipe(pug(pugOption))
    .pipe(prettyHtml(prettyOption))
    .pipe(through2.obj(getClassesToBlocksList))
    .on('end', checkBlockList)
    .pipe(dest(dir.build));
}
exports.compilePugFast = compilePugFast;


function writePugMixinsFile(cb) {
  const regExp = dir.blocks.replace('./','');
  let allBlocksWithPugFiles = getDirectories(dir.blocks, 'pug');
  // console.log(allBlocksWithPugFiles);
  let pugMixins = doNotEditMsg.replace(/\n /gm,'\n//- ');
  allBlocksWithPugFiles.forEach(function(blockName) {
    pugMixins += `include ${dir.blocks.replace(dir.src,'../')}${blockName}/${blockName}.pug\n`;
  });
  fs.writeFileSync(`${dir.src}pug/mixins.pug`, pugMixins);
  cb();
}
exports.writePugMixinsFile = writePugMixinsFile;


function compileSass() {
  return src(`${dir.src}scss/style.scss`, { sourcemaps: true })
    .pipe(plumber())
    .pipe(debug({title: 'Compiles:'}))
    .pipe(sass({includePaths: [__dirname+'/']}))
    .pipe(postcss(postCssPlugins))
    .pipe(gulpIf(!isDev, cleanss()))
    .pipe(dest(`${dir.build}/css`, { sourcemaps: '.' }))
    .pipe(browserSync.stream());
}
exports.compileSass = compileSass;


function writeSassImportsFile(cb) {
  // console.log( config.blocks );
  let msg = `\n/*!*${doNotEditMsg.replace(/\n /gm,'\n * ').replace(/\n\n$/,'\n */\n\n')}`;
  let styleImports = msg;
  config.addStyleBefore.forEach(function(src) {
    styleImports += `@import "${src}";\n`;
  });
  config.blocks.forEach(function(block) {
    let src = `${dir.blocks}${block}/${block}.scss`;
    if(fileExist(src)) styleImports += `@import "${src}";\n`;
  });
  config.addStyleAfter.forEach(function(src) {
    styleImports += `@import "${src}";\n`;
  });
  styleImports += msg;
  fs.writeFileSync(`${dir.src}scss/style.scss`, styleImports);
  cb();
}
exports.writeSassImportsFile = writeSassImportsFile;


function buildJs() {
  // var sourcemaps = require('gulp-sourcemaps');
  return browserify({
      entries: dir.src + '/js/entry.js',
      debug: true
    })
    .transform('babelify', {presets: ['@babel/preset-env',]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    // .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(gulpIf(!isDev, uglify()))
    // .pipe(sourcemaps.write('./'))
    .pipe(dest(dir.build + '/js'));
}
exports.buildJs = buildJs;


function writeJsRequiresFile(cb) {
  // console.log( config.blocks );
  let msg = `\n/*!*${doNotEditMsg.replace(/\n /gm,'\n * ').replace(/\n\n$/,'\n */\n\n')}`;
  let jsRequires = msg;
  config.addJsBefore.forEach(function(src) {
    jsRequires += `require('${src}');\n`;
  });
  config.blocks.forEach(function(block) {
    if(fileExist(`${dir.blocks}${block}/${block}.js`)) jsRequires += `require('../blocks/${block}/${block}.js');\n`;
  });
  config.addJsAfter.forEach(function(src) {
    jsRequires += `require('${src}');\n`;
  });
  jsRequires += msg;
  fs.writeFileSync(`${dir.src}js/entry.js`, jsRequires);
  cb();
}
exports.writeJsRequiresFile = writeJsRequiresFile;


function copyAssets(cb) {
  for (let item in config.addAssets) {
    let dest = `${dir.build}${config.addAssets[item]}`;
    // (async () => {
      // await cpy(item, dest);
      cpy(item, dest);
      console.log(`---------- Скопировано: ${item} -> ${dest}`);
    // })();
  }
  cb();
}
exports.copyAssets = copyAssets;


function copyImg(cb) {
  let copiedImages = [];
  config.blocks.forEach(function(block) {
    let src = `${dir.blocks}${block}/img`;
    if(fileExist(src)) copiedImages.push(src);
  });
  (async () => {
    await cpy(copiedImages, `${dir.build}img`);
    console.log(`---------- Скопированы изображения БЭМ-блоков`);
    cb();
  })();
}
exports.copyImg = copyImg;


function generateSvgSprite(cb) {
  let spriteSvgPath = `${dir.blocks}sprite-svg/svg/`;
  if(config.blocks.indexOf('sprite-svg') + 1 && fileExist(spriteSvgPath)) {
    return src(spriteSvgPath + '*.svg')
      .pipe(svgmin(function (file) {
        return { plugins: [{ cleanupIDs: { minify: true } }] }
      }))
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(rename('sprite.svg'))
      .pipe(dest(`${dir.blocks}sprite-svg/img/`));
  }
  else {
    console.log('неа');
    cb();
  }
}
exports.generateSvgSprite = generateSvgSprite;


function generatePngSprite(cb) {
  let spritePngPath = `${dir.blocks}sprite-png/png/`;
  if(config.blocks.indexOf('sprite-png') + 1 && fileExist(spritePngPath)) {
    del(`${dir.blocks}sprite-png/img/*.png`);
    let fileName = 'sprite-' + Math.random().toString().replace(/[^0-9]/g, '') + '.png';
    let spriteData = src(spritePngPath + '*.png')
      .pipe(spritesmith({
        imgName: fileName,
        cssName: 'sprite-png.scss',
        padding: 4,
        imgPath: '../img/' + fileName
      }));
    let imgStream = spriteData.img
      .pipe(buffer())
      .pipe(imagemin([ imagemin.optipng({ optimizationLevel: 5 }) ]))
      .pipe(dest(`${dir.blocks}sprite-png/img/`));
    let cssStream = spriteData.css
      .pipe(dest(`${dir.blocks}sprite-png/`));
    return merge(imgStream, cssStream);
  }
  else {
    cb();
  }
}
exports.generatePngSprite = generatePngSprite;


function writeBlocksLibSass(cb) {
  let allBlocksWithStyleFiles = getDirectories(dir.blocks, 'scss');
  let styleImports = '';
  config.addStyleBefore.forEach(function(src) {
    styleImports += `@import "${src}";\n`;
  });
  allBlocksWithStyleFiles.forEach(function(block) {
    let src = `${dir.blocks}${block}/${block}.scss`;
    styleImports += `@import "${src}";\n`;
  });
  config.addStyleAfter.forEach(function(src) {
    styleImports += `@import "${src}";\n`;
  });
  fs.writeFileSync(`${dir.src}scss/blocks-lib.scss`, styleImports);
  cb();
}
exports.writeBlocksLibSass = writeBlocksLibSass;


function writeBlocksLibJs(cb) {
  let allBlocksWithJsFiles = getDirectories(dir.blocks, 'js');
  let jsRequires = '';
  config.addJsBefore.forEach(function(src) {
    jsRequires += `require('${src}');\n`;
  });
  allBlocksWithJsFiles.forEach(function(block) {
    jsRequires += `require('../blocks/${block}/${block}.js');\n`;
  });
  config.addJsAfter.forEach(function(src) {
    jsRequires += `require('${src}');\n`;
  });
  fs.writeFileSync(`${dir.src}js/blocks-lib.js`, jsRequires);
  cb();
}
exports.writeBlocksLibJs = writeBlocksLibJs;


function compileBlocksLibSass() {
  return src(`${dir.src}scss/blocks-lib.scss`, { sourcemaps: true })
    .pipe(plumber())
    .pipe(debug({title: 'Compiles:'}))
    .pipe(sass({includePaths: [__dirname+'/']}))
    .pipe(postcss(postCssPlugins))
    .pipe(dest(`${dir.build}/css`, { sourcemaps: '.' }))
    .pipe(browserSync.stream());
}
exports.compileBlocksLibSass = compileBlocksLibSass;


function buildBlocksLibJs() {
  return browserify({
      entries: dir.src + '/js/blocks-lib.js',
      debug: true
    })
    .transform('babelify', {presets: ['@babel/preset-env',]})
    .bundle()
    .pipe(source('blocks-lib.js'))
    .pipe(buffer())
    .pipe(gulpIf(!isDev, uglify()))
    .pipe(dest(dir.build + '/js'));
}
exports.buildBlocksLibJs = buildBlocksLibJs;


function clearBuildDir() {
  return del([
    `${dir.build}**/*`,
    `!${dir.build}readme.md`,
  ]);
}
exports.clearBuildDir = clearBuildDir;


function reload(done) {
  browserSync.reload();
  done();
}


function serve() {
  browserSync.init({
    server: dir.build,
    port: 8080,
    startPath: 'index.html',
    open: false,
    notify: false,
  });
  watch([`${dir.src}pages/**/*.pug`], { events: ['change', 'add'], delay: 100 }, series(
    compilePugFast,
    parallel(writeSassImportsFile, writeJsRequiresFile),
    parallel(compileSass, buildJs),
    reload
  ));
  watch([`${dir.src}pages/**/*.pug`], { delay: 100 })
    .on('unlink', function(path, stats) {
      let filePathInBuildDir = path.replace(dir.src.replace('./','') + 'pages/', dir.build).replace('.pug', '.html');
      fs.unlink(filePathInBuildDir, (err) => {
        if (err) throw err;
        console.log(`---------- ${filePathInBuildDir} удалён`);
      });
    });
  watch([`${dir.blocks}**/*.pug`], { events: ['change', 'add'], delay: 100 }, series(
    compilePug,
    writeSassImportsFile,
    compileSass,
    reload
  ));
  watch([`${dir.blocks}**/*.pug`], { events: ['unlink'], delay: 100 }, series(writePugMixinsFile));
  watch([`${dir.src}pug/**/*.pug`, `!${dir.src}pug/mixins.pug`], { delay: 100 }, series(
    compilePug,
    parallel(writeSassImportsFile, writeJsRequiresFile),
    parallel(compileSass, buildJs),
    reload,
  ));
  watch([`${dir.blocks}**/*.scss`], { events: ['all'], delay: 100 }, series(writeSassImportsFile, writeBlocksLibSass, compileSass, compileBlocksLibSass));
  watch([`${dir.src}scss/**/*.scss`, `!${dir.src}scss/style.scss`, `!${dir.src}scss/blocks-lib.scss`], { events: ['all'], delay: 100 }, series(compileSass, compileBlocksLibSass));
  watch([`${dir.src}js/**/*.js`, `!${dir.src}js/entry.js`, `!${dir.src}js/blocks-lib.js`, `${dir.blocks}**/*.js`], { events: ['all'], delay: 100 }, series(writeJsRequiresFile, writeBlocksLibJs, buildJs, buildBlocksLibJs, reload));
  watch([`${dir.blocks}**/img/*.{jpg,jpeg,png,gif,svg,webp}`], { events: ['all'], delay: 100 }, series(copyImg, reload));
  watch([`${dir.blocks}sprite-svg/svg/*.svg`], { events: ['all'], delay: 100 }, series(generateSvgSprite, copyImg));
  watch([`${dir.blocks}sprite-png/png/*.png`], { events: ['all'], delay: 100 }, series(generatePngSprite, copyImg, compileSass));
}


exports.default = series(
  parallel(clearBuildDir, writePugMixinsFile),
  parallel(compilePugFast, copyAssets),
  parallel(generateSvgSprite, generatePngSprite),
  parallel(copyImg),
  parallel(writeSassImportsFile, writeJsRequiresFile, writeBlocksLibSass, writeBlocksLibJs),
  parallel(compileSass, compileBlocksLibSass, buildJs, buildBlocksLibJs),
  serve,
);







// Функции, не являющиеся задачами Gulp ----------------------------------------

/**
 * Запись конфигурационного файла
 * @param  {object} config Конфиг
 */
function writeConfig(config) {
  var settings = { type: 'space', size: 2 }
  let configText = '// Файл перезаписывается программно при работе автоматизации\nlet config =\n' + jsonFormat(config, settings) + ';\n\nmodule.exports = config;\n';
  fs.writeFile('./config.js', configText, function(err){
    if (err) throw err;
    console.log('---------- Записан новый config.js');
  });
}

//
/**
 * Pug-фильтр, выводящий содержимое pug-файла в виде форматированного текста
 */
function filterShowCode(text, options) {
  var lines = text.split('\n');
  var result = '<pre class="code">\n';
  if (typeof(options['first-line']) !== 'undefined') result = result + '<code>' + options['first-line'] + '</code>\n';
  for (var i = 0; i < (lines.length - 1); i++) { // (lines.length - 1) для срезания последней строки (пустая)
    result = result + '<code>' + lines[i] + '</code>\n';
  }
  result = result + '</pre>\n';
  result = result.replace(/<code><\/code>/g, '<code>&nbsp;</code>');
  return result;
}

/**
 * Проверка существования файла или папки
 * @param  {string} path      Путь до файла или папки
 * @return {boolean}
 */
function fileExist(filepath){
  let flag = true;
  try{
    fs.accessSync(filepath, fs.F_OK);
  }catch(e){
    flag = false;
  }
  return flag;
}

/**
 * Получение всех названий поддиректорий, содержащих файл указанного расширения, совпадающий по имени с поддиректорией
 * @param  {string} source Путь к папке всех блоков.
 * @param  {string} ext    Расширение файлов, которое проверяется
 * @return {array}         Массив из имён блоков
 */
function getDirectories(source, ext) {
  let res = fs.readdirSync(source)
    .filter(item => fs.lstatSync(source + item).isDirectory())
    .filter(item => fileExist(source + item + '/' + item + '.' + ext));
  return res;
}

/**
 * Получение разницы между двумя массивами.
 * @param  {array} a1 Первый массив
 * @param  {array} a2 Второй массив
 * @return {array}    Элементы, которые отличаются
 */
function getArraysDiff(a1, a2) {
  return a1.filter(i=>!a2.includes(i)).concat(a2.filter(i=>!a1.includes(i)))
}

/**
 * Уникализация массива
 * @param  {array} arr Массив, в котором могут быть неуникальные элементы
 * @return {array}     Массив без повторов
 */
function uniqueArray(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
}

/**
 * СЛУЖЕБНАЯ: Добавляет список классов из принятого HTML в переменную blocksList, используется в потоке обработки Pug.
 * @param  {object}   file Обрабатываемый файл
 * @param  {string}   enc  Кодировка
 * @param  {Function} cb   Коллбэк
 */
function getClassesToBlocksList(file, enc, cb) {
  // Передана херь — выходим
  if (file.isNull()) {
    cb(null, file);
    return;
  }
  // Проверяем, не является ли обрабатываемый файл исключением
  let processThisFile = true;
  config.notGetBlocks.forEach(function(item) {
    if (file.relative.trim() == item.trim()) processThisFile = false;
  });
  // Файл не исключён из обработки, погнали
  if(processThisFile){
    const fileContent = file.contents.toString();
    let classesInFile = getClassesFromHtml(fileContent);
    // Обойдём все найденные классы
    for (let item of classesInFile) {
      // Если это не Блок или этот Блок уже присутствует, не будем добавлять
      if ((item.indexOf('__') + 1 !== 0) || (item.indexOf('--') + 1 !== 0) || (blocksList.indexOf(item) + 1)) continue;
      // Если этот класс совпадает с классом-исключением из настроек, не будем добавлять
      if( config.ignoredBlocks.indexOf(item) + 1 ) continue;
      // Добавляем
      blocksList.push(item);
    }
    // Добавим все обязательные блоки из настроек
    config.alwaysAddBlocks.forEach(function(item) {
      blocksList.push(item);
    });
    file.contents = new Buffer(fileContent);
  }
  this.push(file);
  cb();
}

/**
 * СЛУЖЕБНАЯ: Обновляет глобальную переменную с актуальным список блоков
 * @param  {Boolean} removeBlocks Удалять ли не найденные блоки
 */
function checkBlockList(removeBlocks = false) {
  if(blocksList.length) {
    if (removeBlocks) {
      // Убрать из списка блоков те элементы, которых нет в списке блоков, полученном из HTML
      config.blocks = config.blocks.filter(item => blocksList.indexOf(item) >= 0);
    }
    // Добавить в конец списка блоков те элементы, которые использованы в HTML, но отсутствуют в списке
    Array.prototype.push.apply(config.blocks, getArraysDiff(blocksList, config.blocks));
    // ИМЕЕМ СПИСОК ИСПОЛЬЗОВАННЫХ СЕЙЧАС НА ПРОЕКТЕ БЛОКОВ
    // console.log(config.blocks);
    config.blocks = uniqueArray(config.blocks);
    // Если есть изменения списка блоков
    if(oldBlocksListString != JSON.stringify(config.blocks)) {
      // Записать новый конфиг
      writeConfig(config);
      // Подновить старый список блоков
      oldBlocksListString = JSON.stringify(config.blocks);
    }
  }
  else {
    console.log('---------- В проекте нет блоков. Сурово. По-челябински.');
  }
}
