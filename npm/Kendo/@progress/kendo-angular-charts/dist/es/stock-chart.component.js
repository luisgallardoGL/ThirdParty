var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Input, Component, NgZone, HostBinding, ElementRef, Output, EventEmitter } from '@angular/core';
import { ConfigurationService } from './common/configuration.service';
import { RootConfigurationService } from './common/root-configuration.service';
import { TooltipTemplateService } from './common/tooltip-template.service';
import { ChartComponent } from './chart.component';
import { ThemeService } from './common/theme.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { StockInstanceEventService } from './stock-chart/events/instance-event.service';
import { StockChart } from '@progress/kendo-charts';
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
export var StockChartComponent = (function (_super) {
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
        this.navigatorFilter = new EventEmitter();
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
        this.instance = new StockChart(element, this.options, this.theme, {
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
        { type: Component, args: [{
                    exportAs: 'kendoStockChart',
                    providers: [
                        ConfigurationService,
                        TooltipTemplateService,
                        { provide: RootConfigurationService, useExisting: ConfigurationService },
                        StockInstanceEventService
                    ],
                    selector: 'kendo-stockchart',
                    template: "\n        <div class=\"k-chart-surface\" (mouseleave)=\"chartMouseleave($event)\"></div>\n        <kendo-chart-crosshair-tooltips-container>\n        </kendo-chart-crosshair-tooltips-container>\n        <kendo-chart-tooltip-popup (mouseleave)=\"tooltipMouseleave($event)\">\n        </kendo-chart-tooltip-popup>\n        <kendo-resize-sensor (resize)=\"chartResize()\"></kendo-resize-sensor>\n    "
                },] },
    ];
    /** @nocollapse */
    StockChartComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: ThemeService, },
        { type: ElementRef, },
        { type: IntlService, },
        { type: NgZone, },
        { type: StockInstanceEventService, },
    ]; };
    StockChartComponent.propDecorators = {
        'className': [{ type: HostBinding, args: ['class',] },],
        'navigator': [{ type: Input },],
        'navigatorFilter': [{ type: Output },],
    };
    return StockChartComponent;
}(ChartComponent));
