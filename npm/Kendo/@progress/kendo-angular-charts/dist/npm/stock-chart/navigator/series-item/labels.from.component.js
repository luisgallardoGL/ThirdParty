"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var labels_from_component_1 = require('../../../chart/series-item/labels.from.component');
/**
 * The from label configuration of the StockChart navigator series.
 */
var NavigatorSeriesLabelsFromComponent = (function (_super) {
    __extends(NavigatorSeriesLabelsFromComponent, _super);
    function NavigatorSeriesLabelsFromComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    NavigatorSeriesLabelsFromComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-labels-from',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesLabelsFromComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesLabelsFromComponent;
}(labels_from_component_1.SeriesLabelsFromComponent));
exports.NavigatorSeriesLabelsFromComponent = NavigatorSeriesLabelsFromComponent;
