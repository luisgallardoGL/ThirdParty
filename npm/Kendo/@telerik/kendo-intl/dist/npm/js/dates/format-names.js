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

	module.exports = __webpack_require__(39);


/***/ },

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = formatNames;

	var _dateFormatNames = __webpack_require__(40);

	var _dateFormatNames2 = _interopRequireDefault(_dateFormatNames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function dateNameType(formatLength) {
	    var nameType = void 0;
	    if (formatLength <= 3) {
	        nameType = "abbreviated";
	    } else if (formatLength === 4) {
	        nameType = "wide";
	    } else if (formatLength === 5) {
	        nameType = "narrow";
	    } else if (formatLength === 6) {
	        nameType = "short";
	    }

	    return nameType;
	}

	function formatNames(locale, type, formatLength, standAlone, lower) {
	    return (0, _dateFormatNames2.default)(locale, {
	        type: type,
	        nameType: dateNameType(formatLength),
	        standAlone: standAlone,
	        lower: lower
	    });
	}

/***/ },

/***/ 40:
/***/ function(module, exports) {

	module.exports = require("../cldr/date-format-names");

/***/ }

/******/ });