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
    "some-new-class",
    "haters",
    "haters2"
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
    "./script.js"
  ],
  "addAssets": {
    "./src/img/avatar-*": "img/",
    "./src/img/DSC_*": "img/",
    "./src/fonts/demo-empty-open-sans.woff2": "fonts/",
    "./src/favicon/*.{png,ico,svg,xml,webmanifest}": "img/favicon"
  },
  "dir": {
    "src": "./src/",
    "build": "./build/"
  }
};

module.exports = config;
