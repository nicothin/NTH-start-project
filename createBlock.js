'use strict';

// Генератор файлов блока

// Использование: node createBlock.js [имя блока] [доп. расширения через пробел]

const fs = require('fs');
const projectConfig = require('./projectConfig.json');

const dirs = projectConfig.dirs;
const mkdirp = require('mkdirp');

const blockName = process.argv[2];          // получим имя блока
const defaultExtensions = ['scss', 'html', 'img', 'bg-img']; // расширения по умолчанию
const extensions = uniqueArray(defaultExtensions.concat(process.argv.slice(3)));  // добавим введенные при вызове расширения (если есть)

// Если есть имя блока
if (blockName) {
  const dirPath = `${dirs.srcPath + dirs.blocksDirName}/${blockName}/`; // полный путь к создаваемой папке блока
  mkdirp(dirPath, (err) => {                                           // создаем
    // Если какая-то ошибка — покажем
    if (err) {
      console.error(`[NTH] Отмена операции: ${err}`);
    }

    // Нет ошибки, поехали!
    else {
      console.log(`[NTH] Создание папки ${dirPath} (если отсутствует)`);

      // Обходим массив расширений и создаем файлы, если они еще не созданы
      extensions.forEach((extention) => {
        const filePath = `${dirPath + blockName}.${extention}`; // полный путь к создаваемому файлу
        let fileContent = '';                                 // будущий контент файла
        let fileCreateMsg = '';                               // будущее сообщение в консоли при создании файла

        // Если это SCSS
        if (extention === 'scss') {
          fileContent = `// В этом файле должны быть стили для БЭМ-блока ${blockName}, его элементов, \n// модификаторов, псевдоселекторов, псевдоэлементов, @media-условий...\n// Очередность: http://nicothin.github.io/idiomatic-pre-CSS/#priority\n\n.${blockName} {\n\n  $block-name:                &; // #{$block-name}__element\n\n}\n`;
          // fileCreateMsg = '';

          // Добавим созданный файл
          let hasThisBlock = false;
          for (const block in projectConfig.blocks) {
            if (block === blockName) {
              hasThisBlock = true;
              break;
            }
          }
          if (!hasThisBlock) {
            projectConfig.blocks[blockName] = [];
            const newPackageJson = JSON.stringify(projectConfig, '', 2);
            fs.writeFileSync('./projectConfig.json', newPackageJson);
            fileCreateMsg = '[NTH] Подключение блока добавлено в projectConfig.json';
          }
        }

        // Если это HTML
        else if (extention === 'html') {
          fileContent = `<!--DEV\n\nДля использования этого файла как шаблона:\n\n@ @include('blocks/${blockName}/${blockName}.html')\n\n(Нужно убрать пробел между символами @)\nПодробнее: https://www.npmjs.com/package/gulp-file-include\n\n\n\n<div class="${blockName}">content</div>\n\n-->\n`;
          // fileCreateMsg = '';
        }

        // Если это JS
        else if (extention === 'js') {
          fileContent = '// document.addEventListener(\'DOMContentLoaded\', function(){});\n// (function(){\n// код\n// }());\n';
        }

        // Если нужна подпапка для картинок
        else if (extention === 'img') {
          const imgFolder = `${dirPath}img/`;
          if (fileExist(imgFolder) === false) {
            mkdirp(imgFolder, (err) => {
              if (err) console.error(err);
              else console.log(`[NTH] Создание папки: ${imgFolder} (если отсутствует)`);
            });
          } else {
            console.log(`[NTH] Папка ${imgFolder} НЕ создана (уже существует) `);
          }
        }

        // Если нужна подпапка для необрабатываемых картинок
        else if (extention === 'bg-img') {
          const imgFolder = `${dirPath}bg-img/`;
          if (fileExist(imgFolder) === false) {
            mkdirp(imgFolder, (err) => {
              if (err) console.error(err);
              else console.log(`[NTH] Создание папки: ${imgFolder} (если отсутствует)`);
            });
          } else {
            console.log(`[NTH] Папка ${imgFolder} НЕ создана (уже существует) `);
          }
        }

        // Создаем файл, если он еще не существует
        if (fileExist(filePath) === false && extention !== 'img' && extention !== 'bg-img') {
          fs.writeFile(filePath, fileContent, (err) => {
            if (err) {
              return console.log(`[NTH] Файл НЕ создан: ${err}`);
            }
            console.log(`[NTH] Файл создан: ${filePath}`);
            if (fileCreateMsg) {
              console.warn(fileCreateMsg);
            }
          });
        } else if (extention !== 'img') {
          console.log(`[NTH] Файл НЕ создан: ${filePath} (уже существует)`);
        }
      });
    }
  });
} else {
  console.log('[NTH] Отмена операции: не указан блок');
}

// Оставить в массиве только уникальные значения (убрать повторы)
function uniqueArray(arr) {
  const objectTemp = {};
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    objectTemp[str] = true; // запомнить строку в виде свойства объекта
  }
  return Object.keys(objectTemp);
}

// Проверка существования файла
function fileExist(path) {
  const fs = require('fs');
  try {
    fs.statSync(path);
  } catch (err) {
    return !(err && err.code === 'ENOENT');
  }
}
