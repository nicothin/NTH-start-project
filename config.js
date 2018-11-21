// Файл перезаписывается программно при работе автоматизации
let config =
{
  "notGetBlocks": [
    "blocks-demo.html"
  ],
  "ignoredBlocks": [
    "no-js"
  ],
  "blocks": [
    "page",
    "page-header",
    "logo",
    "main-nav",
    "burger",
    "page-footer",
    "some-new-class"
  ],
  "addStyleBefore": [
    "./src/scss/functions.scss",
    "./src/scss/variables.scss",
    "./src/scss/mixins.scss"
  ],
  "addStyleAfter": [
    "./src/scss/print.scss"
  ],
  "addJsBefore": [],
  "addJsAfter": [
    "./src/js/global-script.js"
  ],
  "addImages": [],
  "addAssets": [],
  "copiedCss": [],
  "copiedJs": [],
  "dir": {
    "src": "./src/",
    "build": "./build/",
    "blocks": "./src/blocks/"
  }
};

module.exports = config;
