import { AxisLabelClickEvent } from './axis-label-click-event';
import { DragEvent } from './drag-event';
import { DragEndEvent } from './drag-end-event';
import { DragStartEvent } from './drag-start-event';
import { LegendItemHoverEvent } from './legend-item-hover-event';
import { NoteClickEvent } from './note-click-event';
import { NoteHoverEvent } from './note-hover-event';
import { PlotAreaClickEvent } from './plot-area-click-event';
import { PlotAreaHoverEvent } from './plot-area-hover-event';
import { RenderEvent } from './render-event';
import { SelectEvent } from './select-event';
import { SelectEndEvent } from './select-end-event';
import { SelectStartEvent } from './select-start-event';
import { SeriesClickEvent } from './series-click-event';
import { SeriesHoverEvent } from './series-hover-event';
import { ZoomEvent } from './zoom-event';
import { ZoomEndEvent } from './zoom-end-event';
import { ZoomStartEvent } from './zoom-start-event';
var EVENT_MAP = {
    axisLabelClick: AxisLabelClickEvent,
    drag: DragEvent,
    dragEnd: DragEndEvent,
    dragStart: DragStartEvent,
    legendItemHover: LegendItemHoverEvent,
    noteClick: NoteClickEvent,
    noteHover: NoteHoverEvent,
    plotAreaClick: PlotAreaClickEvent,
    plotAreaHover: PlotAreaHoverEvent,
    render: RenderEvent,
    select: SelectEvent,
    selectEnd: SelectEndEvent,
    selectStart: SelectStartEvent,
    seriesClick: SeriesClickEvent,
    seriesHover: SeriesHoverEvent,
    zoom: ZoomEvent,
    zoomEnd: ZoomEndEvent,
    zoomStart: ZoomStartEvent
};
/**
 * @hidden
 */
export var InstanceEventService = (function () {
    function InstanceEventService() {
    }
    InstanceEventService.prototype.create = function (name, args, sender) {
        if (EVENT_MAP[name]) {
            return new EVENT_MAP[name](args, sender);
        }
    };
    return InstanceEventService;
}());
