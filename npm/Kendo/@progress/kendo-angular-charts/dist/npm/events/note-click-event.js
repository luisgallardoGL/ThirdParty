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
 * Arguments for the `noteClick` event.
 */
var NoteClickEvent = (function (_super) {
    __extends(NoteClickEvent, _super);
    /**
     * @hidden
     */
    function NoteClickEvent(e, sender) {
        var _this = _super.call(this, sender) || this;
        _this.category = e.category;
        _this.dataItem = e.dataItem;
        _this.series = e.series;
        _this.value = e.value;
        _this.visual = e.visual;
        return _this;
    }
    return NoteClickEvent;
}(base_event_1.BaseEvent));
exports.NoteClickEvent = NoteClickEvent;