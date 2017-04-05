var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, NgZone } from '@angular/core';
import { ContentChildren, HostBinding, ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/auditTime';
import { ChartComponentGenerated } from './chart.component.generated';
import { ConfigurationService, THROTTLE_MS } from './common/configuration.service';
import { LegendItemClickEvent } from './events/legend-item-click-event';
import { InstanceEventService } from './events/instance-event.service';
import { DomEventsBuilder } from './events/dom-events-builder';
import { SeriesItemComponent } from './chart/series-item.component';
import { ThemeService } from './common/theme.service';
import { ChartInstanceObserver } from './common/chart-instance-observer';
import { TooltipTemplateService } from './common/tooltip-template.service';
import { TooltipPopupComponent } from './chart/tooltip/tooltip-popup.component';
import { CrosshairTooltipsContainerComponent } from './chart/tooltip/crosshair-tooltips-container.component';
import { hasParent } from './common/has-parent';
import { IntlService } from '@progress/kendo-angular-intl';
import { DomEventsBuilder as ChartDomEventsBuilder, Chart } from '@progress/kendo-charts';
import { exportSVG, exportImage } from '@progress/kendo-drawing';
ChartDomEventsBuilder.register(DomEventsBuilder);
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
export var ChartComponent = (function (_super) {
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
        this.legendItemClick = new EventEmitter();
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
        this.instance = new Chart(element, this.options, this.theme, {
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
        return exportImage(this.exportVisual(options), options);
    };
    /**
     * Exports the chart as an SVG document. The export operation is asynchronous and returns a promise.
     *
     * @param {SVGExportOptions} options &mdash; Parameters for the exported file
     * @returns {Promise<string>} &mdash; A promise that will be resolved with a SVG document encoded as a Data URI
     */
    ChartComponent.prototype.exportSVG = function (options) {
        if (options === void 0) { options = {}; }
        return exportSVG(this.exportVisual(), options);
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
            var instanceObserver = new ChartInstanceObserver(_this.ngZone, _this);
            _this.createInstance(element, instanceObserver);
        });
    };
    ChartComponent.prototype.onLegendItemClick = function (e) {
        var args = new LegendItemClickEvent(e, this);
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
        if (this.instance && (!relatedTarget || !hasParent(relatedTarget, chartElement))) {
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
        }).auditTime(THROTTLE_MS).subscribe(function () {
            _this.refresh();
        });
    };
    ChartComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'kendoChart',
                    providers: [ConfigurationService, TooltipTemplateService, InstanceEventService],
                    selector: 'kendo-chart',
                    template: "\n    <div class=\"k-chart-surface\" (mouseleave)=\"chartMouseleave($event)\"></div>\n    <kendo-chart-crosshair-tooltips-container>\n    </kendo-chart-crosshair-tooltips-container>\n    <kendo-chart-tooltip-popup (mouseleave)=\"tooltipMouseleave($event)\">\n    </kendo-chart-tooltip-popup>\n    <kendo-resize-sensor (resize)=\"chartResize()\"></kendo-resize-sensor>\n  "
                },] },
    ];
    /** @nocollapse */
    ChartComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: ThemeService, },
        { type: ElementRef, },
        { type: IntlService, },
        { type: NgZone, },
        { type: InstanceEventService, },
    ]; };
    ChartComponent.propDecorators = {
        'legendItemClick': [{ type: Output },],
        'className': [{ type: HostBinding, args: ['class',] },],
        'seriesComponents': [{ type: ContentChildren, args: [SeriesItemComponent, { descendants: true },] },],
        'tooltipInstance': [{ type: ViewChild, args: [TooltipPopupComponent,] },],
        'crossahirTooltips': [{ type: ViewChild, args: [CrosshairTooltipsContainerComponent,] },],
    };
    return ChartComponent;
}(ChartComponentGenerated));
