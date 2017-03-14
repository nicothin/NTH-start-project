'use strict';

// Подключим зависимости
const fs = require('fs');
const gulp = require('gulp');
const gulpSequence = require('gulp-sequence');
const del = require('del');
const postcss = require('gulp-postcss');
const postcssMediaVariables = require('postcss-media-variables');

// Получим настройки проекта из package.json
let pjson = require('./package.json');
let dirs = pjson.configProject.dirs;
let blocksObject = pjson.configProject.blocks;

// Обойдем импорты диспетчера подключений, сформируем массив импортов блоков
let styleFilePath = dirs.srcPath + 'css/style.css';
let styleFileContent = fs.readFileSync(styleFilePath, 'utf8');
let blockRegExp = new RegExp('/'+dirs.blocksDirName+'/', 'i');
let styleFileImportsArray = styleFileContent.split('\n').filter(function(item) {
  if(/^(\s*)@import/.test(item) && blockRegExp.test(item)) return true;
  else return false;
});
// console.log(styleFileImportsArray);

// Обойдем объект с необходимыми блоками, поищем их импорты в массиве импортов
let newImports = '';
for (let blockName in blocksObject) {
  if(blocksObject[blockName].length) {
    newImports += getNeedImport(blockName, blockName);
    blocksObject[blockName].forEach(function(elementName) {
      newImports += getNeedImport(blockName, blockName+elementName);
    });
  }
  else {
    newImports += getNeedImport(blockName, blockName);
  }
}
function getNeedImport(blockName, fileName){
  let hasImport = false;
  // console.log('test '+blockName+'/'+fileName+'.css ');
  for (var i = 0; i < styleFileImportsArray.length; i++) {
    let blockImportRegExp = new RegExp('/'+blockName+'/'+fileName+'.css', 'i');
    if(blockImportRegExp.test(styleFileImportsArray[i])) {
      hasImport = true;
      break;
    }
  }
  if(!hasImport) return '@import url('+dirs.srcPath+dirs.blocksDirName+'/'+blockName+'/'+fileName+'.css);\n'
  else return '';
}
// console.log(newImports);

// Запуск `NODE_ENV=production npm start [задача]` приведет к сборке без sourcemaps
const isDev = !process.env.NODE_ENV || process.env.NODE_ENV == 'dev';

// Очистка папки сборки
gulp.task('clean', function () {
  console.log('---------- Очистка папки сборки');
  return del([
    dirs.buildPath + '/**/*',
    '!' + dirs.buildPath + '/readme.md'
  ]);
});
