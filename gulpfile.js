'use strict';

// Подключим зависимости
const fs = require('fs');
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const postcss = require('gulp-postcss');
const atImport = require("postcss-import")
const customProperties = require("postcss-custom-properties")
const autoprefixer = require("autoprefixer")
const notify = require('gulp-notify');
const gulpIf = require('gulp-if');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const cleanss = require('gulp-cleancss');
const rename = require('gulp-rename');
const size = require('gulp-size');
const del = require('del');

// Получим настройки проекта из package.json
let pjson = require('./package.json');
let dirs = pjson.configProject.dirs;
let lists = getFilesList(pjson.configProject);
console.log('---------- Файлы и папки, взятые в работу:');
console.log(lists);

// Запишем стилевой файл диспетчер подключений
let styleImports = '';
lists.css.forEach(function(blockPath) {
  styleImports += '@import url('+blockPath+');\n';
});
fs.writeFileSync('./src/css/style.css', styleImports);

// Запуск `NODE_ENV=production npm start [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Очистка папки сборки
gulp.task('clean', function () {
  console.log('---------- Очистка папки сборки');
  return del([
    dirs.buildPath + '/**/*',
    '!' + dirs.buildPath + '/readme.md'
  ]);
});

// Компиляция стилей
gulp.task('style', function () {
  console.log('---------- Компиляция стилей');
  return gulp.src('./src/css/style.css')
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(debug({title: "Style:"}))
    .pipe(postcss([
      // customProperties({preserve: true}),
      atImport({resolve: function(id, basedir, importOptions){return basedir+id.replace(/^\.\/src\/css/,'');}}),
      autoprefixer({browsers: ['last 2 version']}),
      // mqpacker({
      //   sort: true
      // }),
    ]))
    .on('error', notify.onError(function(err){
      return {
        title: 'Styles compilation error',
        message: err.message
      }
    }))
    .pipe(gulpIf(!isDev, cleanss()))
    .pipe(rename('style.min.css'))
    .pipe(gulpIf(isDev, sourcemaps.write('/')))
    .pipe(size({
      title: 'Размер',
      showFiles: true,
      showTotal: false,
    }))
    .pipe(gulp.dest(dirs.buildPath + '/css'));
    // .pipe(browserSync.stream());
});

/**
 * Вернет объект с обрабатываемыми файлами и папками
 * @param  {object}
 * @return {object}
 */
function getFilesList(config){

  let res = {
    'css': [],
    'js': [],
    'img': [],
  };

  // CSS
  for (let blockName in config.blocks) {
    res.css.push(config.dirs.srcPath + config.dirs.blocksDirName + '/' + blockName + '/' + blockName + '.css');
    if(config.blocks[blockName].length) {
      config.blocks[blockName].forEach(function(elementName) {
        res.css.push(config.dirs.srcPath + config.dirs.blocksDirName + '/' + blockName + '/' + blockName + elementName + '.css');
      });
    }
  }
  res.css = res.css.concat(config.addCssAfter);
  res.css = config.addCssBefore.concat(res.css);

  // JS
  for (let blockName in config.blocks) {
    res.js.push(config.dirs.srcPath + config.dirs.blocksDirName + '/' + blockName + '/' + blockName + '.js');
    if(config.blocks[blockName].length) {
      config.blocks[blockName].forEach(function(elementName) {
        res.js.push(config.dirs.srcPath + config.dirs.blocksDirName + '/' + blockName + '/' + blockName + elementName + '.js');
      });
    }
  }
  res.js = res.js.concat(config.addJsAfter);
  res.js = config.addJsBefore.concat(res.js);

  // Images
  for (let blockName in config.blocks) {
    res.img.push(config.dirs.srcPath + config.dirs.blocksDirName + '/' + blockName + '/img');
  }
  res.img = config.addImages.concat(res.img);

  return res;
}
