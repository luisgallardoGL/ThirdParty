"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var item_component_generated_1 = require('../legend/item.component.generated');
/**
 * The configuration of the Chart legend item.
 */
var LegendItemComponent = (function (_super) {
    __extends(LegendItemComponent, _super);
    // Place custom properties here
    function LegendItemComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    LegendItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-legend-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    LegendItemComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return LegendItemComponent;
}(item_component_generated_1.LegendItemComponentGenerated));
exports.LegendItemComponent = LegendItemComponent;
