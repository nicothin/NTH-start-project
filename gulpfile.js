'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const gulpIf = require('gulp-if');
const del = require('del');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');
const cheerio = require('gulp-cheerio');

// Запуск `NODE_ENV=production gulp [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Компиляция LESS
gulp.task('less', function () {
  console.log('---------- компиляция LESS');
  return gulp.src('src/less/style.less')
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(debug({title: "LESS:"}))
    .pipe(less())
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(debug({title: "RENAME:"}))
    .pipe(gulpIf(isDev, sourcemaps.write('.')))
    .pipe(gulpIf(isDev, debug({title: "SOURCEMAPS:"})))
    .pipe(gulp.dest('build/css'));
});

// Копирование добавочных CSS, которые хочется иметь отдельными файлами
gulp.task('copy:css', function() {
  console.log('---------- копирование CSS');
  return gulp.src('src/css/*.css', {since: gulp.lastRun('copy:css')})
    .pipe(cssnano({
      discardUnused: false // не удалять неиспользованные конструкции
    }))
    .pipe(rename(function (path) {
      path.extname = '.min.css'
    }))
    .pipe(debug({title: "RENAME:"}))
    .pipe(gulp.dest('build/css'));
});

// Копирование и оптимизация изображений
gulp.task('img', function () {
  return gulp.src('src/img/*.{jpg,jpeg,gif,png,svg}')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('build/img'));
});

// Сборка SVG-спрайта
gulp.task('svgstore', function () {
  return gulp
    .src('src/img/svg_sprite/*.svg')
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

// Очистка папки сборки
gulp.task('clean', function () {
  return del([
    'build/**/*',
    '!build/readme.md'
  ]);
});



// Сборка
gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('less', 'copy:css', 'img', 'svgstore')
));




// Слежение за LESS
// gulp.watch('src/less/**/*.less', gulp.series('less'));

// Слежение за добавочными CSS
// gulp.watch('src/css/*.css', gulp.series('copy:css'));
