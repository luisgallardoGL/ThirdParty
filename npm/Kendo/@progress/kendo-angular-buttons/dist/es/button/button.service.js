import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/**
 * @hidden
 */
export var KendoButtonService = (function () {
    function KendoButtonService() {
        this.buttonClicked = new Subject();
        this.buttonClicked$ = this.buttonClicked.asObservable();
    }
    KendoButtonService.prototype.click = function (button) {
        this.buttonClicked.next(button);
    };
    KendoButtonService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    KendoButtonService.ctorParameters = function () { return []; };
    return KendoButtonService;
}());
