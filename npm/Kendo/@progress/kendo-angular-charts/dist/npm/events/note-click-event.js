"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var base_event_1 = require('./base-event');
/**
 * Arguments for the `noteClick` event.
 */
var NoteClickEvent = (function (_super) {
    __extends(NoteClickEvent, _super);
    /**
     * @hidden
     */
    function NoteClickEvent(e, sender) {
        _super.call(this, sender);
        this.category = e.category;
        this.dataItem = e.dataItem;
        this.series = e.series;
        this.value = e.value;
        this.visual = e.visual;
    }
    return NoteClickEvent;
}(base_event_1.BaseEvent));
exports.NoteClickEvent = NoteClickEvent;
