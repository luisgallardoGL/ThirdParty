"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../common/configuration.service');
var axis_defaults_component_generated_1 = require('./axis-defaults.component.generated');
/**
 * The default options for all Chart axes. Accepts the options supported by [`categoryAxis`]({% slug api_charts_categoryaxisitemcomponent_kendouiforangular %}), [`valueAxis`]({% slug api_charts_valueaxisitemcomponent_kendouiforangular %}), [`xAxis`]({% slug api_charts_xaxisitemcomponent_kendouiforangular %}), and [`yAxis`]({% slug api_charts_yaxisitemcomponent_kendouiforangular %}).
 */
var AxisDefaultsComponent = (function (_super) {
    __extends(AxisDefaultsComponent, _super);
    // Place custom properties here
    function AxisDefaultsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-axis-defaults',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    AxisDefaultsComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return AxisDefaultsComponent;
}(axis_defaults_component_generated_1.AxisDefaultsComponentGenerated));
exports.AxisDefaultsComponent = AxisDefaultsComponent;
