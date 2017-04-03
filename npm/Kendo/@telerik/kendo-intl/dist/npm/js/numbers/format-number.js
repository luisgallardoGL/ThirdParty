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

	module.exports = __webpack_require__(59);


/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = require("../cldr");

/***/ },

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = formatNumber;

	var _cldr = __webpack_require__(34);

	var _standardNumberFormat = __webpack_require__(60);

	var _standardNumberFormat2 = _interopRequireDefault(_standardNumberFormat);

	var _customNumberFormat = __webpack_require__(61);

	var _customNumberFormat2 = _interopRequireDefault(_customNumberFormat);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var standardFormatRegExp = /^(n|c|p|e)(\d*)$/i;

	function standardFormatOptions(format) {
	    var formatAndPrecision = standardFormatRegExp.exec(format);

	    if (formatAndPrecision) {
	        var options = {
	            style: "decimal"
	        };

	        var style = formatAndPrecision[1].toLowerCase();

	        if (style === "c") {
	            options.style = "currency";
	        }

	        if (style === "p") {
	            options.style = "percent";
	        }

	        if (style === "e") {
	            options.style = "scientific";
	        }

	        if (formatAndPrecision[2]) {
	            options.minimumFractionDigits = options.maximumFractionDigits = parseInt(formatAndPrecision[2], 10);
	        }

	        return options;
	    }
	}

	function getFormatOptions(format) {
	    var formatOptions = void 0;
	    if (typeof format === "string") {
	        formatOptions = standardFormatOptions(format);
	    } else {
	        formatOptions = format;
	    }

	    return formatOptions;
	}

	function formatNumber(number) {
	    var format = arguments.length <= 1 || arguments[1] === undefined ? "n" : arguments[1];
	    var locale = arguments.length <= 2 || arguments[2] === undefined ? "en" : arguments[2];

	    if (number === undefined) {
	        return "";
	    }

	    if (!isFinite(number)) {
	        return number;
	    }

	    var info = (0, _cldr.localeInfo)(locale);
	    var formatOptions = getFormatOptions(format);

	    var result = void 0;
	    if (formatOptions) {
	        var style = (formatOptions || {}).style || "decimal";
	        result = (0, _standardNumberFormat2.default)(number, Object.assign({}, info.numbers[style], formatOptions), info);
	    } else {
	        result = (0, _customNumberFormat2.default)(number, format, info);
	    }

	    return result;
	}

/***/ },

/***/ 60:
/***/ function(module, exports) {

	module.exports = require("./standard-number-format");

/***/ },

/***/ 61:
/***/ function(module, exports) {

	module.exports = require("./custom-number-format");

/***/ }

/******/ });