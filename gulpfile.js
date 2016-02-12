'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const debug = require('gulp-debug');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const gulpIf = require('gulp-if');
const del = require('del');

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
      discardUnused: false // не удалять несипользованные конструкции
    }))
    .pipe(rename(function (path) {
      path.extname = '.min.css'
    }))
    .pipe(debug({title: "RENAME:"}))
    .pipe(gulp.dest('build/css'));
});

// Очистка папки сборки
gulp.task('clean:build', function () {
  return del([
    'build/**/*',
    '!build/readme.md'
  ]);
});



// Сборка
gulp.task('build', gulp.series(
  'clean:build',
  gulp.parallel('less', 'copy:css')
));




// Слежение за LESS
gulp.watch('src/less/**/*.less', gulp.series('less'));

// Слежение за добавочными CSS
gulp.watch('src/css/*.css', gulp.series('copy:css'));
