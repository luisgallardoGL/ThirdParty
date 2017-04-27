/**
 * @hidden
 */
export var createPatternValidator = function (pattern) {
    return function (c) {
        var err = {
            patternError: {
                pattern: pattern,
                value: c.value
            }
        };
        return (new RegExp(pattern).test(c.value) ? null : err);
    };
};
