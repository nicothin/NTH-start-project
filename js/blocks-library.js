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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks/blocks-library/blocks-library.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/autosize/dist/autosize.js":
/*!************************************************!*\
  !*** ./node_modules/autosize/dist/autosize.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	autosize 4.0.2
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function (global, factory) {
	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else { var mod; }
})(this, function (module, exports) {
	'use strict';

	var map = typeof Map === "function" ? new Map() : function () {
		var keys = [];
		var values = [];

		return {
			has: function has(key) {
				return keys.indexOf(key) > -1;
			},
			get: function get(key) {
				return values[keys.indexOf(key)];
			},
			set: function set(key, value) {
				if (keys.indexOf(key) === -1) {
					keys.push(key);
					values.push(value);
				}
			},
			delete: function _delete(key) {
				var index = keys.indexOf(key);
				if (index > -1) {
					keys.splice(index, 1);
					values.splice(index, 1);
				}
			}
		};
	}();

	var createEvent = function createEvent(name) {
		return new Event(name, { bubbles: true });
	};
	try {
		new Event('test');
	} catch (e) {
		// IE does not support `new Event()`
		createEvent = function createEvent(name) {
			var evt = document.createEvent('Event');
			evt.initEvent(name, true, false);
			return evt;
		};
	}

	function assign(ta) {
		if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

		var heightOffset = null;
		var clientWidth = null;
		var cachedHeight = null;

		function init() {
			var style = window.getComputedStyle(ta, null);

			if (style.resize === 'vertical') {
				ta.style.resize = 'none';
			} else if (style.resize === 'both') {
				ta.style.resize = 'horizontal';
			}

			if (style.boxSizing === 'content-box') {
				heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
			} else {
				heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
			}
			// Fix when a textarea is not on document body and heightOffset is Not a Number
			if (isNaN(heightOffset)) {
				heightOffset = 0;
			}

			update();
		}

		function changeOverflow(value) {
			{
				// Chrome/Safari-specific fix:
				// When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
				// made available by removing the scrollbar. The following forces the necessary text reflow.
				var width = ta.style.width;
				ta.style.width = '0px';
				// Force reflow:
				/* jshint ignore:start */
				ta.offsetWidth;
				/* jshint ignore:end */
				ta.style.width = width;
			}

			ta.style.overflowY = value;
		}

		function getParentOverflows(el) {
			var arr = [];

			while (el && el.parentNode && el.parentNode instanceof Element) {
				if (el.parentNode.scrollTop) {
					arr.push({
						node: el.parentNode,
						scrollTop: el.parentNode.scrollTop
					});
				}
				el = el.parentNode;
			}

			return arr;
		}

		function resize() {
			if (ta.scrollHeight === 0) {
				// If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
				return;
			}

			var overflows = getParentOverflows(ta);
			var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

			ta.style.height = '';
			ta.style.height = ta.scrollHeight + heightOffset + 'px';

			// used to check if an update is actually necessary on window.resize
			clientWidth = ta.clientWidth;

			// prevents scroll-position jumping
			overflows.forEach(function (el) {
				el.node.scrollTop = el.scrollTop;
			});

			if (docTop) {
				document.documentElement.scrollTop = docTop;
			}
		}

		function update() {
			resize();

			var styleHeight = Math.round(parseFloat(ta.style.height));
			var computed = window.getComputedStyle(ta, null);

			// Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
			var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

			// The actual height not matching the style height (set via the resize method) indicates that 
			// the max-height has been exceeded, in which case the overflow should be allowed.
			if (actualHeight < styleHeight) {
				if (computed.overflowY === 'hidden') {
					changeOverflow('scroll');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			} else {
				// Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
				if (computed.overflowY !== 'hidden') {
					changeOverflow('hidden');
					resize();
					actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
				}
			}

			if (cachedHeight !== actualHeight) {
				cachedHeight = actualHeight;
				var evt = createEvent('autosize:resized');
				try {
					ta.dispatchEvent(evt);
				} catch (err) {
					// Firefox will throw an error on dispatchEvent for a detached element
					// https://bugzilla.mozilla.org/show_bug.cgi?id=889376
				}
			}
		}

		var pageResize = function pageResize() {
			if (ta.clientWidth !== clientWidth) {
				update();
			}
		};

		var destroy = function (style) {
			window.removeEventListener('resize', pageResize, false);
			ta.removeEventListener('input', update, false);
			ta.removeEventListener('keyup', update, false);
			ta.removeEventListener('autosize:destroy', destroy, false);
			ta.removeEventListener('autosize:update', update, false);

			Object.keys(style).forEach(function (key) {
				ta.style[key] = style[key];
			});

			map.delete(ta);
		}.bind(ta, {
			height: ta.style.height,
			resize: ta.style.resize,
			overflowY: ta.style.overflowY,
			overflowX: ta.style.overflowX,
			wordWrap: ta.style.wordWrap
		});

		ta.addEventListener('autosize:destroy', destroy, false);

		// IE9 does not fire onpropertychange or oninput for deletions,
		// so binding to onkeyup to catch most of those events.
		// There is no way that I know of to detect something like 'cut' in IE9.
		if ('onpropertychange' in ta && 'oninput' in ta) {
			ta.addEventListener('keyup', update, false);
		}

		window.addEventListener('resize', pageResize, false);
		ta.addEventListener('input', update, false);
		ta.addEventListener('autosize:update', update, false);
		ta.style.overflowX = 'hidden';
		ta.style.wordWrap = 'break-word';

		map.set(ta, {
			destroy: destroy,
			update: update
		});

		init();
	}

	function destroy(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.destroy();
		}
	}

	function update(ta) {
		var methods = map.get(ta);
		if (methods) {
			methods.update();
		}
	}

	var autosize = null;

	// Do nothing in Node.js environment and IE8 (or lower)
	if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
		autosize = function autosize(el) {
			return el;
		};
		autosize.destroy = function (el) {
			return el;
		};
		autosize.update = function (el) {
			return el;
		};
	} else {
		autosize = function autosize(el, options) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], function (x) {
					return assign(x, options);
				});
			}
			return el;
		};
		autosize.destroy = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], destroy);
			}
			return el;
		};
		autosize.update = function (el) {
			if (el) {
				Array.prototype.forEach.call(el.length ? el : [el], update);
			}
			return el;
		};
	}

	exports.default = autosize;
	module.exports = exports['default'];
});

/***/ }),

/***/ "./node_modules/baron/src/autoUpdate.js":
/*!**********************************************!*\
  !*** ./node_modules/baron/src/autoUpdate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Autoupdate plugin for baron 0.6+ */

function autoUpdateOne(MutationObserver) {
    var self = this
    var watcher

    if (this._au) {
        return
    }

    function actualizeWatcher() {
        if (!self.root[self.origin.offset]) {
            startWatch()
        } else {
            stopWatch()
        }
    }

    // Set interval timeout for watching when root node will be visible
    function startWatch() {
        if (watcher) return

        watcher = setInterval(function() {
            if (self.root[self.origin.offset]) {
                stopWatch()
                self.update()
            }
        }, 300) // is it good enought for you?)
    }

    function stopWatch() {
        clearInterval(watcher)
        watcher = null
    }

    var debouncedUpdater = self._debounce(function() {
        self.update()
    }, 300)

    this._observer = new MutationObserver(function() {
        actualizeWatcher()
        self.update()
        debouncedUpdater()
    })

    this.on('init', function() {
        self._observer.observe(self.root, {
            childList: true,
            subtree: true,
            characterData: true
            // attributes: true
            // No reasons to set attributes to true
            // The case when root/child node with already properly inited baron toggled to hidden and then back to visible,
            // and the size of parent was changed during that hidden state, is very rare
            // Other cases are covered by watcher, and you still can do .update by yourself
        })

        actualizeWatcher()
    })

    this.on('dispose', function() {
        self._observer.disconnect()
        stopWatch()
        delete self._observer
    })

    this._au = true
}

module.exports = function autoUpdateCreator(win) {
    var MutationObserver = win.MutationObserver || win.WebKitMutationObserver || win.MozMutationObserver || null

    return function autoUpdate() {
        if (!MutationObserver) return this

        autoUpdateOne.call(this, MutationObserver)

        return this
    }
}


/***/ }),

/***/ "./node_modules/baron/src/controls.js":
/*!********************************************!*\
  !*** ./node_modules/baron/src/controls.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Controls plugin for baron */

var qs = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").qs

module.exports = function controls(params) {
    var forward, backward, track, screen,
        self = this,
        event

    screen = params.screen || 0.9

    if (params.forward) {
        forward = qs(params.forward, this.clipper)

        event = {
            element: forward,

            handler: function() {
                var y = self.pos() + (params.delta || 30)

                self.pos(y)
            },

            type: 'click'
        }

        this._eventHandlers.push(event) // For auto-dispose
        this.event(event.element, event.type, event.handler, 'on')
    }

    if (params.backward) {
        backward = qs(params.backward, this.clipper)

        event = {
            element: backward,

            handler: function() {
                var y = self.pos() - (params.delta || 30)

                self.pos(y)
            },

            type: 'click'
        }

        this._eventHandlers.push(event) // For auto-dispose
        this.event(event.element, event.type, event.handler, 'on')
    }

    if (params.track) {
        if (params.track === true) {
            track = this.track
        } else {
            track = qs(params.track, this.clipper)
        }

        if (track) {
            event = {
                element: track,

                handler: function(e) {
                    // https://github.com/Diokuz/baron/issues/121
                    if (e.target != track) return

                    var x = e['offset' + self.origin.x],
                        xBar = self.bar[self.origin.offsetPos],
                        sign = 0

                    if (x < xBar) {
                        sign = -1
                    } else if (x > xBar + self.bar[self.origin.offset]) {
                        sign = 1
                    }

                    var y = self.pos() + sign * screen * self.scroller[self.origin.client]

                    self.pos(y)
                },

                type: 'mousedown'
            }

            this._eventHandlers.push(event) // For auto-dispose
            this.event(event.element, event.type, event.handler, 'on')
        }
    }
}


/***/ }),

/***/ "./node_modules/baron/src/core.js":
/*!****************************************!*\
  !*** ./node_modules/baron/src/core.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var g = (function() {
    return this || (1, eval)('this')
}())
var scopedWindow = g && g.window || g

var event = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").event
var css = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").css
var add = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").add
var has = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").has
var rm = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").rm
var clone = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").clone
var qs = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").qs

var _baron = baron // Stored baron value for noConflict usage
// var Item = {}
var pos = ['left', 'top', 'right', 'bottom', 'width', 'height']
// Global store for all baron instances (to be able to dispose them on html-nodes)
var instances = []
var origin = {
    v: { // Vertical
        x: 'Y', pos: pos[1], oppos: pos[3], crossPos: pos[0], crossOpPos: pos[2],
        size: pos[5],
        crossSize: pos[4], crossMinSize: 'min-' + pos[4], crossMaxSize: 'max-' + pos[4],
        client: 'clientHeight', crossClient: 'clientWidth',
        scrollEdge: 'scrollLeft',
        offset: 'offsetHeight', crossOffset: 'offsetWidth', offsetPos: 'offsetTop',
        scroll: 'scrollTop', scrollSize: 'scrollHeight'
    },
    h: { // Horizontal
        x: 'X', pos: pos[0], oppos: pos[2], crossPos: pos[1], crossOpPos: pos[3],
        size: pos[4],
        crossSize: pos[5], crossMinSize: 'min-' + pos[5], crossMaxSize: 'max-' + pos[5],
        client: 'clientWidth', crossClient: 'clientHeight',
        scrollEdge: 'scrollTop',
        offset: 'offsetWidth', crossOffset: 'offsetHeight', offsetPos: 'offsetLeft',
        scroll: 'scrollLeft', scrollSize: 'scrollWidth'
    }
}

// Some ugly vars
var opera12maxScrollbarSize = 17
// I hate you https://github.com/Diokuz/baron/issues/110
var macmsxffScrollbarSize = 15
var macosxffRe = /[\s\S]*Macintosh[\s\S]*\) Gecko[\s\S]*/
var isMacFF = macosxffRe.test(scopedWindow.navigator && scopedWindow.navigator.userAgent)

var log, liveBarons, shownErrors

if (true) {
    log = __webpack_require__(/*! ./log */ "./node_modules/baron/src/log.js")
    liveBarons = 0
    shownErrors = {
        liveTooMany: false,
        allTooMany: false
    }
}

// window.baron and jQuery.fn.baron points to this function
function baron(user) {
    var withParams = !!user
    var tryNode = (user && user[0]) || user
    var isNode = typeof user == 'string' || tryNode instanceof HTMLElement
    var params = isNode ? { root: user } : clone(user)
    var jQueryMode
    var rootNode
    var defaultParams = {
        direction: 'v',
        barOnCls: '_scrollbar',
        resizeDebounce: 0,
        event: event,
        cssGuru: false,
        impact: 'scroller',
        position: 'static'
    }

    params = params || {}

    // Extending default params by user-defined params
    for (var key in defaultParams) {
        if (params[key] == null) { // eslint-disable-line
            params[key] = defaultParams[key]
        }
    }

    if (true) {
        if (params.position == 'absolute' && params.impact == 'clipper') {
            log('error', [
                'Simultaneous use of `absolute` position and `clipper` impact values detected.',
                'Those values cannot be used together.',
                'See more https://github.com/Diokuz/baron/issues/138'
            ].join(' '), params)
        }
    }

    // `this` could be a jQuery instance
    jQueryMode = this && this instanceof scopedWindow.jQuery

    if (params._chain) {
        rootNode = params.root
    } else if (jQueryMode) {
        params.root = rootNode = this[0]
    } else {
        rootNode = qs(params.root || params.scroller)
    }

    if (true) {
        if (!rootNode) {
            log('error', [
                'Baron initialization failed: root node not found.'
            ].join(', '), params)

            return // or return baron-shell?
        }
    }

    var attr = manageAttr(rootNode, params.direction)
    var id = +attr // Could be NaN

    params.index = id

    // baron() can return existing instances,
    // @TODO update params on-the-fly
    // https://github.com/Diokuz/baron/issues/124
    if (id == id && attr !== null && instances[id]) {
        if (true) {
            if (withParams) {
                log('error', [
                    'repeated initialization for html-node detected',
                    'https://github.com/Diokuz/baron/blob/master/docs/logs/repeated.md'
                ].join(', '), params.root)
            }
        }

        return instances[id]
    }

    // root and scroller can be different nodes
    if (params.root && params.scroller) {
        params.scroller = qs(params.scroller, rootNode)
        if (true) {
            if (!params.scroller) {
                log('error', 'Scroller not found!', rootNode, params.scroller)
            }
        }
    } else {
        params.scroller = rootNode
    }

    params.root = rootNode

    var instance = init(params)

    if (instance.autoUpdate) {
        instance.autoUpdate()
    }

    return instance
}

function arrayEach(_obj, iterator) {
    var i = 0
    var obj = _obj

    if (obj.length === undefined || obj === scopedWindow) obj = [obj]

    while (obj[i]) {
        iterator.call(this, obj[i], i)
        i++
    }
}

// shortcut for getTime
function getTime() {
    return new Date().getTime()
}

if (true) {
    baron._instances = instances
}

function manageEvents(item, eventManager, mode) {
    // Creating new functions for one baron item only one time
    item._eventHandlers = item._eventHandlers || [
        {
            // onScroll:
            element: item.scroller,

            handler: function(e) {
                item.scroll(e)
            },

            type: 'scroll'
        }, {
            // css transitions & animations
            element: item.root,

            handler: function() {
                item.update()
            },

            type: 'transitionend animationend'
        }, {
            // onKeyup (textarea):
            element: item.scroller,

            handler: function() {
                item.update()
            },

            type: 'keyup'
        }, {
            // onMouseDown:
            element: item.bar,

            handler: function(e) {
                e.preventDefault() // Text selection disabling in Opera
                item.selection() // Disable text selection in ie8
                item.drag.now = 1 // Save private byte
                if (item.draggingCls) {
                    add(item.root, item.draggingCls)
                }
            },

            type: 'touchstart mousedown'
        }, {
            // onMouseUp:
            element: document,

            handler: function() {
                item.selection(1) // Enable text selection
                item.drag.now = 0
                if (item.draggingCls) {
                    rm(item.root, item.draggingCls)
                }
            },

            type: 'mouseup blur touchend'
        }, {
            // onCoordinateReset:
            element: document,

            handler: function(e) {
                if (e.button != 2) { // Not RM
                    item._pos0(e)
                }
            },

            type: 'touchstart mousedown'
        }, {
            // onMouseMove:
            element: document,

            handler: function(e) {
                if (item.drag.now) {
                    item.drag(e)
                }
            },

            type: 'mousemove touchmove'
        }, {
            // @TODO make one global listener
            // onResize:
            element: scopedWindow,

            handler: function() {
                item.update()
            },

            type: 'resize'
        }, {
            // @todo remove
            // sizeChange:
            element: item.root,

            handler: function() {
                item.update()
            },

            type: 'sizeChange'
        }, {
            // Clipper onScroll bug https://github.com/Diokuz/baron/issues/116
            element: item.clipper,

            handler: function() {
                item.clipperOnScroll()
            },

            type: 'scroll'
        }
    ]

    arrayEach(item._eventHandlers, function(evt) {
        if (evt.element) {
            // workaround for element-elements in `fix` plugin
            // @todo dispose `fix` in proper way and remove workaround
            if (evt.element.length && evt.element !== scopedWindow) {
                for (var i = 0; i < evt.element.length; i++) {
                    eventManager(evt.element[i], evt.type, evt.handler, mode)
                }
            } else {
                eventManager(evt.element, evt.type, evt.handler, mode)
            }
        }
    })

    // if (item.scroller) {
    //     event(item.scroller, 'scroll', item._eventHandlers.onScroll, mode)
    // }
    // if (item.bar) {
    //     event(item.bar, 'touchstart mousedown', item._eventHandlers.onMouseDown, mode)
    // }
    // event(document, 'mouseup blur touchend', item._eventHandlers.onMouseUp, mode)
    // event(document, 'touchstart mousedown', item._eventHandlers.onCoordinateReset, mode)
    // event(document, 'mousemove touchmove', item._eventHandlers.onMouseMove, mode)
    // event(window, 'resize', item._eventHandlers.onResize, mode)
    // if (item.root) {
    //     event(item.root, 'sizeChange', item._eventHandlers.onResize, mode)
    //     // Custon event for alternate baron update mechanism
    // }
}

// set, remove or read baron-specific id-attribute
// @returns {String|null} - id node value, or null, if there is no attr
function manageAttr(node, direction, mode, id) {
    var attrName = 'data-baron-' + direction + '-id'

    if (mode == 'on') {
        node.setAttribute(attrName, id)
    } else if (mode == 'off') {
        node.removeAttribute(attrName)
    }

    return node.getAttribute(attrName)
}

function init(params) {
    var out = new baron.prototype.constructor(params)

    manageEvents(out, params.event, 'on')

    manageAttr(out.root, params.direction, 'on', instances.length)
    instances.push(out)

    if (true) {
        liveBarons++
        if (liveBarons > 100 && !shownErrors.liveTooMany) {
            log('warn', [
                'You have too many live baron instances on page (' + liveBarons + ')!',
                'Are you forget to dispose some of them?',
                'All baron instances can be found in baron._instances:'
            ].join(' '), instances)
            shownErrors.liveTooMany = true
        }
        if (instances.length > 1000 && !shownErrors.allTooMany) {
            log('warn', [
                'You have too many inited baron instances on page (' + instances.length + ')!',
                'Some of them are disposed, and thats good news.',
                'but baron.init was call too many times, and thats is bad news.',
                'All baron instances can be found in baron._instances:'
            ].join(' '), instances)
            shownErrors.allTooMany = true
        }
    }

    out.update()

    return out
}

function fire(eventName) {
    if (this.events && this.events[eventName]) {
        for (var i = 0; i < this.events[eventName].length; i++) {
            var args = Array.prototype.slice.call( arguments, 1 )

            this.events[eventName][i].apply(this, args)
        }
    }
}

baron.prototype = {
    // underscore.js realization
    // used in autoUpdate plugin
    _debounce: function(func, wait) {
        var self = this,
            timeout,
            // args, // right now there is no need for arguments
            // context, // and for context
            timestamp
            // result // and for result

        var later = function() {
            if (self._disposed) {
                clearTimeout(timeout)
                timeout = self = null
                return
            }

            var last = getTime() - timestamp

            if (last < wait && last >= 0) {
                timeout = setTimeout(later, wait - last)
            } else {
                timeout = null
                // result = func.apply(context, args)
                func()
                // context = args = null
            }
        }

        return function() {
            // context = this
            // args = arguments
            timestamp = getTime()

            if (!timeout) {
                timeout = setTimeout(later, wait)
            }

            // return result
        }
    },

    constructor: function(params) {
        var barPos,
            scrollerPos0,
            track,
            resizePauseTimer,
            scrollingTimer,
            resizeLastFire,
            oldBarSize

        resizeLastFire = getTime()

        this.params = params
        this.event = params.event
        this.events = {}

        // DOM elements
        this.root = params.root // Always html node, not just selector
        this.scroller = qs(params.scroller)
        if (true) {
            if (this.scroller.tagName == 'body') {
                log('error', [
                    'Please, do not use BODY as a scroller.',
                    'https://github.com/Diokuz/baron/blob/master/docs/logs/do-not-use-body.md'
                ].join(', '), params)
            }
        }
        this.bar = qs(params.bar, this.root)
        track = this.track = qs(params.track, this.root)
        if (!this.track && this.bar) {
            track = this.bar.parentNode
        }
        this.clipper = this.scroller.parentNode

        // Parameters
        this.direction = params.direction
        this.rtl = params.rtl
        this.origin = origin[this.direction]
        this.barOnCls = params.barOnCls
        this.scrollingCls = params.scrollingCls
        this.draggingCls = params.draggingCls
        this.impact = params.impact
        this.position = params.position
        this.rtl = params.rtl
        this.barTopLimit = 0
        this.resizeDebounce = params.resizeDebounce

        // Updating height or width of bar
        function setBarSize(_size) {
            var barMinSize = this.barMinSize || 20
            var size = _size

            if (size > 0 && size < barMinSize) {
                size = barMinSize
            }

            if (this.bar) {
                css(this.bar, this.origin.size, parseInt(size, 10) + 'px')
            }
        }

        // Updating top or left bar position
        function posBar(_pos) {
            if (this.bar) {
                var was = css(this.bar, this.origin.pos),
                    will = +_pos + 'px'

                if (will && will != was) {
                    css(this.bar, this.origin.pos, will)
                }
            }
        }

        // Free path for bar
        function k() {
            return track[this.origin.client] - this.barTopLimit - this.bar[this.origin.offset]
        }

        // Relative content top position to bar top position
        function relToPos(r) {
            return r * k.call(this) + this.barTopLimit
        }

        // Bar position to relative content position
        function posToRel(t) {
            return (t - this.barTopLimit) / k.call(this)
        }

        // Cursor position in main direction in px // Now with iOs support
        this.cursor = function(e) {
            return e['client' + this.origin.x] ||
                (((e.originalEvent || e).touches || {})[0] || {})['page' + this.origin.x]
        }

        // Text selection pos preventing
        function dontPosSelect() {
            return false
        }

        this.pos = function(x) { // Absolute scroller position in px
            var ie = 'page' + this.origin.x + 'Offset',
                key = (this.scroller[ie]) ? ie : this.origin.scroll

            if (x !== undefined) this.scroller[key] = x

            return this.scroller[key]
        }

        this.rpos = function(r) { // Relative scroller position (0..1)
            var free = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client],
                x

            if (r) {
                x = this.pos(r * free)
            } else {
                x = this.pos()
            }

            return x / (free || 1)
        }

        // Switch on the bar by adding user-defined CSS classname to scroller
        this.barOn = function(dispose) {
            if (this.barOnCls) {
                var noScroll = this.scroller[this.origin.client] >= this.scroller[this.origin.scrollSize]

                if (dispose || noScroll) {
                    if (has(this.root, this.barOnCls)) {
                        rm(this.root, this.barOnCls)
                    }
                } else if (!has(this.root, this.barOnCls)) {
                    add(this.root, this.barOnCls)
                }
            }
        }

        this._pos0 = function(e) {
            scrollerPos0 = this.cursor(e) - barPos
        }

        this.drag = function(e) {
            var rel = posToRel.call(this, this.cursor(e) - scrollerPos0)
            var sub = (this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client])

            this.scroller[this.origin.scroll] = rel * sub
        }

        // Text selection preventing on drag
        this.selection = function(enable) {
            this.event(document, 'selectpos selectstart', dontPosSelect, enable ? 'off' : 'on')
        }

        // onResize & DOM modified handler
        // also fires on init
        // Note: max/min-size didnt sets if size did not really changed (for example, on init in Chrome)
        this.resize = function() {
            var self = this
            var minPeriod = (self.resizeDebounce === undefined) ? 300 : self.resizeDebounce
            var delay = 0

            if (getTime() - resizeLastFire < minPeriod) {
                clearTimeout(resizePauseTimer)
                delay = minPeriod
            }

            function upd() {
                var offset = self.scroller[self.origin.crossOffset]
                var client = self.scroller[self.origin.crossClient]
                var padding = 0
                var was, will

                // https://github.com/Diokuz/baron/issues/110
                if (isMacFF) {
                    padding = macmsxffScrollbarSize

                // Opera 12 bug https://github.com/Diokuz/baron/issues/105
                } else if (client > 0 && offset === 0) {
                    // Only Opera 12 in some rare nested flexbox cases goes here
                    // Sorry guys for magic,
                    // but I dont want to create temporary html-nodes set
                    // just for measuring scrollbar size in Opera 12.
                    // 17px for Windows XP-8.1, 15px for Mac (really rare).
                    offset = client + opera12maxScrollbarSize
                }

                if (offset) { // if there is no size, css should not be set
                    self.barOn()

                    if (self.impact == 'scroller') { // scroller
                        var delta = offset - client + padding

                        // `static` position works only for `scroller` impact
                        if (self.position == 'static') { // static
                            was = css(self.scroller, self.origin.crossSize)
                            will = self.clipper[self.origin.crossClient] + delta + 'px'

                            if (was != will) {
                                self._setCrossSizes(self.scroller, will)
                            }
                        } else { // absolute
                            var styles = {}
                            var key = self.rtl ? 'Left' : 'Right'

                            if (self.direction == 'h') {
                                key = 'Bottom'
                            }

                            styles['padding' + key] = delta + 'px'
                            css(self.scroller, styles)
                        }
                    } else { // clipper
                        was = css(self.clipper, self.origin.crossSize)
                        will = client + 'px'

                        if (was != will) {
                            self._setCrossSizes(self.clipper, will)
                        }
                    }
                } else {
                    // do nothing (display: none, or something)
                }

                Array.prototype.unshift.call(arguments, 'resize')
                fire.apply(self, arguments)

                resizeLastFire = getTime()
            }

            if (delay) {
                resizePauseTimer = setTimeout(upd, delay)
            } else {
                upd()
            }
        }

        this.updatePositions = function(force) {
            var newBarSize,
                self = this

            if (self.bar) {
                newBarSize = (track[self.origin.client] - self.barTopLimit) *
                    self.scroller[self.origin.client] / self.scroller[self.origin.scrollSize]

                // Positioning bar
                if (force || parseInt(oldBarSize, 10) != parseInt(newBarSize, 10)) {
                    setBarSize.call(self, newBarSize)
                    oldBarSize = newBarSize
                }

                barPos = relToPos.call(self, self.rpos())

                posBar.call(self, barPos)
            }

            Array.prototype.unshift.call( arguments, 'scroll' )
            fire.apply(self, arguments)
        }

        // onScroll handler
        this.scroll = function() {
            var self = this

            self.updatePositions()

            if (self.scrollingCls) {
                if (!scrollingTimer) {
                    add(self.root, self.scrollingCls)
                }
                clearTimeout(scrollingTimer)
                scrollingTimer = setTimeout(function() {
                    rm(self.root, self.scrollingCls)
                    scrollingTimer = undefined
                }, 300)
            }
        }

        // https://github.com/Diokuz/baron/issues/116
        this.clipperOnScroll = function() {
            // WTF is this line? https://github.com/Diokuz/baron/issues/134
            // if (this.direction == 'h') return

            // assign `initial scroll position` to `clipper.scrollLeft` (0 for ltr, ~20 for rtl)
            if (!this.rtl) {
                this.clipper[this.origin.scrollEdge] = 0
            } else {
                this.clipper[this.origin.scrollEdge] = this.clipper[this.origin.scrollSize]
            }
        }

        // Flexbox `align-items: stretch` (default) requires to set min-width for vertical
        // and max-height for horizontal scroll. Just set them all.
        // http://www.w3.org/TR/css-flexbox-1/#valdef-align-items-stretch
        this._setCrossSizes = function(node, size) {
            var styles = {}

            styles[this.origin.crossSize] = size
            styles[this.origin.crossMinSize] = size
            styles[this.origin.crossMaxSize] = size

            css(node, styles)
        }

        // Set common css rules
        this._dumbCss = function(on) {
            if (params.cssGuru) return

            var overflow = on ? 'hidden' : null
            var msOverflowStyle = on ? 'none' : null

            css(this.clipper, {
                overflow: overflow,
                msOverflowStyle: msOverflowStyle,
                position: this.position == 'static' ? '' : 'relative'
            })

            var scroll = on ? 'scroll' : null
            var axis = this.direction == 'v' ? 'y' : 'x'
            var scrollerCss = {}

            scrollerCss['overflow-' + axis] = scroll
            scrollerCss['box-sizing'] = 'border-box'
            scrollerCss.margin = '0'
            scrollerCss.border = '0'

            if (this.position == 'absolute') {
                scrollerCss.position = 'absolute'
                scrollerCss.top = '0'

                if (this.direction == 'h') {
                    scrollerCss.left = scrollerCss.right = '0'
                } else {
                    scrollerCss.bottom = '0'
                    scrollerCss.right = this.rtl ? '0' : ''
                    scrollerCss.left = this.rtl ? '' : '0'
                }
            }

            css(this.scroller, scrollerCss)
        }

        // onInit actions
        this._dumbCss(true)

        if (isMacFF) {
            var padding = 'paddingRight'
            var styles = {}
            // getComputedStyle is ie9+, but we here only in f ff
            var paddingWas = scopedWindow.getComputedStyle(this.scroller)[[padding]]

            if (params.direction == 'h') {
                padding = 'paddingBottom'
            } else if (params.rtl) {
                padding = 'paddingLeft'
            }

            var numWas = parseInt(paddingWas, 10)

            if (numWas != numWas) numWas = 0
            styles[padding] = (macmsxffScrollbarSize + numWas) + 'px'
            css(this.scroller, styles)
        }

        return this
    },

    // fires on any update and on init
    update: function(params) {
        if (true) {
            if (this._disposed) {
                log('error', [
                    'Update on disposed baron instance detected.',
                    'You should clear your stored baron value for this instance:',
                    this
                ].join(' '), params)
            }
        }

        fire.call(this, 'upd', params) // Update all plugins' params

        this.resize(1)
        this.updatePositions(1)

        return this
    },

    // One instance
    dispose: function() {
        if (true) {
            if (this._disposed) {
                log('error', 'Already disposed:', this)
            }

            liveBarons--
        }

        manageEvents(this, this.event, 'off')
        manageAttr(this.root, this.params.direction, 'off')
        if (this.params.direction == 'v') {
            this._setCrossSizes(this.scroller, '')
        } else {
            this._setCrossSizes(this.clipper, '')
        }
        this._dumbCss(false)
        this.barOn(true)
        fire.call(this, 'dispose')
        instances[this.params.index] = null
        this.params = null
        this._disposed = true
    },

    on: function(eventName, func, arg) {
        var names = eventName.split(' ')

        for (var i = 0; i < names.length; i++) {
            if (names[i] == 'init') {
                func.call(this, arg)
            } else {
                this.events[names[i]] = this.events[names[i]] || []

                this.events[names[i]].push(function(userArg) {
                    func.call(this, userArg || arg)
                })
            }
        }
    },

    baron: function(params) {
        params.root = this.params.root
        params.scroller = this.params.scroller
        params.direction = (this.params.direction == 'v') ? 'h' : 'v'
        params._chain = true

        return baron(params)
    }
}

// baron.fn.constructor.prototype = baron.fn
baron.prototype.constructor.prototype = baron.prototype

// Use when you need "baron" global var for another purposes
baron.noConflict = function() {
    scopedWindow.baron = _baron // Restoring original value of "baron" global var

    return baron
}

baron.version = '3.0.1'

baron.prototype.autoUpdate = __webpack_require__(/*! ./autoUpdate */ "./node_modules/baron/src/autoUpdate.js")(scopedWindow)
baron.prototype.fix = __webpack_require__(/*! ./fix */ "./node_modules/baron/src/fix.js")
baron.prototype.controls = __webpack_require__(/*! ./controls */ "./node_modules/baron/src/controls.js")

module.exports = baron


/***/ }),

/***/ "./node_modules/baron/src/fix.js":
/*!***************************************!*\
  !*** ./node_modules/baron/src/fix.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Fixable elements plugin for baron */

var log = __webpack_require__(/*! ./log */ "./node_modules/baron/src/log.js")
var css = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").css
var add = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").add
var rm = __webpack_require__(/*! ./utils */ "./node_modules/baron/src/utils.js").rm

module.exports = function fix(userParams) {
    var elements,
        viewPortSize,
        params = { // Default params
            outside: '',
            inside: '',
            before: '',
            after: '',
            past: '',
            future: '',
            radius: 0,
            minView: 0
        },
        topFixHeights = [], // inline style for element
        topRealHeights = [], // ? something related to negative margins for fixable elements
        headerTops = [], // offset positions when not fixed
        scroller = this.scroller,
        eventManager = this.event,
        self = this

    if (true) {
        if (this.position != 'static') {
            log('error', [
                'Fix plugin cannot work properly in non-static baron position.',
                'See more https://github.com/Diokuz/baron/issues/135'
            ].join(' '), this.params)
        }
    }

    // i - number of fixing element, pos - fix-position in px, flag - 1: top, 2: bottom
    // Invocation only in case when fix-state changed
    function fixElement(i, _pos, flag) {
        var pos = _pos
        var ori = flag == 1 ? 'pos' : 'oppos'

        if (viewPortSize < (params.minView || 0)) { // No headers fixing when no enought space for viewport
            pos = undefined
        }

        // Removing all fixing stuff - we can do this because fixElement triggers only when fixState really changed
        css(elements[i], this.origin.pos, '')
        css(elements[i], this.origin.oppos, '')
        rm(elements[i], params.outside)

        // Fixing if needed
        if (pos !== undefined) {
            pos += 'px'
            css(elements[i], this.origin[ori], pos)
            add(elements[i], params.outside)
        }
    }

    function bubbleWheel(e) {
        try {
            var i = document.createEvent('WheelEvent') // i - for extra byte

            // evt.initWebKitWheelEvent(deltaX, deltaY, window, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey)
            i.initWebKitWheelEvent(e.originalEvent.wheelDeltaX, e.originalEvent.wheelDeltaY)
            scroller.dispatchEvent(i)
            e.preventDefault()
        } catch (ex) {
            //
        }
    }

    function init(_params) {
        var pos

        for (var key in _params) {
            params[key] = _params[key]
        }

        if (params.elements instanceof HTMLElement) {
            elements = [params.elements]
        } else if (typeof params.elements == 'string') {
            elements = this.scroller.querySelectorAll(params.elements)
        } else if (params.elements && params.elements[0] instanceof HTMLElement) {
            elements = params.elements
        }

        if (elements) {
            viewPortSize = this.scroller[this.origin.client]
            for (var i = 0; i < elements.length; i++) {
                // Variable header heights
                pos = {}
                pos[this.origin.size] = elements[i][this.origin.offset] + 'px'
                if (elements[i].parentNode !== this.scroller) {
                    css(elements[i].parentNode, pos)
                }
                pos = {}
                pos[this.origin.crossSize] = elements[i].parentNode[this.origin.crossClient] + 'px'
                css(elements[i], pos)

                // Between fixed headers
                viewPortSize -= elements[i][this.origin.offset]

                headerTops[i] = elements[i].parentNode[this.origin.offsetPos] // No paddings for parentNode

                // Summary elements height above current
                topFixHeights[i] = (topFixHeights[i - 1] || 0) // Not zero because of negative margins
                topRealHeights[i] = (topRealHeights[i - 1] || Math.min(headerTops[i], 0))

                if (elements[i - 1]) {
                    topFixHeights[i] += elements[i - 1][this.origin.offset]
                    topRealHeights[i] += elements[i - 1][this.origin.offset]
                }

                if ( !(i == 0 && headerTops[i] == 0)/* && force */) {
                    this.event(elements[i], 'mousewheel', bubbleWheel, 'off')
                    this.event(elements[i], 'mousewheel', bubbleWheel)
                }
            }

            if (params.limiter && elements[0]) { // Bottom edge of first header as top limit for track
                if (this.track && this.track != this.scroller) {
                    pos = {}
                    pos[this.origin.pos] = elements[0].parentNode[this.origin.offset] + 'px'
                    css(this.track, pos)
                } else {
                    this.barTopLimit = elements[0].parentNode[this.origin.offset]
                }
                // this.barTopLimit = elements[0].parentNode[this.origin.offset]
                this.scroll()
            }

            if (params.limiter === false) { // undefined (in second fix instance) should have no influence on bar limit
                this.barTopLimit = 0
            }
        }

        var event = {
            element: elements,

            handler: function() {
                var parent = this.parentNode,
                    top = parent.offsetTop,
                    num

                // finding num -> elements[num] === this
                for (var j = 0; j < elements.length; j++ ) {
                    if (elements[j] === this) num = j
                }

                var locPos = top - topFixHeights[num]

                if (params.scroll) { // User defined callback
                    params.scroll({
                        x1: self.scroller.scrollTop,
                        x2: locPos
                    })
                } else {
                    self.scroller.scrollTop = locPos
                }
            },

            type: 'click'
        }

        if (params.clickable) {
            this._eventHandlers.push(event) // For auto-dispose
            // eventManager(event.element, event.type, event.handler, 'off')
            for (var j = 0; j < event.element.length; j++) {
                eventManager(event.element[j], event.type, event.handler, 'on')
            }
        }
    }

    this.on('init', init, userParams)

    var fixFlag = [], // 1 - past, 2 - future, 3 - current (not fixed)
        gradFlag = []

    this.on('init scroll', function() {
        var fixState, hTop, gradState
        var i

        if (elements) {
            var change

            // fixFlag update
            for (i = 0; i < elements.length; i++) {
                fixState = 0
                if (headerTops[i] - this.pos() < topRealHeights[i] + params.radius) {
                    // Header trying to go up
                    fixState = 1
                    hTop = topFixHeights[i]
                } else if (headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize - params.radius) {
                    // Header trying to go down
                    fixState = 2
                    // console.log('topFixHeights[i] + viewPortSize + topRealHeights[i]', topFixHeights[i], this.scroller[this.origin.client], topRealHeights[i])
                    hTop = this.scroller[this.origin.client] - elements[i][this.origin.offset] - topFixHeights[i] - viewPortSize
                    // console.log('hTop', hTop, viewPortSize, elements[this.origin.offset], topFixHeights[i])
                    // (topFixHeights[i] + viewPortSize + elements[this.origin.offset]) - this.scroller[this.origin.client]
                } else {
                    // Header in viewport
                    fixState = 3
                    hTop = undefined
                }

                gradState = false
                if (headerTops[i] - this.pos() < topRealHeights[i] || headerTops[i] - this.pos() > topRealHeights[i] + viewPortSize) {
                    gradState = true
                }

                if (fixState != fixFlag[i] || gradState != gradFlag[i]) {
                    fixElement.call(this, i, hTop, fixState)
                    fixFlag[i] = fixState
                    gradFlag[i] = gradState
                    change = true
                }
            }

            // Adding positioning classes (on last top and first bottom header)
            if (change) { // At leats one change in elements flag structure occured
                for (i = 0; i < elements.length; i++) {
                    if (fixFlag[i] == 1 && params.past) {
                        add(elements[i], params.past)
                        rm(elements[i], params.future)
                    }

                    if (fixFlag[i] == 2 && params.future) {
                        add(elements[i], params.future)
                        rm(elements[i], params.past)
                    }

                    if (fixFlag[i] == 3) {
                        rm(elements[i], params.past)
                        rm(elements[i], params.future)
                        add(elements[i], params.inside)
                    }

                    if (fixFlag[i] != fixFlag[i + 1] && fixFlag[i] == 1) {
                        add(elements[i], params.before)
                        rm(elements[i], params.after) // Last top fixed header
                    } else if (fixFlag[i] != fixFlag[i - 1] && fixFlag[i] == 2) {
                        add(elements[i], params.after)
                        rm(elements[i], params.before) // First bottom fixed header
                    } else {
                        rm(elements[i], params.before)
                        rm(elements[i], params.after)
                    }

                    if (params.grad) {
                        if (gradFlag[i]) {
                            add(elements[i], params.grad)
                        } else {
                            rm(elements[i], params.grad)
                        }
                    }
                }
            }
        }
    })

    this.on('resize upd', function(updParams) {
        init.call(this, updParams && updParams.fix)
    })

    return this
}


/***/ }),

/***/ "./node_modules/baron/src/log.js":
/*!***************************************!*\
  !*** ./node_modules/baron/src/log.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function log(level, msg, more) {
    var func = console[level] || console.log
    var args = [
        'Baron: ' + msg,
        more
    ]

    Function.prototype.apply.call(func, console, args)
}


/***/ }),

/***/ "./node_modules/baron/src/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/baron/src/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Test via a getter in the options object to see if the passive property is accessed
// https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
var supportsPassive = false

try {
    var opts = Object.defineProperty({}, 'passive', {
        get: function() {
            supportsPassive = true
        }
    })

    window.addEventListener('test', null, opts)
} catch (e) {
    // pass
}

module.exports.event = function event(elem, _eventNames, handler, mode) {
    var eventNames = _eventNames.split(' ')
    var prefix = mode == 'on' ? 'add' : 'remove'

    eventNames.forEach(function(eventName) {
        var options = false

        if (['scroll', 'touchstart', 'touchmove'].indexOf(eventName) != -1 && supportsPassive) {
            options = { passive: true }
        }

        elem[prefix + 'EventListener'](eventName, handler, options)
    })
}

function each(obj, handler) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            handler(key, obj[key])
        }
    }
}

module.exports.css = function css(node, key, value) {
    var styles

    if (value === undefined) {
        // Getter mode
        if (typeof key == 'string') {
            return node.style[key]
        }

        styles = key
    } else {
        styles = {}
        styles[key] = value
    }

    each(styles, function(k, val) {
        node.style[k] = val
    })
}

module.exports.add = function add(node, cls) {
    if (!cls) {
        return
    }

    node.classList.add(cls)
}

module.exports.rm = function add(node, cls) {
    if (!cls) {
        return
    }

    node.classList.remove(cls)
}

module.exports.has = function has(node, cls) {
    if (!cls) {
        return false
    }

    return node.classList.contains(cls)
}

module.exports.clone = function clone(_input) {
    var output = {}
    var input = _input || {}

    each(input, function(key, value) {
        output[key] = value
    })

    return output
}

module.exports.qs = function qs(selector, _ctx) {
    if (selector instanceof HTMLElement) {
        return selector
    }

    var ctx = _ctx || document

    return ctx.querySelector(selector)
}

module.exports.each = each


/***/ }),

/***/ "./node_modules/choices.js/public/assets/scripts/choices.js":
/*!******************************************************************!*\
  !*** ./node_modules/choices.js/public/assets/scripts/choices.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/public/assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	try {
		return (key in target) // Properties are safe to merge if they don't exist in the target yet,
			&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
				&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
	} catch (unused) {
		// Counterintuitively, it's safe to merge any property on a target that causes the `in` operator to throw.
		// This happens when trying to copy an object in the source over a plain string in the target.
		return false
	}
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(5), __webpack_require__(6)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function(e,t){ true?module.exports=t():undefined}(this,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,n){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=n(2),a=n(8),s=n(0),c=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.caseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m,S=n.id,x=void 0===S?null:S,b=n.keys,M=void 0===b?[]:b,_=n.shouldSort,L=void 0===_||_,w=n.getFn,A=void 0===w?a:w,C=n.sortFn,I=void 0===C?function(e,t){return e.score-t.score}:C,O=n.tokenize,j=void 0!==O&&O,P=n.matchAllTokens,F=void 0!==P&&P,T=n.includeMatches,z=void 0!==T&&T,E=n.includeScore,K=void 0!==E&&E,$=n.verbose,J=void 0!==$&&$;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k,id:x,keys:M,includeMatches:z,includeScore:K,shouldSort:L,getFn:A,sortFn:I,verbose:J,tokenize:j,matchAllTokens:F},this.setCollection(t)}var t,n,c;return t=e,(n=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var n=this._prepareSearchers(e),r=n.tokenSearchers,o=n.fullSearcher,i=this._search(r,o),a=i.weights,s=i.results;return this._computeScore(a,s),this.options.shouldSort&&this._sort(s),t.limit&&"number"==typeof t.limit&&(s=s.slice(0,t.limit)),this._format(s)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var n=e.split(this.options.tokenSeparator),r=0,o=n.length;r<o;r+=1)t.push(new i(n[r],this.options));return{tokenSearchers:t,fullSearcher:new i(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=this.list,r={},o=[];if("string"==typeof n[0]){for(var i=0,a=n.length;i<a;i+=1)this._analyze({key:"",value:n[i],record:i,index:i},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t});return{weights:null,results:o}}for(var s={},c=0,h=n.length;c<h;c+=1)for(var l=n[c],u=0,f=this.options.keys.length;u<f;u+=1){var d=this.options.keys[u];if("string"!=typeof d){if(s[d.name]={weight:1-d.weight||1},d.weight<=0||d.weight>1)throw new Error("Key weight has to be > 0 and <= 1");d=d.name}else s[d]={weight:1};this._analyze({key:d,value:this.options.getFn(l,d),record:l,index:c},{resultMap:r,results:o,tokenSearchers:e,fullSearcher:t})}return{weights:s,results:o}}},{key:"_analyze",value:function(e,t){var n=e.key,r=e.arrayIndex,o=void 0===r?-1:r,i=e.value,a=e.record,c=e.index,h=t.tokenSearchers,l=void 0===h?[]:h,u=t.fullSearcher,f=void 0===u?[]:u,d=t.resultMap,v=void 0===d?{}:d,p=t.results,g=void 0===p?[]:p;if(null!=i){var y=!1,m=-1,k=0;if("string"==typeof i){this._log("\nKey: ".concat(""===n?"-":n));var S=f.search(i);if(this._log('Full text: "'.concat(i,'", score: ').concat(S.score)),this.options.tokenize){for(var x=i.split(this.options.tokenSeparator),b=[],M=0;M<l.length;M+=1){var _=l[M];this._log('\nPattern: "'.concat(_.pattern,'"'));for(var L=!1,w=0;w<x.length;w+=1){var A=x[w],C=_.search(A),I={};C.isMatch?(I[A]=C.score,y=!0,L=!0,b.push(C.score)):(I[A]=1,this.options.matchAllTokens||b.push(1)),this._log('Token: "'.concat(A,'", score: ').concat(I[A]))}L&&(k+=1)}m=b[0];for(var O=b.length,j=1;j<O;j+=1)m+=b[j];m/=O,this._log("Token score average:",m)}var P=S.score;m>-1&&(P=(P+m)/2),this._log("Score average:",P);var F=!this.options.tokenize||!this.options.matchAllTokens||k>=l.length;if(this._log("\nCheck Matches: ".concat(F)),(y||S.isMatch)&&F){var T=v[c];T?T.output.push({key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}):(v[c]={item:a,output:[{key:n,arrayIndex:o,value:i,score:P,matchedIndices:S.matchedIndices}]},g.push(v[c]))}}else if(s(i))for(var z=0,E=i.length;z<E;z+=1)this._analyze({key:n,arrayIndex:z,value:i[z],record:a,index:c},{resultMap:v,results:g,tokenSearchers:l,fullSearcher:f})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var n=0,r=t.length;n<r;n+=1){for(var o=t[n].output,i=o.length,a=1,s=1,c=0;c<i;c+=1){var h=e?e[o[c].key].weight:1,l=(1===h?o[c].score:o[c].score||.001)*h;1!==h?s=Math.min(s,l):(o[c].nScore=l,a*=l)}t[n].score=1===s?a:s,this._log(t[n])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var n=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,function(e,t){if("object"===r(t)&&null!==t){if(-1!==n.indexOf(t))return;n.push(t)}return t})),n=null}var o=[];this.options.includeMatches&&o.push(function(e,t){var n=e.output;t.matches=[];for(var r=0,o=n.length;r<o;r+=1){var i=n[r];if(0!==i.matchedIndices.length){var a={indices:i.matchedIndices,value:i.value};i.key&&(a.key=i.key),i.hasOwnProperty("arrayIndex")&&i.arrayIndex>-1&&(a.arrayIndex=i.arrayIndex),t.matches.push(a)}}}),this.options.includeScore&&o.push(function(e,t){t.score=e.score});for(var i=0,a=e.length;i<a;i+=1){var s=e[i];if(this.options.id&&(s.item=this.options.getFn(s.item,this.options.id)[0]),o.length){for(var c={item:s.item},h=0,l=o.length;h<l;h+=1)o[h](s,c);t.push(c)}else t.push(s.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&o(t.prototype,n),c&&o(t,c),e}();e.exports=c},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(3),i=n(4),a=n(7),s=function(){function e(t,n){var r=n.location,o=void 0===r?0:r,i=n.distance,s=void 0===i?100:i,c=n.threshold,h=void 0===c?.6:c,l=n.maxPatternLength,u=void 0===l?32:l,f=n.isCaseSensitive,d=void 0!==f&&f,v=n.tokenSeparator,p=void 0===v?/ +/g:v,g=n.findAllMatches,y=void 0!==g&&g,m=n.minMatchCharLength,k=void 0===m?1:m;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:o,distance:s,threshold:h,maxPatternLength:u,isCaseSensitive:d,tokenSeparator:p,findAllMatches:y,minMatchCharLength:k},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=u&&(this.patternAlphabet=a(this.pattern))}var t,n,s;return t=e,(n=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,n=t.maxPatternLength,r=t.tokenSeparator;if(this.pattern.length>n)return o(e,this.pattern,r);var a=this.options,s=a.location,c=a.distance,h=a.threshold,l=a.findAllMatches,u=a.minMatchCharLength;return i(e,this.pattern,this.patternAlphabet,{location:s,distance:c,threshold:h,findAllMatches:l,minMatchCharLength:u})}}])&&r(t.prototype,n),s&&r(t,s),e}();e.exports=s},function(e,t){var n=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,o=new RegExp(t.replace(n,"\\$&").replace(r,"|")),i=e.match(o),a=!!i,s=[];if(a)for(var c=0,h=i.length;c<h;c+=1){var l=i[c];s.push([e.indexOf(l),l.length-1])}return{score:a?.5:1,isMatch:a,matchedIndices:s}}},function(e,t,n){var r=n(5),o=n(6);e.exports=function(e,t,n,i){for(var a=i.location,s=void 0===a?0:a,c=i.distance,h=void 0===c?100:c,l=i.threshold,u=void 0===l?.6:l,f=i.findAllMatches,d=void 0!==f&&f,v=i.minMatchCharLength,p=void 0===v?1:v,g=s,y=e.length,m=u,k=e.indexOf(t,g),S=t.length,x=[],b=0;b<y;b+=1)x[b]=0;if(-1!==k){var M=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});if(m=Math.min(M,m),-1!==(k=e.lastIndexOf(t,g+S))){var _=r(t,{errors:0,currentLocation:k,expectedLocation:g,distance:h});m=Math.min(_,m)}}k=-1;for(var L=[],w=1,A=S+y,C=1<<S-1,I=0;I<S;I+=1){for(var O=0,j=A;O<j;){r(t,{errors:I,currentLocation:g+j,expectedLocation:g,distance:h})<=m?O=j:A=j,j=Math.floor((A-O)/2+O)}A=j;var P=Math.max(1,g-j+1),F=d?y:Math.min(g+j,y)+S,T=Array(F+2);T[F+1]=(1<<I)-1;for(var z=F;z>=P;z-=1){var E=z-1,K=n[e.charAt(E)];if(K&&(x[E]=1),T[z]=(T[z+1]<<1|1)&K,0!==I&&(T[z]|=(L[z+1]|L[z])<<1|1|L[z+1]),T[z]&C&&(w=r(t,{errors:I,currentLocation:E,expectedLocation:g,distance:h}))<=m){if(m=w,(k=E)<=g)break;P=Math.max(1,2*g-k)}}if(r(t,{errors:I+1,currentLocation:g,expectedLocation:g,distance:h})>m)break;L=T}return{isMatch:k>=0,score:0===w?.001:w,matchedIndices:o(x,p)}}},function(e,t){e.exports=function(e,t){var n=t.errors,r=void 0===n?0:n,o=t.currentLocation,i=void 0===o?0:o,a=t.expectedLocation,s=void 0===a?0:a,c=t.distance,h=void 0===c?100:c,l=r/e.length,u=Math.abs(s-i);return h?l+u/h:u?1:l}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],r=-1,o=-1,i=0,a=e.length;i<a;i+=1){var s=e[i];s&&-1===r?r=i:s||-1===r||((o=i-1)-r+1>=t&&n.push([r,o]),r=-1)}return e[i-1]&&i-r>=t&&n.push([r,i-1]),n}},function(e,t){e.exports=function(e){for(var t={},n=e.length,r=0;r<n;r+=1)t[e.charAt(r)]=0;for(var o=0;o<n;o+=1)t[e.charAt(o)]|=1<<n-o-1;return t}},function(e,t,n){var r=n(0);e.exports=function(e,t){return function e(t,n,o){if(n){var i=n.indexOf("."),a=n,s=null;-1!==i&&(a=n.slice(0,i),s=n.slice(i+1));var c=t[a];if(null!=c)if(s||"string"!=typeof c&&"number"!=typeof c)if(r(c))for(var h=0,l=c.length;h<l;h+=1)e(c[h],s,o);else s&&e(c,s,o);else o.push(c.toString())}else o.push(t);return o}(e,t,[])}}])});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/fuse.js/dist/fuse.js
var dist_fuse = __webpack_require__(2);
var fuse_default = /*#__PURE__*/__webpack_require__.n(dist_fuse);

// EXTERNAL MODULE: ./node_modules/deepmerge/dist/cjs.js
var cjs = __webpack_require__(0);
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/redux/es/redux.js


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}



// CONCATENATED MODULE: ./src/scripts/reducers/items.js
var defaultState = [];
function items_items(state, action) {
  if (state === void 0) {
    state = defaultState;
  }

  switch (action.type) {
    case 'ADD_ITEM':
      {
        // Add object to items array
        var newState = [].concat(state, [{
          id: action.id,
          choiceId: action.choiceId,
          groupId: action.groupId,
          value: action.value,
          label: action.label,
          active: true,
          highlighted: false,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
        return newState.map(function (obj) {
          var item = obj;
          item.highlighted = false;
          return item;
        });
      }

    case 'REMOVE_ITEM':
      {
        // Set item to inactive
        return state.map(function (obj) {
          var item = obj;

          if (item.id === action.id) {
            item.active = false;
          }

          return item;
        });
      }

    case 'HIGHLIGHT_ITEM':
      {
        return state.map(function (obj) {
          var item = obj;

          if (item.id === action.id) {
            item.highlighted = action.highlighted;
          }

          return item;
        });
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/groups.js
var groups_defaultState = [];
function groups(state, action) {
  if (state === void 0) {
    state = groups_defaultState;
  }

  switch (action.type) {
    case 'ADD_GROUP':
      {
        return [].concat(state, [{
          id: action.id,
          value: action.value,
          active: action.active,
          disabled: action.disabled
        }]);
      }

    case 'CLEAR_CHOICES':
      {
        return [];
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/choices.js
var choices_defaultState = [];
function choices_choices(state, action) {
  if (state === void 0) {
    state = choices_defaultState;
  }

  switch (action.type) {
    case 'ADD_CHOICE':
      {
        /*
            A disabled choice appears in the choice dropdown but cannot be selected
            A selected choice has been added to the passed input's value (added as an item)
            An active choice appears within the choice dropdown
         */
        return [].concat(state, [{
          id: action.id,
          elementId: action.elementId,
          groupId: action.groupId,
          value: action.value,
          label: action.label || action.value,
          disabled: action.disabled || false,
          selected: false,
          active: true,
          score: 9999,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
      }

    case 'ADD_ITEM':
      {
        // If all choices need to be activated
        if (action.activateOptions) {
          return state.map(function (obj) {
            var choice = obj;
            choice.active = action.active;
            return choice;
          });
        } // When an item is added and it has an associated choice,
        // we want to disable it so it can't be chosen again


        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;

            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = true;
            }

            return choice;
          });
        }

        return state;
      }

    case 'REMOVE_ITEM':
      {
        // When an item is removed and it has an associated choice,
        // we want to re-enable it so it can be chosen again
        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;

            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = false;
            }

            return choice;
          });
        }

        return state;
      }

    case 'FILTER_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj; // Set active state based on whether choice is
          // within filtered results

          choice.active = action.results.some(function (_ref) {
            var item = _ref.item,
                score = _ref.score;

            if (item.id === choice.id) {
              choice.score = score;
              return true;
            }

            return false;
          });
          return choice;
        });
      }

    case 'ACTIVATE_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj;
          choice.active = action.active;
          return choice;
        });
      }

    case 'CLEAR_CHOICES':
      {
        return choices_defaultState;
      }

    default:
      {
        return state;
      }
  }
}
// CONCATENATED MODULE: ./src/scripts/reducers/general.js
var general_defaultState = {
  loading: false
};

var general = function general(state, action) {
  if (state === void 0) {
    state = general_defaultState;
  }

  switch (action.type) {
    case 'SET_IS_LOADING':
      {
        return {
          loading: action.isLoading
        };
      }

    default:
      {
        return state;
      }
  }
};

/* harmony default export */ var reducers_general = (general);
// CONCATENATED MODULE: ./src/scripts/lib/utils.js
/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
var getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};
/**
 * @param {number} length
 * @returns {string}
 */

var generateChars = function generateChars(length) {
  return Array.from({
    length: length
  }, function () {
    return getRandomNumber(0, 36).toString(36);
  }).join('');
};
/**
 * @param {HTMLInputElement | HTMLSelectElement} element
 * @param {string} prefix
 * @returns {string}
 */

var generateId = function generateId(element, prefix) {
  var id = element.id || element.name && element.name + "-" + generateChars(2) || generateChars(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, '');
  id = prefix + "-" + id;
  return id;
};
/**
 * @param {any} obj
 * @returns {string}
 */

var getType = function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};
/**
 * @param {string} type
 * @param {any} obj
 * @returns {boolean}
 */

var isType = function isType(type, obj) {
  return obj !== undefined && obj !== null && getType(obj) === type;
};
/**
 * @param {HTMLElement} element
 * @param {HTMLElement} [wrapper={HTMLDivElement}]
 * @returns {HTMLElement}
 */

var utils_wrap = function wrap(element, wrapper) {
  if (wrapper === void 0) {
    wrapper = document.createElement('div');
  }

  if (element.nextSibling) {
    element.parentNode.insertBefore(wrapper, element.nextSibling);
  } else {
    element.parentNode.appendChild(wrapper);
  }

  return wrapper.appendChild(element);
};
/**
 * @param {Element} startEl
 * @param {string} selector
 * @param {1 | -1} direction
 * @returns {Element | undefined}
 */

var getAdjacentEl = function getAdjacentEl(startEl, selector, direction) {
  if (direction === void 0) {
    direction = 1;
  }

  if (!(startEl instanceof Element) || typeof selector !== 'string') {
    return undefined;
  }

  var prop = (direction > 0 ? 'next' : 'previous') + "ElementSibling";
  var sibling = startEl[prop];

  while (sibling) {
    if (sibling.matches(selector)) {
      return sibling;
    }

    sibling = sibling[prop];
  }

  return sibling;
};
/**
 * @param {Element} element
 * @param {Element} parent
 * @param {-1 | 1} direction
 * @returns {boolean}
 */

var isScrolledIntoView = function isScrolledIntoView(element, parent, direction) {
  if (direction === void 0) {
    direction = 1;
  }

  if (!element) {
    return false;
  }

  var isVisible;

  if (direction > 0) {
    // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
  } else {
    // In view from top
    isVisible = element.offsetTop >= parent.scrollTop;
  }

  return isVisible;
};
/**
 * @param {any} value
 * @returns {any}
 */

var sanitise = function sanitise(value) {
  if (typeof value !== 'string') {
    return value;
  }

  return value.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};
/**
 * @returns {() => (str: string) => Element}
 */

var strToEl = function () {
  var tmpEl = document.createElement('div');
  return function (str) {
    var cleanedInput = str.trim();
    tmpEl.innerHTML = cleanedInput;
    var firldChild = tmpEl.children[0];

    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }

    return firldChild;
  };
}();
/**
 * @param {{ label?: string, value: string }} a
 * @param {{ label?: string, value: string }} b
 * @returns {number}
 */

var sortByAlpha = function sortByAlpha(_ref, _ref2) {
  var value = _ref.value,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? value : _ref$label;
  var value2 = _ref2.value,
      _ref2$label = _ref2.label,
      label2 = _ref2$label === void 0 ? value2 : _ref2$label;
  return label.localeCompare(label2, [], {
    sensitivity: 'base',
    ignorePunctuation: true,
    numeric: true
  });
};
/**
 * @param {{ score: number }} a
 * @param {{ score: number }} b
 */

var sortByScore = function sortByScore(a, b) {
  return a.score - b.score;
};
/**
 * @param {HTMLElement} element
 * @param {string} type
 * @param {object} customArgs
 */

var dispatchEvent = function dispatchEvent(element, type, customArgs) {
  if (customArgs === void 0) {
    customArgs = null;
  }

  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });
  return element.dispatchEvent(event);
};
/**
 * @param {array} array
 * @param {any} value
 * @param {string} [key="value"]
 * @returns {boolean}
 */

var existsInArray = function existsInArray(array, value, key) {
  if (key === void 0) {
    key = 'value';
  }

  return array.some(function (item) {
    if (typeof value === 'string') {
      return item[key] === value.trim();
    }

    return item[key] === value;
  });
};
/**
 * @param {any} obj
 * @returns {any}
 */

var cloneObject = function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
};
/**
 * Returns an array of keys present on the first but missing on the second object
 * @param {object} a
 * @param {object} b
 * @returns {string[]}
 */

var diff = function diff(a, b) {
  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();
  return aKeys.filter(function (i) {
    return bKeys.indexOf(i) < 0;
  });
};
// CONCATENATED MODULE: ./src/scripts/reducers/index.js






var appReducer = combineReducers({
  items: items_items,
  groups: groups,
  choices: choices_choices,
  general: reducers_general
});

var reducers_rootReducer = function rootReducer(passedState, action) {
  var state = passedState; // If we are clearing all items, groups and options we reassign
  // state and then pass that state to our proper reducer. This isn't
  // mutating our actual state
  // See: http://stackoverflow.com/a/35641992

  if (action.type === 'CLEAR_ALL') {
    state = undefined;
  } else if (action.type === 'RESET_TO') {
    return cloneObject(action.state);
  }

  return appReducer(state, action);
};

/* harmony default export */ var reducers = (reducers_rootReducer);
// CONCATENATED MODULE: ./src/scripts/store/store.js
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 * @typedef {import('../../../types/index').Choices.Group} Group
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

var store_Store =
/*#__PURE__*/
function () {
  function Store() {
    this._store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  }
  /**
   * Subscribe store to function call (wrapped Redux method)
   * @param  {Function} onChange Function to trigger when state changes
   * @return
   */


  var _proto = Store.prototype;

  _proto.subscribe = function subscribe(onChange) {
    this._store.subscribe(onChange);
  }
  /**
   * Dispatch event to store (wrapped Redux method)
   * @param  {{ type: string, [x: string]: any }} action Action to trigger
   * @return
   */
  ;

  _proto.dispatch = function dispatch(action) {
    this._store.dispatch(action);
  }
  /**
   * Get store object (wrapping Redux method)
   * @returns {object} State
   */
  ;

  /**
   * Get loading state from store
   * @returns {boolean} Loading State
   */
  _proto.isLoading = function isLoading() {
    return this.state.general.loading;
  }
  /**
   * Get single choice by it's ID
   * @param {string} id
   * @returns {Choice | undefined} Found choice
   */
  ;

  _proto.getChoiceById = function getChoiceById(id) {
    return this.activeChoices.find(function (choice) {
      return choice.id === parseInt(id, 10);
    });
  }
  /**
   * Get group by group id
   * @param  {number} id Group ID
   * @returns {Group | undefined} Group data
   */
  ;

  _proto.getGroupById = function getGroupById(id) {
    return this.groups.find(function (group) {
      return group.id === id;
    });
  };

  _createClass(Store, [{
    key: "state",
    get: function get() {
      return this._store.getState();
    }
    /**
     * Get items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "items",
    get: function get() {
      return this.state.items;
    }
    /**
     * Get active items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "activeItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.active === true;
      });
    }
    /**
     * Get highlighted items from store
     * @returns {Item[]} Item objects
     */

  }, {
    key: "highlightedActiveItems",
    get: function get() {
      return this.items.filter(function (item) {
        return item.active && item.highlighted;
      });
    }
    /**
     * Get choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "choices",
    get: function get() {
      return this.state.choices;
    }
    /**
     * Get active choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "activeChoices",
    get: function get() {
      return this.choices.filter(function (choice) {
        return choice.active === true;
      });
    }
    /**
     * Get selectable choices from store
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "selectableChoices",
    get: function get() {
      return this.choices.filter(function (choice) {
        return choice.disabled !== true;
      });
    }
    /**
     * Get choices that can be searched (excluding placeholders)
     * @returns {Choice[]} Option objects
     */

  }, {
    key: "searchableChoices",
    get: function get() {
      return this.selectableChoices.filter(function (choice) {
        return choice.placeholder !== true;
      });
    }
    /**
     * Get placeholder choice from store
     * @returns {Choice | undefined} Found placeholder
     */

  }, {
    key: "placeholderChoice",
    get: function get() {
      return [].concat(this.choices).reverse().find(function (choice) {
        return choice.placeholder === true;
      });
    }
    /**
     * Get groups from store
     * @returns {Group[]} Group objects
     */

  }, {
    key: "groups",
    get: function get() {
      return this.state.groups;
    }
    /**
     * Get active groups from store
     * @returns {Group[]} Group objects
     */

  }, {
    key: "activeGroups",
    get: function get() {
      var groups = this.groups,
          choices = this.choices;
      return groups.filter(function (group) {
        var isActive = group.active === true && group.disabled === false;
        var hasActiveOptions = choices.some(function (choice) {
          return choice.active === true && choice.disabled === false;
        });
        return isActive && hasActiveOptions;
      }, []);
    }
  }]);

  return Store;
}();


// CONCATENATED MODULE: ./src/scripts/components/dropdown.js
function dropdown_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function dropdown_createClass(Constructor, protoProps, staticProps) { if (protoProps) dropdown_defineProperties(Constructor.prototype, protoProps); if (staticProps) dropdown_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */
var Dropdown =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   * }} args
   */
  function Dropdown(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.isActive = false;
  }
  /**
   * Bottom position of dropdown in viewport coordinates
   * @returns {number} Vertical position
   */


  var _proto = Dropdown.prototype;

  /**
   * Find element that matches passed selector
   * @param {string} selector
   * @returns {HTMLElement | null}
   */
  _proto.getChild = function getChild(selector) {
    return this.element.querySelector(selector);
  }
  /**
   * Show dropdown to user by adding active state class
   * @returns {this}
   */
  ;

  _proto.show = function show() {
    this.element.classList.add(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isActive = true;
    return this;
  }
  /**
   * Hide dropdown from user
   * @returns {this}
   */
  ;

  _proto.hide = function hide() {
    this.element.classList.remove(this.classNames.activeState);
    this.element.setAttribute('aria-expanded', 'false');
    this.isActive = false;
    return this;
  };

  dropdown_createClass(Dropdown, [{
    key: "distanceFromTopWindow",
    get: function get() {
      return this.element.getBoundingClientRect().bottom;
    }
  }]);

  return Dropdown;
}();


// CONCATENATED MODULE: ./src/scripts/constants.js

/**
 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../types/index').Choices.Options} Options
 */

/** @type {ClassNames} */

var DEFAULT_CLASSNAMES = {
  containerOuter: 'choices',
  containerInner: 'choices__inner',
  input: 'choices__input',
  inputCloned: 'choices__input--cloned',
  list: 'choices__list',
  listItems: 'choices__list--multiple',
  listSingle: 'choices__list--single',
  listDropdown: 'choices__list--dropdown',
  item: 'choices__item',
  itemSelectable: 'choices__item--selectable',
  itemDisabled: 'choices__item--disabled',
  itemChoice: 'choices__item--choice',
  placeholder: 'choices__placeholder',
  group: 'choices__group',
  groupHeading: 'choices__heading',
  button: 'choices__button',
  activeState: 'is-active',
  focusState: 'is-focused',
  openState: 'is-open',
  disabledState: 'is-disabled',
  highlightedState: 'is-highlighted',
  selectedState: 'is-selected',
  flippedState: 'is-flipped',
  loadingState: 'is-loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices'
};
/** @type {Options} */

var DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  addItems: true,
  addItemFilter: null,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  shouldSort: true,
  shouldSortItems: false,
  sorter: sortByAlpha,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  uniqueItemText: 'Only unique values can be added',
  customAddItemText: 'Only values matching specific conditions can be added',
  addItemText: function addItemText(value) {
    return "Press Enter to add <b>\"" + sanitise(value) + "\"</b>";
  },
  maxItemText: function maxItemText(maxItemCount) {
    return "Only " + maxItemCount + " values can be added";
  },
  valueComparer: function valueComparer(value1, value2) {
    return value1 === value2;
  },
  fuseOptions: {
    includeScore: true
  },
  callbackOnInit: null,
  callbackOnCreateTemplates: null,
  classNames: DEFAULT_CLASSNAMES
};
var EVENTS = {
  showDropdown: 'showDropdown',
  hideDropdown: 'hideDropdown',
  change: 'change',
  choice: 'choice',
  search: 'search',
  addItem: 'addItem',
  removeItem: 'removeItem',
  highlightItem: 'highlightItem',
  highlightChoice: 'highlightChoice'
};
var ACTION_TYPES = {
  ADD_CHOICE: 'ADD_CHOICE',
  FILTER_CHOICES: 'FILTER_CHOICES',
  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  ADD_GROUP: 'ADD_GROUP',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
  CLEAR_ALL: 'CLEAR_ALL'
};
var KEY_CODES = {
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};
var TEXT_TYPE = 'text';
var SELECT_ONE_TYPE = 'select-one';
var SELECT_MULTIPLE_TYPE = 'select-multiple';
var SCROLLING_SPEED = 4;
// CONCATENATED MODULE: ./src/scripts/components/container.js


/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var container_Container =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   *  position
   * }} args
   */
  function Container(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        position = _ref.position;
    this.element = element;
    this.classNames = classNames;
    this.type = type;
    this.position = position;
    this.isOpen = false;
    this.isFlipped = false;
    this.isFocussed = false;
    this.isDisabled = false;
    this.isLoading = false;
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  var _proto = Container.prototype;

  _proto.addEventListeners = function addEventListeners() {
    this.element.addEventListener('focus', this._onFocus);
    this.element.addEventListener('blur', this._onBlur);
  };

  _proto.removeEventListeners = function removeEventListeners() {
    this.element.removeEventListener('focus', this._onFocus);
    this.element.removeEventListener('blur', this._onBlur);
  }
  /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   * @param {number} dropdownPos
   * @returns {boolean}
   */
  ;

  _proto.shouldFlip = function shouldFlip(dropdownPos) {
    if (typeof dropdownPos !== 'number') {
      return false;
    } // If flip is enabled and the dropdown bottom position is
    // greater than the window height flip the dropdown.


    var shouldFlip = false;

    if (this.position === 'auto') {
      shouldFlip = !window.matchMedia("(min-height: " + (dropdownPos + 1) + "px)").matches;
    } else if (this.position === 'top') {
      shouldFlip = true;
    }

    return shouldFlip;
  }
  /**
   * @param {string} activeDescendantID
   */
  ;

  _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };

  _proto.removeActiveDescendant = function removeActiveDescendant() {
    this.element.removeAttribute('aria-activedescendant');
  }
  /**
   * @param {number} dropdownPos
   */
  ;

  _proto.open = function open(dropdownPos) {
    this.element.classList.add(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'true');
    this.isOpen = true;

    if (this.shouldFlip(dropdownPos)) {
      this.element.classList.add(this.classNames.flippedState);
      this.isFlipped = true;
    }
  };

  _proto.close = function close() {
    this.element.classList.remove(this.classNames.openState);
    this.element.setAttribute('aria-expanded', 'false');
    this.removeActiveDescendant();
    this.isOpen = false; // A dropdown flips if it does not have space within the page

    if (this.isFlipped) {
      this.element.classList.remove(this.classNames.flippedState);
      this.isFlipped = false;
    }
  };

  _proto.focus = function focus() {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };

  _proto.addFocusState = function addFocusState() {
    this.element.classList.add(this.classNames.focusState);
  };

  _proto.removeFocusState = function removeFocusState() {
    this.element.classList.remove(this.classNames.focusState);
  };

  _proto.enable = function enable() {
    this.element.classList.remove(this.classNames.disabledState);
    this.element.removeAttribute('aria-disabled');

    if (this.type === SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '0');
    }

    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.classList.add(this.classNames.disabledState);
    this.element.setAttribute('aria-disabled', 'true');

    if (this.type === SELECT_ONE_TYPE) {
      this.element.setAttribute('tabindex', '-1');
    }

    this.isDisabled = true;
  }
  /**
   * @param {HTMLElement} element
   */
  ;

  _proto.wrap = function wrap(element) {
    utils_wrap(element, this.element);
  }
  /**
   * @param {Element} element
   */
  ;

  _proto.unwrap = function unwrap(element) {
    // Move passed element outside this element
    this.element.parentNode.insertBefore(element, this.element); // Remove this element

    this.element.parentNode.removeChild(this.element);
  };

  _proto.addLoadingState = function addLoadingState() {
    this.element.classList.add(this.classNames.loadingState);
    this.element.setAttribute('aria-busy', 'true');
    this.isLoading = true;
  };

  _proto.removeLoadingState = function removeLoadingState() {
    this.element.classList.remove(this.classNames.loadingState);
    this.element.removeAttribute('aria-busy');
    this.isLoading = false;
  };

  _proto._onFocus = function _onFocus() {
    this.isFocussed = true;
  };

  _proto._onBlur = function _onBlur() {
    this.isFocussed = false;
  };

  return Container;
}();


// CONCATENATED MODULE: ./src/scripts/components/input.js
function input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function input_createClass(Constructor, protoProps, staticProps) { if (protoProps) input_defineProperties(Constructor.prototype, protoProps); if (staticProps) input_defineProperties(Constructor, staticProps); return Constructor; }



/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var input_Input =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLInputElement,
   *  type: passedElement['type'],
   *  classNames: ClassNames,
   *  preventPaste: boolean
   * }} args
   */
  function Input(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        preventPaste = _ref.preventPaste;
    this.element = element;
    this.type = type;
    this.classNames = classNames;
    this.preventPaste = preventPaste;
    this.isFocussed = this.element === document.activeElement;
    this.isDisabled = element.disabled;
    this._onPaste = this._onPaste.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }
  /**
   * @param {string} placeholder
   */


  var _proto = Input.prototype;

  _proto.addEventListeners = function addEventListeners() {
    this.element.addEventListener('paste', this._onPaste);
    this.element.addEventListener('input', this._onInput, {
      passive: true
    });
    this.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.element.addEventListener('blur', this._onBlur, {
      passive: true
    });
  };

  _proto.removeEventListeners = function removeEventListeners() {
    this.element.removeEventListener('input', this._onInput, {
      passive: true
    });
    this.element.removeEventListener('paste', this._onPaste);
    this.element.removeEventListener('focus', this._onFocus, {
      passive: true
    });
    this.element.removeEventListener('blur', this._onBlur, {
      passive: true
    });
  };

  _proto.enable = function enable() {
    this.element.removeAttribute('disabled');
    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.setAttribute('disabled', '');
    this.isDisabled = true;
  };

  _proto.focus = function focus() {
    if (!this.isFocussed) {
      this.element.focus();
    }
  };

  _proto.blur = function blur() {
    if (this.isFocussed) {
      this.element.blur();
    }
  }
  /**
   * Set value of input to blank
   * @param {boolean} setWidth
   * @returns {this}
   */
  ;

  _proto.clear = function clear(setWidth) {
    if (setWidth === void 0) {
      setWidth = true;
    }

    if (this.element.value) {
      this.element.value = '';
    }

    if (setWidth) {
      this.setWidth();
    }

    return this;
  }
  /**
   * Set the correct input width based on placeholder
   * value or input value
   */
  ;

  _proto.setWidth = function setWidth() {
    // Resize input to contents or placeholder
    var _this$element = this.element,
        style = _this$element.style,
        value = _this$element.value,
        placeholder = _this$element.placeholder;
    style.minWidth = placeholder.length + 1 + "ch";
    style.width = value.length + 1 + "ch";
  }
  /**
   * @param {string} activeDescendantID
   */
  ;

  _proto.setActiveDescendant = function setActiveDescendant(activeDescendantID) {
    this.element.setAttribute('aria-activedescendant', activeDescendantID);
  };

  _proto.removeActiveDescendant = function removeActiveDescendant() {
    this.element.removeAttribute('aria-activedescendant');
  };

  _proto._onInput = function _onInput() {
    if (this.type !== SELECT_ONE_TYPE) {
      this.setWidth();
    }
  }
  /**
   * @param {Event} event
   */
  ;

  _proto._onPaste = function _onPaste(event) {
    if (this.preventPaste) {
      event.preventDefault();
    }
  };

  _proto._onFocus = function _onFocus() {
    this.isFocussed = true;
  };

  _proto._onBlur = function _onBlur() {
    this.isFocussed = false;
  };

  input_createClass(Input, [{
    key: "placeholder",
    set: function set(placeholder) {
      this.element.placeholder = placeholder;
    }
    /**
     * @returns {string}
     */

  }, {
    key: "value",
    get: function get() {
      return sanitise(this.element.value);
    }
    /**
     * @param {string} value
     */
    ,
    set: function set(value) {
      this.element.value = value;
    }
  }]);

  return Input;
}();


// CONCATENATED MODULE: ./src/scripts/components/list.js

/**
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

var list_List =
/*#__PURE__*/
function () {
  /**
   * @param {{ element: HTMLElement }} args
   */
  function List(_ref) {
    var element = _ref.element;
    this.element = element;
    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
  }

  var _proto = List.prototype;

  _proto.clear = function clear() {
    this.element.innerHTML = '';
  }
  /**
   * @param {Element | DocumentFragment} node
   */
  ;

  _proto.append = function append(node) {
    this.element.appendChild(node);
  }
  /**
   * @param {string} selector
   * @returns {Element | null}
   */
  ;

  _proto.getChild = function getChild(selector) {
    return this.element.querySelector(selector);
  }
  /**
   * @returns {boolean}
   */
  ;

  _proto.hasChildren = function hasChildren() {
    return this.element.hasChildNodes();
  };

  _proto.scrollToTop = function scrollToTop() {
    this.element.scrollTop = 0;
  }
  /**
   * @param {Element} element
   * @param {1 | -1} direction
   */
  ;

  _proto.scrollToChildElement = function scrollToChildElement(element, direction) {
    var _this = this;

    if (!element) {
      return;
    }

    var listHeight = this.element.offsetHeight; // Scroll position of dropdown

    var listScrollPosition = this.element.scrollTop + listHeight;
    var elementHeight = element.offsetHeight; // Distance from bottom of element to top of parent

    var elementPos = element.offsetTop + elementHeight; // Difference between the element and scroll position

    var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
    requestAnimationFrame(function () {
      _this._animateScroll(destination, direction);
    });
  }
  /**
   * @param {number} scrollPos
   * @param {number} strength
   * @param {number} destination
   */
  ;

  _proto._scrollDown = function _scrollDown(scrollPos, strength, destination) {
    var easing = (destination - scrollPos) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos + distance;
  }
  /**
   * @param {number} scrollPos
   * @param {number} strength
   * @param {number} destination
   */
  ;

  _proto._scrollUp = function _scrollUp(scrollPos, strength, destination) {
    var easing = (scrollPos - destination) / strength;
    var distance = easing > 1 ? easing : 1;
    this.element.scrollTop = scrollPos - distance;
  }
  /**
   * @param {*} destination
   * @param {*} direction
   */
  ;

  _proto._animateScroll = function _animateScroll(destination, direction) {
    var _this2 = this;

    var strength = SCROLLING_SPEED;
    var choiceListScrollTop = this.element.scrollTop;
    var continueAnimation = false;

    if (direction > 0) {
      this._scrollDown(choiceListScrollTop, strength, destination);

      if (choiceListScrollTop < destination) {
        continueAnimation = true;
      }
    } else {
      this._scrollUp(choiceListScrollTop, strength, destination);

      if (choiceListScrollTop > destination) {
        continueAnimation = true;
      }
    }

    if (continueAnimation) {
      requestAnimationFrame(function () {
        _this2._animateScroll(destination, direction);
      });
    }
  };

  return List;
}();


// CONCATENATED MODULE: ./src/scripts/components/wrapped-element.js
function wrapped_element_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_element_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_element_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_element_defineProperties(Constructor, staticProps); return Constructor; }


/**
 * @typedef {import('../../../types/index').Choices.passedElement} passedElement
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 */

var wrapped_element_WrappedElement =
/*#__PURE__*/
function () {
  /**
   * @param {{
   *  element: HTMLInputElement | HTMLSelectElement,
   *  classNames: ClassNames,
   * }} args
   */
  function WrappedElement(_ref) {
    var element = _ref.element,
        classNames = _ref.classNames;
    this.element = element;
    this.classNames = classNames;

    if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) {
      throw new TypeError('Invalid element passed');
    }

    this.isDisabled = false;
  }

  var _proto = WrappedElement.prototype;

  _proto.conceal = function conceal() {
    // Hide passed input
    this.element.classList.add(this.classNames.input);
    this.element.hidden = true; // Remove element from tab index

    this.element.tabIndex = -1; // Backup original styles if any

    var origStyle = this.element.getAttribute('style');

    if (origStyle) {
      this.element.setAttribute('data-choice-orig-style', origStyle);
    }

    this.element.setAttribute('data-choice', 'active');
  };

  _proto.reveal = function reveal() {
    // Reinstate passed element
    this.element.classList.remove(this.classNames.input);
    this.element.hidden = false;
    this.element.removeAttribute('tabindex'); // Recover original styles if any

    var origStyle = this.element.getAttribute('data-choice-orig-style');

    if (origStyle) {
      this.element.removeAttribute('data-choice-orig-style');
      this.element.setAttribute('style', origStyle);
    } else {
      this.element.removeAttribute('style');
    }

    this.element.removeAttribute('data-choice'); // Re-assign values - this is weird, I know
    // @todo Figure out why we need to do this

    this.element.value = this.element.value; // eslint-disable-line no-self-assign
  };

  _proto.enable = function enable() {
    this.element.removeAttribute('disabled');
    this.element.disabled = false;
    this.isDisabled = false;
  };

  _proto.disable = function disable() {
    this.element.setAttribute('disabled', '');
    this.element.disabled = true;
    this.isDisabled = true;
  };

  _proto.triggerEvent = function triggerEvent(eventType, data) {
    dispatchEvent(this.element, eventType, data);
  };

  wrapped_element_createClass(WrappedElement, [{
    key: "isActive",
    get: function get() {
      return this.element.dataset.choice === 'active';
    }
  }, {
    key: "dir",
    get: function get() {
      return this.element.dir;
    }
  }, {
    key: "value",
    get: function get() {
      return this.element.value;
    },
    set: function set(value) {
      // you must define setter here otherwise it will be readonly property
      this.element.value = value;
    }
  }]);

  return WrappedElement;
}();


// CONCATENATED MODULE: ./src/scripts/components/wrapped-input.js
function wrapped_input_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_input_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_input_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_input_defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

var WrappedInput =
/*#__PURE__*/
function (_WrappedElement) {
  _inheritsLoose(WrappedInput, _WrappedElement);

  /**
   * @param {{
   *  element: HTMLInputElement,
   *  classNames: ClassNames,
   *  delimiter: string
   * }} args
   */
  function WrappedInput(_ref) {
    var _this;

    var element = _ref.element,
        classNames = _ref.classNames,
        delimiter = _ref.delimiter;
    _this = _WrappedElement.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.delimiter = delimiter;
    return _this;
  }
  /**
   * @returns {string}
   */


  wrapped_input_createClass(WrappedInput, [{
    key: "value",
    get: function get() {
      return this.element.value;
    }
    /**
     * @param {Item[]} items
     */
    ,
    set: function set(items) {
      var itemValues = items.map(function (_ref2) {
        var value = _ref2.value;
        return value;
      });
      var joinedValues = itemValues.join(this.delimiter);
      this.element.setAttribute('value', joinedValues);
      this.element.value = joinedValues;
    }
  }]);

  return WrappedInput;
}(wrapped_element_WrappedElement);


// CONCATENATED MODULE: ./src/scripts/components/wrapped-select.js
function wrapped_select_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function wrapped_select_createClass(Constructor, protoProps, staticProps) { if (protoProps) wrapped_select_defineProperties(Constructor.prototype, protoProps); if (staticProps) wrapped_select_defineProperties(Constructor, staticProps); return Constructor; }

function wrapped_select_inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }


/**
 * @typedef {import('../../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../../types/index').Choices.Item} Item
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

var WrappedSelect =
/*#__PURE__*/
function (_WrappedElement) {
  wrapped_select_inheritsLoose(WrappedSelect, _WrappedElement);

  /**
   * @param {{
   *  element: HTMLSelectElement,
   *  classNames: ClassNames,
   *  delimiter: string
   *  template: function
   * }} args
   */
  function WrappedSelect(_ref) {
    var _this;

    var element = _ref.element,
        classNames = _ref.classNames,
        template = _ref.template;
    _this = _WrappedElement.call(this, {
      element: element,
      classNames: classNames
    }) || this;
    _this.template = template;
    return _this;
  }

  var _proto = WrappedSelect.prototype;

  /**
   * @param {DocumentFragment} fragment
   */
  _proto.appendDocFragment = function appendDocFragment(fragment) {
    this.element.innerHTML = '';
    this.element.appendChild(fragment);
  };

  wrapped_select_createClass(WrappedSelect, [{
    key: "placeholderOption",
    get: function get() {
      return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
      this.element.querySelector('option[placeholder]');
    }
    /**
     * @returns {Element[]}
     */

  }, {
    key: "optionGroups",
    get: function get() {
      return Array.from(this.element.getElementsByTagName('OPTGROUP'));
    }
    /**
     * @returns {Item[] | Choice[]}
     */

  }, {
    key: "options",
    get: function get() {
      return Array.from(this.element.options);
    }
    /**
     * @param {Item[] | Choice[]} options
     */
    ,
    set: function set(options) {
      var _this2 = this;

      var fragment = document.createDocumentFragment();

      var addOptionToFragment = function addOptionToFragment(data) {
        // Create a standard select option
        var option = _this2.template(data); // Append it to fragment


        fragment.appendChild(option);
      }; // Add each list item to list


      options.forEach(function (optionData) {
        return addOptionToFragment(optionData);
      });
      this.appendDocFragment(fragment);
    }
  }]);

  return WrappedSelect;
}(wrapped_element_WrappedElement);


// CONCATENATED MODULE: ./src/scripts/components/index.js







// CONCATENATED MODULE: ./src/scripts/templates.js
/**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 * @typedef {import('../../types/index').Choices.Templates} Templates
 * @typedef {import('../../types/index').Choices.ClassNames} ClassNames
 * @typedef {import('../../types/index').Choices.Options} Options
 * @typedef {import('../../types/index').Choices.Item} Item
 * @typedef {import('../../types/index').Choices.Choice} Choice
 * @typedef {import('../../types/index').Choices.Group} Group
 */
var TEMPLATES =
/** @type {Templates} */
{
  /**
   * @param {Partial<ClassNames>} classNames
   * @param {"ltr" | "rtl" | "auto"} dir
   * @param {boolean} isSelectElement
   * @param {boolean} isSelectOneElement
   * @param {boolean} searchEnabled
   * @param {"select-one" | "select-multiple" | "text"} passedElementType
   */
  containerOuter: function containerOuter(_ref, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType) {
    var _containerOuter = _ref.containerOuter;
    var div = Object.assign(document.createElement('div'), {
      className: _containerOuter
    });
    div.dataset.type = passedElementType;

    if (dir) {
      div.dir = dir;
    }

    if (isSelectOneElement) {
      div.tabIndex = 0;
    }

    if (isSelectElement) {
      div.setAttribute('role', searchEnabled ? 'combobox' : 'listbox');

      if (searchEnabled) {
        div.setAttribute('aria-autocomplete', 'list');
      }
    }

    div.setAttribute('aria-haspopup', 'true');
    div.setAttribute('aria-expanded', 'false');
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   */
  containerInner: function containerInner(_ref2) {
    var _containerInner = _ref2.containerInner;
    return Object.assign(document.createElement('div'), {
      className: _containerInner
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {boolean} isSelectOneElement
   */
  itemList: function itemList(_ref3, isSelectOneElement) {
    var list = _ref3.list,
        listSingle = _ref3.listSingle,
        listItems = _ref3.listItems;
    return Object.assign(document.createElement('div'), {
      className: list + " " + (isSelectOneElement ? listSingle : listItems)
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {string} value
   */
  placeholder: function placeholder(_ref4, value) {
    var _placeholder = _ref4.placeholder;
    return Object.assign(document.createElement('div'), {
      className: _placeholder,
      innerHTML: value
    });
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Item} item
   * @param {boolean} removeItemButton
   */
  item: function item(_ref5, _ref6, removeItemButton) {
    var _item = _ref5.item,
        button = _ref5.button,
        highlightedState = _ref5.highlightedState,
        itemSelectable = _ref5.itemSelectable,
        placeholder = _ref5.placeholder;
    var id = _ref6.id,
        value = _ref6.value,
        label = _ref6.label,
        customProperties = _ref6.customProperties,
        active = _ref6.active,
        disabled = _ref6.disabled,
        highlighted = _ref6.highlighted,
        isPlaceholder = _ref6.placeholder;
    var div = Object.assign(document.createElement('div'), {
      className: _item,
      innerHTML: label
    });
    Object.assign(div.dataset, {
      item: '',
      id: id,
      value: value,
      customProperties: customProperties
    });

    if (active) {
      div.setAttribute('aria-selected', 'true');
    }

    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }

    if (isPlaceholder) {
      div.classList.add(placeholder);
    }

    div.classList.add(highlighted ? highlightedState : itemSelectable);

    if (removeItemButton) {
      if (disabled) {
        div.classList.remove(itemSelectable);
      }

      div.dataset.deletable = '';
      /** @todo This MUST be localizable, not hardcoded! */

      var REMOVE_ITEM_TEXT = 'Remove item';
      var removeButton = Object.assign(document.createElement('button'), {
        type: 'button',
        className: button,
        innerHTML: REMOVE_ITEM_TEXT
      });
      removeButton.setAttribute('aria-label', REMOVE_ITEM_TEXT + ": '" + value + "'");
      removeButton.dataset.button = '';
      div.appendChild(removeButton);
    }

    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {boolean} isSelectOneElement
   */
  choiceList: function choiceList(_ref7, isSelectOneElement) {
    var list = _ref7.list;
    var div = Object.assign(document.createElement('div'), {
      className: list
    });

    if (!isSelectOneElement) {
      div.setAttribute('aria-multiselectable', 'true');
    }

    div.setAttribute('role', 'listbox');
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Group} group
   */
  choiceGroup: function choiceGroup(_ref8, _ref9) {
    var group = _ref8.group,
        groupHeading = _ref8.groupHeading,
        itemDisabled = _ref8.itemDisabled;
    var id = _ref9.id,
        value = _ref9.value,
        disabled = _ref9.disabled;
    var div = Object.assign(document.createElement('div'), {
      className: group + " " + (disabled ? itemDisabled : '')
    });
    div.setAttribute('role', 'group');
    Object.assign(div.dataset, {
      group: '',
      id: id,
      value: value
    });

    if (disabled) {
      div.setAttribute('aria-disabled', 'true');
    }

    div.appendChild(Object.assign(document.createElement('div'), {
      className: groupHeading,
      innerHTML: value
    }));
    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {Choice} choice
   * @param {Options['itemSelectText']} selectText
   */
  choice: function choice(_ref10, _ref11, selectText) {
    var item = _ref10.item,
        itemChoice = _ref10.itemChoice,
        itemSelectable = _ref10.itemSelectable,
        selectedState = _ref10.selectedState,
        itemDisabled = _ref10.itemDisabled,
        placeholder = _ref10.placeholder;
    var id = _ref11.id,
        value = _ref11.value,
        label = _ref11.label,
        groupId = _ref11.groupId,
        elementId = _ref11.elementId,
        isDisabled = _ref11.disabled,
        isSelected = _ref11.selected,
        isPlaceholder = _ref11.placeholder;
    var div = Object.assign(document.createElement('div'), {
      id: elementId,
      innerHTML: label,
      className: item + " " + itemChoice
    });

    if (isSelected) {
      div.classList.add(selectedState);
    }

    if (isPlaceholder) {
      div.classList.add(placeholder);
    }

    div.setAttribute('role', groupId > 0 ? 'treeitem' : 'option');
    Object.assign(div.dataset, {
      choice: '',
      id: id,
      value: value,
      selectText: selectText
    });

    if (isDisabled) {
      div.classList.add(itemDisabled);
      div.dataset.choiceDisabled = '';
      div.setAttribute('aria-disabled', 'true');
    } else {
      div.classList.add(itemSelectable);
      div.dataset.choiceSelectable = '';
    }

    return div;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   * @param {string} placeholderValue
   */
  input: function input(_ref12, placeholderValue) {
    var _input = _ref12.input,
        inputCloned = _ref12.inputCloned;
    var inp = Object.assign(document.createElement('input'), {
      type: 'text',
      className: _input + " " + inputCloned,
      autocomplete: 'off',
      autocapitalize: 'off',
      spellcheck: false
    });
    inp.setAttribute('role', 'textbox');
    inp.setAttribute('aria-autocomplete', 'list');
    inp.setAttribute('aria-label', placeholderValue);
    return inp;
  },

  /**
   * @param {Partial<ClassNames>} classNames
   */
  dropdown: function dropdown(_ref13) {
    var list = _ref13.list,
        listDropdown = _ref13.listDropdown;
    var div = document.createElement('div');
    div.classList.add(list, listDropdown);
    div.setAttribute('aria-expanded', 'false');
    return div;
  },

  /**
   *
   * @param {Partial<ClassNames>} classNames
   * @param {string} innerHTML
   * @param {"no-choices" | "no-results" | ""} type
   */
  notice: function notice(_ref14, innerHTML, type) {
    var item = _ref14.item,
        itemChoice = _ref14.itemChoice,
        noResults = _ref14.noResults,
        noChoices = _ref14.noChoices;

    if (type === void 0) {
      type = '';
    }

    var classes = [item, itemChoice];

    if (type === 'no-choices') {
      classes.push(noChoices);
    } else if (type === 'no-results') {
      classes.push(noResults);
    }

    return Object.assign(document.createElement('div'), {
      innerHTML: innerHTML,
      className: classes.join(' ')
    });
  },

  /**
   * @param {Item} option
   */
  option: function option(_ref15) {
    var label = _ref15.label,
        value = _ref15.value,
        customProperties = _ref15.customProperties,
        active = _ref15.active,
        disabled = _ref15.disabled;
    var opt = new Option(label, value, false, active);

    if (customProperties) {
      opt.dataset.customProperties = customProperties;
    }

    opt.disabled = disabled;
    return opt;
  }
};
/* harmony default export */ var templates = (TEMPLATES);
// CONCATENATED MODULE: ./src/scripts/actions/choices.js
/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Choice} Choice
 */

/**
 * @argument {Choice} choice
 * @returns {Action & Choice}
 */

var choices_addChoice = function addChoice(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      groupId = _ref.groupId,
      disabled = _ref.disabled,
      elementId = _ref.elementId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: ACTION_TYPES.ADD_CHOICE,
    value: value,
    label: label,
    id: id,
    groupId: groupId,
    disabled: disabled,
    elementId: elementId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
/**
 * @argument {Choice[]} results
 * @returns {Action & { results: Choice[] }}
 */

var choices_filterChoices = function filterChoices(results) {
  return {
    type: ACTION_TYPES.FILTER_CHOICES,
    results: results
  };
};
/**
 * @argument {boolean} active
 * @returns {Action & { active: boolean }}
 */

var choices_activateChoices = function activateChoices(active) {
  if (active === void 0) {
    active = true;
  }

  return {
    type: ACTION_TYPES.ACTIVATE_CHOICES,
    active: active
  };
};
/**
 * @returns {Action}
 */

var choices_clearChoices = function clearChoices() {
  return {
    type: ACTION_TYPES.CLEAR_CHOICES
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/items.js

/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Item} Item
 */

/**
 * @param {Item} item
 * @returns {Action & Item}
 */

var items_addItem = function addItem(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      choiceId = _ref.choiceId,
      groupId = _ref.groupId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: ACTION_TYPES.ADD_ITEM,
    value: value,
    label: label,
    id: id,
    choiceId: choiceId,
    groupId: groupId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};
/**
 * @param {string} id
 * @param {string} choiceId
 * @returns {Action & { id: string, choiceId: string }}
 */

var items_removeItem = function removeItem(id, choiceId) {
  return {
    type: ACTION_TYPES.REMOVE_ITEM,
    id: id,
    choiceId: choiceId
  };
};
/**
 * @param {string} id
 * @param {boolean} highlighted
 * @returns {Action & { id: string, highlighted: boolean }}
 */

var items_highlightItem = function highlightItem(id, highlighted) {
  return {
    type: ACTION_TYPES.HIGHLIGHT_ITEM,
    id: id,
    highlighted: highlighted
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/groups.js

/**
 * @typedef {import('redux').Action} Action
 * @typedef {import('../../../types/index').Choices.Group} Group
 */

/**
 * @param {Group} group
 * @returns {Action & Group}
 */

var groups_addGroup = function addGroup(_ref) {
  var value = _ref.value,
      id = _ref.id,
      active = _ref.active,
      disabled = _ref.disabled;
  return {
    type: ACTION_TYPES.ADD_GROUP,
    value: value,
    id: id,
    active: active,
    disabled: disabled
  };
};
// CONCATENATED MODULE: ./src/scripts/actions/misc.js
/**
 * @typedef {import('redux').Action} Action
 */

/**
 * @returns {Action}
 */
var clearAll = function clearAll() {
  return {
    type: 'CLEAR_ALL'
  };
};
/**
 * @param {any} state
 * @returns {Action & { state: object }}
 */

var resetTo = function resetTo(state) {
  return {
    type: 'RESET_TO',
    state: state
  };
};
/**
 * @param {boolean} isLoading
 * @returns {Action & { isLoading: boolean }}
 */

var setIsLoading = function setIsLoading(isLoading) {
  return {
    type: 'SET_IS_LOADING',
    isLoading: isLoading
  };
};
// CONCATENATED MODULE: ./src/scripts/choices.js
function choices_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function choices_createClass(Constructor, protoProps, staticProps) { if (protoProps) choices_defineProperties(Constructor.prototype, protoProps); if (staticProps) choices_defineProperties(Constructor, staticProps); return Constructor; }












/** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */

var IS_IE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
/**
 * @typedef {import('../../types/index').Choices.Choice} Choice
 * @typedef {import('../../types/index').Choices.Item} Item
 * @typedef {import('../../types/index').Choices.Group} Group
 * @typedef {import('../../types/index').Choices.Options} Options
 */

/** @type {Partial<Options>} */

var USER_DEFAULTS = {};
/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */

var choices_Choices =
/*#__PURE__*/
function () {
  choices_createClass(Choices, null, [{
    key: "defaults",
    get: function get() {
      return Object.preventExtensions({
        get options() {
          return USER_DEFAULTS;
        },

        get templates() {
          return TEMPLATES;
        }

      });
    }
    /**
     * @param {string | HTMLInputElement | HTMLSelectElement} element
     * @param {Partial<Options>} userConfig
     */

  }]);

  function Choices(element, userConfig) {
    var _this = this;

    if (element === void 0) {
      element = '[data-choice]';
    }

    if (userConfig === void 0) {
      userConfig = {};
    }

    /** @type {Partial<Options>} */
    this.config = cjs_default.a.all([DEFAULT_CONFIG, Choices.defaults.options, userConfig], // When merging array configs, replace with a copy of the userConfig array,
    // instead of concatenating with the default array
    {
      arrayMerge: function arrayMerge(_, sourceArray) {
        return [].concat(sourceArray);
      }
    });
    var invalidConfigOptions = diff(this.config, DEFAULT_CONFIG);

    if (invalidConfigOptions.length) {
      console.warn('Unknown config option(s) passed', invalidConfigOptions.join(', '));
    }

    var passedElement = typeof element === 'string' ? document.querySelector(element) : element;

    if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) {
      throw TypeError('Expected one of the following types text|select-one|select-multiple');
    }

    this._isTextElement = passedElement.type === TEXT_TYPE;
    this._isSelectOneElement = passedElement.type === SELECT_ONE_TYPE;
    this._isSelectMultipleElement = passedElement.type === SELECT_MULTIPLE_TYPE;
    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
    this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;

    if (!['auto', 'always'].includes(this.config.renderSelectedChoices)) {
      this.config.renderSelectedChoices = 'auto';
    }

    if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== 'function') {
      var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
      this.config.addItemFilter = re.test.bind(re);
    }

    if (this._isTextElement) {
      this.passedElement = new WrappedInput({
        element: passedElement,
        classNames: this.config.classNames,
        delimiter: this.config.delimiter
      });
    } else {
      this.passedElement = new WrappedSelect({
        element: passedElement,
        classNames: this.config.classNames,
        template: function template(data) {
          return _this._templates.option(data);
        }
      });
    }

    this.initialised = false;
    this._store = new store_Store();
    this._initialState = {};
    this._currentState = {};
    this._prevState = {};
    this._currentValue = '';
    this._canSearch = this.config.searchEnabled;
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._placeholderValue = this._generatePlaceholderValue();
    this._baseId = generateId(this.passedElement.element, 'choices-');
    /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     * @type {HTMLElement['dir']}
     */

    this._direction = this.passedElement.dir;

    if (!this._direction) {
      var _window$getComputedSt = window.getComputedStyle(this.passedElement.element),
          elementDirection = _window$getComputedSt.direction;

      var _window$getComputedSt2 = window.getComputedStyle(document.documentElement),
          documentDirection = _window$getComputedSt2.direction;

      if (elementDirection !== documentDirection) {
        this._direction = elementDirection;
      }
    }

    this._idNames = {
      itemChoice: 'item-choice'
    }; // Assign preset groups from passed element

    this._presetGroups = this.passedElement.optionGroups; // Assign preset options from passed element

    this._presetOptions = this.passedElement.options; // Assign preset choices from passed object

    this._presetChoices = this.config.choices; // Assign preset items from passed object first

    this._presetItems = this.config.items; // Add any values passed from attribute

    if (this.passedElement.value) {
      this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
    } // Create array of choices from option elements


    if (this.passedElement.options) {
      this.passedElement.options.forEach(function (o) {
        _this._presetChoices.push({
          value: o.value,
          label: o.innerHTML,
          selected: o.selected,
          disabled: o.disabled || o.parentNode.disabled,
          placeholder: o.value === '' || o.hasAttribute('placeholder'),
          customProperties: o.getAttribute('data-custom-properties')
        });
      });
    }

    this._render = this._render.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onFormReset = this._onFormReset.bind(this);
    this._onAKey = this._onAKey.bind(this);
    this._onEnterKey = this._onEnterKey.bind(this);
    this._onEscapeKey = this._onEscapeKey.bind(this);
    this._onDirectionKey = this._onDirectionKey.bind(this);
    this._onDeleteKey = this._onDeleteKey.bind(this); // If element has already been initialised with Choices, fail silently

    if (this.passedElement.isActive) {
      if (!this.config.silent) {
        console.warn('Trying to initialise Choices on element already initialised');
      }

      this.initialised = true;
      return;
    } // Let's go


    this.init();
  }

  var _proto = Choices.prototype;

  _proto.init = function init() {
    if (this.initialised) {
      return;
    }

    this._createTemplates();

    this._createElements();

    this._createStructure(); // Set initial state (We need to clone the state because some reducers
    // modify the inner objects properties in the state) 🤢


    this._initialState = cloneObject(this._store.state);

    this._store.subscribe(this._render);

    this._render();

    this._addEventListeners();

    var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute('disabled');

    if (shouldDisable) {
      this.disable();
    }

    this.initialised = true;
    var callbackOnInit = this.config.callbackOnInit; // Run callback if it is a function

    if (callbackOnInit && typeof callbackOnInit === 'function') {
      callbackOnInit.call(this);
    }
  };

  _proto.destroy = function destroy() {
    if (!this.initialised) {
      return;
    }

    this._removeEventListeners();

    this.passedElement.reveal();
    this.containerOuter.unwrap(this.passedElement.element);
    this.clearStore();

    if (this._isSelectElement) {
      this.passedElement.options = this._presetOptions;
    }

    this._templates = null;
    this.initialised = false;
  };

  _proto.enable = function enable() {
    if (this.passedElement.isDisabled) {
      this.passedElement.enable();
    }

    if (this.containerOuter.isDisabled) {
      this._addEventListeners();

      this.input.enable();
      this.containerOuter.enable();
    }

    return this;
  };

  _proto.disable = function disable() {
    if (!this.passedElement.isDisabled) {
      this.passedElement.disable();
    }

    if (!this.containerOuter.isDisabled) {
      this._removeEventListeners();

      this.input.disable();
      this.containerOuter.disable();
    }

    return this;
  };

  _proto.highlightItem = function highlightItem(item, runEvent) {
    if (runEvent === void 0) {
      runEvent = true;
    }

    if (!item) {
      return this;
    }

    var id = item.id,
        _item$groupId = item.groupId,
        groupId = _item$groupId === void 0 ? -1 : _item$groupId,
        _item$value = item.value,
        value = _item$value === void 0 ? '' : _item$value,
        _item$label = item.label,
        label = _item$label === void 0 ? '' : _item$label;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_highlightItem(id, true));

    if (runEvent) {
      this.passedElement.triggerEvent(EVENTS.highlightItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group && group.value ? group.value : null
      });
    }

    return this;
  };

  _proto.unhighlightItem = function unhighlightItem(item) {
    if (!item) {
      return this;
    }

    var id = item.id,
        _item$groupId2 = item.groupId,
        groupId = _item$groupId2 === void 0 ? -1 : _item$groupId2,
        _item$value2 = item.value,
        value = _item$value2 === void 0 ? '' : _item$value2,
        _item$label2 = item.label,
        label = _item$label2 === void 0 ? '' : _item$label2;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_highlightItem(id, false));

    this.passedElement.triggerEvent(EVENTS.highlightItem, {
      id: id,
      value: value,
      label: label,
      groupValue: group && group.value ? group.value : null
    });
    return this;
  };

  _proto.highlightAll = function highlightAll() {
    var _this2 = this;

    this._store.items.forEach(function (item) {
      return _this2.highlightItem(item);
    });

    return this;
  };

  _proto.unhighlightAll = function unhighlightAll() {
    var _this3 = this;

    this._store.items.forEach(function (item) {
      return _this3.unhighlightItem(item);
    });

    return this;
  };

  _proto.removeActiveItemsByValue = function removeActiveItemsByValue(value) {
    var _this4 = this;

    this._store.activeItems.filter(function (item) {
      return item.value === value;
    }).forEach(function (item) {
      return _this4._removeItem(item);
    });

    return this;
  };

  _proto.removeActiveItems = function removeActiveItems(excludedId) {
    var _this5 = this;

    this._store.activeItems.filter(function (_ref) {
      var id = _ref.id;
      return id !== excludedId;
    }).forEach(function (item) {
      return _this5._removeItem(item);
    });

    return this;
  };

  _proto.removeHighlightedItems = function removeHighlightedItems(runEvent) {
    var _this6 = this;

    if (runEvent === void 0) {
      runEvent = false;
    }

    this._store.highlightedActiveItems.forEach(function (item) {
      _this6._removeItem(item); // If this action was performed by the user
      // trigger the event


      if (runEvent) {
        _this6._triggerChange(item.value);
      }
    });

    return this;
  };

  _proto.showDropdown = function showDropdown(preventInputFocus) {
    var _this7 = this;

    if (this.dropdown.isActive) {
      return this;
    }

    requestAnimationFrame(function () {
      _this7.dropdown.show();

      _this7.containerOuter.open(_this7.dropdown.distanceFromTopWindow);

      if (!preventInputFocus && _this7._canSearch) {
        _this7.input.focus();
      }

      _this7.passedElement.triggerEvent(EVENTS.showDropdown, {});
    });
    return this;
  };

  _proto.hideDropdown = function hideDropdown(preventInputBlur) {
    var _this8 = this;

    if (!this.dropdown.isActive) {
      return this;
    }

    requestAnimationFrame(function () {
      _this8.dropdown.hide();

      _this8.containerOuter.close();

      if (!preventInputBlur && _this8._canSearch) {
        _this8.input.removeActiveDescendant();

        _this8.input.blur();
      }

      _this8.passedElement.triggerEvent(EVENTS.hideDropdown, {});
    });
    return this;
  };

  _proto.getValue = function getValue(valueOnly) {
    if (valueOnly === void 0) {
      valueOnly = false;
    }

    var values = this._store.activeItems.reduce(function (selectedItems, item) {
      var itemValue = valueOnly ? item.value : item;
      selectedItems.push(itemValue);
      return selectedItems;
    }, []);

    return this._isSelectOneElement ? values[0] : values;
  }
  /**
   * @param {string[] | import('../../types/index').Choices.Item[]} items
   */
  ;

  _proto.setValue = function setValue(items) {
    var _this9 = this;

    if (!this.initialised) {
      return this;
    }

    items.forEach(function (value) {
      return _this9._setChoiceOrItem(value);
    });
    return this;
  };

  _proto.setChoiceByValue = function setChoiceByValue(value) {
    var _this10 = this;

    if (!this.initialised || this._isTextElement) {
      return this;
    } // If only one value has been passed, convert to array


    var choiceValue = Array.isArray(value) ? value : [value]; // Loop through each value and

    choiceValue.forEach(function (val) {
      return _this10._findAndSelectChoiceByValue(val);
    });
    return this;
  }
  /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @template {Choice[] | ((instance: Choices) => object[] | Promise<object[]>)} T
   * @param {T} [choicesArrayOrFetcher]
   * @param {string} [value = 'value'] - name of `value` field
   * @param {string} [label = 'label'] - name of 'label' field
   * @param {boolean} [replaceChoices = false] - whether to replace of add choices
   * @returns {this | Promise<this>}
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */
  ;

  _proto.setChoices = function setChoices(choicesArrayOrFetcher, value, label, replaceChoices) {
    var _this11 = this;

    if (choicesArrayOrFetcher === void 0) {
      choicesArrayOrFetcher = [];
    }

    if (value === void 0) {
      value = 'value';
    }

    if (label === void 0) {
      label = 'label';
    }

    if (replaceChoices === void 0) {
      replaceChoices = false;
    }

    if (!this.initialised) {
      throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
    }

    if (!this._isSelectElement) {
      throw new TypeError("setChoices can't be used with INPUT based Choices");
    }

    if (typeof value !== 'string' || !value) {
      throw new TypeError("value parameter must be a name of 'value' field in passed objects");
    } // Clear choices if needed


    if (replaceChoices) {
      this.clearChoices();
    }

    if (typeof choicesArrayOrFetcher === 'function') {
      // it's a choices fetcher function
      var fetcher = choicesArrayOrFetcher(this);

      if (typeof Promise === 'function' && fetcher instanceof Promise) {
        // that's a promise
        // eslint-disable-next-line compat/compat
        return new Promise(function (resolve) {
          return requestAnimationFrame(resolve);
        }).then(function () {
          return _this11._handleLoadingState(true);
        }).then(function () {
          return fetcher;
        }).then(function (data) {
          return _this11.setChoices(data, value, label, replaceChoices);
        }).catch(function (err) {
          if (!_this11.config.silent) {
            console.error(err);
          }
        }).then(function () {
          return _this11._handleLoadingState(false);
        }).then(function () {
          return _this11;
        });
      } // function returned something else than promise, let's check if it's an array of choices


      if (!Array.isArray(fetcher)) {
        throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: " + typeof fetcher);
      } // recursion with results, it's sync and choices were cleared already


      return this.setChoices(fetcher, value, label, false);
    }

    if (!Array.isArray(choicesArrayOrFetcher)) {
      throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
    }

    this.containerOuter.removeLoadingState();

    this._startLoading();

    choicesArrayOrFetcher.forEach(function (groupOrChoice) {
      if (groupOrChoice.choices) {
        _this11._addGroup({
          id: parseInt(groupOrChoice.id, 10) || null,
          group: groupOrChoice,
          valueKey: value,
          labelKey: label
        });
      } else {
        _this11._addChoice({
          value: groupOrChoice[value],
          label: groupOrChoice[label],
          isSelected: groupOrChoice.selected,
          isDisabled: groupOrChoice.disabled,
          customProperties: groupOrChoice.customProperties,
          placeholder: groupOrChoice.placeholder
        });
      }
    });

    this._stopLoading();

    return this;
  };

  _proto.clearChoices = function clearChoices() {
    this._store.dispatch(choices_clearChoices());

    return this;
  };

  _proto.clearStore = function clearStore() {
    this._store.dispatch(clearAll());

    return this;
  };

  _proto.clearInput = function clearInput() {
    var shouldSetInputWidth = !this._isSelectOneElement;
    this.input.clear(shouldSetInputWidth);

    if (!this._isTextElement && this._canSearch) {
      this._isSearching = false;

      this._store.dispatch(choices_activateChoices(true));
    }

    return this;
  };

  _proto._render = function _render() {
    if (this._store.isLoading()) {
      return;
    }

    this._currentState = this._store.state;
    var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
    var shouldRenderChoices = this._isSelectElement;
    var shouldRenderItems = this._currentState.items !== this._prevState.items;

    if (!stateChanged) {
      return;
    }

    if (shouldRenderChoices) {
      this._renderChoices();
    }

    if (shouldRenderItems) {
      this._renderItems();
    }

    this._prevState = this._currentState;
  };

  _proto._renderChoices = function _renderChoices() {
    var _this12 = this;

    var _this$_store = this._store,
        activeGroups = _this$_store.activeGroups,
        activeChoices = _this$_store.activeChoices;
    var choiceListFragment = document.createDocumentFragment();
    this.choiceList.clear();

    if (this.config.resetScrollPosition) {
      requestAnimationFrame(function () {
        return _this12.choiceList.scrollToTop();
      });
    } // If we have grouped options


    if (activeGroups.length >= 1 && !this._isSearching) {
      // If we have a placeholder choice along with groups
      var activePlaceholders = activeChoices.filter(function (activeChoice) {
        return activeChoice.placeholder === true && activeChoice.groupId === -1;
      });

      if (activePlaceholders.length >= 1) {
        choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
      }

      choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
    } else if (activeChoices.length >= 1) {
      choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
    } // If we have choices to show


    if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
      var activeItems = this._store.activeItems;

      var canAddItem = this._canAddItem(activeItems, this.input.value); // ...and we can select them


      if (canAddItem.response) {
        // ...append them and highlight the first choice
        this.choiceList.append(choiceListFragment);

        this._highlightChoice();
      } else {
        // ...otherwise show a notice
        this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
      }
    } else {
      // Otherwise show a notice
      var dropdownItem;
      var notice;

      if (this._isSearching) {
        notice = typeof this.config.noResultsText === 'function' ? this.config.noResultsText() : this.config.noResultsText;
        dropdownItem = this._getTemplate('notice', notice, 'no-results');
      } else {
        notice = typeof this.config.noChoicesText === 'function' ? this.config.noChoicesText() : this.config.noChoicesText;
        dropdownItem = this._getTemplate('notice', notice, 'no-choices');
      }

      this.choiceList.append(dropdownItem);
    }
  };

  _proto._renderItems = function _renderItems() {
    var activeItems = this._store.activeItems || [];
    this.itemList.clear(); // Create a fragment to store our list items
    // (so we don't have to update the DOM for each item)

    var itemListFragment = this._createItemsFragment(activeItems); // If we have items to add, append them


    if (itemListFragment.childNodes) {
      this.itemList.append(itemListFragment);
    }
  };

  _proto._createGroupsFragment = function _createGroupsFragment(groups, choices, fragment) {
    var _this13 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    var getGroupChoices = function getGroupChoices(group) {
      return choices.filter(function (choice) {
        if (_this13._isSelectOneElement) {
          return choice.groupId === group.id;
        }

        return choice.groupId === group.id && (_this13.config.renderSelectedChoices === 'always' || !choice.selected);
      });
    }; // If sorting is enabled, filter groups


    if (this.config.shouldSort) {
      groups.sort(this.config.sorter);
    }

    groups.forEach(function (group) {
      var groupChoices = getGroupChoices(group);

      if (groupChoices.length >= 1) {
        var dropdownGroup = _this13._getTemplate('choiceGroup', group);

        fragment.appendChild(dropdownGroup);

        _this13._createChoicesFragment(groupChoices, fragment, true);
      }
    });
    return fragment;
  };

  _proto._createChoicesFragment = function _createChoicesFragment(choices, fragment, withinGroup) {
    var _this14 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    if (withinGroup === void 0) {
      withinGroup = false;
    }

    // Create a fragment to store our list items (so we don't have to update the DOM for each item)
    var _this$config = this.config,
        renderSelectedChoices = _this$config.renderSelectedChoices,
        searchResultLimit = _this$config.searchResultLimit,
        renderChoiceLimit = _this$config.renderChoiceLimit;
    var filter = this._isSearching ? sortByScore : this.config.sorter;

    var appendChoice = function appendChoice(choice) {
      var shouldRender = renderSelectedChoices === 'auto' ? _this14._isSelectOneElement || !choice.selected : true;

      if (shouldRender) {
        var dropdownItem = _this14._getTemplate('choice', choice, _this14.config.itemSelectText);

        fragment.appendChild(dropdownItem);
      }
    };

    var rendererableChoices = choices;

    if (renderSelectedChoices === 'auto' && !this._isSelectOneElement) {
      rendererableChoices = choices.filter(function (choice) {
        return !choice.selected;
      });
    } // Split array into placeholders and "normal" choices


    var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
      if (choice.placeholder) {
        acc.placeholderChoices.push(choice);
      } else {
        acc.normalChoices.push(choice);
      }

      return acc;
    }, {
      placeholderChoices: [],
      normalChoices: []
    }),
        placeholderChoices = _rendererableChoices$.placeholderChoices,
        normalChoices = _rendererableChoices$.normalChoices; // If sorting is enabled or the user is searching, filter choices


    if (this.config.shouldSort || this._isSearching) {
      normalChoices.sort(filter);
    }

    var choiceLimit = rendererableChoices.length; // Prepend placeholeder

    var sortedChoices = this._isSelectOneElement ? [].concat(placeholderChoices, normalChoices) : normalChoices;

    if (this._isSearching) {
      choiceLimit = searchResultLimit;
    } else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) {
      choiceLimit = renderChoiceLimit;
    } // Add each choice to dropdown within range


    for (var i = 0; i < choiceLimit; i += 1) {
      if (sortedChoices[i]) {
        appendChoice(sortedChoices[i]);
      }
    }

    return fragment;
  };

  _proto._createItemsFragment = function _createItemsFragment(items, fragment) {
    var _this15 = this;

    if (fragment === void 0) {
      fragment = document.createDocumentFragment();
    }

    // Create fragment to add elements to
    var _this$config2 = this.config,
        shouldSortItems = _this$config2.shouldSortItems,
        sorter = _this$config2.sorter,
        removeItemButton = _this$config2.removeItemButton; // If sorting is enabled, filter items

    if (shouldSortItems && !this._isSelectOneElement) {
      items.sort(sorter);
    }

    if (this._isTextElement) {
      // Update the value of the hidden input
      this.passedElement.value = items;
    } else {
      // Update the options of the hidden input
      this.passedElement.options = items;
    }

    var addItemToFragment = function addItemToFragment(item) {
      // Create new list element
      var listItem = _this15._getTemplate('item', item, removeItemButton); // Append it to list


      fragment.appendChild(listItem);
    }; // Add each list item to list


    items.forEach(addItemToFragment);
    return fragment;
  };

  _proto._triggerChange = function _triggerChange(value) {
    if (value === undefined || value === null) {
      return;
    }

    this.passedElement.triggerEvent(EVENTS.change, {
      value: value
    });
  };

  _proto._selectPlaceholderChoice = function _selectPlaceholderChoice() {
    var placeholderChoice = this._store.placeholderChoice;

    if (placeholderChoice) {
      this._addItem({
        value: placeholderChoice.value,
        label: placeholderChoice.label,
        choiceId: placeholderChoice.id,
        groupId: placeholderChoice.groupId,
        placeholder: placeholderChoice.placeholder
      });

      this._triggerChange(placeholderChoice.value);
    }
  };

  _proto._handleButtonAction = function _handleButtonAction(activeItems, element) {
    if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
      return;
    }

    var itemId = element.parentNode.getAttribute('data-id');
    var itemToRemove = activeItems.find(function (item) {
      return item.id === parseInt(itemId, 10);
    }); // Remove item associated with button

    this._removeItem(itemToRemove);

    this._triggerChange(itemToRemove.value);

    if (this._isSelectOneElement) {
      this._selectPlaceholderChoice();
    }
  };

  _proto._handleItemAction = function _handleItemAction(activeItems, element, hasShiftKey) {
    var _this16 = this;

    if (hasShiftKey === void 0) {
      hasShiftKey = false;
    }

    if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) {
      return;
    }

    var passedId = element.getAttribute('data-id'); // We only want to select one item with a click
    // so we deselect any items that aren't the target
    // unless shift is being pressed

    activeItems.forEach(function (item) {
      if (item.id === parseInt(passedId, 10) && !item.highlighted) {
        _this16.highlightItem(item);
      } else if (!hasShiftKey && item.highlighted) {
        _this16.unhighlightItem(item);
      }
    }); // Focus input as without focus, a user cannot do anything with a
    // highlighted item

    this.input.focus();
  };

  _proto._handleChoiceAction = function _handleChoiceAction(activeItems, element) {
    if (!activeItems || !element) {
      return;
    } // If we are clicking on an option


    var id = element.dataset.id;

    var choice = this._store.getChoiceById(id);

    if (!choice) {
      return;
    }

    var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;
    var hasActiveDropdown = this.dropdown.isActive; // Update choice keyCode

    choice.keyCode = passedKeyCode;
    this.passedElement.triggerEvent(EVENTS.choice, {
      choice: choice
    });

    if (!choice.selected && !choice.disabled) {
      var canAddItem = this._canAddItem(activeItems, choice.value);

      if (canAddItem.response) {
        this._addItem({
          value: choice.value,
          label: choice.label,
          choiceId: choice.id,
          groupId: choice.groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder,
          keyCode: choice.keyCode
        });

        this._triggerChange(choice.value);
      }
    }

    this.clearInput(); // We want to close the dropdown if we are dealing with a single select box

    if (hasActiveDropdown && this._isSelectOneElement) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };

  _proto._handleBackspace = function _handleBackspace(activeItems) {
    if (!this.config.removeItems || !activeItems) {
      return;
    }

    var lastItem = activeItems[activeItems.length - 1];
    var hasHighlightedItems = activeItems.some(function (item) {
      return item.highlighted;
    }); // If editing the last item is allowed and there are not other selected items,
    // we can edit the item value. Otherwise if we can remove items, remove all selected items

    if (this.config.editItems && !hasHighlightedItems && lastItem) {
      this.input.value = lastItem.value;
      this.input.setWidth();

      this._removeItem(lastItem);

      this._triggerChange(lastItem.value);
    } else {
      if (!hasHighlightedItems) {
        // Highlight last item if none already highlighted
        this.highlightItem(lastItem, false);
      }

      this.removeHighlightedItems(true);
    }
  };

  _proto._startLoading = function _startLoading() {
    this._store.dispatch(setIsLoading(true));
  };

  _proto._stopLoading = function _stopLoading() {
    this._store.dispatch(setIsLoading(false));
  };

  _proto._handleLoadingState = function _handleLoadingState(setLoading) {
    if (setLoading === void 0) {
      setLoading = true;
    }

    var placeholderItem = this.itemList.getChild("." + this.config.classNames.placeholder);

    if (setLoading) {
      this.disable();
      this.containerOuter.addLoadingState();

      if (this._isSelectOneElement) {
        if (!placeholderItem) {
          placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
          this.itemList.append(placeholderItem);
        } else {
          placeholderItem.innerHTML = this.config.loadingText;
        }
      } else {
        this.input.placeholder = this.config.loadingText;
      }
    } else {
      this.enable();
      this.containerOuter.removeLoadingState();

      if (this._isSelectOneElement) {
        placeholderItem.innerHTML = this._placeholderValue || '';
      } else {
        this.input.placeholder = this._placeholderValue || '';
      }
    }
  };

  _proto._handleSearch = function _handleSearch(value) {
    if (!value || !this.input.isFocussed) {
      return;
    }

    var choices = this._store.choices;
    var _this$config3 = this.config,
        searchFloor = _this$config3.searchFloor,
        searchChoices = _this$config3.searchChoices;
    var hasUnactiveChoices = choices.some(function (option) {
      return !option.active;
    }); // Check that we have a value to search and the input was an alphanumeric character

    if (value && value.length >= searchFloor) {
      var resultCount = searchChoices ? this._searchChoices(value) : 0; // Trigger search event

      this.passedElement.triggerEvent(EVENTS.search, {
        value: value,
        resultCount: resultCount
      });
    } else if (hasUnactiveChoices) {
      // Otherwise reset choices to active
      this._isSearching = false;

      this._store.dispatch(choices_activateChoices(true));
    }
  };

  _proto._canAddItem = function _canAddItem(activeItems, value) {
    var canAddItem = true;
    var notice = typeof this.config.addItemText === 'function' ? this.config.addItemText(value) : this.config.addItemText;

    if (!this._isSelectOneElement) {
      var isDuplicateValue = existsInArray(activeItems, value);

      if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
        // If there is a max entry limit and we have reached that limit
        // don't update
        canAddItem = false;
        notice = typeof this.config.maxItemText === 'function' ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
      }

      if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
        canAddItem = false;
        notice = typeof this.config.uniqueItemText === 'function' ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
      }

      if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === 'function' && !this.config.addItemFilter(value)) {
        canAddItem = false;
        notice = typeof this.config.customAddItemText === 'function' ? this.config.customAddItemText(value) : this.config.customAddItemText;
      }
    }

    return {
      response: canAddItem,
      notice: notice
    };
  };

  _proto._searchChoices = function _searchChoices(value) {
    var newValue = typeof value === 'string' ? value.trim() : value;
    var currentValue = typeof this._currentValue === 'string' ? this._currentValue.trim() : this._currentValue;

    if (newValue.length < 1 && newValue === currentValue + " ") {
      return 0;
    } // If new value matches the desired length and is not the same as the current value with a space


    var haystack = this._store.searchableChoices;
    var needle = newValue;
    var keys = [].concat(this.config.searchFields);
    var options = Object.assign(this.config.fuseOptions, {
      keys: keys
    });
    var fuse = new fuse_default.a(haystack, options);
    var results = fuse.search(needle);
    this._currentValue = newValue;
    this._highlightPosition = 0;
    this._isSearching = true;

    this._store.dispatch(choices_filterChoices(results));

    return results.length;
  };

  _proto._addEventListeners = function _addEventListeners() {
    var _document = document,
        documentElement = _document.documentElement; // capture events - can cancel event processing or propagation

    documentElement.addEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.addEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.addEventListener('mousedown', this._onMouseDown, true); // passive events - doesn't call `preventDefault` or `stopPropagation`

    documentElement.addEventListener('click', this._onClick, {
      passive: true
    });
    documentElement.addEventListener('touchmove', this._onTouchMove, {
      passive: true
    });
    this.dropdown.element.addEventListener('mouseover', this._onMouseOver, {
      passive: true
    });

    if (this._isSelectOneElement) {
      this.containerOuter.element.addEventListener('focus', this._onFocus, {
        passive: true
      });
      this.containerOuter.element.addEventListener('blur', this._onBlur, {
        passive: true
      });
    }

    this.input.element.addEventListener('keyup', this._onKeyUp, {
      passive: true
    });
    this.input.element.addEventListener('focus', this._onFocus, {
      passive: true
    });
    this.input.element.addEventListener('blur', this._onBlur, {
      passive: true
    });

    if (this.input.element.form) {
      this.input.element.form.addEventListener('reset', this._onFormReset, {
        passive: true
      });
    }

    this.input.addEventListeners();
  };

  _proto._removeEventListeners = function _removeEventListeners() {
    var _document2 = document,
        documentElement = _document2.documentElement;
    documentElement.removeEventListener('touchend', this._onTouchEnd, true);
    this.containerOuter.element.removeEventListener('keydown', this._onKeyDown, true);
    this.containerOuter.element.removeEventListener('mousedown', this._onMouseDown, true);
    documentElement.removeEventListener('click', this._onClick);
    documentElement.removeEventListener('touchmove', this._onTouchMove);
    this.dropdown.element.removeEventListener('mouseover', this._onMouseOver);

    if (this._isSelectOneElement) {
      this.containerOuter.element.removeEventListener('focus', this._onFocus);
      this.containerOuter.element.removeEventListener('blur', this._onBlur);
    }

    this.input.element.removeEventListener('keyup', this._onKeyUp);
    this.input.element.removeEventListener('focus', this._onFocus);
    this.input.element.removeEventListener('blur', this._onBlur);

    if (this.input.element.form) {
      this.input.element.form.removeEventListener('reset', this._onFormReset);
    }

    this.input.removeEventListeners();
  }
  /**
   * @param {KeyboardEvent} event
   */
  ;

  _proto._onKeyDown = function _onKeyDown(event) {
    var _keyDownActions;

    var target = event.target,
        keyCode = event.keyCode,
        ctrlKey = event.ctrlKey,
        metaKey = event.metaKey;
    var activeItems = this._store.activeItems;
    var hasFocusedInput = this.input.isFocussed;
    var hasActiveDropdown = this.dropdown.isActive;
    var hasItems = this.itemList.hasChildren();
    var keyString = String.fromCharCode(keyCode);
    var BACK_KEY = KEY_CODES.BACK_KEY,
        DELETE_KEY = KEY_CODES.DELETE_KEY,
        ENTER_KEY = KEY_CODES.ENTER_KEY,
        A_KEY = KEY_CODES.A_KEY,
        ESC_KEY = KEY_CODES.ESC_KEY,
        UP_KEY = KEY_CODES.UP_KEY,
        DOWN_KEY = KEY_CODES.DOWN_KEY,
        PAGE_UP_KEY = KEY_CODES.PAGE_UP_KEY,
        PAGE_DOWN_KEY = KEY_CODES.PAGE_DOWN_KEY;
    var hasCtrlDownKeyPressed = ctrlKey || metaKey; // If a user is typing and the dropdown is not active

    if (!this._isTextElement && /[a-zA-Z0-9-_ ]/.test(keyString)) {
      this.showDropdown();
    } // Map keys to key actions


    var keyDownActions = (_keyDownActions = {}, _keyDownActions[A_KEY] = this._onAKey, _keyDownActions[ENTER_KEY] = this._onEnterKey, _keyDownActions[ESC_KEY] = this._onEscapeKey, _keyDownActions[UP_KEY] = this._onDirectionKey, _keyDownActions[PAGE_UP_KEY] = this._onDirectionKey, _keyDownActions[DOWN_KEY] = this._onDirectionKey, _keyDownActions[PAGE_DOWN_KEY] = this._onDirectionKey, _keyDownActions[DELETE_KEY] = this._onDeleteKey, _keyDownActions[BACK_KEY] = this._onDeleteKey, _keyDownActions); // If keycode has a function, run it

    if (keyDownActions[keyCode]) {
      keyDownActions[keyCode]({
        event: event,
        target: target,
        keyCode: keyCode,
        metaKey: metaKey,
        activeItems: activeItems,
        hasFocusedInput: hasFocusedInput,
        hasActiveDropdown: hasActiveDropdown,
        hasItems: hasItems,
        hasCtrlDownKeyPressed: hasCtrlDownKeyPressed
      });
    }
  };

  _proto._onKeyUp = function _onKeyUp(_ref2) {
    var target = _ref2.target,
        keyCode = _ref2.keyCode;
    var value = this.input.value;
    var activeItems = this._store.activeItems;

    var canAddItem = this._canAddItem(activeItems, value);

    var backKey = KEY_CODES.BACK_KEY,
        deleteKey = KEY_CODES.DELETE_KEY; // We are typing into a text input and have a value, we want to show a dropdown
    // notice. Otherwise hide the dropdown

    if (this._isTextElement) {
      var canShowDropdownNotice = canAddItem.notice && value;

      if (canShowDropdownNotice) {
        var dropdownItem = this._getTemplate('notice', canAddItem.notice);

        this.dropdown.element.innerHTML = dropdownItem.outerHTML;
        this.showDropdown(true);
      } else {
        this.hideDropdown(true);
      }
    } else {
      var userHasRemovedValue = (keyCode === backKey || keyCode === deleteKey) && !target.value;
      var canReactivateChoices = !this._isTextElement && this._isSearching;
      var canSearch = this._canSearch && canAddItem.response;

      if (userHasRemovedValue && canReactivateChoices) {
        this._isSearching = false;

        this._store.dispatch(choices_activateChoices(true));
      } else if (canSearch) {
        this._handleSearch(this.input.value);
      }
    }

    this._canSearch = this.config.searchEnabled;
  };

  _proto._onAKey = function _onAKey(_ref3) {
    var hasItems = _ref3.hasItems,
        hasCtrlDownKeyPressed = _ref3.hasCtrlDownKeyPressed;

    // If CTRL + A or CMD + A have been pressed and there are items to select
    if (hasCtrlDownKeyPressed && hasItems) {
      this._canSearch = false;
      var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;

      if (shouldHightlightAll) {
        this.highlightAll();
      }
    }
  };

  _proto._onEnterKey = function _onEnterKey(_ref4) {
    var event = _ref4.event,
        target = _ref4.target,
        activeItems = _ref4.activeItems,
        hasActiveDropdown = _ref4.hasActiveDropdown;
    var enterKey = KEY_CODES.ENTER_KEY;
    var targetWasButton = target.hasAttribute('data-button');

    if (this._isTextElement && target.value) {
      var value = this.input.value;

      var canAddItem = this._canAddItem(activeItems, value);

      if (canAddItem.response) {
        this.hideDropdown(true);

        this._addItem({
          value: value
        });

        this._triggerChange(value);

        this.clearInput();
      }
    }

    if (targetWasButton) {
      this._handleButtonAction(activeItems, target);

      event.preventDefault();
    }

    if (hasActiveDropdown) {
      var highlightedChoice = this.dropdown.getChild("." + this.config.classNames.highlightedState);

      if (highlightedChoice) {
        // add enter keyCode value
        if (activeItems[0]) {
          activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
        }

        this._handleChoiceAction(activeItems, highlightedChoice);
      }

      event.preventDefault();
    } else if (this._isSelectOneElement) {
      this.showDropdown();
      event.preventDefault();
    }
  };

  _proto._onEscapeKey = function _onEscapeKey(_ref5) {
    var hasActiveDropdown = _ref5.hasActiveDropdown;

    if (hasActiveDropdown) {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  };

  _proto._onDirectionKey = function _onDirectionKey(_ref6) {
    var event = _ref6.event,
        hasActiveDropdown = _ref6.hasActiveDropdown,
        keyCode = _ref6.keyCode,
        metaKey = _ref6.metaKey;
    var downKey = KEY_CODES.DOWN_KEY,
        pageUpKey = KEY_CODES.PAGE_UP_KEY,
        pageDownKey = KEY_CODES.PAGE_DOWN_KEY; // If up or down key is pressed, traverse through options

    if (hasActiveDropdown || this._isSelectOneElement) {
      this.showDropdown();
      this._canSearch = false;
      var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
      var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
      var selectableChoiceIdentifier = '[data-choice-selectable]';
      var nextEl;

      if (skipKey) {
        if (directionInt > 0) {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier + ":last-of-type");
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      } else {
        var currentEl = this.dropdown.element.querySelector("." + this.config.classNames.highlightedState);

        if (currentEl) {
          nextEl = getAdjacentEl(currentEl, selectableChoiceIdentifier, directionInt);
        } else {
          nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
        }
      }

      if (nextEl) {
        // We prevent default to stop the cursor moving
        // when pressing the arrow
        if (!isScrolledIntoView(nextEl, this.choiceList.element, directionInt)) {
          this.choiceList.scrollToChildElement(nextEl, directionInt);
        }

        this._highlightChoice(nextEl);
      } // Prevent default to maintain cursor position whilst
      // traversing dropdown options


      event.preventDefault();
    }
  };

  _proto._onDeleteKey = function _onDeleteKey(_ref7) {
    var event = _ref7.event,
        target = _ref7.target,
        hasFocusedInput = _ref7.hasFocusedInput,
        activeItems = _ref7.activeItems;

    // If backspace or delete key is pressed and the input has no value
    if (hasFocusedInput && !target.value && !this._isSelectOneElement) {
      this._handleBackspace(activeItems);

      event.preventDefault();
    }
  };

  _proto._onTouchMove = function _onTouchMove() {
    if (this._wasTap) {
      this._wasTap = false;
    }
  };

  _proto._onTouchEnd = function _onTouchEnd(event) {
    var _ref8 = event || event.touches[0],
        target = _ref8.target;

    var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);

    if (touchWasWithinContainer) {
      var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;

      if (containerWasExactTarget) {
        if (this._isTextElement) {
          this.input.focus();
        } else if (this._isSelectMultipleElement) {
          this.showDropdown();
        }
      } // Prevents focus event firing


      event.stopPropagation();
    }

    this._wasTap = true;
  }
  /**
   * Handles mousedown event in capture mode for containetOuter.element
   * @param {MouseEvent} event
   */
  ;

  _proto._onMouseDown = function _onMouseDown(event) {
    var target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    } // If we have our mouse down on the scrollbar and are on IE11...


    if (IS_IE11 && this.choiceList.element.contains(target)) {
      // check if click was on a scrollbar area
      var firstChoice =
      /** @type {HTMLElement} */
      this.choiceList.element.firstElementChild;
      var isOnScrollbar = this._direction === 'ltr' ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
      this._isScrollingOnIe = isOnScrollbar;
    }

    if (target === this.input.element) {
      return;
    }

    var item = target.closest('[data-button],[data-item],[data-choice]');

    if (item instanceof HTMLElement) {
      var hasShiftKey = event.shiftKey;
      var activeItems = this._store.activeItems;
      var dataset = item.dataset;

      if ('button' in dataset) {
        this._handleButtonAction(activeItems, item);
      } else if ('item' in dataset) {
        this._handleItemAction(activeItems, item, hasShiftKey);
      } else if ('choice' in dataset) {
        this._handleChoiceAction(activeItems, item);
      }
    }

    event.preventDefault();
  }
  /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */
  ;

  _proto._onMouseOver = function _onMouseOver(_ref9) {
    var target = _ref9.target;

    if (target instanceof HTMLElement && 'choice' in target.dataset) {
      this._highlightChoice(target);
    }
  };

  _proto._onClick = function _onClick(_ref10) {
    var target = _ref10.target;
    var clickWasWithinContainer = this.containerOuter.element.contains(target);

    if (clickWasWithinContainer) {
      if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
        if (this._isTextElement) {
          if (document.activeElement !== this.input.element) {
            this.input.focus();
          }
        } else {
          this.showDropdown();
          this.containerOuter.focus();
        }
      } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) {
        this.hideDropdown();
      }
    } else {
      var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;

      if (hasHighlightedItems) {
        this.unhighlightAll();
      }

      this.containerOuter.removeFocusState();
      this.hideDropdown(true);
    }
  };

  _proto._onFocus = function _onFocus(_ref11) {
    var _this17 = this,
        _focusActions;

    var target = _ref11.target;
    var focusWasWithinContainer = this.containerOuter.element.contains(target);

    if (!focusWasWithinContainer) {
      return;
    }

    var focusActions = (_focusActions = {}, _focusActions[TEXT_TYPE] = function () {
      if (target === _this17.input.element) {
        _this17.containerOuter.addFocusState();
      }
    }, _focusActions[SELECT_ONE_TYPE] = function () {
      _this17.containerOuter.addFocusState();

      if (target === _this17.input.element) {
        _this17.showDropdown(true);
      }
    }, _focusActions[SELECT_MULTIPLE_TYPE] = function () {
      if (target === _this17.input.element) {
        _this17.showDropdown(true); // If element is a select box, the focused element is the container and the dropdown
        // isn't already open, focus and show dropdown


        _this17.containerOuter.addFocusState();
      }
    }, _focusActions);
    focusActions[this.passedElement.element.type]();
  };

  _proto._onBlur = function _onBlur(_ref12) {
    var _this18 = this;

    var target = _ref12.target;
    var blurWasWithinContainer = this.containerOuter.element.contains(target);

    if (blurWasWithinContainer && !this._isScrollingOnIe) {
      var _blurActions;

      var activeItems = this._store.activeItems;
      var hasHighlightedItems = activeItems.some(function (item) {
        return item.highlighted;
      });
      var blurActions = (_blurActions = {}, _blurActions[TEXT_TYPE] = function () {
        if (target === _this18.input.element) {
          _this18.containerOuter.removeFocusState();

          if (hasHighlightedItems) {
            _this18.unhighlightAll();
          }

          _this18.hideDropdown(true);
        }
      }, _blurActions[SELECT_ONE_TYPE] = function () {
        _this18.containerOuter.removeFocusState();

        if (target === _this18.input.element || target === _this18.containerOuter.element && !_this18._canSearch) {
          _this18.hideDropdown(true);
        }
      }, _blurActions[SELECT_MULTIPLE_TYPE] = function () {
        if (target === _this18.input.element) {
          _this18.containerOuter.removeFocusState();

          _this18.hideDropdown(true);

          if (hasHighlightedItems) {
            _this18.unhighlightAll();
          }
        }
      }, _blurActions);
      blurActions[this.passedElement.element.type]();
    } else {
      // On IE11, clicking the scollbar blurs our input and thus
      // closes the dropdown. To stop this, we refocus our input
      // if we know we are on IE *and* are scrolling.
      this._isScrollingOnIe = false;
      this.input.element.focus();
    }
  };

  _proto._onFormReset = function _onFormReset() {
    this._store.dispatch(resetTo(this._initialState));
  };

  _proto._highlightChoice = function _highlightChoice(el) {
    var _this19 = this;

    if (el === void 0) {
      el = null;
    }

    var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

    if (!choices.length) {
      return;
    }

    var passedEl = el;
    var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll("." + this.config.classNames.highlightedState)); // Remove any highlighted choices

    highlightedChoices.forEach(function (choice) {
      choice.classList.remove(_this19.config.classNames.highlightedState);
      choice.setAttribute('aria-selected', 'false');
    });

    if (passedEl) {
      this._highlightPosition = choices.indexOf(passedEl);
    } else {
      // Highlight choice based on last known highlight location
      if (choices.length > this._highlightPosition) {
        // If we have an option to highlight
        passedEl = choices[this._highlightPosition];
      } else {
        // Otherwise highlight the option before
        passedEl = choices[choices.length - 1];
      }

      if (!passedEl) {
        passedEl = choices[0];
      }
    }

    passedEl.classList.add(this.config.classNames.highlightedState);
    passedEl.setAttribute('aria-selected', 'true');
    this.passedElement.triggerEvent(EVENTS.highlightChoice, {
      el: passedEl
    });

    if (this.dropdown.isActive) {
      // IE11 ignores aria-label and blocks virtual keyboard
      // if aria-activedescendant is set without a dropdown
      this.input.setActiveDescendant(passedEl.id);
      this.containerOuter.setActiveDescendant(passedEl.id);
    }
  };

  _proto._addItem = function _addItem(_ref13) {
    var value = _ref13.value,
        _ref13$label = _ref13.label,
        label = _ref13$label === void 0 ? null : _ref13$label,
        _ref13$choiceId = _ref13.choiceId,
        choiceId = _ref13$choiceId === void 0 ? -1 : _ref13$choiceId,
        _ref13$groupId = _ref13.groupId,
        groupId = _ref13$groupId === void 0 ? -1 : _ref13$groupId,
        _ref13$customProperti = _ref13.customProperties,
        customProperties = _ref13$customProperti === void 0 ? null : _ref13$customProperti,
        _ref13$placeholder = _ref13.placeholder,
        placeholder = _ref13$placeholder === void 0 ? false : _ref13$placeholder,
        _ref13$keyCode = _ref13.keyCode,
        keyCode = _ref13$keyCode === void 0 ? null : _ref13$keyCode;
    var passedValue = typeof value === 'string' ? value.trim() : value;
    var passedKeyCode = keyCode;
    var passedCustomProperties = customProperties;
    var items = this._store.items;
    var passedLabel = label || passedValue;
    var passedOptionId = choiceId || -1;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
    var id = items ? items.length + 1 : 1; // If a prepended value has been passed, prepend it

    if (this.config.prependValue) {
      passedValue = this.config.prependValue + passedValue.toString();
    } // If an appended value has been passed, append it


    if (this.config.appendValue) {
      passedValue += this.config.appendValue.toString();
    }

    this._store.dispatch(items_addItem({
      value: passedValue,
      label: passedLabel,
      id: id,
      choiceId: passedOptionId,
      groupId: groupId,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: passedKeyCode
    }));

    if (this._isSelectOneElement) {
      this.removeActiveItems(id);
    } // Trigger change event


    this.passedElement.triggerEvent(EVENTS.addItem, {
      id: id,
      value: passedValue,
      label: passedLabel,
      customProperties: passedCustomProperties,
      groupValue: group && group.value ? group.value : undefined,
      keyCode: passedKeyCode
    });
    return this;
  };

  _proto._removeItem = function _removeItem(item) {
    if (!item || !isType('Object', item)) {
      return this;
    }

    var id = item.id,
        value = item.value,
        label = item.label,
        choiceId = item.choiceId,
        groupId = item.groupId;
    var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

    this._store.dispatch(items_removeItem(id, choiceId));

    if (group && group.value) {
      this.passedElement.triggerEvent(EVENTS.removeItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group.value
      });
    } else {
      this.passedElement.triggerEvent(EVENTS.removeItem, {
        id: id,
        value: value,
        label: label
      });
    }

    return this;
  };

  _proto._addChoice = function _addChoice(_ref14) {
    var value = _ref14.value,
        _ref14$label = _ref14.label,
        label = _ref14$label === void 0 ? null : _ref14$label,
        _ref14$isSelected = _ref14.isSelected,
        isSelected = _ref14$isSelected === void 0 ? false : _ref14$isSelected,
        _ref14$isDisabled = _ref14.isDisabled,
        isDisabled = _ref14$isDisabled === void 0 ? false : _ref14$isDisabled,
        _ref14$groupId = _ref14.groupId,
        groupId = _ref14$groupId === void 0 ? -1 : _ref14$groupId,
        _ref14$customProperti = _ref14.customProperties,
        customProperties = _ref14$customProperti === void 0 ? null : _ref14$customProperti,
        _ref14$placeholder = _ref14.placeholder,
        placeholder = _ref14$placeholder === void 0 ? false : _ref14$placeholder,
        _ref14$keyCode = _ref14.keyCode,
        keyCode = _ref14$keyCode === void 0 ? null : _ref14$keyCode;

    if (typeof value === 'undefined' || value === null) {
      return;
    } // Generate unique id


    var choices = this._store.choices;
    var choiceLabel = label || value;
    var choiceId = choices ? choices.length + 1 : 1;
    var choiceElementId = this._baseId + "-" + this._idNames.itemChoice + "-" + choiceId;

    this._store.dispatch(choices_addChoice({
      id: choiceId,
      groupId: groupId,
      elementId: choiceElementId,
      value: value,
      label: choiceLabel,
      disabled: isDisabled,
      customProperties: customProperties,
      placeholder: placeholder,
      keyCode: keyCode
    }));

    if (isSelected) {
      this._addItem({
        value: value,
        label: choiceLabel,
        choiceId: choiceId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: keyCode
      });
    }
  };

  _proto._addGroup = function _addGroup(_ref15) {
    var _this20 = this;

    var group = _ref15.group,
        id = _ref15.id,
        _ref15$valueKey = _ref15.valueKey,
        valueKey = _ref15$valueKey === void 0 ? 'value' : _ref15$valueKey,
        _ref15$labelKey = _ref15.labelKey,
        labelKey = _ref15$labelKey === void 0 ? 'label' : _ref15$labelKey;
    var groupChoices = isType('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
    var groupId = id || Math.floor(new Date().valueOf() * Math.random());
    var isDisabled = group.disabled ? group.disabled : false;

    if (groupChoices) {
      this._store.dispatch(groups_addGroup({
        value: group.label,
        id: groupId,
        active: true,
        disabled: isDisabled
      }));

      var addGroupChoices = function addGroupChoices(choice) {
        var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

        _this20._addChoice({
          value: choice[valueKey],
          label: isType('Object', choice) ? choice[labelKey] : choice.innerHTML,
          isSelected: choice.selected,
          isDisabled: isOptDisabled,
          groupId: groupId,
          customProperties: choice.customProperties,
          placeholder: choice.placeholder
        });
      };

      groupChoices.forEach(addGroupChoices);
    } else {
      this._store.dispatch(groups_addGroup({
        value: group.label,
        id: group.id,
        active: false,
        disabled: group.disabled
      }));
    }
  };

  _proto._getTemplate = function _getTemplate(template) {
    var _this$_templates$temp;

    if (!template) {
      return null;
    }

    var classNames = this.config.classNames;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (_this$_templates$temp = this._templates[template]).call.apply(_this$_templates$temp, [this, classNames].concat(args));
  };

  _proto._createTemplates = function _createTemplates() {
    var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
    var userTemplates = {};

    if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === 'function') {
      userTemplates = callbackOnCreateTemplates.call(this, strToEl);
    }

    this._templates = cjs_default()(TEMPLATES, userTemplates);
  };

  _proto._createElements = function _createElements() {
    this.containerOuter = new container_Container({
      element: this._getTemplate('containerOuter', this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.containerInner = new container_Container({
      element: this._getTemplate('containerInner'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      position: this.config.position
    });
    this.input = new input_Input({
      element: this._getTemplate('input', this._placeholderValue),
      classNames: this.config.classNames,
      type: this.passedElement.element.type,
      preventPaste: !this.config.paste
    });
    this.choiceList = new list_List({
      element: this._getTemplate('choiceList', this._isSelectOneElement)
    });
    this.itemList = new list_List({
      element: this._getTemplate('itemList', this._isSelectOneElement)
    });
    this.dropdown = new Dropdown({
      element: this._getTemplate('dropdown'),
      classNames: this.config.classNames,
      type: this.passedElement.element.type
    });
  };

  _proto._createStructure = function _createStructure() {
    // Hide original element
    this.passedElement.conceal(); // Wrap input in container preserving DOM ordering

    this.containerInner.wrap(this.passedElement.element); // Wrapper inner container with outer container

    this.containerOuter.wrap(this.containerInner.element);

    if (this._isSelectOneElement) {
      this.input.placeholder = this.config.searchPlaceholderValue || '';
    } else if (this._placeholderValue) {
      this.input.placeholder = this._placeholderValue;
      this.input.setWidth();
    }

    this.containerOuter.element.appendChild(this.containerInner.element);
    this.containerOuter.element.appendChild(this.dropdown.element);
    this.containerInner.element.appendChild(this.itemList.element);

    if (!this._isTextElement) {
      this.dropdown.element.appendChild(this.choiceList.element);
    }

    if (!this._isSelectOneElement) {
      this.containerInner.element.appendChild(this.input.element);
    } else if (this.config.searchEnabled) {
      this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
    }

    if (this._isSelectElement) {
      this._highlightPosition = 0;
      this._isSearching = false;

      this._startLoading();

      if (this._presetGroups.length) {
        this._addPredefinedGroups(this._presetGroups);
      } else {
        this._addPredefinedChoices(this._presetChoices);
      }

      this._stopLoading();
    }

    if (this._isTextElement) {
      this._addPredefinedItems(this._presetItems);
    }
  };

  _proto._addPredefinedGroups = function _addPredefinedGroups(groups) {
    var _this21 = this;

    // If we have a placeholder option
    var placeholderChoice = this.passedElement.placeholderOption;

    if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') {
      this._addChoice({
        value: placeholderChoice.value,
        label: placeholderChoice.innerHTML,
        isSelected: placeholderChoice.selected,
        isDisabled: placeholderChoice.disabled,
        placeholder: true
      });
    }

    groups.forEach(function (group) {
      return _this21._addGroup({
        group: group,
        id: group.id || null
      });
    });
  };

  _proto._addPredefinedChoices = function _addPredefinedChoices(choices) {
    var _this22 = this;

    // If sorting is enabled or the user is searching, filter choices
    if (this.config.shouldSort) {
      choices.sort(this.config.sorter);
    }

    var hasSelectedChoice = choices.some(function (choice) {
      return choice.selected;
    });
    var firstEnabledChoiceIndex = choices.findIndex(function (choice) {
      return choice.disabled === undefined || !choice.disabled;
    });
    choices.forEach(function (choice, index) {
      var value = choice.value,
          label = choice.label,
          customProperties = choice.customProperties,
          placeholder = choice.placeholder;

      if (_this22._isSelectElement) {
        // If the choice is actually a group
        if (choice.choices) {
          _this22._addGroup({
            group: choice,
            id: choice.id || null
          });
        } else {
          /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */
          var shouldPreselect = _this22._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
          var isSelected = shouldPreselect ? true : choice.selected;
          var isDisabled = choice.disabled;

          _this22._addChoice({
            value: value,
            label: label,
            isSelected: isSelected,
            isDisabled: isDisabled,
            customProperties: customProperties,
            placeholder: placeholder
          });
        }
      } else {
        _this22._addChoice({
          value: value,
          label: label,
          isSelected: choice.selected,
          isDisabled: choice.disabled,
          customProperties: customProperties,
          placeholder: placeholder
        });
      }
    });
  }
  /**
   * @param {Item[]} items
   */
  ;

  _proto._addPredefinedItems = function _addPredefinedItems(items) {
    var _this23 = this;

    items.forEach(function (item) {
      if (typeof item === 'object' && item.value) {
        _this23._addItem({
          value: item.value,
          label: item.label,
          choiceId: item.id,
          customProperties: item.customProperties,
          placeholder: item.placeholder
        });
      }

      if (typeof item === 'string') {
        _this23._addItem({
          value: item
        });
      }
    });
  };

  _proto._setChoiceOrItem = function _setChoiceOrItem(item) {
    var _this24 = this;

    var itemType = getType(item).toLowerCase();
    var handleType = {
      object: function object() {
        if (!item.value) {
          return;
        } // If we are dealing with a select input, we need to create an option first
        // that is then selected. For text inputs we can just add items normally.


        if (!_this24._isTextElement) {
          _this24._addChoice({
            value: item.value,
            label: item.label,
            isSelected: true,
            isDisabled: false,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else {
          _this24._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        }
      },
      string: function string() {
        if (!_this24._isTextElement) {
          _this24._addChoice({
            value: item,
            label: item,
            isSelected: true,
            isDisabled: false
          });
        } else {
          _this24._addItem({
            value: item
          });
        }
      }
    };
    handleType[itemType]();
  };

  _proto._findAndSelectChoiceByValue = function _findAndSelectChoiceByValue(val) {
    var _this25 = this;

    var choices = this._store.choices; // Check 'value' property exists and the choice isn't already selected

    var foundChoice = choices.find(function (choice) {
      return _this25.config.valueComparer(choice.value, val);
    });

    if (foundChoice && !foundChoice.selected) {
      this._addItem({
        value: foundChoice.value,
        label: foundChoice.label,
        choiceId: foundChoice.id,
        groupId: foundChoice.groupId,
        customProperties: foundChoice.customProperties,
        placeholder: foundChoice.placeholder,
        keyCode: foundChoice.keyCode
      });
    }
  };

  _proto._generatePlaceholderValue = function _generatePlaceholderValue() {
    if (this._isSelectElement) {
      var placeholderOption = this.passedElement.placeholderOption;
      return placeholderOption ? placeholderOption.text : false;
    }

    var _this$config4 = this.config,
        placeholder = _this$config4.placeholder,
        placeholderValue = _this$config4.placeholderValue;
    var dataset = this.passedElement.element.dataset;

    if (placeholder) {
      if (placeholderValue) {
        return placeholderValue;
      }

      if (dataset.placeholder) {
        return dataset.placeholder;
      }
    }

    return false;
  };

  return Choices;
}();

/* harmony default export */ var scripts_choices = __webpack_exports__["default"] = (choices_Choices);

/***/ })
/******/ ])["default"];
});

/***/ }),

/***/ "./node_modules/closest/index.js":
/*!***************************************!*\
  !*** ./node_modules/closest/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var matches = __webpack_require__(/*! matches-selector */ "./node_modules/matches-selector/index.js")

module.exports = function (element, selector, checkYoSelf) {
  var parent = checkYoSelf ? element : element.parentNode

  while (parent && parent !== document) {
    if (matches(parent, selector)) return parent;
    parent = parent.parentNode
  }
}


/***/ }),

/***/ "./node_modules/matches-selector/index.js":
/*!************************************************!*\
  !*** ./node_modules/matches-selector/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Element prototype.
 */

var proto = Element.prototype;

/**
 * Vendor function.
 */

var vendor = proto.matchesSelector
  || proto.webkitMatchesSelector
  || proto.mozMatchesSelector
  || proto.msMatchesSelector
  || proto.oMatchesSelector;

/**
 * Expose `match()`.
 */

module.exports = match;

/**
 * Match `el` to `selector`.
 *
 * @param {Element} el
 * @param {String} selector
 * @return {Boolean}
 * @api public
 */

function match(el, selector) {
  if (vendor) return vendor.call(el, selector);
  var nodes = el.parentNode.querySelectorAll(selector);
  for (var i = 0; i < nodes.length; ++i) {
    if (nodes[i] == el) return true;
  }
  return false;
}

/***/ }),

/***/ "./src/blocks/baron/baron.js":
/*!***********************************!*\
  !*** ./src/blocks/baron/baron.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* harmony import */ var baron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! baron */ "./node_modules/baron/src/core.js");
/* harmony import */ var baron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(baron__WEBPACK_IMPORTED_MODULE_1__);


Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  baron__WEBPACK_IMPORTED_MODULE_1___default()({
    root: '#baron-demo',
    scroller: '.baron__scroller',
    bar: '.baron__bar',
    scrollingCls: 'baron--scrolling',
    draggingCls: 'baron--dragging',
    barOnCls: 'baron--scrollbar'
  });
});

/***/ }),

/***/ "./src/blocks/blocks-library/blocks-library.js":
/*!*****************************************************!*\
  !*** ./src/blocks/blocks-library/blocks-library.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../main-nav/main-nav.js */ "./src/blocks/main-nav/main-nav.js");

__webpack_require__(/*! ../burger/burger.js */ "./src/blocks/burger/burger.js");

__webpack_require__(/*! ../field-text/field-text.js */ "./src/blocks/field-text/field-text.js");

__webpack_require__(/*! ../field-file/field-file.js */ "./src/blocks/field-file/field-file.js");

__webpack_require__(/*! ../field-num/field-num.js */ "./src/blocks/field-num/field-num.js");

__webpack_require__(/*! ../field-select/field-select.js */ "./src/blocks/field-select/field-select.js");

__webpack_require__(/*! ../scroll-link/scroll-link.js */ "./src/blocks/scroll-link/scroll-link.js");

__webpack_require__(/*! ../to-top/to-top.js */ "./src/blocks/to-top/to-top.js");

__webpack_require__(/*! ../off-canvas/off-canvas.js */ "./src/blocks/off-canvas/off-canvas.js");

__webpack_require__(/*! ../modal/modal.js */ "./src/blocks/modal/modal.js");

__webpack_require__(/*! ../tabs/tabs.js */ "./src/blocks/tabs/tabs.js");

__webpack_require__(/*! ../baron/baron.js */ "./src/blocks/baron/baron.js");

__webpack_require__(/*! ../form-validation/form-validation.js */ "./src/blocks/form-validation/form-validation.js");

__webpack_require__(/*! ../../js/script.js */ "./src/js/script.js");

/***/ }),

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

/***/ "./src/blocks/field-file/field-file.js":
/*!*********************************************!*\
  !*** ./src/blocks/field-file/field-file.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var closest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! closest */ "./node_modules/closest/index.js");
/* harmony import */ var closest__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(closest__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* global document */


Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function () {
  /*
    Форма: работа стилизованного input[type="file"]
    Автор: Osvaldas Valutis, www.osvaldas.info (адаптировано под используемую разметку)
    Available for use under the MIT License
  */
  var inputs = document.querySelectorAll('.field-file__input:not([disabled])');
  Array.prototype.forEach.call(inputs, function (input) {
    var label = closest__WEBPACK_IMPORTED_MODULE_0___default()(input, '.field-file').querySelector('.field-file__name-text'),
        labelVal = label.innerHTML;
    input.addEventListener('change', function (e) {
      var fileName = '';

      if (this.files && this.files.length > 1) {
        fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
      } else {
        fileName = e.target.value.split('\\').pop();
      }

      if (fileName) {
        label.innerHTML = fileName;
      } else {
        label.innerHTML = labelVal;
      }
    });
  });
});

/***/ }),

/***/ "./src/blocks/field-num/field-num.js":
/*!*******************************************!*\
  !*** ./src/blocks/field-num/field-num.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* global document */

Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  var fields = document.querySelectorAll('.field-num');

  if (fields.length) {
    Array.prototype.forEach.call(fields, function (field) {
      var input = field.querySelector('.field-num__input');
      var valueMin = input.getAttribute('min') ? +input.getAttribute('min') : -Infinity;
      var valueMax = input.getAttribute('max') ? +input.getAttribute('max') : Infinity;
      var valueStep = input.getAttribute('step') ? +input.getAttribute('step') : 1;
      field.addEventListener('click', function (event) {
        if (event.target.classList.contains('field-num__btn') && !input.getAttribute('disabled')) {
          var num = parseInt(input.value);
          if (isNaN(num)) num = 0;

          if (event.target.classList.contains('field-num__btn--plus')) {
            if (num < valueMax) input.value = num + valueStep;
          }

          if (event.target.classList.contains('field-num__btn--minus')) {
            if (num > valueMin) input.value = num - valueStep;
          }
        }
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/field-select/field-select.js":
/*!*************************************************!*\
  !*** ./src/blocks/field-select/field-select.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_1__);
/* global document */


Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  if (typeof Object.assign != 'function') {
    Object.assign = function (target) {
      'use strict';

      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      target = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var source = arguments[index];

        if (source != null) {
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
      }

      return target;
    };
  } // Включим на каком-то конкретном отдельно
  // const choices = new Choices('#some-if', {/* options */});
  // Или тупо найдём все селекты и включим на них Choices


  var selects = document.querySelectorAll('.field-select__select');
  selects.forEach(function (item) {
    new choices_js__WEBPACK_IMPORTED_MODULE_1___default.a(item, {
      searchEnabled: false,
      placeholderValue: 'Выберите'
    });
  });
});

/***/ }),

/***/ "./src/blocks/field-text/field-text.js":
/*!*********************************************!*\
  !*** ./src/blocks/field-text/field-text.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! autosize */ "./node_modules/autosize/dist/autosize.js");
/* harmony import */ var autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(autosize__WEBPACK_IMPORTED_MODULE_1__);
/* global document */


Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  autosize__WEBPACK_IMPORTED_MODULE_1___default()(document.querySelectorAll('textarea'));
});

/***/ }),

/***/ "./src/blocks/form-validation/form-validation.js":
/*!*******************************************************!*\
  !*** ./src/blocks/form-validation/form-validation.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* global document */
var closest = __webpack_require__(/*! closest */ "./node_modules/closest/index.js");


Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  // Для всех форм страницы
  var forms = Array.from(document.querySelectorAll('form[data-check-form]'));
  forms.forEach(function (form) {
    // Подпишемся на событие отправки
    form.addEventListener('submit', function (e) {
      var valid = true; // Проверим все текстовые инпуты

      var fieldsText = Array.from(form.querySelectorAll('input[data-check-pattern]'));
      fieldsText.forEach(function (input) {
        if (!checkFieldText(input)) valid = false;
      }); // Проверим все чекбоксы

      var fieldsCheckbox = Array.from(form.querySelectorAll('input[data-check-state]'));
      fieldsCheckbox.forEach(function (input) {
        if (!checkFieldCheckbox(input)) valid = false;
      }); // Если были ошибки, не отправляем форму

      if (!valid) e.preventDefault();
    });
  }); // Для всех проверяемых текстовых полей

  var fieldsText = Array.from(document.querySelectorAll('input[data-check-pattern]'));
  fieldsText.forEach(function (input) {
    var hasBeenAlreadyBlured = false;
    input.addEventListener('blur', function () {
      checkFieldText(input);
      if (!hasBeenAlreadyBlured) hasBeenAlreadyBlured = true;
    });
    input.addEventListener('input', function () {
      if (hasBeenAlreadyBlured) checkFieldText(input);
    });
  }); // Для всех проверяемых чекбоксов

  var fieldsCheckbox = Array.from(document.querySelectorAll('input[data-check-state]'));
  fieldsCheckbox.forEach(function (input) {
    input.addEventListener('change', function () {
      checkFieldCheckbox(input);
    });
  });

  function checkFieldText(input) {
    var regExp = new RegExp(input.dataset.checkPattern, 'gi');
    var result = regExp.test(input.value);
    var errorClass = 'field-text--error';
    var parent = closest(input, '.field-text');
    result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);
    return result;
  }

  function checkFieldCheckbox(input) {
    var trueVal = input.dataset.checkState == 'on' ? true : false;
    var result = trueVal === input.checked;
    var errorClass = 'field-checkbox__input-wrap--error';
    var parent = closest(input, '.field-checkbox__input-wrap');
    result ? parent.classList.remove(errorClass) : parent.classList.add(errorClass);
    return result;
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

/***/ "./src/blocks/off-canvas/off-canvas.js":
/*!*********************************************!*\
  !*** ./src/blocks/off-canvas/off-canvas.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* global document */

Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  document.addEventListener('click', function (event) {
    if (event.target.dataset.toggle === 'off-canvas') {
      event.preventDefault();
      offCanvasToggle();
    } // возможность совместить переключение off-canvas и встроенную функ-сть


    if (event.target.dataset.toggleNative === 'off-canvas') {
      offCanvasToggle();
    }
  });

  function offCanvasToggle() {
    document.getElementById('off-canvas').classList.toggle('off-canvas--open');
  }
});

/***/ }),

/***/ "./src/blocks/scroll-link/scroll-link.js":
/*!***********************************************!*\
  !*** ./src/blocks/scroll-link/scroll-link.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* global document window performance requestAnimationFrame */

Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  var links = document.querySelectorAll('[href^="#"][data-scroll-link]');

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      var hash = this.href.replace(/[^#]*(.*)/, '$1');

      if (hash && hash !== '#') {
        e.preventDefault();
        var scroll = window.pageYOffset;
        var targetTop = getOffsetRect(document.querySelector(hash)).top - 10; // С поправкой в 10px

        var scrollDiff = (scroll - targetTop) * -1;
        animate({
          duration: 500,
          timing: function timing(timeFraction) {
            return Math.pow(timeFraction, 4); // https://learn.javascript.ru/js-animation
          },
          draw: function draw(progress) {
            var scrollNow = scroll + progress * scrollDiff;
            window.scrollTo(0, scrollNow);
          }
        });
      }
    }, false);
  }

  function animate(_ref) {
    var timing = _ref.timing,
        draw = _ref.draw,
        duration = _ref.duration;
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      var progress = timing(timeFraction);
      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

  function getOffsetRect(elem) {
    var box = elem.getBoundingClientRect();
    var body = document.body;
    var docElem = document.documentElement;
    var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
    var clientTop = docElem.clientTop || body.clientTop || 0;
    var clientLeft = docElem.clientLeft || body.clientLeft || 0;
    var top = box.top + scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;
    return {
      top: Math.round(top),
      left: Math.round(left)
    };
  }
});

/***/ }),

/***/ "./src/blocks/tabs/tabs.js":
/*!*********************************!*\
  !*** ./src/blocks/tabs/tabs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* global document window history location Element */
document.addEventListener('DOMContentLoaded', function () {
  if (location.hash) {
    showTab(location.hash);
  } // Следим за поднимающимися кликами


  document.addEventListener('click', function (event) {
    if (event.target.dataset.toggle === 'tab') {
      event.preventDefault();
      var target = event.target.hash === undefined ? event.target.dataset.target : event.target.hash;

      if (target !== undefined) {
        showTab(target);

        if (history && history.pushState && history.replaceState) {
          var stateObject = {
            'url': target
          };

          if (window.location.hash && stateObject.url !== window.location.hash) {
            window.history.pushState(stateObject, document.title, window.location.pathname + target);
          } else {
            window.history.replaceState(stateObject, document.title, window.location.pathname + target);
          }
        }
      }
    }
  });
  /**
   * Показывает таб
   * @param  {string} tabId ID таба, который нужно показать
   */

  function showTab(tabId) {
    var element = document.querySelector(tabId);

    if (element && element.classList.contains('tabs__content-item')) {
      var tabsParent = document.querySelector(tabId).closest('.tabs');
      var activeTabClassName = 'tabs__link-wrap--active';
      var activeTabContentClassName = 'tabs__content-item--active'; // таб

      tabsParent.querySelectorAll('.' + activeTabClassName).forEach(function (item) {
        item.classList.remove(activeTabClassName);
      });
      var activeTab = tabsParent.querySelector('[href="' + tabId + '"]') ? tabsParent.querySelector('[href="' + tabId + '"]') : tabsParent.querySelector('[data-target="' + tabId + '"]');
      activeTab.closest('.tabs__link-wrap').classList.add(activeTabClassName); // контент таба

      tabsParent.querySelectorAll('.' + activeTabContentClassName).forEach(function (item) {
        item.classList.remove(activeTabContentClassName);
      });
      tabsParent.querySelector(tabId).classList.add(activeTabContentClassName);
    }
  }
});

/***/ }),

/***/ "./src/blocks/to-top/to-top.js":
/*!*************************************!*\
  !*** ./src/blocks/to-top/to-top.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utils/documentReady.js */ "./src/js/utils/documentReady.js");
/* global document window performance requestAnimationFrame */

Object(Utils_documentReady_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function () {
  if (document.getElementById('to-top')) {
    document.getElementById('to-top').addEventListener('click', function (e) {
      e.preventDefault();
      var scroll = window.pageYOffset;
      var targetTop = 0;
      var scrollDiff = (scroll - targetTop) * -1;
      animate({
        duration: 500,
        timing: function timing(timeFraction) {
          return Math.pow(timeFraction, 4); // https://learn.javascript.ru/js-animation
        },
        draw: function draw(progress) {
          var scrollNow = scroll + progress * scrollDiff;
          window.scrollTo(0, scrollNow);
        }
      });
    }, false);
    window.addEventListener('scroll', visibilityToggle);
    visibilityToggle();
  }

  function visibilityToggle() {
    if (window.pageYOffset >= 500) {
      document.getElementById('to-top').classList.add('to-top--visible');
    } else {
      document.getElementById('to-top').classList.remove('to-top--visible');
    }
  }

  function animate(_ref) {
    var timing = _ref.timing,
        draw = _ref.draw,
        duration = _ref.duration;
    var start = performance.now();
    requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;
      var progress = timing(timeFraction);
      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F1dG9zaXplL2Rpc3QvYXV0b3NpemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhcm9uL3NyYy9hdXRvVXBkYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXJvbi9zcmMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jhcm9uL3NyYy9jb3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXJvbi9zcmMvZml4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXJvbi9zcmMvbG9nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXJvbi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nob2ljZXMuanMvcHVibGljL2Fzc2V0cy9zY3JpcHRzL2Nob2ljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nsb3Nlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21hdGNoZXMtc2VsZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9iYXJvbi9iYXJvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2Jsb2Nrcy1saWJyYXJ5L2Jsb2Nrcy1saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYnVyZ2VyL2J1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZpZWxkLWZpbGUvZmllbGQtZmlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZpZWxkLW51bS9maWVsZC1udW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9maWVsZC1zZWxlY3QvZmllbGQtc2VsZWN0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZmllbGQtdGV4dC9maWVsZC10ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvZm9ybS12YWxpZGF0aW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21haW4tbmF2L21haW4tbmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9ibG9ja3MvbW9kYWwvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9vZmYtY2FudmFzL29mZi1jYW52YXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Jsb2Nrcy9zY3JvbGwtbGluay9zY3JvbGwtbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3RhYnMvdGFicy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3RvLXRvcC90by10b3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZG9jdW1lbnRSZWFkeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMvZ2V0U2Nyb2xsU2l6ZS5qcyJdLCJuYW1lcyI6WyJyZWFkeSIsImJhcm9uIiwicm9vdCIsInNjcm9sbGVyIiwiYmFyIiwic2Nyb2xsaW5nQ2xzIiwiZHJhZ2dpbmdDbHMiLCJiYXJPbkNscyIsInJlcXVpcmUiLCJidXJnZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImJ1cmdlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93QnVyZ2VyVGFyZ2V0IiwidGFyZ2V0SWQiLCJnZXRBdHRyaWJ1dGUiLCJ0YXJnZXRDbGFzc1RvZ2dsZSIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImdldEVsZW1lbnRCeUlkIiwiaW5wdXRzIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiY2FsbCIsImlucHV0IiwibGFiZWwiLCJjbG9zZXN0IiwicXVlcnlTZWxlY3RvciIsImxhYmVsVmFsIiwiaW5uZXJIVE1MIiwiZSIsImZpbGVOYW1lIiwiZmlsZXMiLCJyZXBsYWNlIiwidGFyZ2V0IiwidmFsdWUiLCJzcGxpdCIsInBvcCIsImZpZWxkcyIsImZpZWxkIiwidmFsdWVNaW4iLCJJbmZpbml0eSIsInZhbHVlTWF4IiwidmFsdWVTdGVwIiwiZXZlbnQiLCJjb250YWlucyIsIm51bSIsInBhcnNlSW50IiwiaXNOYU4iLCJPYmplY3QiLCJhc3NpZ24iLCJUeXBlRXJyb3IiLCJpbmRleCIsImFyZ3VtZW50cyIsInNvdXJjZSIsImtleSIsImhhc093blByb3BlcnR5Iiwic2VsZWN0cyIsIml0ZW0iLCJDaG9pY2VzIiwic2VhcmNoRW5hYmxlZCIsInBsYWNlaG9sZGVyVmFsdWUiLCJhdXRvc2l6ZSIsImZvcm1zIiwiZnJvbSIsImZvcm0iLCJ2YWxpZCIsImZpZWxkc1RleHQiLCJjaGVja0ZpZWxkVGV4dCIsImZpZWxkc0NoZWNrYm94IiwiY2hlY2tGaWVsZENoZWNrYm94IiwicHJldmVudERlZmF1bHQiLCJoYXNCZWVuQWxyZWFkeUJsdXJlZCIsInJlZ0V4cCIsIlJlZ0V4cCIsImRhdGFzZXQiLCJjaGVja1BhdHRlcm4iLCJyZXN1bHQiLCJ0ZXN0IiwiZXJyb3JDbGFzcyIsInBhcmVudCIsInJlbW92ZSIsImFkZCIsInRydWVWYWwiLCJjaGVja1N0YXRlIiwiY2hlY2tlZCIsImxpbmtDbGFzc05hbWUiLCJsaW5rQ2xhc3NOYW1lU2hvd0NoaWxkIiwiZmluZExpbmtDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJwYXJlbnRzIiwiZ2V0UGFyZW50cyIsImVsZW0iLCJzZWxlY3RvciIsIkVsZW1lbnQiLCJtYXRjaGVzIiwibWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJvTWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwicyIsIm93bmVyRG9jdW1lbnQiLCJwYXJlbnROb2RlIiwicHVzaCIsImJvZHlQYWRkaW5nUmlnaHRPcmlnaW5hbCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJib2R5IiwiZ2V0UHJvcGVydHlWYWx1ZSIsImJhY2tkcm9wIiwiY3JlYXRlRWxlbWVudCIsIm1vZGFsIiwic2hvd01vZGFsIiwiaGFzaCIsIm1vZGFsVGFyZ2V0Iiwic2xpY2UiLCJjbG9zZUFsbE1vZGFscyIsInRhcmdldE1vZGFsTm9kZSIsImNsaWVudEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwicGFkZGluZ1JpZ2h0IiwiZ2V0U2Nyb2xsU2l6ZSIsImRpc3BsYXkiLCJhcmlhTW9kYWwiLCJhcmlhSGlkZGVuIiwic2V0QXR0cmlidXRlIiwiYXBwZW5kIiwicmVtb3ZlQXR0cmlidXRlIiwib2ZmQ2FudmFzVG9nZ2xlIiwidG9nZ2xlTmF0aXZlIiwibGlua3MiLCJocmVmIiwic2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJ0YXJnZXRUb3AiLCJnZXRPZmZzZXRSZWN0IiwidG9wIiwic2Nyb2xsRGlmZiIsImFuaW1hdGUiLCJkdXJhdGlvbiIsInRpbWluZyIsInRpbWVGcmFjdGlvbiIsIk1hdGgiLCJwb3ciLCJkcmF3IiwicHJvZ3Jlc3MiLCJzY3JvbGxOb3ciLCJzY3JvbGxUbyIsIl9yZWYiLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwidGltZSIsImJveCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImRvY0VsZW0iLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwicGFnZVhPZmZzZXQiLCJjbGllbnRUb3AiLCJjbGllbnRMZWZ0IiwibGVmdCIsInJvdW5kIiwibG9jYXRpb24iLCJzaG93VGFiIiwidW5kZWZpbmVkIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsInN0YXRlT2JqZWN0IiwidXJsIiwidGl0bGUiLCJwYXRobmFtZSIsInRhYklkIiwiZWxlbWVudCIsInRhYnNQYXJlbnQiLCJhY3RpdmVUYWJDbGFzc05hbWUiLCJhY3RpdmVUYWJDb250ZW50Q2xhc3NOYW1lIiwiYWN0aXZlVGFiIiwidmlzaWJpbGl0eVRvZ2dsZSIsImZuIiwiYXR0YWNoRXZlbnQiLCJyZWFkeVN0YXRlIiwib3V0ZXIiLCJpbm5lciIsIm92ZXJmbG93IiwiYXBwZW5kQ2hpbGQiLCJzY3JvbGxiYXJTaXplIiwib2Zmc2V0V2lkdGgiLCJyZW1vdmVDaGlsZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssSUFBMEM7QUFDL0MsRUFBRSxpQ0FBTyxDQUFDLE1BQVEsRUFBRSxPQUFTLENBQUMsb0NBQUUsT0FBTztBQUFBO0FBQUE7QUFBQSxvR0FBQztBQUN4QyxFQUFFLE1BQU0sWUFRTjtBQUNGLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLDBCQUEwQixnQkFBZ0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtFQUErRTs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7QUMvUlc7O0FBRVo7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRlk7O0FBRVo7O0FBRUEsU0FBUyxtQkFBTyxDQUFDLGtEQUFTOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFDQUFxQztBQUNoRCxXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxJQUFJO0FBQ2YsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsSUFBSTtBQUNmLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLFlBQVksV0FBVyxlQUFlO0FBQ2pELGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLE9BQU87QUFDbEIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsc0JBQXNCLHNCQUFzQix3QkFBd0I7QUFDdkc7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxZQUFZLGlDQUFpQztBQUM3QyxZQUFZLGlDQUFpQztBQUM3QyxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsWUFBWSxpQkFBaUI7QUFDN0IsWUFBWSxpQkFBaUI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxJQUFJO0FBQ2YsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxJQUFJO0FBQ2YsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0Isa0JBQWtCLE9BQU8sMkJBQTJCLHdEQUF3RCxnQ0FBZ0MsdURBQXVELDJEQUEyRCxFQUFFOztBQUUzVCw2REFBNkQsc0VBQXNFLDhEQUE4RCxvQkFBb0I7Ozs7QUFJck47QUFDQSxhQUFhLDhDQUE4QztBQUMzRCxhQUFhLDZDQUE2QztBQUMxRCxhQUFhLDRDQUE0QztBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtDQUFrQztBQUNqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWUsbUJBQW1CO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQixlQUFlLGtCQUFrQjtBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixPQUFPO0FBQ3hCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsT0FBTztBQUN4Qjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUztBQUMxQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFNBQVM7QUFDMUI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTO0FBQzFCOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6Qjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxtREFBbUQsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFblUscUVBQXFFLDhFQUE4RSxzRUFBc0Usb0JBQW9COztBQUU3TztBQUNBLGFBQWEscURBQXFEO0FBQ2xFLGFBQWEsa0RBQWtEO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7OztBQUdBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLGFBQWEsK0NBQStDO0FBQzVELGFBQWEsNENBQTRDO0FBQ3pEOztBQUVBLFdBQVcsV0FBVzs7QUFFdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLGFBQWEscURBQXFEO0FBQ2xFLGFBQWEsa0RBQWtEO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qjs7QUFFeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0VBQWdFOztBQUVoRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSxnREFBZ0QsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFaFUsa0VBQWtFLDJFQUEyRSxtRUFBbUUsb0JBQW9COzs7O0FBSXBPO0FBQ0EsYUFBYSxxREFBcUQ7QUFDbEUsYUFBYSxrREFBa0Q7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsTUFBTTtBQUNuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLGFBQWEsOENBQThDO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx3QkFBd0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDJCQUEyQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxPQUFPO0FBQ3BCLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLCtDQUErQzs7QUFFL0M7QUFDQSw2Q0FBNkM7O0FBRTdDLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsT0FBTztBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQixhQUFhLE9BQU87QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2YsYUFBYSxFQUFFO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLENBQUM7OztBQUdEO0FBQ0EsMERBQTBELGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRTFVLDRFQUE0RSxxRkFBcUYsNkVBQTZFLG9CQUFvQjs7O0FBR2xRO0FBQ0EsYUFBYSxxREFBcUQ7QUFDbEUsYUFBYSxrREFBa0Q7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjs7QUFFL0IsK0JBQStCOztBQUUvQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qzs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEOztBQUVBLDRDQUE0QztBQUM1Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7OztBQUdEO0FBQ0Esd0RBQXdELGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUU7O0FBRXhVLDBFQUEwRSxtRkFBbUYsMkVBQTJFLG9CQUFvQjs7QUFFNVAsK0NBQStDLDBEQUEwRCwyQ0FBMkMsaUNBQWlDOzs7QUFHckw7QUFDQSxhQUFhLGtEQUFrRDtBQUMvRCxhQUFhLDRDQUE0QztBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQSx5REFBeUQsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFelUsMkVBQTJFLG9GQUFvRiw0RUFBNEUsb0JBQW9COztBQUUvUCw2REFBNkQsMERBQTBELDJDQUEyQyxpQ0FBaUM7OztBQUduTTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9ELGFBQWEsNENBQTRDO0FBQ3pELGFBQWEsOENBQThDO0FBQzNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGFBQWEsaUJBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtCQUFrQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOzs7QUFHM0M7QUFDQSxRQUFROzs7QUFHUjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7O0FBR0Q7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLDhDQUE4QztBQUMzRCxhQUFhLCtDQUErQztBQUM1RCxhQUFhLDRDQUE0QztBQUN6RCxhQUFhLHlDQUF5QztBQUN0RCxhQUFhLDJDQUEyQztBQUN4RCxhQUFhLDBDQUEwQztBQUN2RDtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLFFBQVE7QUFDckIsYUFBYSxRQUFRO0FBQ3JCLGFBQWEsUUFBUTtBQUNyQixhQUFhLDBDQUEwQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQyxhQUFhLEtBQUs7QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsT0FBTztBQUNwQixhQUFhLDBCQUEwQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGFBQWEsb0JBQW9CO0FBQ2pDLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxhQUFhLG9CQUFvQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsYUFBYSxvQkFBb0I7QUFDakMsYUFBYSxPQUFPO0FBQ3BCLGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEMsYUFBYSw4Q0FBOEM7QUFDM0Q7O0FBRUE7QUFDQSxjQUFjLE9BQU87QUFDckIsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsU0FBUztBQUN2QixhQUFhLFVBQVU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSxVQUFVO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDRDQUE0QztBQUN6RDs7QUFFQTtBQUNBLFdBQVcsS0FBSztBQUNoQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsVUFBVTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhLFVBQVU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsNkNBQTZDO0FBQzFEOztBQUVBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVCQUF1QjtBQUNwQzs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsSUFBSTtBQUNmLGFBQWEsVUFBVTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLFVBQVU7QUFDdkI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0JBQWdCLGtCQUFrQixPQUFPLDJCQUEyQix3REFBd0QsZ0NBQWdDLHVEQUF1RCwyREFBMkQsRUFBRTs7QUFFbFUsb0VBQW9FLDZFQUE2RSxxRUFBcUUsb0JBQW9COzs7Ozs7Ozs7Ozs7O0FBYTFPLFVBQVUscUVBQXFFOztBQUUvRTtBQUNBO0FBQ0EsYUFBYSwyQ0FBMkM7QUFDeEQsYUFBYSx5Q0FBeUM7QUFDdEQsYUFBYSwwQ0FBMEM7QUFDdkQsYUFBYSw0Q0FBNEM7QUFDekQ7O0FBRUEsV0FBVyxpQkFBaUI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQSxlQUFlLDhDQUE4QztBQUM3RCxlQUFlLGlCQUFpQjtBQUNoQzs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLGlCQUFpQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLHlEQUF5RDs7QUFFekQscURBQXFEOztBQUVyRCw4Q0FBOEM7O0FBRTlDLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0QkFBNEI7QUFDNUI7OztBQUdBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9EQUFvRDs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FB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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBLHVFQUF1RTs7O0FBR3ZFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUEsa0VBQWtFOzs7QUFHbEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw0REFBNEQ7OztBQUc1RDtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0wsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBEOztBQUUxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEVBQTBFOzs7QUFHMUU7QUFDQSxNQUFNOzs7QUFHTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtREFBbUQ7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQSx1RUFBdUU7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7O0FBRXBEO0FBQ0E7QUFDQSx1RkFBdUY7O0FBRXZGO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYSxjQUFjO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7O0FBRW5EO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTCw4Q0FBOEMscWNBQXFjOztBQUVuZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFdBQVc7QUFDeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1DQUFtQztBQUNuQzs7O0FBR0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwwQ0FBMEM7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0hBQStIOztBQUUvSDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztB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bnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmxvY2tzL2Jsb2Nrcy1saWJyYXJ5L2Jsb2Nrcy1saWJyYXJ5LmpzXCIpO1xuIiwiLyohXG5cdGF1dG9zaXplIDQuMC4yXG5cdGxpY2Vuc2U6IE1JVFxuXHRodHRwOi8vd3d3LmphY2tsbW9vcmUuY29tL2F1dG9zaXplXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnbW9kdWxlJywgJ2V4cG9ydHMnXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRmYWN0b3J5KG1vZHVsZSwgZXhwb3J0cyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIG1vZCA9IHtcblx0XHRcdGV4cG9ydHM6IHt9XG5cdFx0fTtcblx0XHRmYWN0b3J5KG1vZCwgbW9kLmV4cG9ydHMpO1xuXHRcdGdsb2JhbC5hdXRvc2l6ZSA9IG1vZC5leHBvcnRzO1xuXHR9XG59KSh0aGlzLCBmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgbWFwID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogZnVuY3Rpb24gKCkge1xuXHRcdHZhciBrZXlzID0gW107XG5cdFx0dmFyIHZhbHVlcyA9IFtdO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGhhczogZnVuY3Rpb24gaGFzKGtleSkge1xuXHRcdFx0XHRyZXR1cm4ga2V5cy5pbmRleE9mKGtleSkgPiAtMTtcblx0XHRcdH0sXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcblx0XHRcdFx0cmV0dXJuIHZhbHVlc1trZXlzLmluZGV4T2Yoa2V5KV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuXHRcdFx0XHRpZiAoa2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG5cdFx0XHRcdFx0a2V5cy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0dmFsdWVzLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVsZXRlOiBmdW5jdGlvbiBfZGVsZXRlKGtleSkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBrZXlzLmluZGV4T2Yoa2V5KTtcblx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcblx0XHRcdFx0XHRrZXlzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdFx0dmFsdWVzLnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9KCk7XG5cblx0dmFyIGNyZWF0ZUV2ZW50ID0gZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xuXHRcdHJldHVybiBuZXcgRXZlbnQobmFtZSwgeyBidWJibGVzOiB0cnVlIH0pO1xuXHR9O1xuXHR0cnkge1xuXHRcdG5ldyBFdmVudCgndGVzdCcpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gSUUgZG9lcyBub3Qgc3VwcG9ydCBgbmV3IEV2ZW50KClgXG5cdFx0Y3JlYXRlRXZlbnQgPSBmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XG5cdFx0XHR2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cdFx0XHRldnQuaW5pdEV2ZW50KG5hbWUsIHRydWUsIGZhbHNlKTtcblx0XHRcdHJldHVybiBldnQ7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFzc2lnbih0YSkge1xuXHRcdGlmICghdGEgfHwgIXRhLm5vZGVOYW1lIHx8IHRhLm5vZGVOYW1lICE9PSAnVEVYVEFSRUEnIHx8IG1hcC5oYXModGEpKSByZXR1cm47XG5cblx0XHR2YXIgaGVpZ2h0T2Zmc2V0ID0gbnVsbDtcblx0XHR2YXIgY2xpZW50V2lkdGggPSBudWxsO1xuXHRcdHZhciBjYWNoZWRIZWlnaHQgPSBudWxsO1xuXG5cdFx0ZnVuY3Rpb24gaW5pdCgpIHtcblx0XHRcdHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRhLCBudWxsKTtcblxuXHRcdFx0aWYgKHN0eWxlLnJlc2l6ZSA9PT0gJ3ZlcnRpY2FsJykge1xuXHRcdFx0XHR0YS5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XG5cdFx0XHR9IGVsc2UgaWYgKHN0eWxlLnJlc2l6ZSA9PT0gJ2JvdGgnKSB7XG5cdFx0XHRcdHRhLnN0eWxlLnJlc2l6ZSA9ICdob3Jpem9udGFsJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN0eWxlLmJveFNpemluZyA9PT0gJ2NvbnRlbnQtYm94Jykge1xuXHRcdFx0XHRoZWlnaHRPZmZzZXQgPSAtKHBhcnNlRmxvYXQoc3R5bGUucGFkZGluZ1RvcCkgKyBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdCb3R0b20pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhlaWdodE9mZnNldCA9IHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpICsgcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJCb3R0b21XaWR0aCk7XG5cdFx0XHR9XG5cdFx0XHQvLyBGaXggd2hlbiBhIHRleHRhcmVhIGlzIG5vdCBvbiBkb2N1bWVudCBib2R5IGFuZCBoZWlnaHRPZmZzZXQgaXMgTm90IGEgTnVtYmVyXG5cdFx0XHRpZiAoaXNOYU4oaGVpZ2h0T2Zmc2V0KSkge1xuXHRcdFx0XHRoZWlnaHRPZmZzZXQgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBjaGFuZ2VPdmVyZmxvdyh2YWx1ZSkge1xuXHRcdFx0e1xuXHRcdFx0XHQvLyBDaHJvbWUvU2FmYXJpLXNwZWNpZmljIGZpeDpcblx0XHRcdFx0Ly8gV2hlbiB0aGUgdGV4dGFyZWEgeS1vdmVyZmxvdyBpcyBoaWRkZW4sIENocm9tZS9TYWZhcmkgZG8gbm90IHJlZmxvdyB0aGUgdGV4dCB0byBhY2NvdW50IGZvciB0aGUgc3BhY2Vcblx0XHRcdFx0Ly8gbWFkZSBhdmFpbGFibGUgYnkgcmVtb3ZpbmcgdGhlIHNjcm9sbGJhci4gVGhlIGZvbGxvd2luZyBmb3JjZXMgdGhlIG5lY2Vzc2FyeSB0ZXh0IHJlZmxvdy5cblx0XHRcdFx0dmFyIHdpZHRoID0gdGEuc3R5bGUud2lkdGg7XG5cdFx0XHRcdHRhLnN0eWxlLndpZHRoID0gJzBweCc7XG5cdFx0XHRcdC8vIEZvcmNlIHJlZmxvdzpcblx0XHRcdFx0LyoganNoaW50IGlnbm9yZTpzdGFydCAqL1xuXHRcdFx0XHR0YS5vZmZzZXRXaWR0aDtcblx0XHRcdFx0LyoganNoaW50IGlnbm9yZTplbmQgKi9cblx0XHRcdFx0dGEuc3R5bGUud2lkdGggPSB3aWR0aDtcblx0XHRcdH1cblxuXHRcdFx0dGEuc3R5bGUub3ZlcmZsb3dZID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZ2V0UGFyZW50T3ZlcmZsb3dzKGVsKSB7XG5cdFx0XHR2YXIgYXJyID0gW107XG5cblx0XHRcdHdoaWxlIChlbCAmJiBlbC5wYXJlbnROb2RlICYmIGVsLnBhcmVudE5vZGUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG5cdFx0XHRcdGlmIChlbC5wYXJlbnROb2RlLnNjcm9sbFRvcCkge1xuXHRcdFx0XHRcdGFyci5wdXNoKHtcblx0XHRcdFx0XHRcdG5vZGU6IGVsLnBhcmVudE5vZGUsXG5cdFx0XHRcdFx0XHRzY3JvbGxUb3A6IGVsLnBhcmVudE5vZGUuc2Nyb2xsVG9wXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWwgPSBlbC5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJlc2l6ZSgpIHtcblx0XHRcdGlmICh0YS5zY3JvbGxIZWlnaHQgPT09IDApIHtcblx0XHRcdFx0Ly8gSWYgdGhlIHNjcm9sbEhlaWdodCBpcyAwLCB0aGVuIHRoZSBlbGVtZW50IHByb2JhYmx5IGhhcyBkaXNwbGF5Om5vbmUgb3IgaXMgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvdmVyZmxvd3MgPSBnZXRQYXJlbnRPdmVyZmxvd3ModGEpO1xuXHRcdFx0dmFyIGRvY1RvcCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wOyAvLyBOZWVkZWQgZm9yIE1vYmlsZSBJRSAodGlja2V0ICMyNDApXG5cblx0XHRcdHRhLnN0eWxlLmhlaWdodCA9ICcnO1xuXHRcdFx0dGEuc3R5bGUuaGVpZ2h0ID0gdGEuc2Nyb2xsSGVpZ2h0ICsgaGVpZ2h0T2Zmc2V0ICsgJ3B4JztcblxuXHRcdFx0Ly8gdXNlZCB0byBjaGVjayBpZiBhbiB1cGRhdGUgaXMgYWN0dWFsbHkgbmVjZXNzYXJ5IG9uIHdpbmRvdy5yZXNpemVcblx0XHRcdGNsaWVudFdpZHRoID0gdGEuY2xpZW50V2lkdGg7XG5cblx0XHRcdC8vIHByZXZlbnRzIHNjcm9sbC1wb3NpdGlvbiBqdW1waW5nXG5cdFx0XHRvdmVyZmxvd3MuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcblx0XHRcdFx0ZWwubm9kZS5zY3JvbGxUb3AgPSBlbC5zY3JvbGxUb3A7XG5cdFx0XHR9KTtcblxuXHRcdFx0aWYgKGRvY1RvcCkge1xuXHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jVG9wO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblx0XHRcdHJlc2l6ZSgpO1xuXG5cdFx0XHR2YXIgc3R5bGVIZWlnaHQgPSBNYXRoLnJvdW5kKHBhcnNlRmxvYXQodGEuc3R5bGUuaGVpZ2h0KSk7XG5cdFx0XHR2YXIgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YSwgbnVsbCk7XG5cblx0XHRcdC8vIFVzaW5nIG9mZnNldEhlaWdodCBhcyBhIHJlcGxhY2VtZW50IGZvciBjb21wdXRlZC5oZWlnaHQgaW4gSUUsIGJlY2F1c2UgSUUgZG9lcyBub3QgYWNjb3VudCB1c2Ugb2YgYm9yZGVyLWJveFxuXHRcdFx0dmFyIGFjdHVhbEhlaWdodCA9IGNvbXB1dGVkLmJveFNpemluZyA9PT0gJ2NvbnRlbnQtYm94JyA/IE1hdGgucm91bmQocGFyc2VGbG9hdChjb21wdXRlZC5oZWlnaHQpKSA6IHRhLm9mZnNldEhlaWdodDtcblxuXHRcdFx0Ly8gVGhlIGFjdHVhbCBoZWlnaHQgbm90IG1hdGNoaW5nIHRoZSBzdHlsZSBoZWlnaHQgKHNldCB2aWEgdGhlIHJlc2l6ZSBtZXRob2QpIGluZGljYXRlcyB0aGF0IFxuXHRcdFx0Ly8gdGhlIG1heC1oZWlnaHQgaGFzIGJlZW4gZXhjZWVkZWQsIGluIHdoaWNoIGNhc2UgdGhlIG92ZXJmbG93IHNob3VsZCBiZSBhbGxvd2VkLlxuXHRcdFx0aWYgKGFjdHVhbEhlaWdodCA8IHN0eWxlSGVpZ2h0KSB7XG5cdFx0XHRcdGlmIChjb21wdXRlZC5vdmVyZmxvd1kgPT09ICdoaWRkZW4nKSB7XG5cdFx0XHRcdFx0Y2hhbmdlT3ZlcmZsb3coJ3Njcm9sbCcpO1xuXHRcdFx0XHRcdHJlc2l6ZSgpO1xuXHRcdFx0XHRcdGFjdHVhbEhlaWdodCA9IGNvbXB1dGVkLmJveFNpemluZyA9PT0gJ2NvbnRlbnQtYm94JyA/IE1hdGgucm91bmQocGFyc2VGbG9hdCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YSwgbnVsbCkuaGVpZ2h0KSkgOiB0YS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIE5vcm1hbGx5IGtlZXAgb3ZlcmZsb3cgc2V0IHRvIGhpZGRlbiwgdG8gYXZvaWQgZmxhc2ggb2Ygc2Nyb2xsYmFyIGFzIHRoZSB0ZXh0YXJlYSBleHBhbmRzLlxuXHRcdFx0XHRpZiAoY29tcHV0ZWQub3ZlcmZsb3dZICE9PSAnaGlkZGVuJykge1xuXHRcdFx0XHRcdGNoYW5nZU92ZXJmbG93KCdoaWRkZW4nKTtcblx0XHRcdFx0XHRyZXNpemUoKTtcblx0XHRcdFx0XHRhY3R1YWxIZWlnaHQgPSBjb21wdXRlZC5ib3hTaXppbmcgPT09ICdjb250ZW50LWJveCcgPyBNYXRoLnJvdW5kKHBhcnNlRmxvYXQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGEsIG51bGwpLmhlaWdodCkpIDogdGEub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjYWNoZWRIZWlnaHQgIT09IGFjdHVhbEhlaWdodCkge1xuXHRcdFx0XHRjYWNoZWRIZWlnaHQgPSBhY3R1YWxIZWlnaHQ7XG5cdFx0XHRcdHZhciBldnQgPSBjcmVhdGVFdmVudCgnYXV0b3NpemU6cmVzaXplZCcpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHRhLmRpc3BhdGNoRXZlbnQoZXZ0KTtcblx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0Ly8gRmlyZWZveCB3aWxsIHRocm93IGFuIGVycm9yIG9uIGRpc3BhdGNoRXZlbnQgZm9yIGEgZGV0YWNoZWQgZWxlbWVudFxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4OTM3NlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIHBhZ2VSZXNpemUgPSBmdW5jdGlvbiBwYWdlUmVzaXplKCkge1xuXHRcdFx0aWYgKHRhLmNsaWVudFdpZHRoICE9PSBjbGllbnRXaWR0aCkge1xuXHRcdFx0XHR1cGRhdGUoKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0dmFyIGRlc3Ryb3kgPSBmdW5jdGlvbiAoc3R5bGUpIHtcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBwYWdlUmVzaXplLCBmYWxzZSk7XG5cdFx0XHR0YS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHVwZGF0ZSwgZmFsc2UpO1xuXHRcdFx0dGEucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB1cGRhdGUsIGZhbHNlKTtcblx0XHRcdHRhLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2F1dG9zaXplOmRlc3Ryb3knLCBkZXN0cm95LCBmYWxzZSk7XG5cdFx0XHR0YS5yZW1vdmVFdmVudExpc3RlbmVyKCdhdXRvc2l6ZTp1cGRhdGUnLCB1cGRhdGUsIGZhbHNlKTtcblxuXHRcdFx0T2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHR0YS5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcblx0XHRcdH0pO1xuXG5cdFx0XHRtYXAuZGVsZXRlKHRhKTtcblx0XHR9LmJpbmQodGEsIHtcblx0XHRcdGhlaWdodDogdGEuc3R5bGUuaGVpZ2h0LFxuXHRcdFx0cmVzaXplOiB0YS5zdHlsZS5yZXNpemUsXG5cdFx0XHRvdmVyZmxvd1k6IHRhLnN0eWxlLm92ZXJmbG93WSxcblx0XHRcdG92ZXJmbG93WDogdGEuc3R5bGUub3ZlcmZsb3dYLFxuXHRcdFx0d29yZFdyYXA6IHRhLnN0eWxlLndvcmRXcmFwXG5cdFx0fSk7XG5cblx0XHR0YS5hZGRFdmVudExpc3RlbmVyKCdhdXRvc2l6ZTpkZXN0cm95JywgZGVzdHJveSwgZmFsc2UpO1xuXG5cdFx0Ly8gSUU5IGRvZXMgbm90IGZpcmUgb25wcm9wZXJ0eWNoYW5nZSBvciBvbmlucHV0IGZvciBkZWxldGlvbnMsXG5cdFx0Ly8gc28gYmluZGluZyB0byBvbmtleXVwIHRvIGNhdGNoIG1vc3Qgb2YgdGhvc2UgZXZlbnRzLlxuXHRcdC8vIFRoZXJlIGlzIG5vIHdheSB0aGF0IEkga25vdyBvZiB0byBkZXRlY3Qgc29tZXRoaW5nIGxpa2UgJ2N1dCcgaW4gSUU5LlxuXHRcdGlmICgnb25wcm9wZXJ0eWNoYW5nZScgaW4gdGEgJiYgJ29uaW5wdXQnIGluIHRhKSB7XG5cdFx0XHR0YS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHVwZGF0ZSwgZmFsc2UpO1xuXHRcdH1cblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBwYWdlUmVzaXplLCBmYWxzZSk7XG5cdFx0dGEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB1cGRhdGUsIGZhbHNlKTtcblx0XHR0YS5hZGRFdmVudExpc3RlbmVyKCdhdXRvc2l6ZTp1cGRhdGUnLCB1cGRhdGUsIGZhbHNlKTtcblx0XHR0YS5zdHlsZS5vdmVyZmxvd1ggPSAnaGlkZGVuJztcblx0XHR0YS5zdHlsZS53b3JkV3JhcCA9ICdicmVhay13b3JkJztcblxuXHRcdG1hcC5zZXQodGEsIHtcblx0XHRcdGRlc3Ryb3k6IGRlc3Ryb3ksXG5cdFx0XHR1cGRhdGU6IHVwZGF0ZVxuXHRcdH0pO1xuXG5cdFx0aW5pdCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVzdHJveSh0YSkge1xuXHRcdHZhciBtZXRob2RzID0gbWFwLmdldCh0YSk7XG5cdFx0aWYgKG1ldGhvZHMpIHtcblx0XHRcdG1ldGhvZHMuZGVzdHJveSgpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZSh0YSkge1xuXHRcdHZhciBtZXRob2RzID0gbWFwLmdldCh0YSk7XG5cdFx0aWYgKG1ldGhvZHMpIHtcblx0XHRcdG1ldGhvZHMudXBkYXRlKCk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGF1dG9zaXplID0gbnVsbDtcblxuXHQvLyBEbyBub3RoaW5nIGluIE5vZGUuanMgZW52aXJvbm1lbnQgYW5kIElFOCAob3IgbG93ZXIpXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygd2luZG93LmdldENvbXB1dGVkU3R5bGUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRhdXRvc2l6ZSA9IGZ1bmN0aW9uIGF1dG9zaXplKGVsKSB7XG5cdFx0XHRyZXR1cm4gZWw7XG5cdFx0fTtcblx0XHRhdXRvc2l6ZS5kZXN0cm95ID0gZnVuY3Rpb24gKGVsKSB7XG5cdFx0XHRyZXR1cm4gZWw7XG5cdFx0fTtcblx0XHRhdXRvc2l6ZS51cGRhdGUgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdHJldHVybiBlbDtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdGF1dG9zaXplID0gZnVuY3Rpb24gYXV0b3NpemUoZWwsIG9wdGlvbnMpIHtcblx0XHRcdGlmIChlbCkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsLmxlbmd0aCA/IGVsIDogW2VsXSwgZnVuY3Rpb24gKHgpIHtcblx0XHRcdFx0XHRyZXR1cm4gYXNzaWduKHgsIG9wdGlvbnMpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBlbDtcblx0XHR9O1xuXHRcdGF1dG9zaXplLmRlc3Ryb3kgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdGlmIChlbCkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsLmxlbmd0aCA/IGVsIDogW2VsXSwgZGVzdHJveSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWw7XG5cdFx0fTtcblx0XHRhdXRvc2l6ZS51cGRhdGUgPSBmdW5jdGlvbiAoZWwpIHtcblx0XHRcdGlmIChlbCkge1xuXHRcdFx0XHRBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGVsLmxlbmd0aCA/IGVsIDogW2VsXSwgdXBkYXRlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBlbDtcblx0XHR9O1xuXHR9XG5cblx0ZXhwb3J0cy5kZWZhdWx0ID0gYXV0b3NpemU7XG5cdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xufSk7IiwiJ3VzZSBzdHJpY3QnXG5cbi8qIEF1dG91cGRhdGUgcGx1Z2luIGZvciBiYXJvbiAwLjYrICovXG5cbmZ1bmN0aW9uIGF1dG9VcGRhdGVPbmUoTXV0YXRpb25PYnNlcnZlcikge1xuICAgIHZhciBzZWxmID0gdGhpc1xuICAgIHZhciB3YXRjaGVyXG5cbiAgICBpZiAodGhpcy5fYXUpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWN0dWFsaXplV2F0Y2hlcigpIHtcbiAgICAgICAgaWYgKCFzZWxmLnJvb3Rbc2VsZi5vcmlnaW4ub2Zmc2V0XSkge1xuICAgICAgICAgICAgc3RhcnRXYXRjaCgpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdG9wV2F0Y2goKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGludGVydmFsIHRpbWVvdXQgZm9yIHdhdGNoaW5nIHdoZW4gcm9vdCBub2RlIHdpbGwgYmUgdmlzaWJsZVxuICAgIGZ1bmN0aW9uIHN0YXJ0V2F0Y2goKSB7XG4gICAgICAgIGlmICh3YXRjaGVyKSByZXR1cm5cblxuICAgICAgICB3YXRjaGVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5yb290W3NlbGYub3JpZ2luLm9mZnNldF0pIHtcbiAgICAgICAgICAgICAgICBzdG9wV2F0Y2goKVxuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMzAwKSAvLyBpcyBpdCBnb29kIGVub3VnaHQgZm9yIHlvdT8pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcFdhdGNoKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHdhdGNoZXIpXG4gICAgICAgIHdhdGNoZXIgPSBudWxsXG4gICAgfVxuXG4gICAgdmFyIGRlYm91bmNlZFVwZGF0ZXIgPSBzZWxmLl9kZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi51cGRhdGUoKVxuICAgIH0sIDMwMClcblxuICAgIHRoaXMuX29ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgIGFjdHVhbGl6ZVdhdGNoZXIoKVxuICAgICAgICBzZWxmLnVwZGF0ZSgpXG4gICAgICAgIGRlYm91bmNlZFVwZGF0ZXIoKVxuICAgIH0pXG5cbiAgICB0aGlzLm9uKCdpbml0JywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuX29ic2VydmVyLm9ic2VydmUoc2VsZi5yb290LCB7XG4gICAgICAgICAgICBjaGlsZExpc3Q6IHRydWUsXG4gICAgICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICAgICAgICAgICAgLy8gYXR0cmlidXRlczogdHJ1ZVxuICAgICAgICAgICAgLy8gTm8gcmVhc29ucyB0byBzZXQgYXR0cmlidXRlcyB0byB0cnVlXG4gICAgICAgICAgICAvLyBUaGUgY2FzZSB3aGVuIHJvb3QvY2hpbGQgbm9kZSB3aXRoIGFscmVhZHkgcHJvcGVybHkgaW5pdGVkIGJhcm9uIHRvZ2dsZWQgdG8gaGlkZGVuIGFuZCB0aGVuIGJhY2sgdG8gdmlzaWJsZSxcbiAgICAgICAgICAgIC8vIGFuZCB0aGUgc2l6ZSBvZiBwYXJlbnQgd2FzIGNoYW5nZWQgZHVyaW5nIHRoYXQgaGlkZGVuIHN0YXRlLCBpcyB2ZXJ5IHJhcmVcbiAgICAgICAgICAgIC8vIE90aGVyIGNhc2VzIGFyZSBjb3ZlcmVkIGJ5IHdhdGNoZXIsIGFuZCB5b3Ugc3RpbGwgY2FuIGRvIC51cGRhdGUgYnkgeW91cnNlbGZcbiAgICAgICAgfSlcblxuICAgICAgICBhY3R1YWxpemVXYXRjaGVyKClcbiAgICB9KVxuXG4gICAgdGhpcy5vbignZGlzcG9zZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLl9vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgICAgc3RvcFdhdGNoKClcbiAgICAgICAgZGVsZXRlIHNlbGYuX29ic2VydmVyXG4gICAgfSlcblxuICAgIHRoaXMuX2F1ID0gdHJ1ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGF1dG9VcGRhdGVDcmVhdG9yKHdpbikge1xuICAgIHZhciBNdXRhdGlvbk9ic2VydmVyID0gd2luLk11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luLldlYktpdE11dGF0aW9uT2JzZXJ2ZXIgfHwgd2luLk1vek11dGF0aW9uT2JzZXJ2ZXIgfHwgbnVsbFxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGF1dG9VcGRhdGUoKSB7XG4gICAgICAgIGlmICghTXV0YXRpb25PYnNlcnZlcikgcmV0dXJuIHRoaXNcblxuICAgICAgICBhdXRvVXBkYXRlT25lLmNhbGwodGhpcywgTXV0YXRpb25PYnNlcnZlcilcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiBDb250cm9scyBwbHVnaW4gZm9yIGJhcm9uICovXG5cbnZhciBxcyA9IHJlcXVpcmUoJy4vdXRpbHMnKS5xc1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbnRyb2xzKHBhcmFtcykge1xuICAgIHZhciBmb3J3YXJkLCBiYWNrd2FyZCwgdHJhY2ssIHNjcmVlbixcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIGV2ZW50XG5cbiAgICBzY3JlZW4gPSBwYXJhbXMuc2NyZWVuIHx8IDAuOVxuXG4gICAgaWYgKHBhcmFtcy5mb3J3YXJkKSB7XG4gICAgICAgIGZvcndhcmQgPSBxcyhwYXJhbXMuZm9yd2FyZCwgdGhpcy5jbGlwcGVyKVxuXG4gICAgICAgIGV2ZW50ID0ge1xuICAgICAgICAgICAgZWxlbWVudDogZm9yd2FyZCxcblxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBzZWxmLnBvcygpICsgKHBhcmFtcy5kZWx0YSB8fCAzMClcblxuICAgICAgICAgICAgICAgIHNlbGYucG9zKHkpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0eXBlOiAnY2xpY2snXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnB1c2goZXZlbnQpIC8vIEZvciBhdXRvLWRpc3Bvc2VcbiAgICAgICAgdGhpcy5ldmVudChldmVudC5lbGVtZW50LCBldmVudC50eXBlLCBldmVudC5oYW5kbGVyLCAnb24nKVxuICAgIH1cblxuICAgIGlmIChwYXJhbXMuYmFja3dhcmQpIHtcbiAgICAgICAgYmFja3dhcmQgPSBxcyhwYXJhbXMuYmFja3dhcmQsIHRoaXMuY2xpcHBlcilcblxuICAgICAgICBldmVudCA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGJhY2t3YXJkLFxuXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgeSA9IHNlbGYucG9zKCkgLSAocGFyYW1zLmRlbHRhIHx8IDMwKVxuXG4gICAgICAgICAgICAgICAgc2VsZi5wb3MoeSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGU6ICdjbGljaydcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2V2ZW50SGFuZGxlcnMucHVzaChldmVudCkgLy8gRm9yIGF1dG8tZGlzcG9zZVxuICAgICAgICB0aGlzLmV2ZW50KGV2ZW50LmVsZW1lbnQsIGV2ZW50LnR5cGUsIGV2ZW50LmhhbmRsZXIsICdvbicpXG4gICAgfVxuXG4gICAgaWYgKHBhcmFtcy50cmFjaykge1xuICAgICAgICBpZiAocGFyYW1zLnRyYWNrID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0cmFjayA9IHRoaXMudHJhY2tcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyYWNrID0gcXMocGFyYW1zLnRyYWNrLCB0aGlzLmNsaXBwZXIpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICAgIGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IHRyYWNrLFxuXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRGlva3V6L2Jhcm9uL2lzc3Vlcy8xMjFcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ICE9IHRyYWNrKSByZXR1cm5cblxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGVbJ29mZnNldCcgKyBzZWxmLm9yaWdpbi54XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHhCYXIgPSBzZWxmLmJhcltzZWxmLm9yaWdpbi5vZmZzZXRQb3NdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbiA9IDBcblxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IHhCYXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ24gPSAtMVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHggPiB4QmFyICsgc2VsZi5iYXJbc2VsZi5vcmlnaW4ub2Zmc2V0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbiA9IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gc2VsZi5wb3MoKSArIHNpZ24gKiBzY3JlZW4gKiBzZWxmLnNjcm9sbGVyW3NlbGYub3JpZ2luLmNsaWVudF1cblxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBvcyh5KVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICB0eXBlOiAnbW91c2Vkb3duJ1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9ldmVudEhhbmRsZXJzLnB1c2goZXZlbnQpIC8vIEZvciBhdXRvLWRpc3Bvc2VcbiAgICAgICAgICAgIHRoaXMuZXZlbnQoZXZlbnQuZWxlbWVudCwgZXZlbnQudHlwZSwgZXZlbnQuaGFuZGxlciwgJ29uJylcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZyA9IChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcyB8fCAoMSwgZXZhbCkoJ3RoaXMnKVxufSgpKVxudmFyIHNjb3BlZFdpbmRvdyA9IGcgJiYgZy53aW5kb3cgfHwgZ1xuXG52YXIgZXZlbnQgPSByZXF1aXJlKCcuL3V0aWxzJykuZXZlbnRcbnZhciBjc3MgPSByZXF1aXJlKCcuL3V0aWxzJykuY3NzXG52YXIgYWRkID0gcmVxdWlyZSgnLi91dGlscycpLmFkZFxudmFyIGhhcyA9IHJlcXVpcmUoJy4vdXRpbHMnKS5oYXNcbnZhciBybSA9IHJlcXVpcmUoJy4vdXRpbHMnKS5ybVxudmFyIGNsb25lID0gcmVxdWlyZSgnLi91dGlscycpLmNsb25lXG52YXIgcXMgPSByZXF1aXJlKCcuL3V0aWxzJykucXNcblxudmFyIF9iYXJvbiA9IGJhcm9uIC8vIFN0b3JlZCBiYXJvbiB2YWx1ZSBmb3Igbm9Db25mbGljdCB1c2FnZVxuLy8gdmFyIEl0ZW0gPSB7fVxudmFyIHBvcyA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ3dpZHRoJywgJ2hlaWdodCddXG4vLyBHbG9iYWwgc3RvcmUgZm9yIGFsbCBiYXJvbiBpbnN0YW5jZXMgKHRvIGJlIGFibGUgdG8gZGlzcG9zZSB0aGVtIG9uIGh0bWwtbm9kZXMpXG52YXIgaW5zdGFuY2VzID0gW11cbnZhciBvcmlnaW4gPSB7XG4gICAgdjogeyAvLyBWZXJ0aWNhbFxuICAgICAgICB4OiAnWScsIHBvczogcG9zWzFdLCBvcHBvczogcG9zWzNdLCBjcm9zc1BvczogcG9zWzBdLCBjcm9zc09wUG9zOiBwb3NbMl0sXG4gICAgICAgIHNpemU6IHBvc1s1XSxcbiAgICAgICAgY3Jvc3NTaXplOiBwb3NbNF0sIGNyb3NzTWluU2l6ZTogJ21pbi0nICsgcG9zWzRdLCBjcm9zc01heFNpemU6ICdtYXgtJyArIHBvc1s0XSxcbiAgICAgICAgY2xpZW50OiAnY2xpZW50SGVpZ2h0JywgY3Jvc3NDbGllbnQ6ICdjbGllbnRXaWR0aCcsXG4gICAgICAgIHNjcm9sbEVkZ2U6ICdzY3JvbGxMZWZ0JyxcbiAgICAgICAgb2Zmc2V0OiAnb2Zmc2V0SGVpZ2h0JywgY3Jvc3NPZmZzZXQ6ICdvZmZzZXRXaWR0aCcsIG9mZnNldFBvczogJ29mZnNldFRvcCcsXG4gICAgICAgIHNjcm9sbDogJ3Njcm9sbFRvcCcsIHNjcm9sbFNpemU6ICdzY3JvbGxIZWlnaHQnXG4gICAgfSxcbiAgICBoOiB7IC8vIEhvcml6b250YWxcbiAgICAgICAgeDogJ1gnLCBwb3M6IHBvc1swXSwgb3Bwb3M6IHBvc1syXSwgY3Jvc3NQb3M6IHBvc1sxXSwgY3Jvc3NPcFBvczogcG9zWzNdLFxuICAgICAgICBzaXplOiBwb3NbNF0sXG4gICAgICAgIGNyb3NzU2l6ZTogcG9zWzVdLCBjcm9zc01pblNpemU6ICdtaW4tJyArIHBvc1s1XSwgY3Jvc3NNYXhTaXplOiAnbWF4LScgKyBwb3NbNV0sXG4gICAgICAgIGNsaWVudDogJ2NsaWVudFdpZHRoJywgY3Jvc3NDbGllbnQ6ICdjbGllbnRIZWlnaHQnLFxuICAgICAgICBzY3JvbGxFZGdlOiAnc2Nyb2xsVG9wJyxcbiAgICAgICAgb2Zmc2V0OiAnb2Zmc2V0V2lkdGgnLCBjcm9zc09mZnNldDogJ29mZnNldEhlaWdodCcsIG9mZnNldFBvczogJ29mZnNldExlZnQnLFxuICAgICAgICBzY3JvbGw6ICdzY3JvbGxMZWZ0Jywgc2Nyb2xsU2l6ZTogJ3Njcm9sbFdpZHRoJ1xuICAgIH1cbn1cblxuLy8gU29tZSB1Z2x5IHZhcnNcbnZhciBvcGVyYTEybWF4U2Nyb2xsYmFyU2l6ZSA9IDE3XG4vLyBJIGhhdGUgeW91IGh0dHBzOi8vZ2l0aHViLmNvbS9EaW9rdXovYmFyb24vaXNzdWVzLzExMFxudmFyIG1hY21zeGZmU2Nyb2xsYmFyU2l6ZSA9IDE1XG52YXIgbWFjb3N4ZmZSZSA9IC9bXFxzXFxTXSpNYWNpbnRvc2hbXFxzXFxTXSpcXCkgR2Vja29bXFxzXFxTXSovXG52YXIgaXNNYWNGRiA9IG1hY29zeGZmUmUudGVzdChzY29wZWRXaW5kb3cubmF2aWdhdG9yICYmIHNjb3BlZFdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KVxuXG52YXIgbG9nLCBsaXZlQmFyb25zLCBzaG93bkVycm9yc1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZyA9IHJlcXVpcmUoJy4vbG9nJylcbiAgICBsaXZlQmFyb25zID0gMFxuICAgIHNob3duRXJyb3JzID0ge1xuICAgICAgICBsaXZlVG9vTWFueTogZmFsc2UsXG4gICAgICAgIGFsbFRvb01hbnk6IGZhbHNlXG4gICAgfVxufVxuXG4vLyB3aW5kb3cuYmFyb24gYW5kIGpRdWVyeS5mbi5iYXJvbiBwb2ludHMgdG8gdGhpcyBmdW5jdGlvblxuZnVuY3Rpb24gYmFyb24odXNlcikge1xuICAgIHZhciB3aXRoUGFyYW1zID0gISF1c2VyXG4gICAgdmFyIHRyeU5vZGUgPSAodXNlciAmJiB1c2VyWzBdKSB8fCB1c2VyXG4gICAgdmFyIGlzTm9kZSA9IHR5cGVvZiB1c2VyID09ICdzdHJpbmcnIHx8IHRyeU5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudFxuICAgIHZhciBwYXJhbXMgPSBpc05vZGUgPyB7IHJvb3Q6IHVzZXIgfSA6IGNsb25lKHVzZXIpXG4gICAgdmFyIGpRdWVyeU1vZGVcbiAgICB2YXIgcm9vdE5vZGVcbiAgICB2YXIgZGVmYXVsdFBhcmFtcyA9IHtcbiAgICAgICAgZGlyZWN0aW9uOiAndicsXG4gICAgICAgIGJhck9uQ2xzOiAnX3Njcm9sbGJhcicsXG4gICAgICAgIHJlc2l6ZURlYm91bmNlOiAwLFxuICAgICAgICBldmVudDogZXZlbnQsXG4gICAgICAgIGNzc0d1cnU6IGZhbHNlLFxuICAgICAgICBpbXBhY3Q6ICdzY3JvbGxlcicsXG4gICAgICAgIHBvc2l0aW9uOiAnc3RhdGljJ1xuICAgIH1cblxuICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7fVxuXG4gICAgLy8gRXh0ZW5kaW5nIGRlZmF1bHQgcGFyYW1zIGJ5IHVzZXItZGVmaW5lZCBwYXJhbXNcbiAgICBmb3IgKHZhciBrZXkgaW4gZGVmYXVsdFBhcmFtcykge1xuICAgICAgICBpZiAocGFyYW1zW2tleV0gPT0gbnVsbCkgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICBwYXJhbXNba2V5XSA9IGRlZmF1bHRQYXJhbXNba2V5XVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKHBhcmFtcy5wb3NpdGlvbiA9PSAnYWJzb2x1dGUnICYmIHBhcmFtcy5pbXBhY3QgPT0gJ2NsaXBwZXInKSB7XG4gICAgICAgICAgICBsb2coJ2Vycm9yJywgW1xuICAgICAgICAgICAgICAgICdTaW11bHRhbmVvdXMgdXNlIG9mIGBhYnNvbHV0ZWAgcG9zaXRpb24gYW5kIGBjbGlwcGVyYCBpbXBhY3QgdmFsdWVzIGRldGVjdGVkLicsXG4gICAgICAgICAgICAgICAgJ1Rob3NlIHZhbHVlcyBjYW5ub3QgYmUgdXNlZCB0b2dldGhlci4nLFxuICAgICAgICAgICAgICAgICdTZWUgbW9yZSBodHRwczovL2dpdGh1Yi5jb20vRGlva3V6L2Jhcm9uL2lzc3Vlcy8xMzgnXG4gICAgICAgICAgICBdLmpvaW4oJyAnKSwgcGFyYW1zKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gYHRoaXNgIGNvdWxkIGJlIGEgalF1ZXJ5IGluc3RhbmNlXG4gICAgalF1ZXJ5TW9kZSA9IHRoaXMgJiYgdGhpcyBpbnN0YW5jZW9mIHNjb3BlZFdpbmRvdy5qUXVlcnlcblxuICAgIGlmIChwYXJhbXMuX2NoYWluKSB7XG4gICAgICAgIHJvb3ROb2RlID0gcGFyYW1zLnJvb3RcbiAgICB9IGVsc2UgaWYgKGpRdWVyeU1vZGUpIHtcbiAgICAgICAgcGFyYW1zLnJvb3QgPSByb290Tm9kZSA9IHRoaXNbMF1cbiAgICB9IGVsc2Uge1xuICAgICAgICByb290Tm9kZSA9IHFzKHBhcmFtcy5yb290IHx8IHBhcmFtcy5zY3JvbGxlcilcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXJvb3ROb2RlKSB7XG4gICAgICAgICAgICBsb2coJ2Vycm9yJywgW1xuICAgICAgICAgICAgICAgICdCYXJvbiBpbml0aWFsaXphdGlvbiBmYWlsZWQ6IHJvb3Qgbm9kZSBub3QgZm91bmQuJ1xuICAgICAgICAgICAgXS5qb2luKCcsICcpLCBwYXJhbXMpXG5cbiAgICAgICAgICAgIHJldHVybiAvLyBvciByZXR1cm4gYmFyb24tc2hlbGw/XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYXR0ciA9IG1hbmFnZUF0dHIocm9vdE5vZGUsIHBhcmFtcy5kaXJlY3Rpb24pXG4gICAgdmFyIGlkID0gK2F0dHIgLy8gQ291bGQgYmUgTmFOXG5cbiAgICBwYXJhbXMuaW5kZXggPSBpZFxuXG4gICAgLy8gYmFyb24oKSBjYW4gcmV0dXJuIGV4aXN0aW5nIGluc3RhbmNlcyxcbiAgICAvLyBAVE9ETyB1cGRhdGUgcGFyYW1zIG9uLXRoZS1mbHlcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vRGlva3V6L2Jhcm9uL2lzc3Vlcy8xMjRcbiAgICBpZiAoaWQgPT0gaWQgJiYgYXR0ciAhPT0gbnVsbCAmJiBpbnN0YW5jZXNbaWRdKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAod2l0aFBhcmFtcykge1xuICAgICAgICAgICAgICAgIGxvZygnZXJyb3InLCBbXG4gICAgICAgICAgICAgICAgICAgICdyZXBlYXRlZCBpbml0aWFsaXphdGlvbiBmb3IgaHRtbC1ub2RlIGRldGVjdGVkJyxcbiAgICAgICAgICAgICAgICAgICAgJ2h0dHBzOi8vZ2l0aHViLmNvbS9EaW9rdXovYmFyb24vYmxvYi9tYXN0ZXIvZG9jcy9sb2dzL3JlcGVhdGVkLm1kJ1xuICAgICAgICAgICAgICAgIF0uam9pbignLCAnKSwgcGFyYW1zLnJvb3QpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzW2lkXVxuICAgIH1cblxuICAgIC8vIHJvb3QgYW5kIHNjcm9sbGVyIGNhbiBiZSBkaWZmZXJlbnQgbm9kZXNcbiAgICBpZiAocGFyYW1zLnJvb3QgJiYgcGFyYW1zLnNjcm9sbGVyKSB7XG4gICAgICAgIHBhcmFtcy5zY3JvbGxlciA9IHFzKHBhcmFtcy5zY3JvbGxlciwgcm9vdE5vZGUpXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAoIXBhcmFtcy5zY3JvbGxlcikge1xuICAgICAgICAgICAgICAgIGxvZygnZXJyb3InLCAnU2Nyb2xsZXIgbm90IGZvdW5kIScsIHJvb3ROb2RlLCBwYXJhbXMuc2Nyb2xsZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXMuc2Nyb2xsZXIgPSByb290Tm9kZVxuICAgIH1cblxuICAgIHBhcmFtcy5yb290ID0gcm9vdE5vZGVcblxuICAgIHZhciBpbnN0YW5jZSA9IGluaXQocGFyYW1zKVxuXG4gICAgaWYgKGluc3RhbmNlLmF1dG9VcGRhdGUpIHtcbiAgICAgICAgaW5zdGFuY2UuYXV0b1VwZGF0ZSgpXG4gICAgfVxuXG4gICAgcmV0dXJuIGluc3RhbmNlXG59XG5cbmZ1bmN0aW9uIGFycmF5RWFjaChfb2JqLCBpdGVyYXRvcikge1xuICAgIHZhciBpID0gMFxuICAgIHZhciBvYmogPSBfb2JqXG5cbiAgICBpZiAob2JqLmxlbmd0aCA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gc2NvcGVkV2luZG93KSBvYmogPSBbb2JqXVxuXG4gICAgd2hpbGUgKG9ialtpXSkge1xuICAgICAgICBpdGVyYXRvci5jYWxsKHRoaXMsIG9ialtpXSwgaSlcbiAgICAgICAgaSsrXG4gICAgfVxufVxuXG4vLyBzaG9ydGN1dCBmb3IgZ2V0VGltZVxuZnVuY3Rpb24gZ2V0VGltZSgpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKClcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBiYXJvbi5faW5zdGFuY2VzID0gaW5zdGFuY2VzXG59XG5cbmZ1bmN0aW9uIG1hbmFnZUV2ZW50cyhpdGVtLCBldmVudE1hbmFnZXIsIG1vZGUpIHtcbiAgICAvLyBDcmVhdGluZyBuZXcgZnVuY3Rpb25zIGZvciBvbmUgYmFyb24gaXRlbSBvbmx5IG9uZSB0aW1lXG4gICAgaXRlbS5fZXZlbnRIYW5kbGVycyA9IGl0ZW0uX2V2ZW50SGFuZGxlcnMgfHwgW1xuICAgICAgICB7XG4gICAgICAgICAgICAvLyBvblNjcm9sbDpcbiAgICAgICAgICAgIGVsZW1lbnQ6IGl0ZW0uc2Nyb2xsZXIsXG5cbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnNjcm9sbChlKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdHlwZTogJ3Njcm9sbCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gY3NzIHRyYW5zaXRpb25zICYgYW5pbWF0aW9uc1xuICAgICAgICAgICAgZWxlbWVudDogaXRlbS5yb290LFxuXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZSgpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0eXBlOiAndHJhbnNpdGlvbmVuZCBhbmltYXRpb25lbmQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vIG9uS2V5dXAgKHRleHRhcmVhKTpcbiAgICAgICAgICAgIGVsZW1lbnQ6IGl0ZW0uc2Nyb2xsZXIsXG5cbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlKClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGU6ICdrZXl1cCdcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gb25Nb3VzZURvd246XG4gICAgICAgICAgICBlbGVtZW50OiBpdGVtLmJhcixcblxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKSAvLyBUZXh0IHNlbGVjdGlvbiBkaXNhYmxpbmcgaW4gT3BlcmFcbiAgICAgICAgICAgICAgICBpdGVtLnNlbGVjdGlvbigpIC8vIERpc2FibGUgdGV4dCBzZWxlY3Rpb24gaW4gaWU4XG4gICAgICAgICAgICAgICAgaXRlbS5kcmFnLm5vdyA9IDEgLy8gU2F2ZSBwcml2YXRlIGJ5dGVcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5kcmFnZ2luZ0Nscykge1xuICAgICAgICAgICAgICAgICAgICBhZGQoaXRlbS5yb290LCBpdGVtLmRyYWdnaW5nQ2xzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGU6ICd0b3VjaHN0YXJ0IG1vdXNlZG93bidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gb25Nb3VzZVVwOlxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQsXG5cbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGl0ZW0uc2VsZWN0aW9uKDEpIC8vIEVuYWJsZSB0ZXh0IHNlbGVjdGlvblxuICAgICAgICAgICAgICAgIGl0ZW0uZHJhZy5ub3cgPSAwXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZHJhZ2dpbmdDbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcm0oaXRlbS5yb290LCBpdGVtLmRyYWdnaW5nQ2xzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGU6ICdtb3VzZXVwIGJsdXIgdG91Y2hlbmQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vIG9uQ29vcmRpbmF0ZVJlc2V0OlxuICAgICAgICAgICAgZWxlbWVudDogZG9jdW1lbnQsXG5cbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZS5idXR0b24gIT0gMikgeyAvLyBOb3QgUk1cbiAgICAgICAgICAgICAgICAgICAgaXRlbS5fcG9zMChlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGU6ICd0b3VjaHN0YXJ0IG1vdXNlZG93bidcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgLy8gb25Nb3VzZU1vdmU6XG4gICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudCxcblxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmRyYWcubm93KSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZHJhZyhlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGU6ICdtb3VzZW1vdmUgdG91Y2htb3ZlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyBAVE9ETyBtYWtlIG9uZSBnbG9iYWwgbGlzdGVuZXJcbiAgICAgICAgICAgIC8vIG9uUmVzaXplOlxuICAgICAgICAgICAgZWxlbWVudDogc2NvcGVkV2luZG93LFxuXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpdGVtLnVwZGF0ZSgpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0eXBlOiAncmVzaXplJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyBAdG9kbyByZW1vdmVcbiAgICAgICAgICAgIC8vIHNpemVDaGFuZ2U6XG4gICAgICAgICAgICBlbGVtZW50OiBpdGVtLnJvb3QsXG5cbiAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlKClcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGU6ICdzaXplQ2hhbmdlJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICAvLyBDbGlwcGVyIG9uU2Nyb2xsIGJ1ZyBodHRwczovL2dpdGh1Yi5jb20vRGlva3V6L2Jhcm9uL2lzc3Vlcy8xMTZcbiAgICAgICAgICAgIGVsZW1lbnQ6IGl0ZW0uY2xpcHBlcixcblxuICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5jbGlwcGVyT25TY3JvbGwoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdHlwZTogJ3Njcm9sbCdcbiAgICAgICAgfVxuICAgIF1cblxuICAgIGFycmF5RWFjaChpdGVtLl9ldmVudEhhbmRsZXJzLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgaWYgKGV2dC5lbGVtZW50KSB7XG4gICAgICAgICAgICAvLyB3b3JrYXJvdW5kIGZvciBlbGVtZW50LWVsZW1lbnRzIGluIGBmaXhgIHBsdWdpblxuICAgICAgICAgICAgLy8gQHRvZG8gZGlzcG9zZSBgZml4YCBpbiBwcm9wZXIgd2F5IGFuZCByZW1vdmUgd29ya2Fyb3VuZFxuICAgICAgICAgICAgaWYgKGV2dC5lbGVtZW50Lmxlbmd0aCAmJiBldnQuZWxlbWVudCAhPT0gc2NvcGVkV2luZG93KSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldnQuZWxlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBldmVudE1hbmFnZXIoZXZ0LmVsZW1lbnRbaV0sIGV2dC50eXBlLCBldnQuaGFuZGxlciwgbW9kZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV2ZW50TWFuYWdlcihldnQuZWxlbWVudCwgZXZ0LnR5cGUsIGV2dC5oYW5kbGVyLCBtb2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGlmIChpdGVtLnNjcm9sbGVyKSB7XG4gICAgLy8gICAgIGV2ZW50KGl0ZW0uc2Nyb2xsZXIsICdzY3JvbGwnLCBpdGVtLl9ldmVudEhhbmRsZXJzLm9uU2Nyb2xsLCBtb2RlKVxuICAgIC8vIH1cbiAgICAvLyBpZiAoaXRlbS5iYXIpIHtcbiAgICAvLyAgICAgZXZlbnQoaXRlbS5iYXIsICd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIGl0ZW0uX2V2ZW50SGFuZGxlcnMub25Nb3VzZURvd24sIG1vZGUpXG4gICAgLy8gfVxuICAgIC8vIGV2ZW50KGRvY3VtZW50LCAnbW91c2V1cCBibHVyIHRvdWNoZW5kJywgaXRlbS5fZXZlbnRIYW5kbGVycy5vbk1vdXNlVXAsIG1vZGUpXG4gICAgLy8gZXZlbnQoZG9jdW1lbnQsICd0b3VjaHN0YXJ0IG1vdXNlZG93bicsIGl0ZW0uX2V2ZW50SGFuZGxlcnMub25Db29yZGluYXRlUmVzZXQsIG1vZGUpXG4gICAgLy8gZXZlbnQoZG9jdW1lbnQsICdtb3VzZW1vdmUgdG91Y2htb3ZlJywgaXRlbS5fZXZlbnRIYW5kbGVycy5vbk1vdXNlTW92ZSwgbW9kZSlcbiAgICAvLyBldmVudCh3aW5kb3csICdyZXNpemUnLCBpdGVtLl9ldmVudEhhbmRsZXJzLm9uUmVzaXplLCBtb2RlKVxuICAgIC8vIGlmIChpdGVtLnJvb3QpIHtcbiAgICAvLyAgICAgZXZlbnQoaXRlbS5yb290LCAnc2l6ZUNoYW5nZScsIGl0ZW0uX2V2ZW50SGFuZGxlcnMub25SZXNpemUsIG1vZGUpXG4gICAgLy8gICAgIC8vIEN1c3RvbiBldmVudCBmb3IgYWx0ZXJuYXRlIGJhcm9uIHVwZGF0ZSBtZWNoYW5pc21cbiAgICAvLyB9XG59XG5cbi8vIHNldCwgcmVtb3ZlIG9yIHJlYWQgYmFyb24tc3BlY2lmaWMgaWQtYXR0cmlidXRlXG4vLyBAcmV0dXJucyB7U3RyaW5nfG51bGx9IC0gaWQgbm9kZSB2YWx1ZSwgb3IgbnVsbCwgaWYgdGhlcmUgaXMgbm8gYXR0clxuZnVuY3Rpb24gbWFuYWdlQXR0cihub2RlLCBkaXJlY3Rpb24sIG1vZGUsIGlkKSB7XG4gICAgdmFyIGF0dHJOYW1lID0gJ2RhdGEtYmFyb24tJyArIGRpcmVjdGlvbiArICctaWQnXG5cbiAgICBpZiAobW9kZSA9PSAnb24nKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBpZClcbiAgICB9IGVsc2UgaWYgKG1vZGUgPT0gJ29mZicpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKVxufVxuXG5mdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAgIHZhciBvdXQgPSBuZXcgYmFyb24ucHJvdG90eXBlLmNvbnN0cnVjdG9yKHBhcmFtcylcblxuICAgIG1hbmFnZUV2ZW50cyhvdXQsIHBhcmFtcy5ldmVudCwgJ29uJylcblxuICAgIG1hbmFnZUF0dHIob3V0LnJvb3QsIHBhcmFtcy5kaXJlY3Rpb24sICdvbicsIGluc3RhbmNlcy5sZW5ndGgpXG4gICAgaW5zdGFuY2VzLnB1c2gob3V0KVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgbGl2ZUJhcm9ucysrXG4gICAgICAgIGlmIChsaXZlQmFyb25zID4gMTAwICYmICFzaG93bkVycm9ycy5saXZlVG9vTWFueSkge1xuICAgICAgICAgICAgbG9nKCd3YXJuJywgW1xuICAgICAgICAgICAgICAgICdZb3UgaGF2ZSB0b28gbWFueSBsaXZlIGJhcm9uIGluc3RhbmNlcyBvbiBwYWdlICgnICsgbGl2ZUJhcm9ucyArICcpIScsXG4gICAgICAgICAgICAgICAgJ0FyZSB5b3UgZm9yZ2V0IHRvIGRpc3Bvc2Ugc29tZSBvZiB0aGVtPycsXG4gICAgICAgICAgICAgICAgJ0FsbCBiYXJvbiBpbnN0YW5jZXMgY2FuIGJlIGZvdW5kIGluIGJhcm9uLl9pbnN0YW5jZXM6J1xuICAgICAgICAgICAgXS5qb2luKCcgJyksIGluc3RhbmNlcylcbiAgICAgICAgICAgIHNob3duRXJyb3JzLmxpdmVUb29NYW55ID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbnN0YW5jZXMubGVuZ3RoID4gMTAwMCAmJiAhc2hvd25FcnJvcnMuYWxsVG9vTWFueSkge1xuICAgICAgICAgICAgbG9nKCd3YXJuJywgW1xuICAgICAgICAgICAgICAgICdZb3UgaGF2ZSB0b28gbWFueSBpbml0ZWQgYmFyb24gaW5zdGFuY2VzIG9uIHBhZ2UgKCcgKyBpbnN0YW5jZXMubGVuZ3RoICsgJykhJyxcbiAgICAgICAgICAgICAgICAnU29tZSBvZiB0aGVtIGFyZSBkaXNwb3NlZCwgYW5kIHRoYXRzIGdvb2QgbmV3cy4nLFxuICAgICAgICAgICAgICAgICdidXQgYmFyb24uaW5pdCB3YXMgY2FsbCB0b28gbWFueSB0aW1lcywgYW5kIHRoYXRzIGlzIGJhZCBuZXdzLicsXG4gICAgICAgICAgICAgICAgJ0FsbCBiYXJvbiBpbnN0YW5jZXMgY2FuIGJlIGZvdW5kIGluIGJhcm9uLl9pbnN0YW5jZXM6J1xuICAgICAgICAgICAgXS5qb2luKCcgJyksIGluc3RhbmNlcylcbiAgICAgICAgICAgIHNob3duRXJyb3JzLmFsbFRvb01hbnkgPSB0cnVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvdXQudXBkYXRlKClcblxuICAgIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gZmlyZShldmVudE5hbWUpIHtcbiAgICBpZiAodGhpcy5ldmVudHMgJiYgdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApXG5cbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV1baV0uYXBwbHkodGhpcywgYXJncylcbiAgICAgICAgfVxuICAgIH1cbn1cblxuYmFyb24ucHJvdG90eXBlID0ge1xuICAgIC8vIHVuZGVyc2NvcmUuanMgcmVhbGl6YXRpb25cbiAgICAvLyB1c2VkIGluIGF1dG9VcGRhdGUgcGx1Z2luXG4gICAgX2RlYm91bmNlOiBmdW5jdGlvbihmdW5jLCB3YWl0KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIHRpbWVvdXQsXG4gICAgICAgICAgICAvLyBhcmdzLCAvLyByaWdodCBub3cgdGhlcmUgaXMgbm8gbmVlZCBmb3IgYXJndW1lbnRzXG4gICAgICAgICAgICAvLyBjb250ZXh0LCAvLyBhbmQgZm9yIGNvbnRleHRcbiAgICAgICAgICAgIHRpbWVzdGFtcFxuICAgICAgICAgICAgLy8gcmVzdWx0IC8vIGFuZCBmb3IgcmVzdWx0XG5cbiAgICAgICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2VsZiA9IG51bGxcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGxhc3QgPSBnZXRUaW1lKCkgLSB0aW1lc3RhbXBcblxuICAgICAgICAgICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IG51bGxcbiAgICAgICAgICAgICAgICAvLyByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpXG4gICAgICAgICAgICAgICAgZnVuYygpXG4gICAgICAgICAgICAgICAgLy8gY29udGV4dCA9IGFyZ3MgPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBjb250ZXh0ID0gdGhpc1xuICAgICAgICAgICAgLy8gYXJncyA9IGFyZ3VtZW50c1xuICAgICAgICAgICAgdGltZXN0YW1wID0gZ2V0VGltZSgpXG5cbiAgICAgICAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZXR1cm4gcmVzdWx0XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29uc3RydWN0b3I6IGZ1bmN0aW9uKHBhcmFtcykge1xuICAgICAgICB2YXIgYmFyUG9zLFxuICAgICAgICAgICAgc2Nyb2xsZXJQb3MwLFxuICAgICAgICAgICAgdHJhY2ssXG4gICAgICAgICAgICByZXNpemVQYXVzZVRpbWVyLFxuICAgICAgICAgICAgc2Nyb2xsaW5nVGltZXIsXG4gICAgICAgICAgICByZXNpemVMYXN0RmlyZSxcbiAgICAgICAgICAgIG9sZEJhclNpemVcblxuICAgICAgICByZXNpemVMYXN0RmlyZSA9IGdldFRpbWUoKVxuXG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zXG4gICAgICAgIHRoaXMuZXZlbnQgPSBwYXJhbXMuZXZlbnRcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fVxuXG4gICAgICAgIC8vIERPTSBlbGVtZW50c1xuICAgICAgICB0aGlzLnJvb3QgPSBwYXJhbXMucm9vdCAvLyBBbHdheXMgaHRtbCBub2RlLCBub3QganVzdCBzZWxlY3RvclxuICAgICAgICB0aGlzLnNjcm9sbGVyID0gcXMocGFyYW1zLnNjcm9sbGVyKVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsZXIudGFnTmFtZSA9PSAnYm9keScpIHtcbiAgICAgICAgICAgICAgICBsb2coJ2Vycm9yJywgW1xuICAgICAgICAgICAgICAgICAgICAnUGxlYXNlLCBkbyBub3QgdXNlIEJPRFkgYXMgYSBzY3JvbGxlci4nLFxuICAgICAgICAgICAgICAgICAgICAnaHR0cHM6Ly9naXRodWIuY29tL0Rpb2t1ei9iYXJvbi9ibG9iL21hc3Rlci9kb2NzL2xvZ3MvZG8tbm90LXVzZS1ib2R5Lm1kJ1xuICAgICAgICAgICAgICAgIF0uam9pbignLCAnKSwgcGFyYW1zKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFyID0gcXMocGFyYW1zLmJhciwgdGhpcy5yb290KVxuICAgICAgICB0cmFjayA9IHRoaXMudHJhY2sgPSBxcyhwYXJhbXMudHJhY2ssIHRoaXMucm9vdClcbiAgICAgICAgaWYgKCF0aGlzLnRyYWNrICYmIHRoaXMuYmFyKSB7XG4gICAgICAgICAgICB0cmFjayA9IHRoaXMuYmFyLnBhcmVudE5vZGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaXBwZXIgPSB0aGlzLnNjcm9sbGVyLnBhcmVudE5vZGVcblxuICAgICAgICAvLyBQYXJhbWV0ZXJzXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFyYW1zLmRpcmVjdGlvblxuICAgICAgICB0aGlzLnJ0bCA9IHBhcmFtcy5ydGxcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW5bdGhpcy5kaXJlY3Rpb25dXG4gICAgICAgIHRoaXMuYmFyT25DbHMgPSBwYXJhbXMuYmFyT25DbHNcbiAgICAgICAgdGhpcy5zY3JvbGxpbmdDbHMgPSBwYXJhbXMuc2Nyb2xsaW5nQ2xzXG4gICAgICAgIHRoaXMuZHJhZ2dpbmdDbHMgPSBwYXJhbXMuZHJhZ2dpbmdDbHNcbiAgICAgICAgdGhpcy5pbXBhY3QgPSBwYXJhbXMuaW1wYWN0XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwYXJhbXMucG9zaXRpb25cbiAgICAgICAgdGhpcy5ydGwgPSBwYXJhbXMucnRsXG4gICAgICAgIHRoaXMuYmFyVG9wTGltaXQgPSAwXG4gICAgICAgIHRoaXMucmVzaXplRGVib3VuY2UgPSBwYXJhbXMucmVzaXplRGVib3VuY2VcblxuICAgICAgICAvLyBVcGRhdGluZyBoZWlnaHQgb3Igd2lkdGggb2YgYmFyXG4gICAgICAgIGZ1bmN0aW9uIHNldEJhclNpemUoX3NpemUpIHtcbiAgICAgICAgICAgIHZhciBiYXJNaW5TaXplID0gdGhpcy5iYXJNaW5TaXplIHx8IDIwXG4gICAgICAgICAgICB2YXIgc2l6ZSA9IF9zaXplXG5cbiAgICAgICAgICAgIGlmIChzaXplID4gMCAmJiBzaXplIDwgYmFyTWluU2l6ZSkge1xuICAgICAgICAgICAgICAgIHNpemUgPSBiYXJNaW5TaXplXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmJhcikge1xuICAgICAgICAgICAgICAgIGNzcyh0aGlzLmJhciwgdGhpcy5vcmlnaW4uc2l6ZSwgcGFyc2VJbnQoc2l6ZSwgMTApICsgJ3B4JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFVwZGF0aW5nIHRvcCBvciBsZWZ0IGJhciBwb3NpdGlvblxuICAgICAgICBmdW5jdGlvbiBwb3NCYXIoX3Bvcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYmFyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdhcyA9IGNzcyh0aGlzLmJhciwgdGhpcy5vcmlnaW4ucG9zKSxcbiAgICAgICAgICAgICAgICAgICAgd2lsbCA9ICtfcG9zICsgJ3B4J1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpbGwgJiYgd2lsbCAhPSB3YXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzKHRoaXMuYmFyLCB0aGlzLm9yaWdpbi5wb3MsIHdpbGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRnJlZSBwYXRoIGZvciBiYXJcbiAgICAgICAgZnVuY3Rpb24gaygpIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFja1t0aGlzLm9yaWdpbi5jbGllbnRdIC0gdGhpcy5iYXJUb3BMaW1pdCAtIHRoaXMuYmFyW3RoaXMub3JpZ2luLm9mZnNldF1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbGF0aXZlIGNvbnRlbnQgdG9wIHBvc2l0aW9uIHRvIGJhciB0b3AgcG9zaXRpb25cbiAgICAgICAgZnVuY3Rpb24gcmVsVG9Qb3Mocikge1xuICAgICAgICAgICAgcmV0dXJuIHIgKiBrLmNhbGwodGhpcykgKyB0aGlzLmJhclRvcExpbWl0XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYXIgcG9zaXRpb24gdG8gcmVsYXRpdmUgY29udGVudCBwb3NpdGlvblxuICAgICAgICBmdW5jdGlvbiBwb3NUb1JlbCh0KSB7XG4gICAgICAgICAgICByZXR1cm4gKHQgLSB0aGlzLmJhclRvcExpbWl0KSAvIGsuY2FsbCh0aGlzKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3Vyc29yIHBvc2l0aW9uIGluIG1haW4gZGlyZWN0aW9uIGluIHB4IC8vIE5vdyB3aXRoIGlPcyBzdXBwb3J0XG4gICAgICAgIHRoaXMuY3Vyc29yID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcmV0dXJuIGVbJ2NsaWVudCcgKyB0aGlzLm9yaWdpbi54XSB8fFxuICAgICAgICAgICAgICAgICgoKGUub3JpZ2luYWxFdmVudCB8fCBlKS50b3VjaGVzIHx8IHt9KVswXSB8fCB7fSlbJ3BhZ2UnICsgdGhpcy5vcmlnaW4ueF1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRleHQgc2VsZWN0aW9uIHBvcyBwcmV2ZW50aW5nXG4gICAgICAgIGZ1bmN0aW9uIGRvbnRQb3NTZWxlY3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zID0gZnVuY3Rpb24oeCkgeyAvLyBBYnNvbHV0ZSBzY3JvbGxlciBwb3NpdGlvbiBpbiBweFxuICAgICAgICAgICAgdmFyIGllID0gJ3BhZ2UnICsgdGhpcy5vcmlnaW4ueCArICdPZmZzZXQnLFxuICAgICAgICAgICAgICAgIGtleSA9ICh0aGlzLnNjcm9sbGVyW2llXSkgPyBpZSA6IHRoaXMub3JpZ2luLnNjcm9sbFxuXG4gICAgICAgICAgICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB0aGlzLnNjcm9sbGVyW2tleV0gPSB4XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNjcm9sbGVyW2tleV1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucnBvcyA9IGZ1bmN0aW9uKHIpIHsgLy8gUmVsYXRpdmUgc2Nyb2xsZXIgcG9zaXRpb24gKDAuLjEpXG4gICAgICAgICAgICB2YXIgZnJlZSA9IHRoaXMuc2Nyb2xsZXJbdGhpcy5vcmlnaW4uc2Nyb2xsU2l6ZV0gLSB0aGlzLnNjcm9sbGVyW3RoaXMub3JpZ2luLmNsaWVudF0sXG4gICAgICAgICAgICAgICAgeFxuXG4gICAgICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgICAgIHggPSB0aGlzLnBvcyhyICogZnJlZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeCA9IHRoaXMucG9zKClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHggLyAoZnJlZSB8fCAxKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3dpdGNoIG9uIHRoZSBiYXIgYnkgYWRkaW5nIHVzZXItZGVmaW5lZCBDU1MgY2xhc3NuYW1lIHRvIHNjcm9sbGVyXG4gICAgICAgIHRoaXMuYmFyT24gPSBmdW5jdGlvbihkaXNwb3NlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5iYXJPbkNscykge1xuICAgICAgICAgICAgICAgIHZhciBub1Njcm9sbCA9IHRoaXMuc2Nyb2xsZXJbdGhpcy5vcmlnaW4uY2xpZW50XSA+PSB0aGlzLnNjcm9sbGVyW3RoaXMub3JpZ2luLnNjcm9sbFNpemVdXG5cbiAgICAgICAgICAgICAgICBpZiAoZGlzcG9zZSB8fCBub1Njcm9sbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzKHRoaXMucm9vdCwgdGhpcy5iYXJPbkNscykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJtKHRoaXMucm9vdCwgdGhpcy5iYXJPbkNscylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWhhcyh0aGlzLnJvb3QsIHRoaXMuYmFyT25DbHMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZCh0aGlzLnJvb3QsIHRoaXMuYmFyT25DbHMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fcG9zMCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHNjcm9sbGVyUG9zMCA9IHRoaXMuY3Vyc29yKGUpIC0gYmFyUG9zXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRyYWcgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgcmVsID0gcG9zVG9SZWwuY2FsbCh0aGlzLCB0aGlzLmN1cnNvcihlKSAtIHNjcm9sbGVyUG9zMClcbiAgICAgICAgICAgIHZhciBzdWIgPSAodGhpcy5zY3JvbGxlclt0aGlzLm9yaWdpbi5zY3JvbGxTaXplXSAtIHRoaXMuc2Nyb2xsZXJbdGhpcy5vcmlnaW4uY2xpZW50XSlcblxuICAgICAgICAgICAgdGhpcy5zY3JvbGxlclt0aGlzLm9yaWdpbi5zY3JvbGxdID0gcmVsICogc3ViXG4gICAgICAgIH1cblxuICAgICAgICAvLyBUZXh0IHNlbGVjdGlvbiBwcmV2ZW50aW5nIG9uIGRyYWdcbiAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBmdW5jdGlvbihlbmFibGUpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnQoZG9jdW1lbnQsICdzZWxlY3Rwb3Mgc2VsZWN0c3RhcnQnLCBkb250UG9zU2VsZWN0LCBlbmFibGUgPyAnb2ZmJyA6ICdvbicpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBvblJlc2l6ZSAmIERPTSBtb2RpZmllZCBoYW5kbGVyXG4gICAgICAgIC8vIGFsc28gZmlyZXMgb24gaW5pdFxuICAgICAgICAvLyBOb3RlOiBtYXgvbWluLXNpemUgZGlkbnQgc2V0cyBpZiBzaXplIGRpZCBub3QgcmVhbGx5IGNoYW5nZWQgKGZvciBleGFtcGxlLCBvbiBpbml0IGluIENocm9tZSlcbiAgICAgICAgdGhpcy5yZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzZWxmID0gdGhpc1xuICAgICAgICAgICAgdmFyIG1pblBlcmlvZCA9IChzZWxmLnJlc2l6ZURlYm91bmNlID09PSB1bmRlZmluZWQpID8gMzAwIDogc2VsZi5yZXNpemVEZWJvdW5jZVxuICAgICAgICAgICAgdmFyIGRlbGF5ID0gMFxuXG4gICAgICAgICAgICBpZiAoZ2V0VGltZSgpIC0gcmVzaXplTGFzdEZpcmUgPCBtaW5QZXJpb2QpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplUGF1c2VUaW1lcilcbiAgICAgICAgICAgICAgICBkZWxheSA9IG1pblBlcmlvZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IHNlbGYuc2Nyb2xsZXJbc2VsZi5vcmlnaW4uY3Jvc3NPZmZzZXRdXG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudCA9IHNlbGYuc2Nyb2xsZXJbc2VsZi5vcmlnaW4uY3Jvc3NDbGllbnRdXG4gICAgICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSAwXG4gICAgICAgICAgICAgICAgdmFyIHdhcywgd2lsbFxuXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0Rpb2t1ei9iYXJvbi9pc3N1ZXMvMTEwXG4gICAgICAgICAgICAgICAgaWYgKGlzTWFjRkYpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZyA9IG1hY21zeGZmU2Nyb2xsYmFyU2l6ZVxuXG4gICAgICAgICAgICAgICAgLy8gT3BlcmEgMTIgYnVnIGh0dHBzOi8vZ2l0aHViLmNvbS9EaW9rdXovYmFyb24vaXNzdWVzLzEwNVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xpZW50ID4gMCAmJiBvZmZzZXQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBPcGVyYSAxMiBpbiBzb21lIHJhcmUgbmVzdGVkIGZsZXhib3ggY2FzZXMgZ29lcyBoZXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIFNvcnJ5IGd1eXMgZm9yIG1hZ2ljLFxuICAgICAgICAgICAgICAgICAgICAvLyBidXQgSSBkb250IHdhbnQgdG8gY3JlYXRlIHRlbXBvcmFyeSBodG1sLW5vZGVzIHNldFxuICAgICAgICAgICAgICAgICAgICAvLyBqdXN0IGZvciBtZWFzdXJpbmcgc2Nyb2xsYmFyIHNpemUgaW4gT3BlcmEgMTIuXG4gICAgICAgICAgICAgICAgICAgIC8vIDE3cHggZm9yIFdpbmRvd3MgWFAtOC4xLCAxNXB4IGZvciBNYWMgKHJlYWxseSByYXJlKS5cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gY2xpZW50ICsgb3BlcmExMm1heFNjcm9sbGJhclNpemVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0KSB7IC8vIGlmIHRoZXJlIGlzIG5vIHNpemUsIGNzcyBzaG91bGQgbm90IGJlIHNldFxuICAgICAgICAgICAgICAgICAgICBzZWxmLmJhck9uKClcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5pbXBhY3QgPT0gJ3Njcm9sbGVyJykgeyAvLyBzY3JvbGxlclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhID0gb2Zmc2V0IC0gY2xpZW50ICsgcGFkZGluZ1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBgc3RhdGljYCBwb3NpdGlvbiB3b3JrcyBvbmx5IGZvciBgc2Nyb2xsZXJgIGltcGFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYucG9zaXRpb24gPT0gJ3N0YXRpYycpIHsgLy8gc3RhdGljXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2FzID0gY3NzKHNlbGYuc2Nyb2xsZXIsIHNlbGYub3JpZ2luLmNyb3NzU2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWxsID0gc2VsZi5jbGlwcGVyW3NlbGYub3JpZ2luLmNyb3NzQ2xpZW50XSArIGRlbHRhICsgJ3B4J1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhcyAhPSB3aWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3NldENyb3NzU2l6ZXMoc2VsZi5zY3JvbGxlciwgd2lsbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBhYnNvbHV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZXMgPSB7fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBzZWxmLnJ0bCA/ICdMZWZ0JyA6ICdSaWdodCdcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRpcmVjdGlvbiA9PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gJ0JvdHRvbSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXNbJ3BhZGRpbmcnICsga2V5XSA9IGRlbHRhICsgJ3B4J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNzcyhzZWxmLnNjcm9sbGVyLCBzdHlsZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIGNsaXBwZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcyA9IGNzcyhzZWxmLmNsaXBwZXIsIHNlbGYub3JpZ2luLmNyb3NzU2l6ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbGwgPSBjbGllbnQgKyAncHgnXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3YXMgIT0gd2lsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX3NldENyb3NzU2l6ZXMoc2VsZi5jbGlwcGVyLCB3aWxsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZyAoZGlzcGxheTogbm9uZSwgb3Igc29tZXRoaW5nKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmNhbGwoYXJndW1lbnRzLCAncmVzaXplJylcbiAgICAgICAgICAgICAgICBmaXJlLmFwcGx5KHNlbGYsIGFyZ3VtZW50cylcblxuICAgICAgICAgICAgICAgIHJlc2l6ZUxhc3RGaXJlID0gZ2V0VGltZSgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkZWxheSkge1xuICAgICAgICAgICAgICAgIHJlc2l6ZVBhdXNlVGltZXIgPSBzZXRUaW1lb3V0KHVwZCwgZGVsYXkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVwZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9ucyA9IGZ1bmN0aW9uKGZvcmNlKSB7XG4gICAgICAgICAgICB2YXIgbmV3QmFyU2l6ZSxcbiAgICAgICAgICAgICAgICBzZWxmID0gdGhpc1xuXG4gICAgICAgICAgICBpZiAoc2VsZi5iYXIpIHtcbiAgICAgICAgICAgICAgICBuZXdCYXJTaXplID0gKHRyYWNrW3NlbGYub3JpZ2luLmNsaWVudF0gLSBzZWxmLmJhclRvcExpbWl0KSAqXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2Nyb2xsZXJbc2VsZi5vcmlnaW4uY2xpZW50XSAvIHNlbGYuc2Nyb2xsZXJbc2VsZi5vcmlnaW4uc2Nyb2xsU2l6ZV1cblxuICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uaW5nIGJhclxuICAgICAgICAgICAgICAgIGlmIChmb3JjZSB8fCBwYXJzZUludChvbGRCYXJTaXplLCAxMCkgIT0gcGFyc2VJbnQobmV3QmFyU2l6ZSwgMTApKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldEJhclNpemUuY2FsbChzZWxmLCBuZXdCYXJTaXplKVxuICAgICAgICAgICAgICAgICAgICBvbGRCYXJTaXplID0gbmV3QmFyU2l6ZVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJhclBvcyA9IHJlbFRvUG9zLmNhbGwoc2VsZiwgc2VsZi5ycG9zKCkpXG5cbiAgICAgICAgICAgICAgICBwb3NCYXIuY2FsbChzZWxmLCBiYXJQb3MpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS51bnNoaWZ0LmNhbGwoIGFyZ3VtZW50cywgJ3Njcm9sbCcgKVxuICAgICAgICAgICAgZmlyZS5hcHBseShzZWxmLCBhcmd1bWVudHMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBvblNjcm9sbCBoYW5kbGVyXG4gICAgICAgIHRoaXMuc2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXNcblxuICAgICAgICAgICAgc2VsZi51cGRhdGVQb3NpdGlvbnMoKVxuXG4gICAgICAgICAgICBpZiAoc2VsZi5zY3JvbGxpbmdDbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXNjcm9sbGluZ1RpbWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZChzZWxmLnJvb3QsIHNlbGYuc2Nyb2xsaW5nQ2xzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoc2Nyb2xsaW5nVGltZXIpXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBybShzZWxmLnJvb3QsIHNlbGYuc2Nyb2xsaW5nQ2xzKVxuICAgICAgICAgICAgICAgICAgICBzY3JvbGxpbmdUaW1lciA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH0sIDMwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EaW9rdXovYmFyb24vaXNzdWVzLzExNlxuICAgICAgICB0aGlzLmNsaXBwZXJPblNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gV1RGIGlzIHRoaXMgbGluZT8gaHR0cHM6Ly9naXRodWIuY29tL0Rpb2t1ei9iYXJvbi9pc3N1ZXMvMTM0XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5kaXJlY3Rpb24gPT0gJ2gnKSByZXR1cm5cblxuICAgICAgICAgICAgLy8gYXNzaWduIGBpbml0aWFsIHNjcm9sbCBwb3NpdGlvbmAgdG8gYGNsaXBwZXIuc2Nyb2xsTGVmdGAgKDAgZm9yIGx0ciwgfjIwIGZvciBydGwpXG4gICAgICAgICAgICBpZiAoIXRoaXMucnRsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlwcGVyW3RoaXMub3JpZ2luLnNjcm9sbEVkZ2VdID0gMFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaXBwZXJbdGhpcy5vcmlnaW4uc2Nyb2xsRWRnZV0gPSB0aGlzLmNsaXBwZXJbdGhpcy5vcmlnaW4uc2Nyb2xsU2l6ZV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEZsZXhib3ggYGFsaWduLWl0ZW1zOiBzdHJldGNoYCAoZGVmYXVsdCkgcmVxdWlyZXMgdG8gc2V0IG1pbi13aWR0aCBmb3IgdmVydGljYWxcbiAgICAgICAgLy8gYW5kIG1heC1oZWlnaHQgZm9yIGhvcml6b250YWwgc2Nyb2xsLiBKdXN0IHNldCB0aGVtIGFsbC5cbiAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzLWZsZXhib3gtMS8jdmFsZGVmLWFsaWduLWl0ZW1zLXN0cmV0Y2hcbiAgICAgICAgdGhpcy5fc2V0Q3Jvc3NTaXplcyA9IGZ1bmN0aW9uKG5vZGUsIHNpemUpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZXMgPSB7fVxuXG4gICAgICAgICAgICBzdHlsZXNbdGhpcy5vcmlnaW4uY3Jvc3NTaXplXSA9IHNpemVcbiAgICAgICAgICAgIHN0eWxlc1t0aGlzLm9yaWdpbi5jcm9zc01pblNpemVdID0gc2l6ZVxuICAgICAgICAgICAgc3R5bGVzW3RoaXMub3JpZ2luLmNyb3NzTWF4U2l6ZV0gPSBzaXplXG5cbiAgICAgICAgICAgIGNzcyhub2RlLCBzdHlsZXMpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXQgY29tbW9uIGNzcyBydWxlc1xuICAgICAgICB0aGlzLl9kdW1iQ3NzID0gZnVuY3Rpb24ob24pIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuY3NzR3VydSkgcmV0dXJuXG5cbiAgICAgICAgICAgIHZhciBvdmVyZmxvdyA9IG9uID8gJ2hpZGRlbicgOiBudWxsXG4gICAgICAgICAgICB2YXIgbXNPdmVyZmxvd1N0eWxlID0gb24gPyAnbm9uZScgOiBudWxsXG5cbiAgICAgICAgICAgIGNzcyh0aGlzLmNsaXBwZXIsIHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogb3ZlcmZsb3csXG4gICAgICAgICAgICAgICAgbXNPdmVyZmxvd1N0eWxlOiBtc092ZXJmbG93U3R5bGUsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24gPT0gJ3N0YXRpYycgPyAnJyA6ICdyZWxhdGl2ZSdcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSBvbiA/ICdzY3JvbGwnIDogbnVsbFxuICAgICAgICAgICAgdmFyIGF4aXMgPSB0aGlzLmRpcmVjdGlvbiA9PSAndicgPyAneScgOiAneCdcbiAgICAgICAgICAgIHZhciBzY3JvbGxlckNzcyA9IHt9XG5cbiAgICAgICAgICAgIHNjcm9sbGVyQ3NzWydvdmVyZmxvdy0nICsgYXhpc10gPSBzY3JvbGxcbiAgICAgICAgICAgIHNjcm9sbGVyQ3NzWydib3gtc2l6aW5nJ10gPSAnYm9yZGVyLWJveCdcbiAgICAgICAgICAgIHNjcm9sbGVyQ3NzLm1hcmdpbiA9ICcwJ1xuICAgICAgICAgICAgc2Nyb2xsZXJDc3MuYm9yZGVyID0gJzAnXG5cbiAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09ICdhYnNvbHV0ZScpIHtcbiAgICAgICAgICAgICAgICBzY3JvbGxlckNzcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcbiAgICAgICAgICAgICAgICBzY3JvbGxlckNzcy50b3AgPSAnMCdcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsZXJDc3MubGVmdCA9IHNjcm9sbGVyQ3NzLnJpZ2h0ID0gJzAnXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsZXJDc3MuYm90dG9tID0gJzAnXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGVyQ3NzLnJpZ2h0ID0gdGhpcy5ydGwgPyAnMCcgOiAnJ1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxlckNzcy5sZWZ0ID0gdGhpcy5ydGwgPyAnJyA6ICcwJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3NzKHRoaXMuc2Nyb2xsZXIsIHNjcm9sbGVyQ3NzKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gb25Jbml0IGFjdGlvbnNcbiAgICAgICAgdGhpcy5fZHVtYkNzcyh0cnVlKVxuXG4gICAgICAgIGlmIChpc01hY0ZGKSB7XG4gICAgICAgICAgICB2YXIgcGFkZGluZyA9ICdwYWRkaW5nUmlnaHQnXG4gICAgICAgICAgICB2YXIgc3R5bGVzID0ge31cbiAgICAgICAgICAgIC8vIGdldENvbXB1dGVkU3R5bGUgaXMgaWU5KywgYnV0IHdlIGhlcmUgb25seSBpbiBmIGZmXG4gICAgICAgICAgICB2YXIgcGFkZGluZ1dhcyA9IHNjb3BlZFdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuc2Nyb2xsZXIpW1twYWRkaW5nXV1cblxuICAgICAgICAgICAgaWYgKHBhcmFtcy5kaXJlY3Rpb24gPT0gJ2gnKSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZyA9ICdwYWRkaW5nQm90dG9tJ1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMucnRsKSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZyA9ICdwYWRkaW5nTGVmdCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG51bVdhcyA9IHBhcnNlSW50KHBhZGRpbmdXYXMsIDEwKVxuXG4gICAgICAgICAgICBpZiAobnVtV2FzICE9IG51bVdhcykgbnVtV2FzID0gMFxuICAgICAgICAgICAgc3R5bGVzW3BhZGRpbmddID0gKG1hY21zeGZmU2Nyb2xsYmFyU2l6ZSArIG51bVdhcykgKyAncHgnXG4gICAgICAgICAgICBjc3ModGhpcy5zY3JvbGxlciwgc3R5bGVzKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9LFxuXG4gICAgLy8gZmlyZXMgb24gYW55IHVwZGF0ZSBhbmQgb24gaW5pdFxuICAgIHVwZGF0ZTogZnVuY3Rpb24ocGFyYW1zKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fZGlzcG9zZWQpIHtcbiAgICAgICAgICAgICAgICBsb2coJ2Vycm9yJywgW1xuICAgICAgICAgICAgICAgICAgICAnVXBkYXRlIG9uIGRpc3Bvc2VkIGJhcm9uIGluc3RhbmNlIGRldGVjdGVkLicsXG4gICAgICAgICAgICAgICAgICAgICdZb3Ugc2hvdWxkIGNsZWFyIHlvdXIgc3RvcmVkIGJhcm9uIHZhbHVlIGZvciB0aGlzIGluc3RhbmNlOicsXG4gICAgICAgICAgICAgICAgICAgIHRoaXNcbiAgICAgICAgICAgICAgICBdLmpvaW4oJyAnKSwgcGFyYW1zKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZmlyZS5jYWxsKHRoaXMsICd1cGQnLCBwYXJhbXMpIC8vIFVwZGF0ZSBhbGwgcGx1Z2lucycgcGFyYW1zXG5cbiAgICAgICAgdGhpcy5yZXNpemUoMSlcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbnMoMSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH0sXG5cbiAgICAvLyBPbmUgaW5zdGFuY2VcbiAgICBkaXNwb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9kaXNwb3NlZCkge1xuICAgICAgICAgICAgICAgIGxvZygnZXJyb3InLCAnQWxyZWFkeSBkaXNwb3NlZDonLCB0aGlzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsaXZlQmFyb25zLS1cbiAgICAgICAgfVxuXG4gICAgICAgIG1hbmFnZUV2ZW50cyh0aGlzLCB0aGlzLmV2ZW50LCAnb2ZmJylcbiAgICAgICAgbWFuYWdlQXR0cih0aGlzLnJvb3QsIHRoaXMucGFyYW1zLmRpcmVjdGlvbiwgJ29mZicpXG4gICAgICAgIGlmICh0aGlzLnBhcmFtcy5kaXJlY3Rpb24gPT0gJ3YnKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRDcm9zc1NpemVzKHRoaXMuc2Nyb2xsZXIsICcnKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0Q3Jvc3NTaXplcyh0aGlzLmNsaXBwZXIsICcnKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2R1bWJDc3MoZmFsc2UpXG4gICAgICAgIHRoaXMuYmFyT24odHJ1ZSlcbiAgICAgICAgZmlyZS5jYWxsKHRoaXMsICdkaXNwb3NlJylcbiAgICAgICAgaW5zdGFuY2VzW3RoaXMucGFyYW1zLmluZGV4XSA9IG51bGxcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBudWxsXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VkID0gdHJ1ZVxuICAgIH0sXG5cbiAgICBvbjogZnVuY3Rpb24oZXZlbnROYW1lLCBmdW5jLCBhcmcpIHtcbiAgICAgICAgdmFyIG5hbWVzID0gZXZlbnROYW1lLnNwbGl0KCcgJylcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAobmFtZXNbaV0gPT0gJ2luaXQnKSB7XG4gICAgICAgICAgICAgICAgZnVuYy5jYWxsKHRoaXMsIGFyZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudHNbbmFtZXNbaV1dID0gdGhpcy5ldmVudHNbbmFtZXNbaV1dIHx8IFtdXG5cbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50c1tuYW1lc1tpXV0ucHVzaChmdW5jdGlvbih1c2VyQXJnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZ1bmMuY2FsbCh0aGlzLCB1c2VyQXJnIHx8IGFyZylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGJhcm9uOiBmdW5jdGlvbihwYXJhbXMpIHtcbiAgICAgICAgcGFyYW1zLnJvb3QgPSB0aGlzLnBhcmFtcy5yb290XG4gICAgICAgIHBhcmFtcy5zY3JvbGxlciA9IHRoaXMucGFyYW1zLnNjcm9sbGVyXG4gICAgICAgIHBhcmFtcy5kaXJlY3Rpb24gPSAodGhpcy5wYXJhbXMuZGlyZWN0aW9uID09ICd2JykgPyAnaCcgOiAndidcbiAgICAgICAgcGFyYW1zLl9jaGFpbiA9IHRydWVcblxuICAgICAgICByZXR1cm4gYmFyb24ocGFyYW1zKVxuICAgIH1cbn1cblxuLy8gYmFyb24uZm4uY29uc3RydWN0b3IucHJvdG90eXBlID0gYmFyb24uZm5cbmJhcm9uLnByb3RvdHlwZS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBiYXJvbi5wcm90b3R5cGVcblxuLy8gVXNlIHdoZW4geW91IG5lZWQgXCJiYXJvblwiIGdsb2JhbCB2YXIgZm9yIGFub3RoZXIgcHVycG9zZXNcbmJhcm9uLm5vQ29uZmxpY3QgPSBmdW5jdGlvbigpIHtcbiAgICBzY29wZWRXaW5kb3cuYmFyb24gPSBfYmFyb24gLy8gUmVzdG9yaW5nIG9yaWdpbmFsIHZhbHVlIG9mIFwiYmFyb25cIiBnbG9iYWwgdmFyXG5cbiAgICByZXR1cm4gYmFyb25cbn1cblxuYmFyb24udmVyc2lvbiA9ICczLjAuMSdcblxuYmFyb24ucHJvdG90eXBlLmF1dG9VcGRhdGUgPSByZXF1aXJlKCcuL2F1dG9VcGRhdGUnKShzY29wZWRXaW5kb3cpXG5iYXJvbi5wcm90b3R5cGUuZml4ID0gcmVxdWlyZSgnLi9maXgnKVxuYmFyb24ucHJvdG90eXBlLmNvbnRyb2xzID0gcmVxdWlyZSgnLi9jb250cm9scycpXG5cbm1vZHVsZS5leHBvcnRzID0gYmFyb25cbiIsIid1c2Ugc3RyaWN0J1xuXG4vKiBGaXhhYmxlIGVsZW1lbnRzIHBsdWdpbiBmb3IgYmFyb24gKi9cblxudmFyIGxvZyA9IHJlcXVpcmUoJy4vbG9nJylcbnZhciBjc3MgPSByZXF1aXJlKCcuL3V0aWxzJykuY3NzXG52YXIgYWRkID0gcmVxdWlyZSgnLi91dGlscycpLmFkZFxudmFyIHJtID0gcmVxdWlyZSgnLi91dGlscycpLnJtXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZml4KHVzZXJQYXJhbXMpIHtcbiAgICB2YXIgZWxlbWVudHMsXG4gICAgICAgIHZpZXdQb3J0U2l6ZSxcbiAgICAgICAgcGFyYW1zID0geyAvLyBEZWZhdWx0IHBhcmFtc1xuICAgICAgICAgICAgb3V0c2lkZTogJycsXG4gICAgICAgICAgICBpbnNpZGU6ICcnLFxuICAgICAgICAgICAgYmVmb3JlOiAnJyxcbiAgICAgICAgICAgIGFmdGVyOiAnJyxcbiAgICAgICAgICAgIHBhc3Q6ICcnLFxuICAgICAgICAgICAgZnV0dXJlOiAnJyxcbiAgICAgICAgICAgIHJhZGl1czogMCxcbiAgICAgICAgICAgIG1pblZpZXc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgdG9wRml4SGVpZ2h0cyA9IFtdLCAvLyBpbmxpbmUgc3R5bGUgZm9yIGVsZW1lbnRcbiAgICAgICAgdG9wUmVhbEhlaWdodHMgPSBbXSwgLy8gPyBzb21ldGhpbmcgcmVsYXRlZCB0byBuZWdhdGl2ZSBtYXJnaW5zIGZvciBmaXhhYmxlIGVsZW1lbnRzXG4gICAgICAgIGhlYWRlclRvcHMgPSBbXSwgLy8gb2Zmc2V0IHBvc2l0aW9ucyB3aGVuIG5vdCBmaXhlZFxuICAgICAgICBzY3JvbGxlciA9IHRoaXMuc2Nyb2xsZXIsXG4gICAgICAgIGV2ZW50TWFuYWdlciA9IHRoaXMuZXZlbnQsXG4gICAgICAgIHNlbGYgPSB0aGlzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbiAhPSAnc3RhdGljJykge1xuICAgICAgICAgICAgbG9nKCdlcnJvcicsIFtcbiAgICAgICAgICAgICAgICAnRml4IHBsdWdpbiBjYW5ub3Qgd29yayBwcm9wZXJseSBpbiBub24tc3RhdGljIGJhcm9uIHBvc2l0aW9uLicsXG4gICAgICAgICAgICAgICAgJ1NlZSBtb3JlIGh0dHBzOi8vZ2l0aHViLmNvbS9EaW9rdXovYmFyb24vaXNzdWVzLzEzNSdcbiAgICAgICAgICAgIF0uam9pbignICcpLCB0aGlzLnBhcmFtcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGkgLSBudW1iZXIgb2YgZml4aW5nIGVsZW1lbnQsIHBvcyAtIGZpeC1wb3NpdGlvbiBpbiBweCwgZmxhZyAtIDE6IHRvcCwgMjogYm90dG9tXG4gICAgLy8gSW52b2NhdGlvbiBvbmx5IGluIGNhc2Ugd2hlbiBmaXgtc3RhdGUgY2hhbmdlZFxuICAgIGZ1bmN0aW9uIGZpeEVsZW1lbnQoaSwgX3BvcywgZmxhZykge1xuICAgICAgICB2YXIgcG9zID0gX3Bvc1xuICAgICAgICB2YXIgb3JpID0gZmxhZyA9PSAxID8gJ3BvcycgOiAnb3Bwb3MnXG5cbiAgICAgICAgaWYgKHZpZXdQb3J0U2l6ZSA8IChwYXJhbXMubWluVmlldyB8fCAwKSkgeyAvLyBObyBoZWFkZXJzIGZpeGluZyB3aGVuIG5vIGVub3VnaHQgc3BhY2UgZm9yIHZpZXdwb3J0XG4gICAgICAgICAgICBwb3MgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92aW5nIGFsbCBmaXhpbmcgc3R1ZmYgLSB3ZSBjYW4gZG8gdGhpcyBiZWNhdXNlIGZpeEVsZW1lbnQgdHJpZ2dlcnMgb25seSB3aGVuIGZpeFN0YXRlIHJlYWxseSBjaGFuZ2VkXG4gICAgICAgIGNzcyhlbGVtZW50c1tpXSwgdGhpcy5vcmlnaW4ucG9zLCAnJylcbiAgICAgICAgY3NzKGVsZW1lbnRzW2ldLCB0aGlzLm9yaWdpbi5vcHBvcywgJycpXG4gICAgICAgIHJtKGVsZW1lbnRzW2ldLCBwYXJhbXMub3V0c2lkZSlcblxuICAgICAgICAvLyBGaXhpbmcgaWYgbmVlZGVkXG4gICAgICAgIGlmIChwb3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcG9zICs9ICdweCdcbiAgICAgICAgICAgIGNzcyhlbGVtZW50c1tpXSwgdGhpcy5vcmlnaW5bb3JpXSwgcG9zKVxuICAgICAgICAgICAgYWRkKGVsZW1lbnRzW2ldLCBwYXJhbXMub3V0c2lkZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJ1YmJsZVdoZWVsKGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBpID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ1doZWVsRXZlbnQnKSAvLyBpIC0gZm9yIGV4dHJhIGJ5dGVcblxuICAgICAgICAgICAgLy8gZXZ0LmluaXRXZWJLaXRXaGVlbEV2ZW50KGRlbHRhWCwgZGVsdGFZLCB3aW5kb3csIHNjcmVlblgsIHNjcmVlblksIGNsaWVudFgsIGNsaWVudFksIGN0cmxLZXksIGFsdEtleSwgc2hpZnRLZXksIG1ldGFLZXkpXG4gICAgICAgICAgICBpLmluaXRXZWJLaXRXaGVlbEV2ZW50KGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhWCwgZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGFZKVxuICAgICAgICAgICAgc2Nyb2xsZXIuZGlzcGF0Y2hFdmVudChpKVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdChfcGFyYW1zKSB7XG4gICAgICAgIHZhciBwb3NcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gX3BhcmFtcykge1xuICAgICAgICAgICAgcGFyYW1zW2tleV0gPSBfcGFyYW1zW2tleV1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJhbXMuZWxlbWVudHMgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBbcGFyYW1zLmVsZW1lbnRzXVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwYXJhbXMuZWxlbWVudHMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5zY3JvbGxlci5xdWVyeVNlbGVjdG9yQWxsKHBhcmFtcy5lbGVtZW50cylcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMuZWxlbWVudHMgJiYgcGFyYW1zLmVsZW1lbnRzWzBdIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzID0gcGFyYW1zLmVsZW1lbnRzXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudHMpIHtcbiAgICAgICAgICAgIHZpZXdQb3J0U2l6ZSA9IHRoaXMuc2Nyb2xsZXJbdGhpcy5vcmlnaW4uY2xpZW50XVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIFZhcmlhYmxlIGhlYWRlciBoZWlnaHRzXG4gICAgICAgICAgICAgICAgcG9zID0ge31cbiAgICAgICAgICAgICAgICBwb3NbdGhpcy5vcmlnaW4uc2l6ZV0gPSBlbGVtZW50c1tpXVt0aGlzLm9yaWdpbi5vZmZzZXRdICsgJ3B4J1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50c1tpXS5wYXJlbnROb2RlICE9PSB0aGlzLnNjcm9sbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzcyhlbGVtZW50c1tpXS5wYXJlbnROb2RlLCBwb3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBvcyA9IHt9XG4gICAgICAgICAgICAgICAgcG9zW3RoaXMub3JpZ2luLmNyb3NzU2l6ZV0gPSBlbGVtZW50c1tpXS5wYXJlbnROb2RlW3RoaXMub3JpZ2luLmNyb3NzQ2xpZW50XSArICdweCdcbiAgICAgICAgICAgICAgICBjc3MoZWxlbWVudHNbaV0sIHBvcylcblxuICAgICAgICAgICAgICAgIC8vIEJldHdlZW4gZml4ZWQgaGVhZGVyc1xuICAgICAgICAgICAgICAgIHZpZXdQb3J0U2l6ZSAtPSBlbGVtZW50c1tpXVt0aGlzLm9yaWdpbi5vZmZzZXRdXG5cbiAgICAgICAgICAgICAgICBoZWFkZXJUb3BzW2ldID0gZWxlbWVudHNbaV0ucGFyZW50Tm9kZVt0aGlzLm9yaWdpbi5vZmZzZXRQb3NdIC8vIE5vIHBhZGRpbmdzIGZvciBwYXJlbnROb2RlXG5cbiAgICAgICAgICAgICAgICAvLyBTdW1tYXJ5IGVsZW1lbnRzIGhlaWdodCBhYm92ZSBjdXJyZW50XG4gICAgICAgICAgICAgICAgdG9wRml4SGVpZ2h0c1tpXSA9ICh0b3BGaXhIZWlnaHRzW2kgLSAxXSB8fCAwKSAvLyBOb3QgemVybyBiZWNhdXNlIG9mIG5lZ2F0aXZlIG1hcmdpbnNcbiAgICAgICAgICAgICAgICB0b3BSZWFsSGVpZ2h0c1tpXSA9ICh0b3BSZWFsSGVpZ2h0c1tpIC0gMV0gfHwgTWF0aC5taW4oaGVhZGVyVG9wc1tpXSwgMCkpXG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNbaSAtIDFdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvcEZpeEhlaWdodHNbaV0gKz0gZWxlbWVudHNbaSAtIDFdW3RoaXMub3JpZ2luLm9mZnNldF1cbiAgICAgICAgICAgICAgICAgICAgdG9wUmVhbEhlaWdodHNbaV0gKz0gZWxlbWVudHNbaSAtIDFdW3RoaXMub3JpZ2luLm9mZnNldF1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoICEoaSA9PSAwICYmIGhlYWRlclRvcHNbaV0gPT0gMCkvKiAmJiBmb3JjZSAqLykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50KGVsZW1lbnRzW2ldLCAnbW91c2V3aGVlbCcsIGJ1YmJsZVdoZWVsLCAnb2ZmJylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudChlbGVtZW50c1tpXSwgJ21vdXNld2hlZWwnLCBidWJibGVXaGVlbClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMubGltaXRlciAmJiBlbGVtZW50c1swXSkgeyAvLyBCb3R0b20gZWRnZSBvZiBmaXJzdCBoZWFkZXIgYXMgdG9wIGxpbWl0IGZvciB0cmFja1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRyYWNrICYmIHRoaXMudHJhY2sgIT0gdGhpcy5zY3JvbGxlcikge1xuICAgICAgICAgICAgICAgICAgICBwb3MgPSB7fVxuICAgICAgICAgICAgICAgICAgICBwb3NbdGhpcy5vcmlnaW4ucG9zXSA9IGVsZW1lbnRzWzBdLnBhcmVudE5vZGVbdGhpcy5vcmlnaW4ub2Zmc2V0XSArICdweCdcbiAgICAgICAgICAgICAgICAgICAgY3NzKHRoaXMudHJhY2ssIHBvcylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhclRvcExpbWl0ID0gZWxlbWVudHNbMF0ucGFyZW50Tm9kZVt0aGlzLm9yaWdpbi5vZmZzZXRdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYmFyVG9wTGltaXQgPSBlbGVtZW50c1swXS5wYXJlbnROb2RlW3RoaXMub3JpZ2luLm9mZnNldF1cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbCgpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwYXJhbXMubGltaXRlciA9PT0gZmFsc2UpIHsgLy8gdW5kZWZpbmVkIChpbiBzZWNvbmQgZml4IGluc3RhbmNlKSBzaG91bGQgaGF2ZSBubyBpbmZsdWVuY2Ugb24gYmFyIGxpbWl0XG4gICAgICAgICAgICAgICAgdGhpcy5iYXJUb3BMaW1pdCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnRzLFxuXG4gICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICB0b3AgPSBwYXJlbnQub2Zmc2V0VG9wLFxuICAgICAgICAgICAgICAgICAgICBudW1cblxuICAgICAgICAgICAgICAgIC8vIGZpbmRpbmcgbnVtIC0+IGVsZW1lbnRzW251bV0gPT09IHRoaXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGVsZW1lbnRzLmxlbmd0aDsgaisrICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHNbal0gPT09IHRoaXMpIG51bSA9IGpcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgbG9jUG9zID0gdG9wIC0gdG9wRml4SGVpZ2h0c1tudW1dXG5cbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zLnNjcm9sbCkgeyAvLyBVc2VyIGRlZmluZWQgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLnNjcm9sbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB4MTogc2VsZi5zY3JvbGxlci5zY3JvbGxUb3AsXG4gICAgICAgICAgICAgICAgICAgICAgICB4MjogbG9jUG9zXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zY3JvbGxlci5zY3JvbGxUb3AgPSBsb2NQb3NcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB0eXBlOiAnY2xpY2snXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFyYW1zLmNsaWNrYWJsZSkge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRIYW5kbGVycy5wdXNoKGV2ZW50KSAvLyBGb3IgYXV0by1kaXNwb3NlXG4gICAgICAgICAgICAvLyBldmVudE1hbmFnZXIoZXZlbnQuZWxlbWVudCwgZXZlbnQudHlwZSwgZXZlbnQuaGFuZGxlciwgJ29mZicpXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGV2ZW50LmVsZW1lbnQubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBldmVudE1hbmFnZXIoZXZlbnQuZWxlbWVudFtqXSwgZXZlbnQudHlwZSwgZXZlbnQuaGFuZGxlciwgJ29uJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMub24oJ2luaXQnLCBpbml0LCB1c2VyUGFyYW1zKVxuXG4gICAgdmFyIGZpeEZsYWcgPSBbXSwgLy8gMSAtIHBhc3QsIDIgLSBmdXR1cmUsIDMgLSBjdXJyZW50IChub3QgZml4ZWQpXG4gICAgICAgIGdyYWRGbGFnID0gW11cblxuICAgIHRoaXMub24oJ2luaXQgc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmaXhTdGF0ZSwgaFRvcCwgZ3JhZFN0YXRlXG4gICAgICAgIHZhciBpXG5cbiAgICAgICAgaWYgKGVsZW1lbnRzKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlXG5cbiAgICAgICAgICAgIC8vIGZpeEZsYWcgdXBkYXRlXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmaXhTdGF0ZSA9IDBcbiAgICAgICAgICAgICAgICBpZiAoaGVhZGVyVG9wc1tpXSAtIHRoaXMucG9zKCkgPCB0b3BSZWFsSGVpZ2h0c1tpXSArIHBhcmFtcy5yYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSGVhZGVyIHRyeWluZyB0byBnbyB1cFxuICAgICAgICAgICAgICAgICAgICBmaXhTdGF0ZSA9IDFcbiAgICAgICAgICAgICAgICAgICAgaFRvcCA9IHRvcEZpeEhlaWdodHNbaV1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGhlYWRlclRvcHNbaV0gLSB0aGlzLnBvcygpID4gdG9wUmVhbEhlaWdodHNbaV0gKyB2aWV3UG9ydFNpemUgLSBwYXJhbXMucmFkaXVzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlYWRlciB0cnlpbmcgdG8gZ28gZG93blxuICAgICAgICAgICAgICAgICAgICBmaXhTdGF0ZSA9IDJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RvcEZpeEhlaWdodHNbaV0gKyB2aWV3UG9ydFNpemUgKyB0b3BSZWFsSGVpZ2h0c1tpXScsIHRvcEZpeEhlaWdodHNbaV0sIHRoaXMuc2Nyb2xsZXJbdGhpcy5vcmlnaW4uY2xpZW50XSwgdG9wUmVhbEhlaWdodHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIGhUb3AgPSB0aGlzLnNjcm9sbGVyW3RoaXMub3JpZ2luLmNsaWVudF0gLSBlbGVtZW50c1tpXVt0aGlzLm9yaWdpbi5vZmZzZXRdIC0gdG9wRml4SGVpZ2h0c1tpXSAtIHZpZXdQb3J0U2l6ZVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaFRvcCcsIGhUb3AsIHZpZXdQb3J0U2l6ZSwgZWxlbWVudHNbdGhpcy5vcmlnaW4ub2Zmc2V0XSwgdG9wRml4SGVpZ2h0c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gKHRvcEZpeEhlaWdodHNbaV0gKyB2aWV3UG9ydFNpemUgKyBlbGVtZW50c1t0aGlzLm9yaWdpbi5vZmZzZXRdKSAtIHRoaXMuc2Nyb2xsZXJbdGhpcy5vcmlnaW4uY2xpZW50XVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEhlYWRlciBpbiB2aWV3cG9ydFxuICAgICAgICAgICAgICAgICAgICBmaXhTdGF0ZSA9IDNcbiAgICAgICAgICAgICAgICAgICAgaFRvcCA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGdyYWRTdGF0ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgaWYgKGhlYWRlclRvcHNbaV0gLSB0aGlzLnBvcygpIDwgdG9wUmVhbEhlaWdodHNbaV0gfHwgaGVhZGVyVG9wc1tpXSAtIHRoaXMucG9zKCkgPiB0b3BSZWFsSGVpZ2h0c1tpXSArIHZpZXdQb3J0U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICBncmFkU3RhdGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZpeFN0YXRlICE9IGZpeEZsYWdbaV0gfHwgZ3JhZFN0YXRlICE9IGdyYWRGbGFnW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpeEVsZW1lbnQuY2FsbCh0aGlzLCBpLCBoVG9wLCBmaXhTdGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgZml4RmxhZ1tpXSA9IGZpeFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIGdyYWRGbGFnW2ldID0gZ3JhZFN0YXRlXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZGluZyBwb3NpdGlvbmluZyBjbGFzc2VzIChvbiBsYXN0IHRvcCBhbmQgZmlyc3QgYm90dG9tIGhlYWRlcilcbiAgICAgICAgICAgIGlmIChjaGFuZ2UpIHsgLy8gQXQgbGVhdHMgb25lIGNoYW5nZSBpbiBlbGVtZW50cyBmbGFnIHN0cnVjdHVyZSBvY2N1cmVkXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXhGbGFnW2ldID09IDEgJiYgcGFyYW1zLnBhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZChlbGVtZW50c1tpXSwgcGFyYW1zLnBhc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICBybShlbGVtZW50c1tpXSwgcGFyYW1zLmZ1dHVyZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXhGbGFnW2ldID09IDIgJiYgcGFyYW1zLmZ1dHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkKGVsZW1lbnRzW2ldLCBwYXJhbXMuZnV0dXJlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcm0oZWxlbWVudHNbaV0sIHBhcmFtcy5wYXN0KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpeEZsYWdbaV0gPT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm0oZWxlbWVudHNbaV0sIHBhcmFtcy5wYXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgcm0oZWxlbWVudHNbaV0sIHBhcmFtcy5mdXR1cmUpXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQoZWxlbWVudHNbaV0sIHBhcmFtcy5pbnNpZGUpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZml4RmxhZ1tpXSAhPSBmaXhGbGFnW2kgKyAxXSAmJiBmaXhGbGFnW2ldID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZChlbGVtZW50c1tpXSwgcGFyYW1zLmJlZm9yZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJtKGVsZW1lbnRzW2ldLCBwYXJhbXMuYWZ0ZXIpIC8vIExhc3QgdG9wIGZpeGVkIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpeEZsYWdbaV0gIT0gZml4RmxhZ1tpIC0gMV0gJiYgZml4RmxhZ1tpXSA9PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGQoZWxlbWVudHNbaV0sIHBhcmFtcy5hZnRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJtKGVsZW1lbnRzW2ldLCBwYXJhbXMuYmVmb3JlKSAvLyBGaXJzdCBib3R0b20gZml4ZWQgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBybShlbGVtZW50c1tpXSwgcGFyYW1zLmJlZm9yZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJtKGVsZW1lbnRzW2ldLCBwYXJhbXMuYWZ0ZXIpXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1zLmdyYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChncmFkRmxhZ1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZChlbGVtZW50c1tpXSwgcGFyYW1zLmdyYWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJtKGVsZW1lbnRzW2ldLCBwYXJhbXMuZ3JhZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLm9uKCdyZXNpemUgdXBkJywgZnVuY3Rpb24odXBkUGFyYW1zKSB7XG4gICAgICAgIGluaXQuY2FsbCh0aGlzLCB1cGRQYXJhbXMgJiYgdXBkUGFyYW1zLmZpeClcbiAgICB9KVxuXG4gICAgcmV0dXJuIHRoaXNcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbG9nKGxldmVsLCBtc2csIG1vcmUpIHtcbiAgICB2YXIgZnVuYyA9IGNvbnNvbGVbbGV2ZWxdIHx8IGNvbnNvbGUubG9nXG4gICAgdmFyIGFyZ3MgPSBbXG4gICAgICAgICdCYXJvbjogJyArIG1zZyxcbiAgICAgICAgbW9yZVxuICAgIF1cblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGZ1bmMsIGNvbnNvbGUsIGFyZ3MpXG59XG4iLCIndXNlIHN0cmljdCdcblxuLy8gVGVzdCB2aWEgYSBnZXR0ZXIgaW4gdGhlIG9wdGlvbnMgb2JqZWN0IHRvIHNlZSBpZiB0aGUgcGFzc2l2ZSBwcm9wZXJ0eSBpcyBhY2Nlc3NlZFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL1dJQ0cvRXZlbnRMaXN0ZW5lck9wdGlvbnMvYmxvYi9naC1wYWdlcy9leHBsYWluZXIubWQjZmVhdHVyZS1kZXRlY3Rpb25cbnZhciBzdXBwb3J0c1Bhc3NpdmUgPSBmYWxzZVxuXG50cnkge1xuICAgIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHN1cHBvcnRzUGFzc2l2ZSA9IHRydWVcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndGVzdCcsIG51bGwsIG9wdHMpXG59IGNhdGNoIChlKSB7XG4gICAgLy8gcGFzc1xufVxuXG5tb2R1bGUuZXhwb3J0cy5ldmVudCA9IGZ1bmN0aW9uIGV2ZW50KGVsZW0sIF9ldmVudE5hbWVzLCBoYW5kbGVyLCBtb2RlKSB7XG4gICAgdmFyIGV2ZW50TmFtZXMgPSBfZXZlbnROYW1lcy5zcGxpdCgnICcpXG4gICAgdmFyIHByZWZpeCA9IG1vZGUgPT0gJ29uJyA/ICdhZGQnIDogJ3JlbW92ZSdcblxuICAgIGV2ZW50TmFtZXMuZm9yRWFjaChmdW5jdGlvbihldmVudE5hbWUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBmYWxzZVxuXG4gICAgICAgIGlmIChbJ3Njcm9sbCcsICd0b3VjaHN0YXJ0JywgJ3RvdWNobW92ZSddLmluZGV4T2YoZXZlbnROYW1lKSAhPSAtMSAmJiBzdXBwb3J0c1Bhc3NpdmUpIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7IHBhc3NpdmU6IHRydWUgfVxuICAgICAgICB9XG5cbiAgICAgICAgZWxlbVtwcmVmaXggKyAnRXZlbnRMaXN0ZW5lciddKGV2ZW50TmFtZSwgaGFuZGxlciwgb3B0aW9ucylcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlYWNoKG9iaiwgaGFuZGxlcikge1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICBoYW5kbGVyKGtleSwgb2JqW2tleV0pXG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzLmNzcyA9IGZ1bmN0aW9uIGNzcyhub2RlLCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIHN0eWxlc1xuXG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gR2V0dGVyIG1vZGVcbiAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBub2RlLnN0eWxlW2tleV1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0eWxlcyA9IGtleVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlcyA9IHt9XG4gICAgICAgIHN0eWxlc1trZXldID0gdmFsdWVcbiAgICB9XG5cbiAgICBlYWNoKHN0eWxlcywgZnVuY3Rpb24oaywgdmFsKSB7XG4gICAgICAgIG5vZGUuc3R5bGVba10gPSB2YWxcbiAgICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cy5hZGQgPSBmdW5jdGlvbiBhZGQobm9kZSwgY2xzKSB7XG4gICAgaWYgKCFjbHMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKGNscylcbn1cblxubW9kdWxlLmV4cG9ydHMucm0gPSBmdW5jdGlvbiBhZGQobm9kZSwgY2xzKSB7XG4gICAgaWYgKCFjbHMpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKGNscylcbn1cblxubW9kdWxlLmV4cG9ydHMuaGFzID0gZnVuY3Rpb24gaGFzKG5vZGUsIGNscykge1xuICAgIGlmICghY2xzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucyhjbHMpXG59XG5cbm1vZHVsZS5leHBvcnRzLmNsb25lID0gZnVuY3Rpb24gY2xvbmUoX2lucHV0KSB7XG4gICAgdmFyIG91dHB1dCA9IHt9XG4gICAgdmFyIGlucHV0ID0gX2lucHV0IHx8IHt9XG5cbiAgICBlYWNoKGlucHV0LCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgIG91dHB1dFtrZXldID0gdmFsdWVcbiAgICB9KVxuXG4gICAgcmV0dXJuIG91dHB1dFxufVxuXG5tb2R1bGUuZXhwb3J0cy5xcyA9IGZ1bmN0aW9uIHFzKHNlbGVjdG9yLCBfY3R4KSB7XG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yXG4gICAgfVxuXG4gICAgdmFyIGN0eCA9IF9jdHggfHwgZG9jdW1lbnRcblxuICAgIHJldHVybiBjdHgucXVlcnlTZWxlY3RvcihzZWxlY3Rvcilcbn1cblxubW9kdWxlLmV4cG9ydHMuZWFjaCA9IGVhY2hcbiIsIi8qISBjaG9pY2VzLmpzIHY5LjAuMSB8IMKpIDIwMTkgSm9zaCBKb2huc29uIHwgaHR0cHM6Ly9naXRodWIuY29tL2pzaGpvaG5zb24vQ2hvaWNlcyNyZWFkbWUgKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkNob2ljZXNcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQ2hvaWNlc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9wdWJsaWMvYXNzZXRzL3NjcmlwdHMvXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgaXNNZXJnZWFibGVPYmplY3QgPSBmdW5jdGlvbiBpc01lcmdlYWJsZU9iamVjdCh2YWx1ZSkge1xuXHRyZXR1cm4gaXNOb25OdWxsT2JqZWN0KHZhbHVlKVxuXHRcdCYmICFpc1NwZWNpYWwodmFsdWUpXG59O1xuXG5mdW5jdGlvbiBpc05vbk51bGxPYmplY3QodmFsdWUpIHtcblx0cmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1NwZWNpYWwodmFsdWUpIHtcblx0dmFyIHN0cmluZ1ZhbHVlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKTtcblxuXHRyZXR1cm4gc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG5cdFx0fHwgc3RyaW5nVmFsdWUgPT09ICdbb2JqZWN0IERhdGVdJ1xuXHRcdHx8IGlzUmVhY3RFbGVtZW50KHZhbHVlKVxufVxuXG4vLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2Jsb2IvYjVhYzk2M2ZiNzkxZDEyOThlN2YzOTYyMzYzODNiYzk1NWY5MTZjMS9zcmMvaXNvbW9ycGhpYy9jbGFzc2ljL2VsZW1lbnQvUmVhY3RFbGVtZW50LmpzI0wyMS1MMjVcbnZhciBjYW5Vc2VTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gY2FuVXNlU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xuXG5mdW5jdGlvbiBpc1JlYWN0RWxlbWVudCh2YWx1ZSkge1xuXHRyZXR1cm4gdmFsdWUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRVxufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSA/IFtdIDoge31cbn1cblxuZnVuY3Rpb24gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQodmFsdWUsIG9wdGlvbnMpIHtcblx0cmV0dXJuIChvcHRpb25zLmNsb25lICE9PSBmYWxzZSAmJiBvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0KHZhbHVlKSlcblx0XHQ/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zKVxuXHRcdDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIHRhcmdldC5jb25jYXQoc291cmNlKS5tYXAoZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHJldHVybiBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZChlbGVtZW50LCBvcHRpb25zKVxuXHR9KVxufVxuXG5mdW5jdGlvbiBnZXRNZXJnZUZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuXHRpZiAoIW9wdGlvbnMuY3VzdG9tTWVyZ2UpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlXG5cdH1cblx0dmFyIGN1c3RvbU1lcmdlID0gb3B0aW9ucy5jdXN0b21NZXJnZShrZXkpO1xuXHRyZXR1cm4gdHlwZW9mIGN1c3RvbU1lcmdlID09PSAnZnVuY3Rpb24nID8gY3VzdG9tTWVyZ2UgOiBkZWVwbWVyZ2Vcbn1cblxuZnVuY3Rpb24gZ2V0RW51bWVyYWJsZU93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHNcblx0XHQ/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KS5maWx0ZXIoZnVuY3Rpb24oc3ltYm9sKSB7XG5cdFx0XHRyZXR1cm4gdGFyZ2V0LnByb3BlcnR5SXNFbnVtZXJhYmxlKHN5bWJvbClcblx0XHR9KVxuXHRcdDogW11cbn1cblxuZnVuY3Rpb24gZ2V0S2V5cyh0YXJnZXQpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKHRhcmdldCkuY29uY2F0KGdldEVudW1lcmFibGVPd25Qcm9wZXJ0eVN5bWJvbHModGFyZ2V0KSlcbn1cblxuLy8gUHJvdGVjdHMgZnJvbSBwcm90b3R5cGUgcG9pc29uaW5nIGFuZCB1bmV4cGVjdGVkIG1lcmdpbmcgdXAgdGhlIHByb3RvdHlwZSBjaGFpbi5cbmZ1bmN0aW9uIHByb3BlcnR5SXNVbnNhZmUodGFyZ2V0LCBrZXkpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gKGtleSBpbiB0YXJnZXQpIC8vIFByb3BlcnRpZXMgYXJlIHNhZmUgdG8gbWVyZ2UgaWYgdGhleSBkb24ndCBleGlzdCBpbiB0aGUgdGFyZ2V0IHlldCxcblx0XHRcdCYmICEoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpIC8vIHVuc2FmZSBpZiB0aGV5IGV4aXN0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sXG5cdFx0XHRcdCYmIE9iamVjdC5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHRhcmdldCwga2V5KSkgLy8gYW5kIGFsc28gdW5zYWZlIGlmIHRoZXkncmUgbm9uZW51bWVyYWJsZS5cblx0fSBjYXRjaCAodW51c2VkKSB7XG5cdFx0Ly8gQ291bnRlcmludHVpdGl2ZWx5LCBpdCdzIHNhZmUgdG8gbWVyZ2UgYW55IHByb3BlcnR5IG9uIGEgdGFyZ2V0IHRoYXQgY2F1c2VzIHRoZSBgaW5gIG9wZXJhdG9yIHRvIHRocm93LlxuXHRcdC8vIFRoaXMgaGFwcGVucyB3aGVuIHRyeWluZyB0byBjb3B5IGFuIG9iamVjdCBpbiB0aGUgc291cmNlIG92ZXIgYSBwbGFpbiBzdHJpbmcgaW4gdGhlIHRhcmdldC5cblx0XHRyZXR1cm4gZmFsc2Vcblx0fVxufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHR2YXIgZGVzdGluYXRpb24gPSB7fTtcblx0aWYgKG9wdGlvbnMuaXNNZXJnZWFibGVPYmplY3QodGFyZ2V0KSkge1xuXHRcdGdldEtleXModGFyZ2V0KS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0ZGVzdGluYXRpb25ba2V5XSA9IGNsb25lVW5sZXNzT3RoZXJ3aXNlU3BlY2lmaWVkKHRhcmdldFtrZXldLCBvcHRpb25zKTtcblx0XHR9KTtcblx0fVxuXHRnZXRLZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcblx0XHRpZiAocHJvcGVydHlJc1Vuc2FmZSh0YXJnZXQsIGtleSkpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdGlmICghb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdChzb3VyY2Vba2V5XSkgfHwgIXRhcmdldFtrZXldKSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlW2tleV0sIG9wdGlvbnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkZXN0aW5hdGlvbltrZXldID0gZ2V0TWVyZ2VGdW5jdGlvbihrZXksIG9wdGlvbnMpKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9ucyk7XG5cdFx0fVxuXHR9KTtcblx0cmV0dXJuIGRlc3RpbmF0aW9uXG59XG5cbmZ1bmN0aW9uIGRlZXBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0b3B0aW9ucy5hcnJheU1lcmdlID0gb3B0aW9ucy5hcnJheU1lcmdlIHx8IGRlZmF1bHRBcnJheU1lcmdlO1xuXHRvcHRpb25zLmlzTWVyZ2VhYmxlT2JqZWN0ID0gb3B0aW9ucy5pc01lcmdlYWJsZU9iamVjdCB8fCBpc01lcmdlYWJsZU9iamVjdDtcblx0Ly8gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgaXMgYWRkZWQgdG8gYG9wdGlvbnNgIHNvIHRoYXQgY3VzdG9tIGFycmF5TWVyZ2UoKVxuXHQvLyBpbXBsZW1lbnRhdGlvbnMgY2FuIHVzZSBpdC4gVGhlIGNhbGxlciBtYXkgbm90IHJlcGxhY2UgaXQuXG5cdG9wdGlvbnMuY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQgPSBjbG9uZVVubGVzc090aGVyd2lzZVNwZWNpZmllZDtcblxuXHR2YXIgc291cmNlSXNBcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcblx0dmFyIHRhcmdldElzQXJyYXkgPSBBcnJheS5pc0FycmF5KHRhcmdldCk7XG5cdHZhciBzb3VyY2VBbmRUYXJnZXRUeXBlc01hdGNoID0gc291cmNlSXNBcnJheSA9PT0gdGFyZ2V0SXNBcnJheTtcblxuXHRpZiAoIXNvdXJjZUFuZFRhcmdldFR5cGVzTWF0Y2gpIHtcblx0XHRyZXR1cm4gY2xvbmVVbmxlc3NPdGhlcndpc2VTcGVjaWZpZWQoc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2UgaWYgKHNvdXJjZUlzQXJyYXkpIHtcblx0XHRyZXR1cm4gb3B0aW9ucy5hcnJheU1lcmdlKHRhcmdldCwgc291cmNlLCBvcHRpb25zKVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucylcblx0fVxufVxuXG5kZWVwbWVyZ2UuYWxsID0gZnVuY3Rpb24gZGVlcG1lcmdlQWxsKGFycmF5LCBvcHRpb25zKSB7XG5cdGlmICghQXJyYXkuaXNBcnJheShhcnJheSkpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2ZpcnN0IGFyZ3VtZW50IHNob3VsZCBiZSBhbiBhcnJheScpXG5cdH1cblxuXHRyZXR1cm4gYXJyYXkucmVkdWNlKGZ1bmN0aW9uKHByZXYsIG5leHQpIHtcblx0XHRyZXR1cm4gZGVlcG1lcmdlKHByZXYsIG5leHQsIG9wdGlvbnMpXG5cdH0sIHt9KVxufTtcblxudmFyIGRlZXBtZXJnZV8xID0gZGVlcG1lcmdlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZXBtZXJnZV8xO1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwsIG1vZHVsZSkgey8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfcG9ueWZpbGxfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG4vKiBnbG9iYWwgd2luZG93ICovXG5cblxudmFyIHJvb3Q7XG5cbmlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHNlbGY7XG59IGVsc2UgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSB3aW5kb3c7XG59IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBnbG9iYWw7XG59IGVsc2UgaWYgKHRydWUpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7fVxuXG52YXIgcmVzdWx0ID0gT2JqZWN0KF9wb255ZmlsbF9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fWy8qIGRlZmF1bHQgKi8gXCJhXCJdKShyb290KTtcbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSAocmVzdWx0KTtcblxuLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovfS5jYWxsKHRoaXMsIF9fd2VicGFja19yZXF1aXJlX18oNSksIF9fd2VicGFja19yZXF1aXJlX18oNikobW9kdWxlKSkpXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKiFcbiAqIEZ1c2UuanMgdjMuNC41IC0gTGlnaHR3ZWlnaHQgZnV6enktc2VhcmNoIChodHRwOi8vZnVzZWpzLmlvKVxuICogXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTItMjAxNyBLaXJvbGxvcyBSaXNrIChodHRwOi8va2lyby5tZSlcbiAqIEFsbCBSaWdodHMgUmVzZXJ2ZWQuIEFwYWNoZSBTb2Z0d2FyZSBMaWNlbnNlIDIuMFxuICogXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuIWZ1bmN0aW9uKGUsdCl7IHRydWU/bW9kdWxlLmV4cG9ydHM9dCgpOnVuZGVmaW5lZH0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgbz10W3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxuKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LHIpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpbi5kKHIsbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIlwiLG4obi5zPTEpfShbZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSl7cmV0dXJuIEFycmF5LmlzQXJyYXk/QXJyYXkuaXNBcnJheShlKTpcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9fSxmdW5jdGlvbihlLHQsbil7ZnVuY3Rpb24gcihlKXtyZXR1cm4ocj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSkoZSl9ZnVuY3Rpb24gbyhlLHQpe2Zvcih2YXIgbj0wO248dC5sZW5ndGg7bisrKXt2YXIgcj10W25dO3IuZW51bWVyYWJsZT1yLmVudW1lcmFibGV8fCExLHIuY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIHImJihyLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxyLmtleSxyKX19dmFyIGk9bigyKSxhPW4oOCkscz1uKDApLGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQsbil7dmFyIHI9bi5sb2NhdGlvbixvPXZvaWQgMD09PXI/MDpyLGk9bi5kaXN0YW5jZSxzPXZvaWQgMD09PWk/MTAwOmksYz1uLnRocmVzaG9sZCxoPXZvaWQgMD09PWM/LjY6YyxsPW4ubWF4UGF0dGVybkxlbmd0aCx1PXZvaWQgMD09PWw/MzI6bCxmPW4uY2FzZVNlbnNpdGl2ZSxkPXZvaWQgMCE9PWYmJmYsdj1uLnRva2VuU2VwYXJhdG9yLHA9dm9pZCAwPT09dj8vICsvZzp2LGc9bi5maW5kQWxsTWF0Y2hlcyx5PXZvaWQgMCE9PWcmJmcsbT1uLm1pbk1hdGNoQ2hhckxlbmd0aCxrPXZvaWQgMD09PW0/MTptLFM9bi5pZCx4PXZvaWQgMD09PVM/bnVsbDpTLGI9bi5rZXlzLE09dm9pZCAwPT09Yj9bXTpiLF89bi5zaG91bGRTb3J0LEw9dm9pZCAwPT09X3x8Xyx3PW4uZ2V0Rm4sQT12b2lkIDA9PT13P2E6dyxDPW4uc29ydEZuLEk9dm9pZCAwPT09Qz9mdW5jdGlvbihlLHQpe3JldHVybiBlLnNjb3JlLXQuc2NvcmV9OkMsTz1uLnRva2VuaXplLGo9dm9pZCAwIT09TyYmTyxQPW4ubWF0Y2hBbGxUb2tlbnMsRj12b2lkIDAhPT1QJiZQLFQ9bi5pbmNsdWRlTWF0Y2hlcyx6PXZvaWQgMCE9PVQmJlQsRT1uLmluY2x1ZGVTY29yZSxLPXZvaWQgMCE9PUUmJkUsJD1uLnZlcmJvc2UsSj12b2lkIDAhPT0kJiYkOyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5vcHRpb25zPXtsb2NhdGlvbjpvLGRpc3RhbmNlOnMsdGhyZXNob2xkOmgsbWF4UGF0dGVybkxlbmd0aDp1LGlzQ2FzZVNlbnNpdGl2ZTpkLHRva2VuU2VwYXJhdG9yOnAsZmluZEFsbE1hdGNoZXM6eSxtaW5NYXRjaENoYXJMZW5ndGg6ayxpZDp4LGtleXM6TSxpbmNsdWRlTWF0Y2hlczp6LGluY2x1ZGVTY29yZTpLLHNob3VsZFNvcnQ6TCxnZXRGbjpBLHNvcnRGbjpJLHZlcmJvc2U6Six0b2tlbml6ZTpqLG1hdGNoQWxsVG9rZW5zOkZ9LHRoaXMuc2V0Q29sbGVjdGlvbih0KX12YXIgdCxuLGM7cmV0dXJuIHQ9ZSwobj1be2tleTpcInNldENvbGxlY3Rpb25cIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5saXN0PWUsZX19LHtrZXk6XCJzZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e2xpbWl0OiExfTt0aGlzLl9sb2coJy0tLS0tLS0tLVxcblNlYXJjaCBwYXR0ZXJuOiBcIicuY29uY2F0KGUsJ1wiJykpO3ZhciBuPXRoaXMuX3ByZXBhcmVTZWFyY2hlcnMoZSkscj1uLnRva2VuU2VhcmNoZXJzLG89bi5mdWxsU2VhcmNoZXIsaT10aGlzLl9zZWFyY2gocixvKSxhPWkud2VpZ2h0cyxzPWkucmVzdWx0cztyZXR1cm4gdGhpcy5fY29tcHV0ZVNjb3JlKGEscyksdGhpcy5vcHRpb25zLnNob3VsZFNvcnQmJnRoaXMuX3NvcnQocyksdC5saW1pdCYmXCJudW1iZXJcIj09dHlwZW9mIHQubGltaXQmJihzPXMuc2xpY2UoMCx0LmxpbWl0KSksdGhpcy5fZm9ybWF0KHMpfX0se2tleTpcIl9wcmVwYXJlU2VhcmNoZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJcIix0PVtdO2lmKHRoaXMub3B0aW9ucy50b2tlbml6ZSlmb3IodmFyIG49ZS5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpLHI9MCxvPW4ubGVuZ3RoO3I8bztyKz0xKXQucHVzaChuZXcgaShuW3JdLHRoaXMub3B0aW9ucykpO3JldHVybnt0b2tlblNlYXJjaGVyczp0LGZ1bGxTZWFyY2hlcjpuZXcgaShlLHRoaXMub3B0aW9ucyl9fX0se2tleTpcIl9zZWFyY2hcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSx0PWFyZ3VtZW50cy5sZW5ndGg+MT9hcmd1bWVudHNbMV06dm9pZCAwLG49dGhpcy5saXN0LHI9e30sbz1bXTtpZihcInN0cmluZ1wiPT10eXBlb2YgblswXSl7Zm9yKHZhciBpPTAsYT1uLmxlbmd0aDtpPGE7aSs9MSl0aGlzLl9hbmFseXplKHtrZXk6XCJcIix2YWx1ZTpuW2ldLHJlY29yZDppLGluZGV4Oml9LHtyZXN1bHRNYXA6cixyZXN1bHRzOm8sdG9rZW5TZWFyY2hlcnM6ZSxmdWxsU2VhcmNoZXI6dH0pO3JldHVybnt3ZWlnaHRzOm51bGwscmVzdWx0czpvfX1mb3IodmFyIHM9e30sYz0wLGg9bi5sZW5ndGg7YzxoO2MrPTEpZm9yKHZhciBsPW5bY10sdT0wLGY9dGhpcy5vcHRpb25zLmtleXMubGVuZ3RoO3U8Zjt1Kz0xKXt2YXIgZD10aGlzLm9wdGlvbnMua2V5c1t1XTtpZihcInN0cmluZ1wiIT10eXBlb2YgZCl7aWYoc1tkLm5hbWVdPXt3ZWlnaHQ6MS1kLndlaWdodHx8MX0sZC53ZWlnaHQ8PTB8fGQud2VpZ2h0PjEpdGhyb3cgbmV3IEVycm9yKFwiS2V5IHdlaWdodCBoYXMgdG8gYmUgPiAwIGFuZCA8PSAxXCIpO2Q9ZC5uYW1lfWVsc2Ugc1tkXT17d2VpZ2h0OjF9O3RoaXMuX2FuYWx5emUoe2tleTpkLHZhbHVlOnRoaXMub3B0aW9ucy5nZXRGbihsLGQpLHJlY29yZDpsLGluZGV4OmN9LHtyZXN1bHRNYXA6cixyZXN1bHRzOm8sdG9rZW5TZWFyY2hlcnM6ZSxmdWxsU2VhcmNoZXI6dH0pfXJldHVybnt3ZWlnaHRzOnMscmVzdWx0czpvfX19LHtrZXk6XCJfYW5hbHl6ZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5rZXkscj1lLmFycmF5SW5kZXgsbz12b2lkIDA9PT1yPy0xOnIsaT1lLnZhbHVlLGE9ZS5yZWNvcmQsYz1lLmluZGV4LGg9dC50b2tlblNlYXJjaGVycyxsPXZvaWQgMD09PWg/W106aCx1PXQuZnVsbFNlYXJjaGVyLGY9dm9pZCAwPT09dT9bXTp1LGQ9dC5yZXN1bHRNYXAsdj12b2lkIDA9PT1kP3t9OmQscD10LnJlc3VsdHMsZz12b2lkIDA9PT1wP1tdOnA7aWYobnVsbCE9aSl7dmFyIHk9ITEsbT0tMSxrPTA7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGkpe3RoaXMuX2xvZyhcIlxcbktleTogXCIuY29uY2F0KFwiXCI9PT1uP1wiLVwiOm4pKTt2YXIgUz1mLnNlYXJjaChpKTtpZih0aGlzLl9sb2coJ0Z1bGwgdGV4dDogXCInLmNvbmNhdChpLCdcIiwgc2NvcmU6ICcpLmNvbmNhdChTLnNjb3JlKSksdGhpcy5vcHRpb25zLnRva2VuaXplKXtmb3IodmFyIHg9aS5zcGxpdCh0aGlzLm9wdGlvbnMudG9rZW5TZXBhcmF0b3IpLGI9W10sTT0wO008bC5sZW5ndGg7TSs9MSl7dmFyIF89bFtNXTt0aGlzLl9sb2coJ1xcblBhdHRlcm46IFwiJy5jb25jYXQoXy5wYXR0ZXJuLCdcIicpKTtmb3IodmFyIEw9ITEsdz0wO3c8eC5sZW5ndGg7dys9MSl7dmFyIEE9eFt3XSxDPV8uc2VhcmNoKEEpLEk9e307Qy5pc01hdGNoPyhJW0FdPUMuc2NvcmUseT0hMCxMPSEwLGIucHVzaChDLnNjb3JlKSk6KElbQV09MSx0aGlzLm9wdGlvbnMubWF0Y2hBbGxUb2tlbnN8fGIucHVzaCgxKSksdGhpcy5fbG9nKCdUb2tlbjogXCInLmNvbmNhdChBLCdcIiwgc2NvcmU6ICcpLmNvbmNhdChJW0FdKSl9TCYmKGsrPTEpfW09YlswXTtmb3IodmFyIE89Yi5sZW5ndGgsaj0xO2o8TztqKz0xKW0rPWJbal07bS89Tyx0aGlzLl9sb2coXCJUb2tlbiBzY29yZSBhdmVyYWdlOlwiLG0pfXZhciBQPVMuc2NvcmU7bT4tMSYmKFA9KFArbSkvMiksdGhpcy5fbG9nKFwiU2NvcmUgYXZlcmFnZTpcIixQKTt2YXIgRj0hdGhpcy5vcHRpb25zLnRva2VuaXplfHwhdGhpcy5vcHRpb25zLm1hdGNoQWxsVG9rZW5zfHxrPj1sLmxlbmd0aDtpZih0aGlzLl9sb2coXCJcXG5DaGVjayBNYXRjaGVzOiBcIi5jb25jYXQoRikpLCh5fHxTLmlzTWF0Y2gpJiZGKXt2YXIgVD12W2NdO1Q/VC5vdXRwdXQucHVzaCh7a2V5Om4sYXJyYXlJbmRleDpvLHZhbHVlOmksc2NvcmU6UCxtYXRjaGVkSW5kaWNlczpTLm1hdGNoZWRJbmRpY2VzfSk6KHZbY109e2l0ZW06YSxvdXRwdXQ6W3trZXk6bixhcnJheUluZGV4Om8sdmFsdWU6aSxzY29yZTpQLG1hdGNoZWRJbmRpY2VzOlMubWF0Y2hlZEluZGljZXN9XX0sZy5wdXNoKHZbY10pKX19ZWxzZSBpZihzKGkpKWZvcih2YXIgej0wLEU9aS5sZW5ndGg7ejxFO3orPTEpdGhpcy5fYW5hbHl6ZSh7a2V5Om4sYXJyYXlJbmRleDp6LHZhbHVlOmlbel0scmVjb3JkOmEsaW5kZXg6Y30se3Jlc3VsdE1hcDp2LHJlc3VsdHM6Zyx0b2tlblNlYXJjaGVyczpsLGZ1bGxTZWFyY2hlcjpmfSl9fX0se2tleTpcIl9jb21wdXRlU2NvcmVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMuX2xvZyhcIlxcblxcbkNvbXB1dGluZyBzY29yZTpcXG5cIik7Zm9yKHZhciBuPTAscj10Lmxlbmd0aDtuPHI7bis9MSl7Zm9yKHZhciBvPXRbbl0ub3V0cHV0LGk9by5sZW5ndGgsYT0xLHM9MSxjPTA7YzxpO2MrPTEpe3ZhciBoPWU/ZVtvW2NdLmtleV0ud2VpZ2h0OjEsbD0oMT09PWg/b1tjXS5zY29yZTpvW2NdLnNjb3JlfHwuMDAxKSpoOzEhPT1oP3M9TWF0aC5taW4ocyxsKToob1tjXS5uU2NvcmU9bCxhKj1sKX10W25dLnNjb3JlPTE9PT1zP2E6cyx0aGlzLl9sb2codFtuXSl9fX0se2tleTpcIl9zb3J0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5fbG9nKFwiXFxuXFxuU29ydGluZy4uLi5cIiksZS5zb3J0KHRoaXMub3B0aW9ucy5zb3J0Rm4pfX0se2tleTpcIl9mb3JtYXRcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1bXTtpZih0aGlzLm9wdGlvbnMudmVyYm9zZSl7dmFyIG49W107dGhpcy5fbG9nKFwiXFxuXFxuT3V0cHV0OlxcblxcblwiLEpTT04uc3RyaW5naWZ5KGUsZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiPT09cih0KSYmbnVsbCE9PXQpe2lmKC0xIT09bi5pbmRleE9mKHQpKXJldHVybjtuLnB1c2godCl9cmV0dXJuIHR9KSksbj1udWxsfXZhciBvPVtdO3RoaXMub3B0aW9ucy5pbmNsdWRlTWF0Y2hlcyYmby5wdXNoKGZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5vdXRwdXQ7dC5tYXRjaGVzPVtdO2Zvcih2YXIgcj0wLG89bi5sZW5ndGg7cjxvO3IrPTEpe3ZhciBpPW5bcl07aWYoMCE9PWkubWF0Y2hlZEluZGljZXMubGVuZ3RoKXt2YXIgYT17aW5kaWNlczppLm1hdGNoZWRJbmRpY2VzLHZhbHVlOmkudmFsdWV9O2kua2V5JiYoYS5rZXk9aS5rZXkpLGkuaGFzT3duUHJvcGVydHkoXCJhcnJheUluZGV4XCIpJiZpLmFycmF5SW5kZXg+LTEmJihhLmFycmF5SW5kZXg9aS5hcnJheUluZGV4KSx0Lm1hdGNoZXMucHVzaChhKX19fSksdGhpcy5vcHRpb25zLmluY2x1ZGVTY29yZSYmby5wdXNoKGZ1bmN0aW9uKGUsdCl7dC5zY29yZT1lLnNjb3JlfSk7Zm9yKHZhciBpPTAsYT1lLmxlbmd0aDtpPGE7aSs9MSl7dmFyIHM9ZVtpXTtpZih0aGlzLm9wdGlvbnMuaWQmJihzLml0ZW09dGhpcy5vcHRpb25zLmdldEZuKHMuaXRlbSx0aGlzLm9wdGlvbnMuaWQpWzBdKSxvLmxlbmd0aCl7Zm9yKHZhciBjPXtpdGVtOnMuaXRlbX0saD0wLGw9by5sZW5ndGg7aDxsO2grPTEpb1toXShzLGMpO3QucHVzaChjKX1lbHNlIHQucHVzaChzLml0ZW0pfXJldHVybiB0fX0se2tleTpcIl9sb2dcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlO3RoaXMub3B0aW9ucy52ZXJib3NlJiYoZT1jb25zb2xlKS5sb2cuYXBwbHkoZSxhcmd1bWVudHMpfX1dKSYmbyh0LnByb3RvdHlwZSxuKSxjJiZvKHQsYyksZX0oKTtlLmV4cG9ydHM9Y30sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXZhciBvPW4oMyksaT1uKDQpLGE9big3KSxzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4pe3ZhciByPW4ubG9jYXRpb24sbz12b2lkIDA9PT1yPzA6cixpPW4uZGlzdGFuY2Uscz12b2lkIDA9PT1pPzEwMDppLGM9bi50aHJlc2hvbGQsaD12b2lkIDA9PT1jPy42OmMsbD1uLm1heFBhdHRlcm5MZW5ndGgsdT12b2lkIDA9PT1sPzMyOmwsZj1uLmlzQ2FzZVNlbnNpdGl2ZSxkPXZvaWQgMCE9PWYmJmYsdj1uLnRva2VuU2VwYXJhdG9yLHA9dm9pZCAwPT09dj8vICsvZzp2LGc9bi5maW5kQWxsTWF0Y2hlcyx5PXZvaWQgMCE9PWcmJmcsbT1uLm1pbk1hdGNoQ2hhckxlbmd0aCxrPXZvaWQgMD09PW0/MTptOyFmdW5jdGlvbihlLHQpe2lmKCEoZSBpbnN0YW5jZW9mIHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIil9KHRoaXMsZSksdGhpcy5vcHRpb25zPXtsb2NhdGlvbjpvLGRpc3RhbmNlOnMsdGhyZXNob2xkOmgsbWF4UGF0dGVybkxlbmd0aDp1LGlzQ2FzZVNlbnNpdGl2ZTpkLHRva2VuU2VwYXJhdG9yOnAsZmluZEFsbE1hdGNoZXM6eSxtaW5NYXRjaENoYXJMZW5ndGg6a30sdGhpcy5wYXR0ZXJuPXRoaXMub3B0aW9ucy5pc0Nhc2VTZW5zaXRpdmU/dDp0LnRvTG93ZXJDYXNlKCksdGhpcy5wYXR0ZXJuLmxlbmd0aDw9dSYmKHRoaXMucGF0dGVybkFscGhhYmV0PWEodGhpcy5wYXR0ZXJuKSl9dmFyIHQsbixzO3JldHVybiB0PWUsKG49W3trZXk6XCJzZWFyY2hcIix2YWx1ZTpmdW5jdGlvbihlKXtpZih0aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlfHwoZT1lLnRvTG93ZXJDYXNlKCkpLHRoaXMucGF0dGVybj09PWUpcmV0dXJue2lzTWF0Y2g6ITAsc2NvcmU6MCxtYXRjaGVkSW5kaWNlczpbWzAsZS5sZW5ndGgtMV1dfTt2YXIgdD10aGlzLm9wdGlvbnMsbj10Lm1heFBhdHRlcm5MZW5ndGgscj10LnRva2VuU2VwYXJhdG9yO2lmKHRoaXMucGF0dGVybi5sZW5ndGg+bilyZXR1cm4gbyhlLHRoaXMucGF0dGVybixyKTt2YXIgYT10aGlzLm9wdGlvbnMscz1hLmxvY2F0aW9uLGM9YS5kaXN0YW5jZSxoPWEudGhyZXNob2xkLGw9YS5maW5kQWxsTWF0Y2hlcyx1PWEubWluTWF0Y2hDaGFyTGVuZ3RoO3JldHVybiBpKGUsdGhpcy5wYXR0ZXJuLHRoaXMucGF0dGVybkFscGhhYmV0LHtsb2NhdGlvbjpzLGRpc3RhbmNlOmMsdGhyZXNob2xkOmgsZmluZEFsbE1hdGNoZXM6bCxtaW5NYXRjaENoYXJMZW5ndGg6dX0pfX1dKSYmcih0LnByb3RvdHlwZSxuKSxzJiZyKHQscyksZX0oKTtlLmV4cG9ydHM9c30sZnVuY3Rpb24oZSx0KXt2YXIgbj0vW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2c7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOi8gKy9nLG89bmV3IFJlZ0V4cCh0LnJlcGxhY2UobixcIlxcXFwkJlwiKS5yZXBsYWNlKHIsXCJ8XCIpKSxpPWUubWF0Y2gobyksYT0hIWkscz1bXTtpZihhKWZvcih2YXIgYz0wLGg9aS5sZW5ndGg7YzxoO2MrPTEpe3ZhciBsPWlbY107cy5wdXNoKFtlLmluZGV4T2YobCksbC5sZW5ndGgtMV0pfXJldHVybntzY29yZTphPy41OjEsaXNNYXRjaDphLG1hdGNoZWRJbmRpY2VzOnN9fX0sZnVuY3Rpb24oZSx0LG4pe3ZhciByPW4oNSksbz1uKDYpO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsbixpKXtmb3IodmFyIGE9aS5sb2NhdGlvbixzPXZvaWQgMD09PWE/MDphLGM9aS5kaXN0YW5jZSxoPXZvaWQgMD09PWM/MTAwOmMsbD1pLnRocmVzaG9sZCx1PXZvaWQgMD09PWw/LjY6bCxmPWkuZmluZEFsbE1hdGNoZXMsZD12b2lkIDAhPT1mJiZmLHY9aS5taW5NYXRjaENoYXJMZW5ndGgscD12b2lkIDA9PT12PzE6dixnPXMseT1lLmxlbmd0aCxtPXUsaz1lLmluZGV4T2YodCxnKSxTPXQubGVuZ3RoLHg9W10sYj0wO2I8eTtiKz0xKXhbYl09MDtpZigtMSE9PWspe3ZhciBNPXIodCx7ZXJyb3JzOjAsY3VycmVudExvY2F0aW9uOmssZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KTtpZihtPU1hdGgubWluKE0sbSksLTEhPT0oaz1lLmxhc3RJbmRleE9mKHQsZytTKSkpe3ZhciBfPXIodCx7ZXJyb3JzOjAsY3VycmVudExvY2F0aW9uOmssZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KTttPU1hdGgubWluKF8sbSl9fWs9LTE7Zm9yKHZhciBMPVtdLHc9MSxBPVMreSxDPTE8PFMtMSxJPTA7STxTO0krPTEpe2Zvcih2YXIgTz0wLGo9QTtPPGo7KXtyKHQse2Vycm9yczpJLGN1cnJlbnRMb2NhdGlvbjpnK2osZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KTw9bT9PPWo6QT1qLGo9TWF0aC5mbG9vcigoQS1PKS8yK08pfUE9ajt2YXIgUD1NYXRoLm1heCgxLGctaisxKSxGPWQ/eTpNYXRoLm1pbihnK2oseSkrUyxUPUFycmF5KEYrMik7VFtGKzFdPSgxPDxJKS0xO2Zvcih2YXIgej1GO3o+PVA7ei09MSl7dmFyIEU9ei0xLEs9bltlLmNoYXJBdChFKV07aWYoSyYmKHhbRV09MSksVFt6XT0oVFt6KzFdPDwxfDEpJkssMCE9PUkmJihUW3pdfD0oTFt6KzFdfExbel0pPDwxfDF8TFt6KzFdKSxUW3pdJkMmJih3PXIodCx7ZXJyb3JzOkksY3VycmVudExvY2F0aW9uOkUsZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KSk8PW0pe2lmKG09dywoaz1FKTw9ZylicmVhaztQPU1hdGgubWF4KDEsMipnLWspfX1pZihyKHQse2Vycm9yczpJKzEsY3VycmVudExvY2F0aW9uOmcsZXhwZWN0ZWRMb2NhdGlvbjpnLGRpc3RhbmNlOmh9KT5tKWJyZWFrO0w9VH1yZXR1cm57aXNNYXRjaDprPj0wLHNjb3JlOjA9PT13Py4wMDE6dyxtYXRjaGVkSW5kaWNlczpvKHgscCl9fX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXt2YXIgbj10LmVycm9ycyxyPXZvaWQgMD09PW4/MDpuLG89dC5jdXJyZW50TG9jYXRpb24saT12b2lkIDA9PT1vPzA6byxhPXQuZXhwZWN0ZWRMb2NhdGlvbixzPXZvaWQgMD09PWE/MDphLGM9dC5kaXN0YW5jZSxoPXZvaWQgMD09PWM/MTAwOmMsbD1yL2UubGVuZ3RoLHU9TWF0aC5hYnMocy1pKTtyZXR1cm4gaD9sK3UvaDp1PzE6bH19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSx0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXToxLG49W10scj0tMSxvPS0xLGk9MCxhPWUubGVuZ3RoO2k8YTtpKz0xKXt2YXIgcz1lW2ldO3MmJi0xPT09cj9yPWk6c3x8LTE9PT1yfHwoKG89aS0xKS1yKzE+PXQmJm4ucHVzaChbcixvXSkscj0tMSl9cmV0dXJuIGVbaS0xXSYmaS1yPj10JiZuLnB1c2goW3IsaS0xXSksbn19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD17fSxuPWUubGVuZ3RoLHI9MDtyPG47cis9MSl0W2UuY2hhckF0KHIpXT0wO2Zvcih2YXIgbz0wO288bjtvKz0xKXRbZS5jaGFyQXQobyldfD0xPDxuLW8tMTtyZXR1cm4gdH19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDApO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3JldHVybiBmdW5jdGlvbiBlKHQsbixvKXtpZihuKXt2YXIgaT1uLmluZGV4T2YoXCIuXCIpLGE9bixzPW51bGw7LTEhPT1pJiYoYT1uLnNsaWNlKDAsaSkscz1uLnNsaWNlKGkrMSkpO3ZhciBjPXRbYV07aWYobnVsbCE9YylpZihzfHxcInN0cmluZ1wiIT10eXBlb2YgYyYmXCJudW1iZXJcIiE9dHlwZW9mIGMpaWYocihjKSlmb3IodmFyIGg9MCxsPWMubGVuZ3RoO2g8bDtoKz0xKWUoY1toXSxzLG8pO2Vsc2UgcyYmZShjLHMsbyk7ZWxzZSBvLnB1c2goYy50b1N0cmluZygpKX1lbHNlIG8ucHVzaCh0KTtyZXR1cm4gb30oZSx0LFtdKX19XSl9KTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGw7IH0pO1xuZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5cdGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0aWYgKFN5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2wub2JzZXJ2YWJsZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sKCdvYnNlcnZhYmxlJyk7XG5cdFx0XHRTeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWxNb2R1bGUpIHtcblx0aWYgKCFvcmlnaW5hbE1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHR2YXIgbW9kdWxlID0gT2JqZWN0LmNyZWF0ZShvcmlnaW5hbE1vZHVsZSk7XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiZXhwb3J0c1wiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlXG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuXG4vLyBFWFRFUk5BTCBNT0RVTEU6IC4vbm9kZV9tb2R1bGVzL2Z1c2UuanMvZGlzdC9mdXNlLmpzXG52YXIgZGlzdF9mdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBmdXNlX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGRpc3RfZnVzZSk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvZGVlcG1lcmdlL2Rpc3QvY2pzLmpzXG52YXIgY2pzID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBjanNfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY2pzKTtcblxuLy8gRVhURVJOQUwgTU9EVUxFOiAuL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9pbmRleC5qc1xudmFyIGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvcmVkdXguanNcblxuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xudmFyIHJhbmRvbVN0cmluZyA9IGZ1bmN0aW9uIHJhbmRvbVN0cmluZygpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZyg3KS5zcGxpdCgnJykuam9pbignLicpO1xufTtcblxudmFyIEFjdGlvblR5cGVzID0ge1xuICBJTklUOiBcIkBAcmVkdXgvSU5JVFwiICsgcmFuZG9tU3RyaW5nKCksXG4gIFJFUExBQ0U6IFwiQEByZWR1eC9SRVBMQUNFXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUFJPQkVfVU5LTk9XTl9BQ1RJT046IGZ1bmN0aW9uIFBST0JFX1VOS05PV05fQUNUSU9OKCkge1xuICAgIHJldHVybiBcIkBAcmVkdXgvUFJPQkVfVU5LTk9XTl9BQ1RJT05cIiArIHJhbmRvbVN0cmluZygpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIGFyZ3VtZW50IGFwcGVhcnMgdG8gYmUgYSBwbGFpbiBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgdmFyIHByb3RvID0gb2JqO1xuXG4gIHdoaWxlIChPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pICE9PSBudWxsKSB7XG4gICAgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG8pO1xuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopID09PSBwcm90bztcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgUmVkdXggc3RvcmUgdGhhdCBob2xkcyB0aGUgc3RhdGUgdHJlZS5cbiAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICpcbiAqIFRoZXJlIHNob3VsZCBvbmx5IGJlIGEgc2luZ2xlIHN0b3JlIGluIHlvdXIgYXBwLiBUbyBzcGVjaWZ5IGhvdyBkaWZmZXJlbnRcbiAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAqIGludG8gYSBzaW5nbGUgcmVkdWNlciBmdW5jdGlvbiBieSB1c2luZyBgY29tYmluZVJlZHVjZXJzYC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gKiB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgYWN0aW9uIHRvIGhhbmRsZS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGh5ZHJhdGUgdGhlIHN0YXRlIGZyb20gdGhlIHNlcnZlciBpbiB1bml2ZXJzYWwgYXBwcywgb3IgdG8gcmVzdG9yZSBhXG4gKiBwcmV2aW91c2x5IHNlcmlhbGl6ZWQgdXNlciBzZXNzaW9uLlxuICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICogYW4gb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUgYXMgYGNvbWJpbmVSZWR1Y2Vyc2Aga2V5cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAqIHRvIGVuaGFuY2UgdGhlIHN0b3JlIHdpdGggdGhpcmQtcGFydHkgY2FwYWJpbGl0aWVzIHN1Y2ggYXMgbWlkZGxld2FyZSxcbiAqIHRpbWUgdHJhdmVsLCBwZXJzaXN0ZW5jZSwgZXRjLiBUaGUgb25seSBzdG9yZSBlbmhhbmNlciB0aGF0IHNoaXBzIHdpdGggUmVkdXhcbiAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gKlxuICogQHJldHVybnMge1N0b3JlfSBBIFJlZHV4IHN0b3JlIHRoYXQgbGV0cyB5b3UgcmVhZCB0aGUgc3RhdGUsIGRpc3BhdGNoIGFjdGlvbnNcbiAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpIHtcbiAgdmFyIF9yZWYyO1xuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBlbmhhbmNlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgYXJndW1lbnRzWzNdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJdCBsb29rcyBsaWtlIHlvdSBhcmUgcGFzc2luZyBzZXZlcmFsIHN0b3JlIGVuaGFuY2VycyB0byAnICsgJ2NyZWF0ZVN0b3JlKCkuIFRoaXMgaXMgbm90IHN1cHBvcnRlZC4gSW5zdGVhZCwgY29tcG9zZSB0aGVtICcgKyAndG9nZXRoZXIgdG8gYSBzaW5nbGUgZnVuY3Rpb24uJyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHByZWxvYWRlZFN0YXRlID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBlbmhhbmNlciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlbmhhbmNlciA9IHByZWxvYWRlZFN0YXRlO1xuICAgIHByZWxvYWRlZFN0YXRlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBlbmhhbmNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHJldHVybiBlbmhhbmNlcihjcmVhdGVTdG9yZSkocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByZWR1Y2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgcmVkdWNlciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIGN1cnJlbnRSZWR1Y2VyID0gcmVkdWNlcjtcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IHByZWxvYWRlZFN0YXRlO1xuICB2YXIgY3VycmVudExpc3RlbmVycyA9IFtdO1xuICB2YXIgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnM7XG4gIHZhciBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gIC8qKlxuICAgKiBUaGlzIG1ha2VzIGEgc2hhbGxvdyBjb3B5IG9mIGN1cnJlbnRMaXN0ZW5lcnMgc28gd2UgY2FuIHVzZVxuICAgKiBuZXh0TGlzdGVuZXJzIGFzIGEgdGVtcG9yYXJ5IGxpc3Qgd2hpbGUgZGlzcGF0Y2hpbmcuXG4gICAqXG4gICAqIFRoaXMgcHJldmVudHMgYW55IGJ1Z3MgYXJvdW5kIGNvbnN1bWVycyBjYWxsaW5nXG4gICAqIHN1YnNjcmliZS91bnN1YnNjcmliZSBpbiB0aGUgbWlkZGxlIG9mIGEgZGlzcGF0Y2guXG4gICAqL1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZWFkcyB0aGUgc3RhdGUgdHJlZSBtYW5hZ2VkIGJ5IHRoZSBzdG9yZS5cbiAgICpcbiAgICogQHJldHVybnMge2FueX0gVGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBvZiB5b3VyIGFwcGxpY2F0aW9uLlxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuZ2V0U3RhdGUoKSB3aGlsZSB0aGUgcmVkdWNlciBpcyBleGVjdXRpbmcuICcgKyAnVGhlIHJlZHVjZXIgaGFzIGFscmVhZHkgcmVjZWl2ZWQgdGhlIHN0YXRlIGFzIGFuIGFyZ3VtZW50LiAnICsgJ1Bhc3MgaXQgZG93biBmcm9tIHRoZSB0b3AgcmVkdWNlciBpbnN0ZWFkIG9mIHJlYWRpbmcgaXQgZnJvbSB0aGUgc3RvcmUuJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnJlbnRTdGF0ZTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGNoYW5nZSBsaXN0ZW5lci4gSXQgd2lsbCBiZSBjYWxsZWQgYW55IHRpbWUgYW4gYWN0aW9uIGlzIGRpc3BhdGNoZWQsXG4gICAqIGFuZCBzb21lIHBhcnQgb2YgdGhlIHN0YXRlIHRyZWUgbWF5IHBvdGVudGlhbGx5IGhhdmUgY2hhbmdlZC4gWW91IG1heSB0aGVuXG4gICAqIGNhbGwgYGdldFN0YXRlKClgIHRvIHJlYWQgdGhlIGN1cnJlbnQgc3RhdGUgdHJlZSBpbnNpZGUgdGhlIGNhbGxiYWNrLlxuICAgKlxuICAgKiBZb3UgbWF5IGNhbGwgYGRpc3BhdGNoKClgIGZyb20gYSBjaGFuZ2UgbGlzdGVuZXIsIHdpdGggdGhlIGZvbGxvd2luZ1xuICAgKiBjYXZlYXRzOlxuICAgKlxuICAgKiAxLiBUaGUgc3Vic2NyaXB0aW9ucyBhcmUgc25hcHNob3R0ZWQganVzdCBiZWZvcmUgZXZlcnkgYGRpc3BhdGNoKClgIGNhbGwuXG4gICAqIElmIHlvdSBzdWJzY3JpYmUgb3IgdW5zdWJzY3JpYmUgd2hpbGUgdGhlIGxpc3RlbmVycyBhcmUgYmVpbmcgaW52b2tlZCwgdGhpc1xuICAgKiB3aWxsIG5vdCBoYXZlIGFueSBlZmZlY3Qgb24gdGhlIGBkaXNwYXRjaCgpYCB0aGF0IGlzIGN1cnJlbnRseSBpbiBwcm9ncmVzcy5cbiAgICogSG93ZXZlciwgdGhlIG5leHQgYGRpc3BhdGNoKClgIGNhbGwsIHdoZXRoZXIgbmVzdGVkIG9yIG5vdCwgd2lsbCB1c2UgYSBtb3JlXG4gICAqIHJlY2VudCBzbmFwc2hvdCBvZiB0aGUgc3Vic2NyaXB0aW9uIGxpc3QuXG4gICAqXG4gICAqIDIuIFRoZSBsaXN0ZW5lciBzaG91bGQgbm90IGV4cGVjdCB0byBzZWUgYWxsIHN0YXRlIGNoYW5nZXMsIGFzIHRoZSBzdGF0ZVxuICAgKiBtaWdodCBoYXZlIGJlZW4gdXBkYXRlZCBtdWx0aXBsZSB0aW1lcyBkdXJpbmcgYSBuZXN0ZWQgYGRpc3BhdGNoKClgIGJlZm9yZVxuICAgKiB0aGUgbGlzdGVuZXIgaXMgY2FsbGVkLiBJdCBpcywgaG93ZXZlciwgZ3VhcmFudGVlZCB0aGF0IGFsbCBzdWJzY3JpYmVyc1xuICAgKiByZWdpc3RlcmVkIGJlZm9yZSB0aGUgYGRpc3BhdGNoKClgIHN0YXJ0ZWQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgbGF0ZXN0XG4gICAqIHN0YXRlIGJ5IHRoZSB0aW1lIGl0IGV4aXRzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBBIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgb24gZXZlcnkgZGlzcGF0Y2guXG4gICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0byByZW1vdmUgdGhpcyBjaGFuZ2UgbGlzdGVuZXIuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCBjYWxsIHN0b3JlLnN1YnNjcmliZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdJZiB5b3Ugd291bGQgbGlrZSB0byBiZSBub3RpZmllZCBhZnRlciB0aGUgc3RvcmUgaGFzIGJlZW4gdXBkYXRlZCwgc3Vic2NyaWJlIGZyb20gYSAnICsgJ2NvbXBvbmVudCBhbmQgaW52b2tlIHN0b3JlLmdldFN0YXRlKCkgaW4gdGhlIGNhbGxiYWNrIHRvIGFjY2VzcyB0aGUgbGF0ZXN0IHN0YXRlLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZShsaXN0ZW5lcikgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICB9XG5cbiAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgbmV4dExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgdW5zdWJzY3JpYmUgZnJvbSBhIHN0b3JlIGxpc3RlbmVyIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdTZWUgaHR0cHM6Ly9yZWR1eC5qcy5vcmcvYXBpLXJlZmVyZW5jZS9zdG9yZSNzdWJzY3JpYmUobGlzdGVuZXIpIGZvciBtb3JlIGRldGFpbHMuJyk7XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgICAgdmFyIGluZGV4ID0gbmV4dExpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgIG5leHRMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbi4gSXQgaXMgdGhlIG9ubHkgd2F5IHRvIHRyaWdnZXIgYSBzdGF0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIFRoZSBgcmVkdWNlcmAgZnVuY3Rpb24sIHVzZWQgdG8gY3JlYXRlIHRoZSBzdG9yZSwgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGVcbiAgICogY3VycmVudCBzdGF0ZSB0cmVlIGFuZCB0aGUgZ2l2ZW4gYGFjdGlvbmAuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICAgKiBiZSBjb25zaWRlcmVkIHRoZSAqKm5leHQqKiBzdGF0ZSBvZiB0aGUgdHJlZSwgYW5kIHRoZSBjaGFuZ2UgbGlzdGVuZXJzXG4gICAqIHdpbGwgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9ubHkgc3VwcG9ydHMgcGxhaW4gb2JqZWN0IGFjdGlvbnMuIElmIHlvdSB3YW50IHRvXG4gICAqIGRpc3BhdGNoIGEgUHJvbWlzZSwgYW4gT2JzZXJ2YWJsZSwgYSB0aHVuaywgb3Igc29tZXRoaW5nIGVsc2UsIHlvdSBuZWVkIHRvXG4gICAqIHdyYXAgeW91ciBzdG9yZSBjcmVhdGluZyBmdW5jdGlvbiBpbnRvIHRoZSBjb3JyZXNwb25kaW5nIG1pZGRsZXdhcmUuIEZvclxuICAgKiBleGFtcGxlLCBzZWUgdGhlIGRvY3VtZW50YXRpb24gZm9yIHRoZSBgcmVkdXgtdGh1bmtgIHBhY2thZ2UuIEV2ZW4gdGhlXG4gICAqIG1pZGRsZXdhcmUgd2lsbCBldmVudHVhbGx5IGRpc3BhdGNoIHBsYWluIG9iamVjdCBhY3Rpb25zIHVzaW5nIHRoaXMgbWV0aG9kLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gYWN0aW9uIEEgcGxhaW4gb2JqZWN0IHJlcHJlc2VudGluZyDigJx3aGF0IGNoYW5nZWTigJ0uIEl0IGlzXG4gICAqIGEgZ29vZCBpZGVhIHRvIGtlZXAgYWN0aW9ucyBzZXJpYWxpemFibGUgc28geW91IGNhbiByZWNvcmQgYW5kIHJlcGxheSB1c2VyXG4gICAqIHNlc3Npb25zLCBvciB1c2UgdGhlIHRpbWUgdHJhdmVsbGluZyBgcmVkdXgtZGV2dG9vbHNgLiBBbiBhY3Rpb24gbXVzdCBoYXZlXG4gICAqIGEgYHR5cGVgIHByb3BlcnR5IHdoaWNoIG1heSBub3QgYmUgYHVuZGVmaW5lZGAuIEl0IGlzIGEgZ29vZCBpZGVhIHRvIHVzZVxuICAgKiBzdHJpbmcgY29uc3RhbnRzIGZvciBhY3Rpb24gdHlwZXMuXG4gICAqXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IEZvciBjb252ZW5pZW5jZSwgdGhlIHNhbWUgYWN0aW9uIG9iamVjdCB5b3UgZGlzcGF0Y2hlZC5cbiAgICpcbiAgICogTm90ZSB0aGF0LCBpZiB5b3UgdXNlIGEgY3VzdG9tIG1pZGRsZXdhcmUsIGl0IG1heSB3cmFwIGBkaXNwYXRjaCgpYCB0b1xuICAgKiByZXR1cm4gc29tZXRoaW5nIGVsc2UgKGZvciBleGFtcGxlLCBhIFByb21pc2UgeW91IGNhbiBhd2FpdCkuXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIHJldHVybiBhY3Rpb247XG4gIH1cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG5cblxuICBmdW5jdGlvbiByZXBsYWNlUmVkdWNlcihuZXh0UmVkdWNlcikge1xuICAgIGlmICh0eXBlb2YgbmV4dFJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIG5leHRSZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFJlZHVjZXIgPSBuZXh0UmVkdWNlcjsgLy8gVGhpcyBhY3Rpb24gaGFzIGEgc2ltaWxpYXIgZWZmZWN0IHRvIEFjdGlvblR5cGVzLklOSVQuXG4gICAgLy8gQW55IHJlZHVjZXJzIHRoYXQgZXhpc3RlZCBpbiBib3RoIHRoZSBuZXcgYW5kIG9sZCByb290UmVkdWNlclxuICAgIC8vIHdpbGwgcmVjZWl2ZSB0aGUgcHJldmlvdXMgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gICAgLy8gdGhlIG5ldyBzdGF0ZSB0cmVlIHdpdGggYW55IHJlbGV2YW50IGRhdGEgZnJvbSB0aGUgb2xkIG9uZS5cblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlJFUExBQ0VcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogSW50ZXJvcGVyYWJpbGl0eSBwb2ludCBmb3Igb2JzZXJ2YWJsZS9yZWFjdGl2ZSBsaWJyYXJpZXMuXG4gICAqIEByZXR1cm5zIHtvYnNlcnZhYmxlfSBBIG1pbmltYWwgb2JzZXJ2YWJsZSBvZiBzdGF0ZSBjaGFuZ2VzLlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIHRoZSBvYnNlcnZhYmxlIHByb3Bvc2FsOlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYnNlcnZhYmxlXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gb2JzZXJ2YWJsZSgpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHZhciBvdXRlclN1YnNjcmliZSA9IHN1YnNjcmliZTtcbiAgICByZXR1cm4gX3JlZiA9IHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIG1pbmltYWwgb2JzZXJ2YWJsZSBzdWJzY3JpcHRpb24gbWV0aG9kLlxuICAgICAgICogQHBhcmFtIHtPYmplY3R9IG9ic2VydmVyIEFueSBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCBhcyBhbiBvYnNlcnZlci5cbiAgICAgICAqIFRoZSBvYnNlcnZlciBvYmplY3Qgc2hvdWxkIGhhdmUgYSBgbmV4dGAgbWV0aG9kLlxuICAgICAgICogQHJldHVybnMge3N1YnNjcmlwdGlvbn0gQW4gb2JqZWN0IHdpdGggYW4gYHVuc3Vic2NyaWJlYCBtZXRob2QgdGhhdCBjYW5cbiAgICAgICAqIGJlIHVzZWQgdG8gdW5zdWJzY3JpYmUgdGhlIG9ic2VydmFibGUgZnJvbSB0aGUgc3RvcmUsIGFuZCBwcmV2ZW50IGZ1cnRoZXJcbiAgICAgICAqIGVtaXNzaW9uIG9mIHZhbHVlcyBmcm9tIHRoZSBvYnNlcnZhYmxlLlxuICAgICAgICovXG4gICAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShvYnNlcnZlcikge1xuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyICE9PSAnb2JqZWN0JyB8fCBvYnNlcnZlciA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIHRoZSBvYnNlcnZlciB0byBiZSBhbiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvYnNlcnZlU3RhdGUoKSB7XG4gICAgICAgICAgaWYgKG9ic2VydmVyLm5leHQpIHtcbiAgICAgICAgICAgIG9ic2VydmVyLm5leHQoZ2V0U3RhdGUoKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb2JzZXJ2ZVN0YXRlKCk7XG4gICAgICAgIHZhciB1bnN1YnNjcmliZSA9IG91dGVyU3Vic2NyaWJlKG9ic2VydmVTdGF0ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdW5zdWJzY3JpYmU6IHVuc3Vic2NyaWJlXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSwgX3JlZltlc1tcImFcIiAvKiBkZWZhdWx0ICovXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMltlc1tcImFcIiAvKiBkZWZhdWx0ICovXV0gPSBvYnNlcnZhYmxlLCBfcmVmMjtcbn1cblxuLyoqXG4gKiBQcmludHMgYSB3YXJuaW5nIGluIHRoZSBjb25zb2xlIGlmIGl0IGV4aXN0cy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWVzc2FnZSBUaGUgd2FybmluZyBtZXNzYWdlLlxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoZSkge30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1lbXB0eVxuXG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKGtleSwgYWN0aW9uKSB7XG4gIHZhciBhY3Rpb25UeXBlID0gYWN0aW9uICYmIGFjdGlvbi50eXBlO1xuICB2YXIgYWN0aW9uRGVzY3JpcHRpb24gPSBhY3Rpb25UeXBlICYmIFwiYWN0aW9uIFxcXCJcIiArIFN0cmluZyhhY3Rpb25UeXBlKSArIFwiXFxcIlwiIHx8ICdhbiBhY3Rpb24nO1xuICByZXR1cm4gXCJHaXZlbiBcIiArIGFjdGlvbkRlc2NyaXB0aW9uICsgXCIsIHJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZC4gXCIgKyBcIlRvIGlnbm9yZSBhbiBhY3Rpb24sIHlvdSBtdXN0IGV4cGxpY2l0bHkgcmV0dXJuIHRoZSBwcmV2aW91cyBzdGF0ZS4gXCIgKyBcIklmIHlvdSB3YW50IHRoaXMgcmVkdWNlciB0byBob2xkIG5vIHZhbHVlLCB5b3UgY2FuIHJldHVybiBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiO1xufVxuXG5mdW5jdGlvbiBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKGlucHV0U3RhdGUsIHJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSkge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBhcmd1bWVudE5hbWUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGUgPT09IEFjdGlvblR5cGVzLklOSVQgPyAncHJlbG9hZGVkU3RhdGUgYXJndW1lbnQgcGFzc2VkIHRvIGNyZWF0ZVN0b3JlJyA6ICdwcmV2aW91cyBzdGF0ZSByZWNlaXZlZCBieSB0aGUgcmVkdWNlcic7XG5cbiAgaWYgKHJlZHVjZXJLZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnU3RvcmUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHJlZHVjZXIuIE1ha2Ugc3VyZSB0aGUgYXJndW1lbnQgcGFzc2VkICcgKyAndG8gY29tYmluZVJlZHVjZXJzIGlzIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIHJlZHVjZXJzLic7XG4gIH1cblxuICBpZiAoIWlzUGxhaW5PYmplY3QoaW5wdXRTdGF0ZSkpIHtcbiAgICByZXR1cm4gXCJUaGUgXCIgKyBhcmd1bWVudE5hbWUgKyBcIiBoYXMgdW5leHBlY3RlZCB0eXBlIG9mIFxcXCJcIiArIHt9LnRvU3RyaW5nLmNhbGwoaW5wdXRTdGF0ZSkubWF0Y2goL1xccyhbYS16fEEtWl0rKS8pWzFdICsgXCJcXFwiLiBFeHBlY3RlZCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIFwiICsgKFwia2V5czogXFxcIlwiICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyBcIlxcXCJcIik7XG4gIH1cblxuICB2YXIgdW5leHBlY3RlZEtleXMgPSBPYmplY3Qua2V5cyhpbnB1dFN0YXRlKS5maWx0ZXIoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiAhcmVkdWNlcnMuaGFzT3duUHJvcGVydHkoa2V5KSAmJiAhdW5leHBlY3RlZEtleUNhY2hlW2tleV07XG4gIH0pO1xuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuICBpZiAoYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5SRVBMQUNFKSByZXR1cm47XG5cbiAgaWYgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gXCJVbmV4cGVjdGVkIFwiICsgKHVuZXhwZWN0ZWRLZXlzLmxlbmd0aCA+IDEgPyAna2V5cycgOiAna2V5JykgKyBcIiBcIiArIChcIlxcXCJcIiArIHVuZXhwZWN0ZWRLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiIGZvdW5kIGluIFwiICsgYXJndW1lbnROYW1lICsgXCIuIFwiKSArIFwiRXhwZWN0ZWQgdG8gZmluZCBvbmUgb2YgdGhlIGtub3duIHJlZHVjZXIga2V5cyBpbnN0ZWFkOiBcIiArIChcIlxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiLiBVbmV4cGVjdGVkIGtleXMgd2lsbCBiZSBpZ25vcmVkLlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhc3NlcnRSZWR1Y2VyU2hhcGUocmVkdWNlcnMpIHtcbiAgT2JqZWN0LmtleXMocmVkdWNlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciByZWR1Y2VyID0gcmVkdWNlcnNba2V5XTtcbiAgICB2YXIgaW5pdGlhbFN0YXRlID0gcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgICB9KTtcblxuICAgIGlmICh0eXBlb2YgaW5pdGlhbFN0YXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVkdWNlciBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gXCIgKyBcIklmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlIHJlZHVjZXIgaXMgdW5kZWZpbmVkLCB5b3UgbXVzdCBcIiArIFwiZXhwbGljaXRseSByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBcIiArIFwibm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvbid0IHdhbnQgdG8gc2V0IGEgdmFsdWUgZm9yIHRoaXMgcmVkdWNlciwgXCIgKyBcInlvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcih1bmRlZmluZWQsIHtcbiAgICAgIHR5cGU6IEFjdGlvblR5cGVzLlBST0JFX1VOS05PV05fQUNUSU9OKClcbiAgICB9KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCB3aGVuIHByb2JlZCB3aXRoIGEgcmFuZG9tIHR5cGUuIFwiICsgKFwiRG9uJ3QgdHJ5IHRvIGhhbmRsZSBcIiArIEFjdGlvblR5cGVzLklOSVQgKyBcIiBvciBvdGhlciBhY3Rpb25zIGluIFxcXCJyZWR1eC8qXFxcIiBcIikgKyBcIm5hbWVzcGFjZS4gVGhleSBhcmUgY29uc2lkZXJlZCBwcml2YXRlLiBJbnN0ZWFkLCB5b3UgbXVzdCByZXR1cm4gdGhlIFwiICsgXCJjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCBcIiArIFwiaW4gd2hpY2ggY2FzZSB5b3UgbXVzdCByZXR1cm4gdGhlIGluaXRpYWwgc3RhdGUsIHJlZ2FyZGxlc3Mgb2YgdGhlIFwiICsgXCJhY3Rpb24gdHlwZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5IG5vdCBiZSB1bmRlZmluZWQsIGJ1dCBjYW4gYmUgbnVsbC5cIik7XG4gICAgfVxuICB9KTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGNvbWJpbmVSZWR1Y2VycyhyZWR1Y2Vycykge1xuICB2YXIgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIHZhciBmaW5hbFJlZHVjZXJzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChmYWxzZSkge31cblxuICAgIGlmICh0eXBlb2YgcmVkdWNlcnNba2V5XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZmluYWxSZWR1Y2Vyc1trZXldID0gcmVkdWNlcnNba2V5XTtcbiAgICB9XG4gIH1cblxuICB2YXIgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpOyAvLyBUaGlzIGlzIHVzZWQgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHdhcm4gYWJvdXQgdGhlIHNhbWVcbiAgLy8ga2V5cyBtdWx0aXBsZSB0aW1lcy5cblxuICB2YXIgdW5leHBlY3RlZEtleUNhY2hlO1xuXG4gIGlmIChmYWxzZSkge31cblxuICB2YXIgc2hhcGVBc3NlcnRpb25FcnJvcjtcblxuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKHN0YXRlLCBhY3Rpb24pIHtcbiAgICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgICAgc3RhdGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoc2hhcGVBc3NlcnRpb25FcnJvcikge1xuICAgICAgdGhyb3cgc2hhcGVBc3NlcnRpb25FcnJvcjtcbiAgICB9XG5cbiAgICBpZiAoZmFsc2UpIHsgdmFyIHdhcm5pbmdNZXNzYWdlOyB9XG5cbiAgICB2YXIgaGFzQ2hhbmdlZCA9IGZhbHNlO1xuICAgIHZhciBuZXh0U3RhdGUgPSB7fTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmaW5hbFJlZHVjZXJLZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9rZXkgPSBmaW5hbFJlZHVjZXJLZXlzW19pXTtcbiAgICAgIHZhciByZWR1Y2VyID0gZmluYWxSZWR1Y2Vyc1tfa2V5XTtcbiAgICAgIHZhciBwcmV2aW91c1N0YXRlRm9yS2V5ID0gc3RhdGVbX2tleV07XG4gICAgICB2YXIgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKF9rZXksIGFjdGlvbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuXG4gICAgICBuZXh0U3RhdGVbX2tleV0gPSBuZXh0U3RhdGVGb3JLZXk7XG4gICAgICBoYXNDaGFuZ2VkID0gaGFzQ2hhbmdlZCB8fCBuZXh0U3RhdGVGb3JLZXkgIT09IHByZXZpb3VzU3RhdGVGb3JLZXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvciwgZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2goYWN0aW9uQ3JlYXRvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgYWN0aW9uIGNyZWF0b3JzLCBpbnRvIGFuIG9iamVjdCB3aXRoIHRoZVxuICogc2FtZSBrZXlzLCBidXQgd2l0aCBldmVyeSBmdW5jdGlvbiB3cmFwcGVkIGludG8gYSBgZGlzcGF0Y2hgIGNhbGwgc28gdGhleVxuICogbWF5IGJlIGludm9rZWQgZGlyZWN0bHkuIFRoaXMgaXMganVzdCBhIGNvbnZlbmllbmNlIG1ldGhvZCwgYXMgeW91IGNhbiBjYWxsXG4gKiBgc3RvcmUuZGlzcGF0Y2goTXlBY3Rpb25DcmVhdG9ycy5kb1NvbWV0aGluZygpKWAgeW91cnNlbGYganVzdCBmaW5lLlxuICpcbiAqIEZvciBjb252ZW5pZW5jZSwgeW91IGNhbiBhbHNvIHBhc3MgYW4gYWN0aW9uIGNyZWF0b3IgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LFxuICogYW5kIGdldCBhIGRpc3BhdGNoIHdyYXBwZWQgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cblxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKSB7XG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gYmluZEFjdGlvbkNyZWF0b3IoYWN0aW9uQ3JlYXRvcnMsIGRpc3BhdGNoKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYWN0aW9uQ3JlYXRvcnMgIT09ICdvYmplY3QnIHx8IGFjdGlvbkNyZWF0b3JzID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYmluZEFjdGlvbkNyZWF0b3JzIGV4cGVjdGVkIGFuIG9iamVjdCBvciBhIGZ1bmN0aW9uLCBpbnN0ZWFkIHJlY2VpdmVkIFwiICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArIFwiLiBcIiArIFwiRGlkIHlvdSB3cml0ZSBcXFwiaW1wb3J0IEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiIGluc3RlYWQgb2YgXFxcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cXFwiP1wiKTtcbiAgfVxuXG4gIHZhciBib3VuZEFjdGlvbkNyZWF0b3JzID0ge307XG5cbiAgZm9yICh2YXIga2V5IGluIGFjdGlvbkNyZWF0b3JzKSB7XG4gICAgdmFyIGFjdGlvbkNyZWF0b3IgPSBhY3Rpb25DcmVhdG9yc1trZXldO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvdW5kQWN0aW9uQ3JlYXRvcnM7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KSk7XG4gIH1cblxuICBpZiAoZW51bWVyYWJsZU9ubHkpIGtleXMgPSBrZXlzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gIH0pO1xuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoc291cmNlLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuLyoqXG4gKiBDb21wb3NlcyBzaW5nbGUtYXJndW1lbnQgZnVuY3Rpb25zIGZyb20gcmlnaHQgdG8gbGVmdC4gVGhlIHJpZ2h0bW9zdFxuICogZnVuY3Rpb24gY2FuIHRha2UgbXVsdGlwbGUgYXJndW1lbnRzIGFzIGl0IHByb3ZpZGVzIHRoZSBzaWduYXR1cmUgZm9yXG4gKiB0aGUgcmVzdWx0aW5nIGNvbXBvc2l0ZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jcyBUaGUgZnVuY3Rpb25zIHRvIGNvbXBvc2UuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gb2J0YWluZWQgYnkgY29tcG9zaW5nIHRoZSBhcmd1bWVudCBmdW5jdGlvbnNcbiAqIGZyb20gcmlnaHQgdG8gbGVmdC4gRm9yIGV4YW1wbGUsIGNvbXBvc2UoZiwgZywgaCkgaXMgaWRlbnRpY2FsIHRvIGRvaW5nXG4gKiAoLi4uYXJncykgPT4gZihnKGgoLi4uYXJncykpKS5cbiAqL1xuZnVuY3Rpb24gY29tcG9zZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGZ1bmNzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5cbmZ1bmN0aW9uIGFwcGx5TWlkZGxld2FyZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG1pZGRsZXdhcmVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZS5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG5cbiAgICAgIHZhciBfZGlzcGF0Y2ggPSBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEaXNwYXRjaGluZyB3aGlsZSBjb25zdHJ1Y3RpbmcgeW91ciBtaWRkbGV3YXJlIGlzIG5vdCBhbGxvd2VkLiAnICsgJ090aGVyIG1pZGRsZXdhcmUgd291bGQgbm90IGJlIGFwcGxpZWQgdG8gdGhpcyBkaXNwYXRjaC4nKTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaCgpIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh2b2lkIDAsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG4gICAgICByZXR1cm4gX29iamVjdFNwcmVhZDIoe30sIHN0b3JlLCB7XG4gICAgICAgIGRpc3BhdGNoOiBfZGlzcGF0Y2hcbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG59XG5cbi8qXG4gKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4gKiBJZiB0aGUgZnVuY3Rpb24gaGFzIGJlZW4gbWluaWZpZWQgYW5kIE5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsIHdhcm4gdGhlIHVzZXIuXG4gKi9cblxuZnVuY3Rpb24gaXNDcnVzaGVkKCkge31cblxuaWYgKGZhbHNlKSB7fVxuXG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9yZWR1Y2Vycy9pdGVtcy5qc1xudmFyIGRlZmF1bHRTdGF0ZSA9IFtdO1xuZnVuY3Rpb24gaXRlbXNfaXRlbXMoc3RhdGUsIGFjdGlvbikge1xuICBpZiAoc3RhdGUgPT09IHZvaWQgMCkge1xuICAgIHN0YXRlID0gZGVmYXVsdFN0YXRlO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ0FERF9JVEVNJzpcbiAgICAgIHtcbiAgICAgICAgLy8gQWRkIG9iamVjdCB0byBpdGVtcyBhcnJheVxuICAgICAgICB2YXIgbmV3U3RhdGUgPSBbXS5jb25jYXQoc3RhdGUsIFt7XG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICBjaG9pY2VJZDogYWN0aW9uLmNob2ljZUlkLFxuICAgICAgICAgIGdyb3VwSWQ6IGFjdGlvbi5ncm91cElkLFxuICAgICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWUsXG4gICAgICAgICAgbGFiZWw6IGFjdGlvbi5sYWJlbCxcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgaGlnaGxpZ2h0ZWQ6IGZhbHNlLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGFjdGlvbi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBhY3Rpb24ucGxhY2Vob2xkZXIgfHwgZmFsc2UsXG4gICAgICAgICAga2V5Q29kZTogbnVsbFxuICAgICAgICB9XSk7XG4gICAgICAgIHJldHVybiBuZXdTdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBpdGVtID0gb2JqO1xuICAgICAgICAgIGl0ZW0uaGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBjYXNlICdSRU1PVkVfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIC8vIFNldCBpdGVtIHRvIGluYWN0aXZlXG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBpdGVtID0gb2JqO1xuXG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBjYXNlICdISUdITElHSFRfSVRFTSc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgIHZhciBpdGVtID0gb2JqO1xuXG4gICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5pZCkge1xuICAgICAgICAgICAgaXRlbS5oaWdobGlnaHRlZCA9IGFjdGlvbi5oaWdobGlnaHRlZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvcmVkdWNlcnMvZ3JvdXBzLmpzXG52YXIgZ3JvdXBzX2RlZmF1bHRTdGF0ZSA9IFtdO1xuZnVuY3Rpb24gZ3JvdXBzKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IGdyb3Vwc19kZWZhdWx0U3RhdGU7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAnQUREX0dST1VQJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIFtdLmNvbmNhdChzdGF0ZSwgW3tcbiAgICAgICAgICBpZDogYWN0aW9uLmlkLFxuICAgICAgICAgIHZhbHVlOiBhY3Rpb24udmFsdWUsXG4gICAgICAgICAgYWN0aXZlOiBhY3Rpb24uYWN0aXZlLFxuICAgICAgICAgIGRpc2FibGVkOiBhY3Rpb24uZGlzYWJsZWRcbiAgICAgICAgfV0pO1xuICAgICAgfVxuXG4gICAgY2FzZSAnQ0xFQVJfQ0hPSUNFUyc6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgfVxufVxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9yZWR1Y2Vycy9jaG9pY2VzLmpzXG52YXIgY2hvaWNlc19kZWZhdWx0U3RhdGUgPSBbXTtcbmZ1bmN0aW9uIGNob2ljZXNfY2hvaWNlcyhzdGF0ZSwgYWN0aW9uKSB7XG4gIGlmIChzdGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgc3RhdGUgPSBjaG9pY2VzX2RlZmF1bHRTdGF0ZTtcbiAgfVxuXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlICdBRERfQ0hPSUNFJzpcbiAgICAgIHtcbiAgICAgICAgLypcbiAgICAgICAgICAgIEEgZGlzYWJsZWQgY2hvaWNlIGFwcGVhcnMgaW4gdGhlIGNob2ljZSBkcm9wZG93biBidXQgY2Fubm90IGJlIHNlbGVjdGVkXG4gICAgICAgICAgICBBIHNlbGVjdGVkIGNob2ljZSBoYXMgYmVlbiBhZGRlZCB0byB0aGUgcGFzc2VkIGlucHV0J3MgdmFsdWUgKGFkZGVkIGFzIGFuIGl0ZW0pXG4gICAgICAgICAgICBBbiBhY3RpdmUgY2hvaWNlIGFwcGVhcnMgd2l0aGluIHRoZSBjaG9pY2UgZHJvcGRvd25cbiAgICAgICAgICovXG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoc3RhdGUsIFt7XG4gICAgICAgICAgaWQ6IGFjdGlvbi5pZCxcbiAgICAgICAgICBlbGVtZW50SWQ6IGFjdGlvbi5lbGVtZW50SWQsXG4gICAgICAgICAgZ3JvdXBJZDogYWN0aW9uLmdyb3VwSWQsXG4gICAgICAgICAgdmFsdWU6IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogYWN0aW9uLmxhYmVsIHx8IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgICBkaXNhYmxlZDogYWN0aW9uLmRpc2FibGVkIHx8IGZhbHNlLFxuICAgICAgICAgIHNlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgc2NvcmU6IDk5OTksXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogYWN0aW9uLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGFjdGlvbi5wbGFjZWhvbGRlciB8fCBmYWxzZSxcbiAgICAgICAgICBrZXlDb2RlOiBudWxsXG4gICAgICAgIH1dKTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ0FERF9JVEVNJzpcbiAgICAgIHtcbiAgICAgICAgLy8gSWYgYWxsIGNob2ljZXMgbmVlZCB0byBiZSBhY3RpdmF0ZWRcbiAgICAgICAgaWYgKGFjdGlvbi5hY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7XG4gICAgICAgICAgICBjaG9pY2UuYWN0aXZlID0gYWN0aW9uLmFjdGl2ZTtcbiAgICAgICAgICAgIHJldHVybiBjaG9pY2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gLy8gV2hlbiBhbiBpdGVtIGlzIGFkZGVkIGFuZCBpdCBoYXMgYW4gYXNzb2NpYXRlZCBjaG9pY2UsXG4gICAgICAgIC8vIHdlIHdhbnQgdG8gZGlzYWJsZSBpdCBzbyBpdCBjYW4ndCBiZSBjaG9zZW4gYWdhaW5cblxuXG4gICAgICAgIGlmIChhY3Rpb24uY2hvaWNlSWQgPiAtMSkge1xuICAgICAgICAgIHJldHVybiBzdGF0ZS5tYXAoZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIGNob2ljZSA9IG9iajtcblxuICAgICAgICAgICAgaWYgKGNob2ljZS5pZCA9PT0gcGFyc2VJbnQoYWN0aW9uLmNob2ljZUlkLCAxMCkpIHtcbiAgICAgICAgICAgICAgY2hvaWNlLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ1JFTU9WRV9JVEVNJzpcbiAgICAgIHtcbiAgICAgICAgLy8gV2hlbiBhbiBpdGVtIGlzIHJlbW92ZWQgYW5kIGl0IGhhcyBhbiBhc3NvY2lhdGVkIGNob2ljZSxcbiAgICAgICAgLy8gd2Ugd2FudCB0byByZS1lbmFibGUgaXQgc28gaXQgY2FuIGJlIGNob3NlbiBhZ2FpblxuICAgICAgICBpZiAoYWN0aW9uLmNob2ljZUlkID4gLTEpIHtcbiAgICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHZhciBjaG9pY2UgPSBvYmo7XG5cbiAgICAgICAgICAgIGlmIChjaG9pY2UuaWQgPT09IHBhcnNlSW50KGFjdGlvbi5jaG9pY2VJZCwgMTApKSB7XG4gICAgICAgICAgICAgIGNob2ljZS5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuXG4gICAgY2FzZSAnRklMVEVSX0NIT0lDRVMnOlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGUubWFwKGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICB2YXIgY2hvaWNlID0gb2JqOyAvLyBTZXQgYWN0aXZlIHN0YXRlIGJhc2VkIG9uIHdoZXRoZXIgY2hvaWNlIGlzXG4gICAgICAgICAgLy8gd2l0aGluIGZpbHRlcmVkIHJlc3VsdHNcblxuICAgICAgICAgIGNob2ljZS5hY3RpdmUgPSBhY3Rpb24ucmVzdWx0cy5zb21lKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IF9yZWYuaXRlbSxcbiAgICAgICAgICAgICAgICBzY29yZSA9IF9yZWYuc2NvcmU7XG5cbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBjaG9pY2UuaWQpIHtcbiAgICAgICAgICAgICAgY2hvaWNlLnNjb3JlID0gc2NvcmU7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNob2ljZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICBjYXNlICdBQ1RJVkFURV9DSE9JQ0VTJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHN0YXRlLm1hcChmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgdmFyIGNob2ljZSA9IG9iajtcbiAgICAgICAgICBjaG9pY2UuYWN0aXZlID0gYWN0aW9uLmFjdGl2ZTtcbiAgICAgICAgICByZXR1cm4gY2hvaWNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIGNhc2UgJ0NMRUFSX0NIT0lDRVMnOlxuICAgICAge1xuICAgICAgICByZXR1cm4gY2hvaWNlc19kZWZhdWx0U3RhdGU7XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn1cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvcmVkdWNlcnMvZ2VuZXJhbC5qc1xudmFyIGdlbmVyYWxfZGVmYXVsdFN0YXRlID0ge1xuICBsb2FkaW5nOiBmYWxzZVxufTtcblxudmFyIGdlbmVyYWwgPSBmdW5jdGlvbiBnZW5lcmFsKHN0YXRlLCBhY3Rpb24pIHtcbiAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICBzdGF0ZSA9IGdlbmVyYWxfZGVmYXVsdFN0YXRlO1xuICB9XG5cbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgJ1NFVF9JU19MT0FESU5HJzpcbiAgICAgIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsb2FkaW5nOiBhY3Rpb24uaXNMb2FkaW5nXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gIH1cbn07XG5cbi8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIHJlZHVjZXJzX2dlbmVyYWwgPSAoZ2VuZXJhbCk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2xpYi91dGlscy5qc1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbWluXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4XG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG52YXIgZ2V0UmFuZG9tTnVtYmVyID0gZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVyKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59O1xuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5cbnZhciBnZW5lcmF0ZUNoYXJzID0gZnVuY3Rpb24gZ2VuZXJhdGVDaGFycyhsZW5ndGgpIHtcbiAgcmV0dXJuIEFycmF5LmZyb20oe1xuICAgIGxlbmd0aDogbGVuZ3RoXG4gIH0sIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZ2V0UmFuZG9tTnVtYmVyKDAsIDM2KS50b1N0cmluZygzNik7XG4gIH0pLmpvaW4oJycpO1xufTtcbi8qKlxuICogQHBhcmFtIHtIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXhcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cblxudmFyIGdlbmVyYXRlSWQgPSBmdW5jdGlvbiBnZW5lcmF0ZUlkKGVsZW1lbnQsIHByZWZpeCkge1xuICB2YXIgaWQgPSBlbGVtZW50LmlkIHx8IGVsZW1lbnQubmFtZSAmJiBlbGVtZW50Lm5hbWUgKyBcIi1cIiArIGdlbmVyYXRlQ2hhcnMoMikgfHwgZ2VuZXJhdGVDaGFycyg0KTtcbiAgaWQgPSBpZC5yZXBsYWNlKC8oOnxcXC58XFxbfFxcXXwsKS9nLCAnJyk7XG4gIGlkID0gcHJlZml4ICsgXCItXCIgKyBpZDtcbiAgcmV0dXJuIGlkO1xufTtcbi8qKlxuICogQHBhcmFtIHthbnl9IG9ialxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuXG52YXIgZ2V0VHlwZSA9IGZ1bmN0aW9uIGdldFR5cGUob2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKS5zbGljZSg4LCAtMSk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHthbnl9IG9ialxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxudmFyIGlzVHlwZSA9IGZ1bmN0aW9uIGlzVHlwZSh0eXBlLCBvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iaiAhPT0gbnVsbCAmJiBnZXRUeXBlKG9iaikgPT09IHR5cGU7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBbd3JhcHBlcj17SFRNTERpdkVsZW1lbnR9XVxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxuICovXG5cbnZhciB1dGlsc193cmFwID0gZnVuY3Rpb24gd3JhcChlbGVtZW50LCB3cmFwcGVyKSB7XG4gIGlmICh3cmFwcGVyID09PSB2b2lkIDApIHtcbiAgICB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIH1cblxuICBpZiAoZWxlbWVudC5uZXh0U2libGluZykge1xuICAgIGVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgZWxlbWVudC5uZXh0U2libGluZyk7XG4gIH0gZWxzZSB7XG4gICAgZWxlbWVudC5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG5cbiAgcmV0dXJuIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IHN0YXJ0RWxcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICogQHBhcmFtIHsxIHwgLTF9IGRpcmVjdGlvblxuICogQHJldHVybnMge0VsZW1lbnQgfCB1bmRlZmluZWR9XG4gKi9cblxudmFyIGdldEFkamFjZW50RWwgPSBmdW5jdGlvbiBnZXRBZGphY2VudEVsKHN0YXJ0RWwsIHNlbGVjdG9yLCBkaXJlY3Rpb24pIHtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgZGlyZWN0aW9uID0gMTtcbiAgfVxuXG4gIGlmICghKHN0YXJ0RWwgaW5zdGFuY2VvZiBFbGVtZW50KSB8fCB0eXBlb2Ygc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBwcm9wID0gKGRpcmVjdGlvbiA+IDAgPyAnbmV4dCcgOiAncHJldmlvdXMnKSArIFwiRWxlbWVudFNpYmxpbmdcIjtcbiAgdmFyIHNpYmxpbmcgPSBzdGFydEVsW3Byb3BdO1xuXG4gIHdoaWxlIChzaWJsaW5nKSB7XG4gICAgaWYgKHNpYmxpbmcubWF0Y2hlcyhzZWxlY3RvcikpIHtcbiAgICAgIHJldHVybiBzaWJsaW5nO1xuICAgIH1cblxuICAgIHNpYmxpbmcgPSBzaWJsaW5nW3Byb3BdO1xuICB9XG5cbiAgcmV0dXJuIHNpYmxpbmc7XG59O1xuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcGFyZW50XG4gKiBAcGFyYW0gey0xIHwgMX0gZGlyZWN0aW9uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuXG52YXIgaXNTY3JvbGxlZEludG9WaWV3ID0gZnVuY3Rpb24gaXNTY3JvbGxlZEludG9WaWV3KGVsZW1lbnQsIHBhcmVudCwgZGlyZWN0aW9uKSB7XG4gIGlmIChkaXJlY3Rpb24gPT09IHZvaWQgMCkge1xuICAgIGRpcmVjdGlvbiA9IDE7XG4gIH1cblxuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaXNWaXNpYmxlO1xuXG4gIGlmIChkaXJlY3Rpb24gPiAwKSB7XG4gICAgLy8gSW4gdmlldyBmcm9tIGJvdHRvbVxuICAgIGlzVmlzaWJsZSA9IHBhcmVudC5zY3JvbGxUb3AgKyBwYXJlbnQub2Zmc2V0SGVpZ2h0ID49IGVsZW1lbnQub2Zmc2V0VG9wICsgZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gIH0gZWxzZSB7XG4gICAgLy8gSW4gdmlldyBmcm9tIHRvcFxuICAgIGlzVmlzaWJsZSA9IGVsZW1lbnQub2Zmc2V0VG9wID49IHBhcmVudC5zY3JvbGxUb3A7XG4gIH1cblxuICByZXR1cm4gaXNWaXNpYmxlO1xufTtcbi8qKlxuICogQHBhcmFtIHthbnl9IHZhbHVlXG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5cbnZhciBzYW5pdGlzZSA9IGZ1bmN0aW9uIHNhbml0aXNlKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPi9nLCAnJnJ0OycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59O1xuLyoqXG4gKiBAcmV0dXJucyB7KCkgPT4gKHN0cjogc3RyaW5nKSA9PiBFbGVtZW50fVxuICovXG5cbnZhciBzdHJUb0VsID0gZnVuY3Rpb24gKCkge1xuICB2YXIgdG1wRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHtcbiAgICB2YXIgY2xlYW5lZElucHV0ID0gc3RyLnRyaW0oKTtcbiAgICB0bXBFbC5pbm5lckhUTUwgPSBjbGVhbmVkSW5wdXQ7XG4gICAgdmFyIGZpcmxkQ2hpbGQgPSB0bXBFbC5jaGlsZHJlblswXTtcblxuICAgIHdoaWxlICh0bXBFbC5maXJzdENoaWxkKSB7XG4gICAgICB0bXBFbC5yZW1vdmVDaGlsZCh0bXBFbC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmlybGRDaGlsZDtcbiAgfTtcbn0oKTtcbi8qKlxuICogQHBhcmFtIHt7IGxhYmVsPzogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH19IGFcbiAqIEBwYXJhbSB7eyBsYWJlbD86IHN0cmluZywgdmFsdWU6IHN0cmluZyB9fSBiXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5cbnZhciBzb3J0QnlBbHBoYSA9IGZ1bmN0aW9uIHNvcnRCeUFscGhhKF9yZWYsIF9yZWYyKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBfcmVmJGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIGxhYmVsID0gX3JlZiRsYWJlbCA9PT0gdm9pZCAwID8gdmFsdWUgOiBfcmVmJGxhYmVsO1xuICB2YXIgdmFsdWUyID0gX3JlZjIudmFsdWUsXG4gICAgICBfcmVmMiRsYWJlbCA9IF9yZWYyLmxhYmVsLFxuICAgICAgbGFiZWwyID0gX3JlZjIkbGFiZWwgPT09IHZvaWQgMCA/IHZhbHVlMiA6IF9yZWYyJGxhYmVsO1xuICByZXR1cm4gbGFiZWwubG9jYWxlQ29tcGFyZShsYWJlbDIsIFtdLCB7XG4gICAgc2Vuc2l0aXZpdHk6ICdiYXNlJyxcbiAgICBpZ25vcmVQdW5jdHVhdGlvbjogdHJ1ZSxcbiAgICBudW1lcmljOiB0cnVlXG4gIH0pO1xufTtcbi8qKlxuICogQHBhcmFtIHt7IHNjb3JlOiBudW1iZXIgfX0gYVxuICogQHBhcmFtIHt7IHNjb3JlOiBudW1iZXIgfX0gYlxuICovXG5cbnZhciBzb3J0QnlTY29yZSA9IGZ1bmN0aW9uIHNvcnRCeVNjb3JlKGEsIGIpIHtcbiAgcmV0dXJuIGEuc2NvcmUgLSBiLnNjb3JlO1xufTtcbi8qKlxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBjdXN0b21BcmdzXG4gKi9cblxudmFyIGRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGVsZW1lbnQsIHR5cGUsIGN1c3RvbUFyZ3MpIHtcbiAgaWYgKGN1c3RvbUFyZ3MgPT09IHZvaWQgMCkge1xuICAgIGN1c3RvbUFyZ3MgPSBudWxsO1xuICB9XG5cbiAgdmFyIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KHR5cGUsIHtcbiAgICBkZXRhaWw6IGN1c3RvbUFyZ3MsXG4gICAgYnViYmxlczogdHJ1ZSxcbiAgICBjYW5jZWxhYmxlOiB0cnVlXG4gIH0pO1xuICByZXR1cm4gZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn07XG4vKipcbiAqIEBwYXJhbSB7YXJyYXl9IGFycmF5XG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBba2V5PVwidmFsdWVcIl1cbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbnZhciBleGlzdHNJbkFycmF5ID0gZnVuY3Rpb24gZXhpc3RzSW5BcnJheShhcnJheSwgdmFsdWUsIGtleSkge1xuICBpZiAoa2V5ID09PSB2b2lkIDApIHtcbiAgICBrZXkgPSAndmFsdWUnO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5LnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIGl0ZW1ba2V5XSA9PT0gdmFsdWUudHJpbSgpO1xuICAgIH1cblxuICAgIHJldHVybiBpdGVtW2tleV0gPT09IHZhbHVlO1xuICB9KTtcbn07XG4vKipcbiAqIEBwYXJhbSB7YW55fSBvYmpcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cblxudmFyIGNsb25lT2JqZWN0ID0gZnVuY3Rpb24gY2xvbmVPYmplY3Qob2JqKSB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iaikpO1xufTtcbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBrZXlzIHByZXNlbnQgb24gdGhlIGZpcnN0IGJ1dCBtaXNzaW5nIG9uIHRoZSBzZWNvbmQgb2JqZWN0XG4gKiBAcGFyYW0ge29iamVjdH0gYVxuICogQHBhcmFtIHtvYmplY3R9IGJcbiAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAqL1xuXG52YXIgZGlmZiA9IGZ1bmN0aW9uIGRpZmYoYSwgYikge1xuICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKS5zb3J0KCk7XG4gIHZhciBiS2V5cyA9IE9iamVjdC5rZXlzKGIpLnNvcnQoKTtcbiAgcmV0dXJuIGFLZXlzLmZpbHRlcihmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBiS2V5cy5pbmRleE9mKGkpIDwgMDtcbiAgfSk7XG59O1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9yZWR1Y2Vycy9pbmRleC5qc1xuXG5cblxuXG5cblxudmFyIGFwcFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBpdGVtczogaXRlbXNfaXRlbXMsXG4gIGdyb3VwczogZ3JvdXBzLFxuICBjaG9pY2VzOiBjaG9pY2VzX2Nob2ljZXMsXG4gIGdlbmVyYWw6IHJlZHVjZXJzX2dlbmVyYWxcbn0pO1xuXG52YXIgcmVkdWNlcnNfcm9vdFJlZHVjZXIgPSBmdW5jdGlvbiByb290UmVkdWNlcihwYXNzZWRTdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciBzdGF0ZSA9IHBhc3NlZFN0YXRlOyAvLyBJZiB3ZSBhcmUgY2xlYXJpbmcgYWxsIGl0ZW1zLCBncm91cHMgYW5kIG9wdGlvbnMgd2UgcmVhc3NpZ25cbiAgLy8gc3RhdGUgYW5kIHRoZW4gcGFzcyB0aGF0IHN0YXRlIHRvIG91ciBwcm9wZXIgcmVkdWNlci4gVGhpcyBpc24ndFxuICAvLyBtdXRhdGluZyBvdXIgYWN0dWFsIHN0YXRlXG4gIC8vIFNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzU2NDE5OTJcblxuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDTEVBUl9BTEwnKSB7XG4gICAgc3RhdGUgPSB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRVNFVF9UTycpIHtcbiAgICByZXR1cm4gY2xvbmVPYmplY3QoYWN0aW9uLnN0YXRlKTtcbiAgfVxuXG4gIHJldHVybiBhcHBSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xufTtcblxuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgcmVkdWNlcnMgPSAocmVkdWNlcnNfcm9vdFJlZHVjZXIpO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9zdG9yZS9zdG9yZS5qc1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2hvaWNlfSBDaG9pY2VcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5Hcm91cH0gR3JvdXBcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5JdGVtfSBJdGVtXG4gKi9cblxudmFyIHN0b3JlX1N0b3JlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RvcmUoKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2Vycywgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSk7XG4gIH1cbiAgLyoqXG4gICAqIFN1YnNjcmliZSBzdG9yZSB0byBmdW5jdGlvbiBjYWxsICh3cmFwcGVkIFJlZHV4IG1ldGhvZClcbiAgICogQHBhcmFtICB7RnVuY3Rpb259IG9uQ2hhbmdlIEZ1bmN0aW9uIHRvIHRyaWdnZXIgd2hlbiBzdGF0ZSBjaGFuZ2VzXG4gICAqIEByZXR1cm5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gU3RvcmUucHJvdG90eXBlO1xuXG4gIF9wcm90by5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUob25DaGFuZ2UpIHtcbiAgICB0aGlzLl9zdG9yZS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuICB9XG4gIC8qKlxuICAgKiBEaXNwYXRjaCBldmVudCB0byBzdG9yZSAod3JhcHBlZCBSZWR1eCBtZXRob2QpXG4gICAqIEBwYXJhbSAge3sgdHlwZTogc3RyaW5nLCBbeDogc3RyaW5nXTogYW55IH19IGFjdGlvbiBBY3Rpb24gdG8gdHJpZ2dlclxuICAgKiBAcmV0dXJuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goYWN0aW9uKTtcbiAgfVxuICAvKipcbiAgICogR2V0IHN0b3JlIG9iamVjdCAod3JhcHBpbmcgUmVkdXggbWV0aG9kKVxuICAgKiBAcmV0dXJucyB7b2JqZWN0fSBTdGF0ZVxuICAgKi9cbiAgO1xuXG4gIC8qKlxuICAgKiBHZXQgbG9hZGluZyBzdGF0ZSBmcm9tIHN0b3JlXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBMb2FkaW5nIFN0YXRlXG4gICAqL1xuICBfcHJvdG8uaXNMb2FkaW5nID0gZnVuY3Rpb24gaXNMb2FkaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlLmdlbmVyYWwubG9hZGluZztcbiAgfVxuICAvKipcbiAgICogR2V0IHNpbmdsZSBjaG9pY2UgYnkgaXQncyBJRFxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAgICogQHJldHVybnMge0Nob2ljZSB8IHVuZGVmaW5lZH0gRm91bmQgY2hvaWNlXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldENob2ljZUJ5SWQgPSBmdW5jdGlvbiBnZXRDaG9pY2VCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2hvaWNlcy5maW5kKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgIHJldHVybiBjaG9pY2UuaWQgPT09IHBhcnNlSW50KGlkLCAxMCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBncm91cCBieSBncm91cCBpZFxuICAgKiBAcGFyYW0gIHtudW1iZXJ9IGlkIEdyb3VwIElEXG4gICAqIEByZXR1cm5zIHtHcm91cCB8IHVuZGVmaW5lZH0gR3JvdXAgZGF0YVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXRHcm91cEJ5SWQgPSBmdW5jdGlvbiBnZXRHcm91cEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cHMuZmluZChmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiBncm91cC5pZCA9PT0gaWQ7XG4gICAgfSk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFN0b3JlLCBbe1xuICAgIGtleTogXCJzdGF0ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3N0b3JlLmdldFN0YXRlKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBpdGVtcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0l0ZW1bXX0gSXRlbSBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJpdGVtc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuaXRlbXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBhY3RpdmUgaXRlbXMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtJdGVtW119IEl0ZW0gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiYWN0aXZlSXRlbXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5hY3RpdmUgPT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGhpZ2hsaWdodGVkIGl0ZW1zIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7SXRlbVtdfSBJdGVtIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImhpZ2hsaWdodGVkQWN0aXZlSXRlbXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLml0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5hY3RpdmUgJiYgaXRlbS5oaWdobGlnaHRlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgY2hvaWNlcyBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0Nob2ljZVtdfSBPcHRpb24gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwiY2hvaWNlc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuY2hvaWNlcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFjdGl2ZSBjaG9pY2VzIGZyb20gc3RvcmVcbiAgICAgKiBAcmV0dXJucyB7Q2hvaWNlW119IE9wdGlvbiBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhY3RpdmVDaG9pY2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaG9pY2VzLmZpbHRlcihmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgIHJldHVybiBjaG9pY2UuYWN0aXZlID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBzZWxlY3RhYmxlIGNob2ljZXMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtDaG9pY2VbXX0gT3B0aW9uIG9iamVjdHNcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInNlbGVjdGFibGVDaG9pY2VzXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaG9pY2VzLmZpbHRlcihmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgIHJldHVybiBjaG9pY2UuZGlzYWJsZWQgIT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGNob2ljZXMgdGhhdCBjYW4gYmUgc2VhcmNoZWQgKGV4Y2x1ZGluZyBwbGFjZWhvbGRlcnMpXG4gICAgICogQHJldHVybnMge0Nob2ljZVtdfSBPcHRpb24gb2JqZWN0c1xuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwic2VhcmNoYWJsZUNob2ljZXNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdGFibGVDaG9pY2VzLmZpbHRlcihmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICAgIHJldHVybiBjaG9pY2UucGxhY2Vob2xkZXIgIT09IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IHBsYWNlaG9sZGVyIGNob2ljZSBmcm9tIHN0b3JlXG4gICAgICogQHJldHVybnMge0Nob2ljZSB8IHVuZGVmaW5lZH0gRm91bmQgcGxhY2Vob2xkZXJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInBsYWNlaG9sZGVyQ2hvaWNlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gW10uY29uY2F0KHRoaXMuY2hvaWNlcykucmV2ZXJzZSgpLmZpbmQoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICByZXR1cm4gY2hvaWNlLnBsYWNlaG9sZGVyID09PSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldCBncm91cHMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtHcm91cFtdfSBHcm91cCBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJncm91cHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0YXRlLmdyb3VwcztcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0IGFjdGl2ZSBncm91cHMgZnJvbSBzdG9yZVxuICAgICAqIEByZXR1cm5zIHtHcm91cFtdfSBHcm91cCBvYmplY3RzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJhY3RpdmVHcm91cHNcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBncm91cHMgPSB0aGlzLmdyb3VwcyxcbiAgICAgICAgICBjaG9pY2VzID0gdGhpcy5jaG9pY2VzO1xuICAgICAgcmV0dXJuIGdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICAgIHZhciBpc0FjdGl2ZSA9IGdyb3VwLmFjdGl2ZSA9PT0gdHJ1ZSAmJiBncm91cC5kaXNhYmxlZCA9PT0gZmFsc2U7XG4gICAgICAgIHZhciBoYXNBY3RpdmVPcHRpb25zID0gY2hvaWNlcy5zb21lKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgICByZXR1cm4gY2hvaWNlLmFjdGl2ZSA9PT0gdHJ1ZSAmJiBjaG9pY2UuZGlzYWJsZWQgPT09IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGlzQWN0aXZlICYmIGhhc0FjdGl2ZU9wdGlvbnM7XG4gICAgICB9LCBbXSk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0b3JlO1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9kcm9wZG93bi5qc1xuZnVuY3Rpb24gZHJvcGRvd25fZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIGRyb3Bkb3duX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZHJvcGRvd25fZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRyb3Bkb3duX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLnBhc3NlZEVsZW1lbnR9IHBhc3NlZEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKi9cbnZhciBEcm9wZG93biA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0ge3tcbiAgICogIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgKiAgdHlwZTogcGFzc2VkRWxlbWVudFsndHlwZSddLFxuICAgKiAgY2xhc3NOYW1lczogQ2xhc3NOYW1lcyxcbiAgICogfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gRHJvcGRvd24oX3JlZikge1xuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICBjbGFzc05hbWVzID0gX3JlZi5jbGFzc05hbWVzO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaXNBY3RpdmUgPSBmYWxzZTtcbiAgfVxuICAvKipcbiAgICogQm90dG9tIHBvc2l0aW9uIG9mIGRyb3Bkb3duIGluIHZpZXdwb3J0IGNvb3JkaW5hdGVzXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFZlcnRpY2FsIHBvc2l0aW9uXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IERyb3Bkb3duLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogRmluZCBlbGVtZW50IHRoYXQgbWF0Y2hlcyBwYXNzZWQgc2VsZWN0b3JcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXG4gICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudCB8IG51bGx9XG4gICAqL1xuICBfcHJvdG8uZ2V0Q2hpbGQgPSBmdW5jdGlvbiBnZXRDaGlsZChzZWxlY3Rvcikge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gIH1cbiAgLyoqXG4gICAqIFNob3cgZHJvcGRvd24gdG8gdXNlciBieSBhZGRpbmcgYWN0aXZlIHN0YXRlIGNsYXNzXG4gICAqIEByZXR1cm5zIHt0aGlzfVxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zaG93ID0gZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuYWN0aXZlU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBIaWRlIGRyb3Bkb3duIGZyb20gdXNlclxuICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaGlkZSA9IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmFjdGl2ZVN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIGRyb3Bkb3duX2NyZWF0ZUNsYXNzKERyb3Bkb3duLCBbe1xuICAgIGtleTogXCJkaXN0YW5jZUZyb21Ub3BXaW5kb3dcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEcm9wZG93bjtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbnN0YW50cy5qc1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuT3B0aW9uc30gT3B0aW9uc1xuICovXG5cbi8qKiBAdHlwZSB7Q2xhc3NOYW1lc30gKi9cblxudmFyIERFRkFVTFRfQ0xBU1NOQU1FUyA9IHtcbiAgY29udGFpbmVyT3V0ZXI6ICdjaG9pY2VzJyxcbiAgY29udGFpbmVySW5uZXI6ICdjaG9pY2VzX19pbm5lcicsXG4gIGlucHV0OiAnY2hvaWNlc19faW5wdXQnLFxuICBpbnB1dENsb25lZDogJ2Nob2ljZXNfX2lucHV0LS1jbG9uZWQnLFxuICBsaXN0OiAnY2hvaWNlc19fbGlzdCcsXG4gIGxpc3RJdGVtczogJ2Nob2ljZXNfX2xpc3QtLW11bHRpcGxlJyxcbiAgbGlzdFNpbmdsZTogJ2Nob2ljZXNfX2xpc3QtLXNpbmdsZScsXG4gIGxpc3REcm9wZG93bjogJ2Nob2ljZXNfX2xpc3QtLWRyb3Bkb3duJyxcbiAgaXRlbTogJ2Nob2ljZXNfX2l0ZW0nLFxuICBpdGVtU2VsZWN0YWJsZTogJ2Nob2ljZXNfX2l0ZW0tLXNlbGVjdGFibGUnLFxuICBpdGVtRGlzYWJsZWQ6ICdjaG9pY2VzX19pdGVtLS1kaXNhYmxlZCcsXG4gIGl0ZW1DaG9pY2U6ICdjaG9pY2VzX19pdGVtLS1jaG9pY2UnLFxuICBwbGFjZWhvbGRlcjogJ2Nob2ljZXNfX3BsYWNlaG9sZGVyJyxcbiAgZ3JvdXA6ICdjaG9pY2VzX19ncm91cCcsXG4gIGdyb3VwSGVhZGluZzogJ2Nob2ljZXNfX2hlYWRpbmcnLFxuICBidXR0b246ICdjaG9pY2VzX19idXR0b24nLFxuICBhY3RpdmVTdGF0ZTogJ2lzLWFjdGl2ZScsXG4gIGZvY3VzU3RhdGU6ICdpcy1mb2N1c2VkJyxcbiAgb3BlblN0YXRlOiAnaXMtb3BlbicsXG4gIGRpc2FibGVkU3RhdGU6ICdpcy1kaXNhYmxlZCcsXG4gIGhpZ2hsaWdodGVkU3RhdGU6ICdpcy1oaWdobGlnaHRlZCcsXG4gIHNlbGVjdGVkU3RhdGU6ICdpcy1zZWxlY3RlZCcsXG4gIGZsaXBwZWRTdGF0ZTogJ2lzLWZsaXBwZWQnLFxuICBsb2FkaW5nU3RhdGU6ICdpcy1sb2FkaW5nJyxcbiAgbm9SZXN1bHRzOiAnaGFzLW5vLXJlc3VsdHMnLFxuICBub0Nob2ljZXM6ICdoYXMtbm8tY2hvaWNlcydcbn07XG4vKiogQHR5cGUge09wdGlvbnN9ICovXG5cbnZhciBERUZBVUxUX0NPTkZJRyA9IHtcbiAgaXRlbXM6IFtdLFxuICBjaG9pY2VzOiBbXSxcbiAgc2lsZW50OiBmYWxzZSxcbiAgcmVuZGVyQ2hvaWNlTGltaXQ6IC0xLFxuICBtYXhJdGVtQ291bnQ6IC0xLFxuICBhZGRJdGVtczogdHJ1ZSxcbiAgYWRkSXRlbUZpbHRlcjogbnVsbCxcbiAgcmVtb3ZlSXRlbXM6IHRydWUsXG4gIHJlbW92ZUl0ZW1CdXR0b246IGZhbHNlLFxuICBlZGl0SXRlbXM6IGZhbHNlLFxuICBkdXBsaWNhdGVJdGVtc0FsbG93ZWQ6IHRydWUsXG4gIGRlbGltaXRlcjogJywnLFxuICBwYXN0ZTogdHJ1ZSxcbiAgc2VhcmNoRW5hYmxlZDogdHJ1ZSxcbiAgc2VhcmNoQ2hvaWNlczogdHJ1ZSxcbiAgc2VhcmNoRmxvb3I6IDEsXG4gIHNlYXJjaFJlc3VsdExpbWl0OiA0LFxuICBzZWFyY2hGaWVsZHM6IFsnbGFiZWwnLCAndmFsdWUnXSxcbiAgcG9zaXRpb246ICdhdXRvJyxcbiAgcmVzZXRTY3JvbGxQb3NpdGlvbjogdHJ1ZSxcbiAgc2hvdWxkU29ydDogdHJ1ZSxcbiAgc2hvdWxkU29ydEl0ZW1zOiBmYWxzZSxcbiAgc29ydGVyOiBzb3J0QnlBbHBoYSxcbiAgcGxhY2Vob2xkZXI6IHRydWUsXG4gIHBsYWNlaG9sZGVyVmFsdWU6IG51bGwsXG4gIHNlYXJjaFBsYWNlaG9sZGVyVmFsdWU6IG51bGwsXG4gIHByZXBlbmRWYWx1ZTogbnVsbCxcbiAgYXBwZW5kVmFsdWU6IG51bGwsXG4gIHJlbmRlclNlbGVjdGVkQ2hvaWNlczogJ2F1dG8nLFxuICBsb2FkaW5nVGV4dDogJ0xvYWRpbmcuLi4nLFxuICBub1Jlc3VsdHNUZXh0OiAnTm8gcmVzdWx0cyBmb3VuZCcsXG4gIG5vQ2hvaWNlc1RleHQ6ICdObyBjaG9pY2VzIHRvIGNob29zZSBmcm9tJyxcbiAgaXRlbVNlbGVjdFRleHQ6ICdQcmVzcyB0byBzZWxlY3QnLFxuICB1bmlxdWVJdGVtVGV4dDogJ09ubHkgdW5pcXVlIHZhbHVlcyBjYW4gYmUgYWRkZWQnLFxuICBjdXN0b21BZGRJdGVtVGV4dDogJ09ubHkgdmFsdWVzIG1hdGNoaW5nIHNwZWNpZmljIGNvbmRpdGlvbnMgY2FuIGJlIGFkZGVkJyxcbiAgYWRkSXRlbVRleHQ6IGZ1bmN0aW9uIGFkZEl0ZW1UZXh0KHZhbHVlKSB7XG4gICAgcmV0dXJuIFwiUHJlc3MgRW50ZXIgdG8gYWRkIDxiPlxcXCJcIiArIHNhbml0aXNlKHZhbHVlKSArIFwiXFxcIjwvYj5cIjtcbiAgfSxcbiAgbWF4SXRlbVRleHQ6IGZ1bmN0aW9uIG1heEl0ZW1UZXh0KG1heEl0ZW1Db3VudCkge1xuICAgIHJldHVybiBcIk9ubHkgXCIgKyBtYXhJdGVtQ291bnQgKyBcIiB2YWx1ZXMgY2FuIGJlIGFkZGVkXCI7XG4gIH0sXG4gIHZhbHVlQ29tcGFyZXI6IGZ1bmN0aW9uIHZhbHVlQ29tcGFyZXIodmFsdWUxLCB2YWx1ZTIpIHtcbiAgICByZXR1cm4gdmFsdWUxID09PSB2YWx1ZTI7XG4gIH0sXG4gIGZ1c2VPcHRpb25zOiB7XG4gICAgaW5jbHVkZVNjb3JlOiB0cnVlXG4gIH0sXG4gIGNhbGxiYWNrT25Jbml0OiBudWxsLFxuICBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzOiBudWxsLFxuICBjbGFzc05hbWVzOiBERUZBVUxUX0NMQVNTTkFNRVNcbn07XG52YXIgRVZFTlRTID0ge1xuICBzaG93RHJvcGRvd246ICdzaG93RHJvcGRvd24nLFxuICBoaWRlRHJvcGRvd246ICdoaWRlRHJvcGRvd24nLFxuICBjaGFuZ2U6ICdjaGFuZ2UnLFxuICBjaG9pY2U6ICdjaG9pY2UnLFxuICBzZWFyY2g6ICdzZWFyY2gnLFxuICBhZGRJdGVtOiAnYWRkSXRlbScsXG4gIHJlbW92ZUl0ZW06ICdyZW1vdmVJdGVtJyxcbiAgaGlnaGxpZ2h0SXRlbTogJ2hpZ2hsaWdodEl0ZW0nLFxuICBoaWdobGlnaHRDaG9pY2U6ICdoaWdobGlnaHRDaG9pY2UnXG59O1xudmFyIEFDVElPTl9UWVBFUyA9IHtcbiAgQUREX0NIT0lDRTogJ0FERF9DSE9JQ0UnLFxuICBGSUxURVJfQ0hPSUNFUzogJ0ZJTFRFUl9DSE9JQ0VTJyxcbiAgQUNUSVZBVEVfQ0hPSUNFUzogJ0FDVElWQVRFX0NIT0lDRVMnLFxuICBDTEVBUl9DSE9JQ0VTOiAnQ0xFQVJfQ0hPSUNFUycsXG4gIEFERF9HUk9VUDogJ0FERF9HUk9VUCcsXG4gIEFERF9JVEVNOiAnQUREX0lURU0nLFxuICBSRU1PVkVfSVRFTTogJ1JFTU9WRV9JVEVNJyxcbiAgSElHSExJR0hUX0lURU06ICdISUdITElHSFRfSVRFTScsXG4gIENMRUFSX0FMTDogJ0NMRUFSX0FMTCdcbn07XG52YXIgS0VZX0NPREVTID0ge1xuICBCQUNLX0tFWTogNDYsXG4gIERFTEVURV9LRVk6IDgsXG4gIEVOVEVSX0tFWTogMTMsXG4gIEFfS0VZOiA2NSxcbiAgRVNDX0tFWTogMjcsXG4gIFVQX0tFWTogMzgsXG4gIERPV05fS0VZOiA0MCxcbiAgUEFHRV9VUF9LRVk6IDMzLFxuICBQQUdFX0RPV05fS0VZOiAzNFxufTtcbnZhciBURVhUX1RZUEUgPSAndGV4dCc7XG52YXIgU0VMRUNUX09ORV9UWVBFID0gJ3NlbGVjdC1vbmUnO1xudmFyIFNFTEVDVF9NVUxUSVBMRV9UWVBFID0gJ3NlbGVjdC1tdWx0aXBsZSc7XG52YXIgU0NST0xMSU5HX1NQRUVEID0gNDtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9jb250YWluZXIuanNcblxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5wYXNzZWRFbGVtZW50fSBwYXNzZWRFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICovXG5cbnZhciBjb250YWluZXJfQ29udGFpbmVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAqICB0eXBlOiBwYXNzZWRFbGVtZW50Wyd0eXBlJ10sXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiAgcG9zaXRpb25cbiAgICogfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gQ29udGFpbmVyKF9yZWYpIHtcbiAgICB2YXIgZWxlbWVudCA9IF9yZWYuZWxlbWVudCxcbiAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgICAgY2xhc3NOYW1lcyA9IF9yZWYuY2xhc3NOYW1lcyxcbiAgICAgICAgcG9zaXRpb24gPSBfcmVmLnBvc2l0aW9uO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgIHRoaXMuaXNGbGlwcGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0ZvY3Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLl9vbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IENvbnRhaW5lci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cyk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIpO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyKTtcbiAgfVxuICAvKipcbiAgICogRGV0ZXJtaW5lIHdoZXRoZXIgY29udGFpbmVyIHNob3VsZCBiZSBmbGlwcGVkIGJhc2VkIG9uIHBhc3NlZFxuICAgKiBkcm9wZG93biBwb3NpdGlvblxuICAgKiBAcGFyYW0ge251bWJlcn0gZHJvcGRvd25Qb3NcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNob3VsZEZsaXAgPSBmdW5jdGlvbiBzaG91bGRGbGlwKGRyb3Bkb3duUG9zKSB7XG4gICAgaWYgKHR5cGVvZiBkcm9wZG93blBvcyAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIElmIGZsaXAgaXMgZW5hYmxlZCBhbmQgdGhlIGRyb3Bkb3duIGJvdHRvbSBwb3NpdGlvbiBpc1xuICAgIC8vIGdyZWF0ZXIgdGhhbiB0aGUgd2luZG93IGhlaWdodCBmbGlwIHRoZSBkcm9wZG93bi5cblxuXG4gICAgdmFyIHNob3VsZEZsaXAgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnYXV0bycpIHtcbiAgICAgIHNob3VsZEZsaXAgPSAhd2luZG93Lm1hdGNoTWVkaWEoXCIobWluLWhlaWdodDogXCIgKyAoZHJvcGRvd25Qb3MgKyAxKSArIFwicHgpXCIpLm1hdGNoZXM7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBvc2l0aW9uID09PSAndG9wJykge1xuICAgICAgc2hvdWxkRmxpcCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNob3VsZEZsaXA7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhY3RpdmVEZXNjZW5kYW50SURcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0QWN0aXZlRGVzY2VuZGFudCA9IGZ1bmN0aW9uIHNldEFjdGl2ZURlc2NlbmRhbnQoYWN0aXZlRGVzY2VuZGFudElEKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgYWN0aXZlRGVzY2VuZGFudElEKTtcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQWN0aXZlRGVzY2VuZGFudCA9IGZ1bmN0aW9uIHJlbW92ZUFjdGl2ZURlc2NlbmRhbnQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50Jyk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkcm9wZG93blBvc1xuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vcGVuID0gZnVuY3Rpb24gb3Blbihkcm9wZG93blBvcykge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5vcGVuU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnNob3VsZEZsaXAoZHJvcGRvd25Qb3MpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuZmxpcHBlZFN0YXRlKTtcbiAgICAgIHRoaXMuaXNGbGlwcGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmNsb3NlID0gZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLm9wZW5TdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHRoaXMucmVtb3ZlQWN0aXZlRGVzY2VuZGFudCgpO1xuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7IC8vIEEgZHJvcGRvd24gZmxpcHMgaWYgaXQgZG9lcyBub3QgaGF2ZSBzcGFjZSB3aXRoaW4gdGhlIHBhZ2VcblxuICAgIGlmICh0aGlzLmlzRmxpcHBlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmZsaXBwZWRTdGF0ZSk7XG4gICAgICB0aGlzLmlzRmxpcHBlZCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uZm9jdXMgPSBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c3NlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hZGRGb2N1c1N0YXRlID0gZnVuY3Rpb24gYWRkRm9jdXNTdGF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuZm9jdXNTdGF0ZSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUZvY3VzU3RhdGUgPSBmdW5jdGlvbiByZW1vdmVGb2N1c1N0YXRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5mb2N1c1N0YXRlKTtcbiAgfTtcblxuICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5kaXNhYmxlZFN0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBTRUxFQ1RfT05FX1RZUEUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmRpc2FibGVkU3RhdGUpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gU0VMRUNUX09ORV9UWVBFKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgIH1cblxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8ud3JhcCA9IGZ1bmN0aW9uIHdyYXAoZWxlbWVudCkge1xuICAgIHV0aWxzX3dyYXAoZWxlbWVudCwgdGhpcy5lbGVtZW50KTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVud3JhcCA9IGZ1bmN0aW9uIHVud3JhcChlbGVtZW50KSB7XG4gICAgLy8gTW92ZSBwYXNzZWQgZWxlbWVudCBvdXRzaWRlIHRoaXMgZWxlbWVudFxuICAgIHRoaXMuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LCB0aGlzLmVsZW1lbnQpOyAvLyBSZW1vdmUgdGhpcyBlbGVtZW50XG5cbiAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICB9O1xuXG4gIF9wcm90by5hZGRMb2FkaW5nU3RhdGUgPSBmdW5jdGlvbiBhZGRMb2FkaW5nU3RhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmxvYWRpbmdTdGF0ZSk7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgJ3RydWUnKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUxvYWRpbmdTdGF0ZSA9IGZ1bmN0aW9uIHJlbW92ZUxvYWRpbmdTdGF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZXMubG9hZGluZ1N0YXRlKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWJ1c3knKTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by5fb25Gb2N1cyA9IGZ1bmN0aW9uIF9vbkZvY3VzKCkge1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IHRydWU7XG4gIH07XG5cbiAgX3Byb3RvLl9vbkJsdXIgPSBmdW5jdGlvbiBfb25CbHVyKCkge1xuICAgIHRoaXMuaXNGb2N1c3NlZCA9IGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiBDb250YWluZXI7XG59KCk7XG5cblxuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2lucHV0LmpzXG5mdW5jdGlvbiBpbnB1dF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gaW5wdXRfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBpbnB1dF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgaW5wdXRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLnBhc3NlZEVsZW1lbnR9IHBhc3NlZEVsZW1lbnRcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKi9cblxudmFyIGlucHV0X0lucHV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCxcbiAgICogIHR5cGU6IHBhc3NlZEVsZW1lbnRbJ3R5cGUnXSxcbiAgICogIGNsYXNzTmFtZXM6IENsYXNzTmFtZXMsXG4gICAqICBwcmV2ZW50UGFzdGU6IGJvb2xlYW5cbiAgICogfX0gYXJnc1xuICAgKi9cbiAgZnVuY3Rpb24gSW5wdXQoX3JlZikge1xuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgICBjbGFzc05hbWVzID0gX3JlZi5jbGFzc05hbWVzLFxuICAgICAgICBwcmV2ZW50UGFzdGUgPSBfcmVmLnByZXZlbnRQYXN0ZTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcbiAgICB0aGlzLnByZXZlbnRQYXN0ZSA9IHByZXZlbnRQYXN0ZTtcbiAgICB0aGlzLmlzRm9jdXNzZWQgPSB0aGlzLmVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gZWxlbWVudC5kaXNhYmxlZDtcbiAgICB0aGlzLl9vblBhc3RlID0gdGhpcy5fb25QYXN0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uSW5wdXQgPSB0aGlzLl9vbklucHV0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkJsdXIgPSB0aGlzLl9vbkJsdXIuYmluZCh0aGlzKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYWNlaG9sZGVyXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IElucHV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFzdGUnLCB0aGlzLl9vblBhc3RlKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vbklucHV0LCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cywge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fb25JbnB1dCwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdwYXN0ZScsIHRoaXMuX29uUGFzdGUpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uRm9jdXMsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1ciwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uZm9jdXMgPSBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuaXNGb2N1c3NlZCkge1xuICAgICAgdGhpcy5lbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5ibHVyID0gZnVuY3Rpb24gYmx1cigpIHtcbiAgICBpZiAodGhpcy5pc0ZvY3Vzc2VkKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogU2V0IHZhbHVlIG9mIGlucHV0IHRvIGJsYW5rXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2V0V2lkdGhcbiAgICogQHJldHVybnMge3RoaXN9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoc2V0V2lkdGgpIHtcbiAgICBpZiAoc2V0V2lkdGggPT09IHZvaWQgMCkge1xuICAgICAgc2V0V2lkdGggPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQudmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChzZXRXaWR0aCkge1xuICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBTZXQgdGhlIGNvcnJlY3QgaW5wdXQgd2lkdGggYmFzZWQgb24gcGxhY2Vob2xkZXJcbiAgICogdmFsdWUgb3IgaW5wdXQgdmFsdWVcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0V2lkdGggPSBmdW5jdGlvbiBzZXRXaWR0aCgpIHtcbiAgICAvLyBSZXNpemUgaW5wdXQgdG8gY29udGVudHMgb3IgcGxhY2Vob2xkZXJcbiAgICB2YXIgX3RoaXMkZWxlbWVudCA9IHRoaXMuZWxlbWVudCxcbiAgICAgICAgc3R5bGUgPSBfdGhpcyRlbGVtZW50LnN0eWxlLFxuICAgICAgICB2YWx1ZSA9IF90aGlzJGVsZW1lbnQudmFsdWUsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkZWxlbWVudC5wbGFjZWhvbGRlcjtcbiAgICBzdHlsZS5taW5XaWR0aCA9IHBsYWNlaG9sZGVyLmxlbmd0aCArIDEgKyBcImNoXCI7XG4gICAgc3R5bGUud2lkdGggPSB2YWx1ZS5sZW5ndGggKyAxICsgXCJjaFwiO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWN0aXZlRGVzY2VuZGFudElEXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnNldEFjdGl2ZURlc2NlbmRhbnQgPSBmdW5jdGlvbiBzZXRBY3RpdmVEZXNjZW5kYW50KGFjdGl2ZURlc2NlbmRhbnRJRCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcsIGFjdGl2ZURlc2NlbmRhbnRJRCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbW92ZUFjdGl2ZURlc2NlbmRhbnQgPSBmdW5jdGlvbiByZW1vdmVBY3RpdmVEZXNjZW5kYW50KCkge1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICB9O1xuXG4gIF9wcm90by5fb25JbnB1dCA9IGZ1bmN0aW9uIF9vbklucHV0KCkge1xuICAgIGlmICh0aGlzLnR5cGUgIT09IFNFTEVDVF9PTkVfVFlQRSkge1xuICAgICAgdGhpcy5zZXRXaWR0aCgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uX29uUGFzdGUgPSBmdW5jdGlvbiBfb25QYXN0ZShldmVudCkge1xuICAgIGlmICh0aGlzLnByZXZlbnRQYXN0ZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkZvY3VzID0gZnVuY3Rpb24gX29uRm9jdXMoKSB7XG4gICAgdGhpcy5pc0ZvY3Vzc2VkID0gdHJ1ZTtcbiAgfTtcblxuICBfcHJvdG8uX29uQmx1ciA9IGZ1bmN0aW9uIF9vbkJsdXIoKSB7XG4gICAgdGhpcy5pc0ZvY3Vzc2VkID0gZmFsc2U7XG4gIH07XG5cbiAgaW5wdXRfY3JlYXRlQ2xhc3MoSW5wdXQsIFt7XG4gICAga2V5OiBcInBsYWNlaG9sZGVyXCIsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQocGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwidmFsdWVcIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiBzYW5pdGlzZSh0aGlzLmVsZW1lbnQudmFsdWUpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICAsXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBJbnB1dDtcbn0oKTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvbGlzdC5qc1xuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DaG9pY2V9IENob2ljZVxuICovXG5cbnZhciBsaXN0X0xpc3QgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHt7IGVsZW1lbnQ6IEhUTUxFbGVtZW50IH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIExpc3QoX3JlZikge1xuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5zY3JvbGxQb3MgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMaXN0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY2xlYXIgPSBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7RWxlbWVudCB8IERvY3VtZW50RnJhZ21lbnR9IG5vZGVcbiAgICovXG4gIDtcblxuICBfcHJvdG8uYXBwZW5kID0gZnVuY3Rpb24gYXBwZW5kKG5vZGUpIHtcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxuICAgKiBAcmV0dXJucyB7RWxlbWVudCB8IG51bGx9XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldENoaWxkID0gZnVuY3Rpb24gZ2V0Q2hpbGQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIDtcblxuICBfcHJvdG8uaGFzQ2hpbGRyZW4gPSBmdW5jdGlvbiBoYXNDaGlsZHJlbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lmhhc0NoaWxkTm9kZXMoKTtcbiAgfTtcblxuICBfcHJvdG8uc2Nyb2xsVG9Ub3AgPSBmdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wID0gMDtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50XG4gICAqIEBwYXJhbSB7MSB8IC0xfSBkaXJlY3Rpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2Nyb2xsVG9DaGlsZEVsZW1lbnQgPSBmdW5jdGlvbiBzY3JvbGxUb0NoaWxkRWxlbWVudChlbGVtZW50LCBkaXJlY3Rpb24pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxpc3RIZWlnaHQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0SGVpZ2h0OyAvLyBTY3JvbGwgcG9zaXRpb24gb2YgZHJvcGRvd25cblxuICAgIHZhciBsaXN0U2Nyb2xsUG9zaXRpb24gPSB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wICsgbGlzdEhlaWdodDtcbiAgICB2YXIgZWxlbWVudEhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0OyAvLyBEaXN0YW5jZSBmcm9tIGJvdHRvbSBvZiBlbGVtZW50IHRvIHRvcCBvZiBwYXJlbnRcblxuICAgIHZhciBlbGVtZW50UG9zID0gZWxlbWVudC5vZmZzZXRUb3AgKyBlbGVtZW50SGVpZ2h0OyAvLyBEaWZmZXJlbmNlIGJldHdlZW4gdGhlIGVsZW1lbnQgYW5kIHNjcm9sbCBwb3NpdGlvblxuXG4gICAgdmFyIGRlc3RpbmF0aW9uID0gZGlyZWN0aW9uID4gMCA/IHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgKyBlbGVtZW50UG9zIC0gbGlzdFNjcm9sbFBvc2l0aW9uIDogZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLl9hbmltYXRlU2Nyb2xsKGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsUG9zXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aFxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVzdGluYXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8uX3Njcm9sbERvd24gPSBmdW5jdGlvbiBfc2Nyb2xsRG93bihzY3JvbGxQb3MsIHN0cmVuZ3RoLCBkZXN0aW5hdGlvbikge1xuICAgIHZhciBlYXNpbmcgPSAoZGVzdGluYXRpb24gLSBzY3JvbGxQb3MpIC8gc3RyZW5ndGg7XG4gICAgdmFyIGRpc3RhbmNlID0gZWFzaW5nID4gMSA/IGVhc2luZyA6IDE7XG4gICAgdGhpcy5lbGVtZW50LnNjcm9sbFRvcCA9IHNjcm9sbFBvcyArIGRpc3RhbmNlO1xuICB9XG4gIC8qKlxuICAgKiBAcGFyYW0ge251bWJlcn0gc2Nyb2xsUG9zXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzdHJlbmd0aFxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVzdGluYXRpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8uX3Njcm9sbFVwID0gZnVuY3Rpb24gX3Njcm9sbFVwKHNjcm9sbFBvcywgc3RyZW5ndGgsIGRlc3RpbmF0aW9uKSB7XG4gICAgdmFyIGVhc2luZyA9IChzY3JvbGxQb3MgLSBkZXN0aW5hdGlvbikgLyBzdHJlbmd0aDtcbiAgICB2YXIgZGlzdGFuY2UgPSBlYXNpbmcgPiAxID8gZWFzaW5nIDogMTtcbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zIC0gZGlzdGFuY2U7XG4gIH1cbiAgLyoqXG4gICAqIEBwYXJhbSB7Kn0gZGVzdGluYXRpb25cbiAgICogQHBhcmFtIHsqfSBkaXJlY3Rpb25cbiAgICovXG4gIDtcblxuICBfcHJvdG8uX2FuaW1hdGVTY3JvbGwgPSBmdW5jdGlvbiBfYW5pbWF0ZVNjcm9sbChkZXN0aW5hdGlvbiwgZGlyZWN0aW9uKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICB2YXIgc3RyZW5ndGggPSBTQ1JPTExJTkdfU1BFRUQ7XG4gICAgdmFyIGNob2ljZUxpc3RTY3JvbGxUb3AgPSB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgIHZhciBjb250aW51ZUFuaW1hdGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA+IDApIHtcbiAgICAgIHRoaXMuX3Njcm9sbERvd24oY2hvaWNlTGlzdFNjcm9sbFRvcCwgc3RyZW5ndGgsIGRlc3RpbmF0aW9uKTtcblxuICAgICAgaWYgKGNob2ljZUxpc3RTY3JvbGxUb3AgPCBkZXN0aW5hdGlvbikge1xuICAgICAgICBjb250aW51ZUFuaW1hdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Njcm9sbFVwKGNob2ljZUxpc3RTY3JvbGxUb3AsIHN0cmVuZ3RoLCBkZXN0aW5hdGlvbik7XG5cbiAgICAgIGlmIChjaG9pY2VMaXN0U2Nyb2xsVG9wID4gZGVzdGluYXRpb24pIHtcbiAgICAgICAgY29udGludWVBbmltYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250aW51ZUFuaW1hdGlvbikge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMyLl9hbmltYXRlU2Nyb2xsKGRlc3RpbmF0aW9uLCBkaXJlY3Rpb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBMaXN0O1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy93cmFwcGVkLWVsZW1lbnQuanNcbmZ1bmN0aW9uIHdyYXBwZWRfZWxlbWVudF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH1cblxuZnVuY3Rpb24gd3JhcHBlZF9lbGVtZW50X2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgd3JhcHBlZF9lbGVtZW50X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSB3cmFwcGVkX2VsZW1lbnRfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH1cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5wYXNzZWRFbGVtZW50fSBwYXNzZWRFbGVtZW50XG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2xhc3NOYW1lc30gQ2xhc3NOYW1lc1xuICovXG5cbnZhciB3cmFwcGVkX2VsZW1lbnRfV3JhcHBlZEVsZW1lbnQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHt7XG4gICAqICBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnQsXG4gICAqICBjbGFzc05hbWVzOiBDbGFzc05hbWVzLFxuICAgKiB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBXcmFwcGVkRWxlbWVudChfcmVmKSB7XG4gICAgdmFyIGVsZW1lbnQgPSBfcmVmLmVsZW1lbnQsXG4gICAgICAgIGNsYXNzTmFtZXMgPSBfcmVmLmNsYXNzTmFtZXM7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXG4gICAgaWYgKCEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpICYmICEoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBlbGVtZW50IHBhc3NlZCcpO1xuICAgIH1cblxuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFdyYXBwZWRFbGVtZW50LnByb3RvdHlwZTtcblxuICBfcHJvdG8uY29uY2VhbCA9IGZ1bmN0aW9uIGNvbmNlYWwoKSB7XG4gICAgLy8gSGlkZSBwYXNzZWQgaW5wdXRcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZXMuaW5wdXQpO1xuICAgIHRoaXMuZWxlbWVudC5oaWRkZW4gPSB0cnVlOyAvLyBSZW1vdmUgZWxlbWVudCBmcm9tIHRhYiBpbmRleFxuXG4gICAgdGhpcy5lbGVtZW50LnRhYkluZGV4ID0gLTE7IC8vIEJhY2t1cCBvcmlnaW5hbCBzdHlsZXMgaWYgYW55XG5cbiAgICB2YXIgb3JpZ1N0eWxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcblxuICAgIGlmIChvcmlnU3R5bGUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlLW9yaWctc3R5bGUnLCBvcmlnU3R5bGUpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlJywgJ2FjdGl2ZScpO1xuICB9O1xuXG4gIF9wcm90by5yZXZlYWwgPSBmdW5jdGlvbiByZXZlYWwoKSB7XG4gICAgLy8gUmVpbnN0YXRlIHBhc3NlZCBlbGVtZW50XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWVzLmlucHV0KTtcbiAgICB0aGlzLmVsZW1lbnQuaGlkZGVuID0gZmFsc2U7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTsgLy8gUmVjb3ZlciBvcmlnaW5hbCBzdHlsZXMgaWYgYW55XG5cbiAgICB2YXIgb3JpZ1N0eWxlID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1jaG9pY2Utb3JpZy1zdHlsZScpO1xuXG4gICAgaWYgKG9yaWdTdHlsZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jaG9pY2Utb3JpZy1zdHlsZScpO1xuICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBvcmlnU3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIH1cblxuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtY2hvaWNlJyk7IC8vIFJlLWFzc2lnbiB2YWx1ZXMgLSB0aGlzIGlzIHdlaXJkLCBJIGtub3dcbiAgICAvLyBAdG9kbyBGaWd1cmUgb3V0IHdoeSB3ZSBuZWVkIHRvIGRvIHRoaXNcblxuICAgIHRoaXMuZWxlbWVudC52YWx1ZSA9IHRoaXMuZWxlbWVudC52YWx1ZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zZWxmLWFzc2lnblxuICB9O1xuXG4gIF9wcm90by5lbmFibGUgPSBmdW5jdGlvbiBlbmFibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICB0aGlzLmVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uZGlzYWJsZSA9IGZ1bmN0aW9uIGRpc2FibGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCAnJyk7XG4gICAgdGhpcy5lbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB0cnVlO1xuICB9O1xuXG4gIF9wcm90by50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiB0cmlnZ2VyRXZlbnQoZXZlbnRUeXBlLCBkYXRhKSB7XG4gICAgZGlzcGF0Y2hFdmVudCh0aGlzLmVsZW1lbnQsIGV2ZW50VHlwZSwgZGF0YSk7XG4gIH07XG5cbiAgd3JhcHBlZF9lbGVtZW50X2NyZWF0ZUNsYXNzKFdyYXBwZWRFbGVtZW50LCBbe1xuICAgIGtleTogXCJpc0FjdGl2ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5kYXRhc2V0LmNob2ljZSA9PT0gJ2FjdGl2ZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImRpclwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5kaXI7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgIC8vIHlvdSBtdXN0IGRlZmluZSBzZXR0ZXIgaGVyZSBvdGhlcndpc2UgaXQgd2lsbCBiZSByZWFkb25seSBwcm9wZXJ0eVxuICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdyYXBwZWRFbGVtZW50O1xufSgpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy93cmFwcGVkLWlucHV0LmpzXG5mdW5jdGlvbiB3cmFwcGVkX2lucHV0X2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiB3cmFwcGVkX2lucHV0X2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgd3JhcHBlZF9pbnB1dF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgd3JhcHBlZF9pbnB1dF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuXG4vKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5DbGFzc05hbWVzfSBDbGFzc05hbWVzXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbX0gSXRlbVxuICovXG5cbnZhciBXcmFwcGVkSW5wdXQgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9XcmFwcGVkRWxlbWVudCkge1xuICBfaW5oZXJpdHNMb29zZShXcmFwcGVkSW5wdXQsIF9XcmFwcGVkRWxlbWVudCk7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7e1xuICAgKiAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCxcbiAgICogIGNsYXNzTmFtZXM6IENsYXNzTmFtZXMsXG4gICAqICBkZWxpbWl0ZXI6IHN0cmluZ1xuICAgKiB9fSBhcmdzXG4gICAqL1xuICBmdW5jdGlvbiBXcmFwcGVkSW5wdXQoX3JlZikge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzID0gX3JlZi5jbGFzc05hbWVzLFxuICAgICAgICBkZWxpbWl0ZXIgPSBfcmVmLmRlbGltaXRlcjtcbiAgICBfdGhpcyA9IF9XcmFwcGVkRWxlbWVudC5jYWxsKHRoaXMsIHtcbiAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICBjbGFzc05hbWVzOiBjbGFzc05hbWVzXG4gICAgfSkgfHwgdGhpcztcbiAgICBfdGhpcy5kZWxpbWl0ZXIgPSBkZWxpbWl0ZXI7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG4gIC8qKlxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cblxuXG4gIHdyYXBwZWRfaW5wdXRfY3JlYXRlQ2xhc3MoV3JhcHBlZElucHV0LCBbe1xuICAgIGtleTogXCJ2YWx1ZVwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtJdGVtW119IGl0ZW1zXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KGl0ZW1zKSB7XG4gICAgICB2YXIgaXRlbVZhbHVlcyA9IGl0ZW1zLm1hcChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGpvaW5lZFZhbHVlcyA9IGl0ZW1WYWx1ZXMuam9pbih0aGlzLmRlbGltaXRlcik7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGpvaW5lZFZhbHVlcyk7XG4gICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSBqb2luZWRWYWx1ZXM7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFdyYXBwZWRJbnB1dDtcbn0od3JhcHBlZF9lbGVtZW50X1dyYXBwZWRFbGVtZW50KTtcblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvd3JhcHBlZC1zZWxlY3QuanNcbmZ1bmN0aW9uIHdyYXBwZWRfc2VsZWN0X2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiB3cmFwcGVkX3NlbGVjdF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIHdyYXBwZWRfc2VsZWN0X2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSB3cmFwcGVkX3NlbGVjdF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5mdW5jdGlvbiB3cmFwcGVkX3NlbGVjdF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5cbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5JdGVtfSBJdGVtXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2hvaWNlfSBDaG9pY2VcbiAqL1xuXG52YXIgV3JhcHBlZFNlbGVjdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1dyYXBwZWRFbGVtZW50KSB7XG4gIHdyYXBwZWRfc2VsZWN0X2luaGVyaXRzTG9vc2UoV3JhcHBlZFNlbGVjdCwgX1dyYXBwZWRFbGVtZW50KTtcblxuICAvKipcbiAgICogQHBhcmFtIHt7XG4gICAqICBlbGVtZW50OiBIVE1MU2VsZWN0RWxlbWVudCxcbiAgICogIGNsYXNzTmFtZXM6IENsYXNzTmFtZXMsXG4gICAqICBkZWxpbWl0ZXI6IHN0cmluZ1xuICAgKiAgdGVtcGxhdGU6IGZ1bmN0aW9uXG4gICAqIH19IGFyZ3NcbiAgICovXG4gIGZ1bmN0aW9uIFdyYXBwZWRTZWxlY3QoX3JlZikge1xuICAgIHZhciBfdGhpcztcblxuICAgIHZhciBlbGVtZW50ID0gX3JlZi5lbGVtZW50LFxuICAgICAgICBjbGFzc05hbWVzID0gX3JlZi5jbGFzc05hbWVzLFxuICAgICAgICB0ZW1wbGF0ZSA9IF9yZWYudGVtcGxhdGU7XG4gICAgX3RoaXMgPSBfV3JhcHBlZEVsZW1lbnQuY2FsbCh0aGlzLCB7XG4gICAgICBlbGVtZW50OiBlbGVtZW50LFxuICAgICAgY2xhc3NOYW1lczogY2xhc3NOYW1lc1xuICAgIH0pIHx8IHRoaXM7XG4gICAgX3RoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gV3JhcHBlZFNlbGVjdC5wcm90b3R5cGU7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7RG9jdW1lbnRGcmFnbWVudH0gZnJhZ21lbnRcbiAgICovXG4gIF9wcm90by5hcHBlbmREb2NGcmFnbWVudCA9IGZ1bmN0aW9uIGFwcGVuZERvY0ZyYWdtZW50KGZyYWdtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gIH07XG5cbiAgd3JhcHBlZF9zZWxlY3RfY3JlYXRlQ2xhc3MoV3JhcHBlZFNlbGVjdCwgW3tcbiAgICBrZXk6IFwicGxhY2Vob2xkZXJPcHRpb25cIixcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcignb3B0aW9uW3ZhbHVlPVwiXCJdJykgfHwgLy8gQmFja3dhcmQgY29tcGF0aWJpbGl0eSBsYXllciBmb3IgdGhlIG5vbi1zdGFuZGFyZCBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgc3VwcG9ydGVkIGluIG9sZGVyIHZlcnNpb25zLlxuICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ29wdGlvbltwbGFjZWhvbGRlcl0nKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0VsZW1lbnRbXX1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcIm9wdGlvbkdyb3Vwc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdPUFRHUk9VUCcpKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge0l0ZW1bXSB8IENob2ljZVtdfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6IFwib3B0aW9uc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50Lm9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0l0ZW1bXSB8IENob2ljZVtdfSBvcHRpb25zXG4gICAgICovXG4gICAgLFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG9wdGlvbnMpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgIHZhciBhZGRPcHRpb25Ub0ZyYWdtZW50ID0gZnVuY3Rpb24gYWRkT3B0aW9uVG9GcmFnbWVudChkYXRhKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIHN0YW5kYXJkIHNlbGVjdCBvcHRpb25cbiAgICAgICAgdmFyIG9wdGlvbiA9IF90aGlzMi50ZW1wbGF0ZShkYXRhKTsgLy8gQXBwZW5kIGl0IHRvIGZyYWdtZW50XG5cblxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgfTsgLy8gQWRkIGVhY2ggbGlzdCBpdGVtIHRvIGxpc3RcblxuXG4gICAgICBvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG9wdGlvbkRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGFkZE9wdGlvblRvRnJhZ21lbnQob3B0aW9uRGF0YSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYXBwZW5kRG9jRnJhZ21lbnQoZnJhZ21lbnQpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBXcmFwcGVkU2VsZWN0O1xufSh3cmFwcGVkX2VsZW1lbnRfV3JhcHBlZEVsZW1lbnQpO1xuXG5cbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9pbmRleC5qc1xuXG5cblxuXG5cblxuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL3RlbXBsYXRlcy5qc1xuLyoqXG4gKiBIZWxwZXJzIHRvIGNyZWF0ZSBIVE1MIGVsZW1lbnRzIHVzZWQgYnkgQ2hvaWNlc1xuICogQ2FuIGJlIG92ZXJyaWRkZW4gYnkgcHJvdmlkaW5nIGBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzYCBvcHRpb25cbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5UZW1wbGF0ZXN9IFRlbXBsYXRlc1xuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNsYXNzTmFtZXN9IENsYXNzTmFtZXNcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJy4uLy4uL3R5cGVzL2luZGV4JykuQ2hvaWNlcy5PcHRpb25zfSBPcHRpb25zXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbX0gSXRlbVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuR3JvdXB9IEdyb3VwXG4gKi9cbnZhciBURU1QTEFURVMgPVxuLyoqIEB0eXBlIHtUZW1wbGF0ZXN9ICovXG57XG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtcImx0clwiIHwgXCJydGxcIiB8IFwiYXV0b1wifSBkaXJcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NlbGVjdEVsZW1lbnRcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1NlbGVjdE9uZUVsZW1lbnRcbiAgICogQHBhcmFtIHtib29sZWFufSBzZWFyY2hFbmFibGVkXG4gICAqIEBwYXJhbSB7XCJzZWxlY3Qtb25lXCIgfCBcInNlbGVjdC1tdWx0aXBsZVwiIHwgXCJ0ZXh0XCJ9IHBhc3NlZEVsZW1lbnRUeXBlXG4gICAqL1xuICBjb250YWluZXJPdXRlcjogZnVuY3Rpb24gY29udGFpbmVyT3V0ZXIoX3JlZiwgZGlyLCBpc1NlbGVjdEVsZW1lbnQsIGlzU2VsZWN0T25lRWxlbWVudCwgc2VhcmNoRW5hYmxlZCwgcGFzc2VkRWxlbWVudFR5cGUpIHtcbiAgICB2YXIgX2NvbnRhaW5lck91dGVyID0gX3JlZi5jb250YWluZXJPdXRlcjtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBfY29udGFpbmVyT3V0ZXJcbiAgICB9KTtcbiAgICBkaXYuZGF0YXNldC50eXBlID0gcGFzc2VkRWxlbWVudFR5cGU7XG5cbiAgICBpZiAoZGlyKSB7XG4gICAgICBkaXYuZGlyID0gZGlyO1xuICAgIH1cblxuICAgIGlmIChpc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIGRpdi50YWJJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKGlzU2VsZWN0RWxlbWVudCkge1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgncm9sZScsIHNlYXJjaEVuYWJsZWQgPyAnY29tYm9ib3gnIDogJ2xpc3Rib3gnKTtcblxuICAgICAgaWYgKHNlYXJjaEVuYWJsZWQpIHtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1hdXRvY29tcGxldGUnLCAnbGlzdCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGFzcG9wdXAnLCAndHJ1ZScpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICovXG4gIGNvbnRhaW5lcklubmVyOiBmdW5jdGlvbiBjb250YWluZXJJbm5lcihfcmVmMikge1xuICAgIHZhciBfY29udGFpbmVySW5uZXIgPSBfcmVmMi5jb250YWluZXJJbm5lcjtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBfY29udGFpbmVySW5uZXJcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RPbmVFbGVtZW50XG4gICAqL1xuICBpdGVtTGlzdDogZnVuY3Rpb24gaXRlbUxpc3QoX3JlZjMsIGlzU2VsZWN0T25lRWxlbWVudCkge1xuICAgIHZhciBsaXN0ID0gX3JlZjMubGlzdCxcbiAgICAgICAgbGlzdFNpbmdsZSA9IF9yZWYzLmxpc3RTaW5nbGUsXG4gICAgICAgIGxpc3RJdGVtcyA9IF9yZWYzLmxpc3RJdGVtcztcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBsaXN0ICsgXCIgXCIgKyAoaXNTZWxlY3RPbmVFbGVtZW50ID8gbGlzdFNpbmdsZSA6IGxpc3RJdGVtcylcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IGZ1bmN0aW9uIHBsYWNlaG9sZGVyKF9yZWY0LCB2YWx1ZSkge1xuICAgIHZhciBfcGxhY2Vob2xkZXIgPSBfcmVmNC5wbGFjZWhvbGRlcjtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBfcGxhY2Vob2xkZXIsXG4gICAgICBpbm5lckhUTUw6IHZhbHVlXG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge0l0ZW19IGl0ZW1cbiAgICogQHBhcmFtIHtib29sZWFufSByZW1vdmVJdGVtQnV0dG9uXG4gICAqL1xuICBpdGVtOiBmdW5jdGlvbiBpdGVtKF9yZWY1LCBfcmVmNiwgcmVtb3ZlSXRlbUJ1dHRvbikge1xuICAgIHZhciBfaXRlbSA9IF9yZWY1Lml0ZW0sXG4gICAgICAgIGJ1dHRvbiA9IF9yZWY1LmJ1dHRvbixcbiAgICAgICAgaGlnaGxpZ2h0ZWRTdGF0ZSA9IF9yZWY1LmhpZ2hsaWdodGVkU3RhdGUsXG4gICAgICAgIGl0ZW1TZWxlY3RhYmxlID0gX3JlZjUuaXRlbVNlbGVjdGFibGUsXG4gICAgICAgIHBsYWNlaG9sZGVyID0gX3JlZjUucGxhY2Vob2xkZXI7XG4gICAgdmFyIGlkID0gX3JlZjYuaWQsXG4gICAgICAgIHZhbHVlID0gX3JlZjYudmFsdWUsXG4gICAgICAgIGxhYmVsID0gX3JlZjYubGFiZWwsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBfcmVmNi5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICBhY3RpdmUgPSBfcmVmNi5hY3RpdmUsXG4gICAgICAgIGRpc2FibGVkID0gX3JlZjYuZGlzYWJsZWQsXG4gICAgICAgIGhpZ2hsaWdodGVkID0gX3JlZjYuaGlnaGxpZ2h0ZWQsXG4gICAgICAgIGlzUGxhY2Vob2xkZXIgPSBfcmVmNi5wbGFjZWhvbGRlcjtcbiAgICB2YXIgZGl2ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSwge1xuICAgICAgY2xhc3NOYW1lOiBfaXRlbSxcbiAgICAgIGlubmVySFRNTDogbGFiZWxcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGRpdi5kYXRhc2V0LCB7XG4gICAgICBpdGVtOiAnJyxcbiAgICAgIGlkOiBpZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXNcbiAgICB9KTtcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgaWYgKGlzUGxhY2Vob2xkZXIpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHBsYWNlaG9sZGVyKTtcbiAgICB9XG5cbiAgICBkaXYuY2xhc3NMaXN0LmFkZChoaWdobGlnaHRlZCA/IGhpZ2hsaWdodGVkU3RhdGUgOiBpdGVtU2VsZWN0YWJsZSk7XG5cbiAgICBpZiAocmVtb3ZlSXRlbUJ1dHRvbikge1xuICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKGl0ZW1TZWxlY3RhYmxlKTtcbiAgICAgIH1cblxuICAgICAgZGl2LmRhdGFzZXQuZGVsZXRhYmxlID0gJyc7XG4gICAgICAvKiogQHRvZG8gVGhpcyBNVVNUIGJlIGxvY2FsaXphYmxlLCBub3QgaGFyZGNvZGVkISAqL1xuXG4gICAgICB2YXIgUkVNT1ZFX0lURU1fVEVYVCA9ICdSZW1vdmUgaXRlbSc7XG4gICAgICB2YXIgcmVtb3ZlQnV0dG9uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSwge1xuICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgY2xhc3NOYW1lOiBidXR0b24sXG4gICAgICAgIGlubmVySFRNTDogUkVNT1ZFX0lURU1fVEVYVFxuICAgICAgfSk7XG4gICAgICByZW1vdmVCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgUkVNT1ZFX0lURU1fVEVYVCArIFwiOiAnXCIgKyB2YWx1ZSArIFwiJ1wiKTtcbiAgICAgIHJlbW92ZUJ1dHRvbi5kYXRhc2V0LmJ1dHRvbiA9ICcnO1xuICAgICAgZGl2LmFwcGVuZENoaWxkKHJlbW92ZUJ1dHRvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRpdjtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtQYXJ0aWFsPENsYXNzTmFtZXM+fSBjbGFzc05hbWVzXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTZWxlY3RPbmVFbGVtZW50XG4gICAqL1xuICBjaG9pY2VMaXN0OiBmdW5jdGlvbiBjaG9pY2VMaXN0KF9yZWY3LCBpc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICB2YXIgbGlzdCA9IF9yZWY3Lmxpc3Q7XG4gICAgdmFyIGRpdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogbGlzdFxuICAgIH0pO1xuXG4gICAgaWYgKCFpc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICBkaXYuc2V0QXR0cmlidXRlKCdyb2xlJywgJ2xpc3Rib3gnKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtHcm91cH0gZ3JvdXBcbiAgICovXG4gIGNob2ljZUdyb3VwOiBmdW5jdGlvbiBjaG9pY2VHcm91cChfcmVmOCwgX3JlZjkpIHtcbiAgICB2YXIgZ3JvdXAgPSBfcmVmOC5ncm91cCxcbiAgICAgICAgZ3JvdXBIZWFkaW5nID0gX3JlZjguZ3JvdXBIZWFkaW5nLFxuICAgICAgICBpdGVtRGlzYWJsZWQgPSBfcmVmOC5pdGVtRGlzYWJsZWQ7XG4gICAgdmFyIGlkID0gX3JlZjkuaWQsXG4gICAgICAgIHZhbHVlID0gX3JlZjkudmFsdWUsXG4gICAgICAgIGRpc2FibGVkID0gX3JlZjkuZGlzYWJsZWQ7XG4gICAgdmFyIGRpdiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogZ3JvdXAgKyBcIiBcIiArIChkaXNhYmxlZCA/IGl0ZW1EaXNhYmxlZCA6ICcnKVxuICAgIH0pO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZ3JvdXAnKTtcbiAgICBPYmplY3QuYXNzaWduKGRpdi5kYXRhc2V0LCB7XG4gICAgICBncm91cDogJycsXG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogdmFsdWVcbiAgICB9KTtcblxuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfVxuXG4gICAgZGl2LmFwcGVuZENoaWxkKE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIHtcbiAgICAgIGNsYXNzTmFtZTogZ3JvdXBIZWFkaW5nLFxuICAgICAgaW5uZXJIVE1MOiB2YWx1ZVxuICAgIH0pKTtcbiAgICByZXR1cm4gZGl2O1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtDaG9pY2V9IGNob2ljZVxuICAgKiBAcGFyYW0ge09wdGlvbnNbJ2l0ZW1TZWxlY3RUZXh0J119IHNlbGVjdFRleHRcbiAgICovXG4gIGNob2ljZTogZnVuY3Rpb24gY2hvaWNlKF9yZWYxMCwgX3JlZjExLCBzZWxlY3RUZXh0KSB7XG4gICAgdmFyIGl0ZW0gPSBfcmVmMTAuaXRlbSxcbiAgICAgICAgaXRlbUNob2ljZSA9IF9yZWYxMC5pdGVtQ2hvaWNlLFxuICAgICAgICBpdGVtU2VsZWN0YWJsZSA9IF9yZWYxMC5pdGVtU2VsZWN0YWJsZSxcbiAgICAgICAgc2VsZWN0ZWRTdGF0ZSA9IF9yZWYxMC5zZWxlY3RlZFN0YXRlLFxuICAgICAgICBpdGVtRGlzYWJsZWQgPSBfcmVmMTAuaXRlbURpc2FibGVkLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWYxMC5wbGFjZWhvbGRlcjtcbiAgICB2YXIgaWQgPSBfcmVmMTEuaWQsXG4gICAgICAgIHZhbHVlID0gX3JlZjExLnZhbHVlLFxuICAgICAgICBsYWJlbCA9IF9yZWYxMS5sYWJlbCxcbiAgICAgICAgZ3JvdXBJZCA9IF9yZWYxMS5ncm91cElkLFxuICAgICAgICBlbGVtZW50SWQgPSBfcmVmMTEuZWxlbWVudElkLFxuICAgICAgICBpc0Rpc2FibGVkID0gX3JlZjExLmRpc2FibGVkLFxuICAgICAgICBpc1NlbGVjdGVkID0gX3JlZjExLnNlbGVjdGVkLFxuICAgICAgICBpc1BsYWNlaG9sZGVyID0gX3JlZjExLnBsYWNlaG9sZGVyO1xuICAgIHZhciBkaXYgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBpZDogZWxlbWVudElkLFxuICAgICAgaW5uZXJIVE1MOiBsYWJlbCxcbiAgICAgIGNsYXNzTmFtZTogaXRlbSArIFwiIFwiICsgaXRlbUNob2ljZVxuICAgIH0pO1xuXG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKHNlbGVjdGVkU3RhdGUpO1xuICAgIH1cblxuICAgIGlmIChpc1BsYWNlaG9sZGVyKSB7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChwbGFjZWhvbGRlcik7XG4gICAgfVxuXG4gICAgZGl2LnNldEF0dHJpYnV0ZSgncm9sZScsIGdyb3VwSWQgPiAwID8gJ3RyZWVpdGVtJyA6ICdvcHRpb24nKTtcbiAgICBPYmplY3QuYXNzaWduKGRpdi5kYXRhc2V0LCB7XG4gICAgICBjaG9pY2U6ICcnLFxuICAgICAgaWQ6IGlkLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgc2VsZWN0VGV4dDogc2VsZWN0VGV4dFxuICAgIH0pO1xuXG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGl0ZW1EaXNhYmxlZCk7XG4gICAgICBkaXYuZGF0YXNldC5jaG9pY2VEaXNhYmxlZCA9ICcnO1xuICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGl0ZW1TZWxlY3RhYmxlKTtcbiAgICAgIGRpdi5kYXRhc2V0LmNob2ljZVNlbGVjdGFibGUgPSAnJztcbiAgICB9XG5cbiAgICByZXR1cm4gZGl2O1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q2xhc3NOYW1lcz59IGNsYXNzTmFtZXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBsYWNlaG9sZGVyVmFsdWVcbiAgICovXG4gIGlucHV0OiBmdW5jdGlvbiBpbnB1dChfcmVmMTIsIHBsYWNlaG9sZGVyVmFsdWUpIHtcbiAgICB2YXIgX2lucHV0ID0gX3JlZjEyLmlucHV0LFxuICAgICAgICBpbnB1dENsb25lZCA9IF9yZWYxMi5pbnB1dENsb25lZDtcbiAgICB2YXIgaW5wID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpLCB7XG4gICAgICB0eXBlOiAndGV4dCcsXG4gICAgICBjbGFzc05hbWU6IF9pbnB1dCArIFwiIFwiICsgaW5wdXRDbG9uZWQsXG4gICAgICBhdXRvY29tcGxldGU6ICdvZmYnLFxuICAgICAgYXV0b2NhcGl0YWxpemU6ICdvZmYnLFxuICAgICAgc3BlbGxjaGVjazogZmFsc2VcbiAgICB9KTtcbiAgICBpbnAuc2V0QXR0cmlidXRlKCdyb2xlJywgJ3RleHRib3gnKTtcbiAgICBpbnAuc2V0QXR0cmlidXRlKCdhcmlhLWF1dG9jb21wbGV0ZScsICdsaXN0Jyk7XG4gICAgaW5wLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBsYWNlaG9sZGVyVmFsdWUpO1xuICAgIHJldHVybiBpbnA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKi9cbiAgZHJvcGRvd246IGZ1bmN0aW9uIGRyb3Bkb3duKF9yZWYxMykge1xuICAgIHZhciBsaXN0ID0gX3JlZjEzLmxpc3QsXG4gICAgICAgIGxpc3REcm9wZG93biA9IF9yZWYxMy5saXN0RHJvcGRvd247XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGxpc3QsIGxpc3REcm9wZG93bik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIHJldHVybiBkaXY7XG4gIH0sXG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7UGFydGlhbDxDbGFzc05hbWVzPn0gY2xhc3NOYW1lc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gaW5uZXJIVE1MXG4gICAqIEBwYXJhbSB7XCJuby1jaG9pY2VzXCIgfCBcIm5vLXJlc3VsdHNcIiB8IFwiXCJ9IHR5cGVcbiAgICovXG4gIG5vdGljZTogZnVuY3Rpb24gbm90aWNlKF9yZWYxNCwgaW5uZXJIVE1MLCB0eXBlKSB7XG4gICAgdmFyIGl0ZW0gPSBfcmVmMTQuaXRlbSxcbiAgICAgICAgaXRlbUNob2ljZSA9IF9yZWYxNC5pdGVtQ2hvaWNlLFxuICAgICAgICBub1Jlc3VsdHMgPSBfcmVmMTQubm9SZXN1bHRzLFxuICAgICAgICBub0Nob2ljZXMgPSBfcmVmMTQubm9DaG9pY2VzO1xuXG4gICAgaWYgKHR5cGUgPT09IHZvaWQgMCkge1xuICAgICAgdHlwZSA9ICcnO1xuICAgIH1cblxuICAgIHZhciBjbGFzc2VzID0gW2l0ZW0sIGl0ZW1DaG9pY2VdO1xuXG4gICAgaWYgKHR5cGUgPT09ICduby1jaG9pY2VzJykge1xuICAgICAgY2xhc3Nlcy5wdXNoKG5vQ2hvaWNlcyk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbm8tcmVzdWx0cycpIHtcbiAgICAgIGNsYXNzZXMucHVzaChub1Jlc3VsdHMpO1xuICAgIH1cblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpLCB7XG4gICAgICBpbm5lckhUTUw6IGlubmVySFRNTCxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5qb2luKCcgJylcbiAgICB9KTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtJdGVtfSBvcHRpb25cbiAgICovXG4gIG9wdGlvbjogZnVuY3Rpb24gb3B0aW9uKF9yZWYxNSkge1xuICAgIHZhciBsYWJlbCA9IF9yZWYxNS5sYWJlbCxcbiAgICAgICAgdmFsdWUgPSBfcmVmMTUudmFsdWUsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBfcmVmMTUuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgYWN0aXZlID0gX3JlZjE1LmFjdGl2ZSxcbiAgICAgICAgZGlzYWJsZWQgPSBfcmVmMTUuZGlzYWJsZWQ7XG4gICAgdmFyIG9wdCA9IG5ldyBPcHRpb24obGFiZWwsIHZhbHVlLCBmYWxzZSwgYWN0aXZlKTtcblxuICAgIGlmIChjdXN0b21Qcm9wZXJ0aWVzKSB7XG4gICAgICBvcHQuZGF0YXNldC5jdXN0b21Qcm9wZXJ0aWVzID0gY3VzdG9tUHJvcGVydGllcztcbiAgICB9XG5cbiAgICBvcHQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICByZXR1cm4gb3B0O1xuICB9XG59O1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyB2YXIgdGVtcGxhdGVzID0gKFRFTVBMQVRFUyk7XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2FjdGlvbnMvY2hvaWNlcy5qc1xuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdyZWR1eCcpLkFjdGlvbn0gQWN0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuQ2hvaWNlfSBDaG9pY2VcbiAqL1xuXG4vKipcbiAqIEBhcmd1bWVudCB7Q2hvaWNlfSBjaG9pY2VcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiBDaG9pY2V9XG4gKi9cblxudmFyIGNob2ljZXNfYWRkQ2hvaWNlID0gZnVuY3Rpb24gYWRkQ2hvaWNlKF9yZWYpIHtcbiAgdmFyIHZhbHVlID0gX3JlZi52YWx1ZSxcbiAgICAgIGxhYmVsID0gX3JlZi5sYWJlbCxcbiAgICAgIGlkID0gX3JlZi5pZCxcbiAgICAgIGdyb3VwSWQgPSBfcmVmLmdyb3VwSWQsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBlbGVtZW50SWQgPSBfcmVmLmVsZW1lbnRJZCxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBfcmVmLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBwbGFjZWhvbGRlciA9IF9yZWYucGxhY2Vob2xkZXIsXG4gICAgICBrZXlDb2RlID0gX3JlZi5rZXlDb2RlO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5BRERfQ0hPSUNFLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgaWQ6IGlkLFxuICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgIGVsZW1lbnRJZDogZWxlbWVudElkLFxuICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIGtleUNvZGU6IGtleUNvZGVcbiAgfTtcbn07XG4vKipcbiAqIEBhcmd1bWVudCB7Q2hvaWNlW119IHJlc3VsdHNcbiAqIEByZXR1cm5zIHtBY3Rpb24gJiB7IHJlc3VsdHM6IENob2ljZVtdIH19XG4gKi9cblxudmFyIGNob2ljZXNfZmlsdGVyQ2hvaWNlcyA9IGZ1bmN0aW9uIGZpbHRlckNob2ljZXMocmVzdWx0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5GSUxURVJfQ0hPSUNFUyxcbiAgICByZXN1bHRzOiByZXN1bHRzXG4gIH07XG59O1xuLyoqXG4gKiBAYXJndW1lbnQge2Jvb2xlYW59IGFjdGl2ZVxuICogQHJldHVybnMge0FjdGlvbiAmIHsgYWN0aXZlOiBib29sZWFuIH19XG4gKi9cblxudmFyIGNob2ljZXNfYWN0aXZhdGVDaG9pY2VzID0gZnVuY3Rpb24gYWN0aXZhdGVDaG9pY2VzKGFjdGl2ZSkge1xuICBpZiAoYWN0aXZlID09PSB2b2lkIDApIHtcbiAgICBhY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuQUNUSVZBVEVfQ0hPSUNFUyxcbiAgICBhY3RpdmU6IGFjdGl2ZVxuICB9O1xufTtcbi8qKlxuICogQHJldHVybnMge0FjdGlvbn1cbiAqL1xuXG52YXIgY2hvaWNlc19jbGVhckNob2ljZXMgPSBmdW5jdGlvbiBjbGVhckNob2ljZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogQUNUSU9OX1RZUEVTLkNMRUFSX0NIT0lDRVNcbiAgfTtcbn07XG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL3NyYy9zY3JpcHRzL2FjdGlvbnMvaXRlbXMuanNcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdyZWR1eCcpLkFjdGlvbn0gQWN0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbX0gSXRlbVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtJdGVtfSBpdGVtXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgSXRlbX1cbiAqL1xuXG52YXIgaXRlbXNfYWRkSXRlbSA9IGZ1bmN0aW9uIGFkZEl0ZW0oX3JlZikge1xuICB2YXIgdmFsdWUgPSBfcmVmLnZhbHVlLFxuICAgICAgbGFiZWwgPSBfcmVmLmxhYmVsLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgY2hvaWNlSWQgPSBfcmVmLmNob2ljZUlkLFxuICAgICAgZ3JvdXBJZCA9IF9yZWYuZ3JvdXBJZCxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBfcmVmLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBwbGFjZWhvbGRlciA9IF9yZWYucGxhY2Vob2xkZXIsXG4gICAgICBrZXlDb2RlID0gX3JlZi5rZXlDb2RlO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IEFDVElPTl9UWVBFUy5BRERfSVRFTSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIGlkOiBpZCxcbiAgICBjaG9pY2VJZDogY2hvaWNlSWQsXG4gICAgZ3JvdXBJZDogZ3JvdXBJZCxcbiAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICBrZXlDb2RlOiBrZXlDb2RlXG4gIH07XG59O1xuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjaG9pY2VJZFxuICogQHJldHVybnMge0FjdGlvbiAmIHsgaWQ6IHN0cmluZywgY2hvaWNlSWQ6IHN0cmluZyB9fVxuICovXG5cbnZhciBpdGVtc19yZW1vdmVJdGVtID0gZnVuY3Rpb24gcmVtb3ZlSXRlbShpZCwgY2hvaWNlSWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuUkVNT1ZFX0lURU0sXG4gICAgaWQ6IGlkLFxuICAgIGNob2ljZUlkOiBjaG9pY2VJZFxuICB9O1xufTtcbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGhpZ2hsaWdodGVkXG4gKiBAcmV0dXJucyB7QWN0aW9uICYgeyBpZDogc3RyaW5nLCBoaWdobGlnaHRlZDogYm9vbGVhbiB9fVxuICovXG5cbnZhciBpdGVtc19oaWdobGlnaHRJdGVtID0gZnVuY3Rpb24gaGlnaGxpZ2h0SXRlbShpZCwgaGlnaGxpZ2h0ZWQpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuSElHSExJR0hUX0lURU0sXG4gICAgaWQ6IGlkLFxuICAgIGhpZ2hsaWdodGVkOiBoaWdobGlnaHRlZFxuICB9O1xufTtcbi8vIENPTkNBVEVOQVRFRCBNT0RVTEU6IC4vc3JjL3NjcmlwdHMvYWN0aW9ucy9ncm91cHMuanNcblxuLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdyZWR1eCcpLkFjdGlvbn0gQWN0aW9uXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuR3JvdXB9IEdyb3VwXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0dyb3VwfSBncm91cFxuICogQHJldHVybnMge0FjdGlvbiAmIEdyb3VwfVxuICovXG5cbnZhciBncm91cHNfYWRkR3JvdXAgPSBmdW5jdGlvbiBhZGRHcm91cChfcmVmKSB7XG4gIHZhciB2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICBpZCA9IF9yZWYuaWQsXG4gICAgICBhY3RpdmUgPSBfcmVmLmFjdGl2ZSxcbiAgICAgIGRpc2FibGVkID0gX3JlZi5kaXNhYmxlZDtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBBQ1RJT05fVFlQRVMuQUREX0dST1VQLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBpZDogaWQsXG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gIH07XG59O1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9hY3Rpb25zL21pc2MuanNcbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgncmVkdXgnKS5BY3Rpb259IEFjdGlvblxuICovXG5cbi8qKlxuICogQHJldHVybnMge0FjdGlvbn1cbiAqL1xudmFyIGNsZWFyQWxsID0gZnVuY3Rpb24gY2xlYXJBbGwoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0NMRUFSX0FMTCdcbiAgfTtcbn07XG4vKipcbiAqIEBwYXJhbSB7YW55fSBzdGF0ZVxuICogQHJldHVybnMge0FjdGlvbiAmIHsgc3RhdGU6IG9iamVjdCB9fVxuICovXG5cbnZhciByZXNldFRvID0gZnVuY3Rpb24gcmVzZXRUbyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdSRVNFVF9UTycsXG4gICAgc3RhdGU6IHN0YXRlXG4gIH07XG59O1xuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzTG9hZGluZ1xuICogQHJldHVybnMge0FjdGlvbiAmIHsgaXNMb2FkaW5nOiBib29sZWFuIH19XG4gKi9cblxudmFyIHNldElzTG9hZGluZyA9IGZ1bmN0aW9uIHNldElzTG9hZGluZyhpc0xvYWRpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnU0VUX0lTX0xPQURJTkcnLFxuICAgIGlzTG9hZGluZzogaXNMb2FkaW5nXG4gIH07XG59O1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9zcmMvc2NyaXB0cy9jaG9pY2VzLmpzXG5mdW5jdGlvbiBjaG9pY2VzX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBjaG9pY2VzX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgY2hvaWNlc19kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgY2hvaWNlc19kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLyoqIEBzZWUge0BsaW5rIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWFjZWEwNzVkMGFjNjk1NGYyNzVhNzAwMjM5MDYwNTBjfSAqL1xuXG52YXIgSVNfSUUxMSA9ICctbXMtc2Nyb2xsLWxpbWl0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgJy1tcy1pbWUtYWxpZ24nIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZTtcbi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkNob2ljZX0gQ2hvaWNlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCcuLi8uLi90eXBlcy9pbmRleCcpLkNob2ljZXMuSXRlbX0gSXRlbVxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkdyb3VwfSBHcm91cFxuICogQHR5cGVkZWYge2ltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLk9wdGlvbnN9IE9wdGlvbnNcbiAqL1xuXG4vKiogQHR5cGUge1BhcnRpYWw8T3B0aW9ucz59ICovXG5cbnZhciBVU0VSX0RFRkFVTFRTID0ge307XG4vKipcbiAqIENob2ljZXNcbiAqIEBhdXRob3IgSm9zaCBKb2huc29uPGpvc2hAam9zaHVham9obnNvbi5jby51az5cbiAqL1xuXG52YXIgY2hvaWNlc19DaG9pY2VzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgY2hvaWNlc19jcmVhdGVDbGFzcyhDaG9pY2VzLCBudWxsLCBbe1xuICAgIGtleTogXCJkZWZhdWx0c1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7XG4gICAgICAgIGdldCBvcHRpb25zKCkge1xuICAgICAgICAgIHJldHVybiBVU0VSX0RFRkFVTFRTO1xuICAgICAgICB9LFxuXG4gICAgICAgIGdldCB0ZW1wbGF0ZXMoKSB7XG4gICAgICAgICAgcmV0dXJuIFRFTVBMQVRFUztcbiAgICAgICAgfVxuXG4gICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmcgfCBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTFNlbGVjdEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge1BhcnRpYWw8T3B0aW9ucz59IHVzZXJDb25maWdcbiAgICAgKi9cblxuICB9XSk7XG5cbiAgZnVuY3Rpb24gQ2hvaWNlcyhlbGVtZW50LCB1c2VyQ29uZmlnKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmIChlbGVtZW50ID09PSB2b2lkIDApIHtcbiAgICAgIGVsZW1lbnQgPSAnW2RhdGEtY2hvaWNlXSc7XG4gICAgfVxuXG4gICAgaWYgKHVzZXJDb25maWcgPT09IHZvaWQgMCkge1xuICAgICAgdXNlckNvbmZpZyA9IHt9O1xuICAgIH1cblxuICAgIC8qKiBAdHlwZSB7UGFydGlhbDxPcHRpb25zPn0gKi9cbiAgICB0aGlzLmNvbmZpZyA9IGNqc19kZWZhdWx0LmEuYWxsKFtERUZBVUxUX0NPTkZJRywgQ2hvaWNlcy5kZWZhdWx0cy5vcHRpb25zLCB1c2VyQ29uZmlnXSwgLy8gV2hlbiBtZXJnaW5nIGFycmF5IGNvbmZpZ3MsIHJlcGxhY2Ugd2l0aCBhIGNvcHkgb2YgdGhlIHVzZXJDb25maWcgYXJyYXksXG4gICAgLy8gaW5zdGVhZCBvZiBjb25jYXRlbmF0aW5nIHdpdGggdGhlIGRlZmF1bHQgYXJyYXlcbiAgICB7XG4gICAgICBhcnJheU1lcmdlOiBmdW5jdGlvbiBhcnJheU1lcmdlKF8sIHNvdXJjZUFycmF5KSB7XG4gICAgICAgIHJldHVybiBbXS5jb25jYXQoc291cmNlQXJyYXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBpbnZhbGlkQ29uZmlnT3B0aW9ucyA9IGRpZmYodGhpcy5jb25maWcsIERFRkFVTFRfQ09ORklHKTtcblxuICAgIGlmIChpbnZhbGlkQ29uZmlnT3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnNvbGUud2FybignVW5rbm93biBjb25maWcgb3B0aW9uKHMpIHBhc3NlZCcsIGludmFsaWRDb25maWdPcHRpb25zLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIHZhciBwYXNzZWRFbGVtZW50ID0gdHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgICBpZiAoIShwYXNzZWRFbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCBwYXNzZWRFbGVtZW50IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0V4cGVjdGVkIG9uZSBvZiB0aGUgZm9sbG93aW5nIHR5cGVzIHRleHR8c2VsZWN0LW9uZXxzZWxlY3QtbXVsdGlwbGUnKTtcbiAgICB9XG5cbiAgICB0aGlzLl9pc1RleHRFbGVtZW50ID0gcGFzc2VkRWxlbWVudC50eXBlID09PSBURVhUX1RZUEU7XG4gICAgdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50ID0gcGFzc2VkRWxlbWVudC50eXBlID09PSBTRUxFQ1RfT05FX1RZUEU7XG4gICAgdGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQgPSBwYXNzZWRFbGVtZW50LnR5cGUgPT09IFNFTEVDVF9NVUxUSVBMRV9UWVBFO1xuICAgIHRoaXMuX2lzU2VsZWN0RWxlbWVudCA9IHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCB8fCB0aGlzLl9pc1NlbGVjdE11bHRpcGxlRWxlbWVudDtcbiAgICB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkID0gdGhpcy5faXNTZWxlY3RNdWx0aXBsZUVsZW1lbnQgfHwgdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZDtcblxuICAgIGlmICghWydhdXRvJywgJ2Fsd2F5cyddLmluY2x1ZGVzKHRoaXMuY29uZmlnLnJlbmRlclNlbGVjdGVkQ2hvaWNlcykpIHtcbiAgICAgIHRoaXMuY29uZmlnLnJlbmRlclNlbGVjdGVkQ2hvaWNlcyA9ICdhdXRvJztcbiAgICB9XG5cbiAgICBpZiAodXNlckNvbmZpZy5hZGRJdGVtRmlsdGVyICYmIHR5cGVvZiB1c2VyQ29uZmlnLmFkZEl0ZW1GaWx0ZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZhciByZSA9IHVzZXJDb25maWcuYWRkSXRlbUZpbHRlciBpbnN0YW5jZW9mIFJlZ0V4cCA/IHVzZXJDb25maWcuYWRkSXRlbUZpbHRlciA6IG5ldyBSZWdFeHAodXNlckNvbmZpZy5hZGRJdGVtRmlsdGVyKTtcbiAgICAgIHRoaXMuY29uZmlnLmFkZEl0ZW1GaWx0ZXIgPSByZS50ZXN0LmJpbmQocmUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQgPSBuZXcgV3JhcHBlZElucHV0KHtcbiAgICAgICAgZWxlbWVudDogcGFzc2VkRWxlbWVudCxcbiAgICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgICAgZGVsaW1pdGVyOiB0aGlzLmNvbmZpZy5kZWxpbWl0ZXJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQgPSBuZXcgV3JhcHBlZFNlbGVjdCh7XG4gICAgICAgIGVsZW1lbnQ6IHBhc3NlZEVsZW1lbnQsXG4gICAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICAgIHRlbXBsYXRlOiBmdW5jdGlvbiB0ZW1wbGF0ZShkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLl90ZW1wbGF0ZXMub3B0aW9uKGRhdGEpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gZmFsc2U7XG4gICAgdGhpcy5fc3RvcmUgPSBuZXcgc3RvcmVfU3RvcmUoKTtcbiAgICB0aGlzLl9pbml0aWFsU3RhdGUgPSB7fTtcbiAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSB7fTtcbiAgICB0aGlzLl9wcmV2U3RhdGUgPSB7fTtcbiAgICB0aGlzLl9jdXJyZW50VmFsdWUgPSAnJztcbiAgICB0aGlzLl9jYW5TZWFyY2ggPSB0aGlzLmNvbmZpZy5zZWFyY2hFbmFibGVkO1xuICAgIHRoaXMuX2lzU2Nyb2xsaW5nT25JZSA9IGZhbHNlO1xuICAgIHRoaXMuX2hpZ2hsaWdodFBvc2l0aW9uID0gMDtcbiAgICB0aGlzLl93YXNUYXAgPSB0cnVlO1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyVmFsdWUgPSB0aGlzLl9nZW5lcmF0ZVBsYWNlaG9sZGVyVmFsdWUoKTtcbiAgICB0aGlzLl9iYXNlSWQgPSBnZW5lcmF0ZUlkKHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LCAnY2hvaWNlcy0nKTtcbiAgICAvKipcbiAgICAgKiBzZXR0aW5nIGRpcmVjdGlvbiBpbiBjYXNlcyB3aGVyZSBpdCdzIGV4cGxpY2l0bHkgc2V0IG9uIHBhc3NlZEVsZW1lbnRcbiAgICAgKiBvciB3aGVuIGNhbGN1bGF0ZWQgZGlyZWN0aW9uIGlzIGRpZmZlcmVudCBmcm9tIHRoZSBkb2N1bWVudFxuICAgICAqIEB0eXBlIHtIVE1MRWxlbWVudFsnZGlyJ119XG4gICAgICovXG5cbiAgICB0aGlzLl9kaXJlY3Rpb24gPSB0aGlzLnBhc3NlZEVsZW1lbnQuZGlyO1xuXG4gICAgaWYgKCF0aGlzLl9kaXJlY3Rpb24pIHtcbiAgICAgIHZhciBfd2luZG93JGdldENvbXB1dGVkU3QgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudCksXG4gICAgICAgICAgZWxlbWVudERpcmVjdGlvbiA9IF93aW5kb3ckZ2V0Q29tcHV0ZWRTdC5kaXJlY3Rpb247XG5cbiAgICAgIHZhciBfd2luZG93JGdldENvbXB1dGVkU3QyID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSxcbiAgICAgICAgICBkb2N1bWVudERpcmVjdGlvbiA9IF93aW5kb3ckZ2V0Q29tcHV0ZWRTdDIuZGlyZWN0aW9uO1xuXG4gICAgICBpZiAoZWxlbWVudERpcmVjdGlvbiAhPT0gZG9jdW1lbnREaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZWxlbWVudERpcmVjdGlvbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9pZE5hbWVzID0ge1xuICAgICAgaXRlbUNob2ljZTogJ2l0ZW0tY2hvaWNlJ1xuICAgIH07IC8vIEFzc2lnbiBwcmVzZXQgZ3JvdXBzIGZyb20gcGFzc2VkIGVsZW1lbnRcblxuICAgIHRoaXMuX3ByZXNldEdyb3VwcyA9IHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25Hcm91cHM7IC8vIEFzc2lnbiBwcmVzZXQgb3B0aW9ucyBmcm9tIHBhc3NlZCBlbGVtZW50XG5cbiAgICB0aGlzLl9wcmVzZXRPcHRpb25zID0gdGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnM7IC8vIEFzc2lnbiBwcmVzZXQgY2hvaWNlcyBmcm9tIHBhc3NlZCBvYmplY3RcblxuICAgIHRoaXMuX3ByZXNldENob2ljZXMgPSB0aGlzLmNvbmZpZy5jaG9pY2VzOyAvLyBBc3NpZ24gcHJlc2V0IGl0ZW1zIGZyb20gcGFzc2VkIG9iamVjdCBmaXJzdFxuXG4gICAgdGhpcy5fcHJlc2V0SXRlbXMgPSB0aGlzLmNvbmZpZy5pdGVtczsgLy8gQWRkIGFueSB2YWx1ZXMgcGFzc2VkIGZyb20gYXR0cmlidXRlXG5cbiAgICBpZiAodGhpcy5wYXNzZWRFbGVtZW50LnZhbHVlKSB7XG4gICAgICB0aGlzLl9wcmVzZXRJdGVtcyA9IHRoaXMuX3ByZXNldEl0ZW1zLmNvbmNhdCh0aGlzLnBhc3NlZEVsZW1lbnQudmFsdWUuc3BsaXQodGhpcy5jb25maWcuZGVsaW1pdGVyKSk7XG4gICAgfSAvLyBDcmVhdGUgYXJyYXkgb2YgY2hvaWNlcyBmcm9tIG9wdGlvbiBlbGVtZW50c1xuXG5cbiAgICBpZiAodGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnMpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgX3RoaXMuX3ByZXNldENob2ljZXMucHVzaCh7XG4gICAgICAgICAgdmFsdWU6IG8udmFsdWUsXG4gICAgICAgICAgbGFiZWw6IG8uaW5uZXJIVE1MLFxuICAgICAgICAgIHNlbGVjdGVkOiBvLnNlbGVjdGVkLFxuICAgICAgICAgIGRpc2FibGVkOiBvLmRpc2FibGVkIHx8IG8ucGFyZW50Tm9kZS5kaXNhYmxlZCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogby52YWx1ZSA9PT0gJycgfHwgby5oYXNBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyksXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogby5nZXRBdHRyaWJ1dGUoJ2RhdGEtY3VzdG9tLXByb3BlcnRpZXMnKVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX3JlbmRlciA9IHRoaXMuX3JlbmRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRm9jdXMgPSB0aGlzLl9vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25CbHVyID0gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25LZXlVcCA9IHRoaXMuX29uS2V5VXAuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbktleURvd24gPSB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkNsaWNrID0gdGhpcy5fb25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uVG91Y2hNb3ZlID0gdGhpcy5fb25Ub3VjaE1vdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vblRvdWNoRW5kID0gdGhpcy5fb25Ub3VjaEVuZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uTW91c2VEb3duID0gdGhpcy5fb25Nb3VzZURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbk1vdXNlT3ZlciA9IHRoaXMuX29uTW91c2VPdmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Gb3JtUmVzZXQgPSB0aGlzLl9vbkZvcm1SZXNldC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQUtleSA9IHRoaXMuX29uQUtleS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRW50ZXJLZXkgPSB0aGlzLl9vbkVudGVyS2V5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25Fc2NhcGVLZXkgPSB0aGlzLl9vbkVzY2FwZUtleS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRGlyZWN0aW9uS2V5ID0gdGhpcy5fb25EaXJlY3Rpb25LZXkuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbkRlbGV0ZUtleSA9IHRoaXMuX29uRGVsZXRlS2V5LmJpbmQodGhpcyk7IC8vIElmIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBpbml0aWFsaXNlZCB3aXRoIENob2ljZXMsIGZhaWwgc2lsZW50bHlcblxuICAgIGlmICh0aGlzLnBhc3NlZEVsZW1lbnQuaXNBY3RpdmUpIHtcbiAgICAgIGlmICghdGhpcy5jb25maWcuc2lsZW50KSB7XG4gICAgICAgIGNvbnNvbGUud2FybignVHJ5aW5nIHRvIGluaXRpYWxpc2UgQ2hvaWNlcyBvbiBlbGVtZW50IGFscmVhZHkgaW5pdGlhbGlzZWQnKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBMZXQncyBnb1xuXG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDaG9pY2VzLnByb3RvdHlwZTtcblxuICBfcHJvdG8uaW5pdCA9IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKHRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jcmVhdGVUZW1wbGF0ZXMoKTtcblxuICAgIHRoaXMuX2NyZWF0ZUVsZW1lbnRzKCk7XG5cbiAgICB0aGlzLl9jcmVhdGVTdHJ1Y3R1cmUoKTsgLy8gU2V0IGluaXRpYWwgc3RhdGUgKFdlIG5lZWQgdG8gY2xvbmUgdGhlIHN0YXRlIGJlY2F1c2Ugc29tZSByZWR1Y2Vyc1xuICAgIC8vIG1vZGlmeSB0aGUgaW5uZXIgb2JqZWN0cyBwcm9wZXJ0aWVzIGluIHRoZSBzdGF0ZSkg8J+kolxuXG5cbiAgICB0aGlzLl9pbml0aWFsU3RhdGUgPSBjbG9uZU9iamVjdCh0aGlzLl9zdG9yZS5zdGF0ZSk7XG5cbiAgICB0aGlzLl9zdG9yZS5zdWJzY3JpYmUodGhpcy5fcmVuZGVyKTtcblxuICAgIHRoaXMuX3JlbmRlcigpO1xuXG4gICAgdGhpcy5fYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIHZhciBzaG91bGREaXNhYmxlID0gIXRoaXMuY29uZmlnLmFkZEl0ZW1zIHx8IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgIGlmIChzaG91bGREaXNhYmxlKSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICB2YXIgY2FsbGJhY2tPbkluaXQgPSB0aGlzLmNvbmZpZy5jYWxsYmFja09uSW5pdDsgLy8gUnVuIGNhbGxiYWNrIGlmIGl0IGlzIGEgZnVuY3Rpb25cblxuICAgIGlmIChjYWxsYmFja09uSW5pdCAmJiB0eXBlb2YgY2FsbGJhY2tPbkluaXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrT25Jbml0LmNhbGwodGhpcyk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnJldmVhbCgpO1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIudW53cmFwKHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50KTtcbiAgICB0aGlzLmNsZWFyU3RvcmUoKTtcblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC5vcHRpb25zID0gdGhpcy5fcHJlc2V0T3B0aW9ucztcbiAgICB9XG5cbiAgICB0aGlzLl90ZW1wbGF0ZXMgPSBudWxsO1xuICAgIHRoaXMuaW5pdGlhbGlzZWQgPSBmYWxzZTtcbiAgfTtcblxuICBfcHJvdG8uZW5hYmxlID0gZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgIGlmICh0aGlzLnBhc3NlZEVsZW1lbnQuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LmVuYWJsZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNvbnRhaW5lck91dGVyLmlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2FkZEV2ZW50TGlzdGVuZXJzKCk7XG5cbiAgICAgIHRoaXMuaW5wdXQuZW5hYmxlKCk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVuYWJsZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5kaXNhYmxlID0gZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICBpZiAoIXRoaXMucGFzc2VkRWxlbWVudC5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5jb250YWluZXJPdXRlci5pc0Rpc2FibGVkKSB7XG4gICAgICB0aGlzLl9yZW1vdmVFdmVudExpc3RlbmVycygpO1xuXG4gICAgICB0aGlzLmlucHV0LmRpc2FibGUoKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZGlzYWJsZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5oaWdobGlnaHRJdGVtID0gZnVuY3Rpb24gaGlnaGxpZ2h0SXRlbShpdGVtLCBydW5FdmVudCkge1xuICAgIGlmIChydW5FdmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBydW5FdmVudCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgaWQgPSBpdGVtLmlkLFxuICAgICAgICBfaXRlbSRncm91cElkID0gaXRlbS5ncm91cElkLFxuICAgICAgICBncm91cElkID0gX2l0ZW0kZ3JvdXBJZCA9PT0gdm9pZCAwID8gLTEgOiBfaXRlbSRncm91cElkLFxuICAgICAgICBfaXRlbSR2YWx1ZSA9IGl0ZW0udmFsdWUsXG4gICAgICAgIHZhbHVlID0gX2l0ZW0kdmFsdWUgPT09IHZvaWQgMCA/ICcnIDogX2l0ZW0kdmFsdWUsXG4gICAgICAgIF9pdGVtJGxhYmVsID0gaXRlbS5sYWJlbCxcbiAgICAgICAgbGFiZWwgPSBfaXRlbSRsYWJlbCA9PT0gdm9pZCAwID8gJycgOiBfaXRlbSRsYWJlbDtcbiAgICB2YXIgZ3JvdXAgPSBncm91cElkID49IDAgPyB0aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQoZ3JvdXBJZCkgOiBudWxsO1xuXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goaXRlbXNfaGlnaGxpZ2h0SXRlbShpZCwgdHJ1ZSkpO1xuXG4gICAgaWYgKHJ1bkV2ZW50KSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5oaWdobGlnaHRJdGVtLCB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGdyb3VwVmFsdWU6IGdyb3VwICYmIGdyb3VwLnZhbHVlID8gZ3JvdXAudmFsdWUgOiBudWxsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8udW5oaWdobGlnaHRJdGVtID0gZnVuY3Rpb24gdW5oaWdobGlnaHRJdGVtKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHZhciBpZCA9IGl0ZW0uaWQsXG4gICAgICAgIF9pdGVtJGdyb3VwSWQyID0gaXRlbS5ncm91cElkLFxuICAgICAgICBncm91cElkID0gX2l0ZW0kZ3JvdXBJZDIgPT09IHZvaWQgMCA/IC0xIDogX2l0ZW0kZ3JvdXBJZDIsXG4gICAgICAgIF9pdGVtJHZhbHVlMiA9IGl0ZW0udmFsdWUsXG4gICAgICAgIHZhbHVlID0gX2l0ZW0kdmFsdWUyID09PSB2b2lkIDAgPyAnJyA6IF9pdGVtJHZhbHVlMixcbiAgICAgICAgX2l0ZW0kbGFiZWwyID0gaXRlbS5sYWJlbCxcbiAgICAgICAgbGFiZWwgPSBfaXRlbSRsYWJlbDIgPT09IHZvaWQgMCA/ICcnIDogX2l0ZW0kbGFiZWwyO1xuICAgIHZhciBncm91cCA9IGdyb3VwSWQgPj0gMCA/IHRoaXMuX3N0b3JlLmdldEdyb3VwQnlJZChncm91cElkKSA6IG51bGw7XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChpdGVtc19oaWdobGlnaHRJdGVtKGlkLCBmYWxzZSkpO1xuXG4gICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuaGlnaGxpZ2h0SXRlbSwge1xuICAgICAgaWQ6IGlkLFxuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgZ3JvdXBWYWx1ZTogZ3JvdXAgJiYgZ3JvdXAudmFsdWUgPyBncm91cC52YWx1ZSA6IG51bGxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uaGlnaGxpZ2h0QWxsID0gZnVuY3Rpb24gaGlnaGxpZ2h0QWxsKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdGhpcy5fc3RvcmUuaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF90aGlzMi5oaWdobGlnaHRJdGVtKGl0ZW0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnVuaGlnaGxpZ2h0QWxsID0gZnVuY3Rpb24gdW5oaWdobGlnaHRBbGwoKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICB0aGlzLl9zdG9yZS5pdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gX3RoaXMzLnVuaGlnaGxpZ2h0SXRlbShpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVBY3RpdmVJdGVtc0J5VmFsdWUgPSBmdW5jdGlvbiByZW1vdmVBY3RpdmVJdGVtc0J5VmFsdWUodmFsdWUpIHtcbiAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgIHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0udmFsdWUgPT09IHZhbHVlO1xuICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfdGhpczQuX3JlbW92ZUl0ZW0oaXRlbSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ucmVtb3ZlQWN0aXZlSXRlbXMgPSBmdW5jdGlvbiByZW1vdmVBY3RpdmVJdGVtcyhleGNsdWRlZElkKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBpZCA9IF9yZWYuaWQ7XG4gICAgICByZXR1cm4gaWQgIT09IGV4Y2x1ZGVkSWQ7XG4gICAgfSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIF90aGlzNS5fcmVtb3ZlSXRlbShpdGVtKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVIaWdobGlnaHRlZEl0ZW1zID0gZnVuY3Rpb24gcmVtb3ZlSGlnaGxpZ2h0ZWRJdGVtcyhydW5FdmVudCkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgaWYgKHJ1bkV2ZW50ID09PSB2b2lkIDApIHtcbiAgICAgIHJ1bkV2ZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5fc3RvcmUuaGlnaGxpZ2h0ZWRBY3RpdmVJdGVtcy5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICBfdGhpczYuX3JlbW92ZUl0ZW0oaXRlbSk7IC8vIElmIHRoaXMgYWN0aW9uIHdhcyBwZXJmb3JtZWQgYnkgdGhlIHVzZXJcbiAgICAgIC8vIHRyaWdnZXIgdGhlIGV2ZW50XG5cblxuICAgICAgaWYgKHJ1bkV2ZW50KSB7XG4gICAgICAgIF90aGlzNi5fdHJpZ2dlckNoYW5nZShpdGVtLnZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5zaG93RHJvcGRvd24gPSBmdW5jdGlvbiBzaG93RHJvcGRvd24ocHJldmVudElucHV0Rm9jdXMpIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIGlmICh0aGlzLmRyb3Bkb3duLmlzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXM3LmRyb3Bkb3duLnNob3coKTtcblxuICAgICAgX3RoaXM3LmNvbnRhaW5lck91dGVyLm9wZW4oX3RoaXM3LmRyb3Bkb3duLmRpc3RhbmNlRnJvbVRvcFdpbmRvdyk7XG5cbiAgICAgIGlmICghcHJldmVudElucHV0Rm9jdXMgJiYgX3RoaXM3Ll9jYW5TZWFyY2gpIHtcbiAgICAgICAgX3RoaXM3LmlucHV0LmZvY3VzKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzNy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuc2hvd0Ryb3Bkb3duLCB7fSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmhpZGVEcm9wZG93biA9IGZ1bmN0aW9uIGhpZGVEcm9wZG93bihwcmV2ZW50SW5wdXRCbHVyKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuZHJvcGRvd24uaXNBY3RpdmUpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczguZHJvcGRvd24uaGlkZSgpO1xuXG4gICAgICBfdGhpczguY29udGFpbmVyT3V0ZXIuY2xvc2UoKTtcblxuICAgICAgaWYgKCFwcmV2ZW50SW5wdXRCbHVyICYmIF90aGlzOC5fY2FuU2VhcmNoKSB7XG4gICAgICAgIF90aGlzOC5pbnB1dC5yZW1vdmVBY3RpdmVEZXNjZW5kYW50KCk7XG5cbiAgICAgICAgX3RoaXM4LmlucHV0LmJsdXIoKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXM4LnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5oaWRlRHJvcGRvd24sIHt9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSh2YWx1ZU9ubHkpIHtcbiAgICBpZiAodmFsdWVPbmx5ID09PSB2b2lkIDApIHtcbiAgICAgIHZhbHVlT25seSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcy5yZWR1Y2UoZnVuY3Rpb24gKHNlbGVjdGVkSXRlbXMsIGl0ZW0pIHtcbiAgICAgIHZhciBpdGVtVmFsdWUgPSB2YWx1ZU9ubHkgPyBpdGVtLnZhbHVlIDogaXRlbTtcbiAgICAgIHNlbGVjdGVkSXRlbXMucHVzaChpdGVtVmFsdWUpO1xuICAgICAgcmV0dXJuIHNlbGVjdGVkSXRlbXM7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCA/IHZhbHVlc1swXSA6IHZhbHVlcztcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmdbXSB8IGltcG9ydCgnLi4vLi4vdHlwZXMvaW5kZXgnKS5DaG9pY2VzLkl0ZW1bXX0gaXRlbXNcbiAgICovXG4gIDtcblxuICBfcHJvdG8uc2V0VmFsdWUgPSBmdW5jdGlvbiBzZXRWYWx1ZShpdGVtcykge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBpdGVtcy5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIF90aGlzOS5fc2V0Q2hvaWNlT3JJdGVtKHZhbHVlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc2V0Q2hvaWNlQnlWYWx1ZSA9IGZ1bmN0aW9uIHNldENob2ljZUJ5VmFsdWUodmFsdWUpIHtcbiAgICB2YXIgX3RoaXMxMCA9IHRoaXM7XG5cbiAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQgfHwgdGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSAvLyBJZiBvbmx5IG9uZSB2YWx1ZSBoYXMgYmVlbiBwYXNzZWQsIGNvbnZlcnQgdG8gYXJyYXlcblxuXG4gICAgdmFyIGNob2ljZVZhbHVlID0gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyB2YWx1ZSA6IFt2YWx1ZV07IC8vIExvb3AgdGhyb3VnaCBlYWNoIHZhbHVlIGFuZFxuXG4gICAgY2hvaWNlVmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICByZXR1cm4gX3RoaXMxMC5fZmluZEFuZFNlbGVjdENob2ljZUJ5VmFsdWUodmFsKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogU2V0IGNob2ljZXMgb2Ygc2VsZWN0IGlucHV0IHZpYSBhbiBhcnJheSBvZiBvYmplY3RzIChvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgYXJyYXkgb2Ygb2JqZWN0IG9yIHByb21pc2Ugb2YgaXQpLFxuICAgKiBhIHZhbHVlIGZpZWxkIG5hbWUgYW5kIGEgbGFiZWwgZmllbGQgbmFtZS5cbiAgICogVGhpcyBiZWhhdmVzIHRoZSBzYW1lIGFzIHBhc3NpbmcgaXRlbXMgdmlhIHRoZSBjaG9pY2VzIG9wdGlvbiBidXQgY2FuIGJlIGNhbGxlZCBhZnRlciBpbml0aWFsaXNpbmcgQ2hvaWNlcy5cbiAgICogVGhpcyBjYW4gYWxzbyBiZSB1c2VkIHRvIGFkZCBncm91cHMgb2YgY2hvaWNlcyAoc2VlIGV4YW1wbGUgMik7IE9wdGlvbmFsbHkgcGFzcyBhIHRydWUgYHJlcGxhY2VDaG9pY2VzYCB2YWx1ZSB0byByZW1vdmUgYW55IGV4aXN0aW5nIGNob2ljZXMuXG4gICAqIE9wdGlvbmFsbHkgcGFzcyBhIGBjdXN0b21Qcm9wZXJ0aWVzYCBvYmplY3QgdG8gYWRkIGFkZGl0aW9uYWwgZGF0YSB0byB5b3VyIGNob2ljZXMgKHVzZWZ1bCB3aGVuIHNlYXJjaGluZy9maWx0ZXJpbmcgZXRjKS5cbiAgICpcbiAgICogKipJbnB1dCB0eXBlcyBhZmZlY3RlZDoqKiBzZWxlY3Qtb25lLCBzZWxlY3QtbXVsdGlwbGVcbiAgICpcbiAgICogQHRlbXBsYXRlIHtDaG9pY2VbXSB8ICgoaW5zdGFuY2U6IENob2ljZXMpID0+IG9iamVjdFtdIHwgUHJvbWlzZTxvYmplY3RbXT4pfSBUXG4gICAqIEBwYXJhbSB7VH0gW2Nob2ljZXNBcnJheU9yRmV0Y2hlcl1cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt2YWx1ZSA9ICd2YWx1ZSddIC0gbmFtZSBvZiBgdmFsdWVgIGZpZWxkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbbGFiZWwgPSAnbGFiZWwnXSAtIG5hbWUgb2YgJ2xhYmVsJyBmaWVsZFxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtyZXBsYWNlQ2hvaWNlcyA9IGZhbHNlXSAtIHdoZXRoZXIgdG8gcmVwbGFjZSBvZiBhZGQgY2hvaWNlc1xuICAgKiBAcmV0dXJucyB7dGhpcyB8IFByb21pc2U8dGhpcz59XG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGV4YW1wbGUgPSBuZXcgQ2hvaWNlcyhlbGVtZW50KTtcbiAgICpcbiAgICogZXhhbXBsZS5zZXRDaG9pY2VzKFtcbiAgICogICB7dmFsdWU6ICdPbmUnLCBsYWJlbDogJ0xhYmVsIE9uZScsIGRpc2FibGVkOiB0cnVlfSxcbiAgICogICB7dmFsdWU6ICdUd28nLCBsYWJlbDogJ0xhYmVsIFR3bycsIHNlbGVjdGVkOiB0cnVlfSxcbiAgICogICB7dmFsdWU6ICdUaHJlZScsIGxhYmVsOiAnTGFiZWwgVGhyZWUnfSxcbiAgICogXSwgJ3ZhbHVlJywgJ2xhYmVsJywgZmFsc2UpO1xuICAgKiBgYGBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICogYGBganNcbiAgICogY29uc3QgZXhhbXBsZSA9IG5ldyBDaG9pY2VzKGVsZW1lbnQpO1xuICAgKlxuICAgKiBleGFtcGxlLnNldENob2ljZXMoYXN5bmMgKCkgPT4ge1xuICAgKiAgIHRyeSB7XG4gICAqICAgICAgY29uc3QgaXRlbXMgPSBhd2FpdCBmZXRjaCgnL2l0ZW1zJyk7XG4gICAqICAgICAgcmV0dXJuIGl0ZW1zLmpzb24oKVxuICAgKiAgIH0gY2F0Y2goZXJyKSB7XG4gICAqICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAqICAgfVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGBgYGpzXG4gICAqIGNvbnN0IGV4YW1wbGUgPSBuZXcgQ2hvaWNlcyhlbGVtZW50KTtcbiAgICpcbiAgICogZXhhbXBsZS5zZXRDaG9pY2VzKFt7XG4gICAqICAgbGFiZWw6ICdHcm91cCBvbmUnLFxuICAgKiAgIGlkOiAxLFxuICAgKiAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICogICBjaG9pY2VzOiBbXG4gICAqICAgICB7dmFsdWU6ICdDaGlsZCBPbmUnLCBsYWJlbDogJ0NoaWxkIE9uZScsIHNlbGVjdGVkOiB0cnVlfSxcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIFR3bycsIGxhYmVsOiAnQ2hpbGQgVHdvJywgIGRpc2FibGVkOiB0cnVlfSxcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIFRocmVlJywgbGFiZWw6ICdDaGlsZCBUaHJlZSd9LFxuICAgKiAgIF1cbiAgICogfSxcbiAgICoge1xuICAgKiAgIGxhYmVsOiAnR3JvdXAgdHdvJyxcbiAgICogICBpZDogMixcbiAgICogICBkaXNhYmxlZDogZmFsc2UsXG4gICAqICAgY2hvaWNlczogW1xuICAgKiAgICAge3ZhbHVlOiAnQ2hpbGQgRm91cicsIGxhYmVsOiAnQ2hpbGQgRm91cicsIGRpc2FibGVkOiB0cnVlfSxcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIEZpdmUnLCBsYWJlbDogJ0NoaWxkIEZpdmUnfSxcbiAgICogICAgIHt2YWx1ZTogJ0NoaWxkIFNpeCcsIGxhYmVsOiAnQ2hpbGQgU2l4JywgY3VzdG9tUHJvcGVydGllczoge1xuICAgKiAgICAgICBkZXNjcmlwdGlvbjogJ0N1c3RvbSBkZXNjcmlwdGlvbiBhYm91dCBjaGlsZCBzaXgnLFxuICAgKiAgICAgICByYW5kb206ICdBbm90aGVyIHJhbmRvbSBjdXN0b20gcHJvcGVydHknXG4gICAqICAgICB9fSxcbiAgICogICBdXG4gICAqIH1dLCAndmFsdWUnLCAnbGFiZWwnLCBmYWxzZSk7XG4gICAqIGBgYFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5zZXRDaG9pY2VzID0gZnVuY3Rpb24gc2V0Q2hvaWNlcyhjaG9pY2VzQXJyYXlPckZldGNoZXIsIHZhbHVlLCBsYWJlbCwgcmVwbGFjZUNob2ljZXMpIHtcbiAgICB2YXIgX3RoaXMxMSA9IHRoaXM7XG5cbiAgICBpZiAoY2hvaWNlc0FycmF5T3JGZXRjaGVyID09PSB2b2lkIDApIHtcbiAgICAgIGNob2ljZXNBcnJheU9yRmV0Y2hlciA9IFtdO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICB2YWx1ZSA9ICd2YWx1ZSc7XG4gICAgfVxuXG4gICAgaWYgKGxhYmVsID09PSB2b2lkIDApIHtcbiAgICAgIGxhYmVsID0gJ2xhYmVsJztcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZUNob2ljZXMgPT09IHZvaWQgMCkge1xuICAgICAgcmVwbGFjZUNob2ljZXMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInNldENob2ljZXMgd2FzIGNhbGxlZCBvbiBhIG5vbi1pbml0aWFsaXplZCBpbnN0YW5jZSBvZiBDaG9pY2VzXCIpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNTZWxlY3RFbGVtZW50KSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwic2V0Q2hvaWNlcyBjYW4ndCBiZSB1c2VkIHdpdGggSU5QVVQgYmFzZWQgQ2hvaWNlc1wiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyB8fCAhdmFsdWUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJ2YWx1ZSBwYXJhbWV0ZXIgbXVzdCBiZSBhIG5hbWUgb2YgJ3ZhbHVlJyBmaWVsZCBpbiBwYXNzZWQgb2JqZWN0c1wiKTtcbiAgICB9IC8vIENsZWFyIGNob2ljZXMgaWYgbmVlZGVkXG5cblxuICAgIGlmIChyZXBsYWNlQ2hvaWNlcykge1xuICAgICAgdGhpcy5jbGVhckNob2ljZXMoKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNob2ljZXNBcnJheU9yRmV0Y2hlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gaXQncyBhIGNob2ljZXMgZmV0Y2hlciBmdW5jdGlvblxuICAgICAgdmFyIGZldGNoZXIgPSBjaG9pY2VzQXJyYXlPckZldGNoZXIodGhpcyk7XG5cbiAgICAgIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ2Z1bmN0aW9uJyAmJiBmZXRjaGVyIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAvLyB0aGF0J3MgYSBwcm9taXNlXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wYXQvY29tcGF0XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVzb2x2ZSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczExLl9oYW5kbGVMb2FkaW5nU3RhdGUodHJ1ZSk7XG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBmZXRjaGVyO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMTEuc2V0Q2hvaWNlcyhkYXRhLCB2YWx1ZSwgbGFiZWwsIHJlcGxhY2VDaG9pY2VzKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgIGlmICghX3RoaXMxMS5jb25maWcuc2lsZW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMxMS5faGFuZGxlTG9hZGluZ1N0YXRlKGZhbHNlKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMTE7XG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBmdW5jdGlvbiByZXR1cm5lZCBzb21ldGhpbmcgZWxzZSB0aGFuIHByb21pc2UsIGxldCdzIGNoZWNrIGlmIGl0J3MgYW4gYXJyYXkgb2YgY2hvaWNlc1xuXG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShmZXRjaGVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiLnNldENob2ljZXMgZmlyc3QgYXJndW1lbnQgZnVuY3Rpb24gbXVzdCByZXR1cm4gZWl0aGVyIGFycmF5IG9mIGNob2ljZXMgb3IgUHJvbWlzZSwgZ290OiBcIiArIHR5cGVvZiBmZXRjaGVyKTtcbiAgICAgIH0gLy8gcmVjdXJzaW9uIHdpdGggcmVzdWx0cywgaXQncyBzeW5jIGFuZCBjaG9pY2VzIHdlcmUgY2xlYXJlZCBhbHJlYWR5XG5cblxuICAgICAgcmV0dXJuIHRoaXMuc2V0Q2hvaWNlcyhmZXRjaGVyLCB2YWx1ZSwgbGFiZWwsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hvaWNlc0FycmF5T3JGZXRjaGVyKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIi5zZXRDaG9pY2VzIG11c3QgYmUgY2FsbGVkIGVpdGhlciB3aXRoIGFycmF5IG9mIGNob2ljZXMgd2l0aCBhIGZ1bmN0aW9uIHJlc3VsdGluZyBpbnRvIFByb21pc2Ugb2YgYXJyYXkgb2YgY2hvaWNlc1wiKTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLnJlbW92ZUxvYWRpbmdTdGF0ZSgpO1xuXG4gICAgdGhpcy5fc3RhcnRMb2FkaW5nKCk7XG5cbiAgICBjaG9pY2VzQXJyYXlPckZldGNoZXIuZm9yRWFjaChmdW5jdGlvbiAoZ3JvdXBPckNob2ljZSkge1xuICAgICAgaWYgKGdyb3VwT3JDaG9pY2UuY2hvaWNlcykge1xuICAgICAgICBfdGhpczExLl9hZGRHcm91cCh7XG4gICAgICAgICAgaWQ6IHBhcnNlSW50KGdyb3VwT3JDaG9pY2UuaWQsIDEwKSB8fCBudWxsLFxuICAgICAgICAgIGdyb3VwOiBncm91cE9yQ2hvaWNlLFxuICAgICAgICAgIHZhbHVlS2V5OiB2YWx1ZSxcbiAgICAgICAgICBsYWJlbEtleTogbGFiZWxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczExLl9hZGRDaG9pY2Uoe1xuICAgICAgICAgIHZhbHVlOiBncm91cE9yQ2hvaWNlW3ZhbHVlXSxcbiAgICAgICAgICBsYWJlbDogZ3JvdXBPckNob2ljZVtsYWJlbF0sXG4gICAgICAgICAgaXNTZWxlY3RlZDogZ3JvdXBPckNob2ljZS5zZWxlY3RlZCxcbiAgICAgICAgICBpc0Rpc2FibGVkOiBncm91cE9yQ2hvaWNlLmRpc2FibGVkLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGdyb3VwT3JDaG9pY2UuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogZ3JvdXBPckNob2ljZS5wbGFjZWhvbGRlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuX3N0b3BMb2FkaW5nKCk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uY2xlYXJDaG9pY2VzID0gZnVuY3Rpb24gY2xlYXJDaG9pY2VzKCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGNob2ljZXNfY2xlYXJDaG9pY2VzKCkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFyU3RvcmUgPSBmdW5jdGlvbiBjbGVhclN0b3JlKCkge1xuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGNsZWFyQWxsKCkpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmNsZWFySW5wdXQgPSBmdW5jdGlvbiBjbGVhcklucHV0KCkge1xuICAgIHZhciBzaG91bGRTZXRJbnB1dFdpZHRoID0gIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudDtcbiAgICB0aGlzLmlucHV0LmNsZWFyKHNob3VsZFNldElucHV0V2lkdGgpO1xuXG4gICAgaWYgKCF0aGlzLl9pc1RleHRFbGVtZW50ICYmIHRoaXMuX2NhblNlYXJjaCkge1xuICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goY2hvaWNlc19hY3RpdmF0ZUNob2ljZXModHJ1ZSkpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5fcmVuZGVyID0gZnVuY3Rpb24gX3JlbmRlcigpIHtcbiAgICBpZiAodGhpcy5fc3RvcmUuaXNMb2FkaW5nKCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9jdXJyZW50U3RhdGUgPSB0aGlzLl9zdG9yZS5zdGF0ZTtcbiAgICB2YXIgc3RhdGVDaGFuZ2VkID0gdGhpcy5fY3VycmVudFN0YXRlLmNob2ljZXMgIT09IHRoaXMuX3ByZXZTdGF0ZS5jaG9pY2VzIHx8IHRoaXMuX2N1cnJlbnRTdGF0ZS5ncm91cHMgIT09IHRoaXMuX3ByZXZTdGF0ZS5ncm91cHMgfHwgdGhpcy5fY3VycmVudFN0YXRlLml0ZW1zICE9PSB0aGlzLl9wcmV2U3RhdGUuaXRlbXM7XG4gICAgdmFyIHNob3VsZFJlbmRlckNob2ljZXMgPSB0aGlzLl9pc1NlbGVjdEVsZW1lbnQ7XG4gICAgdmFyIHNob3VsZFJlbmRlckl0ZW1zID0gdGhpcy5fY3VycmVudFN0YXRlLml0ZW1zICE9PSB0aGlzLl9wcmV2U3RhdGUuaXRlbXM7XG5cbiAgICBpZiAoIXN0YXRlQ2hhbmdlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzaG91bGRSZW5kZXJDaG9pY2VzKSB7XG4gICAgICB0aGlzLl9yZW5kZXJDaG9pY2VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFJlbmRlckl0ZW1zKSB7XG4gICAgICB0aGlzLl9yZW5kZXJJdGVtcygpO1xuICAgIH1cblxuICAgIHRoaXMuX3ByZXZTdGF0ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZTtcbiAgfTtcblxuICBfcHJvdG8uX3JlbmRlckNob2ljZXMgPSBmdW5jdGlvbiBfcmVuZGVyQ2hvaWNlcygpIHtcbiAgICB2YXIgX3RoaXMxMiA9IHRoaXM7XG5cbiAgICB2YXIgX3RoaXMkX3N0b3JlID0gdGhpcy5fc3RvcmUsXG4gICAgICAgIGFjdGl2ZUdyb3VwcyA9IF90aGlzJF9zdG9yZS5hY3RpdmVHcm91cHMsXG4gICAgICAgIGFjdGl2ZUNob2ljZXMgPSBfdGhpcyRfc3RvcmUuYWN0aXZlQ2hvaWNlcztcbiAgICB2YXIgY2hvaWNlTGlzdEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIHRoaXMuY2hvaWNlTGlzdC5jbGVhcigpO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLnJlc2V0U2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczEyLmNob2ljZUxpc3Quc2Nyb2xsVG9Ub3AoKTtcbiAgICAgIH0pO1xuICAgIH0gLy8gSWYgd2UgaGF2ZSBncm91cGVkIG9wdGlvbnNcblxuXG4gICAgaWYgKGFjdGl2ZUdyb3Vwcy5sZW5ndGggPj0gMSAmJiAhdGhpcy5faXNTZWFyY2hpbmcpIHtcbiAgICAgIC8vIElmIHdlIGhhdmUgYSBwbGFjZWhvbGRlciBjaG9pY2UgYWxvbmcgd2l0aCBncm91cHNcbiAgICAgIHZhciBhY3RpdmVQbGFjZWhvbGRlcnMgPSBhY3RpdmVDaG9pY2VzLmZpbHRlcihmdW5jdGlvbiAoYWN0aXZlQ2hvaWNlKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVDaG9pY2UucGxhY2Vob2xkZXIgPT09IHRydWUgJiYgYWN0aXZlQ2hvaWNlLmdyb3VwSWQgPT09IC0xO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChhY3RpdmVQbGFjZWhvbGRlcnMubGVuZ3RoID49IDEpIHtcbiAgICAgICAgY2hvaWNlTGlzdEZyYWdtZW50ID0gdGhpcy5fY3JlYXRlQ2hvaWNlc0ZyYWdtZW50KGFjdGl2ZVBsYWNlaG9sZGVycywgY2hvaWNlTGlzdEZyYWdtZW50KTtcbiAgICAgIH1cblxuICAgICAgY2hvaWNlTGlzdEZyYWdtZW50ID0gdGhpcy5fY3JlYXRlR3JvdXBzRnJhZ21lbnQoYWN0aXZlR3JvdXBzLCBhY3RpdmVDaG9pY2VzLCBjaG9pY2VMaXN0RnJhZ21lbnQpO1xuICAgIH0gZWxzZSBpZiAoYWN0aXZlQ2hvaWNlcy5sZW5ndGggPj0gMSkge1xuICAgICAgY2hvaWNlTGlzdEZyYWdtZW50ID0gdGhpcy5fY3JlYXRlQ2hvaWNlc0ZyYWdtZW50KGFjdGl2ZUNob2ljZXMsIGNob2ljZUxpc3RGcmFnbWVudCk7XG4gICAgfSAvLyBJZiB3ZSBoYXZlIGNob2ljZXMgdG8gc2hvd1xuXG5cbiAgICBpZiAoY2hvaWNlTGlzdEZyYWdtZW50LmNoaWxkTm9kZXMgJiYgY2hvaWNlTGlzdEZyYWdtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXM7XG5cbiAgICAgIHZhciBjYW5BZGRJdGVtID0gdGhpcy5fY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgdGhpcy5pbnB1dC52YWx1ZSk7IC8vIC4uLmFuZCB3ZSBjYW4gc2VsZWN0IHRoZW1cblxuXG4gICAgICBpZiAoY2FuQWRkSXRlbS5yZXNwb25zZSkge1xuICAgICAgICAvLyAuLi5hcHBlbmQgdGhlbSBhbmQgaGlnaGxpZ2h0IHRoZSBmaXJzdCBjaG9pY2VcbiAgICAgICAgdGhpcy5jaG9pY2VMaXN0LmFwcGVuZChjaG9pY2VMaXN0RnJhZ21lbnQpO1xuXG4gICAgICAgIHRoaXMuX2hpZ2hsaWdodENob2ljZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gLi4ub3RoZXJ3aXNlIHNob3cgYSBub3RpY2VcbiAgICAgICAgdGhpcy5jaG9pY2VMaXN0LmFwcGVuZCh0aGlzLl9nZXRUZW1wbGF0ZSgnbm90aWNlJywgY2FuQWRkSXRlbS5ub3RpY2UpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3RoZXJ3aXNlIHNob3cgYSBub3RpY2VcbiAgICAgIHZhciBkcm9wZG93bkl0ZW07XG4gICAgICB2YXIgbm90aWNlO1xuXG4gICAgICBpZiAodGhpcy5faXNTZWFyY2hpbmcpIHtcbiAgICAgICAgbm90aWNlID0gdHlwZW9mIHRoaXMuY29uZmlnLm5vUmVzdWx0c1RleHQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5ub1Jlc3VsdHNUZXh0KCkgOiB0aGlzLmNvbmZpZy5ub1Jlc3VsdHNUZXh0O1xuICAgICAgICBkcm9wZG93bkl0ZW0gPSB0aGlzLl9nZXRUZW1wbGF0ZSgnbm90aWNlJywgbm90aWNlLCAnbm8tcmVzdWx0cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbm90aWNlID0gdHlwZW9mIHRoaXMuY29uZmlnLm5vQ2hvaWNlc1RleHQgPT09ICdmdW5jdGlvbicgPyB0aGlzLmNvbmZpZy5ub0Nob2ljZXNUZXh0KCkgOiB0aGlzLmNvbmZpZy5ub0Nob2ljZXNUZXh0O1xuICAgICAgICBkcm9wZG93bkl0ZW0gPSB0aGlzLl9nZXRUZW1wbGF0ZSgnbm90aWNlJywgbm90aWNlLCAnbm8tY2hvaWNlcycpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNob2ljZUxpc3QuYXBwZW5kKGRyb3Bkb3duSXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fcmVuZGVySXRlbXMgPSBmdW5jdGlvbiBfcmVuZGVySXRlbXMoKSB7XG4gICAgdmFyIGFjdGl2ZUl0ZW1zID0gdGhpcy5fc3RvcmUuYWN0aXZlSXRlbXMgfHwgW107XG4gICAgdGhpcy5pdGVtTGlzdC5jbGVhcigpOyAvLyBDcmVhdGUgYSBmcmFnbWVudCB0byBzdG9yZSBvdXIgbGlzdCBpdGVtc1xuICAgIC8vIChzbyB3ZSBkb24ndCBoYXZlIHRvIHVwZGF0ZSB0aGUgRE9NIGZvciBlYWNoIGl0ZW0pXG5cbiAgICB2YXIgaXRlbUxpc3RGcmFnbWVudCA9IHRoaXMuX2NyZWF0ZUl0ZW1zRnJhZ21lbnQoYWN0aXZlSXRlbXMpOyAvLyBJZiB3ZSBoYXZlIGl0ZW1zIHRvIGFkZCwgYXBwZW5kIHRoZW1cblxuXG4gICAgaWYgKGl0ZW1MaXN0RnJhZ21lbnQuY2hpbGROb2Rlcykge1xuICAgICAgdGhpcy5pdGVtTGlzdC5hcHBlbmQoaXRlbUxpc3RGcmFnbWVudCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlR3JvdXBzRnJhZ21lbnQgPSBmdW5jdGlvbiBfY3JlYXRlR3JvdXBzRnJhZ21lbnQoZ3JvdXBzLCBjaG9pY2VzLCBmcmFnbWVudCkge1xuICAgIHZhciBfdGhpczEzID0gdGhpcztcblxuICAgIGlmIChmcmFnbWVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB9XG5cbiAgICB2YXIgZ2V0R3JvdXBDaG9pY2VzID0gZnVuY3Rpb24gZ2V0R3JvdXBDaG9pY2VzKGdyb3VwKSB7XG4gICAgICByZXR1cm4gY2hvaWNlcy5maWx0ZXIoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgICBpZiAoX3RoaXMxMy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGNob2ljZS5ncm91cElkID09PSBncm91cC5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjaG9pY2UuZ3JvdXBJZCA9PT0gZ3JvdXAuaWQgJiYgKF90aGlzMTMuY29uZmlnLnJlbmRlclNlbGVjdGVkQ2hvaWNlcyA9PT0gJ2Fsd2F5cycgfHwgIWNob2ljZS5zZWxlY3RlZCk7XG4gICAgICB9KTtcbiAgICB9OyAvLyBJZiBzb3J0aW5nIGlzIGVuYWJsZWQsIGZpbHRlciBncm91cHNcblxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnNob3VsZFNvcnQpIHtcbiAgICAgIGdyb3Vwcy5zb3J0KHRoaXMuY29uZmlnLnNvcnRlcik7XG4gICAgfVxuXG4gICAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICB2YXIgZ3JvdXBDaG9pY2VzID0gZ2V0R3JvdXBDaG9pY2VzKGdyb3VwKTtcblxuICAgICAgaWYgKGdyb3VwQ2hvaWNlcy5sZW5ndGggPj0gMSkge1xuICAgICAgICB2YXIgZHJvcGRvd25Hcm91cCA9IF90aGlzMTMuX2dldFRlbXBsYXRlKCdjaG9pY2VHcm91cCcsIGdyb3VwKTtcblxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkcm9wZG93bkdyb3VwKTtcblxuICAgICAgICBfdGhpczEzLl9jcmVhdGVDaG9pY2VzRnJhZ21lbnQoZ3JvdXBDaG9pY2VzLCBmcmFnbWVudCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlQ2hvaWNlc0ZyYWdtZW50ID0gZnVuY3Rpb24gX2NyZWF0ZUNob2ljZXNGcmFnbWVudChjaG9pY2VzLCBmcmFnbWVudCwgd2l0aGluR3JvdXApIHtcbiAgICB2YXIgX3RoaXMxNCA9IHRoaXM7XG5cbiAgICBpZiAoZnJhZ21lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgfVxuXG4gICAgaWYgKHdpdGhpbkdyb3VwID09PSB2b2lkIDApIHtcbiAgICAgIHdpdGhpbkdyb3VwID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGEgZnJhZ21lbnQgdG8gc3RvcmUgb3VyIGxpc3QgaXRlbXMgKHNvIHdlIGRvbid0IGhhdmUgdG8gdXBkYXRlIHRoZSBET00gZm9yIGVhY2ggaXRlbSlcbiAgICB2YXIgX3RoaXMkY29uZmlnID0gdGhpcy5jb25maWcsXG4gICAgICAgIHJlbmRlclNlbGVjdGVkQ2hvaWNlcyA9IF90aGlzJGNvbmZpZy5yZW5kZXJTZWxlY3RlZENob2ljZXMsXG4gICAgICAgIHNlYXJjaFJlc3VsdExpbWl0ID0gX3RoaXMkY29uZmlnLnNlYXJjaFJlc3VsdExpbWl0LFxuICAgICAgICByZW5kZXJDaG9pY2VMaW1pdCA9IF90aGlzJGNvbmZpZy5yZW5kZXJDaG9pY2VMaW1pdDtcbiAgICB2YXIgZmlsdGVyID0gdGhpcy5faXNTZWFyY2hpbmcgPyBzb3J0QnlTY29yZSA6IHRoaXMuY29uZmlnLnNvcnRlcjtcblxuICAgIHZhciBhcHBlbmRDaG9pY2UgPSBmdW5jdGlvbiBhcHBlbmRDaG9pY2UoY2hvaWNlKSB7XG4gICAgICB2YXIgc2hvdWxkUmVuZGVyID0gcmVuZGVyU2VsZWN0ZWRDaG9pY2VzID09PSAnYXV0bycgPyBfdGhpczE0Ll9pc1NlbGVjdE9uZUVsZW1lbnQgfHwgIWNob2ljZS5zZWxlY3RlZCA6IHRydWU7XG5cbiAgICAgIGlmIChzaG91bGRSZW5kZXIpIHtcbiAgICAgICAgdmFyIGRyb3Bkb3duSXRlbSA9IF90aGlzMTQuX2dldFRlbXBsYXRlKCdjaG9pY2UnLCBjaG9pY2UsIF90aGlzMTQuY29uZmlnLml0ZW1TZWxlY3RUZXh0KTtcblxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChkcm9wZG93bkl0ZW0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmVuZGVyZXJhYmxlQ2hvaWNlcyA9IGNob2ljZXM7XG5cbiAgICBpZiAocmVuZGVyU2VsZWN0ZWRDaG9pY2VzID09PSAnYXV0bycgJiYgIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgcmVuZGVyZXJhYmxlQ2hvaWNlcyA9IGNob2ljZXMuZmlsdGVyKGZ1bmN0aW9uIChjaG9pY2UpIHtcbiAgICAgICAgcmV0dXJuICFjaG9pY2Uuc2VsZWN0ZWQ7XG4gICAgICB9KTtcbiAgICB9IC8vIFNwbGl0IGFycmF5IGludG8gcGxhY2Vob2xkZXJzIGFuZCBcIm5vcm1hbFwiIGNob2ljZXNcblxuXG4gICAgdmFyIF9yZW5kZXJlcmFibGVDaG9pY2VzJCA9IHJlbmRlcmVyYWJsZUNob2ljZXMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGNob2ljZSkge1xuICAgICAgaWYgKGNob2ljZS5wbGFjZWhvbGRlcikge1xuICAgICAgICBhY2MucGxhY2Vob2xkZXJDaG9pY2VzLnB1c2goY2hvaWNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjYy5ub3JtYWxDaG9pY2VzLnB1c2goY2hvaWNlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7XG4gICAgICBwbGFjZWhvbGRlckNob2ljZXM6IFtdLFxuICAgICAgbm9ybWFsQ2hvaWNlczogW11cbiAgICB9KSxcbiAgICAgICAgcGxhY2Vob2xkZXJDaG9pY2VzID0gX3JlbmRlcmVyYWJsZUNob2ljZXMkLnBsYWNlaG9sZGVyQ2hvaWNlcyxcbiAgICAgICAgbm9ybWFsQ2hvaWNlcyA9IF9yZW5kZXJlcmFibGVDaG9pY2VzJC5ub3JtYWxDaG9pY2VzOyAvLyBJZiBzb3J0aW5nIGlzIGVuYWJsZWQgb3IgdGhlIHVzZXIgaXMgc2VhcmNoaW5nLCBmaWx0ZXIgY2hvaWNlc1xuXG5cbiAgICBpZiAodGhpcy5jb25maWcuc2hvdWxkU29ydCB8fCB0aGlzLl9pc1NlYXJjaGluZykge1xuICAgICAgbm9ybWFsQ2hvaWNlcy5zb3J0KGZpbHRlcik7XG4gICAgfVxuXG4gICAgdmFyIGNob2ljZUxpbWl0ID0gcmVuZGVyZXJhYmxlQ2hvaWNlcy5sZW5ndGg7IC8vIFByZXBlbmQgcGxhY2Vob2xlZGVyXG5cbiAgICB2YXIgc29ydGVkQ2hvaWNlcyA9IHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCA/IFtdLmNvbmNhdChwbGFjZWhvbGRlckNob2ljZXMsIG5vcm1hbENob2ljZXMpIDogbm9ybWFsQ2hvaWNlcztcblxuICAgIGlmICh0aGlzLl9pc1NlYXJjaGluZykge1xuICAgICAgY2hvaWNlTGltaXQgPSBzZWFyY2hSZXN1bHRMaW1pdDtcbiAgICB9IGVsc2UgaWYgKHJlbmRlckNob2ljZUxpbWl0ICYmIHJlbmRlckNob2ljZUxpbWl0ID4gMCAmJiAhd2l0aGluR3JvdXApIHtcbiAgICAgIGNob2ljZUxpbWl0ID0gcmVuZGVyQ2hvaWNlTGltaXQ7XG4gICAgfSAvLyBBZGQgZWFjaCBjaG9pY2UgdG8gZHJvcGRvd24gd2l0aGluIHJhbmdlXG5cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hvaWNlTGltaXQ7IGkgKz0gMSkge1xuICAgICAgaWYgKHNvcnRlZENob2ljZXNbaV0pIHtcbiAgICAgICAgYXBwZW5kQ2hvaWNlKHNvcnRlZENob2ljZXNbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFnbWVudDtcbiAgfTtcblxuICBfcHJvdG8uX2NyZWF0ZUl0ZW1zRnJhZ21lbnQgPSBmdW5jdGlvbiBfY3JlYXRlSXRlbXNGcmFnbWVudChpdGVtcywgZnJhZ21lbnQpIHtcbiAgICB2YXIgX3RoaXMxNSA9IHRoaXM7XG5cbiAgICBpZiAoZnJhZ21lbnQgPT09IHZvaWQgMCkge1xuICAgICAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIGZyYWdtZW50IHRvIGFkZCBlbGVtZW50cyB0b1xuICAgIHZhciBfdGhpcyRjb25maWcyID0gdGhpcy5jb25maWcsXG4gICAgICAgIHNob3VsZFNvcnRJdGVtcyA9IF90aGlzJGNvbmZpZzIuc2hvdWxkU29ydEl0ZW1zLFxuICAgICAgICBzb3J0ZXIgPSBfdGhpcyRjb25maWcyLnNvcnRlcixcbiAgICAgICAgcmVtb3ZlSXRlbUJ1dHRvbiA9IF90aGlzJGNvbmZpZzIucmVtb3ZlSXRlbUJ1dHRvbjsgLy8gSWYgc29ydGluZyBpcyBlbmFibGVkLCBmaWx0ZXIgaXRlbXNcblxuICAgIGlmIChzaG91bGRTb3J0SXRlbXMgJiYgIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgaXRlbXMuc29ydChzb3J0ZXIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIHZhbHVlIG9mIHRoZSBoaWRkZW4gaW5wdXRcbiAgICAgIHRoaXMucGFzc2VkRWxlbWVudC52YWx1ZSA9IGl0ZW1zO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIG9wdGlvbnMgb2YgdGhlIGhpZGRlbiBpbnB1dFxuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50Lm9wdGlvbnMgPSBpdGVtcztcbiAgICB9XG5cbiAgICB2YXIgYWRkSXRlbVRvRnJhZ21lbnQgPSBmdW5jdGlvbiBhZGRJdGVtVG9GcmFnbWVudChpdGVtKSB7XG4gICAgICAvLyBDcmVhdGUgbmV3IGxpc3QgZWxlbWVudFxuICAgICAgdmFyIGxpc3RJdGVtID0gX3RoaXMxNS5fZ2V0VGVtcGxhdGUoJ2l0ZW0nLCBpdGVtLCByZW1vdmVJdGVtQnV0dG9uKTsgLy8gQXBwZW5kIGl0IHRvIGxpc3RcblxuXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChsaXN0SXRlbSk7XG4gICAgfTsgLy8gQWRkIGVhY2ggbGlzdCBpdGVtIHRvIGxpc3RcblxuXG4gICAgaXRlbXMuZm9yRWFjaChhZGRJdGVtVG9GcmFnbWVudCk7XG4gICAgcmV0dXJuIGZyYWdtZW50O1xuICB9O1xuXG4gIF9wcm90by5fdHJpZ2dlckNoYW5nZSA9IGZ1bmN0aW9uIF90cmlnZ2VyQ2hhbmdlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5jaGFuZ2UsIHtcbiAgICAgIHZhbHVlOiB2YWx1ZVxuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90by5fc2VsZWN0UGxhY2Vob2xkZXJDaG9pY2UgPSBmdW5jdGlvbiBfc2VsZWN0UGxhY2Vob2xkZXJDaG9pY2UoKSB7XG4gICAgdmFyIHBsYWNlaG9sZGVyQ2hvaWNlID0gdGhpcy5fc3RvcmUucGxhY2Vob2xkZXJDaG9pY2U7XG5cbiAgICBpZiAocGxhY2Vob2xkZXJDaG9pY2UpIHtcbiAgICAgIHRoaXMuX2FkZEl0ZW0oe1xuICAgICAgICB2YWx1ZTogcGxhY2Vob2xkZXJDaG9pY2UudmFsdWUsXG4gICAgICAgIGxhYmVsOiBwbGFjZWhvbGRlckNob2ljZS5sYWJlbCxcbiAgICAgICAgY2hvaWNlSWQ6IHBsYWNlaG9sZGVyQ2hvaWNlLmlkLFxuICAgICAgICBncm91cElkOiBwbGFjZWhvbGRlckNob2ljZS5ncm91cElkLFxuICAgICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXJDaG9pY2UucGxhY2Vob2xkZXJcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlKHBsYWNlaG9sZGVyQ2hvaWNlLnZhbHVlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9oYW5kbGVCdXR0b25BY3Rpb24gPSBmdW5jdGlvbiBfaGFuZGxlQnV0dG9uQWN0aW9uKGFjdGl2ZUl0ZW1zLCBlbGVtZW50KSB7XG4gICAgaWYgKCFhY3RpdmVJdGVtcyB8fCAhZWxlbWVudCB8fCAhdGhpcy5jb25maWcucmVtb3ZlSXRlbXMgfHwgIXRoaXMuY29uZmlnLnJlbW92ZUl0ZW1CdXR0b24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXRlbUlkID0gZWxlbWVudC5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuICAgIHZhciBpdGVtVG9SZW1vdmUgPSBhY3RpdmVJdGVtcy5maW5kKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5pZCA9PT0gcGFyc2VJbnQoaXRlbUlkLCAxMCk7XG4gICAgfSk7IC8vIFJlbW92ZSBpdGVtIGFzc29jaWF0ZWQgd2l0aCBidXR0b25cblxuICAgIHRoaXMuX3JlbW92ZUl0ZW0oaXRlbVRvUmVtb3ZlKTtcblxuICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2UoaXRlbVRvUmVtb3ZlLnZhbHVlKTtcblxuICAgIGlmICh0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3NlbGVjdFBsYWNlaG9sZGVyQ2hvaWNlKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5faGFuZGxlSXRlbUFjdGlvbiA9IGZ1bmN0aW9uIF9oYW5kbGVJdGVtQWN0aW9uKGFjdGl2ZUl0ZW1zLCBlbGVtZW50LCBoYXNTaGlmdEtleSkge1xuICAgIHZhciBfdGhpczE2ID0gdGhpcztcblxuICAgIGlmIChoYXNTaGlmdEtleSA9PT0gdm9pZCAwKSB7XG4gICAgICBoYXNTaGlmdEtleSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghYWN0aXZlSXRlbXMgfHwgIWVsZW1lbnQgfHwgIXRoaXMuY29uZmlnLnJlbW92ZUl0ZW1zIHx8IHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXNzZWRJZCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7IC8vIFdlIG9ubHkgd2FudCB0byBzZWxlY3Qgb25lIGl0ZW0gd2l0aCBhIGNsaWNrXG4gICAgLy8gc28gd2UgZGVzZWxlY3QgYW55IGl0ZW1zIHRoYXQgYXJlbid0IHRoZSB0YXJnZXRcbiAgICAvLyB1bmxlc3Mgc2hpZnQgaXMgYmVpbmcgcHJlc3NlZFxuXG4gICAgYWN0aXZlSXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKGl0ZW0uaWQgPT09IHBhcnNlSW50KHBhc3NlZElkLCAxMCkgJiYgIWl0ZW0uaGlnaGxpZ2h0ZWQpIHtcbiAgICAgICAgX3RoaXMxNi5oaWdobGlnaHRJdGVtKGl0ZW0pO1xuICAgICAgfSBlbHNlIGlmICghaGFzU2hpZnRLZXkgJiYgaXRlbS5oaWdobGlnaHRlZCkge1xuICAgICAgICBfdGhpczE2LnVuaGlnaGxpZ2h0SXRlbShpdGVtKTtcbiAgICAgIH1cbiAgICB9KTsgLy8gRm9jdXMgaW5wdXQgYXMgd2l0aG91dCBmb2N1cywgYSB1c2VyIGNhbm5vdCBkbyBhbnl0aGluZyB3aXRoIGFcbiAgICAvLyBoaWdobGlnaHRlZCBpdGVtXG5cbiAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gIH07XG5cbiAgX3Byb3RvLl9oYW5kbGVDaG9pY2VBY3Rpb24gPSBmdW5jdGlvbiBfaGFuZGxlQ2hvaWNlQWN0aW9uKGFjdGl2ZUl0ZW1zLCBlbGVtZW50KSB7XG4gICAgaWYgKCFhY3RpdmVJdGVtcyB8fCAhZWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgd2UgYXJlIGNsaWNraW5nIG9uIGFuIG9wdGlvblxuXG5cbiAgICB2YXIgaWQgPSBlbGVtZW50LmRhdGFzZXQuaWQ7XG5cbiAgICB2YXIgY2hvaWNlID0gdGhpcy5fc3RvcmUuZ2V0Q2hvaWNlQnlJZChpZCk7XG5cbiAgICBpZiAoIWNob2ljZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXNzZWRLZXlDb2RlID0gYWN0aXZlSXRlbXNbMF0gJiYgYWN0aXZlSXRlbXNbMF0ua2V5Q29kZSA/IGFjdGl2ZUl0ZW1zWzBdLmtleUNvZGUgOiBudWxsO1xuICAgIHZhciBoYXNBY3RpdmVEcm9wZG93biA9IHRoaXMuZHJvcGRvd24uaXNBY3RpdmU7IC8vIFVwZGF0ZSBjaG9pY2Uga2V5Q29kZVxuXG4gICAgY2hvaWNlLmtleUNvZGUgPSBwYXNzZWRLZXlDb2RlO1xuICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLmNob2ljZSwge1xuICAgICAgY2hvaWNlOiBjaG9pY2VcbiAgICB9KTtcblxuICAgIGlmICghY2hvaWNlLnNlbGVjdGVkICYmICFjaG9pY2UuZGlzYWJsZWQpIHtcbiAgICAgIHZhciBjYW5BZGRJdGVtID0gdGhpcy5fY2FuQWRkSXRlbShhY3RpdmVJdGVtcywgY2hvaWNlLnZhbHVlKTtcblxuICAgICAgaWYgKGNhbkFkZEl0ZW0ucmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgICAgdmFsdWU6IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICBsYWJlbDogY2hvaWNlLmxhYmVsLFxuICAgICAgICAgIGNob2ljZUlkOiBjaG9pY2UuaWQsXG4gICAgICAgICAgZ3JvdXBJZDogY2hvaWNlLmdyb3VwSWQsXG4gICAgICAgICAgY3VzdG9tUHJvcGVydGllczogY2hvaWNlLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGNob2ljZS5wbGFjZWhvbGRlcixcbiAgICAgICAgICBrZXlDb2RlOiBjaG9pY2Uua2V5Q29kZVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlKGNob2ljZS52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhcklucHV0KCk7IC8vIFdlIHdhbnQgdG8gY2xvc2UgdGhlIGRyb3Bkb3duIGlmIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBzaW5nbGUgc2VsZWN0IGJveFxuXG4gICAgaWYgKGhhc0FjdGl2ZURyb3Bkb3duICYmIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5faGFuZGxlQmFja3NwYWNlID0gZnVuY3Rpb24gX2hhbmRsZUJhY2tzcGFjZShhY3RpdmVJdGVtcykge1xuICAgIGlmICghdGhpcy5jb25maWcucmVtb3ZlSXRlbXMgfHwgIWFjdGl2ZUl0ZW1zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxhc3RJdGVtID0gYWN0aXZlSXRlbXNbYWN0aXZlSXRlbXMubGVuZ3RoIC0gMV07XG4gICAgdmFyIGhhc0hpZ2hsaWdodGVkSXRlbXMgPSBhY3RpdmVJdGVtcy5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbS5oaWdobGlnaHRlZDtcbiAgICB9KTsgLy8gSWYgZWRpdGluZyB0aGUgbGFzdCBpdGVtIGlzIGFsbG93ZWQgYW5kIHRoZXJlIGFyZSBub3Qgb3RoZXIgc2VsZWN0ZWQgaXRlbXMsXG4gICAgLy8gd2UgY2FuIGVkaXQgdGhlIGl0ZW0gdmFsdWUuIE90aGVyd2lzZSBpZiB3ZSBjYW4gcmVtb3ZlIGl0ZW1zLCByZW1vdmUgYWxsIHNlbGVjdGVkIGl0ZW1zXG5cbiAgICBpZiAodGhpcy5jb25maWcuZWRpdEl0ZW1zICYmICFoYXNIaWdobGlnaHRlZEl0ZW1zICYmIGxhc3RJdGVtKSB7XG4gICAgICB0aGlzLmlucHV0LnZhbHVlID0gbGFzdEl0ZW0udmFsdWU7XG4gICAgICB0aGlzLmlucHV0LnNldFdpZHRoKCk7XG5cbiAgICAgIHRoaXMuX3JlbW92ZUl0ZW0obGFzdEl0ZW0pO1xuXG4gICAgICB0aGlzLl90cmlnZ2VyQ2hhbmdlKGxhc3RJdGVtLnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCFoYXNIaWdobGlnaHRlZEl0ZW1zKSB7XG4gICAgICAgIC8vIEhpZ2hsaWdodCBsYXN0IGl0ZW0gaWYgbm9uZSBhbHJlYWR5IGhpZ2hsaWdodGVkXG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0SXRlbShsYXN0SXRlbSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbW92ZUhpZ2hsaWdodGVkSXRlbXModHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fc3RhcnRMb2FkaW5nID0gZnVuY3Rpb24gX3N0YXJ0TG9hZGluZygpIHtcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChzZXRJc0xvYWRpbmcodHJ1ZSkpO1xuICB9O1xuXG4gIF9wcm90by5fc3RvcExvYWRpbmcgPSBmdW5jdGlvbiBfc3RvcExvYWRpbmcoKSB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goc2V0SXNMb2FkaW5nKGZhbHNlKSk7XG4gIH07XG5cbiAgX3Byb3RvLl9oYW5kbGVMb2FkaW5nU3RhdGUgPSBmdW5jdGlvbiBfaGFuZGxlTG9hZGluZ1N0YXRlKHNldExvYWRpbmcpIHtcbiAgICBpZiAoc2V0TG9hZGluZyA9PT0gdm9pZCAwKSB7XG4gICAgICBzZXRMb2FkaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgcGxhY2Vob2xkZXJJdGVtID0gdGhpcy5pdGVtTGlzdC5nZXRDaGlsZChcIi5cIiArIHRoaXMuY29uZmlnLmNsYXNzTmFtZXMucGxhY2Vob2xkZXIpO1xuXG4gICAgaWYgKHNldExvYWRpbmcpIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5hZGRMb2FkaW5nU3RhdGUoKTtcblxuICAgICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgICBpZiAoIXBsYWNlaG9sZGVySXRlbSkge1xuICAgICAgICAgIHBsYWNlaG9sZGVySXRlbSA9IHRoaXMuX2dldFRlbXBsYXRlKCdwbGFjZWhvbGRlcicsIHRoaXMuY29uZmlnLmxvYWRpbmdUZXh0KTtcbiAgICAgICAgICB0aGlzLml0ZW1MaXN0LmFwcGVuZChwbGFjZWhvbGRlckl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYWNlaG9sZGVySXRlbS5pbm5lckhUTUwgPSB0aGlzLmNvbmZpZy5sb2FkaW5nVGV4dDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbnB1dC5wbGFjZWhvbGRlciA9IHRoaXMuY29uZmlnLmxvYWRpbmdUZXh0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVMb2FkaW5nU3RhdGUoKTtcblxuICAgICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgICBwbGFjZWhvbGRlckl0ZW0uaW5uZXJIVE1MID0gdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZSB8fCAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLl9wbGFjZWhvbGRlclZhbHVlIHx8ICcnO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2hhbmRsZVNlYXJjaCA9IGZ1bmN0aW9uIF9oYW5kbGVTZWFyY2godmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlIHx8ICF0aGlzLmlucHV0LmlzRm9jdXNzZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgY2hvaWNlcyA9IHRoaXMuX3N0b3JlLmNob2ljZXM7XG4gICAgdmFyIF90aGlzJGNvbmZpZzMgPSB0aGlzLmNvbmZpZyxcbiAgICAgICAgc2VhcmNoRmxvb3IgPSBfdGhpcyRjb25maWczLnNlYXJjaEZsb29yLFxuICAgICAgICBzZWFyY2hDaG9pY2VzID0gX3RoaXMkY29uZmlnMy5zZWFyY2hDaG9pY2VzO1xuICAgIHZhciBoYXNVbmFjdGl2ZUNob2ljZXMgPSBjaG9pY2VzLnNvbWUoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgICAgcmV0dXJuICFvcHRpb24uYWN0aXZlO1xuICAgIH0pOyAvLyBDaGVjayB0aGF0IHdlIGhhdmUgYSB2YWx1ZSB0byBzZWFyY2ggYW5kIHRoZSBpbnB1dCB3YXMgYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlclxuXG4gICAgaWYgKHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+PSBzZWFyY2hGbG9vcikge1xuICAgICAgdmFyIHJlc3VsdENvdW50ID0gc2VhcmNoQ2hvaWNlcyA/IHRoaXMuX3NlYXJjaENob2ljZXModmFsdWUpIDogMDsgLy8gVHJpZ2dlciBzZWFyY2ggZXZlbnRcblxuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMuc2VhcmNoLCB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgcmVzdWx0Q291bnQ6IHJlc3VsdENvdW50XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGhhc1VuYWN0aXZlQ2hvaWNlcykge1xuICAgICAgLy8gT3RoZXJ3aXNlIHJlc2V0IGNob2ljZXMgdG8gYWN0aXZlXG4gICAgICB0aGlzLl9pc1NlYXJjaGluZyA9IGZhbHNlO1xuXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2FjdGl2YXRlQ2hvaWNlcyh0cnVlKSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fY2FuQWRkSXRlbSA9IGZ1bmN0aW9uIF9jYW5BZGRJdGVtKGFjdGl2ZUl0ZW1zLCB2YWx1ZSkge1xuICAgIHZhciBjYW5BZGRJdGVtID0gdHJ1ZTtcbiAgICB2YXIgbm90aWNlID0gdHlwZW9mIHRoaXMuY29uZmlnLmFkZEl0ZW1UZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcuYWRkSXRlbVRleHQodmFsdWUpIDogdGhpcy5jb25maWcuYWRkSXRlbVRleHQ7XG5cbiAgICBpZiAoIXRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdmFyIGlzRHVwbGljYXRlVmFsdWUgPSBleGlzdHNJbkFycmF5KGFjdGl2ZUl0ZW1zLCB2YWx1ZSk7XG5cbiAgICAgIGlmICh0aGlzLmNvbmZpZy5tYXhJdGVtQ291bnQgPiAwICYmIHRoaXMuY29uZmlnLm1heEl0ZW1Db3VudCA8PSBhY3RpdmVJdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYSBtYXggZW50cnkgbGltaXQgYW5kIHdlIGhhdmUgcmVhY2hlZCB0aGF0IGxpbWl0XG4gICAgICAgIC8vIGRvbid0IHVwZGF0ZVxuICAgICAgICBjYW5BZGRJdGVtID0gZmFsc2U7XG4gICAgICAgIG5vdGljZSA9IHR5cGVvZiB0aGlzLmNvbmZpZy5tYXhJdGVtVGV4dCA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMuY29uZmlnLm1heEl0ZW1UZXh0KHRoaXMuY29uZmlnLm1heEl0ZW1Db3VudCkgOiB0aGlzLmNvbmZpZy5tYXhJdGVtVGV4dDtcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmNvbmZpZy5kdXBsaWNhdGVJdGVtc0FsbG93ZWQgJiYgaXNEdXBsaWNhdGVWYWx1ZSAmJiBjYW5BZGRJdGVtKSB7XG4gICAgICAgIGNhbkFkZEl0ZW0gPSBmYWxzZTtcbiAgICAgICAgbm90aWNlID0gdHlwZW9mIHRoaXMuY29uZmlnLnVuaXF1ZUl0ZW1UZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQodmFsdWUpIDogdGhpcy5jb25maWcudW5pcXVlSXRlbVRleHQ7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50ICYmIHRoaXMuY29uZmlnLmFkZEl0ZW1zICYmIGNhbkFkZEl0ZW0gJiYgdHlwZW9mIHRoaXMuY29uZmlnLmFkZEl0ZW1GaWx0ZXIgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMuY29uZmlnLmFkZEl0ZW1GaWx0ZXIodmFsdWUpKSB7XG4gICAgICAgIGNhbkFkZEl0ZW0gPSBmYWxzZTtcbiAgICAgICAgbm90aWNlID0gdHlwZW9mIHRoaXMuY29uZmlnLmN1c3RvbUFkZEl0ZW1UZXh0ID09PSAnZnVuY3Rpb24nID8gdGhpcy5jb25maWcuY3VzdG9tQWRkSXRlbVRleHQodmFsdWUpIDogdGhpcy5jb25maWcuY3VzdG9tQWRkSXRlbVRleHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlc3BvbnNlOiBjYW5BZGRJdGVtLFxuICAgICAgbm90aWNlOiBub3RpY2VcbiAgICB9O1xuICB9O1xuXG4gIF9wcm90by5fc2VhcmNoQ2hvaWNlcyA9IGZ1bmN0aW9uIF9zZWFyY2hDaG9pY2VzKHZhbHVlKSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnRyaW0oKSA6IHZhbHVlO1xuICAgIHZhciBjdXJyZW50VmFsdWUgPSB0eXBlb2YgdGhpcy5fY3VycmVudFZhbHVlID09PSAnc3RyaW5nJyA/IHRoaXMuX2N1cnJlbnRWYWx1ZS50cmltKCkgOiB0aGlzLl9jdXJyZW50VmFsdWU7XG5cbiAgICBpZiAobmV3VmFsdWUubGVuZ3RoIDwgMSAmJiBuZXdWYWx1ZSA9PT0gY3VycmVudFZhbHVlICsgXCIgXCIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gLy8gSWYgbmV3IHZhbHVlIG1hdGNoZXMgdGhlIGRlc2lyZWQgbGVuZ3RoIGFuZCBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIGN1cnJlbnQgdmFsdWUgd2l0aCBhIHNwYWNlXG5cblxuICAgIHZhciBoYXlzdGFjayA9IHRoaXMuX3N0b3JlLnNlYXJjaGFibGVDaG9pY2VzO1xuICAgIHZhciBuZWVkbGUgPSBuZXdWYWx1ZTtcbiAgICB2YXIga2V5cyA9IFtdLmNvbmNhdCh0aGlzLmNvbmZpZy5zZWFyY2hGaWVsZHMpO1xuICAgIHZhciBvcHRpb25zID0gT2JqZWN0LmFzc2lnbih0aGlzLmNvbmZpZy5mdXNlT3B0aW9ucywge1xuICAgICAga2V5czoga2V5c1xuICAgIH0pO1xuICAgIHZhciBmdXNlID0gbmV3IGZ1c2VfZGVmYXVsdC5hKGhheXN0YWNrLCBvcHRpb25zKTtcbiAgICB2YXIgcmVzdWx0cyA9IGZ1c2Uuc2VhcmNoKG5lZWRsZSk7XG4gICAgdGhpcy5fY3VycmVudFZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy5faGlnaGxpZ2h0UG9zaXRpb24gPSAwO1xuICAgIHRoaXMuX2lzU2VhcmNoaW5nID0gdHJ1ZTtcblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGNob2ljZXNfZmlsdGVyQ2hvaWNlcyhyZXN1bHRzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0cy5sZW5ndGg7XG4gIH07XG5cbiAgX3Byb3RvLl9hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9hZGRFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgX2RvY3VtZW50ID0gZG9jdW1lbnQsXG4gICAgICAgIGRvY3VtZW50RWxlbWVudCA9IF9kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IC8vIGNhcHR1cmUgZXZlbnRzIC0gY2FuIGNhbmNlbCBldmVudCBwcm9jZXNzaW5nIG9yIHByb3BhZ2F0aW9uXG5cbiAgICBkb2N1bWVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9vblRvdWNoRW5kLCB0cnVlKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93biwgdHJ1ZSk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duLCB0cnVlKTsgLy8gcGFzc2l2ZSBldmVudHMgLSBkb2Vzbid0IGNhbGwgYHByZXZlbnREZWZhdWx0YCBvciBgc3RvcFByb3BhZ2F0aW9uYFxuXG4gICAgZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGljaywge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIGRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLl9vblRvdWNoTW92ZSwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuICAgIHRoaXMuZHJvcGRvd24uZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbk1vdXNlT3Zlciwge1xuICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25Gb2N1cywge1xuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyLCB7XG4gICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXQuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX29uS2V5VXAsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmlucHV0LmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzLCB7XG4gICAgICBwYXNzaXZlOiB0cnVlXG4gICAgfSk7XG4gICAgdGhpcy5pbnB1dC5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9vbkJsdXIsIHtcbiAgICAgIHBhc3NpdmU6IHRydWVcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmlucHV0LmVsZW1lbnQuZm9ybSkge1xuICAgICAgdGhpcy5pbnB1dC5lbGVtZW50LmZvcm0uYWRkRXZlbnRMaXN0ZW5lcigncmVzZXQnLCB0aGlzLl9vbkZvcm1SZXNldCwge1xuICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgX3Byb3RvLl9yZW1vdmVFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9yZW1vdmVFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgX2RvY3VtZW50MiA9IGRvY3VtZW50LFxuICAgICAgICBkb2N1bWVudEVsZW1lbnQgPSBfZG9jdW1lbnQyLmRvY3VtZW50RWxlbWVudDtcbiAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLl9vblRvdWNoRW5kLCB0cnVlKTtcbiAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93biwgdHJ1ZSk7XG4gICAgdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX29uTW91c2VEb3duLCB0cnVlKTtcbiAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsaWNrKTtcbiAgICBkb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5fb25Ub3VjaE1vdmUpO1xuICAgIHRoaXMuZHJvcGRvd24uZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCB0aGlzLl9vbk1vdXNlT3Zlcik7XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25CbHVyKTtcbiAgICB9XG5cbiAgICB0aGlzLmlucHV0LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9vbktleVVwKTtcbiAgICB0aGlzLmlucHV0LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkZvY3VzKTtcbiAgICB0aGlzLmlucHV0LmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uQmx1cik7XG5cbiAgICBpZiAodGhpcy5pbnB1dC5lbGVtZW50LmZvcm0pIHtcbiAgICAgIHRoaXMuaW5wdXQuZWxlbWVudC5mb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2V0JywgdGhpcy5fb25Gb3JtUmVzZXQpO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtLZXlib2FyZEV2ZW50fSBldmVudFxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5fb25LZXlEb3duID0gZnVuY3Rpb24gX29uS2V5RG93bihldmVudCkge1xuICAgIHZhciBfa2V5RG93bkFjdGlvbnM7XG5cbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LFxuICAgICAgICBrZXlDb2RlID0gZXZlbnQua2V5Q29kZSxcbiAgICAgICAgY3RybEtleSA9IGV2ZW50LmN0cmxLZXksXG4gICAgICAgIG1ldGFLZXkgPSBldmVudC5tZXRhS2V5O1xuICAgIHZhciBhY3RpdmVJdGVtcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zO1xuICAgIHZhciBoYXNGb2N1c2VkSW5wdXQgPSB0aGlzLmlucHV0LmlzRm9jdXNzZWQ7XG4gICAgdmFyIGhhc0FjdGl2ZURyb3Bkb3duID0gdGhpcy5kcm9wZG93bi5pc0FjdGl2ZTtcbiAgICB2YXIgaGFzSXRlbXMgPSB0aGlzLml0ZW1MaXN0Lmhhc0NoaWxkcmVuKCk7XG4gICAgdmFyIGtleVN0cmluZyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoa2V5Q29kZSk7XG4gICAgdmFyIEJBQ0tfS0VZID0gS0VZX0NPREVTLkJBQ0tfS0VZLFxuICAgICAgICBERUxFVEVfS0VZID0gS0VZX0NPREVTLkRFTEVURV9LRVksXG4gICAgICAgIEVOVEVSX0tFWSA9IEtFWV9DT0RFUy5FTlRFUl9LRVksXG4gICAgICAgIEFfS0VZID0gS0VZX0NPREVTLkFfS0VZLFxuICAgICAgICBFU0NfS0VZID0gS0VZX0NPREVTLkVTQ19LRVksXG4gICAgICAgIFVQX0tFWSA9IEtFWV9DT0RFUy5VUF9LRVksXG4gICAgICAgIERPV05fS0VZID0gS0VZX0NPREVTLkRPV05fS0VZLFxuICAgICAgICBQQUdFX1VQX0tFWSA9IEtFWV9DT0RFUy5QQUdFX1VQX0tFWSxcbiAgICAgICAgUEFHRV9ET1dOX0tFWSA9IEtFWV9DT0RFUy5QQUdFX0RPV05fS0VZO1xuICAgIHZhciBoYXNDdHJsRG93bktleVByZXNzZWQgPSBjdHJsS2V5IHx8IG1ldGFLZXk7IC8vIElmIGEgdXNlciBpcyB0eXBpbmcgYW5kIHRoZSBkcm9wZG93biBpcyBub3QgYWN0aXZlXG5cbiAgICBpZiAoIXRoaXMuX2lzVGV4dEVsZW1lbnQgJiYgL1thLXpBLVowLTktXyBdLy50ZXN0KGtleVN0cmluZykpIHtcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgfSAvLyBNYXAga2V5cyB0byBrZXkgYWN0aW9uc1xuXG5cbiAgICB2YXIga2V5RG93bkFjdGlvbnMgPSAoX2tleURvd25BY3Rpb25zID0ge30sIF9rZXlEb3duQWN0aW9uc1tBX0tFWV0gPSB0aGlzLl9vbkFLZXksIF9rZXlEb3duQWN0aW9uc1tFTlRFUl9LRVldID0gdGhpcy5fb25FbnRlcktleSwgX2tleURvd25BY3Rpb25zW0VTQ19LRVldID0gdGhpcy5fb25Fc2NhcGVLZXksIF9rZXlEb3duQWN0aW9uc1tVUF9LRVldID0gdGhpcy5fb25EaXJlY3Rpb25LZXksIF9rZXlEb3duQWN0aW9uc1tQQUdFX1VQX0tFWV0gPSB0aGlzLl9vbkRpcmVjdGlvbktleSwgX2tleURvd25BY3Rpb25zW0RPV05fS0VZXSA9IHRoaXMuX29uRGlyZWN0aW9uS2V5LCBfa2V5RG93bkFjdGlvbnNbUEFHRV9ET1dOX0tFWV0gPSB0aGlzLl9vbkRpcmVjdGlvbktleSwgX2tleURvd25BY3Rpb25zW0RFTEVURV9LRVldID0gdGhpcy5fb25EZWxldGVLZXksIF9rZXlEb3duQWN0aW9uc1tCQUNLX0tFWV0gPSB0aGlzLl9vbkRlbGV0ZUtleSwgX2tleURvd25BY3Rpb25zKTsgLy8gSWYga2V5Y29kZSBoYXMgYSBmdW5jdGlvbiwgcnVuIGl0XG5cbiAgICBpZiAoa2V5RG93bkFjdGlvbnNba2V5Q29kZV0pIHtcbiAgICAgIGtleURvd25BY3Rpb25zW2tleUNvZGVdKHtcbiAgICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAga2V5Q29kZToga2V5Q29kZSxcbiAgICAgICAgbWV0YUtleTogbWV0YUtleSxcbiAgICAgICAgYWN0aXZlSXRlbXM6IGFjdGl2ZUl0ZW1zLFxuICAgICAgICBoYXNGb2N1c2VkSW5wdXQ6IGhhc0ZvY3VzZWRJbnB1dCxcbiAgICAgICAgaGFzQWN0aXZlRHJvcGRvd246IGhhc0FjdGl2ZURyb3Bkb3duLFxuICAgICAgICBoYXNJdGVtczogaGFzSXRlbXMsXG4gICAgICAgIGhhc0N0cmxEb3duS2V5UHJlc3NlZDogaGFzQ3RybERvd25LZXlQcmVzc2VkXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbktleVVwID0gZnVuY3Rpb24gX29uS2V5VXAoX3JlZjIpIHtcbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjIudGFyZ2V0LFxuICAgICAgICBrZXlDb2RlID0gX3JlZjIua2V5Q29kZTtcbiAgICB2YXIgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuICAgIHZhciBhY3RpdmVJdGVtcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zO1xuXG4gICAgdmFyIGNhbkFkZEl0ZW0gPSB0aGlzLl9jYW5BZGRJdGVtKGFjdGl2ZUl0ZW1zLCB2YWx1ZSk7XG5cbiAgICB2YXIgYmFja0tleSA9IEtFWV9DT0RFUy5CQUNLX0tFWSxcbiAgICAgICAgZGVsZXRlS2V5ID0gS0VZX0NPREVTLkRFTEVURV9LRVk7IC8vIFdlIGFyZSB0eXBpbmcgaW50byBhIHRleHQgaW5wdXQgYW5kIGhhdmUgYSB2YWx1ZSwgd2Ugd2FudCB0byBzaG93IGEgZHJvcGRvd25cbiAgICAvLyBub3RpY2UuIE90aGVyd2lzZSBoaWRlIHRoZSBkcm9wZG93blxuXG4gICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgIHZhciBjYW5TaG93RHJvcGRvd25Ob3RpY2UgPSBjYW5BZGRJdGVtLm5vdGljZSAmJiB2YWx1ZTtcblxuICAgICAgaWYgKGNhblNob3dEcm9wZG93bk5vdGljZSkge1xuICAgICAgICB2YXIgZHJvcGRvd25JdGVtID0gdGhpcy5fZ2V0VGVtcGxhdGUoJ25vdGljZScsIGNhbkFkZEl0ZW0ubm90aWNlKTtcblxuICAgICAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuaW5uZXJIVE1MID0gZHJvcGRvd25JdGVtLm91dGVySFRNTDtcbiAgICAgICAgdGhpcy5zaG93RHJvcGRvd24odHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVzZXJIYXNSZW1vdmVkVmFsdWUgPSAoa2V5Q29kZSA9PT0gYmFja0tleSB8fCBrZXlDb2RlID09PSBkZWxldGVLZXkpICYmICF0YXJnZXQudmFsdWU7XG4gICAgICB2YXIgY2FuUmVhY3RpdmF0ZUNob2ljZXMgPSAhdGhpcy5faXNUZXh0RWxlbWVudCAmJiB0aGlzLl9pc1NlYXJjaGluZztcbiAgICAgIHZhciBjYW5TZWFyY2ggPSB0aGlzLl9jYW5TZWFyY2ggJiYgY2FuQWRkSXRlbS5yZXNwb25zZTtcblxuICAgICAgaWYgKHVzZXJIYXNSZW1vdmVkVmFsdWUgJiYgY2FuUmVhY3RpdmF0ZUNob2ljZXMpIHtcbiAgICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChjaG9pY2VzX2FjdGl2YXRlQ2hvaWNlcyh0cnVlKSk7XG4gICAgICB9IGVsc2UgaWYgKGNhblNlYXJjaCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVTZWFyY2godGhpcy5pbnB1dC52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fY2FuU2VhcmNoID0gdGhpcy5jb25maWcuc2VhcmNoRW5hYmxlZDtcbiAgfTtcblxuICBfcHJvdG8uX29uQUtleSA9IGZ1bmN0aW9uIF9vbkFLZXkoX3JlZjMpIHtcbiAgICB2YXIgaGFzSXRlbXMgPSBfcmVmMy5oYXNJdGVtcyxcbiAgICAgICAgaGFzQ3RybERvd25LZXlQcmVzc2VkID0gX3JlZjMuaGFzQ3RybERvd25LZXlQcmVzc2VkO1xuXG4gICAgLy8gSWYgQ1RSTCArIEEgb3IgQ01EICsgQSBoYXZlIGJlZW4gcHJlc3NlZCBhbmQgdGhlcmUgYXJlIGl0ZW1zIHRvIHNlbGVjdFxuICAgIGlmIChoYXNDdHJsRG93bktleVByZXNzZWQgJiYgaGFzSXRlbXMpIHtcbiAgICAgIHRoaXMuX2NhblNlYXJjaCA9IGZhbHNlO1xuICAgICAgdmFyIHNob3VsZEhpZ2h0bGlnaHRBbGwgPSB0aGlzLmNvbmZpZy5yZW1vdmVJdGVtcyAmJiAhdGhpcy5pbnB1dC52YWx1ZSAmJiB0aGlzLmlucHV0LmVsZW1lbnQgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cbiAgICAgIGlmIChzaG91bGRIaWdodGxpZ2h0QWxsKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25FbnRlcktleSA9IGZ1bmN0aW9uIF9vbkVudGVyS2V5KF9yZWY0KSB7XG4gICAgdmFyIGV2ZW50ID0gX3JlZjQuZXZlbnQsXG4gICAgICAgIHRhcmdldCA9IF9yZWY0LnRhcmdldCxcbiAgICAgICAgYWN0aXZlSXRlbXMgPSBfcmVmNC5hY3RpdmVJdGVtcyxcbiAgICAgICAgaGFzQWN0aXZlRHJvcGRvd24gPSBfcmVmNC5oYXNBY3RpdmVEcm9wZG93bjtcbiAgICB2YXIgZW50ZXJLZXkgPSBLRVlfQ09ERVMuRU5URVJfS0VZO1xuICAgIHZhciB0YXJnZXRXYXNCdXR0b24gPSB0YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWJ1dHRvbicpO1xuXG4gICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQgJiYgdGFyZ2V0LnZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB0aGlzLmlucHV0LnZhbHVlO1xuXG4gICAgICB2YXIgY2FuQWRkSXRlbSA9IHRoaXMuX2NhbkFkZEl0ZW0oYWN0aXZlSXRlbXMsIHZhbHVlKTtcblxuICAgICAgaWYgKGNhbkFkZEl0ZW0ucmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24odHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX3RyaWdnZXJDaGFuZ2UodmFsdWUpO1xuXG4gICAgICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0YXJnZXRXYXNCdXR0b24pIHtcbiAgICAgIHRoaXMuX2hhbmRsZUJ1dHRvbkFjdGlvbihhY3RpdmVJdGVtcywgdGFyZ2V0KTtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAoaGFzQWN0aXZlRHJvcGRvd24pIHtcbiAgICAgIHZhciBoaWdobGlnaHRlZENob2ljZSA9IHRoaXMuZHJvcGRvd24uZ2V0Q2hpbGQoXCIuXCIgKyB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLmhpZ2hsaWdodGVkU3RhdGUpO1xuXG4gICAgICBpZiAoaGlnaGxpZ2h0ZWRDaG9pY2UpIHtcbiAgICAgICAgLy8gYWRkIGVudGVyIGtleUNvZGUgdmFsdWVcbiAgICAgICAgaWYgKGFjdGl2ZUl0ZW1zWzBdKSB7XG4gICAgICAgICAgYWN0aXZlSXRlbXNbMF0ua2V5Q29kZSA9IGVudGVyS2V5OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9oYW5kbGVDaG9pY2VBY3Rpb24oYWN0aXZlSXRlbXMsIGhpZ2hsaWdodGVkQ2hvaWNlKTtcbiAgICAgIH1cblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25Fc2NhcGVLZXkgPSBmdW5jdGlvbiBfb25Fc2NhcGVLZXkoX3JlZjUpIHtcbiAgICB2YXIgaGFzQWN0aXZlRHJvcGRvd24gPSBfcmVmNS5oYXNBY3RpdmVEcm9wZG93bjtcblxuICAgIGlmIChoYXNBY3RpdmVEcm9wZG93bikge1xuICAgICAgdGhpcy5oaWRlRHJvcGRvd24odHJ1ZSk7XG4gICAgICB0aGlzLmNvbnRhaW5lck91dGVyLmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25EaXJlY3Rpb25LZXkgPSBmdW5jdGlvbiBfb25EaXJlY3Rpb25LZXkoX3JlZjYpIHtcbiAgICB2YXIgZXZlbnQgPSBfcmVmNi5ldmVudCxcbiAgICAgICAgaGFzQWN0aXZlRHJvcGRvd24gPSBfcmVmNi5oYXNBY3RpdmVEcm9wZG93bixcbiAgICAgICAga2V5Q29kZSA9IF9yZWY2LmtleUNvZGUsXG4gICAgICAgIG1ldGFLZXkgPSBfcmVmNi5tZXRhS2V5O1xuICAgIHZhciBkb3duS2V5ID0gS0VZX0NPREVTLkRPV05fS0VZLFxuICAgICAgICBwYWdlVXBLZXkgPSBLRVlfQ09ERVMuUEFHRV9VUF9LRVksXG4gICAgICAgIHBhZ2VEb3duS2V5ID0gS0VZX0NPREVTLlBBR0VfRE9XTl9LRVk7IC8vIElmIHVwIG9yIGRvd24ga2V5IGlzIHByZXNzZWQsIHRyYXZlcnNlIHRocm91Z2ggb3B0aW9uc1xuXG4gICAgaWYgKGhhc0FjdGl2ZURyb3Bkb3duIHx8IHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5zaG93RHJvcGRvd24oKTtcbiAgICAgIHRoaXMuX2NhblNlYXJjaCA9IGZhbHNlO1xuICAgICAgdmFyIGRpcmVjdGlvbkludCA9IGtleUNvZGUgPT09IGRvd25LZXkgfHwga2V5Q29kZSA9PT0gcGFnZURvd25LZXkgPyAxIDogLTE7XG4gICAgICB2YXIgc2tpcEtleSA9IG1ldGFLZXkgfHwga2V5Q29kZSA9PT0gcGFnZURvd25LZXkgfHwga2V5Q29kZSA9PT0gcGFnZVVwS2V5O1xuICAgICAgdmFyIHNlbGVjdGFibGVDaG9pY2VJZGVudGlmaWVyID0gJ1tkYXRhLWNob2ljZS1zZWxlY3RhYmxlXSc7XG4gICAgICB2YXIgbmV4dEVsO1xuXG4gICAgICBpZiAoc2tpcEtleSkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uSW50ID4gMCkge1xuICAgICAgICAgIG5leHRFbCA9IHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdGFibGVDaG9pY2VJZGVudGlmaWVyICsgXCI6bGFzdC1vZi10eXBlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHRFbCA9IHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdGFibGVDaG9pY2VJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1cnJlbnRFbCA9IHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLlwiICsgdGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKTtcblxuICAgICAgICBpZiAoY3VycmVudEVsKSB7XG4gICAgICAgICAgbmV4dEVsID0gZ2V0QWRqYWNlbnRFbChjdXJyZW50RWwsIHNlbGVjdGFibGVDaG9pY2VJZGVudGlmaWVyLCBkaXJlY3Rpb25JbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHRFbCA9IHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdGFibGVDaG9pY2VJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmV4dEVsKSB7XG4gICAgICAgIC8vIFdlIHByZXZlbnQgZGVmYXVsdCB0byBzdG9wIHRoZSBjdXJzb3IgbW92aW5nXG4gICAgICAgIC8vIHdoZW4gcHJlc3NpbmcgdGhlIGFycm93XG4gICAgICAgIGlmICghaXNTY3JvbGxlZEludG9WaWV3KG5leHRFbCwgdGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQsIGRpcmVjdGlvbkludCkpIHtcbiAgICAgICAgICB0aGlzLmNob2ljZUxpc3Quc2Nyb2xsVG9DaGlsZEVsZW1lbnQobmV4dEVsLCBkaXJlY3Rpb25JbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5faGlnaGxpZ2h0Q2hvaWNlKG5leHRFbCk7XG4gICAgICB9IC8vIFByZXZlbnQgZGVmYXVsdCB0byBtYWludGFpbiBjdXJzb3IgcG9zaXRpb24gd2hpbHN0XG4gICAgICAvLyB0cmF2ZXJzaW5nIGRyb3Bkb3duIG9wdGlvbnNcblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uRGVsZXRlS2V5ID0gZnVuY3Rpb24gX29uRGVsZXRlS2V5KF9yZWY3KSB7XG4gICAgdmFyIGV2ZW50ID0gX3JlZjcuZXZlbnQsXG4gICAgICAgIHRhcmdldCA9IF9yZWY3LnRhcmdldCxcbiAgICAgICAgaGFzRm9jdXNlZElucHV0ID0gX3JlZjcuaGFzRm9jdXNlZElucHV0LFxuICAgICAgICBhY3RpdmVJdGVtcyA9IF9yZWY3LmFjdGl2ZUl0ZW1zO1xuXG4gICAgLy8gSWYgYmFja3NwYWNlIG9yIGRlbGV0ZSBrZXkgaXMgcHJlc3NlZCBhbmQgdGhlIGlucHV0IGhhcyBubyB2YWx1ZVxuICAgIGlmIChoYXNGb2N1c2VkSW5wdXQgJiYgIXRhcmdldC52YWx1ZSAmJiAhdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl9oYW5kbGVCYWNrc3BhY2UoYWN0aXZlSXRlbXMpO1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uVG91Y2hNb3ZlID0gZnVuY3Rpb24gX29uVG91Y2hNb3ZlKCkge1xuICAgIGlmICh0aGlzLl93YXNUYXApIHtcbiAgICAgIHRoaXMuX3dhc1RhcCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uVG91Y2hFbmQgPSBmdW5jdGlvbiBfb25Ub3VjaEVuZChldmVudCkge1xuICAgIHZhciBfcmVmOCA9IGV2ZW50IHx8IGV2ZW50LnRvdWNoZXNbMF0sXG4gICAgICAgIHRhcmdldCA9IF9yZWY4LnRhcmdldDtcblxuICAgIHZhciB0b3VjaFdhc1dpdGhpbkNvbnRhaW5lciA9IHRoaXMuX3dhc1RhcCAmJiB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcblxuICAgIGlmICh0b3VjaFdhc1dpdGhpbkNvbnRhaW5lcikge1xuICAgICAgdmFyIGNvbnRhaW5lcldhc0V4YWN0VGFyZ2V0ID0gdGFyZ2V0ID09PSB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQgfHwgdGFyZ2V0ID09PSB0aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQ7XG5cbiAgICAgIGlmIChjb250YWluZXJXYXNFeGFjdFRhcmdldCkge1xuICAgICAgICBpZiAodGhpcy5faXNUZXh0RWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuaW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9pc1NlbGVjdE11bHRpcGxlRWxlbWVudCkge1xuICAgICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUHJldmVudHMgZm9jdXMgZXZlbnQgZmlyaW5nXG5cblxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fd2FzVGFwID0gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogSGFuZGxlcyBtb3VzZWRvd24gZXZlbnQgaW4gY2FwdHVyZSBtb2RlIGZvciBjb250YWluZXRPdXRlci5lbGVtZW50XG4gICAqIEBwYXJhbSB7TW91c2VFdmVudH0gZXZlbnRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uX29uTW91c2VEb3duID0gZnVuY3Rpb24gX29uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gSWYgd2UgaGF2ZSBvdXIgbW91c2UgZG93biBvbiB0aGUgc2Nyb2xsYmFyIGFuZCBhcmUgb24gSUUxMS4uLlxuXG5cbiAgICBpZiAoSVNfSUUxMSAmJiB0aGlzLmNob2ljZUxpc3QuZWxlbWVudC5jb250YWlucyh0YXJnZXQpKSB7XG4gICAgICAvLyBjaGVjayBpZiBjbGljayB3YXMgb24gYSBzY3JvbGxiYXIgYXJlYVxuICAgICAgdmFyIGZpcnN0Q2hvaWNlID1cbiAgICAgIC8qKiBAdHlwZSB7SFRNTEVsZW1lbnR9ICovXG4gICAgICB0aGlzLmNob2ljZUxpc3QuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIHZhciBpc09uU2Nyb2xsYmFyID0gdGhpcy5fZGlyZWN0aW9uID09PSAnbHRyJyA/IGV2ZW50Lm9mZnNldFggPj0gZmlyc3RDaG9pY2Uub2Zmc2V0V2lkdGggOiBldmVudC5vZmZzZXRYIDwgZmlyc3RDaG9pY2Uub2Zmc2V0TGVmdDtcbiAgICAgIHRoaXMuX2lzU2Nyb2xsaW5nT25JZSA9IGlzT25TY3JvbGxiYXI7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCA9PT0gdGhpcy5pbnB1dC5lbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGl0ZW0gPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtYnV0dG9uXSxbZGF0YS1pdGVtXSxbZGF0YS1jaG9pY2VdJyk7XG5cbiAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB2YXIgaGFzU2hpZnRLZXkgPSBldmVudC5zaGlmdEtleTtcbiAgICAgIHZhciBhY3RpdmVJdGVtcyA9IHRoaXMuX3N0b3JlLmFjdGl2ZUl0ZW1zO1xuICAgICAgdmFyIGRhdGFzZXQgPSBpdGVtLmRhdGFzZXQ7XG5cbiAgICAgIGlmICgnYnV0dG9uJyBpbiBkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUJ1dHRvbkFjdGlvbihhY3RpdmVJdGVtcywgaXRlbSk7XG4gICAgICB9IGVsc2UgaWYgKCdpdGVtJyBpbiBkYXRhc2V0KSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZUl0ZW1BY3Rpb24oYWN0aXZlSXRlbXMsIGl0ZW0sIGhhc1NoaWZ0S2V5KTtcbiAgICAgIH0gZWxzZSBpZiAoJ2Nob2ljZScgaW4gZGF0YXNldCkge1xuICAgICAgICB0aGlzLl9oYW5kbGVDaG9pY2VBY3Rpb24oYWN0aXZlSXRlbXMsIGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cbiAgLyoqXG4gICAqIEhhbmRsZXMgbW91c2VvdmVyIGV2ZW50IG92ZXIgdGhpcy5kcm9wZG93blxuICAgKiBAcGFyYW0ge01vdXNlRXZlbnR9IGV2ZW50XG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9vbk1vdXNlT3ZlciA9IGZ1bmN0aW9uIF9vbk1vdXNlT3ZlcihfcmVmOSkge1xuICAgIHZhciB0YXJnZXQgPSBfcmVmOS50YXJnZXQ7XG5cbiAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgJ2Nob2ljZScgaW4gdGFyZ2V0LmRhdGFzZXQpIHtcbiAgICAgIHRoaXMuX2hpZ2hsaWdodENob2ljZSh0YXJnZXQpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX29uQ2xpY2sgPSBmdW5jdGlvbiBfb25DbGljayhfcmVmMTApIHtcbiAgICB2YXIgdGFyZ2V0ID0gX3JlZjEwLnRhcmdldDtcbiAgICB2YXIgY2xpY2tXYXNXaXRoaW5Db250YWluZXIgPSB0aGlzLmNvbnRhaW5lck91dGVyLmVsZW1lbnQuY29udGFpbnModGFyZ2V0KTtcblxuICAgIGlmIChjbGlja1dhc1dpdGhpbkNvbnRhaW5lcikge1xuICAgICAgaWYgKCF0aGlzLmRyb3Bkb3duLmlzQWN0aXZlICYmICF0aGlzLmNvbnRhaW5lck91dGVyLmlzRGlzYWJsZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzVGV4dEVsZW1lbnQpIHtcbiAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gdGhpcy5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duKCk7XG4gICAgICAgICAgdGhpcy5jb250YWluZXJPdXRlci5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCAmJiB0YXJnZXQgIT09IHRoaXMuaW5wdXQuZWxlbWVudCAmJiAhdGhpcy5kcm9wZG93bi5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCkpIHtcbiAgICAgICAgdGhpcy5oaWRlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGhhc0hpZ2hsaWdodGVkSXRlbXMgPSB0aGlzLl9zdG9yZS5oaWdobGlnaHRlZEFjdGl2ZUl0ZW1zLmxlbmd0aCA+IDA7XG5cbiAgICAgIGlmIChoYXNIaWdobGlnaHRlZEl0ZW1zKSB7XG4gICAgICAgIHRoaXMudW5oaWdobGlnaHRBbGwoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCk7XG4gICAgICB0aGlzLmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9vbkZvY3VzID0gZnVuY3Rpb24gX29uRm9jdXMoX3JlZjExKSB7XG4gICAgdmFyIF90aGlzMTcgPSB0aGlzLFxuICAgICAgICBfZm9jdXNBY3Rpb25zO1xuXG4gICAgdmFyIHRhcmdldCA9IF9yZWYxMS50YXJnZXQ7XG4gICAgdmFyIGZvY3VzV2FzV2l0aGluQ29udGFpbmVyID0gdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAoIWZvY3VzV2FzV2l0aGluQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGZvY3VzQWN0aW9ucyA9IChfZm9jdXNBY3Rpb25zID0ge30sIF9mb2N1c0FjdGlvbnNbVEVYVF9UWVBFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0YXJnZXQgPT09IF90aGlzMTcuaW5wdXQuZWxlbWVudCkge1xuICAgICAgICBfdGhpczE3LmNvbnRhaW5lck91dGVyLmFkZEZvY3VzU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9LCBfZm9jdXNBY3Rpb25zW1NFTEVDVF9PTkVfVFlQRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczE3LmNvbnRhaW5lck91dGVyLmFkZEZvY3VzU3RhdGUoKTtcblxuICAgICAgaWYgKHRhcmdldCA9PT0gX3RoaXMxNy5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgIF90aGlzMTcuc2hvd0Ryb3Bkb3duKHRydWUpO1xuICAgICAgfVxuICAgIH0sIF9mb2N1c0FjdGlvbnNbU0VMRUNUX01VTFRJUExFX1RZUEVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKHRhcmdldCA9PT0gX3RoaXMxNy5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgIF90aGlzMTcuc2hvd0Ryb3Bkb3duKHRydWUpOyAvLyBJZiBlbGVtZW50IGlzIGEgc2VsZWN0IGJveCwgdGhlIGZvY3VzZWQgZWxlbWVudCBpcyB0aGUgY29udGFpbmVyIGFuZCB0aGUgZHJvcGRvd25cbiAgICAgICAgLy8gaXNuJ3QgYWxyZWFkeSBvcGVuLCBmb2N1cyBhbmQgc2hvdyBkcm9wZG93blxuXG5cbiAgICAgICAgX3RoaXMxNy5jb250YWluZXJPdXRlci5hZGRGb2N1c1N0YXRlKCk7XG4gICAgICB9XG4gICAgfSwgX2ZvY3VzQWN0aW9ucyk7XG4gICAgZm9jdXNBY3Rpb25zW3RoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGVdKCk7XG4gIH07XG5cbiAgX3Byb3RvLl9vbkJsdXIgPSBmdW5jdGlvbiBfb25CbHVyKF9yZWYxMikge1xuICAgIHZhciBfdGhpczE4ID0gdGhpcztcblxuICAgIHZhciB0YXJnZXQgPSBfcmVmMTIudGFyZ2V0O1xuICAgIHZhciBibHVyV2FzV2l0aGluQ29udGFpbmVyID0gdGhpcy5jb250YWluZXJPdXRlci5lbGVtZW50LmNvbnRhaW5zKHRhcmdldCk7XG5cbiAgICBpZiAoYmx1cldhc1dpdGhpbkNvbnRhaW5lciAmJiAhdGhpcy5faXNTY3JvbGxpbmdPbkllKSB7XG4gICAgICB2YXIgX2JsdXJBY3Rpb25zO1xuXG4gICAgICB2YXIgYWN0aXZlSXRlbXMgPSB0aGlzLl9zdG9yZS5hY3RpdmVJdGVtcztcbiAgICAgIHZhciBoYXNIaWdobGlnaHRlZEl0ZW1zID0gYWN0aXZlSXRlbXMuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5oaWdobGlnaHRlZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIGJsdXJBY3Rpb25zID0gKF9ibHVyQWN0aW9ucyA9IHt9LCBfYmx1ckFjdGlvbnNbVEVYVF9UWVBFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gX3RoaXMxOC5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXMxOC5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCk7XG5cbiAgICAgICAgICBpZiAoaGFzSGlnaGxpZ2h0ZWRJdGVtcykge1xuICAgICAgICAgICAgX3RoaXMxOC51bmhpZ2hsaWdodEFsbCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzMTguaGlkZURyb3Bkb3duKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9LCBfYmx1ckFjdGlvbnNbU0VMRUNUX09ORV9UWVBFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMxOC5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCk7XG5cbiAgICAgICAgaWYgKHRhcmdldCA9PT0gX3RoaXMxOC5pbnB1dC5lbGVtZW50IHx8IHRhcmdldCA9PT0gX3RoaXMxOC5jb250YWluZXJPdXRlci5lbGVtZW50ICYmICFfdGhpczE4Ll9jYW5TZWFyY2gpIHtcbiAgICAgICAgICBfdGhpczE4LmhpZGVEcm9wZG93bih0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSwgX2JsdXJBY3Rpb25zW1NFTEVDVF9NVUxUSVBMRV9UWVBFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gX3RoaXMxOC5pbnB1dC5lbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXMxOC5jb250YWluZXJPdXRlci5yZW1vdmVGb2N1c1N0YXRlKCk7XG5cbiAgICAgICAgICBfdGhpczE4LmhpZGVEcm9wZG93bih0cnVlKTtcblxuICAgICAgICAgIGlmIChoYXNIaWdobGlnaHRlZEl0ZW1zKSB7XG4gICAgICAgICAgICBfdGhpczE4LnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBfYmx1ckFjdGlvbnMpO1xuICAgICAgYmx1ckFjdGlvbnNbdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZV0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT24gSUUxMSwgY2xpY2tpbmcgdGhlIHNjb2xsYmFyIGJsdXJzIG91ciBpbnB1dCBhbmQgdGh1c1xuICAgICAgLy8gY2xvc2VzIHRoZSBkcm9wZG93bi4gVG8gc3RvcCB0aGlzLCB3ZSByZWZvY3VzIG91ciBpbnB1dFxuICAgICAgLy8gaWYgd2Uga25vdyB3ZSBhcmUgb24gSUUgKmFuZCogYXJlIHNjcm9sbGluZy5cbiAgICAgIHRoaXMuX2lzU2Nyb2xsaW5nT25JZSA9IGZhbHNlO1xuICAgICAgdGhpcy5pbnB1dC5lbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fb25Gb3JtUmVzZXQgPSBmdW5jdGlvbiBfb25Gb3JtUmVzZXQoKSB7XG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2gocmVzZXRUbyh0aGlzLl9pbml0aWFsU3RhdGUpKTtcbiAgfTtcblxuICBfcHJvdG8uX2hpZ2hsaWdodENob2ljZSA9IGZ1bmN0aW9uIF9oaWdobGlnaHRDaG9pY2UoZWwpIHtcbiAgICB2YXIgX3RoaXMxOSA9IHRoaXM7XG5cbiAgICBpZiAoZWwgPT09IHZvaWQgMCkge1xuICAgICAgZWwgPSBudWxsO1xuICAgIH1cblxuICAgIHZhciBjaG9pY2VzID0gQXJyYXkuZnJvbSh0aGlzLmRyb3Bkb3duLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2hvaWNlLXNlbGVjdGFibGVdJykpO1xuXG4gICAgaWYgKCFjaG9pY2VzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwYXNzZWRFbCA9IGVsO1xuICAgIHZhciBoaWdobGlnaHRlZENob2ljZXMgPSBBcnJheS5mcm9tKHRoaXMuZHJvcGRvd24uZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiICsgdGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKSk7IC8vIFJlbW92ZSBhbnkgaGlnaGxpZ2h0ZWQgY2hvaWNlc1xuXG4gICAgaGlnaGxpZ2h0ZWRDaG9pY2VzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgY2hvaWNlLmNsYXNzTGlzdC5yZW1vdmUoX3RoaXMxOS5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKTtcbiAgICAgIGNob2ljZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICB9KTtcblxuICAgIGlmIChwYXNzZWRFbCkge1xuICAgICAgdGhpcy5faGlnaGxpZ2h0UG9zaXRpb24gPSBjaG9pY2VzLmluZGV4T2YocGFzc2VkRWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBIaWdobGlnaHQgY2hvaWNlIGJhc2VkIG9uIGxhc3Qga25vd24gaGlnaGxpZ2h0IGxvY2F0aW9uXG4gICAgICBpZiAoY2hvaWNlcy5sZW5ndGggPiB0aGlzLl9oaWdobGlnaHRQb3NpdGlvbikge1xuICAgICAgICAvLyBJZiB3ZSBoYXZlIGFuIG9wdGlvbiB0byBoaWdobGlnaHRcbiAgICAgICAgcGFzc2VkRWwgPSBjaG9pY2VzW3RoaXMuX2hpZ2hsaWdodFBvc2l0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE90aGVyd2lzZSBoaWdobGlnaHQgdGhlIG9wdGlvbiBiZWZvcmVcbiAgICAgICAgcGFzc2VkRWwgPSBjaG9pY2VzW2Nob2ljZXMubGVuZ3RoIC0gMV07XG4gICAgICB9XG5cbiAgICAgIGlmICghcGFzc2VkRWwpIHtcbiAgICAgICAgcGFzc2VkRWwgPSBjaG9pY2VzWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHBhc3NlZEVsLmNsYXNzTGlzdC5hZGQodGhpcy5jb25maWcuY2xhc3NOYW1lcy5oaWdobGlnaHRlZFN0YXRlKTtcbiAgICBwYXNzZWRFbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIHRoaXMucGFzc2VkRWxlbWVudC50cmlnZ2VyRXZlbnQoRVZFTlRTLmhpZ2hsaWdodENob2ljZSwge1xuICAgICAgZWw6IHBhc3NlZEVsXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5kcm9wZG93bi5pc0FjdGl2ZSkge1xuICAgICAgLy8gSUUxMSBpZ25vcmVzIGFyaWEtbGFiZWwgYW5kIGJsb2NrcyB2aXJ0dWFsIGtleWJvYXJkXG4gICAgICAvLyBpZiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQgaXMgc2V0IHdpdGhvdXQgYSBkcm9wZG93blxuICAgICAgdGhpcy5pbnB1dC5zZXRBY3RpdmVEZXNjZW5kYW50KHBhc3NlZEVsLmlkKTtcbiAgICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuc2V0QWN0aXZlRGVzY2VuZGFudChwYXNzZWRFbC5pZCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fYWRkSXRlbSA9IGZ1bmN0aW9uIF9hZGRJdGVtKF9yZWYxMykge1xuICAgIHZhciB2YWx1ZSA9IF9yZWYxMy52YWx1ZSxcbiAgICAgICAgX3JlZjEzJGxhYmVsID0gX3JlZjEzLmxhYmVsLFxuICAgICAgICBsYWJlbCA9IF9yZWYxMyRsYWJlbCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYxMyRsYWJlbCxcbiAgICAgICAgX3JlZjEzJGNob2ljZUlkID0gX3JlZjEzLmNob2ljZUlkLFxuICAgICAgICBjaG9pY2VJZCA9IF9yZWYxMyRjaG9pY2VJZCA9PT0gdm9pZCAwID8gLTEgOiBfcmVmMTMkY2hvaWNlSWQsXG4gICAgICAgIF9yZWYxMyRncm91cElkID0gX3JlZjEzLmdyb3VwSWQsXG4gICAgICAgIGdyb3VwSWQgPSBfcmVmMTMkZ3JvdXBJZCA9PT0gdm9pZCAwID8gLTEgOiBfcmVmMTMkZ3JvdXBJZCxcbiAgICAgICAgX3JlZjEzJGN1c3RvbVByb3BlcnRpID0gX3JlZjEzLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXMgPSBfcmVmMTMkY3VzdG9tUHJvcGVydGkgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTMkY3VzdG9tUHJvcGVydGksXG4gICAgICAgIF9yZWYxMyRwbGFjZWhvbGRlciA9IF9yZWYxMy5wbGFjZWhvbGRlcixcbiAgICAgICAgcGxhY2Vob2xkZXIgPSBfcmVmMTMkcGxhY2Vob2xkZXIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjEzJHBsYWNlaG9sZGVyLFxuICAgICAgICBfcmVmMTMka2V5Q29kZSA9IF9yZWYxMy5rZXlDb2RlLFxuICAgICAgICBrZXlDb2RlID0gX3JlZjEzJGtleUNvZGUgPT09IHZvaWQgMCA/IG51bGwgOiBfcmVmMTMka2V5Q29kZTtcbiAgICB2YXIgcGFzc2VkVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUudHJpbSgpIDogdmFsdWU7XG4gICAgdmFyIHBhc3NlZEtleUNvZGUgPSBrZXlDb2RlO1xuICAgIHZhciBwYXNzZWRDdXN0b21Qcm9wZXJ0aWVzID0gY3VzdG9tUHJvcGVydGllcztcbiAgICB2YXIgaXRlbXMgPSB0aGlzLl9zdG9yZS5pdGVtcztcbiAgICB2YXIgcGFzc2VkTGFiZWwgPSBsYWJlbCB8fCBwYXNzZWRWYWx1ZTtcbiAgICB2YXIgcGFzc2VkT3B0aW9uSWQgPSBjaG9pY2VJZCB8fCAtMTtcbiAgICB2YXIgZ3JvdXAgPSBncm91cElkID49IDAgPyB0aGlzLl9zdG9yZS5nZXRHcm91cEJ5SWQoZ3JvdXBJZCkgOiBudWxsO1xuICAgIHZhciBpZCA9IGl0ZW1zID8gaXRlbXMubGVuZ3RoICsgMSA6IDE7IC8vIElmIGEgcHJlcGVuZGVkIHZhbHVlIGhhcyBiZWVuIHBhc3NlZCwgcHJlcGVuZCBpdFxuXG4gICAgaWYgKHRoaXMuY29uZmlnLnByZXBlbmRWYWx1ZSkge1xuICAgICAgcGFzc2VkVmFsdWUgPSB0aGlzLmNvbmZpZy5wcmVwZW5kVmFsdWUgKyBwYXNzZWRWYWx1ZS50b1N0cmluZygpO1xuICAgIH0gLy8gSWYgYW4gYXBwZW5kZWQgdmFsdWUgaGFzIGJlZW4gcGFzc2VkLCBhcHBlbmQgaXRcblxuXG4gICAgaWYgKHRoaXMuY29uZmlnLmFwcGVuZFZhbHVlKSB7XG4gICAgICBwYXNzZWRWYWx1ZSArPSB0aGlzLmNvbmZpZy5hcHBlbmRWYWx1ZS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGl0ZW1zX2FkZEl0ZW0oe1xuICAgICAgdmFsdWU6IHBhc3NlZFZhbHVlLFxuICAgICAgbGFiZWw6IHBhc3NlZExhYmVsLFxuICAgICAgaWQ6IGlkLFxuICAgICAgY2hvaWNlSWQ6IHBhc3NlZE9wdGlvbklkLFxuICAgICAgZ3JvdXBJZDogZ3JvdXBJZCxcbiAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXG4gICAgICBrZXlDb2RlOiBwYXNzZWRLZXlDb2RlXG4gICAgfSkpO1xuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudCkge1xuICAgICAgdGhpcy5yZW1vdmVBY3RpdmVJdGVtcyhpZCk7XG4gICAgfSAvLyBUcmlnZ2VyIGNoYW5nZSBldmVudFxuXG5cbiAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5hZGRJdGVtLCB7XG4gICAgICBpZDogaWQsXG4gICAgICB2YWx1ZTogcGFzc2VkVmFsdWUsXG4gICAgICBsYWJlbDogcGFzc2VkTGFiZWwsXG4gICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBwYXNzZWRDdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgZ3JvdXBWYWx1ZTogZ3JvdXAgJiYgZ3JvdXAudmFsdWUgPyBncm91cC52YWx1ZSA6IHVuZGVmaW5lZCxcbiAgICAgIGtleUNvZGU6IHBhc3NlZEtleUNvZGVcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uX3JlbW92ZUl0ZW0gPSBmdW5jdGlvbiBfcmVtb3ZlSXRlbShpdGVtKSB7XG4gICAgaWYgKCFpdGVtIHx8ICFpc1R5cGUoJ09iamVjdCcsIGl0ZW0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgaWQgPSBpdGVtLmlkLFxuICAgICAgICB2YWx1ZSA9IGl0ZW0udmFsdWUsXG4gICAgICAgIGxhYmVsID0gaXRlbS5sYWJlbCxcbiAgICAgICAgY2hvaWNlSWQgPSBpdGVtLmNob2ljZUlkLFxuICAgICAgICBncm91cElkID0gaXRlbS5ncm91cElkO1xuICAgIHZhciBncm91cCA9IGdyb3VwSWQgPj0gMCA/IHRoaXMuX3N0b3JlLmdldEdyb3VwQnlJZChncm91cElkKSA6IG51bGw7XG5cbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChpdGVtc19yZW1vdmVJdGVtKGlkLCBjaG9pY2VJZCkpO1xuXG4gICAgaWYgKGdyb3VwICYmIGdyb3VwLnZhbHVlKSB7XG4gICAgICB0aGlzLnBhc3NlZEVsZW1lbnQudHJpZ2dlckV2ZW50KEVWRU5UUy5yZW1vdmVJdGVtLCB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgIGdyb3VwVmFsdWU6IGdyb3VwLnZhbHVlXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYXNzZWRFbGVtZW50LnRyaWdnZXJFdmVudChFVkVOVFMucmVtb3ZlSXRlbSwge1xuICAgICAgICBpZDogaWQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uX2FkZENob2ljZSA9IGZ1bmN0aW9uIF9hZGRDaG9pY2UoX3JlZjE0KSB7XG4gICAgdmFyIHZhbHVlID0gX3JlZjE0LnZhbHVlLFxuICAgICAgICBfcmVmMTQkbGFiZWwgPSBfcmVmMTQubGFiZWwsXG4gICAgICAgIGxhYmVsID0gX3JlZjE0JGxhYmVsID09PSB2b2lkIDAgPyBudWxsIDogX3JlZjE0JGxhYmVsLFxuICAgICAgICBfcmVmMTQkaXNTZWxlY3RlZCA9IF9yZWYxNC5pc1NlbGVjdGVkLFxuICAgICAgICBpc1NlbGVjdGVkID0gX3JlZjE0JGlzU2VsZWN0ZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjE0JGlzU2VsZWN0ZWQsXG4gICAgICAgIF9yZWYxNCRpc0Rpc2FibGVkID0gX3JlZjE0LmlzRGlzYWJsZWQsXG4gICAgICAgIGlzRGlzYWJsZWQgPSBfcmVmMTQkaXNEaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMTQkaXNEaXNhYmxlZCxcbiAgICAgICAgX3JlZjE0JGdyb3VwSWQgPSBfcmVmMTQuZ3JvdXBJZCxcbiAgICAgICAgZ3JvdXBJZCA9IF9yZWYxNCRncm91cElkID09PSB2b2lkIDAgPyAtMSA6IF9yZWYxNCRncm91cElkLFxuICAgICAgICBfcmVmMTQkY3VzdG9tUHJvcGVydGkgPSBfcmVmMTQuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgY3VzdG9tUHJvcGVydGllcyA9IF9yZWYxNCRjdXN0b21Qcm9wZXJ0aSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYxNCRjdXN0b21Qcm9wZXJ0aSxcbiAgICAgICAgX3JlZjE0JHBsYWNlaG9sZGVyID0gX3JlZjE0LnBsYWNlaG9sZGVyLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF9yZWYxNCRwbGFjZWhvbGRlciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmMTQkcGxhY2Vob2xkZXIsXG4gICAgICAgIF9yZWYxNCRrZXlDb2RlID0gX3JlZjE0LmtleUNvZGUsXG4gICAgICAgIGtleUNvZGUgPSBfcmVmMTQka2V5Q29kZSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYxNCRrZXlDb2RlO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIEdlbmVyYXRlIHVuaXF1ZSBpZFxuXG5cbiAgICB2YXIgY2hvaWNlcyA9IHRoaXMuX3N0b3JlLmNob2ljZXM7XG4gICAgdmFyIGNob2ljZUxhYmVsID0gbGFiZWwgfHwgdmFsdWU7XG4gICAgdmFyIGNob2ljZUlkID0gY2hvaWNlcyA/IGNob2ljZXMubGVuZ3RoICsgMSA6IDE7XG4gICAgdmFyIGNob2ljZUVsZW1lbnRJZCA9IHRoaXMuX2Jhc2VJZCArIFwiLVwiICsgdGhpcy5faWROYW1lcy5pdGVtQ2hvaWNlICsgXCItXCIgKyBjaG9pY2VJZDtcblxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKGNob2ljZXNfYWRkQ2hvaWNlKHtcbiAgICAgIGlkOiBjaG9pY2VJZCxcbiAgICAgIGdyb3VwSWQ6IGdyb3VwSWQsXG4gICAgICBlbGVtZW50SWQ6IGNob2ljZUVsZW1lbnRJZCxcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGxhYmVsOiBjaG9pY2VMYWJlbCxcbiAgICAgIGRpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIGtleUNvZGU6IGtleUNvZGVcbiAgICB9KSk7XG5cbiAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5fYWRkSXRlbSh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgbGFiZWw6IGNob2ljZUxhYmVsLFxuICAgICAgICBjaG9pY2VJZDogY2hvaWNlSWQsXG4gICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgICAga2V5Q29kZToga2V5Q29kZVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fYWRkR3JvdXAgPSBmdW5jdGlvbiBfYWRkR3JvdXAoX3JlZjE1KSB7XG4gICAgdmFyIF90aGlzMjAgPSB0aGlzO1xuXG4gICAgdmFyIGdyb3VwID0gX3JlZjE1Lmdyb3VwLFxuICAgICAgICBpZCA9IF9yZWYxNS5pZCxcbiAgICAgICAgX3JlZjE1JHZhbHVlS2V5ID0gX3JlZjE1LnZhbHVlS2V5LFxuICAgICAgICB2YWx1ZUtleSA9IF9yZWYxNSR2YWx1ZUtleSA9PT0gdm9pZCAwID8gJ3ZhbHVlJyA6IF9yZWYxNSR2YWx1ZUtleSxcbiAgICAgICAgX3JlZjE1JGxhYmVsS2V5ID0gX3JlZjE1LmxhYmVsS2V5LFxuICAgICAgICBsYWJlbEtleSA9IF9yZWYxNSRsYWJlbEtleSA9PT0gdm9pZCAwID8gJ2xhYmVsJyA6IF9yZWYxNSRsYWJlbEtleTtcbiAgICB2YXIgZ3JvdXBDaG9pY2VzID0gaXNUeXBlKCdPYmplY3QnLCBncm91cCkgPyBncm91cC5jaG9pY2VzIDogQXJyYXkuZnJvbShncm91cC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnT1BUSU9OJykpO1xuICAgIHZhciBncm91cElkID0gaWQgfHwgTWF0aC5mbG9vcihuZXcgRGF0ZSgpLnZhbHVlT2YoKSAqIE1hdGgucmFuZG9tKCkpO1xuICAgIHZhciBpc0Rpc2FibGVkID0gZ3JvdXAuZGlzYWJsZWQgPyBncm91cC5kaXNhYmxlZCA6IGZhbHNlO1xuXG4gICAgaWYgKGdyb3VwQ2hvaWNlcykge1xuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goZ3JvdXBzX2FkZEdyb3VwKHtcbiAgICAgICAgdmFsdWU6IGdyb3VwLmxhYmVsLFxuICAgICAgICBpZDogZ3JvdXBJZCxcbiAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICBkaXNhYmxlZDogaXNEaXNhYmxlZFxuICAgICAgfSkpO1xuXG4gICAgICB2YXIgYWRkR3JvdXBDaG9pY2VzID0gZnVuY3Rpb24gYWRkR3JvdXBDaG9pY2VzKGNob2ljZSkge1xuICAgICAgICB2YXIgaXNPcHREaXNhYmxlZCA9IGNob2ljZS5kaXNhYmxlZCB8fCBjaG9pY2UucGFyZW50Tm9kZSAmJiBjaG9pY2UucGFyZW50Tm9kZS5kaXNhYmxlZDtcblxuICAgICAgICBfdGhpczIwLl9hZGRDaG9pY2Uoe1xuICAgICAgICAgIHZhbHVlOiBjaG9pY2VbdmFsdWVLZXldLFxuICAgICAgICAgIGxhYmVsOiBpc1R5cGUoJ09iamVjdCcsIGNob2ljZSkgPyBjaG9pY2VbbGFiZWxLZXldIDogY2hvaWNlLmlubmVySFRNTCxcbiAgICAgICAgICBpc1NlbGVjdGVkOiBjaG9pY2Uuc2VsZWN0ZWQsXG4gICAgICAgICAgaXNEaXNhYmxlZDogaXNPcHREaXNhYmxlZCxcbiAgICAgICAgICBncm91cElkOiBncm91cElkLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGNob2ljZS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaG9pY2UucGxhY2Vob2xkZXJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBncm91cENob2ljZXMuZm9yRWFjaChhZGRHcm91cENob2ljZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChncm91cHNfYWRkR3JvdXAoe1xuICAgICAgICB2YWx1ZTogZ3JvdXAubGFiZWwsXG4gICAgICAgIGlkOiBncm91cC5pZCxcbiAgICAgICAgYWN0aXZlOiBmYWxzZSxcbiAgICAgICAgZGlzYWJsZWQ6IGdyb3VwLmRpc2FibGVkXG4gICAgICB9KSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5fZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiBfZ2V0VGVtcGxhdGUodGVtcGxhdGUpIHtcbiAgICB2YXIgX3RoaXMkX3RlbXBsYXRlcyR0ZW1wO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZXMgPSB0aGlzLmNvbmZpZy5jbGFzc05hbWVzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIChfdGhpcyRfdGVtcGxhdGVzJHRlbXAgPSB0aGlzLl90ZW1wbGF0ZXNbdGVtcGxhdGVdKS5jYWxsLmFwcGx5KF90aGlzJF90ZW1wbGF0ZXMkdGVtcCwgW3RoaXMsIGNsYXNzTmFtZXNdLmNvbmNhdChhcmdzKSk7XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVUZW1wbGF0ZXMgPSBmdW5jdGlvbiBfY3JlYXRlVGVtcGxhdGVzKCkge1xuICAgIHZhciBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzID0gdGhpcy5jb25maWcuY2FsbGJhY2tPbkNyZWF0ZVRlbXBsYXRlcztcbiAgICB2YXIgdXNlclRlbXBsYXRlcyA9IHt9O1xuXG4gICAgaWYgKGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMgJiYgdHlwZW9mIGNhbGxiYWNrT25DcmVhdGVUZW1wbGF0ZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHVzZXJUZW1wbGF0ZXMgPSBjYWxsYmFja09uQ3JlYXRlVGVtcGxhdGVzLmNhbGwodGhpcywgc3RyVG9FbCk7XG4gICAgfVxuXG4gICAgdGhpcy5fdGVtcGxhdGVzID0gY2pzX2RlZmF1bHQoKShURU1QTEFURVMsIHVzZXJUZW1wbGF0ZXMpO1xuICB9O1xuXG4gIF9wcm90by5fY3JlYXRlRWxlbWVudHMgPSBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudHMoKSB7XG4gICAgdGhpcy5jb250YWluZXJPdXRlciA9IG5ldyBjb250YWluZXJfQ29udGFpbmVyKHtcbiAgICAgIGVsZW1lbnQ6IHRoaXMuX2dldFRlbXBsYXRlKCdjb250YWluZXJPdXRlcicsIHRoaXMuX2RpcmVjdGlvbiwgdGhpcy5faXNTZWxlY3RFbGVtZW50LCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQsIHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQsIHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGUpLFxuICAgICAgY2xhc3NOYW1lczogdGhpcy5jb25maWcuY2xhc3NOYW1lcyxcbiAgICAgIHR5cGU6IHRoaXMucGFzc2VkRWxlbWVudC5lbGVtZW50LnR5cGUsXG4gICAgICBwb3NpdGlvbjogdGhpcy5jb25maWcucG9zaXRpb25cbiAgICB9KTtcbiAgICB0aGlzLmNvbnRhaW5lcklubmVyID0gbmV3IGNvbnRhaW5lcl9Db250YWluZXIoe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2NvbnRhaW5lcklubmVyJyksXG4gICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgdHlwZTogdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZSxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLmNvbmZpZy5wb3NpdGlvblxuICAgIH0pO1xuICAgIHRoaXMuaW5wdXQgPSBuZXcgaW5wdXRfSW5wdXQoe1xuICAgICAgZWxlbWVudDogdGhpcy5fZ2V0VGVtcGxhdGUoJ2lucHV0JywgdGhpcy5fcGxhY2Vob2xkZXJWYWx1ZSksXG4gICAgICBjbGFzc05hbWVzOiB0aGlzLmNvbmZpZy5jbGFzc05hbWVzLFxuICAgICAgdHlwZTogdGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQudHlwZSxcbiAgICAgIHByZXZlbnRQYXN0ZTogIXRoaXMuY29uZmlnLnBhc3RlXG4gICAgfSk7XG4gICAgdGhpcy5jaG9pY2VMaXN0ID0gbmV3IGxpc3RfTGlzdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnY2hvaWNlTGlzdCcsIHRoaXMuX2lzU2VsZWN0T25lRWxlbWVudClcbiAgICB9KTtcbiAgICB0aGlzLml0ZW1MaXN0ID0gbmV3IGxpc3RfTGlzdCh7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnaXRlbUxpc3QnLCB0aGlzLl9pc1NlbGVjdE9uZUVsZW1lbnQpXG4gICAgfSk7XG4gICAgdGhpcy5kcm9wZG93biA9IG5ldyBEcm9wZG93bih7XG4gICAgICBlbGVtZW50OiB0aGlzLl9nZXRUZW1wbGF0ZSgnZHJvcGRvd24nKSxcbiAgICAgIGNsYXNzTmFtZXM6IHRoaXMuY29uZmlnLmNsYXNzTmFtZXMsXG4gICAgICB0eXBlOiB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC50eXBlXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLl9jcmVhdGVTdHJ1Y3R1cmUgPSBmdW5jdGlvbiBfY3JlYXRlU3RydWN0dXJlKCkge1xuICAgIC8vIEhpZGUgb3JpZ2luYWwgZWxlbWVudFxuICAgIHRoaXMucGFzc2VkRWxlbWVudC5jb25jZWFsKCk7IC8vIFdyYXAgaW5wdXQgaW4gY29udGFpbmVyIHByZXNlcnZpbmcgRE9NIG9yZGVyaW5nXG5cbiAgICB0aGlzLmNvbnRhaW5lcklubmVyLndyYXAodGhpcy5wYXNzZWRFbGVtZW50LmVsZW1lbnQpOyAvLyBXcmFwcGVyIGlubmVyIGNvbnRhaW5lciB3aXRoIG91dGVyIGNvbnRhaW5lclxuXG4gICAgdGhpcy5jb250YWluZXJPdXRlci53cmFwKHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudCk7XG5cbiAgICBpZiAodGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0LnBsYWNlaG9sZGVyID0gdGhpcy5jb25maWcuc2VhcmNoUGxhY2Vob2xkZXJWYWx1ZSB8fCAnJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3BsYWNlaG9sZGVyVmFsdWUpIHtcbiAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSB0aGlzLl9wbGFjZWhvbGRlclZhbHVlO1xuICAgICAgdGhpcy5pbnB1dC5zZXRXaWR0aCgpO1xuICAgIH1cblxuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQpO1xuICAgIHRoaXMuY29udGFpbmVyT3V0ZXIuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmRyb3Bkb3duLmVsZW1lbnQpO1xuICAgIHRoaXMuY29udGFpbmVySW5uZXIuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLml0ZW1MaXN0LmVsZW1lbnQpO1xuXG4gICAgaWYgKCF0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jaG9pY2VMaXN0LmVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5faXNTZWxlY3RPbmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmNvbnRhaW5lcklubmVyLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dC5lbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlnLnNlYXJjaEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZHJvcGRvd24uZWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5pbnB1dC5lbGVtZW50LCB0aGlzLmRyb3Bkb3duLmVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzU2VsZWN0RWxlbWVudCkge1xuICAgICAgdGhpcy5faGlnaGxpZ2h0UG9zaXRpb24gPSAwO1xuICAgICAgdGhpcy5faXNTZWFyY2hpbmcgPSBmYWxzZTtcblxuICAgICAgdGhpcy5fc3RhcnRMb2FkaW5nKCk7XG5cbiAgICAgIGlmICh0aGlzLl9wcmVzZXRHcm91cHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX2FkZFByZWRlZmluZWRHcm91cHModGhpcy5fcHJlc2V0R3JvdXBzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2FkZFByZWRlZmluZWRDaG9pY2VzKHRoaXMuX3ByZXNldENob2ljZXMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9zdG9wTG9hZGluZygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9pc1RleHRFbGVtZW50KSB7XG4gICAgICB0aGlzLl9hZGRQcmVkZWZpbmVkSXRlbXModGhpcy5fcHJlc2V0SXRlbXMpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uX2FkZFByZWRlZmluZWRHcm91cHMgPSBmdW5jdGlvbiBfYWRkUHJlZGVmaW5lZEdyb3Vwcyhncm91cHMpIHtcbiAgICB2YXIgX3RoaXMyMSA9IHRoaXM7XG5cbiAgICAvLyBJZiB3ZSBoYXZlIGEgcGxhY2Vob2xkZXIgb3B0aW9uXG4gICAgdmFyIHBsYWNlaG9sZGVyQ2hvaWNlID0gdGhpcy5wYXNzZWRFbGVtZW50LnBsYWNlaG9sZGVyT3B0aW9uO1xuXG4gICAgaWYgKHBsYWNlaG9sZGVyQ2hvaWNlICYmIHBsYWNlaG9sZGVyQ2hvaWNlLnBhcmVudE5vZGUudGFnTmFtZSA9PT0gJ1NFTEVDVCcpIHtcbiAgICAgIHRoaXMuX2FkZENob2ljZSh7XG4gICAgICAgIHZhbHVlOiBwbGFjZWhvbGRlckNob2ljZS52YWx1ZSxcbiAgICAgICAgbGFiZWw6IHBsYWNlaG9sZGVyQ2hvaWNlLmlubmVySFRNTCxcbiAgICAgICAgaXNTZWxlY3RlZDogcGxhY2Vob2xkZXJDaG9pY2Uuc2VsZWN0ZWQsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHBsYWNlaG9sZGVyQ2hvaWNlLmRpc2FibGVkLFxuICAgICAgICBwbGFjZWhvbGRlcjogdHJ1ZVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ3JvdXBzLmZvckVhY2goZnVuY3Rpb24gKGdyb3VwKSB7XG4gICAgICByZXR1cm4gX3RoaXMyMS5fYWRkR3JvdXAoe1xuICAgICAgICBncm91cDogZ3JvdXAsXG4gICAgICAgIGlkOiBncm91cC5pZCB8fCBudWxsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uX2FkZFByZWRlZmluZWRDaG9pY2VzID0gZnVuY3Rpb24gX2FkZFByZWRlZmluZWRDaG9pY2VzKGNob2ljZXMpIHtcbiAgICB2YXIgX3RoaXMyMiA9IHRoaXM7XG5cbiAgICAvLyBJZiBzb3J0aW5nIGlzIGVuYWJsZWQgb3IgdGhlIHVzZXIgaXMgc2VhcmNoaW5nLCBmaWx0ZXIgY2hvaWNlc1xuICAgIGlmICh0aGlzLmNvbmZpZy5zaG91bGRTb3J0KSB7XG4gICAgICBjaG9pY2VzLnNvcnQodGhpcy5jb25maWcuc29ydGVyKTtcbiAgICB9XG5cbiAgICB2YXIgaGFzU2VsZWN0ZWRDaG9pY2UgPSBjaG9pY2VzLnNvbWUoZnVuY3Rpb24gKGNob2ljZSkge1xuICAgICAgcmV0dXJuIGNob2ljZS5zZWxlY3RlZDtcbiAgICB9KTtcbiAgICB2YXIgZmlyc3RFbmFibGVkQ2hvaWNlSW5kZXggPSBjaG9pY2VzLmZpbmRJbmRleChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICByZXR1cm4gY2hvaWNlLmRpc2FibGVkID09PSB1bmRlZmluZWQgfHwgIWNob2ljZS5kaXNhYmxlZDtcbiAgICB9KTtcbiAgICBjaG9pY2VzLmZvckVhY2goZnVuY3Rpb24gKGNob2ljZSwgaW5kZXgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGNob2ljZS52YWx1ZSxcbiAgICAgICAgICBsYWJlbCA9IGNob2ljZS5sYWJlbCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzID0gY2hvaWNlLmN1c3RvbVByb3BlcnRpZXMsXG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBjaG9pY2UucGxhY2Vob2xkZXI7XG5cbiAgICAgIGlmIChfdGhpczIyLl9pc1NlbGVjdEVsZW1lbnQpIHtcbiAgICAgICAgLy8gSWYgdGhlIGNob2ljZSBpcyBhY3R1YWxseSBhIGdyb3VwXG4gICAgICAgIGlmIChjaG9pY2UuY2hvaWNlcykge1xuICAgICAgICAgIF90aGlzMjIuX2FkZEdyb3VwKHtcbiAgICAgICAgICAgIGdyb3VwOiBjaG9pY2UsXG4gICAgICAgICAgICBpZDogY2hvaWNlLmlkIHx8IG51bGxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvKipcbiAgICAgICAgICAgKiBJZiB0aGVyZSBpcyBhIHNlbGVjdGVkIGNob2ljZSBhbHJlYWR5IG9yIHRoZSBjaG9pY2UgaXMgbm90IHRoZSBmaXJzdCBpblxuICAgICAgICAgICAqIHRoZSBhcnJheSwgYWRkIGVhY2ggY2hvaWNlIG5vcm1hbGx5LlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogT3RoZXJ3aXNlIHdlIHByZS1zZWxlY3QgdGhlIGZpcnN0IGVuYWJsZWQgY2hvaWNlIGluIHRoZSBhcnJheSAoXCJzZWxlY3Qtb25lXCIgb25seSlcbiAgICAgICAgICAgKi9cbiAgICAgICAgICB2YXIgc2hvdWxkUHJlc2VsZWN0ID0gX3RoaXMyMi5faXNTZWxlY3RPbmVFbGVtZW50ICYmICFoYXNTZWxlY3RlZENob2ljZSAmJiBpbmRleCA9PT0gZmlyc3RFbmFibGVkQ2hvaWNlSW5kZXg7XG4gICAgICAgICAgdmFyIGlzU2VsZWN0ZWQgPSBzaG91bGRQcmVzZWxlY3QgPyB0cnVlIDogY2hvaWNlLnNlbGVjdGVkO1xuICAgICAgICAgIHZhciBpc0Rpc2FibGVkID0gY2hvaWNlLmRpc2FibGVkO1xuXG4gICAgICAgICAgX3RoaXMyMi5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbCxcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQsXG4gICAgICAgICAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkLFxuICAgICAgICAgICAgY3VzdG9tUHJvcGVydGllczogY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlclxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpczIyLl9hZGRDaG9pY2Uoe1xuICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICBsYWJlbDogbGFiZWwsXG4gICAgICAgICAgaXNTZWxlY3RlZDogY2hvaWNlLnNlbGVjdGVkLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IGNob2ljZS5kaXNhYmxlZCxcbiAgICAgICAgICBjdXN0b21Qcm9wZXJ0aWVzOiBjdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlclxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQHBhcmFtIHtJdGVtW119IGl0ZW1zXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLl9hZGRQcmVkZWZpbmVkSXRlbXMgPSBmdW5jdGlvbiBfYWRkUHJlZGVmaW5lZEl0ZW1zKGl0ZW1zKSB7XG4gICAgdmFyIF90aGlzMjMgPSB0aGlzO1xuXG4gICAgaXRlbXMuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0JyAmJiBpdGVtLnZhbHVlKSB7XG4gICAgICAgIF90aGlzMjMuX2FkZEl0ZW0oe1xuICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICAgIGNob2ljZUlkOiBpdGVtLmlkLFxuICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGl0ZW0uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogaXRlbS5wbGFjZWhvbGRlclxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJykge1xuICAgICAgICBfdGhpczIzLl9hZGRJdGVtKHtcbiAgICAgICAgICB2YWx1ZTogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uX3NldENob2ljZU9ySXRlbSA9IGZ1bmN0aW9uIF9zZXRDaG9pY2VPckl0ZW0oaXRlbSkge1xuICAgIHZhciBfdGhpczI0ID0gdGhpcztcblxuICAgIHZhciBpdGVtVHlwZSA9IGdldFR5cGUoaXRlbSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgaGFuZGxlVHlwZSA9IHtcbiAgICAgIG9iamVjdDogZnVuY3Rpb24gb2JqZWN0KCkge1xuICAgICAgICBpZiAoIWl0ZW0udmFsdWUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gLy8gSWYgd2UgYXJlIGRlYWxpbmcgd2l0aCBhIHNlbGVjdCBpbnB1dCwgd2UgbmVlZCB0byBjcmVhdGUgYW4gb3B0aW9uIGZpcnN0XG4gICAgICAgIC8vIHRoYXQgaXMgdGhlbiBzZWxlY3RlZC4gRm9yIHRleHQgaW5wdXRzIHdlIGNhbiBqdXN0IGFkZCBpdGVtcyBub3JtYWxseS5cblxuXG4gICAgICAgIGlmICghX3RoaXMyNC5faXNUZXh0RWxlbWVudCkge1xuICAgICAgICAgIF90aGlzMjQuX2FkZENob2ljZSh7XG4gICAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZSxcbiAgICAgICAgICAgIGxhYmVsOiBpdGVtLmxhYmVsLFxuICAgICAgICAgICAgaXNTZWxlY3RlZDogdHJ1ZSxcbiAgICAgICAgICAgIGlzRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgY3VzdG9tUHJvcGVydGllczogaXRlbS5jdXN0b21Qcm9wZXJ0aWVzLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IGl0ZW0ucGxhY2Vob2xkZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczI0Ll9hZGRJdGVtKHtcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLnZhbHVlLFxuICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICBjaG9pY2VJZDogaXRlbS5pZCxcbiAgICAgICAgICAgIGN1c3RvbVByb3BlcnRpZXM6IGl0ZW0uY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBpdGVtLnBsYWNlaG9sZGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IGZ1bmN0aW9uIHN0cmluZygpIHtcbiAgICAgICAgaWYgKCFfdGhpczI0Ll9pc1RleHRFbGVtZW50KSB7XG4gICAgICAgICAgX3RoaXMyNC5fYWRkQ2hvaWNlKHtcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtLFxuICAgICAgICAgICAgbGFiZWw6IGl0ZW0sXG4gICAgICAgICAgICBpc1NlbGVjdGVkOiB0cnVlLFxuICAgICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpczI0Ll9hZGRJdGVtKHtcbiAgICAgICAgICAgIHZhbHVlOiBpdGVtXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGhhbmRsZVR5cGVbaXRlbVR5cGVdKCk7XG4gIH07XG5cbiAgX3Byb3RvLl9maW5kQW5kU2VsZWN0Q2hvaWNlQnlWYWx1ZSA9IGZ1bmN0aW9uIF9maW5kQW5kU2VsZWN0Q2hvaWNlQnlWYWx1ZSh2YWwpIHtcbiAgICB2YXIgX3RoaXMyNSA9IHRoaXM7XG5cbiAgICB2YXIgY2hvaWNlcyA9IHRoaXMuX3N0b3JlLmNob2ljZXM7IC8vIENoZWNrICd2YWx1ZScgcHJvcGVydHkgZXhpc3RzIGFuZCB0aGUgY2hvaWNlIGlzbid0IGFscmVhZHkgc2VsZWN0ZWRcblxuICAgIHZhciBmb3VuZENob2ljZSA9IGNob2ljZXMuZmluZChmdW5jdGlvbiAoY2hvaWNlKSB7XG4gICAgICByZXR1cm4gX3RoaXMyNS5jb25maWcudmFsdWVDb21wYXJlcihjaG9pY2UudmFsdWUsIHZhbCk7XG4gICAgfSk7XG5cbiAgICBpZiAoZm91bmRDaG9pY2UgJiYgIWZvdW5kQ2hvaWNlLnNlbGVjdGVkKSB7XG4gICAgICB0aGlzLl9hZGRJdGVtKHtcbiAgICAgICAgdmFsdWU6IGZvdW5kQ2hvaWNlLnZhbHVlLFxuICAgICAgICBsYWJlbDogZm91bmRDaG9pY2UubGFiZWwsXG4gICAgICAgIGNob2ljZUlkOiBmb3VuZENob2ljZS5pZCxcbiAgICAgICAgZ3JvdXBJZDogZm91bmRDaG9pY2UuZ3JvdXBJZCxcbiAgICAgICAgY3VzdG9tUHJvcGVydGllczogZm91bmRDaG9pY2UuY3VzdG9tUHJvcGVydGllcyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IGZvdW5kQ2hvaWNlLnBsYWNlaG9sZGVyLFxuICAgICAgICBrZXlDb2RlOiBmb3VuZENob2ljZS5rZXlDb2RlXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLl9nZW5lcmF0ZVBsYWNlaG9sZGVyVmFsdWUgPSBmdW5jdGlvbiBfZ2VuZXJhdGVQbGFjZWhvbGRlclZhbHVlKCkge1xuICAgIGlmICh0aGlzLl9pc1NlbGVjdEVsZW1lbnQpIHtcbiAgICAgIHZhciBwbGFjZWhvbGRlck9wdGlvbiA9IHRoaXMucGFzc2VkRWxlbWVudC5wbGFjZWhvbGRlck9wdGlvbjtcbiAgICAgIHJldHVybiBwbGFjZWhvbGRlck9wdGlvbiA/IHBsYWNlaG9sZGVyT3B0aW9uLnRleHQgOiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkY29uZmlnNCA9IHRoaXMuY29uZmlnLFxuICAgICAgICBwbGFjZWhvbGRlciA9IF90aGlzJGNvbmZpZzQucGxhY2Vob2xkZXIsXG4gICAgICAgIHBsYWNlaG9sZGVyVmFsdWUgPSBfdGhpcyRjb25maWc0LnBsYWNlaG9sZGVyVmFsdWU7XG4gICAgdmFyIGRhdGFzZXQgPSB0aGlzLnBhc3NlZEVsZW1lbnQuZWxlbWVudC5kYXRhc2V0O1xuXG4gICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICBpZiAocGxhY2Vob2xkZXJWYWx1ZSkge1xuICAgICAgICByZXR1cm4gcGxhY2Vob2xkZXJWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGFzZXQucGxhY2Vob2xkZXIpIHtcbiAgICAgICAgcmV0dXJuIGRhdGFzZXQucGxhY2Vob2xkZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHJldHVybiBDaG9pY2VzO1xufSgpO1xuXG4vKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBzY3JpcHRzX2Nob2ljZXMgPSBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZGVmYXVsdFwiXSA9IChjaG9pY2VzX0Nob2ljZXMpO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlbXCJkZWZhdWx0XCJdO1xufSk7IiwidmFyIG1hdGNoZXMgPSByZXF1aXJlKCdtYXRjaGVzLXNlbGVjdG9yJylcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHNlbGVjdG9yLCBjaGVja1lvU2VsZikge1xyXG4gIHZhciBwYXJlbnQgPSBjaGVja1lvU2VsZiA/IGVsZW1lbnQgOiBlbGVtZW50LnBhcmVudE5vZGVcclxuXHJcbiAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50KSB7XHJcbiAgICBpZiAobWF0Y2hlcyhwYXJlbnQsIHNlbGVjdG9yKSkgcmV0dXJuIHBhcmVudDtcclxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlXHJcbiAgfVxyXG59XHJcbiIsIlxyXG4vKipcclxuICogRWxlbWVudCBwcm90b3R5cGUuXHJcbiAqL1xyXG5cclxudmFyIHByb3RvID0gRWxlbWVudC5wcm90b3R5cGU7XHJcblxyXG4vKipcclxuICogVmVuZG9yIGZ1bmN0aW9uLlxyXG4gKi9cclxuXHJcbnZhciB2ZW5kb3IgPSBwcm90by5tYXRjaGVzU2VsZWN0b3JcclxuICB8fCBwcm90by53ZWJraXRNYXRjaGVzU2VsZWN0b3JcclxuICB8fCBwcm90by5tb3pNYXRjaGVzU2VsZWN0b3JcclxuICB8fCBwcm90by5tc01hdGNoZXNTZWxlY3RvclxyXG4gIHx8IHByb3RvLm9NYXRjaGVzU2VsZWN0b3I7XHJcblxyXG4vKipcclxuICogRXhwb3NlIGBtYXRjaCgpYC5cclxuICovXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1hdGNoO1xyXG5cclxuLyoqXHJcbiAqIE1hdGNoIGBlbGAgdG8gYHNlbGVjdG9yYC5cclxuICpcclxuICogQHBhcmFtIHtFbGVtZW50fSBlbFxyXG4gKiBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3JcclxuICogQHJldHVybiB7Qm9vbGVhbn1cclxuICogQGFwaSBwdWJsaWNcclxuICovXHJcblxyXG5mdW5jdGlvbiBtYXRjaChlbCwgc2VsZWN0b3IpIHtcclxuICBpZiAodmVuZG9yKSByZXR1cm4gdmVuZG9yLmNhbGwoZWwsIHNlbGVjdG9yKTtcclxuICB2YXIgbm9kZXMgPSBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyArK2kpIHtcclxuICAgIGlmIChub2Rlc1tpXSA9PSBlbCkgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufSIsImltcG9ydCByZWFkeSBmcm9tICdVdGlscy9kb2N1bWVudFJlYWR5LmpzJztcbmltcG9ydCBiYXJvbiBmcm9tICdiYXJvbic7XG5cbnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgYmFyb24oe1xuICAgIHJvb3Q6ICcjYmFyb24tZGVtbycsXG4gICAgc2Nyb2xsZXI6ICcuYmFyb25fX3Njcm9sbGVyJyxcbiAgICBiYXI6ICcuYmFyb25fX2JhcicsXG4gICAgc2Nyb2xsaW5nQ2xzOiAnYmFyb24tLXNjcm9sbGluZycsXG4gICAgZHJhZ2dpbmdDbHM6ICdiYXJvbi0tZHJhZ2dpbmcnLFxuICAgIGJhck9uQ2xzOiAnYmFyb24tLXNjcm9sbGJhcicsXG4gIH0pO1xuXG59KTtcbiIsInJlcXVpcmUoJy4uL21haW4tbmF2L21haW4tbmF2LmpzJyk7XG5yZXF1aXJlKCcuLi9idXJnZXIvYnVyZ2VyLmpzJyk7XG5yZXF1aXJlKCcuLi9maWVsZC10ZXh0L2ZpZWxkLXRleHQuanMnKTtcbnJlcXVpcmUoJy4uL2ZpZWxkLWZpbGUvZmllbGQtZmlsZS5qcycpO1xucmVxdWlyZSgnLi4vZmllbGQtbnVtL2ZpZWxkLW51bS5qcycpO1xucmVxdWlyZSgnLi4vZmllbGQtc2VsZWN0L2ZpZWxkLXNlbGVjdC5qcycpO1xucmVxdWlyZSgnLi4vc2Nyb2xsLWxpbmsvc2Nyb2xsLWxpbmsuanMnKTtcbnJlcXVpcmUoJy4uL3RvLXRvcC90by10b3AuanMnKTtcbnJlcXVpcmUoJy4uL29mZi1jYW52YXMvb2ZmLWNhbnZhcy5qcycpO1xucmVxdWlyZSgnLi4vbW9kYWwvbW9kYWwuanMnKTtcbnJlcXVpcmUoJy4uL3RhYnMvdGFicy5qcycpO1xucmVxdWlyZSgnLi4vYmFyb24vYmFyb24uanMnKTtcbnJlcXVpcmUoJy4uL2Zvcm0tdmFsaWRhdGlvbi9mb3JtLXZhbGlkYXRpb24uanMnKTtcbnJlcXVpcmUoJy4uLy4uL2pzL3NjcmlwdC5qcycpO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbmltcG9ydCByZWFkeSBmcm9tICdVdGlscy9kb2N1bWVudFJlYWR5LmpzJztcblxucmVhZHkoZnVuY3Rpb24oKXtcblxuICB2YXIgYnVyZ2VycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXJnZXInKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1cmdlcnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYnVyZ2VyID0gYnVyZ2Vyc1tpXTtcbiAgICBidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QnVyZ2VyVGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dCdXJnZXJUYXJnZXQoKSB7XG4gICAgdmFyIHRhcmdldElkID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LWlkJyk7XG4gICAgdmFyIHRhcmdldENsYXNzVG9nZ2xlID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGFyZ2V0LWNsYXNzLXRvZ2dsZScpO1xuICAgIGlmICh0YXJnZXRJZCAmJiB0YXJnZXRDbGFzc1RvZ2dsZSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWNsb3NlJyk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCkuY2xhc3NMaXN0LnRvZ2dsZSh0YXJnZXRDbGFzc1RvZ2dsZSk7XG4gICAgfVxuICB9XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbmltcG9ydCBjbG9zZXN0IGZyb20gJ2Nsb3Nlc3QnO1xuaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xuXG5yZWFkeShmdW5jdGlvbigpIHtcblxuICAvKlxuICAgINCk0L7RgNC80LA6INGA0LDQsdC+0YLQsCDRgdGC0LjQu9C40LfQvtCy0LDQvdC90L7Qs9C+IGlucHV0W3R5cGU9XCJmaWxlXCJdXG4gICAg0JDQstGC0L7RgDogT3N2YWxkYXMgVmFsdXRpcywgd3d3Lm9zdmFsZGFzLmluZm8gKNCw0LTQsNC/0YLQuNGA0L7QstCw0L3QviDQv9C+0LQg0LjRgdC/0L7Qu9GM0LfRg9C10LzRg9GOINGA0LDQt9C80LXRgtC60YMpXG4gICAgQXZhaWxhYmxlIGZvciB1c2UgdW5kZXIgdGhlIE1JVCBMaWNlbnNlXG4gICovXG5cbiAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICcuZmllbGQtZmlsZV9faW5wdXQ6bm90KFtkaXNhYmxlZF0pJyApO1xuICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCBpbnB1dHMsIGZ1bmN0aW9uKCBpbnB1dCApXG4gIHtcbiAgICB2YXIgbGFiZWwgID0gY2xvc2VzdChpbnB1dCwgJy5maWVsZC1maWxlJykucXVlcnlTZWxlY3RvciggJy5maWVsZC1maWxlX19uYW1lLXRleHQnICksXG4gICAgICAgIGxhYmVsVmFsID0gbGFiZWwuaW5uZXJIVE1MO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGZ1bmN0aW9uKCBlICkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gJyc7XG4gICAgICBpZiggdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDEgKSB7XG4gICAgICAgIGZpbGVOYW1lID0gKCB0aGlzLmdldEF0dHJpYnV0ZSggJ2RhdGEtbXVsdGlwbGUtY2FwdGlvbicgKSB8fCAnJyApLnJlcGxhY2UoICd7Y291bnR9JywgdGhpcy5maWxlcy5sZW5ndGggKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBmaWxlTmFtZSA9IGUudGFyZ2V0LnZhbHVlLnNwbGl0KCAnXFxcXCcgKS5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgaWYoIGZpbGVOYW1lICkge1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBmaWxlTmFtZTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBsYWJlbFZhbDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbmltcG9ydCByZWFkeSBmcm9tICdVdGlscy9kb2N1bWVudFJlYWR5LmpzJztcblxucmVhZHkoZnVuY3Rpb24oKXtcblxuICB2YXIgZmllbGRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggJy5maWVsZC1udW0nICk7XG4gIGlmKGZpZWxkcy5sZW5ndGgpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKCBmaWVsZHMsIGZ1bmN0aW9uKCBmaWVsZCApIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZmllbGQucXVlcnlTZWxlY3RvcignLmZpZWxkLW51bV9faW5wdXQnKTtcbiAgICAgIGNvbnN0IHZhbHVlTWluID0gaW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKSA/ICtpbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpIDogLUluZmluaXR5O1xuICAgICAgY29uc3QgdmFsdWVNYXggPSBpbnB1dC5nZXRBdHRyaWJ1dGUoJ21heCcpID8gK2lucHV0LmdldEF0dHJpYnV0ZSgnbWF4JykgOiBJbmZpbml0eTtcbiAgICAgIGNvbnN0IHZhbHVlU3RlcCA9IGlucHV0LmdldEF0dHJpYnV0ZSgnc3RlcCcpID8gK2lucHV0LmdldEF0dHJpYnV0ZSgnc3RlcCcpIDogMTtcbiAgICAgIGZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdmaWVsZC1udW1fX2J0bicpICYmICFpbnB1dC5nZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgICAgICBsZXQgbnVtID0gcGFyc2VJbnQoaW5wdXQudmFsdWUpO1xuICAgICAgICAgIGlmKGlzTmFOKG51bSkpIG51bSA9IDA7XG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmllbGQtbnVtX19idG4tLXBsdXMnKSkge1xuICAgICAgICAgICAgaWYgKG51bSA8IHZhbHVlTWF4KSBpbnB1dC52YWx1ZSA9IG51bSArIHZhbHVlU3RlcDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZmllbGQtbnVtX19idG4tLW1pbnVzJykpIHtcbiAgICAgICAgICAgIGlmIChudW0gPiB2YWx1ZU1pbikgaW5wdXQudmFsdWUgPSBudW0gLSB2YWx1ZVN0ZXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG59KTtcbiIsIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuXG5pbXBvcnQgcmVhZHkgZnJvbSAnVXRpbHMvZG9jdW1lbnRSZWFkeS5qcyc7XG5pbXBvcnQgQ2hvaWNlcyBmcm9tICdjaG9pY2VzLmpzJztcblxucmVhZHkoZnVuY3Rpb24oKXtcblxuICBpZiAodHlwZW9mIE9iamVjdC5hc3NpZ24gIT0gJ2Z1bmN0aW9uJykge1xuICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICd1c2Ugc3RyaWN0JztcbiAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgIH1cblxuICAgICAgdGFyZ2V0ID0gT2JqZWN0KHRhcmdldCk7XG4gICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfVxuXG4gIC8vINCS0LrQu9GO0YfQuNC8INC90LAg0LrQsNC60L7QvC3RgtC+INC60L7QvdC60YDQtdGC0L3QvtC8INC+0YLQtNC10LvRjNC90L5cbiAgLy8gY29uc3QgY2hvaWNlcyA9IG5ldyBDaG9pY2VzKCcjc29tZS1pZicsIHsvKiBvcHRpb25zICovfSk7XG5cbiAgLy8g0JjQu9C4INGC0YPQv9C+INC90LDQudC00ZHQvCDQstGB0LUg0YHQtdC70LXQutGC0Ysg0Lgg0LLQutC70Y7Rh9C40Lwg0L3QsCDQvdC40YUgQ2hvaWNlc1xuICBjb25zdCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpZWxkLXNlbGVjdF9fc2VsZWN0Jyk7XG4gIHNlbGVjdHMuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICBuZXcgQ2hvaWNlcyhpdGVtLCB7XG4gICAgICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgICAgIHBsYWNlaG9sZGVyVmFsdWU6ICfQktGL0LHQtdGA0LjRgtC1JyxcbiAgICB9KTtcbiAgfSk7XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbmltcG9ydCByZWFkeSBmcm9tICdVdGlscy9kb2N1bWVudFJlYWR5LmpzJztcbmltcG9ydCBhdXRvc2l6ZSBmcm9tICdhdXRvc2l6ZSc7XG5cbnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIGF1dG9zaXplKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RleHRhcmVhJykpO1xuXG59KTtcbiIsIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuXG5jb25zdCBjbG9zZXN0ID0gcmVxdWlyZSgnY2xvc2VzdCcpO1xuaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xuXG5yZWFkeShmdW5jdGlvbigpe1xuXG4gIC8vINCU0LvRjyDQstGB0LXRhSDRhNC+0YDQvCDRgdGC0YDQsNC90LjRhtGLXG4gIGNvbnN0IGZvcm1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtW2RhdGEtY2hlY2stZm9ybV0nKSk7XG4gIGZvcm1zLmZvckVhY2goZnVuY3Rpb24oZm9ybSl7XG4gICAgLy8g0J/QvtC00L/QuNGI0LXQvNGB0Y8g0L3QsCDRgdC+0LHRi9GC0LjQtSDQvtGC0L/RgNCw0LLQutC4XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcbiAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAvLyDQn9GA0L7QstC10YDQuNC8INCy0YHQtSDRgtC10LrRgdGC0L7QstGL0LUg0LjQvdC/0YPRgtGLXG4gICAgICBjb25zdCBmaWVsZHNUZXh0ID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W2RhdGEtY2hlY2stcGF0dGVybl0nKSk7XG4gICAgICBmaWVsZHNUZXh0LmZvckVhY2goZnVuY3Rpb24oaW5wdXQpe1xuICAgICAgICBpZighY2hlY2tGaWVsZFRleHQoaW5wdXQpKSB2YWxpZCA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgICAvLyDQn9GA0L7QstC10YDQuNC8INCy0YHQtSDRh9C10LrQsdC+0LrRgdGLXG4gICAgICBjb25zdCBmaWVsZHNDaGVja2JveCA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLWNoZWNrLXN0YXRlXScpKTtcbiAgICAgIGZpZWxkc0NoZWNrYm94LmZvckVhY2goZnVuY3Rpb24oaW5wdXQpe1xuICAgICAgICBpZighY2hlY2tGaWVsZENoZWNrYm94KGlucHV0KSkgdmFsaWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgICAgLy8g0JXRgdC70Lgg0LHRi9C70Lgg0L7RiNC40LHQutC4LCDQvdC1INC+0YLQv9GA0LDQstC70Y/QtdC8INGE0L7RgNC80YNcbiAgICAgIGlmKCF2YWxpZCkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyDQlNC70Y8g0LLRgdC10YUg0L/RgNC+0LLQtdGA0Y/QtdC80YvRhSDRgtC10LrRgdGC0L7QstGL0YUg0L/QvtC70LXQuVxuICBjb25zdCBmaWVsZHNUZXh0ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLWNoZWNrLXBhdHRlcm5dJykpO1xuICBmaWVsZHNUZXh0LmZvckVhY2goZnVuY3Rpb24oaW5wdXQpe1xuICAgIGxldCBoYXNCZWVuQWxyZWFkeUJsdXJlZCA9IGZhbHNlO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBmdW5jdGlvbigpe1xuICAgICAgY2hlY2tGaWVsZFRleHQoaW5wdXQpO1xuICAgICAgaWYoIWhhc0JlZW5BbHJlYWR5Qmx1cmVkKSBoYXNCZWVuQWxyZWFkeUJsdXJlZCA9IHRydWU7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpeyBpZihoYXNCZWVuQWxyZWFkeUJsdXJlZCkgY2hlY2tGaWVsZFRleHQoaW5wdXQpOyB9KTtcbiAgfSk7XG5cbiAgLy8g0JTQu9GPINCy0YHQtdGFINC/0YDQvtCy0LXRgNGP0LXQvNGL0YUg0YfQtdC60LHQvtC60YHQvtCyXG4gIGNvbnN0IGZpZWxkc0NoZWNrYm94ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFtkYXRhLWNoZWNrLXN0YXRlXScpKTtcbiAgZmllbGRzQ2hlY2tib3guZm9yRWFjaChmdW5jdGlvbihpbnB1dCl7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXsgY2hlY2tGaWVsZENoZWNrYm94KGlucHV0KTsgfSk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNoZWNrRmllbGRUZXh0KGlucHV0KSB7XG4gICAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChpbnB1dC5kYXRhc2V0LmNoZWNrUGF0dGVybiwgJ2dpJyk7XG4gICAgY29uc3QgcmVzdWx0ID0gcmVnRXhwLnRlc3QoaW5wdXQudmFsdWUpO1xuICAgIGNvbnN0IGVycm9yQ2xhc3MgPSAnZmllbGQtdGV4dC0tZXJyb3InO1xuICAgIGNvbnN0IHBhcmVudCA9IGNsb3Nlc3QoaW5wdXQsICcuZmllbGQtdGV4dCcpO1xuICAgIHJlc3VsdCA/IHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKGVycm9yQ2xhc3MpIDogcGFyZW50LmNsYXNzTGlzdC5hZGQoZXJyb3JDbGFzcyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrRmllbGRDaGVja2JveChpbnB1dCkge1xuICAgIGNvbnN0IHRydWVWYWwgPSBpbnB1dC5kYXRhc2V0LmNoZWNrU3RhdGUgPT0gJ29uJyA/IHRydWUgOiBmYWxzZTtcbiAgICBjb25zdCByZXN1bHQgPSB0cnVlVmFsID09PSBpbnB1dC5jaGVja2VkXG4gICAgY29uc3QgZXJyb3JDbGFzcyA9ICdmaWVsZC1jaGVja2JveF9faW5wdXQtd3JhcC0tZXJyb3InO1xuICAgIGNvbnN0IHBhcmVudCA9IGNsb3Nlc3QoaW5wdXQsICcuZmllbGQtY2hlY2tib3hfX2lucHV0LXdyYXAnKTtcbiAgICByZXN1bHQgPyBwYXJlbnQuY2xhc3NMaXN0LnJlbW92ZShlcnJvckNsYXNzKSA6IHBhcmVudC5jbGFzc0xpc3QuYWRkKGVycm9yQ2xhc3MpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50IEVsZW1lbnQgKi9cblxuaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xuXG5yZWFkeShmdW5jdGlvbigpIHtcblxuICAvLyDQlNC+0LHQsNCy0LvQtdC90LjQtS/Rg9C00LDQu9C10L3QuNC1INC80L7QtNC40YTQuNC60LDRgtC+0YDQvtCyINC/0YDQuCDRhNC+0LrRg9GB0LjRgNC+0LLQutC1INC90LAg0YHRgdGL0LvQvtGH0L3QvtC8INGN0LvQtdC80LXQvdGC0LVcbiAgdmFyIGxpbmtDbGFzc05hbWUgPSAnbWFpbi1uYXZfX2xpbmsnO1xuICB2YXIgbGlua0NsYXNzTmFtZVNob3dDaGlsZCA9ICdtYWluLW5hdl9faXRlbS0tc2hvdy1jaGlsZCc7XG4gIHZhciBmaW5kTGlua0NsYXNzTmFtZSA9IG5ldyBSZWdFeHAobGlua0NsYXNzTmFtZSk7XG4gIC8vINCh0LvQtdC20LXQvdC40LUg0LfQsCDQstGB0L/Qu9GL0LLRiNC40Lwg0YHQvtCx0YvRgtC40LXQvCBmb2N1cyAo0L3Rg9C20L3QviDQtNC+0LHQsNCy0LjRgtGMINC60LvQsNGB0YEsINC/0L7QutCw0LfRi9Cy0LDRjtGJ0LjQuSDQv9C+0YLQvtC80LrQvtCyKVxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8g0JXRgdC70Lgg0YHQvtCx0YvRgtC40LUg0LLRgdC/0LvRi9C70L4g0L7RgiDQvtC00L3QvtC5INC40Lcg0YHRgdGL0LvQvtC6INCz0LsuINC80LXQvdGOXG4gICAgaWYgKGZpbmRMaW5rQ2xhc3NOYW1lLnRlc3QoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSkpIHtcbiAgICAgIC8vINCU0L7QsdCw0LLQuNC8INC60LvQsNGB0YHRiywg0L/QvtC60LDQt9GL0LLQsNGO0YnQuNC1INGB0L/QuNGB0LrQuCDQstC70L7QttC10L3QvdGL0YUg0YPRgNC+0LLQvdC10LksINC90LAg0LLRgdC10YUg0YDQvtC00LjRgtC10LvQtdC5XG4gICAgICB2YXIgcGFyZW50cyA9IGdldFBhcmVudHMoZXZlbnQudGFyZ2V0LCAnLm1haW4tbmF2X19pdGVtJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50c1tpXS5jbGFzc0xpc3QuYWRkKGxpbmtDbGFzc05hbWVTaG93Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSk7XG4gIC8vINCh0LvQtdC20LXQvdC40LUg0LfQsCDQstGB0L/Qu9GL0LLRiNC40Lwg0YHQvtCx0YvRgtC40LXQvCBibHVyICjQvdGD0LbQvdC+INGD0LHRgNCw0YLRjCDQutC70LDRgdGBLCDQv9C+0LrQsNC30YvQstCw0Y7RidC40Lkg0L/QvtGC0L7QvNC60L7QsilcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8g0JXRgdC70Lgg0YHQvtCx0YvRgtC40LUg0LLRgdC/0LvRi9C70L4g0L7RgiDQvtC00L3QvtC5INC40Lcg0YHRgdGL0LvQvtC6INCz0LsuINC80LXQvdGOXG4gICAgaWYgKGZpbmRMaW5rQ2xhc3NOYW1lLnRlc3QoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSkpIHtcbiAgICAgIC8vINCj0LHQtdGA0LXQvCDQstGB0LUg0LrQu9Cw0YHRgdGLLCDQv9C+0LrQsNC30YvQstCw0Y7RidC40LUg0YHQv9C40YHQutC4IDIrINGD0YDQvtCy0L3QtdC5XG4gICAgICB2YXIgcGFyZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nK2xpbmtDbGFzc05hbWVTaG93Q2hpbGQpXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGFyZW50c1tpXS5jbGFzc0xpc3QucmVtb3ZlKGxpbmtDbGFzc05hbWVTaG93Q2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgdHJ1ZSk7XG5cblxuXG4gIC8vIGVzbGludC1kaXNhYmxlXG4gIC8qISBnZXRQYXJlbnRzLmpzIHwgKGMpIDIwMTcgQ2hyaXMgRmVyZGluYW5kaSB8IE1JVCBMaWNlbnNlIHwgaHR0cDovL2dpdGh1Yi5jb20vY2ZlcmRpbmFuZGkvZ2V0UGFyZW50cyAqL1xuICAvKipcbiAgICogR2V0IGFsbCBvZiBhbiBlbGVtZW50J3MgcGFyZW50IGVsZW1lbnRzIHVwIHRoZSBET00gdHJlZVxuICAgKiBAcGFyYW0gIHtOb2RlfSAgIGVsZW0gICAgIFRoZSBlbGVtZW50XG4gICAqIEBwYXJhbSAge1N0cmluZ30gc2VsZWN0b3IgU2VsZWN0b3IgdG8gbWF0Y2ggYWdhaW5zdCBbb3B0aW9uYWxdXG4gICAqIEByZXR1cm4ge0FycmF5fSAgICAgICAgICAgVGhlIHBhcmVudCBlbGVtZW50c1xuICAgKi9cbiAgdmFyIGdldFBhcmVudHMgPSBmdW5jdGlvbiAoIGVsZW0sIHNlbGVjdG9yICkge1xuXG4gICAgICAvLyBFbGVtZW50Lm1hdGNoZXMoKSBwb2x5ZmlsbFxuICAgICAgaWYgKCFFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzKSB7XG4gICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyA9XG4gICAgICAgICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgRWxlbWVudC5wcm90b3R5cGUub01hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAodGhpcy5kb2N1bWVudCB8fCB0aGlzLm93bmVyRG9jdW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwocyksXG4gICAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgd2hpbGUgKC0taSA+PSAwICYmIG1hdGNoZXMuaXRlbShpKSAhPT0gdGhpcykge30gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIGkgPiAtMTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gU2V0dXAgcGFyZW50cyBhcnJheVxuICAgICAgdmFyIHBhcmVudHMgPSBbXTtcblxuICAgICAgLy8gR2V0IG1hdGNoaW5nIHBhcmVudCBlbGVtZW50c1xuICAgICAgZm9yICggOyBlbGVtICYmIGVsZW0gIT09IGRvY3VtZW50OyBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkge1xuXG4gICAgICAgICAgLy8gQWRkIG1hdGNoaW5nIHBhcmVudHMgdG8gYXJyYXlcbiAgICAgICAgICBpZiAoIHNlbGVjdG9yICkge1xuICAgICAgICAgICAgICBpZiAoIGVsZW0ubWF0Y2hlcyggc2VsZWN0b3IgKSApIHtcbiAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaCggZWxlbSApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50cy5wdXNoKCBlbGVtICk7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJlbnRzO1xuXG4gIH07XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50IHdpbmRvdyAqL1xuXG5pbXBvcnQgcmVhZHkgZnJvbSAnVXRpbHMvZG9jdW1lbnRSZWFkeS5qcyc7XG5pbXBvcnQgZ2V0U2Nyb2xsU2l6ZSBmcm9tICdVdGlscy9nZXRTY3JvbGxTaXplLmpzJztcblxucmVhZHkoZnVuY3Rpb24gKCkge1xuICBjb25zdCBib2R5UGFkZGluZ1JpZ2h0T3JpZ2luYWwgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5LCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2FbZGF0YS1tb2RhbF0sIGJ1dHRvbltkYXRhLW1vZGFsXScpO1xuXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldC5tb2RhbCA9PT0gJ29wZW4nKSB7XG4gICAgICBzaG93TW9kYWwoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCh0YXJnZXQuaGFzaCB8fCB0YXJnZXQuZGF0YXNldC5tb2RhbFRhcmdldCkuc2xpY2UoMSkpICk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldCAmJiB0YXJnZXQuZGF0YXNldC5tb2RhbCA9PT0gJ2Nsb3NlJyB8fCBldmVudC50YXJnZXQubWF0Y2hlcygnW2FyaWEtbW9kYWxdJykpIHtcbiAgICAgIGNsb3NlQWxsTW9kYWxzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd01vZGFsKHRhcmdldE1vZGFsTm9kZSkge1xuICAgICAgaWYgKChkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAtIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpID4gMCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IGJvZHlQYWRkaW5nUmlnaHRPcmlnaW5hbCArIGdldFNjcm9sbFNpemUoKSArICdweCc7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ21vZGFsLW9wZW4nKTtcblxuICAgICAgdGFyZ2V0TW9kYWxOb2RlLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1zaG93Jyk7XG4gICAgICB0YXJnZXRNb2RhbE5vZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB0YXJnZXRNb2RhbE5vZGUuYXJpYU1vZGFsID0gdHJ1ZTtcbiAgICAgIHRhcmdldE1vZGFsTm9kZS5hcmlhSGlkZGVuID0gbnVsbDtcbiAgICAgIHRhcmdldE1vZGFsTm9kZS5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG5cbiAgICAgIGJhY2tkcm9wLmNsYXNzTmFtZSA9ICdtb2RhbC1iYWNrZHJvcCc7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChiYWNrZHJvcCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xvc2VBbGxNb2RhbHMoKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLW9wZW4nKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gJyc7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbCcpLmZvckVhY2goZnVuY3Rpb24gKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1zaG93Jyk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIG1vZGFsLmFyaWFNb2RhbCA9IG51bGw7XG4gICAgICAgIG1vZGFsLmFyaWFIaWRkZW4gPSB0cnVlO1xuICAgICAgICBtb2RhbC5yZW1vdmVBdHRyaWJ1dGUoJ3JvbGUnKTtcbiAgICAgIH0pO1xuXG4gICAgICBiYWNrZHJvcC5yZW1vdmUoKTtcbiAgICB9XG4gIH0pO1xuXG59KTtcbiIsIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuXG5pbXBvcnQgcmVhZHkgZnJvbSAnVXRpbHMvZG9jdW1lbnRSZWFkeS5qcyc7XG5cbnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmKGV2ZW50LnRhcmdldC5kYXRhc2V0LnRvZ2dsZSA9PT0gJ29mZi1jYW52YXMnKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgb2ZmQ2FudmFzVG9nZ2xlKCk7XG4gICAgfVxuICAgIC8vINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0YHQvtCy0LzQtdGB0YLQuNGC0Ywg0L/QtdGA0LXQutC70Y7Rh9C10L3QuNC1IG9mZi1jYW52YXMg0Lgg0LLRgdGC0YDQvtC10L3QvdGD0Y4g0YTRg9C90Lot0YHRgtGMXG4gICAgaWYoZXZlbnQudGFyZ2V0LmRhdGFzZXQudG9nZ2xlTmF0aXZlID09PSAnb2ZmLWNhbnZhcycpIHtcbiAgICAgIG9mZkNhbnZhc1RvZ2dsZSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gb2ZmQ2FudmFzVG9nZ2xlKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvZmYtY2FudmFzJykuY2xhc3NMaXN0LnRvZ2dsZSgnb2ZmLWNhbnZhcy0tb3BlbicpO1xuICB9XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50IHdpbmRvdyBwZXJmb3JtYW5jZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKi9cblxuaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xuXG5yZWFkeShmdW5jdGlvbigpe1xuXG4gIHZhciBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tocmVmXj1cIiNcIl1bZGF0YS1zY3JvbGwtbGlua10nKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgdmFyIGhhc2ggPSB0aGlzLmhyZWYucmVwbGFjZSgvW14jXSooLiopLywgJyQxJyk7XG4gICAgICBpZihoYXNoICYmIGhhc2ggIT09ICcjJykge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBzY3JvbGwgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgICAgIHZhciB0YXJnZXRUb3AgPSBnZXRPZmZzZXRSZWN0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaGFzaCkpLnRvcCAtIDEwOyAvLyDQoSDQv9C+0L/RgNCw0LLQutC+0Lkg0LIgMTBweFxuICAgICAgICB2YXIgc2Nyb2xsRGlmZiA9IChzY3JvbGwgLSB0YXJnZXRUb3ApICogLTE7XG4gICAgICAgIGFuaW1hdGUoe1xuICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgICAgdGltaW5nOiBmdW5jdGlvbih0aW1lRnJhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnBvdyh0aW1lRnJhY3Rpb24sIDQpOyAvLyBodHRwczovL2xlYXJuLmphdmFzY3JpcHQucnUvanMtYW5pbWF0aW9uXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkcmF3OiBmdW5jdGlvbihwcm9ncmVzcykge1xuICAgICAgICAgICAgdmFyIHNjcm9sbE5vdyA9IHNjcm9sbCArIHByb2dyZXNzICogc2Nyb2xsRGlmZjtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLHNjcm9sbE5vdyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlKF9yZWYpIHtcbiAgICB2YXIgdGltaW5nID0gX3JlZi50aW1pbmcsXG4gICAgICAgIGRyYXcgPSBfcmVmLmRyYXcsXG4gICAgICAgIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcbiAgICB2YXIgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gYW5pbWF0ZSh0aW1lKSB7XG4gICAgICB2YXIgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBkdXJhdGlvbjtcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB0aW1lRnJhY3Rpb24gPSAxO1xuICAgICAgdmFyIHByb2dyZXNzID0gdGltaW5nKHRpbWVGcmFjdGlvbik7XG4gICAgICBkcmF3KHByb2dyZXNzKTtcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE9mZnNldFJlY3QoZWxlbSkge1xuICAgIHZhciBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgdmFyIGJvZHkgPSBkb2N1bWVudC5ib2R5XG4gICAgdmFyIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnRcbiAgICB2YXIgc2Nyb2xsVG9wID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY0VsZW0uc2Nyb2xsVG9wIHx8IGJvZHkuc2Nyb2xsVG9wXG4gICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZG9jRWxlbS5zY3JvbGxMZWZ0IHx8IGJvZHkuc2Nyb2xsTGVmdFxuICAgIHZhciBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCBib2R5LmNsaWVudFRvcCB8fCAwXG4gICAgdmFyIGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgYm9keS5jbGllbnRMZWZ0IHx8IDBcbiAgICB2YXIgdG9wICA9IGJveC50b3AgKyAgc2Nyb2xsVG9wIC0gY2xpZW50VG9wXG4gICAgdmFyIGxlZnQgPSBib3gubGVmdCArIHNjcm9sbExlZnQgLSBjbGllbnRMZWZ0XG4gICAgcmV0dXJuIHsgdG9wOiBNYXRoLnJvdW5kKHRvcCksIGxlZnQ6IE1hdGgucm91bmQobGVmdCkgfVxuICB9XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50IHdpbmRvdyBoaXN0b3J5IGxvY2F0aW9uIEVsZW1lbnQgKi9cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG5cbiAgaWYobG9jYXRpb24uaGFzaCkge1xuICAgIHNob3dUYWIobG9jYXRpb24uaGFzaCk7XG4gIH1cblxuICAvLyDQodC70LXQtNC40Lwg0LfQsCDQv9C+0LTQvdC40LzQsNGO0YnQuNC80LjRgdGPINC60LvQuNC60LDQvNC4XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZihldmVudC50YXJnZXQuZGF0YXNldC50b2dnbGUgPT09ICd0YWInKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHRhcmdldCA9IGV2ZW50LnRhcmdldC5oYXNoID09PSB1bmRlZmluZWQgPyBldmVudC50YXJnZXQuZGF0YXNldC50YXJnZXQgOiBldmVudC50YXJnZXQuaGFzaDtcbiAgICAgIGlmICggdGFyZ2V0ICE9PSB1bmRlZmluZWQgKSB7XG4gICAgICAgIHNob3dUYWIodGFyZ2V0KTtcbiAgICAgICAgaWYoaGlzdG9yeSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSAmJiBoaXN0b3J5LnJlcGxhY2VTdGF0ZSkge1xuICAgICAgICAgIHZhciBzdGF0ZU9iamVjdCA9IHsndXJsJyA6IHRhcmdldH07XG4gICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHN0YXRlT2JqZWN0LnVybCAhPT0gd2luZG93LmxvY2F0aW9uLmhhc2gpIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZU9iamVjdCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHRhcmdldCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShzdGF0ZU9iamVjdCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHRhcmdldCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICog0J/QvtC60LDQt9GL0LLQsNC10YIg0YLQsNCxXG4gICAqIEBwYXJhbSAge3N0cmluZ30gdGFiSWQgSUQg0YLQsNCx0LAsINC60L7RgtC+0YDRi9C5INC90YPQttC90L4g0L/QvtC60LDQt9Cw0YLRjFxuICAgKi9cbiAgZnVuY3Rpb24gc2hvd1RhYih0YWJJZCl7XG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYklkKTtcbiAgICBpZiAoIGVsZW1lbnQgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3RhYnNfX2NvbnRlbnQtaXRlbScpICkge1xuICAgICAgdmFyIHRhYnNQYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYklkKS5jbG9zZXN0KCcudGFicycpO1xuICAgICAgdmFyIGFjdGl2ZVRhYkNsYXNzTmFtZSA9ICd0YWJzX19saW5rLXdyYXAtLWFjdGl2ZSc7XG4gICAgICB2YXIgYWN0aXZlVGFiQ29udGVudENsYXNzTmFtZSA9ICd0YWJzX19jb250ZW50LWl0ZW0tLWFjdGl2ZSc7XG4gICAgICAvLyDRgtCw0LFcbiAgICAgIHRhYnNQYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLicrYWN0aXZlVGFiQ2xhc3NOYW1lKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlVGFiQ2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGFjdGl2ZVRhYiA9IHRhYnNQYXJlbnQucXVlcnlTZWxlY3RvcignW2hyZWY9XCInK3RhYklkKydcIl0nKSA/IHRhYnNQYXJlbnQucXVlcnlTZWxlY3RvcignW2hyZWY9XCInK3RhYklkKydcIl0nKSA6IHRhYnNQYXJlbnQucXVlcnlTZWxlY3RvcignW2RhdGEtdGFyZ2V0PVwiJyt0YWJJZCsnXCJdJylcbiAgICAgIGFjdGl2ZVRhYi5jbG9zZXN0KCcudGFic19fbGluay13cmFwJykuY2xhc3NMaXN0LmFkZChhY3RpdmVUYWJDbGFzc05hbWUpO1xuICAgICAgLy8g0LrQvtC90YLQtdC90YIg0YLQsNCx0LBcbiAgICAgIHRhYnNQYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLicrYWN0aXZlVGFiQ29udGVudENsYXNzTmFtZSkuZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZVRhYkNvbnRlbnRDbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgICB0YWJzUGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFiSWQpLmNsYXNzTGlzdC5hZGQoYWN0aXZlVGFiQ29udGVudENsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbn0pO1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50IHdpbmRvdyBwZXJmb3JtYW5jZSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgKi9cblxuaW1wb3J0IHJlYWR5IGZyb20gJ1V0aWxzL2RvY3VtZW50UmVhZHkuanMnO1xuXG5yZWFkeShmdW5jdGlvbigpe1xuXG4gIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by10b3AnKSkge1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLXRvcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIHNjcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgIHZhciB0YXJnZXRUb3AgPSAwO1xuICAgICAgdmFyIHNjcm9sbERpZmYgPSAoc2Nyb2xsIC0gdGFyZ2V0VG9wKSAqIC0xO1xuICAgICAgYW5pbWF0ZSh7XG4gICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIHRpbWluZzogZnVuY3Rpb24odGltZUZyYWN0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgucG93KHRpbWVGcmFjdGlvbiwgNCk7IC8vIGh0dHBzOi8vbGVhcm4uamF2YXNjcmlwdC5ydS9qcy1hbmltYXRpb25cbiAgICAgICAgfSxcbiAgICAgICAgZHJhdzogZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcbiAgICAgICAgICB2YXIgc2Nyb2xsTm93ID0gc2Nyb2xsICsgcHJvZ3Jlc3MgKiBzY3JvbGxEaWZmO1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLHNjcm9sbE5vdyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIGZhbHNlKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB2aXNpYmlsaXR5VG9nZ2xlKTtcbiAgICB2aXNpYmlsaXR5VG9nZ2xlKCk7XG5cbiAgfVxuXG4gIGZ1bmN0aW9uIHZpc2liaWxpdHlUb2dnbGUoKSB7XG4gICAgaWYod2luZG93LnBhZ2VZT2Zmc2V0ID49IDUwMCkge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvLXRvcCcpLmNsYXNzTGlzdC5hZGQoJ3RvLXRvcC0tdmlzaWJsZScpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0by10b3AnKS5jbGFzc0xpc3QucmVtb3ZlKCd0by10b3AtLXZpc2libGUnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBhbmltYXRlKF9yZWYpIHtcbiAgICB2YXIgdGltaW5nID0gX3JlZi50aW1pbmcsXG4gICAgICAgIGRyYXcgPSBfcmVmLmRyYXcsXG4gICAgICAgIGR1cmF0aW9uID0gX3JlZi5kdXJhdGlvbjtcbiAgICB2YXIgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gYW5pbWF0ZSh0aW1lKSB7XG4gICAgICB2YXIgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBkdXJhdGlvbjtcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB0aW1lRnJhY3Rpb24gPSAxO1xuICAgICAgdmFyIHByb2dyZXNzID0gdGltaW5nKHRpbWVGcmFjdGlvbik7XG4gICAgICBkcmF3KHByb2dyZXNzKTtcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59KTtcbiIsIi8vIC8qIGdsb2JhbCBkb2N1bWVudCBjb25zb2xlICovXG5cbi8vIGltcG9ydCByZWFkeSBmcm9tICdVdGlscy9kb2N1bWVudFJlYWR5LmpzJztcbi8vIGltcG9ydCBnZXRTY3JvbGxTaXplIGZyb20gJ1V0aWxzL2dldFNjcm9sbFNpemUuanMnO1xuXG4vLyByZWFkeShmdW5jdGlvbigpIHtcbi8vICAgY29uc29sZS5sb2coJ0RPTSDQs9C10YDQvtC40YfQtdGB0LrQuCDQv9C+0YHRgtGA0L7QtdC9IScpO1xuLy8gICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3NzLXNjcm9sbC1zaXplJywgYCR7Z2V0U2Nyb2xsU2l6ZSgpfXB4YCk7XG4vLyB9KTtcblxuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JzsgLy8g0J/QtdGA0LXQtCDQuNGB0L/QvtC70YzQt9C+0LLQsNC90LjQtdC8INGD0YHRgtCw0L3QvtCy0LjRgtGMINC60LDQuiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtGMXG4vLyAkKGZ1bmN0aW9uKCkge1xuLy8gICBjb25zb2xlLmxvZygnalF1ZXJ5INCz0LXRgNC+0LjRh9C10YHQutC4INGB0YDQsNCx0L7RgtCw0LshJyk7XG4vLyB9KTtcbiIsIi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuXG5jb25zdCByZWFkeSA9IGZ1bmN0aW9uIChmbikge1xuICBpZiAoZG9jdW1lbnQuYXR0YWNoRXZlbnQgPyBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgOiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIil7XG4gICAgZm4oKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZm4pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlYWR5O1xuIiwiLyogZ2xvYmFsIGRvY3VtZW50ICovXG5cbmNvbnN0IGdldFNjcm9sbFNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIG91dGVyLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbGJhcicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyKTtcbiAgb3V0ZXIuYXBwZW5kQ2hpbGQoaW5uZXIpO1xuICBjb25zdCBzY3JvbGxiYXJTaXplID0gb3V0ZXIub2Zmc2V0V2lkdGggLSBpbm5lci5vZmZzZXRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XG4gIHJldHVybiBzY3JvbGxiYXJTaXplO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRTY3JvbGxTaXplO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==