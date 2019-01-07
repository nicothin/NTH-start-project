/* global module */

let config =
{
  "notGetBlocks": [
    "blocks-demo.html"
  ],
  "ignoredBlocks": [
    "no-js"
  ],
  "alwaysAddBlocks": [
    "sprite-svg",
  ],
  "addStyleBefore": [
    "src/scss/variables.scss",
    "src/scss/mixins.scss"
  ],
  "addStyleAfter": [
    "src/scss/print.scss"
  ],
  "addJsBefore": [],
  "addJsAfter": [
    "./script.js"
  ],
  "addAssets": {
    "src/img/demo-avatar-*": "img/",
    "src/img/DSC_*": "img/",
    "src/fonts/demo-empty-open-sans.woff2": "fonts/",
    "src/favicon/*.{png,ico,svg,xml,webmanifest}": "img/favicon"
  },
  "dir": {
    "src": "src/",
    "build": "build/",
    "blocks": "src/blocks/"
  }
};

module.exports = config;
