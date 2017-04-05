var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { BaseEvent } from './base-event';
/**
 * Arguments for the `noteHover` event.
 */
export var NoteHoverEvent = (function (_super) {
    __extends(NoteHoverEvent, _super);
    /**
     * @hidden
     */
    function NoteHoverEvent(e, sender) {
        _super.call(this, sender);
        this.category = e.category;
        this.dataItem = e.dataItem;
        this.series = e.series;
        this.value = e.value;
        this.visual = e.visual;
    }
    return NoteHoverEvent;
}(BaseEvent));
