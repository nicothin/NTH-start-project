/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/burger/burger.js":
/*!*************************************!*\
  !*** ./src/blocks/burger/burger.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* global document */

Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  var burgers = document.querySelectorAll('.burger');

  for (var i = 0; i < burgers.length; i++) {
    var burger = burgers[i];
    burger.addEventListener('click', showBurgerTarget);
  }

  function showBurgerTarget() {
    var targetId = this.getAttribute('data-target-id');
    var targetClassToggle = this.getAttribute('data-target-class-toggle');

    if (targetId && targetClassToggle) {
      this.classList.toggle('burger--close');
      document.getElementById(targetId).classList.toggle(targetClassToggle);
    }
  }
});

/***/ }),

/***/ "./src/blocks/main-nav/main-nav.js":
/*!*****************************************!*\
  !*** ./src/blocks/main-nav/main-nav.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* global document Element */

Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  // Добавление/удаление модификаторов при фокусировке на ссылочном элементе
  var linkClassName = 'main-nav__link';
  var linkClassNameShowChild = 'main-nav__item--show-child';
  var findLinkClassName = new RegExp(linkClassName); // Слежение за всплывшим событием focus (нужно добавить класс, показывающий потомков)

  document.addEventListener('focus', function (event) {
    // Если событие всплыло от одной из ссылок гл. меню
    if (findLinkClassName.test(event.target.className)) {
      // Добавим классы, показывающие списки вложенных уровней, на всех родителей
      var parents = getParents(event.target, '.main-nav__item');

      for (var i = 0; i < parents.length; i++) {
        parents[i].classList.add(linkClassNameShowChild);
      }
    }
  }, true); // Слежение за всплывшим событием blur (нужно убрать класс, показывающий потомков)

  document.addEventListener('blur', function (event) {
    // Если событие всплыло от одной из ссылок гл. меню
    if (findLinkClassName.test(event.target.className)) {
      // Уберем все классы, показывающие списки 2+ уровней
      var parents = document.querySelectorAll('.' + linkClassNameShowChild);

      for (var i = 0; i < parents.length; i++) {
        parents[i].classList.remove(linkClassNameShowChild);
      }
    }
  }, true); // eslint-disable

  /*! getParents.js | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/getParents */

  /**
   * Get all of an element's parent elements up the DOM tree
   * @param  {Node}   elem     The element
   * @param  {String} selector Selector to match against [optional]
   * @return {Array}           The parent elements
   */

  var getParents = function getParents(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;

        while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line


        return i > -1;
      };
    } // Setup parents array


    var parents = []; // Get matching parent elements

    for (; elem && elem !== document; elem = elem.parentNode) {
      // Add matching parents to array
      if (selector) {
        if (elem.matches(selector)) {
          parents.push(elem);
        }
      } else {
        parents.push(elem);
      }
    }

    return parents;
  };
});

/***/ }),

/***/ "./src/blocks/modal/modal.js":
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* harmony import */ var Utils_getScrollSize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/getScrollSize.js */ "./src/js/utils/getScrollSize.js");
/* global document window */


Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  var bodyPaddingRightOriginal = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('padding-right'));
  var backdrop = document.createElement('div');
  document.addEventListener('click', function (event) {
    var target = event.target.closest('a[data-modal], button[data-modal]');

    if (target && target.dataset.modal === 'open') {
      showModal(document.getElementById((target.hash || target.dataset.modalTarget).slice(1)));
    }

    if (target && target.dataset.modal === 'close' || event.target.matches('[aria-modal]')) {
      closeAllModals();
    }

    function showModal(targetModalNode) {
      if (document.body.clientHeight - document.documentElement.clientHeight > 0) {
        document.body.style.paddingRight = bodyPaddingRightOriginal + Object(Utils_getScrollSize_js__WEBPACK_IMPORTED_MODULE_1__["default"])() + 'px';
      }

      document.body.classList.add('modal-open');
      targetModalNode.classList.add('modal--show');
      targetModalNode.style.display = 'block';
      targetModalNode.ariaModal = true;
      targetModalNode.ariaHidden = null;
      targetModalNode.setAttribute('role', 'dialog');
      backdrop.className = 'modal-backdrop';
      document.body.append(backdrop);
    }

    function closeAllModals() {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
      document.querySelectorAll('.modal').forEach(function (modal) {
        modal.classList.remove('modal--show');
        modal.style.display = 'none';
        modal.ariaModal = null;
        modal.ariaHidden = true;
        modal.removeAttribute('role');
      });
      backdrop.remove();
    }
  });
});

