var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { BaseEvent } from '../../events/base-event';
/**
 * Arguments for the `navigatorFilter` event.
 */
export var NavigatorFilterEvent = (function (_super) {
    __extends(NavigatorFilterEvent, _super);
    /**
     * Constructs the event arguments from a raw object.
     */
    function NavigatorFilterEvent(e, sender) {
        _super.call(this, sender);
        this.from = e.from;
        this.to = e.to;
    }
    return NavigatorFilterEvent;
}(BaseEvent));
