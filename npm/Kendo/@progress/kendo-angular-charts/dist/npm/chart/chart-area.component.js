"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../common/configuration.service');
var chart_area_component_generated_1 = require('./chart-area.component.generated');
/**
 * The Chart area configuration options. Represents the entire visible area of the Chart.
 */
var ChartAreaComponent = (function (_super) {
    __extends(ChartAreaComponent, _super);
    // Place custom properties here
    function ChartAreaComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ChartAreaComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-area',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ChartAreaComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return ChartAreaComponent;
}(chart_area_component_generated_1.ChartAreaComponentGenerated));
exports.ChartAreaComponent = ChartAreaComponent;
