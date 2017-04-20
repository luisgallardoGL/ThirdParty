"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_event_1 = require('./base-event');
/**
 * Arguments for the `plotAreaClick` event.
 */
var PlotAreaClickEvent = (function (_super) {
    __extends(PlotAreaClickEvent, _super);
    /**
     * @hidden
     */
    function PlotAreaClickEvent(e, sender) {
        _super.call(this, sender);
        this.category = e.category;
        this.originalEvent = e.originalEvent;
        this.value = e.value;
        this.x = e.x;
        this.y = e.y;
    }
    return PlotAreaClickEvent;
}(base_event_1.BaseEvent));
exports.PlotAreaClickEvent = PlotAreaClickEvent;
