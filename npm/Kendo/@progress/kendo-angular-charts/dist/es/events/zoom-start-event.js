var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { PreventableEvent } from './preventable-event';
/**
 * Arguments for the `zoomStart` event.
 */
export var ZoomStartEvent = (function (_super) {
    __extends(ZoomStartEvent, _super);
    /**
     * @hidden
     */
    function ZoomStartEvent(e, sender) {
        _super.call(this, sender);
        this.axisRanges = e.axisRanges;
        this.originalEvent = e.originalEvent;
    }
    return ZoomStartEvent;
}(PreventableEvent));
