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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(45);


/***/ },

/***/ 45:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toString = toString;
	exports.format = format;

	var _dates = __webpack_require__(46);

	var _numbers = __webpack_require__(47);

	var _isDate = __webpack_require__(48);

	var _isDate2 = _interopRequireDefault(_isDate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var formatRegExp = /\{(\d+)(:[^\}]+)?\}/g;

	function toString(value, format, locale) {
	    if (format) {
	        if ((0, _isDate2.default)(value)) {
	            return (0, _dates.formatDate)(value, format, locale);
	        } else if (typeof value === "number") {
	            return (0, _numbers.formatNumber)(value, format, locale);
	        }
	    }

	    return value !== undefined ? value : "";
	}

	function format(format, values, locale) {
	    return format.replace(formatRegExp, function (match, index, placeholderFormat) {
	        var value = values[parseInt(index, 10)];

	        return toString(value, placeholderFormat ? placeholderFormat.substring(1) : "", locale);
	    });
	}

/***/ },

/***/ 46:
/***/ function(module, exports) {

	module.exports = require("./dates");

/***/ },

/***/ 47:
/***/ function(module, exports) {

	module.exports = require("./numbers");

/***/ },

/***/ 48:
/***/ function(module, exports) {

	module.exports = require("./common/is-date");

/***/ }

/******/ });