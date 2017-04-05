var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { PreventableEvent } from './preventable-event';
/**
 * Arguments for the `legendItemClick` event.
 */
export var LegendItemClickEvent = (function (_super) {
    __extends(LegendItemClickEvent, _super);
    /**
     * @hidden
     */
    function LegendItemClickEvent(e, sender) {
        _super.call(this, sender);
        this.series = e.series;
        this.seriesIndex = e.seriesIndex;
        this.pointIndex = e.pointIndex;
        this.text = e.text;
    }
    /**
     * If called, the series visibility is not toggled
     * as a result of clicking the legend item.
     */
    LegendItemClickEvent.prototype.preventDefault = function () {
        _super.prototype.preventDefault.call(this);
    };
    return LegendItemClickEvent;
}(PreventableEvent));
