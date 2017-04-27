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

	module.exports = __webpack_require__(19);


/***/ },

/***/ 9:
/***/ function(module, exports) {

	module.exports = require("./info");

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = loadCalendarInfo;

	var _info = __webpack_require__(9);

	var predefinedDatePatterns = {
	    s: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
	    u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
	};
	var datePatterns = {
	    d: [["dateTimeFormats", "availableFormats", "yMd"]],
	    D: [["dateFormats", "full"]],
	    m: [["dateTimeFormats", "availableFormats", "MMMd"]],
	    M: [["dateTimeFormats", "availableFormats", "MMMMd"]],
	    y: [["dateTimeFormats", "availableFormats", "yMMM"]],
	    Y: [["dateTimeFormats", "availableFormats", "yMMMM"]],
	    F: [["dateFormats", "full"], ["timeFormats", "medium"]],
	    g: [["dateTimeFormats", "availableFormats", "yMd"], ["timeFormats", "short"]],
	    G: [["dateTimeFormats", "availableFormats", "yMd"], ["timeFormats", "medium"]],
	    t: [["timeFormats", "short"]],
	    T: [["timeFormats", "medium"]]
	};

	function toArray(obj) {
	    var result = [];
	    var names = Object.getOwnPropertyNames(obj);
	    for (var idx = 0; idx < names.length; idx++) {
	        var value = obj[names[idx]];
	        result.push(value);
	    }
	    return result;
	}

	function getCalendarNames(info, isObj) {
	    var result = {};
	    for (var formatType in info) {
	        var names = result[formatType] = {};
	        for (var format in info[formatType]) {
	            var formats = info[formatType][format];
	            names[format] = isObj ? formats : toArray(formats);
	        }
	    }
	    return result;
	}

	function getEraNames(eras) {
	    var result = {};
	    var format = result.format = {};
	    var eraNameMap = {
	        eraAbbr: "abbreviated",
	        eraNames: "wide",
	        eraNarrow: "narrow"
	    };

	    for (var eraFormatName in eras) {
	        var formatName = eraNameMap[eraFormatName];
	        format[formatName] = eras[eraFormatName];
	    }

	    return result;
	}

	function loadCalendarNames(locale, calendar) {
	    var localeCalendar = _info.cldr[locale].calendar;
	    localeCalendar.days = getCalendarNames(calendar.days);
	    localeCalendar.months = getCalendarNames(calendar.months);
	    localeCalendar.quarters = getCalendarNames(calendar.quarters);
	    localeCalendar.dayPeriods = getCalendarNames(calendar.dayPeriods, true);

	    localeCalendar.eras = getEraNames(calendar.eras);
	}

	function getPredefinedFormat(paths, calendar) {
	    var result = [];

	    for (var pathIdx = 0; pathIdx < paths.length; pathIdx++) {
	        var fields = paths[pathIdx];
	        var pattern = calendar;
	        for (var idx = 0; idx < fields.length; idx++) {
	            pattern = pattern[fields[idx]];
	        }
	        result.push(pattern);
	    }

	    return result.join(" ");
	}

	function loadCalendarPatterns(locale, calendar) {
	    var cldrCalendar = _info.cldr[locale].calendar;
	    var patterns = cldrCalendar.patterns = {};
	    for (var pattern in datePatterns) {
	        patterns[pattern] = getPredefinedFormat(datePatterns[pattern], calendar);
	    }

	    for (var _pattern in predefinedDatePatterns) {
	        patterns[_pattern] = predefinedDatePatterns[_pattern];
	    }

	    cldrCalendar.dateTimeFormats = calendar.dateTimeFormats;
	    cldrCalendar.timeFormats = calendar.timeFormats;
	    cldrCalendar.dateFormats = calendar.dateFormats;
	}

	function loadCalendarInfo(locale, info) {
	    var calendar = _info.cldr[locale].calendar = _info.cldr[locale].calendar || {};
	    for (var field in info) {
	        if (field === "timeZoneNames") {
	            calendar.gmtFormat = info[field].gmtFormat;
	            calendar.gmtZeroFormat = info[field].gmtZeroFormat;
	        } else if (field === "calendars" && info[field].gregorian) {
	            loadCalendarPatterns(locale, info[field].gregorian);
	            loadCalendarNames(locale, info[field].gregorian);
	        }
	    }
	}

/***/ }

/******/ });