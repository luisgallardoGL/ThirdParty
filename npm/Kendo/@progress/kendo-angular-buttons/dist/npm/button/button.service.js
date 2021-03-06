"use strict";
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
/**
 * @hidden
 */
var KendoButtonService = (function () {
    function KendoButtonService() {
        this.buttonClicked = new Subject_1.Subject();
        this.buttonClicked$ = this.buttonClicked.asObservable();
    }
    KendoButtonService.prototype.click = function (button) {
        this.buttonClicked.next(button);
    };
    KendoButtonService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    KendoButtonService.ctorParameters = function () { return []; };
    return KendoButtonService;
}());
exports.KendoButtonService = KendoButtonService;
