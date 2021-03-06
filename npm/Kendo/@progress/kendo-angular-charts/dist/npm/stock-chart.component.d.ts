import { NgZone, ElementRef, EventEmitter } from '@angular/core';
import { ConfigurationService } from './common/configuration.service';
import { ChartComponent } from './chart.component';
import { ChartInstanceObserver } from './common/chart-instance-observer';
import { ThemeService } from './common/theme.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { NavigatorFilterEvent } from './stock-chart/events/navigator-filter-event';
import { StockInstanceEventService } from './stock-chart/events/instance-event.service';
import { Navigator as StockNavigator } from './stock-chart/option-types';
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
export declare class StockChartComponent extends ChartComponent {
    configurationService: ConfigurationService;
    themeService: ThemeService;
    protected element: ElementRef;
    protected intl: IntlService;
    protected ngZone: NgZone;
    protected instanceEventService: StockInstanceEventService;
    readonly className: string;
    /**
     * The configuration options for the data navigator.
     */
    navigator: StockNavigator;
    /**
     * Fires when the navigator range is changed.
     */
    navigatorFilter: EventEmitter<NavigatorFilterEvent>;
    protected redrawSlaves: boolean;
    constructor(configurationService: ConfigurationService, themeService: ThemeService, element: ElementRef, intl: IntlService, ngZone: NgZone, instanceEventService: StockInstanceEventService);
    /**
     * If called, the navigator pane is not redrawn the next time the StockChart options are updated.
     * The method is useful if you need to update only the main series data for the selected period.
     */
    skipNavigatorRedraw(): void;
    protected createInstance(element: any, observer: ChartInstanceObserver): void;
    protected updateOptions(): void;
    private applyNavigatorDefaults();
}
