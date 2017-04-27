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

	module.exports = __webpack_require__(20);


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("./info");

/***/ },

/***/ 10:
/***/ function(module, exports) {

	module.exports = require("./territory");

/***/ },

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = loadNumbersInfo;

	var _info = __webpack_require__(9);

	var _currency = __webpack_require__(21);

	var _territory = __webpack_require__(10);

	var _territory2 = _interopRequireDefault(_territory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LATIN_NUMBER_FORMATS = "Formats-numberSystem-latn";
	var LATIN_NUMBER_SYMBOLS = "symbols-numberSystem-latn";
	var GROUP_SEPARATOR = ",";
	var LIST_SEPARATOR = ";";
	var DECIMAL_SEPARATOR = ".";

	var patternRegExp = /([ #,0. ]+)/g;
	var cldrCurrencyRegExp = /¤/g;

	function patternOptions(pattern) {
	    var patterns = pattern.replace(cldrCurrencyRegExp, "$").replace(patternRegExp, "n").split(";");

	    var numberPatterns = patternRegExp.exec(pattern.split(LIST_SEPARATOR)[0])[0].split(DECIMAL_SEPARATOR);
	    var integer = numberPatterns[0];

	    var groupSize = integer.split(GROUP_SEPARATOR).slice(1).map(function (group) {
	        return group.length;
	    }).reverse();

	    return {
	        groupSize: groupSize,
	        patterns: patterns
	    };
	}

	function loadCurrencyUnitPatterns(currencyInfo, currencyFormats) {
	    for (var field in currencyFormats) {
	        if (field.startsWith("unitPattern")) {
	            currencyInfo[field] = currencyFormats[field].replace("{0}", "n").replace("{1}", "$");
	        }
	    }
	}

	function loadNumbersInfo(locale, info) {
	    var localeInfo = _info.cldr[locale];
	    var numbers = localeInfo.numbers = localeInfo.numbers || {};
	    numbers.symbols = numbers.symbols || {};
	    for (var field in info) {
	        if (field === LATIN_NUMBER_SYMBOLS) {
	            Object.assign(numbers.symbols, info[field]);
	        } else if (field.includes(LATIN_NUMBER_FORMATS)) {
	            var style = field.substr(0, field.indexOf(LATIN_NUMBER_FORMATS));
	            var pattern = info[field].standard;
	            numbers[style] = patternOptions(pattern);
	            if (style === "currency") {
	                loadCurrencyUnitPatterns(numbers[style], info[field]);
	            }
	        } else if (field === "currencies") {
	            numbers.currencies = info[field];
	            var territory = (0, _territory2.default)(localeInfo);
	            if (territory && _info.cldr.supplemental.currencyData) {
	                numbers.localeCurrency = (0, _currency.territoryCurrencyCode)(territory);
	            }
	        }
	    }
	}

/***/ },

/***/ 21:
/***/ function(module, exports) {

	module.exports = require("./currency");

/***/ }

/******/ });