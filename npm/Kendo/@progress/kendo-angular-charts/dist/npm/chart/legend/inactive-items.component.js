"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var inactive_items_component_generated_1 = require('../legend/inactive-items.component.generated');
/**
 * The configuration of the inactive Chart legend items.
 */
var LegendInactiveItemsComponent = (function (_super) {
    __extends(LegendInactiveItemsComponent, _super);
    // Place custom properties here
    function LegendInactiveItemsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    LegendInactiveItemsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-legend-inactive-items',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    LegendInactiveItemsComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return LegendInactiveItemsComponent;
}(inactive_items_component_generated_1.LegendInactiveItemsComponentGenerated));
exports.LegendInactiveItemsComponent = LegendInactiveItemsComponent;
