"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var tooltip_component_generated_1 = require('../series-defaults/tooltip.component.generated');
/**
 * The configuration options of the Chart series tooltip.
 *
 * The Chart series tooltip is displayed when the [`seriesDefaults.tooltip.visible`]({% slug api_charts_seriesdefaultstooltipcomponent_kendouiforangular %}#toc-visible) option is set to `true`.
 */
var SeriesDefaultsTooltipComponent = (function (_super) {
    __extends(SeriesDefaultsTooltipComponent, _super);
    // Place custom properties here.
    function SeriesDefaultsTooltipComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesDefaultsTooltipComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsTooltipComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesDefaultsTooltipComponent;
}(tooltip_component_generated_1.SeriesDefaultsTooltipComponentGenerated));
exports.SeriesDefaultsTooltipComponent = SeriesDefaultsTooltipComponent;
