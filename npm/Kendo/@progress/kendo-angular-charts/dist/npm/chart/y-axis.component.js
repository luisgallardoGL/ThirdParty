"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require("../common/configuration.service");
var collection_service_1 = require("../common/collection.service");
var y_axis_component_generated_1 = require('./y-axis.component.generated');
/**
 * A collection of one or more Y-axis configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-y-axis>
 *         <kendo-chart-y-axis-item>
 *         </kendo-chart-y-axis-item>
 *         <kendo-chart-y-axis-item name="secondAxis">
 *         </kendo-chart-y-axis-item>
 *       </kendo-chart-y-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="scatter" [data]="[[1, 2]]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item type="scatter" [data]="[[0.1, 0.2]]"
 *                                  yAxis="secondAxis">
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
var YAxisComponent = (function (_super) {
    __extends(YAxisComponent, _super);
    // Place custom properties here
    function YAxisComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    YAxisComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [collection_service_1.CollectionService],
                    selector: 'kendo-chart-y-axis',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: collection_service_1.CollectionService, },
    ]; };
    return YAxisComponent;
}(y_axis_component_generated_1.YAxisComponentGenerated));
exports.YAxisComponent = YAxisComponent;
