'use strict';

// Получение настроек папок из package.json
const pjson = require('./package.json');
const dirs = pjson.config.directories;

// Зависимости проекта
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
const fs = require('fs');

// Запуск `NODE_ENV=production gulp [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Запуск `port=3004 gulp [задача]` приведет к запуску сервера обновлений на 3004 порту
const port = process.env.port ? process.env.port : 3000;

// Файлы компилируемых компонентов
let components = getComponentsFiles();
console.log('---------- Список добавочных js/css-файлов и адресов картинок для копирования');
console.log(components);



// Компиляция LESS
gulp.task('less', function () {
  console.log('---------- компиляция LESS');
  return gulp.src(dirs.source + '/less/style.less')
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
    .pipe(gulp.dest(dirs.build + '/css'));
});

// Копирование добавочных CSS, которые хочется иметь отдельными файлами
gulp.task('copy:css', function() {
  console.log('---------- копирование CSS');
  return gulp.src(components.css, {since: gulp.lastRun('copy:css')})
    .pipe(postcss([
        autoprefixer({browsers: ['last 2 version']}),
        mqpacker
    ]))
    .pipe(cleanss())
    .pipe(rename(function (path) {
      path.extname = '.min.css'
    }))
    .pipe(debug({title: "RENAME:"}))
    .pipe(gulp.dest(dirs.build + '/css'));
});

// Копирование и оптимизация изображений
gulp.task('img', function () {
  console.log('---------- копирование и оптимизация картинок');
  return gulp.src(components.img, {since: gulp.lastRun('img')}) // только для изменившихся с последнего запуска файлов
    .pipe(newer(dirs.build + '/img'))  // оставить в потоке только изменившиеся файлы
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(dirs.build + '/img'));
});

// TEMP: Оптимизация изображений для форм
// gulp.task('img:form', function () {
//   console.log('---------- Оптимизация картинок для компонента форм');
//   return gulp.src(dirs.source + '/img/form_field_bg/*.svg')
//     .pipe(imagemin({
//         progressive: true,
//         svgoPlugins: [{removeViewBox: false}],
//     }))
//     .pipe(gulp.dest(dirs.source + '/img/form_field_bg'));
// });

// Сборка SVG-спрайта
gulp.task('svgstore', function () {
  console.log('---------- сборка SVG спрайта');
  return gulp.src(dirs.source + '/img/svg_sprite/*.svg')
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
    .pipe(gulp.dest(dirs.build + '/img'));
});

