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
 * Arguments for the `legendItemHover` event.
 */
var LegendItemHoverEvent = (function (_super) {
    __extends(LegendItemHoverEvent, _super);
    /**
     * @hidden
     */
    function LegendItemHoverEvent(e, sender) {
        var _this = _super.call(this, sender) || this;
        _this.series = e.series;
        _this.seriesIndex = e.seriesIndex;
        _this.pointIndex = e.pointIndex;
        _this.text = e.text;
        return _this;
    }
    /**
     * If called, the series highlight is not shown as a result of hovering over the legend item.
     */
    LegendItemHoverEvent.prototype.preventDefault = function () {
        _super.prototype.preventDefault.call(this);
    };
    return LegendItemHoverEvent;
}(PreventableEvent));
export { LegendItemHoverEvent };
