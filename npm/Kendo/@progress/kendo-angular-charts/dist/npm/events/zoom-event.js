"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var preventable_event_1 = require('./preventable-event');
/**
 * Arguments for the `zoom` event.
 */
var ZoomEvent = (function (_super) {
    __extends(ZoomEvent, _super);
    /**
     * @hidden
     */
    function ZoomEvent(e, sender) {
        _super.call(this, sender);
        this.axisRanges = e.axisRanges;
        this.delta = e.delta;
        this.originalEvent = e.originalEvent;
    }
    return ZoomEvent;
}(preventable_event_1.PreventableEvent));
exports.ZoomEvent = ZoomEvent;
