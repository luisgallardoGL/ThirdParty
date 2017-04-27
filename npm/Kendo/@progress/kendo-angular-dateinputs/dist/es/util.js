import { addMonths, firstDayOfMonth, lastDayOfMonth } from '@progress/kendo-date-math';
var range = function (start, end) {
    var result = [];
    for (var i = start; i < end; i++) {
        result.push(i);
    }
    return result;
};
var isInDatesArray = function (date, dates) {
    if (dates === void 0) { dates = []; }
    return (!!dates.length && firstDayOfMonth(dates[0]) <= date && date <= lastDayOfMonth(dates[dates.length - 1]));
};
var isInRange = function (candidate, min, max) { return (!candidate || !((min && min > candidate) || (max && max < candidate))); };
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
// tslint:disable:no-empty
var noop = function (_) { };
var isDocumentAvailable = function () {
    return typeof document !== 'undefined';
};
var cellContextToString = function (ctx) { return (ctx ? "" + ctx.isFocused + ctx.isSelected + ctx.isWeekend + ctx.id : 'null'); };
var stringifyClassObject = function (classes) {
    var pushToAcc = function (acc, cls) { return classes[cls] ? acc.concat(cls) : acc; };
    return Object.keys(classes).reduce(pushToAcc, []).join(' ');
};
var generateDates = function (start, count) { return (range(0, count).map(function (i) { return addMonths(start, i); })); };
var monthsDistance = function (d1, d2) { return (((d1.getFullYear() - d2.getFullYear())) * 12 + (d1.getMonth() - d2.getMonth())); };
var shiftWeekNames = function (names, offset) { return (names.slice(offset).concat(names.slice(0, offset))); };
export { cellContextToString, dateInRange, generateDates, guid, isDocumentAvailable, isInDatesArray, isInRange, monthsDistance, range, noop, stringifyClassObject, shiftWeekNames };
