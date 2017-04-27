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

	module.exports = __webpack_require__(8);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.currencyDisplays = currencyDisplays;
	exports.currencyDisplay = currencyDisplay;
	exports.currencyFractionOptions = currencyFractionOptions;
	exports.territoryCurrencyCode = territoryCurrencyCode;
	exports.localeCurrency = localeCurrency;

	var _info = __webpack_require__(9);

	var _territory = __webpack_require__(10);

	var _territory2 = _interopRequireDefault(_territory);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULT_CURRENCY_FRACTIONS = 2;
	var SYMBOL = "symbol";

	function getCurrencyInfo(locale, currency) {
	    var info = (0, _info.getLocaleInfo)(locale);
	    var currencies = info.numbers.currencies;
	    if (!currencies) {
	        throw new Error("Cannot determine currency information. Please load the locale currencies data.");
	    }

	    return currencies[currency];
	}

	function lengthComparer(a, b) {
	    return b.length - a.length;
	}

	function currencyDisplays(locale, currency) {
	    var currencyInfo = getCurrencyInfo(locale, currency);
	    if (!currencyInfo.displays) {
	        var displays = [currency];
	        for (var field in currencyInfo) {
	            displays.push(currencyInfo[field]);
	        }
	        displays.sort(lengthComparer);
	        currencyInfo.displays = displays;
	    }

	    return currencyInfo.displays;
	}

	function currencyDisplay(locale, options) {
	    var value = options.value;
	    var currency = options.currency;
	    var _options$currencyDisp = options.currencyDisplay;
	    var currencyDisplay = _options$currencyDisp === undefined ? SYMBOL : _options$currencyDisp;


	    if (currencyDisplay === "code") {
	        return currency;
	    }

	    var currencyInfo = getCurrencyInfo(locale, currency);
	    var result = void 0;

	    if (currencyDisplay === SYMBOL) {
	        result = currencyInfo["symbol-alt-narrow"] || currencyInfo[SYMBOL];
	    } else {
	        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === undefined || value !== 1) {
	            result = currencyInfo["displayName-count-other"];
	        } else {
	            result = currencyInfo["displayName-count-one"];
	        }
	    }

	    return result;
	}

	function currencyFractionOptions(code) {
	    var minimumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;
	    var maximumFractionDigits = DEFAULT_CURRENCY_FRACTIONS;

	    var fractions = ((_info.cldr.supplemental.currencyData || {}).fractions || {})[code];

	    if (fractions && fractions._digits) {
	        maximumFractionDigits = minimumFractionDigits = parseInt(fractions._digits, 10);
	    }

	    return {
	        minimumFractionDigits: minimumFractionDigits,
	        maximumFractionDigits: maximumFractionDigits
	    };
	}

	function territoryCurrencyCode(territory) {
	    var currencyData = _info.cldr.supplemental.currencyData;
	    if (!currencyData) {
	        throw new Error("Cannot determine currency. Please load the supplemental currencyData.");
	    }

	    var regionCurrencies = currencyData.region[territory];
	    if (!regionCurrencies) {
	        throw new Error("No currency data for region " + territory);
	    }
	    var currencyCode = Object.keys(regionCurrencies[regionCurrencies.length - 1])[0];

	    return currencyCode;
	}

	function localeCurrency(locale) {
	    var info = (0, _info.getLocaleInfo)(locale);
	    var numbers = info.numbers;
	    if (!numbers.localeCurrency) {
	        numbers.localeCurrency = territoryCurrencyCode((0, _territory2.default)(info));
	    }
	    return numbers.localeCurrency;
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("./info");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("./territory");

/***/ }
/******/ ]);