/***/ }),

/***/ "./src/js/entry.js":
/*!*************************!*\
  !*** ./src/js/entry.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
 */

/* global require */
__webpack_require__(/*! ../blocks/burger/burger.js */ "./src/blocks/burger/burger.js");

__webpack_require__(/*! ../blocks/main-nav/main-nav.js */ "./src/blocks/main-nav/main-nav.js");

__webpack_require__(/*! ../blocks/modal/modal.js */ "./src/blocks/modal/modal.js");

__webpack_require__(/*! ./script.js */ "./src/js/script.js");
/*!*
 * ВНИМАНИЕ! Этот файл генерируется автоматически.
 * Любые изменения этого файла будут потеряны при следующей компиляции.
 * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
 */

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

// /* global document console */
// import ready from 'Utils/documentReady.js';
// import getScrollSize from 'Utils/getScrollSize.js';
// ready(function() {
//   console.log('DOM героически построен!');
//   document.documentElement.style.setProperty('--css-scroll-size', `${getScrollSize()}px`);
// });
// import $ from 'jquery'; // Перед использованием установить как зависимость
// $(function() {
//   console.log('jQuery героически сработал!');
// });

/***/ }),

/***/ "./src/js/utils/documentReady.js":
/*!***************************************!*\
  !*** ./src/js/utils/documentReady.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global document */
var ready = function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (ready);

/***/ }),

/***/ "./src/js/utils/getScrollSize.js":
/*!***************************************!*\
  !*** ./src/js/utils/getScrollSize.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* global document */
var getScrollSize = function getScrollSize() {
  var outer = document.createElement('div');
  var inner = document.createElement('div');
  outer.style.overflow = 'scroll';
  outer.classList.add('scrollbar');
  document.body.appendChild(outer);
  outer.appendChild(inner);
  var scrollbarSize = outer.offsetWidth - inner.offsetWidth;
  document.body.removeChild(outer);
  return scrollbarSize;
};

