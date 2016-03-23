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
const ghPages = require('gulp-gh-pages');
const fs = require('fs');

// Запуск `NODE_ENV=production npm start [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Запуск `port=3004 npm start` приведет к запуску сервера обновлений на 3004 порту и всей обычной автоматизации
const port = process.env.port ? process.env.port : 3000;

// Файлы компилируемых компонентов
let blocks = getComponentsFiles();
console.log('---------- Список задействованных ресурсов:');
console.log(blocks);



// Компиляция LESS
gulp.task('less', function () {
  console.log('---------- Компиляция LESS');
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
    .pipe(gulpIf(!isDev, cleanss()))
    .pipe(rename('style.min.css'))
    .pipe(debug({title: "RENAME:"}))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(gulp.dest(dirs.build + '/css'));
});

// Копирование добавочных CSS, которые хочется иметь отдельными файлами
gulp.task('copy:css', function(callback) {
  if(blocks.additionalCss.length > 0) {
    console.log('---------- копирование CSS');
    return gulp.src(blocks.additionalCss, {since: gulp.lastRun('copy:css')})
      .pipe(postcss([
          autoprefixer({browsers: ['last 2 version']}),
          mqpacker
      ]))
      .pipe(cleanss())
      .pipe(rename(function (path) {
        path.basename = 'additional-styles',
        path.extname = '.min.css'
      }))
      .pipe(debug({title: "RENAME:"}))
      .pipe(gulp.dest(dirs.build + '/css'));
  }
  else {
    console.log('---------- Копирование CSS: нет дополнительного CSS');
    callback();
  }
});

// Копирование и оптимизация изображений
gulp.task('img', function () {
  console.log('---------- Копирование и оптимизация картинок');
  return gulp.src(blocks.img, {since: gulp.lastRun('img')}) // только для изменившихся с последнего запуска файлов
    .pipe(newer(dirs.build + '/img'))  // оставить в потоке только изменившиеся файлы
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest(dirs.build + '/img'));
});

// Оптимизация изображений // folder=src/blocks/block-name/img_to_bg/ npm start img:opt
const folder = process.env.folder;
gulp.task('img:opt', function (callback) {
  if(folder){
    console.log('---------- Оптимизация картинок');
    return gulp.src(folder + '/*.{jpg,jpeg,gif,png,svg}')
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
      .pipe(gulp.dest(folder));
  }
  else {
    console.log('---------- Оптимизация картинок: ошибка (не указана папка)');
    console.log('---------- Пример вызова команды: folder=src/blocks/block-name/img_to_bg/ npm start img:opt');
    callback();
  }
});

// Сборка SVG-спрайта
gulp.task('svgstore', function (callback) {
  let spritePath = dirs.source + '/blocks/sprite-svg--localstorage/svg/';
  if(fileExist(spritePath) !== false) {
    console.log('---------- Сборка SVG спрайта');
    return gulp.src(spritePath + '*.svg')
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
      .pipe(rename('sprite-svg--ls.svg'))
      .pipe(gulp.dest(dirs.source + '/blocks/sprite-svg--localstorage/img'));
  }
  else {
    console.log('---------- Сборка SVG спрайта: нет папки с картинками');
    callback();
  }
});

// Сборка HTML
gulp.task('html', function() {
  console.log('---------- сборка HTML');
  return gulp.src(dirs.source + '/*.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      indent: true,
    }))
    .pipe(replace(/\n\s*<!--DEV[\s\S]+?-->/gm, ''))
    .pipe(gulp.dest(dirs.build));
});

// Конкатенация и углификация Javascript
gulp.task('js', function (callback) {
  if(blocks.js.length > 0){
    console.log('---------- Обработка JS');
    return gulp.src(blocks.js)
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
  }
  else {
    console.log('---------- Обработка JS: в сборке нет JS-файлов');
    callback();
  }
});

// Копирование JS-библиотек (если есть)
gulp.task('js:copy', function (callback) {
  let jsLibs = [];
  if(fileExistAndHasContent(dirs.source + '/js/jquery.js')) {
    jsLibs.push(dirs.source + '/js/jquery.js');
  }
  if(jsLibs){
    console.log('---------- Копирование JS-библиотек');
    return gulp.src(jsLibs)
      .pipe(gulp.dest(dirs.build + '/js'));
  }
  else {
    callback();
  }
});

// Очистка папки сборки
gulp.task('clean', function () {
  console.log('---------- Очистка папки сборки');
  return del([
    dirs.build + '/**/*',
    '!' + dirs.build + '/readme.md'
  ]);
});

// Сборка всего
gulp.task('build', gulp.series(
  'clean',
  'svgstore',
  gulp.parallel('less', 'copy:css', 'img', 'js', 'js:copy'),
  'html'
));

// Слежение
gulp.task('watch', function () {
  // Слежение за HTML
  gulp.watch([
    dirs.source + '/*.html',
    dirs.source + '/_include/*.html',
    dirs.source + '/blocks/**/*.html',
  ], gulp.series('html'));
  // Слежение за LESS (они точно есть)
  gulp.watch(blocks.less, gulp.series('less'));
  // Слежение за добавочными CSS, если нужно
  if(blocks.additionalCss) {
    gulp.watch(blocks.additionalCss, gulp.series('copy:css'));
  }
  // Слежение за изображениями, если нужно
  if(blocks.img) {
    gulp.watch(blocks.img, gulp.series('img'));
  }
  // Слежение за Javascript, если нужно
  if(blocks.js) {
    gulp.watch(blocks.js, gulp.series('js'));
  }
});

