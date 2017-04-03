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

	module.exports = __webpack_require__(55);


/***/ },

/***/ 43:
/***/ function(module, exports) {

	module.exports = require("../common/round");

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = customNumberFormat;

	var _formatCurrencySymbol = __webpack_require__(56);

	var _formatCurrencySymbol2 = _interopRequireDefault(_formatCurrencySymbol);

	var _groupInteger = __webpack_require__(57);

	var _groupInteger2 = _interopRequireDefault(_groupInteger);

	var _round = __webpack_require__(43);

	var _round2 = _interopRequireDefault(_round);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var CURRENCY_SYMBOL = "$";
	var PERCENT_SYMBOL = "%";
	var PLACEHOLDER = "??";
	var CURRENCY = "currency";
	var PERCENT = "percent";
	var POINT = ".";
	var COMMA = ",";
	var SHARP = "#";
	var ZERO = "0";
	var EMPTY = "";

	var literalRegExp = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g;
	var commaRegExp = /\,/g;

	function setFormatLiterals(formatOptions) {
	    var format = formatOptions.format;
	    if (format.indexOf("'") > -1 || format.indexOf("\"") > -1 || format.indexOf("\\") > -1) {
	        (function () {
	            var literals = formatOptions.literals = [];
	            formatOptions.format = format.replace(literalRegExp, function (match) {
	                var quoteChar = match.charAt(0).replace("\\", "");
	                var literal = match.slice(1).replace(quoteChar, "");

	                literals.push(literal);

	                return PLACEHOLDER;
	            });
	        })();
	    }
	}

	function roundNumber(formatOptions) {
	    var number = formatOptions.number;
	    var format = formatOptions.format;

	    var decimalIndex = format.indexOf(POINT);

	    if (decimalIndex !== -1) {
	        var zeroIndex = format.lastIndexOf(ZERO) - decimalIndex;
	        var sharpIndex = format.lastIndexOf(SHARP) - decimalIndex;
	        var hasZero = zeroIndex > -1;
	        var hasSharp = sharpIndex > -1;
	        var fraction = number.toString().split("e");

	        if (fraction[1]) {
	            fraction = (0, _round2.default)(number, Math.abs(fraction[1]));
	        } else {
	            fraction = fraction[0];
	        }
	        fraction = fraction.split(POINT)[1] || EMPTY;

	        var idx = fraction.length;

	        if (!hasZero && !hasSharp) {
	            formatOptions.format = format.substring(0, decimalIndex) + format.substring(decimalIndex + 1);
	            decimalIndex = -1;
	            idx = 0;
	        } else if (hasZero && zeroIndex > sharpIndex) {
	            idx = zeroIndex;
	        } else if (sharpIndex > zeroIndex) {
	            if (hasSharp && idx > sharpIndex) {
	                idx = sharpIndex;
	            } else if (hasZero && idx < zeroIndex) {
	                idx = zeroIndex;
	            }
	        }

	        if (idx > -1) {
	            number = (0, _round2.default)(number, idx);
	        }
	    } else {
	        number = (0, _round2.default)(number);
	    }

	    if (formatOptions.negative && number * -1 >= 0) {
	        formatOptions.negative = false;
	    }

	    formatOptions.number = number;
	    formatOptions.decimalIndex = decimalIndex;
	}

	function setValueSpecificFormat(formatOptions) {
	    var number = formatOptions.number;
	    var format = formatOptions.format;

	    format = format.split(";");
	    if (formatOptions.negative && format[1]) {
	        format = format[1];
	        formatOptions.hasNegativeFormat = true;
	    } else if (number === 0) {
	        format = format[2] || format[0];
	    } else {
	        format = format[0];
	    }

	    formatOptions.format = format;
	}

	function setStyleOptions(formatOptions, info) {
	    var format = formatOptions.format;

	    //multiply number if the format has percent
	    if (format.indexOf(PERCENT_SYMBOL) !== -1) {
	        formatOptions.style = PERCENT;
	        formatOptions.symbol = info.numbers.symbols.percentSign;
	        formatOptions.number *= 100;
	    }

	    if (format.indexOf(CURRENCY_SYMBOL) !== -1) {
	        formatOptions.style = CURRENCY;
	        formatOptions.symbol = (0, _formatCurrencySymbol2.default)(info);
	    }
	}

	function setGroupOptions(formatOptions) {
	    formatOptions.hasGroup = formatOptions.format.indexOf(COMMA) > -1;
	    if (formatOptions.hasGroup) {
	        formatOptions.format = formatOptions.format.replace(commaRegExp, EMPTY);
	    }
	}

	function placeholderIndex(index1, index2, start) {
	    var index = void 0;
	    if (index1 === -1 && index2 !== -1) {
	        index = index2;
	    } else if (index1 !== -1 && index2 === -1) {
	        index = index1;
	    } else {
	        index = start ? Math.min(index1, index2) : Math.max(index1, index2);
	    }
	    return index;
	}

	function setPlaceholderIndices(formatOptions) {
	    var format = formatOptions.format;
	    var sharpIndex = format.indexOf(SHARP);
	    var zeroIndex = format.indexOf(ZERO);

	    var start = placeholderIndex(sharpIndex, zeroIndex, true);

	    sharpIndex = format.lastIndexOf(SHARP);
	    zeroIndex = format.lastIndexOf(ZERO);

	    var end = placeholderIndex(sharpIndex, zeroIndex);

	    if (start === format.length) {
	        end = start;
	    }

	    formatOptions.start = start;
	    formatOptions.end = end;
	    formatOptions.lastZeroIndex = zeroIndex;
	}

	function replaceStyleSymbols(number, style, symbol) {
	    var result = number;
	    if (style === CURRENCY || style === PERCENT) {
	        result = EMPTY;
	        for (var idx = 0, length = number.length; idx < length; idx++) {
	            var ch = number.charAt(idx);
	            result += ch === CURRENCY_SYMBOL || ch === PERCENT_SYMBOL ? symbol : ch;
	        }
	    }
	    return result;
	}

	function replaceLiterals(number, literals) {
	    var result = number;
	    if (literals) {
	        var length = literals.length;
	        for (var idx = 0; idx < length; idx++) {
	            result = result.replace(PLACEHOLDER, literals[idx]);
	        }
	    }
	    return result;
	}

	function replacePlaceHolders(formatOptions, info) {
	    var start = formatOptions.start;
	    var end = formatOptions.end;
	    var negative = formatOptions.negative;
	    var format = formatOptions.format;
	    var decimalIndex = formatOptions.decimalIndex;
	    var lastZeroIndex = formatOptions.lastZeroIndex;
	    var hasNegativeFormat = formatOptions.hasNegativeFormat;
	    var hasGroup = formatOptions.hasGroup;

	    var number = formatOptions.number;
	    var value = number.toString().split(POINT);
	    var length = format.length;
	    var integer = value[0];
	    var fraction = value[1] || EMPTY;
	    var integerLength = integer.length;
	    var replacement = EMPTY;

	    number = format.substring(0, start);

	    if (negative && !hasNegativeFormat) {
	        number += "-";
	    }

	    for (var idx = start; idx < length; idx++) {
	        var ch = format.charAt(idx);

	        if (decimalIndex === -1) {
	            if (end - idx < integerLength) {

	                number += integer;
	                break;
	            }
	        } else {
	            if (lastZeroIndex !== -1 && lastZeroIndex < idx) {
	                replacement = EMPTY;
	            }

	            if (decimalIndex - idx <= integerLength && decimalIndex - idx > -1) {
	                number += integer;
	                idx = decimalIndex;
	            }

	            if (decimalIndex === idx) {
	                number += (fraction ? info.numbers.symbols.decimal : EMPTY) + fraction;
	                idx += end - decimalIndex + 1;
	                continue;
	            }
	        }

	        if (ch === ZERO) {
	            number += ch;
	            replacement = ch;
	        } else if (ch === SHARP) {
	            number += replacement;
	        }
	    }

	    if (hasGroup) {
	        number = (0, _groupInteger2.default)(number, start + (negative ? 1 : 0), Math.max(end, integerLength + start), info.numbers.decimal, info);
	    }

	    if (end >= start) {
	        number += format.substring(end + 1);
	    }

	    return number;
	}

	function applyCustomFormat(formatOptions, info) {
	    var number = formatOptions.number;
	    if (formatOptions.start !== -1) {
	        number = replacePlaceHolders(formatOptions, info);
	        number = replaceStyleSymbols(number, formatOptions.style, formatOptions.symbol);
	        number = replaceLiterals(number, formatOptions.literals);
	    }

	    return number;
	}

	function isConstantFormat(format) {
	    return format.indexOf(SHARP) === -1 && format.indexOf(ZERO) === -1;
	}

	function customNumberFormat(number, format, info) {
	    var formatOptions = {
	        negative: number < 0,
	        number: Math.abs(number),
	        format: format
	    };

	    setValueSpecificFormat(formatOptions);

	    if (isConstantFormat(formatOptions.format)) {
	        return formatOptions.format;
	    }

	    setFormatLiterals(formatOptions);
	    setStyleOptions(formatOptions, info);
	    setGroupOptions(formatOptions);
	    roundNumber(formatOptions);
	    setPlaceholderIndices(formatOptions);

	    return applyCustomFormat(formatOptions, info);
	}

/***/ },

/***/ 56:
/***/ function(module, exports) {

	module.exports = require("./format-currency-symbol");

/***/ },

/***/ 57:
/***/ function(module, exports) {

	module.exports = require("./group-integer");

/***/ }

/******/ });