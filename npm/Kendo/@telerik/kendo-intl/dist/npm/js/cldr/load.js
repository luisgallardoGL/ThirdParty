module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(16);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = require("./info");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("./territory");

/***/ },
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = load;

	var _info = __webpack_require__(9);

	var _loadNumbers = __webpack_require__(17);

	var _loadNumbers2 = _interopRequireDefault(_loadNumbers);

	var _loadDates = __webpack_require__(18);

	var _loadDates2 = _interopRequireDefault(_loadDates);

	var _territory = __webpack_require__(10);

	var _territory2 = _interopRequireDefault(_territory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function loadLocale(locale, info) {
	    for (var field in info) {
	        if (field === "numbers") {
	            (0, _loadNumbers2.default)(locale, info[field]);
	        } else if (field === "dates") {
	            (0, _loadDates2.default)(locale, info[field]);
	        }
	    }
	}

	function load() {
	    var length = arguments.length;
	    for (var idx = 0; idx < length; idx++) {
	        var entry = arguments[idx];
	        if (entry.main) {
	            var locale = Object.keys(entry.main)[0];
	            var info = entry.main[locale];
	            var localeInfo = _info.cldr[locale] = _info.cldr[locale] || {};

	            localeInfo.name = localeInfo.name || locale;
	            localeInfo.identity = localeInfo.identity || info.identity;

	            (0, _territory2.default)(localeInfo);
	            loadLocale(locale, info);
	        } else if (entry.supplemental) {
	            if (entry.supplemental.weekData) {
	                _info.cldr.supplemental.weekData = {
	                    firstDay: entry.supplemental.weekData.firstDay
	                };
	            } else {
	                Object.assign(_info.cldr.supplemental, entry.supplemental);
	            }
	        }
	    }
	}

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("./load-numbers");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = require("./load-dates");

/***/ }
/******/ ]);