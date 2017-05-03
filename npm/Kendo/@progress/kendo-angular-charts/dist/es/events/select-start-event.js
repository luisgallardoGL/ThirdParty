var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { PreventableEvent } from './preventable-event';
/**
 * Arguments for the `selectStart` event.
 */
export var SelectStartEvent = (function (_super) {
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
}(PreventableEvent));
