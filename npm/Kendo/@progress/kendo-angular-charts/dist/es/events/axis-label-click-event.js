var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { BaseEvent } from './base-event';
/**
 * Arguments for the `axisLabelClick` event.
 */
export var AxisLabelClickEvent = (function (_super) {
    __extends(AxisLabelClickEvent, _super);
    /**
     * @hidden
     */
    function AxisLabelClickEvent(e, sender) {
        _super.call(this, sender);
        this.axis = e.axis;
        this.dataItem = e.dataItem;
        this.index = e.index;
        this.text = e.text;
        this.value = e.value;
    }
    return AxisLabelClickEvent;
}(BaseEvent));
