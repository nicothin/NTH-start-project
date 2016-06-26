'use strict';

// Генератор документации

// При запуске этого файла в папке билда должна генерироваться папка docs/ с документацией проекта.
// Типы страниц:
// 1. Корневая:
//    - список блоков, описание примесей, быстрый поиск
// 2. Страница блока:
//    - внешний вид во всевозможных состояниях
//    - разметка блока для каждого состояния (копипастопригодный вариант) с подсветкой синтаксиса
//    - препроцессорная разметка (jade?) с подсветкой синтаксиса
//    - использованные в блоке СSS-переменные
//    - список вложенных блоков со ссылками на них (для сложных блоков)
//    - кнопки тестирования:
//    - - добавление блоков ДО и ПОСЛЕ
//    - - переполнение текстовых фрагментов блока
//    - - использование неподходящих картинок
// Стилизация типов страниц — теги style в head страниц. JS — аналогично. Брать файлы для вставки из исходников
// (из src/docs-files)



const fs = require('fs');
const pjson = require('./package.json');
const dirs = pjson.config.directories;

// Файлы компилируемых компонентов
// let blocks = getComponentsList();
let blocks = ['./src/blocks/btn'];
console.log(blocks);


// Определение собираемых компонентов
function getComponentsList() {
  let сomponentsFilesList = [];
  let fileSystem = fs.readFileSync(dirs.source + '/less/style.less', 'utf8').split('\n').filter(function(item) {
    if(/^(\s*)@import/.test(item)) return true;
    else return false;
  });
  fileSystem.forEach(function(item, i) {
    let componentData = /\/blocks\/(.+?)(\/)(.+?)(?=.(less|css))/g.exec(item);
    if (componentData !== null && componentData[3]) {
      сomponentsFilesList.push(dirs.source + '/blocks/' + componentData[1]);
    }
  });
  return uniqueArray(сomponentsFilesList);
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
