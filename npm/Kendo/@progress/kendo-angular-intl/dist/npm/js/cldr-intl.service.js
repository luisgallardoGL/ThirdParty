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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
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
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var kendo_intl_1 = __webpack_require__(3);
	var kendo_intl_2 = __webpack_require__(3);
	var kendo_intl_3 = __webpack_require__(3);
	/**
	 * The Internationalization service implemented by using
	 * the CLDR Database via the @telerik/kendo-intl package.
	 */
	var CldrIntlService = (function () {
	    /**
	     * Creates a new instance of the service with the ID of the specified locale.
	     *
	     * Note that the parts of the locale ID can be separated by either `_` (underscore)
	     * or `-` (dash).
	     */
	    function CldrIntlService(localeId) {
	        this.localeId = localeId;
	        // Angular locales use underscore, e.g. en_US
	        // while IETF BCP-47 specifies a dash.
	        // https://tools.ietf.org/html/bcp47
	        this.localeId = this.localeId.replace(/_/g, '-');
	    }
	    /**
	     * Formats a string with placeholders such as
	     * `Total amount {0:c}`.
	     */
	    CldrIntlService.prototype.format = function (format) {
	        var values = [];
	        for (var _i = 1; _i < arguments.length; _i++) {
	            values[_i - 1] = arguments[_i];
	        }
	        return kendo_intl_1.format(format, values, this.localeId);
	    };
	    /**
	     * Converts an object to a string based on the specified format.
	     */
	    CldrIntlService.prototype.toString = function (value, format) {
	        return kendo_intl_1.toString(value, format, this.localeId);
	    };
	    /**
	     * Converts a `Date` object to a string based on the specified format.
	     * If no format is provided, the default short date format is used.
	     */
	    CldrIntlService.prototype.formatDate = function (value, format) {
	        return kendo_intl_2.formatDate(value, format, this.localeId);
	    };
	    /**
	     * Converts a string to a `Date` object based on the specified format.
	     */
	    CldrIntlService.prototype.parseDate = function (value, format) {
	        return kendo_intl_2.parseDate(value, format, this.localeId);
	    };
	    /**
	     * Converts a string to a `Number`.
	     */
	    CldrIntlService.prototype.parseNumber = function (value, format) {
	        return kendo_intl_3.parseNumber(value, this.localeId, format);
	    };
	    /**
	     * Converts a `Number` to a string based on the specified format.
	     */
	    CldrIntlService.prototype.formatNumber = function (value, format) {
	        return kendo_intl_3.formatNumber(value, format, this.localeId);
	    };
	    /**
	     * Returns the day names from the current locale based on the option.
	     */
	    CldrIntlService.prototype.dateFormatNames = function (options) {
	        return kendo_intl_2.dateFormatNames(this.localeId, options);
	    };
	    /**
	     * Returns the first day index starting from Sunday.
	     */
	    CldrIntlService.prototype.firstDay = function () {
	        return kendo_intl_2.firstDay(this.localeId);
	    };
	    CldrIntlService = __decorate([
	        core_1.Injectable(),
	        __param(0, core_1.Inject(core_1.LOCALE_ID)), 
	        __metadata('design:paramtypes', [String])
	    ], CldrIntlService);
	    return CldrIntlService;
	}());
	exports.CldrIntlService = CldrIntlService;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("@angular/core");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("@telerik/kendo-intl");

/***/ }
/******/ ])));
//# sourceMappingURL=cldr-intl.service.js.map