var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy, ContentChildren } from '@angular/core';
import { ConfigurationService } from "../../common/configuration.service";
import { CollectionService } from "../../common/collection.service";
import { TooltipTemplateService } from "../../common/tooltip-template.service";
import { SeriesComponent } from '../../chart/series.component';
import { NavigatorSeriesItemComponent } from './series-item.component';
/**
 * A collection of one or more navigator series items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-stockchart>
 *         <kendo-chart-navigator>
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
export var NavigatorSeriesComponent = (function (_super) {
    __extends(NavigatorSeriesComponent, _super);
    function NavigatorSeriesComponent(configurationService, collectionService, tooltipTemplateService) {
        _super.call(this, configurationService, collectionService, tooltipTemplateService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.tooltipTemplateService = tooltipTemplateService;
    }
    NavigatorSeriesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [CollectionService],
                    selector: 'kendo-chart-navigator-series',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: CollectionService, },
        { type: TooltipTemplateService, },
    ]; };
    NavigatorSeriesComponent.propDecorators = {
        'children': [{ type: ContentChildren, args: [NavigatorSeriesItemComponent,] },],
    };
    return NavigatorSeriesComponent;
}(SeriesComponent));
