'use strict';

// Получение настроек папок из package.json
const pjson = require('./package.json');
const dirs = pjson.config.directories;
const ghPagesUrl = pjson.config.ghPages;

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
const size = require('gulp-size');
const fs = require('fs');

// Запуск `NODE_ENV=production npm start [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Запуск `port=3004 npm start` приведет к запуску сервера обновлений на 3004 порту и всей обычной автоматизации
const port = process.env.port ? process.env.port : 3000;

// Файлы компилируемых компонентов
let blocks = getComponentsFiles();

// Вывод в консоль информации о взятых в сборку файлах (без LESS)
if(blocks.js.length) {
  console.log('---------- В сборку и обработку взяты JS-файлы (указана последовательность):');
  console.log(blocks.js);
}
if(blocks.img.length) {
  console.log('---------- В сборку и обработку взяты изображения:');
  console.log(blocks.img);
}
if(blocks.additionalCss.length) {
  console.log('---------- В сборку скопированы добавочные CSS:');
  console.log(blocks.additionalCss);
}



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
        mqpacker({
          sort: true
        }),
    ]))
    .pipe(gulpIf(!isDev, cleanss()))
    .pipe(rename('style.min.css'))
    .pipe(debug({title: "RENAME:"}))
    .pipe(gulpIf(isDev, sourcemaps.write('/')))
    .pipe(size({
      title: 'Размер',
      showFiles: true,
      showTotal: false,
    }))
    .pipe(gulp.dest(dirs.build + '/css'))
    .pipe(browserSync.stream());
});

// Компиляция LESS для документации
gulp.task('less:docs', function () {
  console.log('---------- Компиляция LESS для документации');
  return gulp.src('src/docs-files/docs.less')
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
    .pipe(rename('docs.css'))
    .pipe(gulp.dest('src/docs-files/'))
    .pipe(browserSync.stream());
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

// Оптимизация изображений // folder=src/img/icons/ npm start img:opt
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

// Копирование шрифтов
gulp.task('fonts:copy', function () {
  console.log('---------- Копирование шрифтов');
  return gulp.src(dirs.source + '/fonts/*.{ttf,woff,woff2,eot,svg}', {since: gulp.lastRun('fonts:copy')})
    .pipe(newer(dirs.build + '/fonts'))  // оставить в потоке только изменившиеся файлы
    .pipe(size({
      title: 'Размер',
      showFiles: true,
      showTotal: false,
    }))
    .pipe(gulp.dest(dirs.build + '/fonts'));
});

// Сборка SVG-спрайта для блока sprite-svg--localstorage
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
      .pipe(size({
        title: 'Размер',
        showFiles: true,
        showTotal: false,
      }))
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
      .pipe(gulpIf(isDev, sourcemaps.init()))
      .pipe(concat('script.min.js'))
      .pipe(gulpIf(!isDev, uglify()))
      .on('error', notify.onError(function(err){
        return {
          title: 'Javascript uglify error',
          message: err.message
        }
      }))
      .pipe(gulpIf(isDev, sourcemaps.write('.')))
      .pipe(size({
        title: 'Размер',
        showFiles: true,
        showTotal: false,
      }))
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
  gulp.parallel('less', 'less:docs', 'copy:css', 'img', 'js', 'js:copy', 'fonts:copy'),
  'html'
));

// Локальный сервер, слежение
gulp.task('serve', gulp.series('build', function() {
  browserSync.init({
    server: dirs.build,
    port: port,
    startPath: 'index.html'
  });
  gulp.watch([
    dirs.source + '/*.html',
    dirs.source + '/_include/*.html',
    dirs.source + '/blocks/**/*.html',
  ], gulp.series('html', reloader));
  gulp.watch(blocks.less, gulp.series('less'));
  gulp.watch('src/docs-files/docs.less', gulp.series('less:docs'));
  if(blocks.img) {
    gulp.watch(blocks.img, gulp.series('img', reloader));
  }
  if(blocks.js) {
    gulp.watch(blocks.js, gulp.series('js', reloader));
  }
  gulp.watch(dirs.source + '/fonts/*.{ttf,woff,woff2,eot,svg}', gulp.series('fonts:copy', reloader));
}));

