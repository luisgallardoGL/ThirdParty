"use strict";
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var copy_changes_1 = require('./common/copy-changes');
/**
 * @hidden
 */
var ChartComponentGenerated = (function () {
    function ChartComponentGenerated(configurationService) {
        this.configurationService = configurationService;
        /**
         * Fires when the user clicks an axis label.
         */
        this.axisLabelClick = new core_2.EventEmitter();
        /**
         * Fires as long as the user is dragging the Chart using the mouse or swipe gestures.
         */
        this.drag = new core_2.EventEmitter();
        /**
         * Fires when the user stops dragging the Chart.
         */
        this.dragEnd = new core_2.EventEmitter();
        /**
         * Fires when the user starts dragging the Chart.
         */
        this.dragStart = new core_2.EventEmitter();
        /**
         * Fires when a legend item is hovered.
         */
        this.legendItemHover = new core_2.EventEmitter();
        /**
         * Fires when the user clicks one of the notes.
         */
        this.noteClick = new core_2.EventEmitter();
        /**
         * Fires when the user hovers over one of the notes.
         */
        this.noteHover = new core_2.EventEmitter();
        /**
         * Fires when the user clicks the plot area.
         *
         * The `click` event is triggered by the `tap` and `contextmenu` events.
         * To distinguish between the original events, inspect the `e.originalEvent.type` field.
         */
        this.plotAreaClick = new core_2.EventEmitter();
        /**
         * Fires when the user hovers the plot area.
         */
        this.plotAreaHover = new core_2.EventEmitter();
        /**
         * Fires when the Chart is ready to render on screen.
         * For example, it is possible to use it to remove loading indicators.
         * Any changes made to options are ignored.
         */
        this.render = new core_2.EventEmitter();
        /**
         * Fires when the user modifies the selection.
         *
         * The range units are:
         *
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.select = new core_2.EventEmitter();
        /**
         * Fires when the user completes modifying the selection.
         *
         * The range units are:
         *
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.selectEnd = new core_2.EventEmitter();
        /**
         * Fires when the user starts modifying the axis selection.
         *
         * The range units are:
         *
         * - Generic axis&mdash;Category index (0-based).
         * - Date axis&mdash;Date instance.
         */
        this.selectStart = new core_2.EventEmitter();
        /**
         * Fires when the user clicks the Chart series.
         *
         * The `click` event will be triggered by the `tap` and `contextmenu` events.
         * To distinguish between the original events, inspect the `e.originalEvent.type` field.
         */
        this.seriesClick = new core_2.EventEmitter();
        /**
         * Fires when the user hovers the Chart series.
         */
        this.seriesHover = new core_2.EventEmitter();
        /**
         * Fires as long as the user is zooming the Chart by using the mousewheel operation.
         */
        this.zoom = new core_2.EventEmitter();
        /**
         * Fires when the user stops zooming the Chart.
         */
        this.zoomEnd = new core_2.EventEmitter();
        /**
         * Fires when the user uses the mousewheel to zoom the Chart.
         */
        this.zoomStart = new core_2.EventEmitter();
    }
    ChartComponentGenerated.prototype.ngOnChanges = function (changes) {
        var store = this.configurationService.store;
        copy_changes_1.copyChanges(changes, store);
        this.configurationService.push(store);
    };
    ChartComponentGenerated.propDecorators = {
        'pannable': [{ type: core_1.Input },],
        'renderAs': [{ type: core_1.Input },],
        'seriesColors': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'transitions': [{ type: core_1.Input },],
        'zoomable': [{ type: core_1.Input },],
        'axisDefaults': [{ type: core_1.Input },],
        'categoryAxis': [{ type: core_1.Input },],
        'chartArea': [{ type: core_1.Input },],
        'legend': [{ type: core_1.Input },],
        'panes': [{ type: core_1.Input },],
        'plotArea': [{ type: core_1.Input },],
        'series': [{ type: core_1.Input },],
        'seriesDefaults': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
        'valueAxis': [{ type: core_1.Input },],
        'xAxis': [{ type: core_1.Input },],
        'yAxis': [{ type: core_1.Input },],
        'axisLabelClick': [{ type: core_2.Output },],
        'drag': [{ type: core_2.Output },],
        'dragEnd': [{ type: core_2.Output },],
        'dragStart': [{ type: core_2.Output },],
        'legendItemHover': [{ type: core_2.Output },],
        'noteClick': [{ type: core_2.Output },],
        'noteHover': [{ type: core_2.Output },],
        'plotAreaClick': [{ type: core_2.Output },],
        'plotAreaHover': [{ type: core_2.Output },],
        'render': [{ type: core_2.Output },],
        'select': [{ type: core_2.Output },],
        'selectEnd': [{ type: core_2.Output },],
        'selectStart': [{ type: core_2.Output },],
        'seriesClick': [{ type: core_2.Output },],
        'seriesHover': [{ type: core_2.Output },],
        'zoom': [{ type: core_2.Output },],
        'zoomEnd': [{ type: core_2.Output },],
        'zoomStart': [{ type: core_2.Output },],
    };
    return ChartComponentGenerated;
}());
exports.ChartComponentGenerated = ChartComponentGenerated;
