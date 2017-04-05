"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var tooltip_component_1 = require('../../../chart/series-item/tooltip.component');
/**
 * The configuration options of the StockChart navigator series tooltip.
 * The StockChart navigator series tooltip is displayed when the `navigator.series.tooltip.visible` option is set to `true`.
 */
var NavigatorSeriesTooltipComponent = (function (_super) {
    __extends(NavigatorSeriesTooltipComponent, _super);
    function NavigatorSeriesTooltipComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesTooltipComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesTooltipComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesTooltipComponent;
}(tooltip_component_1.SeriesTooltipComponent));
exports.NavigatorSeriesTooltipComponent = NavigatorSeriesTooltipComponent;
