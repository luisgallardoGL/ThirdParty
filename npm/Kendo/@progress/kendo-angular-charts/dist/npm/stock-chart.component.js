"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('./common/configuration.service');
var root_configuration_service_1 = require('./common/root-configuration.service');
var tooltip_template_service_1 = require('./common/tooltip-template.service');
var chart_component_1 = require('./chart.component');
var theme_service_1 = require('./common/theme.service');
var kendo_angular_intl_1 = require('@progress/kendo-angular-intl');
var instance_event_service_1 = require('./stock-chart/events/instance-event.service');
var kendo_charts_1 = require('@progress/kendo-charts');
var NAVIGATOR_DEFAULTS = {
    autoBindElements: true,
    liveDrag: false,
    partialRedraw: true
};
/* tslint:disable:no-access-missing-member */
/**
 * The root StockChart component.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-stockchart>
 *         <kendo-chart-series>
 *             <kendo-chart-series-item type="line" [data]="data" field="value" categoryField="date">
 *             </kendo-chart-series-item>
 *         </kendo-chart-series>
 *         <kendo-chart-navigator>
 *             <kendo-chart-navigator-select to="2017/02/01">
 *             </kendo-chart-navigator-select>
 *             <kendo-chart-navigator-series>
 *                 <kendo-chart-navigator-series-item type="area" [data]="data" field="value" categoryField="date">
 *                 </kendo-chart-navigator-series-item>
 *             </kendo-chart-navigator-series>
 *         </kendo-chart-navigator>
 *     </kendo-stockchart>
 *   `
 * })
 * class AppComponent {
 *   public data: any[] = [];
 *
 *   constructor() {
 *      for (let idx = 0; idx < 100; idx++) {
 *          this.data.push({
 *              date: new Date(2017, 0, idx),
 *              value: Math.random() * 100
 *          });
 *      }
 *   }
 * }
 *
 * ```
 */
var StockChartComponent = (function (_super) {
    __extends(StockChartComponent, _super);
    function StockChartComponent(configurationService, themeService, element, intl, ngZone, instanceEventService) {
        _super.call(this, configurationService, themeService, element, intl, ngZone, instanceEventService);
        this.configurationService = configurationService;
        this.themeService = themeService;
        this.element = element;
        this.intl = intl;
        this.ngZone = ngZone;
        this.instanceEventService = instanceEventService;
        /**
         * Fires when the navigator range is changed.
         */
        this.navigatorFilter = new core_1.EventEmitter();
        this.redrawSlaves = false;
    }
    Object.defineProperty(StockChartComponent.prototype, "className", {
        get: function () {
            return 'k-chart k-stockchart';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * If called, the navigator pane is not redrawn the next time the StockChart options are updated.
     * The method is useful if you need to update only the main series data for the selected period.
     */
    StockChartComponent.prototype.skipNavigatorRedraw = function () {
        this.redrawSlaves = true;
    };
    StockChartComponent.prototype.createInstance = function (element, observer) {
        this.applyNavigatorDefaults();
        this.instance = new kendo_charts_1.StockChart(element, this.options, this.theme, {
            intlService: this.intl,
            observer: observer,
            sender: this
        });
    };
    StockChartComponent.prototype.updateOptions = function () {
        this.applyNavigatorDefaults();
        if (this.redrawSlaves) {
            this.instance.applyOptions(this.options);
            this.instance.bindCategories();
            this.instance.navigator.redrawSlaves();
        }
        else {
            this.instance.setOptions(this.options);
        }
        this.redrawSlaves = false;
    };
    StockChartComponent.prototype.applyNavigatorDefaults = function () {
        this.options.navigator = Object.assign({}, this.options.navigator, NAVIGATOR_DEFAULTS);
    };
    StockChartComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'kendoStockChart',
                    providers: [
                        configuration_service_1.ConfigurationService,
                        tooltip_template_service_1.TooltipTemplateService,
                        { provide: root_configuration_service_1.RootConfigurationService, useExisting: configuration_service_1.ConfigurationService },
                        instance_event_service_1.StockInstanceEventService
                    ],
                    selector: 'kendo-stockchart',
                    template: "\n        <div class=\"k-chart-surface\" (mouseleave)=\"chartMouseleave($event)\"></div>\n        <kendo-chart-crosshair-tooltips-container>\n        </kendo-chart-crosshair-tooltips-container>\n        <kendo-chart-tooltip-popup (mouseleave)=\"tooltipMouseleave($event)\">\n        </kendo-chart-tooltip-popup>\n        <kendo-resize-sensor (resize)=\"chartResize()\"></kendo-resize-sensor>\n    "
                },] },
    ];
    /** @nocollapse */
    StockChartComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: theme_service_1.ThemeService, },
        { type: core_1.ElementRef, },
        { type: kendo_angular_intl_1.IntlService, },
        { type: core_1.NgZone, },
        { type: instance_event_service_1.StockInstanceEventService, },
    ]; };
    StockChartComponent.propDecorators = {
        'className': [{ type: core_1.HostBinding, args: ['class',] },],
        'navigator': [{ type: core_1.Input },],
        'navigatorFilter': [{ type: core_1.Output },],
    };
    return StockChartComponent;
}(chart_component_1.ChartComponent));
exports.StockChartComponent = StockChartComponent;
