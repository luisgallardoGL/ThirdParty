"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var extremes_component_1 = require('../../../chart/series-item/extremes.component');
/**
 * The extremes configuration of the StockChart navigator series. Applies to extreme outliers.
 */
var NavigatorSeriesExtremesComponent = (function (_super) {
    __extends(NavigatorSeriesExtremesComponent, _super);
    function NavigatorSeriesExtremesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesExtremesComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-extremes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesExtremesComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesExtremesComponent;
}(extremes_component_1.SeriesExtremesComponent));
exports.NavigatorSeriesExtremesComponent = NavigatorSeriesExtremesComponent;