// Локальный сервер
gulp.task('serve', function () {
  gulp.series('build');
  browserSync.init({
    server: dirs.build,
    port: port,
    startPath: 'blocks_library.html'
  });
  browserSync.watch([
    dirs.build + '/**/*.*',
    '!' + dirs.build +  + '/**/*.map.*'
  ]).on('change', browserSync.reload);
});

// Отправка в GH pages (ветку gh-pages репозитория)
gulp.task('deploy', function() {
  console.log('---------- Публикация ./build/ на GH pages');
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

// Задача по умолчанию
gulp.task('default',
  gulp.series('build', gulp.parallel('watch', 'serve'))
);



// Определение собираемых компонентов
function getComponentsFiles() {
  // Создаем объект для служебных данных
  let сomponentsFilesList = {
    less: [],          // тут будут LESS-файлы в том же порядке, в котором они подключены
    js: [],            // тут будут JS-файлы в том же порядке, в котором подключены LESS-файлы
    img: [],           // тут будет массив из «путь_до_блока/img/*.{jpg,jpeg,gif,png,svg}» для всех импортируемых блоков
    additionalCss: [], // тут будут добавочные CSS-файлы блоков в том же порядке, в котором подключены LESS-файлы
  };
  let jsLibs = []; // тут будут сторонние JS-файлы из используемых блоков (библиотеки), потом вставим в начало сomponentsFilesList.js
  // Читаем файл диспетчера подключений
  let connectManager = fs.readFileSync(dirs.source + '/less/style.less', 'utf8');
  // Фильтруем массив, оставляя только строки с незакомментированными импортами
  let fileSystem = connectManager.split('\n').filter(function(item) {
    if(/^(\s*)@import/.test(item)) return true;
    else return false;
  });
  // Обойдём массив и запишем его части в объект результирующей переменной
  fileSystem.forEach(function(item, i) {
    // Попробуем вычленить блок из строки импорта
    let componentData = /\/blocks\/(.+?)(\/)(.+?)(?=.(less|css))/g.exec(item);
    // Если это блок и получилось извлечь имя файла
    if (componentData !== null && componentData[3]) {
      // Название блока (название папки)
      let componentName = componentData[1];
      // Папка блока
      let blockDir = dirs.source + '/blocks/' + componentName;
      // Имя подключаемого файла без расширения
      let componentFileName = componentData[3];
      // Имя JS-файла, который нужно взять в сборку, если он существует
      let jsFile = blockDir + '/' + componentFileName + '.js';
      // Имя CSS-файла, который нужно обработать, если он существует
      let cssFile = blockDir + '/' + componentFileName + '.css';
      // Папка с картинками, которую нужно взять в обработку, если она существует
      let imagesDir = blockDir + '/img';
      // Добавляем в массив с результатом LESS-файл
      сomponentsFilesList.less.push(dirs.source + componentData[0] + '.' + componentData[4]);
      // Если в папке блока есть сторонние JS-файлы — добавляем их в массив с результатом (это библиотеки)
      let blockFiles = fs.readdirSync(blockDir); // список файлов
      let reg = new RegExp(componentName + '(\.|--)', '');
      blockFiles.forEach(function(file, i) {
        if(/\.js$/.test(file) && !reg.test(file)) {
          if(fileExistAndHasContent(blockDir + '/' + file)) {        // и если он существует и не пуст
            jsLibs.push(blockDir + '/' + file);  // добавим в массив библиотек
          }
        }
      });
      jsLibs = uniqueArray(jsLibs); // уникализируем массив библиотек
      // Если существует JS-файл — добавляем его в массив с результатом
      if(fileExistAndHasContent(jsFile)) {
        сomponentsFilesList.js.push(jsFile);
      }
      // Если существует CSS-файл — добавляем его в массив с результатом
      if(fileExistAndHasContent(cssFile)) {
        сomponentsFilesList.additionalCss.push(cssFile);
      }
      // Если есть папка с изображениями, добавляем её в массив с результатом
      if(fileExist(imagesDir) !== false) {
        сomponentsFilesList.img.push(imagesDir + '/*.{jpg,jpeg,gif,png,svg}');
      }
    }
  });
  // Добавим глобальныe LESS-файлы в массив с обрабатываемыми LESS-файлами
  сomponentsFilesList.less.push(dirs.source + '/less/**/*.less');
  // Добавим глобальный JS-файл в начало массива с обрабатываемыми JS-файлами
  if(fileExistAndHasContent(dirs.source + '/js/global-script.js')) {
    сomponentsFilesList.js.unshift(dirs.source + '/js/global-script.js');
  }
  // Добавим JS-библиотеки (если есть) в начало списка JS-файлов
  if(jsLibs) {
    сomponentsFilesList.js = jsLibs.concat(сomponentsFilesList.js);
  }
  // if(fileExistAndHasContent(dirs.source + '/js/jquery.js')) {
  //   сomponentsFilesList.js.unshift(dirs.source + '/js/jquery.js');
  // }
  // Добавим глобальный CSS-файл в начало массива с обрабатываемыми CSS-файлами
  if(fileExistAndHasContent(dirs.source + '/css/global-additional-css.css')) {
    сomponentsFilesList.additionalCss.unshift(dirs.source + '/css/global-additional-css.css');
  }
  // Добавим глобальные изображения
  сomponentsFilesList.img.unshift(dirs.source + '/img/*.{jpg,jpeg,gif,png,svg}');
  сomponentsFilesList.img = uniqueArray(сomponentsFilesList.img);
  return сomponentsFilesList;
}

// Проверка существования файла и его размера (размер менее 2байт == файла нет)
function fileExistAndHasContent(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
    if(fs.statSync(path).size > 1) return true;
    else return false;
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
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
