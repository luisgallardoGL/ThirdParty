"use strict";
var add_days_1 = require('./add-days');
/**
 * A function returning the last date of the month.
 *
 * @param date - The initial date.
 * @returns - The last date of the initial date month.
 *
 * @example
 * ```ts-no-run
 * lastDayOfMonth(new Date(2016, 0, 15)); // 2016-01-31
 * ```
 */
exports.lastDayOfMonth = function (date) {
    var newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    return add_days_1.addDays(newDate, -1);
};
