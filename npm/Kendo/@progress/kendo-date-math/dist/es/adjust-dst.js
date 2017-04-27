/**
 * @hidden
 */
export var adjustDST = function (date, hour) {
    var newDate = new Date(date);
    if (hour === 0 && newDate.getHours() === 23) {
        newDate.setHours(newDate.getHours() + 2);
    }
    return newDate;
};
