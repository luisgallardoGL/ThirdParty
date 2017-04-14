/**
 * A function that compares 2 dates. The comparison also includes the time portion.
 *
 * @param candidate - The candidate date.
 * @param expected - The expected date.
 * @returns - A Boolean value indicating whether the values are equal.
 *
 * @example
 * ```ts-no-run
 * isEqual(new Date(2016, 0, 1), new Date(2016, 0, 1)); // true
 * isEqual(new Date(2016, 0, 1), new Date(2016, 0, 2)); // false
 * isEqual(new Date(2016, 0, 1, 10), new Date(2016, 0, 1, 20)); // false
 * ```
 */
export var isEqual = function (candidate, expected) {
    if (!candidate && !expected) {
        return true;
    }
    return candidate && expected && candidate.getTime() === expected.getTime();
};
