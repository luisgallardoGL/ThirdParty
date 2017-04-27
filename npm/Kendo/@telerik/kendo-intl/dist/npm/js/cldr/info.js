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

	module.exports = __webpack_require__(14);


/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cldr = undefined;
	exports.getLocaleInfo = getLocaleInfo;
	exports.localeInfo = localeInfo;

	var _defaultData = __webpack_require__(15);

	var _defaultData2 = _interopRequireDefault(_defaultData);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function availableLocaleInfo(fullName, suffixes) {
	    var parts = fullName.split("-");
	    var language = parts[0];
	    var script = parts[1];
	    var territory = parts[2];

	    return cldr[fullName] || suffixes.indexOf(territory) !== -1 && cldr[language + "-" + territory] || suffixes.indexOf(script) !== -1 && cldr[language + "-" + script] || cldr[language];
	}

	function localeFullName(language, suffixes) {
	    var likelySubtags = cldr.supplemental.likelySubtags;

	    for (var idx = 0; idx < suffixes.length; idx++) {
	        var name = likelySubtags[language + "-" + suffixes[idx]];
	        if (name) {
	            return name;
	        }
	    }

	    if (likelySubtags[language]) {
	        return likelySubtags[language];
	    }
	}

	var cldr = exports.cldr = _defaultData2.default;

	function getLocaleInfo(locale) {
	    var info = void 0;
	    if (typeof locale === "string") {
	        info = localeInfo(locale);
	    } else {
	        info = locale;
	    }
	    return info;
	}

	function localeInfo(locale) {
	    if (cldr[locale]) {
	        return cldr[locale];
	    }

	    var likelySubtags = cldr.supplemental.likelySubtags;
	    if (likelySubtags) {
	        var parts = locale.split("-");
	        var language = parts[0];
	        var suffixes = parts.slice(1);
	        var fullName = localeFullName(language, suffixes);
	        var info = fullName ? availableLocaleInfo(fullName, suffixes) : null;
	        if (info) {
	            return info;
	        }
	    }

	    throw new Error("Missing locale info for: " + locale);
	}

/***/ },

/***/ 15:
/***/ function(module, exports) {

	module.exports = require("./default-data");

/***/ }

/******/ });