// Отправка в GH pages (ветку gh-pages репозитория)
gulp.task('deploy', function() {
  console.log('---------- Публикация ./build/ на GH pages');
  console.log('---------- '+ ghPagesUrl);
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

// Задача по умолчанию
gulp.task('default',
  gulp.series('serve')
);

// Перезагрузка в браузере
function reloader(done) {
  browserSync.reload();
  done();
}



// Определение собираемых компонентов
function getComponentsFiles() {

  // Создаем объект для служебных данных
  let сomponentsFilesList = {
    less: [],          // тут будут LESS-файлы в том же порядке, в котором они подключены
    js: [],            // тут будут JS-файлы в том же порядке, в котором подключены LESS-файлы
    img: [],           // тут будет массив из «путь_до_блока/img/*.{jpg,jpeg,gif,png,svg}» для всех импортируемых блоков
    additionalCss: [], // тут будут добавочные CSS-файлы блоков в том же порядке, в котором подключены LESS-файлы
  };

  // Читаем файл диспетчера подключений
  let connectManager = fs.readFileSync(dirs.source + '/less/style.less', 'utf8');

  // Делаем из строк массив, фильтруем массив, оставляя только строки с незакомментированными импортами
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
      let componentName = componentData[1];                                     // Название блока
      let blockDir = dirs.source + '/blocks/' + componentName;                  // Папка блока
      let componentFileName = componentData[3];                                 // Имя подключаемого файла без расширения
      let jsFile = blockDir + '/' + componentFileName + '.js';                  // Имя JS-файла, который нужно взять в сборку
      let cssFile = blockDir + '/' + componentFileName + '.css';                // Имя CSS-файла, который нужно обработать
      let imagesDir = blockDir + '/img';                                        // Папка с картинками, которую нужно взять в обработку

      // Добавляем в массив с результатом LESS-файл
      сomponentsFilesList.less.push(dirs.source + componentData[0] + '.' + componentData[4]);

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

  // Если хочется иметь jQuery в конкатенируемом JS, раскомментируйте эти строки
  // if(fileExistAndHasContent(dirs.source + '/js/jquery.js')) {
  //   сomponentsFilesList.js.unshift(dirs.source + '/js/jquery.js'); // добавляем в начало
  // }

  // Если хочется иметь в конкатенируемом JS ещё какие-то файлы, пишите это здесь
  // if(fileExistAndHasContent(dirs.source + '/js/file_name.js')) {
  //   сomponentsFilesList.js.unshift(dirs.source + '/js/file_name.js'); // добавляем в начало
  //   или
  //   сomponentsFilesList.js.push(dirs.source + '/js/file_name.js'); // добавляем в конец
  // }

  // Добавим глобальный CSS-файл в начало массива с обрабатываемыми CSS-файлами
  if(fileExistAndHasContent(dirs.source + '/css/global-css.css')) {
    сomponentsFilesList.additionalCss.unshift(dirs.source + '/css/global-css.css');
  }

  // Если хочется иметь в папке сборки какие-то еще отдельные CSS-файлы, пишите их здесь
  // if(fileExistAndHasContent(dirs.source + '/css/file_name.css')) {
  //   сomponentsFilesList.additionalCss.unshift(dirs.source + '/css/file_name.css');
  // }

  // Добавим глобальные изображения
  сomponentsFilesList.img.unshift(dirs.source + '/img/*.{jpg,jpeg,gif,png,svg}');
  сomponentsFilesList.img = uniqueArray(сomponentsFilesList.img);

  // Возвращаем объект со служебными данными
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
