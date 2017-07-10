import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/**
 * @hidden
 */
export var PanelBarService = (function () {
    function PanelBarService() {
        this.parentSource = new Subject();
        this.childSource = new Subject();
        this.parent$ = this.parentSource.asObservable();
        this.children$ = this.childSource.asObservable();
    }
    PanelBarService.prototype.onSelect = function (event) {
        this.childSource.next(event);
    };
    PanelBarService.prototype.onFocus = function () {
        this.parentSource.next(true);
    };
    PanelBarService.prototype.onBlur = function () {
        this.parentSource.next(false);
    };
    PanelBarService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PanelBarService.ctorParameters = function () { return []; };
    return PanelBarService;
}());
