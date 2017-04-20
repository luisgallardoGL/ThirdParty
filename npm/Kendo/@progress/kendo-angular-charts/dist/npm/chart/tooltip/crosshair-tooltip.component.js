"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var base_tooltip_1 = require('./base-tooltip');
// Codelyzer 2.0.0-beta2 doesn't handle inherited members
/* tslint:disable:no-access-missing-member */
var CROSSHAIR_TOOLTIP_CLASS = 'k-chart-crosshair-tooltip';
/**
 * @hidden
 */
var CrosshairTooltipComponent = (function (_super) {
    __extends(CrosshairTooltipComponent, _super);
    function CrosshairTooltipComponent() {
        _super.apply(this, arguments);
    }
    CrosshairTooltipComponent.prototype.show = function (e) {
        _super.prototype.show.call(this, e);
        this.popupClasses[CROSSHAIR_TOOLTIP_CLASS] = true;
        this.value = e.value;
    };
    CrosshairTooltipComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'kendo-chart-crosshair-tooltip',
                    template: "\n    <kendo-popup [offset]=\"offset\" [popupAlign]=\"align\" [animate]=\"false\" *ngIf=\"active\" [collision]=\"collision\" >\n        <div [ngClass]=\"popupClasses\" [ngStyle]=\"style\">\n            {{ value }}\n        </div>\n    </kendo-popup>\n    "
                },] },
    ];
    /** @nocollapse */
    CrosshairTooltipComponent.ctorParameters = function () { return []; };
    CrosshairTooltipComponent.propDecorators = {
        'key': [{ type: core_1.Input },],
    };
    return CrosshairTooltipComponent;
}(base_tooltip_1.BaseTooltip));
exports.CrosshairTooltipComponent = CrosshairTooltipComponent;
