'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const autoprefixer = require('gulp-autoprefixer');
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

// Запуск `NODE_ENV=production gulp [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Компиляция LESS
gulp.task('less', function () {
  console.log('---------- компиляция LESS');
  return gulp.src('src/less/style.less')
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(debug({title: "LESS:"}))
    .pipe(less())
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
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
    .pipe(gulp.dest('build/'));
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
  gulp.parallel('less', 'copy:css', 'img', 'svgstore'),
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
});



// Задача по умолчанию
gulp.task('default', gulp.series('build', 'watch'));
