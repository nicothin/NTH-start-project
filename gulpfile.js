'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const cleanss = require('gulp-cleancss');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const mqpacker = require('css-mqpacker');
const rename = require('gulp-rename');
const gulpIf = require('gulp-if');
const del = require('del');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');
const cheerio = require('gulp-cheerio');
const fileinclude = require('gulp-file-include');
const newer = require('gulp-newer');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const replace = require('gulp-replace');

// Запуск `NODE_ENV=production gulp [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Компиляция LESS
gulp.task('less', function () {
  console.log('---------- компиляция LESS');
  return gulp.src('src/less/style.less')
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(debug({title: "LESS:"}))
    .pipe(less())
    .on('error', notify.onError(function(err){
      return {
        title: 'Styles compilation error',
        message: err.message
      }
    }))
    .pipe(postcss([
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker
    ]))
    .pipe(cleanss())
    .pipe(rename('style.min.css'))
    .pipe(debug({title: "RENAME:"}))
    .pipe(gulpIf(isDev, sourcemaps.write('.')))
    .pipe(gulp.dest('build/css'));
});

// Копирование добавочных CSS, которые хочется иметь отдельными файлами
gulp.task('copy:css', function() {
  console.log('---------- копирование CSS');
  return gulp.src('src/css/*.css', {since: gulp.lastRun('copy:css')})
    .pipe(postcss([
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker
    ]))
    .pipe(cleanss())
    .pipe(rename(function (path) {
      path.extname = '.min.css'
    }))
    .pipe(debug({title: "RENAME:"}))
    .pipe(gulp.dest('build/css'));
});

// Копирование и оптимизация изображений
gulp.task('img', function () {
  console.log('---------- копирование и оптимизация картинок');
  return gulp.src('src/img/*.{jpg,jpeg,gif,png,svg}', {since: gulp.lastRun('img')}) // только для изменившихся с последнего запуска файлов
    .pipe(newer('build/img'))  // оставить в потоке только изменившиеся файлы
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('build/img'));
});

// Сборка SVG-спрайта
gulp.task('svgstore', function () {
  console.log('---------- сборка SVG спрайта');
  return gulp.src('src/img/svg_sprite/*.svg')
    .pipe(svgmin(function (file) {
      return {
        plugins: [{
          cleanupIDs: {
            minify: true
          }
        }]
      }
    }))
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(cheerio(function ($) {
      $('svg').attr('style',  'display:none');
    }))
    .pipe(gulp.dest('build/img'));
});

// Сборка HTML
gulp.task('html', function() {
  console.log('---------- сборка HTML');
  return gulp.src('src/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(replace(/\n<!--DEVCOMMENT[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest('build/'));
});

// Конкатенация и углификация Javascript
gulp.task('js', function () {
  console.log('---------- обработка Javascript');
  return gulp.src([
      // Последовательность конкатенации
      'src/js/script.js'
    ])
    .pipe(debug({title: "JS:"}))
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .on('error', notify.onError(function(err){
      return {
        title: 'Javascript uglify error',
        message: err.message
      }
    }))
    .pipe(gulpIf(isDev, sourcemaps.write('.')))
    .pipe(gulpIf(isDev, debug({title: "JS SOURCEMAPS:"})))
    .pipe(gulp.dest('build/js'));
});

// Очистка папки сборки
gulp.task('clean', function () {
  return del([
    'build/**/*',
    '!build/readme.md'
  ]);
});

// Сборка всего
gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('less', 'copy:css', 'img', 'svgstore', 'js'),
  'html'
));

// Слежение
gulp.task('watch', function () {
  // Слежение за HTML
  gulp.watch(['src/*.html', 'src/_include/*.html'], gulp.series('html'));
  // Слежение за LESS
  gulp.watch('src/less/**/*.less', gulp.series('less'));
  // Слежение за добавочными CSS
  gulp.watch('src/css/*.css', gulp.series('copy:css'));
  // Слежение за изображениями
  gulp.watch('src/img/*.{jpg,jpeg,gif,png,svg}', gulp.series('img'));
  // Слежение за Javascript
  gulp.watch('src/js/*.js', gulp.series('js'));
});

// Локальный сервер
gulp.task('serve', function () {
  gulp.series('build');
  browserSync.init({
    server: 'build',
    notify: false,
    startPath: '_blocks_library.html'
  });
  browserSync.watch('build/**/*.*').on('change', browserSync.reload);
});

// Задача по умолчанию
gulp.task('default',
  gulp.series('build', gulp.parallel('watch', 'serve'))
);
