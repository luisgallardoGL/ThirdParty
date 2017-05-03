"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../common/configuration.service');
var plot_area_component_generated_1 = require('./plot-area.component.generated');
/**
 * The plot area configuration options. The plot area is the area which displays the series.
 */
var PlotAreaComponent = (function (_super) {
    __extends(PlotAreaComponent, _super);
    // Place custom properties here
    function PlotAreaComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    PlotAreaComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-plot-area',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    PlotAreaComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return PlotAreaComponent;
}(plot_area_component_generated_1.PlotAreaComponentGenerated));
exports.PlotAreaComponent = PlotAreaComponent;
