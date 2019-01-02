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

// Глобальные настройки этого запуска
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';
const nth = {};
nth.config = require('./config.js');
nth.blocksFromHtml = []; // блоки из HTML (только если имеют свою папку блока!)
nth.scssImportsList = []; // список импортов стилей
const dir = nth.config.dir;

// Сообщение для компилируемых файлов
let doNotEditMsg = '\n ВНИМАНИЕ! Этот файл генерируется автоматически.\n Любые изменения этого файла будут потеряны при следующей компиляции.\n Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.\n\n';

// Настройки pug-компилятора
let pugOption = {
  data: { repoUrl: 'https://github.com/nicothin/NTH-start-project', },
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
  autoprefixer(),
  mqpacker({
    sort: true
  }),
  atImport(),
  inlineSVG(),
  objectFitImages(),
];


function writePugMixinsFile(cb) {
  let allBlocksWithPugFiles = getDirectories('pug');
  let pugMixins = '//-' + doNotEditMsg.replace(/\n /gm,'\n  ');
  allBlocksWithPugFiles.forEach(function(blockName) {
    pugMixins += `include ${dir.blocks.replace(dir.src,'../')}${blockName}/${blockName}.pug\n`;
  });
  fs.writeFileSync(`${dir.src}pug/mixins.pug`, pugMixins);
  cb();
}
exports.writePugMixinsFile = writePugMixinsFile;


function compilePug() {
  return src([ `${dir.src}pages/**/*.pug` ])
    .pipe(plumber())
    .pipe(debug({title: 'Compiles '}))
    .pipe(pug(pugOption))
    .pipe(prettyHtml(prettyOption))
    .pipe(through2.obj(getClassesToBlocksList))
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
    .pipe(dest(dir.build));
}
exports.compilePugFast = compilePugFast;


function copyAssets(cb) {
  for (let item in nth.config.addAssets) {
    let dest = `${dir.build}${nth.config.addAssets[item]}`;
    cpy(item, dest);
  }
  cb();
}
exports.copyAssets = copyAssets;


function copyImg(cb) {
  let copiedImages = [];
  nth.blocksFromHtml.forEach(function(block) {
    let src = `${dir.blocks}${block}/img`;
    if(fileExist(src)) copiedImages.push(src);
  });
  nth.config.alwaysAddBlocks.forEach(function(block) {
    let src = `${dir.blocks}${block}/img`;
    if(fileExist(src)) copiedImages.push(src);
  });
  (async () => {
    await cpy(copiedImages, `${dir.build}img`);
    cb();
  })();
}
exports.copyImg = copyImg;


function generateSvgSprite(cb) {
  let spriteSvgPath = `${dir.blocks}sprite-svg/svg/`;
  if(nth.config.alwaysAddBlocks.indexOf('sprite-svg') > -1 && fileExist(spriteSvgPath)) {
    return src(spriteSvgPath + '*.svg')
      .pipe(svgmin(function (file) {
        return { plugins: [{ cleanupIDs: { minify: true } }] }
      }))
      .pipe(svgstore({ inlineSvg: true }))
      .pipe(rename('sprite.svg'))
      .pipe(dest(`${dir.blocks}sprite-svg/img/`));
  }
  else {
    cb();
  }
}
exports.generateSvgSprite = generateSvgSprite;


