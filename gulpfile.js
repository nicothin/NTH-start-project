'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const del = require('del');

// Копирование добавочных CSS, который нужно иметь отдельными файлами в папке сборки
gulp.task('copy:css', function() {
  return gulp.src('src/css/*.css', {read: false}) // читать содержимое не нужно
    .pipe(gulp.dest('build/css'));
});

// Компиляция и обработка LESS
gulp.task('less', function () {
  return gulp.src('src/less/style.less')
    .pipe(sourcemaps.init())
    .pipe(debug({title: "LESS:"}))
    .pipe(less())
    .pipe(cssnano())
    .pipe(rename('style.min.css'))
    .pipe(debug({title: "RENAME:"}))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build/css'));
});

// Очистка папки сборки
gulp.task('clean:build', function () {
  return del([
    'build/**/*',
    '!build/readme.md'
  ]);
});



gulp.task('build', gulp.series('clean:build', 'less'));
