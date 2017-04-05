"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var preventable_event_1 = require('./preventable-event');
/**
 * Arguments for the `select` event.
 */
var SelectEvent = (function (_super) {
    __extends(SelectEvent, _super);
    /**
     * @hidden
     */
    function SelectEvent(e, sender) {
        _super.call(this, sender);
        this.axis = e.axis;
        this.from = e.from;
        this.to = e.to;
    }
    return SelectEvent;
}(preventable_event_1.PreventableEvent));
exports.SelectEvent = SelectEvent;
