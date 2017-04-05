"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../common/configuration.service');
var series_defaults_component_generated_1 = require('./series-defaults.component.generated');
/**
 * The default options for all series.
 */
var SeriesDefaultsComponent = (function (_super) {
    __extends(SeriesDefaultsComponent, _super);
    // Place custom properties here
    function SeriesDefaultsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesDefaultsComponent;
}(series_defaults_component_generated_1.SeriesDefaultsComponentGenerated));
exports.SeriesDefaultsComponent = SeriesDefaultsComponent;
