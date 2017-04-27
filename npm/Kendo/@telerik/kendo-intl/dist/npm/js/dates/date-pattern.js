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

	module.exports = __webpack_require__(31);


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _PENALTIES;

	exports.default = datePattern;

	var _formatString = __webpack_require__(32);

	var _formatString2 = _interopRequireDefault(_formatString);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var REMOVAL_PENALTY = 120;
	var ADDITION_PENALTY = 20;
	var LENGHT_DELTA = [2, 1, 5, 3, 4];
	var LONG_LESS_PENALTY_DELTA = -2;
	var SHORT_LESS_PENALTY_DELTA = -1;
	var SHORT_MORE_PENALTY_DELTA = 1;
	var LONG_MORE_PENALTY_DELTA = 2;

	var PENALTIES = (_PENALTIES = {}, _defineProperty(_PENALTIES, LONG_LESS_PENALTY_DELTA, 8), _defineProperty(_PENALTIES, SHORT_LESS_PENALTY_DELTA, 6), _defineProperty(_PENALTIES, LONG_MORE_PENALTY_DELTA, 6), _defineProperty(_PENALTIES, SHORT_MORE_PENALTY_DELTA, 3), _PENALTIES);

	var VALUE_FORMAT_LENGTH = {
	    numeric: 1,
	    "2-digit": 2,
	    short: 3,
	    long: 4,
	    narrow: 5
	};

	var TIME_SPECIFIERS_REGEX = /[hHmsSzZoOvVxX]/;

	function getHourSpecifier(options) {
	    return options.hour12 ? "h" : "H";
	}

	var DATE_OPTIONS_MAP = [{
	    key: "era",
	    specifier: "G"
	}, {
	    key: "year",
	    specifier: "y"
	}, {
	    key: "month",
	    specifier: "M"
	}, {
	    key: "day",
	    specifier: "d"
	}, {
	    key: "weekday",
	    specifier: "E"
	}, {
	    key: "hour",
	    getSpecifier: getHourSpecifier
	}, {
	    key: "minute",
	    specifier: "m"
	}, {
	    key: "second",
	    specifier: "s"
	}, {
	    key: "timeZoneName",
	    specifier: "z"
	}];

	var specifiersRegex = {};
	var resolvedFormats = {};

	function getSpecifierRegex(specifier) {
	    if (!specifiersRegex[specifier]) {
	        specifiersRegex[specifier] = new RegExp(specifier + "+");
	    }
	    return specifiersRegex[specifier];
	}

	function skeletonSpecifiers(skeleton) {
	    var result = [];
	    var current = skeleton.charAt(0);
	    var specifier = current;
	    for (var idx = 1; idx < skeleton.length; idx++) {
	        var character = skeleton.charAt(idx);
	        if (character === specifier) {
	            current += character;
	        } else {
	            result.push(current);
	            current = specifier = character;
	        }
	    }

	    result.push(current);

	    return result;
	}

	function findBestMatch(specifiers, availableFormats) {
	    var specifiersLength = specifiers.length;
	    var maxScore = -Number.MAX_VALUE;
	    var bestMatches = void 0,
	        result = void 0;
	    for (var format in availableFormats) {
	        var matches = [];
	        var currentFormat = format.replace("v", "z");
	        var score = 0;
	        for (var idx = 0; idx < specifiersLength; idx++) {
	            var specifier = specifiers[idx];
	            var specifierRegex = getSpecifierRegex(specifier[0]);
	            var match = (specifierRegex.exec(currentFormat) || [])[0];

	            if (!match) {
	                score -= REMOVAL_PENALTY;
	            } else {
	                currentFormat = currentFormat.replace(match, "");
	                if (match.length !== specifier.length) {
	                    var delta = Math.max(Math.min(LENGHT_DELTA[match.length] - LENGHT_DELTA[specifier.length], 2), -2);
	                    score -= PENALTIES[delta];
	                }
	            }

	            matches.push(match);

	            if (score < maxScore) {
	                break;
	            }
	        }

	        if (currentFormat.length) {
	            score -= skeletonSpecifiers(currentFormat).length * ADDITION_PENALTY;
	        }

	        if (score > maxScore) {
	            maxScore = score;
	            bestMatches = matches;
	            result = availableFormats[format];
	        }
	    }

	    result = result.replace("v", "z");
	    //need to check for standalone specifiers if only one specifier
	    for (var _idx = 0; _idx < specifiersLength; _idx++) {
	        if (bestMatches[_idx] && bestMatches[_idx] !== specifiers[_idx]) {
	            result = result.replace(getSpecifierRegex(bestMatches[_idx][0]), specifiers[_idx]);
	        }
	    }

	    return result;
	}

	function cacheFormat(skeleton, format, locale) {
	    if (!resolvedFormats[locale]) {
	        resolvedFormats[locale] = {};
	    }
	    resolvedFormats[locale][skeleton] = format;
	}

	function skeletonFormat(skeleton, info) {
	    var availableFormats = info.calendar.dateTimeFormats.availableFormats;
	    if (availableFormats[skeleton]) {
	        return availableFormats[skeleton];
	    }
	    if (resolvedFormats[info.name] && resolvedFormats[info.name][skeleton]) {
	        return resolvedFormats[info.name][skeleton];
	    }
	    var timeStartIndex = skeleton.search(TIME_SPECIFIERS_REGEX);
	    var result = void 0;
	    if (timeStartIndex > 0) {
	        var dateSkeleton = skeleton.substr(0, timeStartIndex);
	        var timeSkeleton = skeleton.substr(timeStartIndex);

	        result = (0, _formatString2.default)(info.calendar.dateTimeFormats.short, //should be deterimed based on specifiers
	        availableFormats[timeSkeleton] || findBestMatch(skeletonSpecifiers(timeSkeleton), availableFormats), availableFormats[dateSkeleton] || findBestMatch(skeletonSpecifiers(dateSkeleton), availableFormats));
	    } else {
	        result = findBestMatch(skeletonSpecifiers(skeleton), availableFormats);
	    }

	    cacheFormat(skeleton, result, info.name);
	    return result;
	}

	function skeletonFromOptions(options) {
	    var result = [];
	    for (var idx = 0; idx < DATE_OPTIONS_MAP.length; idx++) {
	        var option = DATE_OPTIONS_MAP[idx];
	        var field = option.key;
	        var value = options[field];
	        if (value) {
	            var spcifier = option.specifier || option.getSpecifier(options);
	            result.push(spcifier.repeat(VALUE_FORMAT_LENGTH[value]));
	        }
	    }

	    return result.join("");
	}

	function datePattern(format, info) {
	    var calendar = info.calendar;
	    var result = void 0;
	    if (typeof format === "string") {
	        if (calendar.patterns[format]) {
	            result = calendar.patterns[format];
	        } else {
	            result = format;
	        }
	    } else if (format) {
	        var skeleton = format.skeleton;
	        if (!skeleton) {
	            if (format.datetime) {
	                result = (0, _formatString2.default)(calendar.dateTimeFormats[format.datetime], calendar.timeFormats[format.datetime], calendar.dateFormats[format.datetime]);
	            } else if (format.date) {
	                result = calendar.dateFormats[format.date];
	            } else if (format.time) {
	                result = calendar.timeFormats[format.time];
	            } else {
	                skeleton = skeletonFromOptions(format);
	            }
	        }

	        if (skeleton) {
	            result = skeletonFormat(skeleton, info);
	        }
	    }

	    if (!result) {
	        result = calendar.patterns.d;
	    }

	    return result;
	}

/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = require("../common/format-string");

/***/ }

/******/ });