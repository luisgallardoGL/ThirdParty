var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { BaseEvent } from './base-event';
/**
 * Arguments for the `dragEnd` event.
 */
export var DragEndEvent = (function (_super) {
    __extends(DragEndEvent, _super);
    /**
     * @hidden
     */
    function DragEndEvent(e, sender) {
        _super.call(this, sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
    return DragEndEvent;
}(BaseEvent));
