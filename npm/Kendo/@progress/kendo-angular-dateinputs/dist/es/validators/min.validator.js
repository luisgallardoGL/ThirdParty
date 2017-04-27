/**
 * @hidden
 */
export var minValidator = function (minValue) {
    return function (control) {
        var err = {
            minError: {
                minValue: minValue,
                value: control.value
            }
        };
        return (control.value < minValue) ? err : null;
    };
};
