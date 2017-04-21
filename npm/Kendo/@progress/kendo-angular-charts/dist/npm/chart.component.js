"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var core_3 = require('@angular/core');
var core_4 = require('@angular/core');
require('rxjs/add/operator/combineLatest');
require('rxjs/add/operator/auditTime');
var chart_component_generated_1 = require('./chart.component.generated');
var configuration_service_1 = require('./common/configuration.service');
var legend_item_click_event_1 = require('./events/legend-item-click-event');
var instance_event_service_1 = require('./events/instance-event.service');
var dom_events_builder_1 = require('./events/dom-events-builder');
var series_item_component_1 = require('./chart/series-item.component');
var theme_service_1 = require('./common/theme.service');
var chart_instance_observer_1 = require('./common/chart-instance-observer');
var tooltip_template_service_1 = require('./common/tooltip-template.service');
var tooltip_popup_component_1 = require('./chart/tooltip/tooltip-popup.component');
var crosshair_tooltips_container_component_1 = require('./chart/tooltip/crosshair-tooltips-container.component');
var has_parent_1 = require('./common/has-parent');
var kendo_angular_intl_1 = require('@progress/kendo-angular-intl');
var kendo_charts_1 = require('@progress/kendo-charts');
var kendo_drawing_1 = require('@progress/kendo-drawing');
kendo_charts_1.DomEventsBuilder.register(dom_events_builder_1.DomEventsBuilder);
/**
 * The root Chart component.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <button (click)="toggleLegend()">Toggle Legend</button>
 *     <button (click)="toggleSeries()">Toggle Series</button>
 *     <kendo-chart>
 *       <kendo-chart-legend [visible]="legendVisible">
 *       </kendo-chart-legend>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item *ngIf="seriesVisible" name="Series #1"
 *                                   type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 *   private legendVisible: boolean = true;
 *   private seriesVisible: boolean = true;
 *
 *   public toggleSeries(): void {
 *     this.seriesVisible = !this.seriesVisible;
 *   }
 *
 *   public toggleLegend(): void {
 *     this.legendVisible = !this.legendVisible;
 *   }
 * }
 *
 * ```
 */
