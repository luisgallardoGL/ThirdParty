"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var preventable_event_1 = require("./preventable-event");
/**
 * Arguments for the `legendItemClick` event.
 */
var LegendItemClickEvent = (function (_super) {
    __extends(LegendItemClickEvent, _super);
    /**
     * @hidden
     */
    function LegendItemClickEvent(e, sender) {
        var _this = _super.call(this, sender) || this;
        _this.series = e.series;
        _this.seriesIndex = e.seriesIndex;
        _this.pointIndex = e.pointIndex;
        _this.text = e.text;
        return _this;
    }
    /**
     * If called, the series visibility is not toggled
     * as a result of clicking the legend item.
     */
    LegendItemClickEvent.prototype.preventDefault = function () {
        _super.prototype.preventDefault.call(this);
    };
    return LegendItemClickEvent;
}(preventable_event_1.PreventableEvent));
exports.LegendItemClickEvent = LegendItemClickEvent;