// Сборка HTML
gulp.task('html', function() {
  console.log('---------- сборка HTML');
  return gulp.src(dirs.source + '/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(replace(/\n<!--DEVCOMMENT[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(dirs.build));
});

// Конкатенация и углификация Javascript
gulp.task('js', function () {
  console.log('---------- обработка Javascript');
  return gulp.src(components.js)
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
    .pipe(gulp.dest(dirs.build + '/js'));
});

// Очистка папки сборки
gulp.task('clean', function () {
  return del([
    dirs.build + '/**/*',
    '!' + dirs.build + '/readme.md'
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
  gulp.watch([
    dirs.source + '/*.html',
    dirs.source + '/_include/*.html',
    // dirs.blocks + '/**/*.html', // пока не предполагается использовать html-файлы блоков иначе как для документирования
  ], gulp.series('html'));
  // Слежение за LESS
  gulp.watch([
    dirs.source + '/less/**/*.less',
    dirs.blocks + '/**/*.less',
  ], gulp.series('less'));
  // Слежение за добавочными CSS
  gulp.watch([
    dirs.source + '/css/*.css',
    dirs.blocks + '/**/*.css',
  ], gulp.series('copy:css'));
  // Слежение за изображениями
  gulp.watch([
    dirs.source + '/img/*.{jpg,jpeg,gif,png,svg}',
    dirs.blocks + '/**/img/*.{jpg,jpeg,gif,png,svg}'
  ], gulp.series('img'));
  // Слежение за Javascript
  gulp.watch([
    dirs.source + '/**/*.js',
    dirs.blocks + '/**/*.js',
  ], gulp.series('js'));
});

// Локальный сервер
gulp.task('serve', function () {
  gulp.series('build');
  browserSync.init({
    server: dirs.build,
    port: port,
    notify: false,
    startPath: '_blocks_library.html'
  });
  browserSync.watch([dirs.build + '/**/*.*', '!' + dirs.build +  + '/**/*.map.*']).on('change', browserSync.reload);
});

// Задача по умолчанию
gulp.task('default',
  gulp.series('build', gulp.parallel('watch', 'serve'))
);

// Определение собираемых компонентов
function getComponentsFiles() {
  // Создаем объект для списка файлов компонентов
  let сomponentsFilesList = {
    js: [],  // тут будут JS-файлы компонент в том же порядке, в котором подключены less-файлы
    img: [], // тут будет массив из «путь_до_компонента/img/*.{jpg,jpeg,gif,png,svg}» для всех импортируемых компонент
    css: [], // тут будут CSS-файлы компонент в том же порядке, в котором подключены less-файлы
  };
  // Читаем файл диспетчера подключений
  let connectManager = fs.readFileSync(dirs.source + '/less/style.less', 'utf8');
  // Фильтруем массив, оставляя только строки с незакомментированными импортами
  let fileSystem = connectManager.split('\n').filter(function(item) {
    if(/^(\s*)@import/.test(item)) return true;
    else return false;
  });
  // Обойдём массив и запишем его части в объект результирующей переменной
  fileSystem.forEach(function(item, i) {
    // Попробуем вычленить компонент из строки импорта
    let componentData = /\/blocks\/(.+?)(\/)(.+?)(?=.(less|css))/g.exec(item);
    // Если это компонент и получилось извлечь имя файла
    if (componentData !== null && componentData[3]) {
      // Название компонента (название папки)
      let componentName = componentData[1];
      // Имя подключаемого файла без расширения
      let componentFileName = componentData[3];
      // Имя JS-файла, который нужно взять в сборку в этой итерации, если он существует
      let jsFile = dirs.blocks + '/' + componentName + '/' + componentFileName + '.js';
      // Имя CSS-файла, который нужно взять в сборку в этой итерации, если он существует
      let cssFile = dirs.blocks + '/' + componentName + '/' + componentFileName + '.css';
      // Если существует JS-файл — берём его в массив
      if(fileExist(jsFile)) {
        сomponentsFilesList.js.push(jsFile);
      }
      // Если существует CSS-файл — берём его в массив
      if(fileExist(cssFile)) {
        сomponentsFilesList.css.push(cssFile);
      }
      // Берём в массив изображения
      сomponentsFilesList.img.push(dirs.blocks + '/' + componentName + '/img/*.{jpg,jpeg,gif,png,svg}');
    }
  });
  // Добавим глобальный JS-файл в начало массива с обрабатываемыми JS-файлами
  if(fileExist(dirs.source + '/js/global_script.js')) {
    сomponentsFilesList.js.unshift(dirs.source + '/js/global_script.js');
  }
  // Добавим глобальный CSS-файл в начало массива с обрабатываемыми CSS-файлами
  if(fileExist(dirs.source + '/css/global_additional-css.css')) {
    сomponentsFilesList.css.unshift(dirs.source + '/css/global_additional-css.css');
  }
  // Добавим глобальные изображения
  сomponentsFilesList.img.unshift(dirs.source + '/img/*.{jpg,jpeg,gif,png,svg}');
  сomponentsFilesList.img = uniqueArray(сomponentsFilesList.img);
  return сomponentsFilesList;
}

// Проверка существования файла и его размера (размер менее 2байт == файла нет)
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
    if(fs.statSync(path).size > 1) return true;
    else return false;
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  var objectTemp = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}
