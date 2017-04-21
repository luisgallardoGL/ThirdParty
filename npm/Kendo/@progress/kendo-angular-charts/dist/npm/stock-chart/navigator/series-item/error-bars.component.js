"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var error_bars_component_1 = require('../../../chart/series-item/error-bars.component');
/**
 * The error bars of the StockChart navigator series.
 */
var NavigatorSeriesErrorBarsComponent = (function (_super) {
    __extends(NavigatorSeriesErrorBarsComponent, _super);
    function NavigatorSeriesErrorBarsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesErrorBarsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-error-bars',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesErrorBarsComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesErrorBarsComponent;
}(error_bars_component_1.SeriesErrorBarsComponent));
exports.NavigatorSeriesErrorBarsComponent = NavigatorSeriesErrorBarsComponent;
