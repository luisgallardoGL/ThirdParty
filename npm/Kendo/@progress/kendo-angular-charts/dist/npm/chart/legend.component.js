"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../common/configuration.service');
var legend_component_generated_1 = require('./legend.component.generated');
/**
 * The Chart legend configuration options.
 */
var LegendComponent = (function (_super) {
    __extends(LegendComponent, _super);
    // Place custom properties here
    function LegendComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    LegendComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-legend',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    LegendComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return LegendComponent;
}(legend_component_generated_1.LegendComponentGenerated));
exports.LegendComponent = LegendComponent;
