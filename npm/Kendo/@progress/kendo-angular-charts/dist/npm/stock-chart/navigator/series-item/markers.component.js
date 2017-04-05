"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var markers_component_1 = require('../../../chart/series-item/markers.component');
/**
 * The marker configuration of the StockChart navigator series.
 */
var NavigatorSeriesMarkersComponent = (function (_super) {
    __extends(NavigatorSeriesMarkersComponent, _super);
    function NavigatorSeriesMarkersComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesMarkersComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-markers',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesMarkersComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesMarkersComponent;
}(markers_component_1.SeriesMarkersComponent));
exports.NavigatorSeriesMarkersComponent = NavigatorSeriesMarkersComponent;
