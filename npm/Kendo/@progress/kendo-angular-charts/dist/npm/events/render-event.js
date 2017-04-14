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
var base_event_1 = require("./base-event");
/**
 * Arguments for the `render` event.
 */
var RenderEvent = (function (_super) {
    __extends(RenderEvent, _super);
    /**
     * @hidden
     */
    function RenderEvent(_e, sender) {
        return _super.call(this, sender) || this;
    }
    return RenderEvent;
}(base_event_1.BaseEvent));
exports.RenderEvent = RenderEvent;