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

	module.exports = __webpack_require__(23);


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("./info");

/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = localeTerritory;

	var _info = __webpack_require__(9);

	function territoryFromName(name) {
	    var parts = name.split("-");
	    var length = parts.length;

	    if (length > 1) {
	        var territory = parts[length - 1];
	        return territory.toUpperCase();
	    }
	}

	function localeTerritory(info) {
	    if (info.territory) {
	        return info.territory;
	    }

	    var likelySubtags = _info.cldr.supplemental.likelySubtags;
	    var name = info.name;
	    var territory = void 0;

	    if (info.identity && info.identity.territory) {
	        territory = info.identity.territory;
	    } else if (likelySubtags && likelySubtags[name]) {
	        territory = territoryFromName(likelySubtags[name]);
	    } else {
	        territory = territoryFromName(name);
	    }
	    info.territory = territory;

	    return territory;
	}

/***/ }

/******/ });