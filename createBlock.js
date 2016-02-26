'use strict';

// Использование: node createBlock.js [имя блока] [доп. расширения через пробел]

const fs = require('fs');
const pjson = require('./package.json');
const dirs = pjson.config.directories;
const mkdirp = require('mkdirp');

let blockName = process.argv[2];
let defaultExtensions = ['html', 'less']; // расширения по умолчанию
let extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));

if(blockName) {
  let dirPath = dirs.blocks + '/' + blockName + '/';
  mkdirp(dirPath, function(err){
    if(err) {
      console.error('[NTH] Отмена операции: ' + err);
    }
    else {
      console.log('[NTH] Создание папки ' + dirPath + ' (создана, если ещё не существует)');
      let dirImagesPath = dirPath + 'img';
      // mkdirp(dirImagesPath, function(err){
      //   if(err) {
      //     console.error('[NTH] Папка для изображений не создана: ' + err);
      //   }
      //   else {
      //     console.error('[NTH] Папка для изображений создана: ' + dirImagesPath);
      //   }
      // });
      extensions.forEach(function(extention){
        let filePath = dirPath + blockName + '.' + extention;
        let fileContent = '';
        let fileCreateMsg = '';
        if(extention == 'less') {
          fileContent = '@import "' + dirs.less + '/variables.less";     // только для удобства обращения к переменным\n@import "' + dirs.less + '/mixins/mixins.less"; // только для удобства обращения к примесям\n\n\n.' + blockName + ' {\n  \n}\n';
        }
        else if(extention == 'html') {
          fileContent = '<div class="' + blockName + '">content</div>\n';
          fileCreateMsg = '[NTH] Для вставки разметки: @@include(\'blocks/' + blockName + '/' + blockName + '.html\',{"key":"value"})  Подробнее: https://www.npmjs.com/package/gulp-file-include';
        }
        if(fileExist(filePath) === false) {
          fs.writeFile(filePath, fileContent, function(err) {
            if(err) {
              return console.log('[NTH] Файл НЕ создан: ' + err);
            }
            console.log('[NTH] Файл создан: ' + filePath);
            if(fileCreateMsg) {
              console.log(fileCreateMsg);
            }
          });
        }
        else {
          console.log('[NTH] Файл НЕ создан: ' + filePath + ' уже существует');
        }
      });
    }
  });
}
else {
  console.log('[NTH] Отмена операции: не указан блок');
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

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch(err) {
    return !(err && err.code === 'ENOENT');
  }
}
