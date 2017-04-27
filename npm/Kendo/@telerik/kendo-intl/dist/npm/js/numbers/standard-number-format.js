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

	module.exports = __webpack_require__(64);


/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = require("../cldr");

/***/ },

/***/ 37:
/***/ function(module, exports) {

	module.exports = require("../common/pad");

/***/ },

/***/ 43:
/***/ function(module, exports) {

	module.exports = require("../common/round");

/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports = require("./format-currency-symbol");

/***/ },

/***/ 57:
/***/ function(module, exports) {

	module.exports = require("./group-integer");

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = standardNumberFormat;

	var _formatCurrencySymbol = __webpack_require__(56);

	var _formatCurrencySymbol2 = _interopRequireDefault(_formatCurrencySymbol);

	var _groupInteger = __webpack_require__(57);

	var _groupInteger2 = _interopRequireDefault(_groupInteger);

	var _pad = __webpack_require__(37);

	var _pad2 = _interopRequireDefault(_pad);

	var _round = __webpack_require__(43);

	var _round2 = _interopRequireDefault(_round);

	var _cldr = __webpack_require__(34);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var DEFAULT_DECIMAL_ROUNDING = 3;
	var DEFAULT_PERCENT_ROUNDING = 0;

	var trailingZeroRegex = /0+$/;
	var DECIMAL_PLACEHOLDER = "n";
	var CURRENCY = "currency";
	var PERCENT = "percent";
	var EMPTY = "";

	function fractionOptions(options) {
	    var minimumFractionDigits = options.minimumFractionDigits;
	    var maximumFractionDigits = options.maximumFractionDigits;
	    var style = options.style;

	    var isCurrency = style === CURRENCY;
	    var currencyFractions = void 0;
	    if (isCurrency) {
	        currencyFractions = (0, _cldr.currencyFractionOptions)(options.currency);
	    }

	    if (minimumFractionDigits === undefined) {
	        minimumFractionDigits = isCurrency ? currencyFractions.minimumFractionDigits : 0;
	    }

	    if (maximumFractionDigits === undefined) {
	        if (style === PERCENT) {
	            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_PERCENT_ROUNDING);
	        } else if (isCurrency) {
	            maximumFractionDigits = Math.max(minimumFractionDigits, currencyFractions.maximumFractionDigits);
	        } else {
	            maximumFractionDigits = Math.max(minimumFractionDigits, DEFAULT_DECIMAL_ROUNDING);
	        }
	    }

	    return {
	        minimumFractionDigits: minimumFractionDigits,
	        maximumFractionDigits: maximumFractionDigits
	    };
	}

	function applyPattern(value, pattern, symbol) {
	    var result = EMPTY;
	    for (var idx = 0, length = pattern.length; idx < length; idx++) {
	        var ch = pattern.charAt(idx);

	        if (ch === DECIMAL_PLACEHOLDER) {
	            result += value;
	        } else if (ch === "$" || ch === "%") {
	            result += symbol;
	        } else {
	            result += ch;
	        }
	    }
	    return result;
	}

	function currencyUnitPattern(info, value) {
	    var currencyInfo = info.numbers.currency;
	    var pattern = value !== 1 ? currencyInfo["unitPattern-count-other"] : currencyInfo["unitPattern-count-one"];
	    if (value < 0) {
	        pattern = pattern.replace("n", "-n");
	    }

	    return pattern;
	}

	function standardNumberFormat(number, options, info) {
	    var style = options.style;

	    //return number in exponential format

	    if (style === "scientific") {
	        return options.minimumFractionDigits !== undefined ? number.toExponential(options.minimumFractionDigits) : number.toExponential();
	    }

	    var symbols = info.numbers.symbols;
	    var value = number;
	    var symbol = void 0;

	    if (style === CURRENCY) {
	        options.value = value;
	        symbol = (0, _formatCurrencySymbol2.default)(info, options);
	    }

	    if (style === PERCENT) {
	        value *= 100;
	        symbol = symbols.percentSign;
	    }

	    var _fractionOptions = fractionOptions(options);

	    var minimumFractionDigits = _fractionOptions.minimumFractionDigits;
	    var maximumFractionDigits = _fractionOptions.maximumFractionDigits;


	    value = (0, _round2.default)(value, maximumFractionDigits);

	    var negative = value < 0;

	    var parts = value.split(".");

	    var integer = parts[0];
	    var fraction = (0, _pad2.default)(parts[1] ? parts[1].replace(trailingZeroRegex, EMPTY) : EMPTY, minimumFractionDigits, true);

	    //exclude "-" if number is negative.
	    if (negative) {
	        integer = integer.substring(1);
	    }

	    if (options.minimumIntegerDigits) {
	        integer = (0, _pad2.default)(integer, options.minimumIntegerDigits);
	    }

	    var formattedValue = options.useGrouping !== false ? (0, _groupInteger2.default)(integer, 0, integer.length, options, info) : integer;

	    if (fraction) {
	        formattedValue += symbols.decimal + fraction;
	    }

	    var pattern = void 0;

	    if (style === CURRENCY && options.currencyDisplay === "name") {
	        pattern = currencyUnitPattern(info, number);
	    } else {
	        var patterns = options.patterns;
	        pattern = negative ? patterns[1] || "-" + patterns[0] : patterns[0];
	    }

	    if (pattern === DECIMAL_PLACEHOLDER && !negative) {
	        return formattedValue;
	    }

	    var result = applyPattern(formattedValue, pattern, symbol);

	    return result;
	}

/***/ }

/******/ });