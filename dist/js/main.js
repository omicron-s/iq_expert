/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../views/blocks/personal/personal.js":
/*!********************************************!*\
  !*** ../views/blocks/personal/personal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.personal .swiper-container', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 12,
    centeredSlides: true,
    navigation: {
      prevEl: '.personal .swiper-button-prev',
      nextEl: '.personal .swiper-button-next'
    },
    pagination: {
      el: '.personal .swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 60
      }
    }
  });
  swiper.on('slideChangeTransitionEnd', function () {
    var dataName = $('.personal .swiper-slide-active').data('name');
    $(".personal__list li[data-name=".concat(dataName, "]")).slideDown(200);
  });
  swiper.on('slideChangeTransitionStart', function () {
    $('.personal__list li').slideUp(200);
  });
});

/***/ }),

/***/ "../views/blocks/request/request.js":
/*!******************************************!*\
  !*** ../views/blocks/request/request.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]);
  var swiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.request .swiper-container', {
    slidesPerView: 1,
    speed: 400,
    spaceBetween: 10,
    centeredSlides: false,
    navigation: {
      prevEl: '.request .swiper-button-prev',
      nextEl: '.request .swiper-button-next'
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 60
      }
    }
  });
});

/***/ }),

/***/ "../views/blocks/result/result.js":
/*!****************************************!*\
  !*** ../views/blocks/result/result.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ "../../node_modules/swiper/swiper.esm.js");






/* harmony default export */ __webpack_exports__["default"] = (function () {
  $('.result__list li').each(function () {
    this.showed = true;
  });
  var windowWidth = window.innerWidth,
      myswiper,
      inits = false;
  $(window).on('resize load', function () {
    windowWidth = window.innerWidth;

    if (windowWidth < 768) {
      if (!inits) {
        inits = true;
        myswiper = new swiper__WEBPACK_IMPORTED_MODULE_5__["default"]('.result .swiper-container', {
          slidesPerView: 1.3,
          speed: 400,
          spaceBetween: 20,
          centeredSlides: false,
          // freeMode: true,
          on: {
            init: function init() {
              setTimeout(function () {
                myswiper.update();
              }, 10);
            }
          },
          breakpoints: {
            480: {
              centeredSlides: true,
              slidesPerView: 2,
              spaceBetween: 30
            }
          }
        });
      }
    } else {
      if (inits) {
        inits = false;
        myswiper.destroy();
      }
    }
  });
  var resizeSwiper = false;
  $(window).on('resize', function () {
    var windowWidth = window.innerWidth;

    if (windowWidth >= 540) {
      if (!resizeSwiper) {
        resizeSwiper = true;
        $('.result .swiper-slide').attr('style', null);
      }
    } else {
      resizeSwiper = false;
    }
  }); //Анимация счета цифр

  var swingNumber = function swingNumber(params, number) {
    $(params).each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: number
      }, {
        duration: 800,
        easing: 'swing',
        step: function step(now) {
          $(this).text(Math.ceil(now).toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ' '));
        }
      });
    });
  };

  $(window).on('scroll resize load', function () {
    var scroll = $(window).scrollTop() + window.innerHeight - 10;
    $('.result__list li').each(function () {
      var number = $(this).find('b').data('number');
      var el = this;

      if (scroll > $(this).offset().top && this.showed) {
        swingNumber($(el).find('b'), number);
        var percent = 339.292 * (1 - number / 100) + 'px';
        $(this).find('svg .result__value').css('stroke-dashoffset', percent);
        this.showed = false;
      }
    });
  });
});

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! focus-visible/dist/focus-visible.min */ "../../node_modules/focus-visible/dist/focus-visible.min.js");
/* harmony import */ var focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(focus_visible_dist_focus_visible_min__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blocks_personal_personal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @blocks/personal/personal */ "../views/blocks/personal/personal.js");
/* harmony import */ var _blocks_result_result__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @blocks/result/result */ "../views/blocks/result/result.js");
/* harmony import */ var _blocks_request_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @blocks/request/request */ "../views/blocks/request/request.js");

// import $ from 'jquery';
// import 'core-js/stable/array/for-each';
// import 'core-js/stable/array/includes';
// import 'core-js/stable/dom-collections/for-each';
// import 'core-js/stable';

/* полифил для :focus-visible */



 // import modal from '@layouts/modal/modal';
// import svg4everybody from 'svg4everybody/dist/svg4everybody.min';

$(function () {
  //Кнопка слайд-листа
  $('.slide__button').on('click', function () {
    if ($(this).find('span').hasClass('open')) {
      $(this).parents('.slide__static').siblings('.slide__wrapper').slideUp(function () {
        this.style = false;
      });
      $(this).find('span').removeClass('open');
    } else {
      var parentButton = $(this).parents('ul');
      parentButton.find('.slide__wrapper').slideUp();
      parentButton.find('.slide__button span').removeClass('open');
      $(this).parents('.slide__static').siblings('.slide__wrapper').slideDown();
      $(this).find('span').addClass('open');
    }
  });
  Object(_blocks_personal_personal__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(_blocks_request_request__WEBPACK_IMPORTED_MODULE_4__["default"])(); // svg4everybody();
  // $('svg').attr('focusable', 'false');
});
Object(_blocks_result_result__WEBPACK_IMPORTED_MODULE_3__["default"])();

/***/ })

/******/ });
//# sourceMappingURL=main.js.map