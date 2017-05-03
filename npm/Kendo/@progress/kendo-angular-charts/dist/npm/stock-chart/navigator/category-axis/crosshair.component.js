"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var crosshair_component_1 = require('../../../chart/category-axis-item/crosshair.component');
/**
 * The crosshair configuration options.
 */
var NavigatorCategoryAxisCrosshairComponent = (function (_super) {
    __extends(NavigatorCategoryAxisCrosshairComponent, _super);
    function NavigatorCategoryAxisCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisCrosshairComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisCrosshairComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisCrosshairComponent;
}(crosshair_component_1.CategoryAxisCrosshairComponent));
exports.NavigatorCategoryAxisCrosshairComponent = NavigatorCategoryAxisCrosshairComponent;
