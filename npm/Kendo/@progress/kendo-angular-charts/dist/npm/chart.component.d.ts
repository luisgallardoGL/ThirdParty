import { NgZone, OnDestroy } from '@angular/core';
import { QueryList } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/auditTime';
import { ChartComponentGenerated } from './chart.component.generated';
import { ConfigurationService } from './common/configuration.service';
import { LegendItemClickEvent } from './events/legend-item-click-event';
import { InstanceEventService } from './events/instance-event.service';
import { SeriesItemComponent } from './chart/series-item.component';
import { ThemeService } from './common/theme.service';
import { ChartInstanceObserver } from './common/chart-instance-observer';
import { TooltipPopupComponent } from './chart/tooltip/tooltip-popup.component';
import { CrosshairTooltipsContainerComponent } from './chart/tooltip/crosshair-tooltips-container.component';
import { IntlService } from '@progress/kendo-angular-intl';
import { ImageExportOptions, Group, SVGExportOptions } from '@progress/kendo-drawing';
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
export declare class ChartComponent extends ChartComponentGenerated implements OnDestroy {
    configurationService: ConfigurationService;
    themeService: ThemeService;
    protected element: ElementRef;
    protected intl: IntlService;
    protected ngZone: NgZone;
    protected instanceEventService: InstanceEventService;
    /**
     * Fires when a legend item is clicked before the selected series visibility is toggled.
     * Can be prevented.
     */
    legendItemClick: EventEmitter<LegendItemClickEvent>;
    readonly className: string;
    seriesComponents: QueryList<SeriesItemComponent>;
    tooltipInstance: TooltipPopupComponent;
    crossahirTooltips: CrosshairTooltipsContainerComponent;
    protected options: any;
    protected theme: any;
    protected subscription: Subscription;
    protected suppressTransitions: boolean;
    constructor(configurationService: ConfigurationService, themeService: ThemeService, element: ElementRef, intl: IntlService, ngZone: NgZone, instanceEventService: InstanceEventService);
    ngOnDestroy(): void;
    protected createInstance(element: any, observer: ChartInstanceObserver): void;
    /**
     * Exports the chart as an image. The export operation is asynchronous and returns a promise.
     *
     * @param {ImageExportOptions} options &mdash; Parameters for the exported image
     * @returns {Promise<string>} &mdash; A promise that will be resolved with a PNG image encoded as a Data URI
     */
    exportImage(options?: ImageExportOptions): Promise<string>;
    /**
     * Exports the chart as an SVG document. The export operation is asynchronous and returns a promise.
     *
     * @param {SVGExportOptions} options &mdash; Parameters for the exported file
     * @returns {Promise<string>} &mdash; A promise that will be resolved with a SVG document encoded as a Data URI
     */
    exportSVG(options?: SVGExportOptions): Promise<string>;
    /**
     * Exports the chart as a Drawing scene.
     *
     * @param {any} options &mdash; Parameters for the export operation
     * @returns {Group} &mdash; The root Group of the scene
     */
    exportVisual(options?: any): Group;
    protected init(): void;
    protected onLegendItemClick(e: any): void;
    protected onShowTooltip(e: any): void;
    protected onHideTooltip(e: any): void;
    protected trigger(name: string, e: any): boolean;
    protected requiresHandlers(names: string[]): boolean;
    protected refresh(): void;
    protected updateOptions(): void;
    /**
     * @hidden
     */
    tooltipMouseleave(e: any): void;
    /**
     * @hidden
     */
    chartMouseleave(e: any): void;
    /**
     * @hidden
     */
    chartResize(): void;
    private refreshWait();
}
