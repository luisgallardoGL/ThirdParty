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

	module.exports = __webpack_require__(33);


/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = require("../common/format-string");

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = formatDate;

	var _cldr = __webpack_require__(34);

	var _formatString = __webpack_require__(32);

	var _formatString2 = _interopRequireDefault(_formatString);

	var _datePattern = __webpack_require__(35);

	var _datePattern2 = _interopRequireDefault(_datePattern);

	var _formatNames = __webpack_require__(36);

	var _formatNames2 = _interopRequireDefault(_formatNames);

	var _pad = __webpack_require__(37);

	var _pad2 = _interopRequireDefault(_pad);

	var _isDate = __webpack_require__(38);

	var _isDate2 = _interopRequireDefault(_isDate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var dateFormatRegExp = /d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g;

	function formatDayOfWeekIndex(day, formatLength, localeInfo) {
	    var firstDayIndex = (0, _cldr.firstDay)(localeInfo);
	    var dayIndex = void 0;
	    if (day < firstDayIndex) {
	        dayIndex = 7 - firstDayIndex + day;
	    } else {
	        dayIndex = day - firstDayIndex;
	    }

	    return dayIndex + 1;
	}

	function formatMonth(month, formatLength, info, standAlone) {
	    if (formatLength <= 2) {
	        return (0, _pad2.default)(month + 1, formatLength);
	    }
	    return (0, _formatNames2.default)(info, "months", formatLength, standAlone)[month];
	}

	function formatQuarter(date, formatLength, info, standAlone) {
	    var quarter = Math.floor(date.getMonth() / 3);
	    if (formatLength < 3) {
	        return quarter + 1;
	    }

	    return (0, _formatNames2.default)(info, "quarters", formatLength, standAlone)[quarter];
	}

	function formatTimeZone(date, info, options) {
	    var shortHours = options.shortHours;
	    var optionalMinutes = options.optionalMinutes;
	    var separator = options.separator;
	    var localizedName = options.localizedName;
	    var zZeroOffset = options.zZeroOffset;

	    var offset = date.getTimezoneOffset() / 60;
	    if (offset === 0 && zZeroOffset) {
	        return "Z";
	    }
	    var sign = offset <= 0 ? "+" : "-";
	    var hoursMinutes = Math.abs(offset).toString().split(".");
	    var minutes = hoursMinutes[1] || 0;
	    var result = sign + (shortHours ? hoursMinutes[0] : (0, _pad2.default)(hoursMinutes[0], 2));
	    if (minutes || !optionalMinutes) {
	        result += (separator ? ":" : "") + (0, _pad2.default)(minutes, 2);
	    }

	    if (localizedName) {
	        var localizedFormat = offset === 0 ? info.calendar.gmtZeroFormat : info.calendar.gmtFormat;
	        result = (0, _formatString2.default)(localizedFormat, result);
	    }

	    return result;
	}
	function formatDayOfWeek(date, formatLength, info, standAlone) {
	    var result = void 0;
	    if (formatLength < 3) {
	        result = formatDayOfWeekIndex(date.getDay(), formatLength, info);
	    } else {
	        result = (0, _formatNames2.default)(info, "days", formatLength, standAlone)[date.getDay()];
	    }
	    return result;
	}

	var formatters = {};

	formatters.d = function (date, formatLength) {
	    return (0, _pad2.default)(date.getDate(), formatLength);
	};

	formatters.E = function (date, formatLength, info) {
	    return (0, _formatNames2.default)(info, "days", formatLength)[date.getDay()];
	};

	formatters.M = function (date, formatLength, info) {
	    return formatMonth(date.getMonth(), formatLength, info, false);
	};

	formatters.L = function (date, formatLength, info) {
	    return formatMonth(date.getMonth(), formatLength, info, true);
	};

	formatters.y = function (date, formatLength) {
	    var year = date.getFullYear();
	    if (formatLength === 2) {
	        year = year % 100;
	    }
	    return (0, _pad2.default)(year, formatLength);
	};

	formatters.h = function (date, formatLength) {
	    var hours = date.getHours() % 12 || 12;
	    return (0, _pad2.default)(hours, formatLength);
	};

	formatters.H = function (date, formatLength) {
	    return (0, _pad2.default)(date.getHours(), formatLength);
	};

	formatters.m = function (date, formatLength) {
	    return (0, _pad2.default)(date.getMinutes(), formatLength);
	};

	formatters.s = function (date, formatLength) {
	    return (0, _pad2.default)(date.getSeconds(), formatLength);
	};

	formatters.S = function (date, formatLength) {
	    var milliseconds = date.getMilliseconds();
	    var result = void 0;
	    if (milliseconds !== 0) {
	        result = String(date.getMilliseconds() / 1000).split(".")[1].substr(0, formatLength);
	    } else {
	        result = (0, _pad2.default)("", formatLength);
	    }
	    return result;
	};

	formatters.a = function (date, formatLength, info) {
	    return (0, _formatNames2.default)(info, "dayPeriods", formatLength)[date.getHours() < 12 ? "am" : "pm"];
	};

	formatters.z = function (date, formatLength, info) {
	    return formatTimeZone(date, info, {
	        shortHours: formatLength < 4,
	        optionalMinutes: formatLength < 4,
	        separator: true,
	        localizedName: true
	    });
	};

	formatters.Z = function (date, formatLength, info) {
	    return formatTimeZone(date, info, {
	        separator: formatLength > 3,
	        localizedName: formatLength === 4,
	        zZeroOffset: formatLength === 5
	    });
	};

	formatters.x = function (date, formatLength, info) {
	    return formatTimeZone(date, info, {
	        optionalMinutes: formatLength === 1,
	        separator: formatLength === 3 || formatLength === 5
	    });
	};

	formatters.X = function (date, formatLength, info) {
	    return formatTimeZone(date, info, {
	        optionalMinutes: formatLength === 1,
	        separator: formatLength === 3 || formatLength === 5,
	        zZeroOffset: true
	    });
	};

	formatters.G = function (date, formatLength, info) {
	    var era = date.getFullYear() >= 0 ? 1 : 0;
	    return (0, _formatNames2.default)(info, "eras", formatLength)[era];
	};

	formatters.e = formatDayOfWeek;

	formatters.c = function (date, formatLength, info) {
	    return formatDayOfWeek(date, formatLength, info, true);
	};

	formatters.q = function (date, formatLength, info) {
	    return formatQuarter(date, formatLength, info, true);
	};

	formatters.Q = formatQuarter;

	function formatDate(date, format) {
	    var locale = arguments.length <= 2 || arguments[2] === undefined ? "en" : arguments[2];

	    if (!(0, _isDate2.default)(date)) {
	        return date;
	    }

	    var info = (0, _cldr.localeInfo)(locale);
	    var pattern = (0, _datePattern2.default)(format, info);

	    return pattern.replace(dateFormatRegExp, function (match) {
	        var formatLength = match.length;
	        var result = void 0;

	        if (match.includes("'") || match.includes("\"")) {
	            result = match.slice(1, formatLength - 1);
	        } else {
	            result = formatters[match[0]](date, formatLength, info);
	        }

	        return result;
	    });
	}

/***/ },

/***/ 34:
/***/ function(module, exports) {

	module.exports = require("../cldr");

/***/ },

/***/ 35:
/***/ function(module, exports) {

	module.exports = require("./date-pattern");

/***/ },

/***/ 36:
/***/ function(module, exports) {

	module.exports = require("./format-names");

/***/ },

/***/ 37:
/***/ function(module, exports) {

	module.exports = require("../common/pad");

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = require("../common/is-date");

/***/ }

/******/ });