function generatePngSprite(cb) {
  let spritePngPath = `${dir.blocks}sprite-png/png/`;
  if(nth.config.alwaysAddBlocks.indexOf('sprite-png') > -1 && fileExist(spritePngPath)) {
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


function writeSassImportsFile(cb) {
  const newScssImportsList = [];
  nth.config.addStyleBefore.forEach(function(src) {
    newScssImportsList.push(src);
  });
  nth.blocksFromHtml.forEach(function(block) {
    let src = `${dir.blocks}${block}/${block}.scss`;
    if(fileExist(src)) newScssImportsList.push(src);
  });
  nth.config.addStyleAfter.forEach(function(src) {
    newScssImportsList.push(src);
  });
  let diff = getArraysDiff(newScssImportsList, nth.scssImportsList);
  if (diff.length) {
    let msg = `\n/*!*${doNotEditMsg.replace(/\n /gm,'\n * ').replace(/\n\n$/,'\n */\n\n')}`;
    let styleImports = msg;
    newScssImportsList.forEach(function(src) {
      styleImports += `@import "${src}";\n`;
    });
    styleImports += msg;
    fs.writeFileSync(`${dir.src}scss/style.scss`, styleImports);
    console.log('---------- Write new style.scss');
    nth.scssImportsList = newScssImportsList;
  }
  cb();
}
exports.writeSassImportsFile = writeSassImportsFile;


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


function buildJs() {
  // TODO впилить сюда вебпацкЪ
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


function writeBlocksLibSass(cb) {
  let allBlocksWithStyleFiles = getDirectories('scss');
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
  let allBlocksWithJsFiles = getDirectories('js');
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

  // Страницы: изменение, добавление
  watch([`${dir.src}pages/**/*.pug`], { events: ['change', 'add'], delay: 100 }, series(
    compilePugFast,
    parallel(writeSassImportsFile, ),
    // parallel(writeSassImportsFile, writeJsRequiresFile),
    // parallel(compileSass, buildJs),
    reload
  ));

  // Страницы: удаление
  watch([`${dir.src}pages/**/*.pug`], { delay: 100 })
  // TODO попробовать с events: ['unlink']
    .on('unlink', function(path, stats) {
      let filePathInBuildDir = path.replace(dir.src + 'pages/', dir.build).replace('.pug', '.html');
      fs.unlink(filePathInBuildDir, (err) => {
        if (err) throw err;
        console.log(`---------- Delete:  ${filePathInBuildDir}`);
      });
    });

  // Разметка Блоков: изменение, добавление
  watch([`${dir.blocks}**/*.pug`], { events: ['change', 'add'], delay: 100 }, series(
    compilePug,
    writeSassImportsFile,
    // compileSass,
    reload
  ));

  // Разметка Блоков: удаление
  watch([`${dir.blocks}**/*.pug`], { events: ['unlink'], delay: 100 }, writePugMixinsFile);

  // Шаблоны pug: все события
  watch([`${dir.src}pug/**/*.pug`, `!${dir.src}pug/mixins.pug`], { delay: 100 }, series(
    compilePug,
    parallel(writeSassImportsFile, ),
    // parallel(writeSassImportsFile, writeJsRequiresFile),
    // parallel(compileSass, buildJs),
    reload,
  ));

  // // Стили Блоков: все события
  // watch([`${dir.blocks}**/*.scss`], { events: ['all'], delay: 100 }, series(writeSassImportsFile, writeBlocksLibSass, compileSass, compileBlocksLibSass));

  // // Стилевые глобальные файлы: все события
  // watch([`${dir.src}scss/**/*.scss`, `!${dir.src}scss/style.scss`, `!${dir.src}scss/blocks-lib.scss`], { events: ['all'], delay: 100 }, series(compileSass, compileBlocksLibSass));

  // // Скриптовые глобальные файлы: все события
  // watch([`${dir.src}js/**/*.js`, `!${dir.src}js/entry.js`, `!${dir.src}js/blocks-lib.js`, `${dir.blocks}**/*.js`], { events: ['all'], delay: 100 }, series(writeJsRequiresFile, writeBlocksLibJs, buildJs, buildBlocksLibJs, reload));

  // Картинки: все события
  watch([`${dir.blocks}**/img/*.{jpg,jpeg,png,gif,svg,webp}`], { events: ['all'], delay: 100 }, series(copyImg, reload));

  // Спрайт SVG
  watch([`${dir.blocks}sprite-svg/svg/*.svg`], { events: ['all'], delay: 100 }, series(
    generateSvgSprite,
    copyImg,
    reload,
  ));

  // Спрайт PNG
  watch([`${dir.blocks}sprite-png/png/*.png`], { events: ['all'], delay: 100 }, series(
    generatePngSprite,
    copyImg,
    // compileSass,
    reload,
  ));
}


exports.default = series(
  parallel(clearBuildDir, writePugMixinsFile),
  parallel(compilePugFast, copyAssets, generateSvgSprite, generatePngSprite),
  parallel(copyImg, writeSassImportsFile),
  // parallel(writeSassImportsFile, writeJsRequiresFile, writeBlocksLibSass, writeBlocksLibJs),
  serve,
);

// exports.default = series(
//   parallel(clearBuildDir, writePugMixinsFile),
//   parallel(compilePugFast, copyAssets),
//   parallel(generateSvgSprite, generatePngSprite),
//   parallel(copyImg),
//   parallel(writeSassImportsFile, writeJsRequiresFile, writeBlocksLibSass, writeBlocksLibJs),
//   parallel(compileSass, compileBlocksLibSass, buildJs, buildBlocksLibJs),
//   serve,
// );







// Функции, не являющиеся задачами Gulp ----------------------------------------

/**
 * Получение списка классов из HTML и запись его в глоб. переменную nth.blocksFromHtml.
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
  nth.config.notGetBlocks.forEach(function(item) {
    if (file.relative.trim() == item.trim()) processThisFile = false;
  });
  // Файл не исключён из обработки, погнали
  if (processThisFile) {
    const fileContent = file.contents.toString();
    let classesInFile = getClassesFromHtml(fileContent);
    nth.blocksFromHtml = [];
    // Обойдём найденные классы
    for (let item of classesInFile) {
      // Не Блок или этот Блок уже присутствует?
      if ((item.indexOf('__') > -1) || (item.indexOf('--') > -1) || (nth.blocksFromHtml.indexOf(item) + 1)) continue;
      // Класс совпадает с классом-исключением из настроек?
      if (nth.config.ignoredBlocks.indexOf(item) + 1) continue;
      // У этого блока отсутствует папка?
      if (!fileExist(dir.blocks + item)) continue;
      // Добавляем класс в список
      nth.blocksFromHtml.push(item);
    }
    console.log('---------- Used blocks:   ' + nth.blocksFromHtml.join(', '));
    file.contents = new Buffer(fileContent);
  }
  this.push(file);
  cb();
}

/**
 * Запись конфигурационного файла
 * @param  {object} config Конфиг
 */
// function writeConfig(config) {
//   var settings = { type: 'space', size: 2 }
//   let configText = '// Файл перезаписывается программно при работе автоматизации\nlet config =\n' + jsonFormat(config, settings) + ';\n\nmodule.exports = config;\n';
//   fs.writeFile('./config.js', configText, function(err){
//     if (err) throw err;
//     console.log('---------- Записан новый config.js');
//   });
// }

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
 * @param  {string} ext    Расширение файлов, которое проверяется
 * @return {array}         Массив из имён блоков
 */
function getDirectories(ext) {
  let source = dir.blocks;
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
