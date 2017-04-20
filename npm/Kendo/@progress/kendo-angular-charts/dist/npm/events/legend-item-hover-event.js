"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var preventable_event_1 = require('./preventable-event');
/**
 * Arguments for the `legendItemHover` event.
 */
var LegendItemHoverEvent = (function (_super) {
    __extends(LegendItemHoverEvent, _super);
    /**
     * @hidden
     */
    function LegendItemHoverEvent(e, sender) {
        _super.call(this, sender);
        this.series = e.series;
        this.seriesIndex = e.seriesIndex;
        this.pointIndex = e.pointIndex;
        this.text = e.text;
    }
    /**
     * If called, the series highlight is not shown as a result of hovering over the legend item.
     */
    LegendItemHoverEvent.prototype.preventDefault = function () {
        _super.prototype.preventDefault.call(this);
    };
    return LegendItemHoverEvent;
}(preventable_event_1.PreventableEvent));
exports.LegendItemHoverEvent = LegendItemHoverEvent;
