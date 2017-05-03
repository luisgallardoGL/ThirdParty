"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var crosshair_tooltip_component_generated_1 = require('../y-axis-item/crosshair.tooltip.component.generated');
/**
 * The crosshair tooltip options.
 *
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
var YAxisCrosshairTooltipComponent = (function (_super) {
    __extends(YAxisCrosshairTooltipComponent, _super);
    // Place custom properties here.
    function YAxisCrosshairTooltipComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    YAxisCrosshairTooltipComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-crosshair-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisCrosshairTooltipComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return YAxisCrosshairTooltipComponent;
}(crosshair_tooltip_component_generated_1.YAxisCrosshairTooltipComponentGenerated));
exports.YAxisCrosshairTooltipComponent = YAxisCrosshairTooltipComponent;
