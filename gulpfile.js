'use strict';

// Настройки из файла
let config = require('./config.js');
// Директории из настроек (dir.src = "./src/", dir.build = "./build/", dir.blocks = "./src/blocks/")
let dir = config.dir;
// Список блоков, который будет получен из классов HTML после компиляции pug
let blocksList = [];
// Старый список блоков в виде строки
let oldBlocksListString = JSON.stringify(config.blocks);
// Адрес репозитория
let repoUrl = require('./package.json').repository.url.replace(/\.git$/g, '');

// Пакеты, использующиеся при обработке
const { series, parallel, src, dest, watch } = require('gulp');
const fs = require('fs');
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
      if(blocksList.length) {
        // Убрать из списка блоков те элементы, которых нет в списке блоков, полученном из HTML
        config.blocks = config.blocks.filter(item => blocksList.indexOf(item) >= 0);
        // Добавить в конец списка блоков те элементы, которые использованы в HTML, но отсутствуют в списке
        Array.prototype.push.apply(config.blocks, getArraysDiff(blocksList, config.blocks));
        console.log(config.blocks); // Имеем список использованных сейчас на проекте блоков
        // Если есть изменения списка блоков, нужно записать конфиг на диск
        if(oldBlocksListString != JSON.stringify(config.blocks)) {
          console.log('Есть изменения списка используемых блоков');
        }
      }
      else {
        console.log('---------- В проекте нет блоков. Сурово. По-челябински.');
      }
    })
    .pipe(dest(dir.build));
}
exports.compilePug = compilePug;


function writeMainStyleFile(cb) {
  console.log('111');
  cb();
}
exports.writeMainStyleFile = writeMainStyleFile;


function clearBuildDir() {
  return del([
    dir.build + '/**/*',
    '!' + dir.build + '/readme.md'
  ]);
}
exports.clearBuildDir = clearBuildDir;



// Функции, не являющиеся задачами Gulp ----------------------------------------

/**
 * Получение дефолтных файлов блока (стили, JS, картинки, доп. файлы)
 * @param  {string} block     Искомый блок
 * @param  {string} blocksDir Директория, в которой лежат все блоки
 * @return {object}           Объект с соотв. путями, если они существуют { "style": [], "js": [], "img": [], "assets": [] }
 */
// function getBlockDefaultFiles(block, blocksDir = dir.blocks) {
//   let res = {};
//   // Существует дефолтный стилевой файл?
//   let defaultStyleFilePath = blocksDir + block + '/' + block + '.scss';
//   fileExist(defaultStyleFilePath) ? res.style = [defaultStyleFilePath] : res.style = [];
//   // Существует дефолтный JS-файл?
//   let defaultJsFilePath = blocksDir + block + '/' + block + '.js';
//   fileExist(defaultJsFilePath) ? res.js = [defaultJsFilePath] : res.js = [];
//   // Существует дефолтная папка с картинками?
//   let defaultImgFolderPath = blocksDir + block + '/img/';
//   fileExist(defaultImgFolderPath) ? res.img = [defaultImgFolderPath] : res.img = [];
//   // Существует дефолтная папка с доп. файлами?
//   let defaultAssetsFolderPath = blocksDir + block + '/assets/';
//   fileExist(defaultAssetsFolderPath) ? res.assets = [defaultAssetsFolderPath] : res.assets = [];
//   return res;
// }

/**
 * Проверка существования файла или папки
 * @param  {string} path      Путь до файла или папки
 * @return {boolean}
 */
function fileExist(filepath){
  let flag = true;
  try{
    fs.accessSync(filepath, fs.F_OK);
  }catch(e){
    flag = false;
  }
  return flag;
}

/**
 * Получение разницы между двумя массивами.
 * @param  {array} a1 Первый массив
 * @param  {array} a2 Второй массив
 * @return {array}    Элементы, которые отличаются
 */
function getArraysDiff(a1, a2) {
  return a1.filter(i=>!a2.includes(i)).concat(a2.filter(i=>!a1.includes(i)))
}

/**
 * СЛУЖЕБНАЯ: Добавляет список классов из принятого HTML в переменную blocksList, используется в потоке обработки Pug.
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
