"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var preventable_event_1 = require('./preventable-event');
/**
 * Arguments for the `selectStart` event.
 */
var SelectStartEvent = (function (_super) {
    __extends(SelectStartEvent, _super);
    /**
     * @hidden
     */
    function SelectStartEvent(e, sender) {
        _super.call(this, sender);
        this.axis = e.axis;
        this.from = e.from;
        this.to = e.to;
    }
    return SelectStartEvent;
}(preventable_event_1.PreventableEvent));
exports.SelectStartEvent = SelectStartEvent;
