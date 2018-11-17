let config =
{
  // Файлы, классы которых не анализируются при поиске БЭМ-блоков
  "notGetBlocks": [
    "blocks-demo.html",
  ],
  // Классы, которые не нужно считать БЭМ-блоками
  "ignoredBlocks": [
    "no-js",
  ],
  // БЭМ-блоки, используемые в проекте
  "blocks": [
    "page",
    "page-header",
    "logo",
    "main-nav",
    "OLD-block-SHOULD-BE-REMOVED",
  ],
  // SCSS-файлы, которые будут взяты в сборку стилей перед файлами БЭМ-блоков
  "addStyleBefore": [
    "./src/scss/functions.scss",
    "./src/scss/variables.scss",
    "./src/scss/mixins.scss",
  ],
  // SCSS-файлы, которые будут взяты в сборку стилей после файлов БЭМ-блоков
  "addStyleAfter": [
    "./src/scss/print.scss",
  ],
  // JS-файлы, которые будут взяты в сборку JS перед файлами БЭМ-блоков
  "addJsBefore": [],
  // JS-файлы, которые будут взяты в сборку JS после файлов БЭМ-блоков
  "addJsAfter": [
    "./src/js/global-script.js",
  ],
  // Изображения, копируемые в папку сборки до копирования изображений блоков
  "addImages": [],
  // Добавочные файлы, копируемые в папку сборки до копирования доп. файлов блоков
  "addAssets": [],
  // CSS-файлы, копируемые в папку сборки без обработки перед сборкой стилей
  "copiedCss": [],
  // JS-файлы, копируемые в папку сборки без обработки перед сборкой JS
  "copiedJs": [],
  // Директории проекта
  "dir": {
    "src": "./src/",
    "build": "./build/",
    "blocks": "./src/blocks/",
  },
};

module.exports = config;
