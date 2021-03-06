import { OnChanges, SimpleChange } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ConfigurationService } from './common/configuration.service';
import { DragAction, AxisDefaults, CategoryAxis, ChartArea, Legend, Pane, PlotArea, Series, SeriesDefaults, Title, Tooltip, ValueAxis, XAxis, YAxis, Zoomable } from './common/property-types';
import { AxisLabelClickEvent } from './events/axis-label-click-event';
import { DragEndEvent } from './events/drag-end-event';
import { DragEvent } from './events/drag-event';
import { DragStartEvent } from './events/drag-start-event';
import { LegendItemHoverEvent } from './events/legend-item-hover-event';
import { NoteClickEvent } from './events/note-click-event';
import { NoteHoverEvent } from './events/note-hover-event';
import { PlotAreaClickEvent } from './events/plot-area-click-event';
import { PlotAreaHoverEvent } from './events/plot-area-hover-event';
import { RenderEvent } from './events/render-event';
import { SelectEndEvent } from './events/select-end-event';
import { SelectEvent } from './events/select-event';
import { SelectStartEvent } from './events/select-start-event';
import { SeriesClickEvent } from './events/series-click-event';
import { SeriesHoverEvent } from './events/series-hover-event';
import { ZoomEndEvent } from './events/zoom-end-event';
import { ZoomEvent } from './events/zoom-event';
import { ZoomStartEvent } from './events/zoom-start-event';
/**
 * @hidden
 */
