"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var labels_component_1 = require('../../../chart/series-item/labels.component');
/**
 * The label configuration of the StockChart navigator series.
 */
var NavigatorSeriesLabelsComponent = (function (_super) {
    __extends(NavigatorSeriesLabelsComponent, _super);
    function NavigatorSeriesLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    NavigatorSeriesLabelsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesLabelsComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesLabelsComponent;
}(labels_component_1.SeriesLabelsComponent));
exports.NavigatorSeriesLabelsComponent = NavigatorSeriesLabelsComponent;
