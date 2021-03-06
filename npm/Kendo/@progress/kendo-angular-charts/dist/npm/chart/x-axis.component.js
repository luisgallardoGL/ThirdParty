"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require("../common/configuration.service");
var collection_service_1 = require("../common/collection.service");
var x_axis_component_generated_1 = require('./x-axis.component.generated');
/**
 * A collection of one or more X-axis configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-x-axis>
 *         <kendo-chart-x-axis-item>
 *         </kendo-chart-x-axis-item>
 *         <kendo-chart-x-axis-item name="secondAxis">
 *         </kendo-chart-x-axis-item>
 *       </kendo-chart-x-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="scatter" [data]="[[1, 2]]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item type="scatter" [data]="[[0.1, 0.2]]"
 *                                  xAxis="secondAxis">
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
var XAxisComponent = (function (_super) {
    __extends(XAxisComponent, _super);
    // Place custom properties here
    function XAxisComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    XAxisComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [collection_service_1.CollectionService],
                    selector: 'kendo-chart-x-axis',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    XAxisComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: collection_service_1.CollectionService, },
    ]; };
    return XAxisComponent;
}(x_axis_component_generated_1.XAxisComponentGenerated));
exports.XAxisComponent = XAxisComponent;
