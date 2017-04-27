"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var highlight_component_1 = require('../../../chart/series-item/highlight.component');
/**
 * The highlighting configuration options for the StockChart series.
 */
var NavigatorSeriesHighlightComponent = (function (_super) {
    __extends(NavigatorSeriesHighlightComponent, _super);
    function NavigatorSeriesHighlightComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesHighlightComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-highlight',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesHighlightComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesHighlightComponent;
}(highlight_component_1.SeriesHighlightComponent));
exports.NavigatorSeriesHighlightComponent = NavigatorSeriesHighlightComponent;