/* harmony default export */ __webpack_exports__["default"] = (getScrollSize);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9idXJnZXIvYnVyZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbWFpbi1uYXYvbWFpbi1uYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZG9jdW1lbnRSZWFkeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZ2V0U2Nyb2xsU2l6ZS5qcyJdLCJuYW1lcyI6WyJyZWFkeSIsImJ1cmdlcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiYnVyZ2VyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dCdXJnZXJUYXJnZXQiLCJ0YXJnZXRJZCIsImdldEF0dHJpYnV0ZSIsInRhcmdldENsYXNzVG9nZ2xlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZ2V0RWxlbWVudEJ5SWQiLCJsaW5rQ2xhc3NOYW1lIiwibGlua0NsYXNzTmFtZVNob3dDaGlsZCIsImZpbmRMaW5rQ2xhc3NOYW1lIiwiUmVnRXhwIiwiZXZlbnQiLCJ0ZXN0IiwidGFyZ2V0IiwiY2xhc3NOYW1lIiwicGFyZW50cyIsImdldFBhcmVudHMiLCJhZGQiLCJyZW1vdmUiLCJlbGVtIiwic2VsZWN0b3IiLCJFbGVtZW50IiwicHJvdG90eXBlIiwibWF0Y2hlcyIsIm1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsInMiLCJvd25lckRvY3VtZW50IiwiaXRlbSIsInBhcmVudE5vZGUiLCJwdXNoIiwiYm9keVBhZGRpbmdSaWdodE9yaWdpbmFsIiwicGFyc2VJbnQiLCJ3aW5kb3ciLCJnZXRDb21wdXRlZFN0eWxlIiwiYm9keSIsImdldFByb3BlcnR5VmFsdWUiLCJiYWNrZHJvcCIsImNyZWF0ZUVsZW1lbnQiLCJjbG9zZXN0IiwiZGF0YXNldCIsIm1vZGFsIiwic2hvd01vZGFsIiwiaGFzaCIsIm1vZGFsVGFyZ2V0Iiwic2xpY2UiLCJjbG9zZUFsbE1vZGFscyIsInRhcmdldE1vZGFsTm9kZSIsImNsaWVudEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwicGFkZGluZ1JpZ2h0IiwiZ2V0U2Nyb2xsU2l6ZSIsImRpc3BsYXkiLCJhcmlhTW9kYWwiLCJhcmlhSGlkZGVuIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwiZm9yRWFjaCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlcXVpcmUiLCJmbiIsImF0dGFjaEV2ZW50IiwicmVhZHlTdGF0ZSIsIm91dGVyIiwiaW5uZXIiLCJvdmVyZmxvdyIsImFwcGVuZENoaWxkIiwic2Nyb2xsYmFyU2l6ZSIsIm9mZnNldFdpZHRoIiwicmVtb3ZlQ2hpbGQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFF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QUM0QyxJQUFULENBQWNnQyxXQUFkLENBQTBCSCxLQUExQjtBQUNBQSxPQUFLLENBQUNHLFdBQU4sQ0FBa0JGLEtBQWxCO0FBQ0EsTUFBTUcsYUFBYSxHQUFHSixLQUFLLENBQUNLLFdBQU4sR0FBb0JKLEtBQUssQ0FBQ0ksV0FBaEQ7QUFDQTlFLFVBQVEsQ0FBQzRDLElBQVQsQ0FBY21DLFdBQWQsQ0FBMEJOLEtBQTFCO0FBQ0EsU0FBT0ksYUFBUDtBQUNELENBVkQ7O0FBWWVoQiw0RUFBZixFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL2VudHJ5LmpzXCIpO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbmltcG9ydCByZWFkeSBmcm9tICdVdGlscy9kb2N1bWVudFJlYWR5LmpzJztcblxucmVhZHkoZnVuY3Rpb24oKXtcblxuICB2YXIgYnVyZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXJnZXInKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1cmdlcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnVyZ2VyID0gYnVyZ2Vyc1tpXTtcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QnVyZ2VyVGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dCdXJnZXJUYXJnZXQoKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LWlkJyk7XG4gICAgdmFyIHRhcmdldENsYXNzVG9nZ2xlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LWNsYXNzLXRvZ2dsZScpO1xuICAgIGlmICh0YXJnZXRJZCAmJiB0YXJnZXRDbGFzc1RvZ2dsZSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWNsb3NlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xhc3NMaXN0LnRvZ2dsZSh0YXJnZXRDbGFzc1RvZ2dsZSk7XG4gICAgfVxuICB9XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50IEVsZW1lbnQgKi9cblxuaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xuXG5yZWFkeShmdW5jdGlvbigpIHtcblxuICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtS/Rg9C00LDQu9C10L3QuNC1INC80L7QtNC40YTQuNC60LDRgtC+0YDQvtCyINC/0YDQuCDRhNC+0LrRg9GB0LjRgNC+0LLQutC1INC90LAg0YHRgdGL0LvQvtGH0L3QvtC8INGN0LvQtdC80LXQvdGC0LVcbiAgdmFyIGxpbmtDbGFzc05hbWUgPSAnbWFpbi1uYXZfX2xpbmsnO1xuICB2YXIgbGlua0NsYXNzTmFtZVNob3dDaGlsZCA9ICdtYWluLW5hdl9faXRlbS0tc2hvdy1jaGlsZCc7XG4gIHZhciBmaW5kTGlua0NsYXNzTmFtZSA9IG5ldyBSZWdFeHAobGlua0NsYXNzTmFtZSk7XG4gIC8vINCh0LvQtdC20LXQvdC40LUg0LfQsCDQstGB0L/Qu9GL0LLRiNC40Lwg0YHQvtCx0YvRgtC40LXQvCBmb2N1cyAo0L3Rg9C20L3QviDQtNC+0LHQsNCy0LjRgtGMINC60LvQsNGB0YEsINC/0L7QutCw0LfRi9Cy0LDRjtGJ0LjQuSDQv9C+0YLQvtC80LrQvtCyKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8g0JXRgdC70Lgg0YHQvtCx0YvRgtC40LUg0LLRgdC/0LvRi9C70L4g0L7RgiDQvtC00L3QvtC5INC40Lcg0YHRgdGL0LvQvtC6INCz0LsuINC80LXQvdGOXG4gICAgaWYgKGZpbmRMaW5rQ2xhc3NOYW1lLnRlc3QoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSkpIHtcbiAgICAgIC8vINCU0L7QsdCw0LLQuNC8INC60LvQsNGB0YHRiywg0L/QvtC60LDQt9GL0LLQsNGO0YnQuNC1INGB0L/QuNGB0LrQuCDQstC70L7QttC10L3QvdGL0YUg0YPRgNC+0LLQvdC10LksINC90LAg0LLRgdC10YUg0YDQvtC00LjRgtC10LvQtdC5XG4gICAgICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMoZXZlbnQudGFyZ2V0LCAnLm1haW4tbmF2X19pdGVtJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50c1tpXS5jbGFzc0xpc3QuYWRkKGxpbmtDbGFzc05hbWVTaG93Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSk7XG4gIC8vINCh0LvQtdC20LXQvdC40LUg0LfQsCDQstGB0L/Qu9GL0LLRiNC40Lwg0YHQvtCx0YvRgtC40LXQvCBibHVyICjQvdGD0LbQvdC+INGD0LHRgNCw0YLRjCDQutC70LDRgdGBLCDQv9C+0LrQsNC30YvQstCw0Y7RidC40Lkg0L/QvtGC0L7QvNC60L7QsilcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8g0JXRgdC70Lgg0YHQvtCx0YvRgtC40LUg0LLRgdC/0LvRi9C70L4g0L7RgiDQvtC00L3QvtC5INC40Lcg0YHRgdGL0LvQvtC6INCz0LsuINC80LXQvdGOXG4gICAgaWYgKGZpbmRMaW5rQ2xhc3NOYW1lLnRlc3QoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSkpIHtcbiAgICAgIC8vINCj0LHQtdGA0LXQvCDQstGB0LUg0LrQu9Cw0YHRgdGLLCDQv9C+0LrQsNC30YvQstCw0Y7RidC40LUg0YHQv9C40YHQutC4IDIrINGD0YDQvtCy0L3QtdC5XG4gICAgICB2YXIgcGFyZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nK2xpbmtDbGFzc05hbWVTaG93Q2hpbGQpXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKGxpbmtDbGFzc05hbWVTaG93Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cblxuXG4gIC8vIGVzbGludC1kaXNhYmxlXG4gIC8qISBnZXRQYXJlbnRzLmpzIHwgKGMpIDIwMTcgQ2hyaXMgRmVyZGluYW5kaSB8IE1JVCBMaWNlbnNlIHwgaHR0cDovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvZ2V0UGFyZW50cyAqL1xuICAvKipcbiAgICogR2V0IGFsbCBvZiBhbiBlbGVtZW50J3MgcGFyZW50IGVsZW1lbnRzIHVwIHRoZSBET00gdHJlZVxuICAgKiBAcGFyYW0gIHtOb2RlfSAgIGVsZW0gICAgIFRoZSBlbGVtZW50XG4gICAqIEBwYXJhbSAge1N0cmluZ30gc2VsZWN0b3IgU2VsZWN0b3IgdG8gbWF0Y2ggYWdhaW5zdCBbb3B0aW9uYWxdXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgVGhlIHBhcmVudCBlbGVtZW50c1xuICAgKi9cbiAgdmFyIGdldFBhcmVudHMgPSBmdW5jdGlvbiAoIGVsZW0sIHNlbGVjdG9yICkge1xuXG4gICAgICAvLyBFbGVtZW50Lm1hdGNoZXMoKSBwb2x5ZmlsbFxuICAgICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyksXG4gICAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gdGhpcykge30gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPiAtMTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgcGFyZW50cyBhcnJheVxuICAgICAgdmFyIHBhcmVudHMgPSBbXTtcblxuICAgICAgLy8gR2V0IG1hdGNoaW5nIHBhcmVudCBlbGVtZW50c1xuICAgICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuXG4gICAgICAgICAgLy8gQWRkIG1hdGNoaW5nIHBhcmVudHMgdG8gYXJyYXlcbiAgICAgICAgICBpZiAoIHNlbGVjdG9yICkge1xuICAgICAgICAgICAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHtcbiAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKCBlbGVtICk7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJlbnRzO1xuXG4gIH07XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50IHdpbmRvdyAqL1xuXG5pbXBvcnQgcmVhZHkgZnJvbSAnVXRpbHMvZG9jdW1lbnRSZWFkeS5qcyc7XG5pbXBvcnQgZ2V0U2Nyb2xsU2l6ZSBmcm9tICdVdGlscy9nZXRTY3JvbGxTaXplLmpzJztcblxucmVhZHkoZnVuY3Rpb24gKCkge1xuICBjb25zdCBib2R5UGFkZGluZ1JpZ2h0T3JpZ2luYWwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2FbZGF0YS1tb2RhbF0sIGJ1dHRvbltkYXRhLW1vZGFsXScpO1xuXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldC5tb2RhbCA9PT0gJ29wZW4nKSB7XG4gICAgICBzaG93TW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCh0YXJnZXQuaGFzaCB8fCB0YXJnZXQuZGF0YXNldC5tb2RhbFRhcmdldCkuc2xpY2UoMSkpICk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldC5tb2RhbCA9PT0gJ2Nsb3NlJyB8fCBldmVudC50YXJnZXQubWF0Y2hlcygnW2FyaWEtbW9kYWxdJykpIHtcbiAgICAgIGNsb3NlQWxsTW9kYWxzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01vZGFsKHRhcmdldE1vZGFsTm9kZSkge1xuICAgICAgaWYgKChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpID4gMCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGJvZHlQYWRkaW5nUmlnaHRPcmlnaW5hbCArIGdldFNjcm9sbFNpemUoKSArICdweCc7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcblxuICAgICAgdGFyZ2V0TW9kYWxOb2RlLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1zaG93Jyk7XG4gICAgICB0YXJnZXRNb2RhbE5vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRNb2RhbE5vZGUuYXJpYU1vZGFsID0gdHJ1ZTtcbiAgICAgIHRhcmdldE1vZGFsTm9kZS5hcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgIHRhcmdldE1vZGFsTm9kZS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG5cbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9ICdtb2RhbC1iYWNrZHJvcCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWNrZHJvcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxNb2RhbHMoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLmZvckVhY2goZnVuY3Rpb24gKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1zaG93Jyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1vZGFsLmFyaWFNb2RhbCA9IG51bGw7XG4gICAgICAgIG1vZGFsLmFyaWFIaWRkZW4gPSB0cnVlO1xuICAgICAgICBtb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBiYWNrZHJvcC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG59KTtcbiIsIlxuLyohKlxuICog0JLQndCY0JzQkNCd0JjQlSEg0K3RgtC+0YIg0YTQsNC50Lsg0LPQtdC90LXRgNC40YDRg9C10YLRgdGPINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LlxuICog0JvRjtCx0YvQtSDQuNC30LzQtdC90LXQvdC40Y8g0Y3RgtC+0LPQviDRhNCw0LnQu9CwINCx0YPQtNGD0YIg0L/QvtGC0LXRgNGP0L3RiyDQv9GA0Lgg0YHQu9C10LTRg9GO0YnQtdC5INC60L7QvNC/0LjQu9GP0YbQuNC4LlxuICog0JvRjtCx0L7QtSDQuNC30LzQtdC90LXQvdC40LUg0L/RgNC+0LXQutGC0LAg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LrQvtC80L/QuNC70Y/RhtC40Lgg0JTQntCb0KzQqNCVINCYINCU0J7QoNCe0JbQlSDQsiAyLTUg0YDQsNC3LlxuICovXG5cbi8qIGdsb2JhbCByZXF1aXJlICovXG5cbnJlcXVpcmUoJy4uL2Jsb2Nrcy9idXJnZXIvYnVyZ2VyLmpzJyk7XG5yZXF1aXJlKCcuLi9ibG9ja3MvbWFpbi1uYXYvbWFpbi1uYXYuanMnKTtcbnJlcXVpcmUoJy4uL2Jsb2Nrcy9tb2RhbC9tb2RhbC5qcycpO1xucmVxdWlyZSgnLi9zY3JpcHQuanMnKTtcblxuLyohKlxuICog0JLQndCY0JzQkNCd0JjQlSEg0K3RgtC+0YIg0YTQsNC50Lsg0LPQtdC90LXRgNC40YDRg9C10YLRgdGPINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LlxuICog0JvRjtCx0YvQtSDQuNC30LzQtdC90LXQvdC40Y8g0Y3RgtC+0LPQviDRhNCw0LnQu9CwINCx0YPQtNGD0YIg0L/QvtGC0LXRgNGP0L3RiyDQv9GA0Lgg0YHQu9C10LTRg9GO0YnQtdC5INC60L7QvNC/0LjQu9GP0YbQuNC4LlxuICog0JvRjtCx0L7QtSDQuNC30LzQtdC90LXQvdC40LUg0L/RgNC+0LXQutGC0LAg0LHQtdC3INCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LrQvtC80L/QuNC70Y/RhtC40Lgg0JTQntCb0KzQqNCVINCYINCU0J7QoNCe0JbQlSDQsiAyLTUg0YDQsNC3LlxuICovXG5cbiIsIi8vIC8qIGdsb2JhbCBkb2N1bWVudCBjb25zb2xlICovXG5cbi8vIGltcG9ydCByZWFkeSBmcm9tICdVdGlscy9kb2N1bWVudFJlYWR5LmpzJztcbi8vIGltcG9ydCBnZXRTY3JvbGxTaXplIGZyb20gJ1V0aWxzL2dldFNjcm9sbFNpemUuanMnO1xuXG4vLyByZWFkeShmdW5jdGlvbigpIHtcbi8vICAgY29uc29sZS5sb2coJ0RPTSDQs9C10YDQvtC40YfQtdGB0LrQuCDQv9C+0YHRgtGA0L7QtdC9IScpO1xuLy8gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3NzLXNjcm9sbC1zaXplJywgYCR7Z2V0U2Nyb2xsU2l6ZSgpfXB4YCk7XG4vLyB9KTtcblxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JzsgLy8g0J/QtdGA0LXQtCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8INGD0YHRgtCw0L3QvtCy0LjRgtGMINC60LDQuiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtGMXG4vLyAkKGZ1bmN0aW9uKCkge1xuLy8gICBjb25zb2xlLmxvZygnalF1ZXJ5INCz0LXRgNC+0LjRh9C10YHQutC4INGB0YDQsNCx0L7RgtCw0LshJyk7XG4vLyB9KTtcbiIsIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuXG5jb25zdCByZWFkeSA9IGZ1bmN0aW9uIChmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlYWR5O1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbmNvbnN0IGdldFNjcm9sbFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIG91dGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGJhcicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICBjb25zdCBzY3JvbGxiYXJTaXplID0gb3V0ZXIub2Zmc2V0V2lkdGggLSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XG4gIHJldHVybiBzY3JvbGxiYXJTaXplO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRTY3JvbGxTaXplO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==