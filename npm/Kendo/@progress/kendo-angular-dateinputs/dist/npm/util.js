"use strict";
var kendo_date_math_1 = require('@progress/kendo-date-math');
var range = function (start, end) {
    var result = [];
    for (var i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};
exports.range = range;
var isInDatesArray = function (date, dates) {
    if (dates === void 0) { dates = []; }
    return (!!dates.length && kendo_date_math_1.firstDayOfMonth(dates[0]) <= date && date <= kendo_date_math_1.lastDayOfMonth(dates[dates.length - 1]));
};
exports.isInDatesArray = isInDatesArray;
var isInRange = function (candidate, min, max) { return (!candidate || !((min && min > candidate) || (max && max < candidate))); };
exports.isInRange = isInRange;
var dateInRange = function (candidate, min, max) {
    if (!candidate) {
        return candidate;
    }
    if (min && candidate < min) {
        return new Date(min);
    }
    if (max && candidate > max) {
        return new Date(max);
    }
    return candidate;
};
exports.dateInRange = dateInRange;
/* tslint:disable:no-bitwise */
var guid = function () {
    var id = "", random;
    for (var i = 0; i < 32; i++) {
        random = Math.random() * 16 | 0;
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            id += "-";
        }
        id += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return id;
};
exports.guid = guid;
// tslint:disable:no-empty
var noop = function (_) { };
exports.noop = noop;
var isDocumentAvailable = function () {
    return typeof document !== 'undefined';
};
exports.isDocumentAvailable = isDocumentAvailable;
var cellContextToString = function (ctx) { return (ctx ? "" + ctx.isFocused + ctx.isSelected + ctx.isWeekend + ctx.id : 'null'); };
exports.cellContextToString = cellContextToString;
var stringifyClassObject = function (classes) {
    var pushToAcc = function (acc, cls) { return classes[cls] ? acc.concat(cls) : acc; };
    return Object.keys(classes).reduce(pushToAcc, []).join(' ');
};
exports.stringifyClassObject = stringifyClassObject;
var generateDates = function (start, count) { return (range(0, count).map(function (i) { return kendo_date_math_1.addMonths(start, i); })); };
exports.generateDates = generateDates;
var monthsDistance = function (d1, d2) { return (((d1.getFullYear() - d2.getFullYear())) * 12 + (d1.getMonth() - d2.getMonth())); };
exports.monthsDistance = monthsDistance;
var shiftWeekNames = function (names, offset) { return (names.slice(offset).concat(names.slice(0, offset))); };
exports.shiftWeekNames = shiftWeekNames;
