/**
 * @hidden
 */
export var maxValidator = function (maxValue) {
    return function (control) {
        var err = {
            maxError: {
                maxValue: maxValue,
                value: control.value
            }
        };
        return (control.value > maxValue) ? err : null;
    };
};
