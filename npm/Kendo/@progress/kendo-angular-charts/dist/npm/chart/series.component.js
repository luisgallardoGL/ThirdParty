"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require("../common/configuration.service");
var collection_service_1 = require("../common/collection.service");
var tooltip_template_service_1 = require('../common/tooltip-template.service');
var series_component_generated_1 = require('./series.component.generated');
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
var SeriesComponent = (function (_super) {
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
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [collection_service_1.CollectionService],
                    selector: 'kendo-chart-series',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: collection_service_1.CollectionService, },
        { type: tooltip_template_service_1.TooltipTemplateService, },
    ]; };
    return SeriesComponent;
}(series_component_generated_1.SeriesComponentGenerated));
exports.SeriesComponent = SeriesComponent;
