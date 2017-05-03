var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { RenderEvent } from './events/render-event';
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
var ChartComponent = (function (_super) {
    __extends(ChartComponent, _super);
    function ChartComponent(configurationService, themeService, element, intl, ngZone, instanceEventService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.themeService = themeService;
        _this.element = element;
        _this.intl = intl;
        _this.ngZone = ngZone;
        _this.instanceEventService = instanceEventService;
        /**
         * Fires when a legend item is clicked before the selected series visibility is toggled.
         * Can be prevented.
         */
        _this.legendItemClick = new EventEmitter();
        _this.theme = null;
        _this.suppressTransitions = false;
        _this.themeService.loadTheme();
        _this.refreshWait();
        return _this;
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
     * Exports the Chart as an image. The export operation is asynchronous and returns a promise.
     *
     * @param {ImageExportOptions} options - The parameters for the exported image.
     * @returns {Promise<string>} - A promise that will be resolved with a PNG image encoded as a Data URI.
     */
    ChartComponent.prototype.exportImage = function (options) {
        if (options === void 0) { options = {}; }
        return exportImage(this.exportVisual(options), options);
    };
    /**
     * Exports the Chart as an SVG document. The export operation is asynchronous and returns a promise.
     *
     * @param {SVGExportOptions} options - Parameters for the exported file
     * @returns {Promise<string>} - A promise that will be resolved with a SVG document encoded as a Data URI
     */
    ChartComponent.prototype.exportSVG = function (options) {
        if (options === void 0) { options = {}; }
        return exportSVG(this.exportVisual(), options);
    };
    /**
     * Exports the Chart as a Drawing `Scene`.
     *
     * @param {any} options - The parameters for the export operation.
     * @returns {Group} - The root Group of the scene.
     */
    ChartComponent.prototype.exportVisual = function (options) {
        if (options === void 0) { options = {}; }
        return this.instance.exportVisual(options);
    };
    /**
     * Returns the axis with the specified name.
     *
     * @param {string} name - The axis name.
     * @returns {ChartAxis} - The axis with a corresponding name.
     */
    ChartComponent.prototype.findAxisByName = function (name) {
        if (this.instance) {
            return this.instance.findAxisByName(name);
        }
    };
    /**
     * Returns the pane at the specified index.
     *
     * @param {number} index - The pane index.
     * @returns {ChartPane} - The pane at the specified index.
     */
    ChartComponent.prototype.findPaneByIndex = function (index) {
        if (this.instance) {
            return this.instance.findPaneByIndex(index);
        }
    };
    /**
     * Returns the pane with the specified name.
     *
     * @param {string} name - The name of the pane.
     * @returns {ChartPane} - The pane with the provided name.
     */
    ChartComponent.prototype.findPaneByName = function (name) {
        if (this.instance) {
            return this.instance.findPaneByName(name);
        }
    };
    /**
     * Returns the chart plot area.
     * @returns {ChartPlotArea} - The plot area of the Chart.
     */
    ChartComponent.prototype.getPlotArea = function () {
        if (this.instance) {
            return this.instance.plotArea();
        }
    };
    /**
     * Toggles the highlight of the series points or a segment for the Pie, Donut, and Funnel charts.
     * @param show - A Boolean value that indicates whether the highlight is shown or hidden.
     * @param filter - A string that represents the series or category name, an object with the series and category name, or a function which will be called for each point. The function should return `true` for the points for which the highlight is toggled.
     */
    ChartComponent.prototype.toggleHighlight = function (show, filter) {
        if (this.instance) {
            this.instance.toggleHighlight(show, filter);
        }
    };
    /**
     * Hides the tooltip of the Chart.
     */
    ChartComponent.prototype.hideTooltip = function () {
        if (this.instance) {
            this.instance.hideTooltip();
        }
    };
    /**
     * Shows the tooltip of the Chart of a specific point or the shared tooltip of a specific category.
     *
     * @param filter - The category for a shared tooltip or a function which will be called for each point until the function returns `true`.
     */
    ChartComponent.prototype.showTooltip = function (filter) {
        if (this.instance) {
            this.instance.showTooltip(filter);
        }
    };
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
    ChartComponent.prototype.onRender = function (e) {
        var args = new RenderEvent(e, this);
        this.surface = e.sender.surface;
        this.instance = e.sender;
        this.render.emit(args);
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
    return ChartComponent;
}(ChartComponentGenerated));
export { ChartComponent };
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
