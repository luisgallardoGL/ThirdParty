"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var outliers_component_1 = require('../../../chart/series-item/outliers.component');
/**
 * The outliers configuration of the StockChart navigator series. Applies to mild outliers.
 */
var NavigatorSeriesOutliersComponent = (function (_super) {
    __extends(NavigatorSeriesOutliersComponent, _super);
    function NavigatorSeriesOutliersComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesOutliersComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-outliers',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesOutliersComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesOutliersComponent;
}(outliers_component_1.SeriesOutliersComponent));
exports.NavigatorSeriesOutliersComponent = NavigatorSeriesOutliersComponent;
