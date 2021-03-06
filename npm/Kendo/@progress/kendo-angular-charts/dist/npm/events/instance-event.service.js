"use strict";
var axis_label_click_event_1 = require('./axis-label-click-event');
var drag_event_1 = require('./drag-event');
var drag_end_event_1 = require('./drag-end-event');
var drag_start_event_1 = require('./drag-start-event');
var legend_item_hover_event_1 = require('./legend-item-hover-event');
var note_click_event_1 = require('./note-click-event');
var note_hover_event_1 = require('./note-hover-event');
var plot_area_click_event_1 = require('./plot-area-click-event');
var plot_area_hover_event_1 = require('./plot-area-hover-event');
var render_event_1 = require('./render-event');
var select_event_1 = require('./select-event');
var select_end_event_1 = require('./select-end-event');
var select_start_event_1 = require('./select-start-event');
var series_click_event_1 = require('./series-click-event');
var series_hover_event_1 = require('./series-hover-event');
var zoom_event_1 = require('./zoom-event');
var zoom_end_event_1 = require('./zoom-end-event');
var zoom_start_event_1 = require('./zoom-start-event');
var EVENT_MAP = {
    axisLabelClick: axis_label_click_event_1.AxisLabelClickEvent,
    drag: drag_event_1.DragEvent,
    dragEnd: drag_end_event_1.DragEndEvent,
    dragStart: drag_start_event_1.DragStartEvent,
    legendItemHover: legend_item_hover_event_1.LegendItemHoverEvent,
    noteClick: note_click_event_1.NoteClickEvent,
    noteHover: note_hover_event_1.NoteHoverEvent,
    plotAreaClick: plot_area_click_event_1.PlotAreaClickEvent,
    plotAreaHover: plot_area_hover_event_1.PlotAreaHoverEvent,
    render: render_event_1.RenderEvent,
    select: select_event_1.SelectEvent,
    selectEnd: select_end_event_1.SelectEndEvent,
    selectStart: select_start_event_1.SelectStartEvent,
    seriesClick: series_click_event_1.SeriesClickEvent,
    seriesHover: series_hover_event_1.SeriesHoverEvent,
    zoom: zoom_event_1.ZoomEvent,
    zoomEnd: zoom_end_event_1.ZoomEndEvent,
    zoomStart: zoom_start_event_1.ZoomStartEvent
};
/**
 * @hidden
 */
var InstanceEventService = (function () {
    function InstanceEventService() {
    }
    InstanceEventService.prototype.create = function (name, args, sender) {
        if (EVENT_MAP[name]) {
            return new EVENT_MAP[name](args, sender);
        }
    };
    return InstanceEventService;
}());
exports.InstanceEventService = InstanceEventService;
