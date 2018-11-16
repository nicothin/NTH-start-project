let config =
{
  "notGetBlocks": [
    "blocks-demo.html",
  ],
  "ignoredBlocks": [
    "no-js",
  ],
  "blocks": {
    "page": {
      "style": [
        "src/blocks/page/page.scss",
      ],
      "js": [],
      "img": [],
      "assets": [],
    },
    "page-header": {
      "style": [
        "src/blocks/page-header/page-header.scss",
      ],
      "js": [],
      "img": [],
      "assets": [],
    },
    "logo": {
      "style": [
        "src/blocks/logo/logo.scss",
      ],
      "js": [],
      "img": [],
      "assets": [],
    },
    "main-nav": {
      "style": [
        "src/blocks/main-nav/main-nav.scss",
      ],
      "js": [
        "src/blocks/main-nav/main-nav.js"
      ],
      "img": [],
      "assets": [],
    },
    "burger": {
      "style": [
        "src/blocks/burger/burger.scss",
      ],
      "js": [
        "src/blocks/burger/burger.js"
      ],
      "img": [],
      "assets": [],
    },
    "page-footer": {
      "style": [
        "src/blocks/page-footer/page-footer.scss",
      ],
      "js": [],
      "img": [],
      "assets": [],
    }
  },
  "addStyleBefore": [
    "./src/scss/functions.scss",,
    "./src/scss/variables.scss",,
    "./src/scss/mixins.scss",
  ],
  "addStyleAfter": [
    "./src/scss/print.scss",
  ],
  "addJsBefore": [],
  "addJsAfter": [
    "./src/js/global-script.js",
  ],
  "addImages": [],
  "addAssets": [],
  "copiedCss": [],
  "copiedJs": [],
  "dir": {
    "src": "./src/",
    "build": "./build/",
    "blocks": "./src/blocks/",
  },
};

module.exports = config;
