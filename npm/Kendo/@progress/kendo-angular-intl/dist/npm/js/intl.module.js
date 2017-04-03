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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	module.exports = require("./intl.service");

/***/ },
/* 6 */
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
	var date_pipe_1 = __webpack_require__(7);
	var number_pipe_1 = __webpack_require__(8);
	var intl_service_1 = __webpack_require__(5);
	var cldr_intl_service_1 = __webpack_require__(9);
	var pipes = [
	    date_pipe_1.DatePipe,
	    number_pipe_1.NumberPipe
	];
	/**
	 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
	 * definition for the Intl services.
	 */
	var IntlModule = (function () {
	    function IntlModule() {
	    }
	    IntlModule = __decorate([
	        core_1.NgModule({
	            declarations: [pipes],
	            exports: [pipes],
	            providers: [
	                { provide: intl_service_1.IntlService, useClass: cldr_intl_service_1.CldrIntlService }
	            ]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], IntlModule);
	    return IntlModule;
	}());
	exports.IntlModule = IntlModule;


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("./date.pipe");

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("./number.pipe");

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = require("./cldr-intl.service");

/***/ }
/******/ ])));
//# sourceMappingURL=intl.module.js.map