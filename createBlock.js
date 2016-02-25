'use strict';

const fs = require('fs');
const pjson = require('./package.json');
const dirs = pjson.config.directories;
const mkdirp = require('mkdirp');

// Использование: run node createBlock.js [BLOCK_NAME] [additional extensions]

let blockName = process.argv[2];
let defaultExtensions = ['html', 'less'];
let extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));

if (blockName) {
  let dirPath = dirs.blocks + '/' + blockName + '/';
  if(!fileExist(dirPath)) {

  }
  else {
    console.log('---------- Отмена операции: блок ' + dirPath + ' уже существует');
  }
  // console.log(fileExist(dirPath));
  // mkdirp(dirPath, function(err){
  //   if (err) {
  //     console.error(err);
  //   }
  //   else {
  //     extensions.forEach(function(extention){
  //       fs.closeSync(fs.openSync(path.join(dirPath, blockName + '.' + extention), 'w'));
  //     });
  //   }
  // })
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
