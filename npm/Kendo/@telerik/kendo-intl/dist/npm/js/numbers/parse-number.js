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

	module.exports = __webpack_require__(63);


/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = require("../cldr");

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = parseNumber;

	var _cldr = __webpack_require__(34);

	var exponentRegExp = /[eE][\-+]?[0-9]+/;
	var nonBreakingSpaceRegExp = /\u00A0/g;

	function cleanCurrencyNumber(value, info, format) {
	    var currency = format.currency || (0, _cldr.localeCurrency)(info);
	    var displays = (0, _cldr.currencyDisplays)(info, currency);
	    var isCurrency = format.style === "currency";
	    var number = value;
	    var negative = void 0;

	    for (var idx = 0; idx < displays.length; idx++) {
	        var display = displays[idx];
	        if (number.includes(display)) {
	            number = number.replace(display, "");
	            isCurrency = true;
	            break;
	        }
	    }

	    if (isCurrency) {
	        var patterns = info.numbers.currency.patterns;
	        if (patterns.length > 1) {
	            var parts = (patterns[1] || "").replace("$", "").split("n");
	            if (number.indexOf(parts[0]) > -1 && number.indexOf(parts[1]) > -1) {
	                number = number.replace(parts[0], "").replace(parts[1], "");
	                negative = true;
	            }
	        }
	    }

	    return {
	        number: number,
	        negative: negative
	    };
	}

	function parseNumber(value) {
	    var locale = arguments.length <= 1 || arguments[1] === undefined ? "en" : arguments[1];
	    var format = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

	    if (!value && value !== 0) {
	        return null;
	    }

	    if (typeof value === "number") {
	        return value;
	    }

	    var info = (0, _cldr.localeInfo)(locale);
	    var symbols = info.numbers.symbols;

	    var number = value.toString();
	    var negative = number.indexOf("-");
	    var isPercent = void 0;

	    if (exponentRegExp.test(number)) {
	        number = parseFloat(number.replace(symbols.decimal, "."));
	        if (isNaN(number)) {
	            number = null;
	        }
	        return number;
	    }

	    if (negative > 0) {
	        return null;
	    }

	    negative = negative > -1;

	    var _cleanCurrencyNumber = cleanCurrencyNumber(number, info, format);

	    var _cleanCurrencyNumber$ = _cleanCurrencyNumber.negative;
	    negative = _cleanCurrencyNumber$ === undefined ? negative : _cleanCurrencyNumber$;
	    number = _cleanCurrencyNumber.number;


	    if (format.style === "percent" || number.indexOf(symbols.percentSign) > -1) {
	        number = number.replace(symbols.percentSign, "");
	        isPercent = true;
	    }

	    number = number.replace("-", "").replace(nonBreakingSpaceRegExp, " ").split(symbols.group.replace(nonBreakingSpaceRegExp, " ")).join("").replace(symbols.decimal, ".");

	    number = parseFloat(number);

	    if (isNaN(number)) {
	        number = null;
	    } else if (negative) {
	        number *= -1;
	    }

	    if (number && isPercent) {
	        number /= 100;
	    }

	    return number;
	}

/***/ }

/******/ });