"use strict";
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
/**
 * @hidden
 */
var PanelBarService = (function () {
    function PanelBarService() {
        this.parentSource = new Subject_1.Subject();
        this.childSource = new Subject_1.Subject();
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
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PanelBarService.ctorParameters = function () { return []; };
    return PanelBarService;
}());
exports.PanelBarService = PanelBarService;
