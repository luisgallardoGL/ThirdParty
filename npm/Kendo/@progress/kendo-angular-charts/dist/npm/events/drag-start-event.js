"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var preventable_event_1 = require('./preventable-event');
/**
 * Arguments for the `dragStart` event.
 */
var DragStartEvent = (function (_super) {
    __extends(DragStartEvent, _super);
    /**
     * @hidden
     */
    function DragStartEvent(e, sender) {
        _super.call(this, sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
    return DragStartEvent;
}(preventable_event_1.PreventableEvent));
exports.DragStartEvent = DragStartEvent;
