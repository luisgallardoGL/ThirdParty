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

	module.exports = __webpack_require__(11);


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("./info");

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = dateFormatNames;

	var _info = __webpack_require__(9);

	function lowerArray(arr) {
	    var result = [];
	    for (var idx = 0; idx < arr.length; idx++) {
	        result.push(arr[idx].toLowerCase());
	    }
	    return result;
	}

	function lowerObject(obj) {
	    var result = {};
	    for (var field in obj) {
	        result[field] = obj[field].toLowerCase();
	    }
	    return result;
	}

	function cloneLower(obj) {
	    var result = Array.isArray(obj) ? lowerArray(obj) : lowerObject(obj);
	    return result;
	}

	function dateFormatNames(locale, options) {
	    var type = options.type;
	    var nameType = options.nameType;
	    var standAlone = options.standAlone;
	    var lower = options.lower;

	    var info = (0, _info.getLocaleInfo)(locale);
	    var formatType = standAlone ? "stand-alone" : "format";
	    var lowerNameType = (lower ? "lower-" : "") + nameType;
	    var formatNames = info.calendar[type][formatType];
	    var result = formatNames[lowerNameType];
	    if (!result && lower) {
	        result = formatNames[lowerNameType] = cloneLower(formatNames[nameType]);
	    }
	    return result;
	}

/***/ }

/******/ });