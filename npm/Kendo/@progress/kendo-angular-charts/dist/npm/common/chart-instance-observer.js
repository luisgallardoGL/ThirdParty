"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var kendo_charts_1 = require('@progress/kendo-charts');
/**
 * @hidden
 */
var ChartInstanceObserver = (function (_super) {
    __extends(ChartInstanceObserver, _super);
    function ChartInstanceObserver(ngZone, observer) {
        _super.call(this, observer);
        this.ngZone = ngZone;
        this.handlerMap = {
            hideTooltip: 'onHideTooltip',
            legendItemClick: 'onLegendItemClick',
            showTooltip: 'onShowTooltip'
        };
    }
    ChartInstanceObserver.prototype.callObserver = function (fnName) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var isDefaultPrevented = false;
        this.ngZone.run(function () {
            isDefaultPrevented = _this.observer[fnName].apply(_this.observer, args);
        });
        return isDefaultPrevented;
    };
    return ChartInstanceObserver;
}(kendo_charts_1.InstanceObserver));
exports.ChartInstanceObserver = ChartInstanceObserver;
