"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_event_1 = require('./base-event');
/**
 * Arguments for the `render` event.
 */
var RenderEvent = (function (_super) {
    __extends(RenderEvent, _super);
    /**
     * @hidden
     */
    function RenderEvent(_e, sender) {
        _super.call(this, sender);
    }
    return RenderEvent;
}(base_event_1.BaseEvent));
exports.RenderEvent = RenderEvent;
