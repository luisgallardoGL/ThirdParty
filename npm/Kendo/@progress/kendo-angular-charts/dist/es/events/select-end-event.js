var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { BaseEvent } from './base-event';
/**
 * Arguments for the `selectEnd` event.
 */
export var SelectEndEvent = (function (_super) {
    __extends(SelectEndEvent, _super);
    /**
     * @hidden
     */
    function SelectEndEvent(e, sender) {
        _super.call(this, sender);
        this.axis = e.axis;
        this.from = e.from;
        this.to = e.to;
    }
    return SelectEndEvent;
}(BaseEvent));
