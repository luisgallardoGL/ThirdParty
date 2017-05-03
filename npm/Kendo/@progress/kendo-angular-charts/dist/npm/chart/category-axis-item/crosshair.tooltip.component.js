"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var crosshair_tooltip_component_generated_1 = require('../category-axis-item/crosshair.tooltip.component.generated');
/**
 * The crosshair tooltip options.
 *
 * The crosshair tooltip is displayed when the visible option is set to `true`.
 */
var CategoryAxisCrosshairTooltipComponent = (function (_super) {
    __extends(CategoryAxisCrosshairTooltipComponent, _super);
    // Place custom properties here
    function CategoryAxisCrosshairTooltipComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    CategoryAxisCrosshairTooltipComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-category-axis-item-crosshair-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisCrosshairTooltipComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return CategoryAxisCrosshairTooltipComponent;
}(crosshair_tooltip_component_generated_1.CategoryAxisCrosshairTooltipComponentGenerated));
exports.CategoryAxisCrosshairTooltipComponent = CategoryAxisCrosshairTooltipComponent;
