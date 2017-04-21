var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { BaseEvent } from './base-event';
/**
 * Arguments for the `seriesHover` event.
 */
export var SeriesHoverEvent = (function (_super) {
    __extends(SeriesHoverEvent, _super);
    /**
     * @hidden
     */
    function SeriesHoverEvent(e, sender) {
        _super.call(this, sender);
        this.category = e.category;
        this.categoryPoints = e.categoryPoints;
        this.dataItem = e.dataItem;
        this.originalEvent = e.originalEvent;
        this.percentage = e.percentage;
        this.point = e.point;
        this.series = e.series;
        this.stackValue = e.stackValue;
        this.value = e.value;
    }
    return SeriesHoverEvent;
}(BaseEvent));
