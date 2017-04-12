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
import { PreventableEvent } from './preventable-event';
/**
 * Arguments for the `zoom` event.
 */
var ZoomEvent = (function (_super) {
    __extends(ZoomEvent, _super);
    /**
     * @hidden
     */
    function ZoomEvent(e, sender) {
        var _this = _super.call(this, sender) || this;
        _this.axisRanges = e.axisRanges;
        _this.delta = e.delta;
        _this.originalEvent = e.originalEvent;
        return _this;
    }
    return ZoomEvent;
}(PreventableEvent));
export { ZoomEvent };