export declare abstract class ChartComponentGenerated implements OnChanges {
    configurationService: ConfigurationService;
    /**
     * Specifies if it is possible to pan the Chart.
     */
    pannable: boolean | DragAction;
    /**
     * Sets the preferred rendering engine.
     * If not supported by the browser, the Chart switches to the first available mode.
     *
     * The supported values are:
     *
     * - `"svg"`&mdash;If available, renders the widget as an inline SVG document.
     * - `"canvas"`&mdash;If available, renders the widget as a Canvas element.
     */
    renderAs: 'svg' | 'canvas';
    /**
     * The default colors for the Chart series. When all colors are used, new colors are pulled from the
     * start again.
     */
    seriesColors: string[];
    /**
     * The Chart title configuration options or text.
     */
    title: string | Title;
    /**
     * If set to `true`, the Chart plays animations when displaying the series.
     * By default, animations are enabled.
     */
    transitions: boolean;
    /**
     * Specifies if the Chart can be zoomed.
     */
    zoomable: boolean | Zoomable;
    /**
     * The default options for all Chart axes. Accepts the options supported by
     * [`categoryAxis`]({% slug api_charts_categoryaxisitemcomponent_kendouiforangular %}),
     * [`valueAxis`]({% slug api_charts_valueaxisitemcomponent_kendouiforangular %}),
     * [`xAxis`]({% slug api_charts_xaxisitemcomponent_kendouiforangular %}),
     * and [`yAxis`]({% slug api_charts_yaxisitemcomponent_kendouiforangular %}).
     */
    axisDefaults: AxisDefaults;
    /**
     * The category axis configuration options.
     */
    categoryAxis: CategoryAxis | CategoryAxis[];
    /**
     * The Chart area configuration options. Represents the entire visible area of the Chart.
     */
    chartArea: ChartArea;
    /**
     * The Chart legend configuration options.
     */
    legend: Legend;
    /**
     * The Chart panes configuration.
     *
     * Panes are used to split the Chart in 2 or more parts. The panes are ordered from top to bottom.
     *
     * Each axis can be associated with a pane by setting its `pane` option to the name of the desired pane.
     * Axis that do not have a specified pane are placed in the top (default) pane.
     *
     * Series are moved to the desired pane by associating them with an axis.
     */
    panes: Pane[];
    /**
     * The plot area configuration options. The plot area is the area which displays the series.
     */
    plotArea: PlotArea;
    /**
     * The configuration of the Chart series.
     *
     * The series type is determined by the value of the type field.
     * If a type value is missing, the type is assumed to be the one
     * specified in [`seriesDefaults`]({% slug api_charts_seriesdefaultscomponent_kendouiforangular %}).
     *
     * Some options accept functions as arguments. They are evaluated for each point (supplied as
     * a parameter). If no value is returned, the `theme` or
     * [`seriesDefaults`]({% slug api_charts_seriesdefaultscomponent_kendouiforangular %}) values are used.
     */
    series: Series[];
    /**
     * The default options for all series.
     */
    seriesDefaults: SeriesDefaults;
    /**
     * The configuration options of the Chart series tooltips.
     *
     * The tooltip of the Chart series is displayed when the
     * [`tooltip.visible`]({% slug api_charts_tooltipcomponent_kendouiforangular %}#toc-visible) option is set to `true`.
     */
    tooltip: Tooltip;
    /**
     * The value axis configuration options.
     */
    valueAxis: ValueAxis | ValueAxis[];
    /**
     * The x-axis configuration options of the Scatter Chart.
     * Supports all [`valueAxis`]({% slug api_charts_valueaxisitemcomponent_kendouiforangular %}) options.
     */
    xAxis: XAxis | XAxis[];
    /**
     * The y-axis configuration options of the Scatter Chart.
     * Supports all [`valueAxis`]({% slug api_charts_valueaxisitemcomponent_kendouiforangular %}) options.
     */
    yAxis: YAxis | YAxis[];
    /**
     * Fires when the user clicks an axis label.
     */
    axisLabelClick: EventEmitter<AxisLabelClickEvent>;
    /**
     * Fires as long as the user is dragging the Chart using the mouse or swipe gestures.
     */
    drag: EventEmitter<DragEvent>;
    /**
     * Fires when the user stops dragging the Chart.
     */
    dragEnd: EventEmitter<DragEndEvent>;
    /**
     * Fires when the user starts dragging the Chart.
     */
    dragStart: EventEmitter<DragStartEvent>;
    /**
     * Fires when a legend item is hovered.
     */
    legendItemHover: EventEmitter<LegendItemHoverEvent>;
    /**
     * Fires when the user clicks one of the notes.
     */
    noteClick: EventEmitter<NoteClickEvent>;
    /**
     * Fires when the user hovers over one of the notes.
     */
    noteHover: EventEmitter<NoteHoverEvent>;
    /**
     * Fires when the user clicks the plot area.
     *
     * The `click` event is triggered by the `tap` and `contextmenu` events.
     * To distinguish between the original events, inspect the `e.originalEvent.type` field.
     */
    plotAreaClick: EventEmitter<PlotAreaClickEvent>;
    /**
     * Fires when the user hovers the plot area.
     */
    plotAreaHover: EventEmitter<PlotAreaHoverEvent>;
    /**
     * Fires when the Chart is ready to render on screen.
     * For example, it is possible to use it to remove loading indicators.
     * Any changes made to options are ignored.
     */
    render: EventEmitter<RenderEvent>;
    /**
     * Fires when the user modifies the selection.
     *
     * The range units are:
     *
     * - Generic axis&mdash;Category index (0-based).
     * - Date axis&mdash;Date instance.
     */
    select: EventEmitter<SelectEvent>;
    /**
     * Fires when the user completes modifying the selection.
     *
     * The range units are:
     *
     * - Generic axis&mdash;Category index (0-based).
     * - Date axis&mdash;Date instance.
     */
    selectEnd: EventEmitter<SelectEndEvent>;
    /**
     * Fires when the user starts modifying the axis selection.
     *
     * The range units are:
     *
     * - Generic axis&mdash;Category index (0-based).
     * - Date axis&mdash;Date instance.
     */
    selectStart: EventEmitter<SelectStartEvent>;
    /**
     * Fires when the user clicks the Chart series.
     *
     * The `click` event will be triggered by the `tap` and `contextmenu` events.
     * To distinguish between the original events, inspect the `e.originalEvent.type` field.
     */
    seriesClick: EventEmitter<SeriesClickEvent>;
    /**
     * Fires when the user hovers the Chart series.
     */
    seriesHover: EventEmitter<SeriesHoverEvent>;
    /**
     * Fires as long as the user is zooming the Chart by using the mousewheel operation.
     */
    zoom: EventEmitter<ZoomEvent>;
    /**
     * Fires when the user stops zooming the Chart.
     */
    zoomEnd: EventEmitter<ZoomEndEvent>;
    /**
     * Fires when the user uses the mousewheel to zoom the Chart.
     */
    zoomStart: EventEmitter<ZoomStartEvent>;
    instance: any;
    constructor(configurationService: ConfigurationService);
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
}
