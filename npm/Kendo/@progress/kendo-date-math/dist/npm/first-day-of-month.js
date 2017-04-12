"use strict";
/**
 * A function returning the first date of the month.
 *
 * @param date - The initial date.
 * @returns - The first date of the initial date month.
 *
 * @example
 * ```ts-no-run
 * firstDayOfMonth(new Date(2016, 0, 15)); // 2016-01-01
 * ```
 */
exports.firstDayOfMonth = function (date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
};
