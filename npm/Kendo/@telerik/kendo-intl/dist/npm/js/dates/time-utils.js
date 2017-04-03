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

	module.exports = __webpack_require__(44);


/***/ },

/***/ 44:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.convertTimeZone = convertTimeZone;
	exports.adjustDST = adjustDST;
	function convertTimeZone(date, fromOffset, toOffset) {
	    var fromLocalOffset = date.getTimezoneOffset();

	    var offsetDate = new Date(date.getTime() + (fromOffset - toOffset) * 60000);

	    var toLocalOffset = offsetDate.getTimezoneOffset();

	    return new Date(offsetDate.getTime() + (toLocalOffset - fromLocalOffset) * 60000);
	}

	function adjustDST(date, hours) {
	    if (!hours && date.getHours() === 23) {
	        date.setHours(date.getHours() + 2);
	    }
	}

/***/ }

/******/ });