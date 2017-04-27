(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);


/***/ },

/***/ 2:
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },

/***/ 5:
/***/ function(module, exports) {

	module.exports = require("./intl.service");

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var intl_service_1 = __webpack_require__(5);
	/**
	 * Formats a number value to a string based on the requested format.
	 * This pipe uses the `IntlService`.
	 * @see IntlService.
	 *
	 * @example <caption>Basic Usage</caption>
	 * ```ng-template-no-run
	 *   <ul>
	 *     <li>{{decimal | kendoNumber:'c' }}</li>
	 *     <li>{{stringNumber | kendoNumber:'p' }}</li>
	 *     <li>{{int | kendoNumber:'##.00' }}</li>
	 *  </ul>
	 * ```
	 */
	var NumberPipe = (function () {
	    function NumberPipe(intlService) {
	        this.intlService = intlService;
	    }
	    NumberPipe.prototype.transform = function (value, format) {
	        if (typeof value === 'string') {
	            value = this.intlService.parseNumber(value);
	        }
	        if (value) {
	            return this.intlService.formatNumber(value, format);
	        }
	        return value;
	    };
	    NumberPipe = __decorate([
	        core_1.Pipe({
	            name: 'kendoNumber'
	        }), 
	        __metadata('design:paramtypes', [intl_service_1.IntlService])
	    ], NumberPipe);
	    return NumberPipe;
	}());
	exports.NumberPipe = NumberPipe;


/***/ }

/******/ })));
//# sourceMappingURL=number.pipe.js.map