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

	module.exports = __webpack_require__(62);


/***/ },

/***/ 62:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = groupInteger;
	function groupInteger(number, start, end, options, info) {
	    var symbols = info.numbers.symbols;
	    var decimalIndex = number.indexOf(symbols.decimal);
	    var groupSizes = options.groupSize.slice();
	    var groupSize = groupSizes.shift();

	    var integerEnd = decimalIndex !== -1 ? decimalIndex : end + 1;

	    var integer = number.substring(start, integerEnd);
	    var result = number;
	    var integerLength = integer.length;

	    if (integerLength >= groupSize) {
	        var idx = integerLength;
	        var parts = [];

	        while (idx > -1) {
	            var value = integer.substring(idx - groupSize, idx);
	            if (value) {
	                parts.push(value);
	            }
	            idx -= groupSize;
	            var newGroupSize = groupSizes.shift();
	            groupSize = newGroupSize !== undefined ? newGroupSize : groupSize;

	            if (groupSize === 0) {
	                parts.push(integer.substring(0, idx));
	                break;
	            }
	        }

	        integer = parts.reverse().join(symbols.group);
	        result = number.substring(0, start) + integer + number.substring(integerEnd);
	    }

	    return result;
	}

/***/ }

/******/ });