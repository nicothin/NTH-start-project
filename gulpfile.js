'use strict';

const fs = require('fs');

// Настройки из файла
let config = require('./config.js');
// Директории из настроек (dir.src = "./src/", dir.build = "./build/", dir.blocks = "./src/blocks/")
let dir = config.dir;
// Список блоков, который будет получен из классов HTML после компиляции pug
let blocksList = [];
// Адрес репозитория
let repoUrl = require('./package.json').repository.url.replace(/\.git$/g, '');

// Пакеты, использующиеся при обработке
const { series, parallel, src, dest, watch } = require('gulp');
const plumber = require('gulp-plumber');
const del = require('del');
const pug = require('gulp-pug');
const through2 = require('through2');
const replace = require('gulp-replace');
const getClassesFromHtml = require('get-classes-from-html');



function compilePug() {

  // Pug-фильтр, выводящий содержимое pug-файла в виде форматированного текста
  const filterShowCode = function (text, options) {
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

  return src([
      dir.src + '*.pug',
    ])
    .pipe(plumber())
    .pipe(pug({
      data: {
        // Передаем pug-у адрес репозитория проекта
        repoUrl: repoUrl,
      },
      filters: {
        // Фильтр используется на странице библиотеки блоков
        'show-code': filterShowCode
      },
    }))
    .pipe(through2.obj(getClassesToBlocksList))
    .on('end', function(){
      console.log(blocksList);
    })
    .pipe(dest(dir.build));
}
exports.compilePug = compilePug;



function clearBuildDir() {
  return del([
    dir.build + '/**/*',
    '!' + dir.build + '/readme.md'
  ]);
}
exports.clearBuildDir = clearBuildDir;





// Функции, не являющиеся задачами Gulp ----------------------------------------

/**
 * Добавляет список классов из принятого HTML в переменную blocksList, используется в потоке обработки Pug.
 * Крива и безрука, ибо требует существования глобальных переменных, с которыми работает.
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
  config.notGetBlocks.forEach(function(item) {
    if (file.relative.trim() == item.trim()) processThisFile = false;
  });
  // Файл не исключён из обработки, погнали
  if(processThisFile){
    const fileContent = file.contents.toString();
    let classesInFile = getClassesFromHtml(fileContent);
    // Обойдём все найденные классы
    for (let item of classesInFile) {
      // Если это не Блок или этот Блок уже присутствует, не будем добавлять
      if ((item.indexOf('__') + 1 !== 0) || (item.indexOf('--') + 1 !== 0) || (blocksList.indexOf(item) + 1)) continue;
      // Если этот класс совпадает с классом-исключением из настроек, не будем добавлять
      if( config.ignoredBlocks.indexOf(item) + 1 ) continue;
      // Добавляем
      blocksList.push(item);
    }
    file.contents = new Buffer(fileContent);
  }
  this.push(file);
  cb();
}
