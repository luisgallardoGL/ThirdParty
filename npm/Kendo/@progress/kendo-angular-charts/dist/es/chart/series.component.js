var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ConfigurationService } from "../common/configuration.service";
import { CollectionService } from "../common/collection.service";
import { TooltipTemplateService } from '../common/tooltip-template.service';
import { SeriesComponentGenerated } from './series.component.generated';
/**
 * A collection of one or more series items.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
export var SeriesComponent = (function (_super) {
    __extends(SeriesComponent, _super);
    // Place custom properties here
    function SeriesComponent(configurationService, collectionService, tooltipTemplateService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.tooltipTemplateService = tooltipTemplateService;
    }
    SeriesComponent.prototype.ngAfterContentChecked = function () {
        this.readTooltipTemplates();
    };
    SeriesComponent.prototype.readTooltipTemplates = function () {
        var templates = this.children.map(function (item) { return item.seriesTooltipTemplateRef; });
        this.tooltipTemplateService.setSeriesTemplates(templates);
    };
    SeriesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [CollectionService],
                    selector: 'kendo-chart-series',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: CollectionService, },
        { type: TooltipTemplateService, },
    ]; };
    return SeriesComponent;
}(SeriesComponentGenerated));
