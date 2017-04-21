"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var crosshair_component_generated_1 = require('../y-axis-item/crosshair.component.generated');
/**
 * The crosshair configuration options.
 */
var YAxisCrosshairComponent = (function (_super) {
    __extends(YAxisCrosshairComponent, _super);
    // Place custom properties here
    function YAxisCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    YAxisCrosshairComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisCrosshairComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return YAxisCrosshairComponent;
}(crosshair_component_generated_1.YAxisCrosshairComponentGenerated));
exports.YAxisCrosshairComponent = YAxisCrosshairComponent;