var ChartComponent = (function (_super) {
    __extends(ChartComponent, _super);
    function ChartComponent(configurationService, themeService, element, intl, ngZone, instanceEventService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.themeService = themeService;
        this.element = element;
        this.intl = intl;
        this.ngZone = ngZone;
        this.instanceEventService = instanceEventService;
        /**
         * Fires when a legend item is clicked before the selected series visibility is toggled.
         * Can be prevented.
         */
        this.legendItemClick = new core_4.EventEmitter();
        this.theme = null;
        this.suppressTransitions = false;
        this.themeService.loadTheme();
        this.refreshWait();
    }
    Object.defineProperty(ChartComponent.prototype, "className", {
        get: function () {
            return 'k-chart k-widget';
        },
        enumerable: true,
        configurable: true
    });
    ChartComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
        if (this.instance) {
            this.instance.destroy();
        }
    };
    ChartComponent.prototype.createInstance = function (element, observer) {
        this.instance = new kendo_charts_1.Chart(element, this.options, this.theme, {
            intlService: this.intl,
            observer: observer,
            sender: this
        });
    };
    /**
     * Exports the chart as an image. The export operation is asynchronous and returns a promise.
     *
     * @param {ImageExportOptions} options &mdash; Parameters for the exported image
     * @returns {Promise<string>} &mdash; A promise that will be resolved with a PNG image encoded as a Data URI
     */
    ChartComponent.prototype.exportImage = function (options) {
        if (options === void 0) { options = {}; }
        return kendo_drawing_1.exportImage(this.exportVisual(options), options);
    };
    /**
     * Exports the chart as an SVG document. The export operation is asynchronous and returns a promise.
     *
     * @param {SVGExportOptions} options &mdash; Parameters for the exported file
     * @returns {Promise<string>} &mdash; A promise that will be resolved with a SVG document encoded as a Data URI
     */
    ChartComponent.prototype.exportSVG = function (options) {
        if (options === void 0) { options = {}; }
        return kendo_drawing_1.exportSVG(this.exportVisual(), options);
    };
    /**
     * Exports the chart as a Drawing scene.
     *
     * @param {any} options &mdash; Parameters for the export operation
     * @returns {Group} &mdash; The root Group of the scene
     */
    ChartComponent.prototype.exportVisual = function (options) {
        if (options === void 0) { options = {}; }
        return this.instance.exportVisual(options);
    };
    // findAxisByName
    // findPaneByIndex
    // findPaneByName
    // findSeries
    // findSeriesByIndex
    // findSeriesByName
    // hideTooltip
    // plotArea
    // redraw?
    // showTooltip
    // toggleHighlight
    ChartComponent.prototype.init = function () {
        var _this = this;
        if (typeof document === 'undefined') {
            return;
        }
        var element = this.element.nativeElement.querySelector('.k-chart-surface');
        if (!element) {
            return;
        }
        this.ngZone.runOutsideAngular(function () {
            var instanceObserver = new chart_instance_observer_1.ChartInstanceObserver(_this.ngZone, _this);
            _this.createInstance(element, instanceObserver);
        });
    };
    ChartComponent.prototype.onLegendItemClick = function (e) {
        var args = new legend_item_click_event_1.LegendItemClickEvent(e, this);
        this.legendItemClick.emit(args);
        if (!args.isDefaultPrevented()) {
            var series = this.seriesComponents.toArray()[e.series.index];
            if (!series) {
                return;
            }
            if (e.pointIndex === undefined) {
                series.toggleVisibility();
            }
            else {
                series.togglePointVisibility(e.pointIndex);
            }
            this.suppressTransitions = true;
        }
    };
    ChartComponent.prototype.onShowTooltip = function (e) {
        if (!e.crosshair) {
            this.tooltipInstance.show(e);
        }
        else {
            this.crossahirTooltips.show(e);
        }
    };
    ChartComponent.prototype.onHideTooltip = function (e) {
        if (!e.crosshair) {
            this.tooltipInstance.hide();
        }
        else {
            this.crossahirTooltips.hide();
        }
    };
    ChartComponent.prototype.trigger = function (name, e) {
        if (this[name]) {
            var args = this.instanceEventService.create(name, e, this);
            this[name].emit(args);
            return args.isDefaultPrevented && args.isDefaultPrevented();
        }
    };
    ChartComponent.prototype.requiresHandlers = function (names) {
        for (var idx = 0; idx < names.length; idx++) {
            if (this[names[idx]].observers.length > 0) {
                return true;
            }
        }
        return false;
    };
    ChartComponent.prototype.refresh = function () {
        this.crossahirTooltips.createCrosshairTooltips(this.options);
        if (!this.instance) {
            this.init();
            return;
        }
        var transitions = this.options.transitions;
        if (this.suppressTransitions) {
            this.options.transitions = false;
        }
        this.updateOptions();
        if (this.suppressTransitions) {
            this.options.transitions = transitions;
            this.suppressTransitions = false;
        }
    };
    ChartComponent.prototype.updateOptions = function () {
        this.instance.setOptions(this.options);
    };
    /**
     * @hidden
     */
    ChartComponent.prototype.tooltipMouseleave = function (e) {
        var relatedTarget = e.relatedTarget;
        var chartElement = this.element.nativeElement;
        if (this.instance && (!relatedTarget || !has_parent_1.hasParent(relatedTarget, chartElement))) {
            this.instance.hideElements();
        }
    };
    /**
     * @hidden
     */
    ChartComponent.prototype.chartMouseleave = function (e) {
        var relatedTarget = e.relatedTarget;
        if (this.instance && (!relatedTarget || !this.tooltipInstance.containsElement(relatedTarget))) {
            this.instance.hideElements();
        }
    };
    /**
     * @hidden
     */
    ChartComponent.prototype.chartResize = function () {
        if (this.instance) {
            this.instance.resize();
        }
    };
    ChartComponent.prototype.refreshWait = function () {
        var _this = this;
        this.subscription = this.configurationService.onChange$.combineLatest(this.themeService.onChange$, function (options, theme) {
            _this.options = options;
            _this.theme = theme;
        }).auditTime(configuration_service_1.THROTTLE_MS).subscribe(function () {
            _this.refresh();
        });
    };
    ChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'kendoChart',
                    providers: [configuration_service_1.ConfigurationService, tooltip_template_service_1.TooltipTemplateService, instance_event_service_1.InstanceEventService],
                    selector: 'kendo-chart',
                    template: "\n    <div class=\"k-chart-surface\" (mouseleave)=\"chartMouseleave($event)\"></div>\n    <kendo-chart-crosshair-tooltips-container>\n    </kendo-chart-crosshair-tooltips-container>\n    <kendo-chart-tooltip-popup (mouseleave)=\"tooltipMouseleave($event)\">\n    </kendo-chart-tooltip-popup>\n    <kendo-resize-sensor (resize)=\"chartResize()\"></kendo-resize-sensor>\n  "
                },] },
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: theme_service_1.ThemeService, },
        { type: core_3.ElementRef, },
        { type: kendo_angular_intl_1.IntlService, },
        { type: core_1.NgZone, },
        { type: instance_event_service_1.InstanceEventService, },
    ]; };
    ChartComponent.propDecorators = {
        'legendItemClick': [{ type: core_4.Output },],
        'className': [{ type: core_2.HostBinding, args: ['class',] },],
        'seriesComponents': [{ type: core_2.ContentChildren, args: [series_item_component_1.SeriesItemComponent, { descendants: true },] },],
        'tooltipInstance': [{ type: core_2.ViewChild, args: [tooltip_popup_component_1.TooltipPopupComponent,] },],
        'crossahirTooltips': [{ type: core_2.ViewChild, args: [crosshair_tooltips_container_component_1.CrosshairTooltipsContainerComponent,] },],
    };
    return ChartComponent;
}(chart_component_generated_1.ChartComponentGenerated));
exports.ChartComponent = ChartComponent;
