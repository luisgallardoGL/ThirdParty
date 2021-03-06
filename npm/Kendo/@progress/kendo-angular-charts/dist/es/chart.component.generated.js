import { Input } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { copyChanges } from './common/copy-changes';
/**
 * @hidden
 */
export var ChartComponentGenerated = (function () {
    function ChartComponentGenerated(configurationService) {
        this.configurationService = configurationService;
        /**
         * Fires when the user clicks an axis label.
         */
        this.axisLabelClick = new EventEmitter();
        /**
         * Fires as long as the user is dragging the Chart using the mouse or swipe gestures.
         */
        this.drag = new EventEmitter();
        /**
         * Fires when the user stops dragging the Chart.
         */
        this.dragEnd = new EventEmitter();
        /**
         * Fires when the user starts dragging the Chart.
         */
        this.dragStart = new EventEmitter();
        /**
         * Fires when a legend item is hovered.
         */
        this.legendItemHover = new EventEmitter();
        /**
         * Fires when the user clicks one of the notes.
         */
        this.noteClick = new EventEmitter();
        /**
         * Fires when the user hovers over one of the notes.
         */
        this.noteHover = new EventEmitter();
        /**
         * Fires when the user clicks the plot area.
         *
         * The `click` event is triggered by the `tap` and `contextmenu` events.
         * To distinguish between the original events, inspect the `e.originalEvent.type` field.
         */
        this.plotAreaClick = new EventEmitter();
        /**
         * Fires when the user hovers the plot area.
         */
        this.plotAreaHover = new EventEmitter();
        /**
         * Fires when the Chart is ready to render on screen.
         * For example, it is possible to use it to remove loading indicators.
         * Any changes made to options are ignored.
         */
        this.render = new EventEmitter();
        /**
         * Fires when the user modifies the selection.
         *
         * The range units are:
         *
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.select = new EventEmitter();
        /**
         * Fires when the user completes modifying the selection.
         *
         * The range units are:
         *
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.selectEnd = new EventEmitter();
        /**
         * Fires when the user starts modifying the axis selection.
         *
         * The range units are:
         *
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.selectStart = new EventEmitter();
        /**
         * Fires when the user clicks the Chart series.
         *
         * The `click` event will be triggered by the `tap` and `contextmenu` events.
         * To distinguish between the original events, inspect the `e.originalEvent.type` field.
         */
        this.seriesClick = new EventEmitter();
        /**
         * Fires when the user hovers the Chart series.
         */
        this.seriesHover = new EventEmitter();
        /**
         * Fires as long as the user is zooming the Chart by using the mousewheel operation.
         */
        this.zoom = new EventEmitter();
        /**
         * Fires when the user stops zooming the Chart.
         */
        this.zoomEnd = new EventEmitter();
        /**
         * Fires when the user uses the mousewheel to zoom the Chart.
         */
        this.zoomStart = new EventEmitter();
    }
    ChartComponentGenerated.prototype.ngOnChanges = function (changes) {
        var store = this.configurationService.store;
        copyChanges(changes, store);
        this.configurationService.push(store);
    };
    ChartComponentGenerated.propDecorators = {
        'pannable': [{ type: Input },],
        'renderAs': [{ type: Input },],
        'seriesColors': [{ type: Input },],
        'title': [{ type: Input },],
        'transitions': [{ type: Input },],
        'zoomable': [{ type: Input },],
        'axisDefaults': [{ type: Input },],
        'categoryAxis': [{ type: Input },],
        'chartArea': [{ type: Input },],
        'legend': [{ type: Input },],
        'panes': [{ type: Input },],
        'plotArea': [{ type: Input },],
        'series': [{ type: Input },],
        'seriesDefaults': [{ type: Input },],
        'tooltip': [{ type: Input },],
        'valueAxis': [{ type: Input },],
        'xAxis': [{ type: Input },],
        'yAxis': [{ type: Input },],
        'axisLabelClick': [{ type: Output },],
        'drag': [{ type: Output },],
        'dragEnd': [{ type: Output },],
        'dragStart': [{ type: Output },],
        'legendItemHover': [{ type: Output },],
        'noteClick': [{ type: Output },],
        'noteHover': [{ type: Output },],
        'plotAreaClick': [{ type: Output },],
        'plotAreaHover': [{ type: Output },],
        'render': [{ type: Output },],
        'select': [{ type: Output },],
        'selectEnd': [{ type: Output },],
        'selectStart': [{ type: Output },],
        'seriesClick': [{ type: Output },],
        'seriesHover': [{ type: Output },],
        'zoom': [{ type: Output },],
        'zoomEnd': [{ type: Output },],
        'zoomStart': [{ type: Output },],
    };
    return ChartComponentGenerated;
}());
