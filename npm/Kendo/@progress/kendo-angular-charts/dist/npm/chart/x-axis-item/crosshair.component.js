"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var crosshair_component_generated_1 = require('../x-axis-item/crosshair.component.generated');
/**
 * The crosshair configuration options.
 */
var XAxisCrosshairComponent = (function (_super) {
    __extends(XAxisCrosshairComponent, _super);
    // Place custom properties here
    function XAxisCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    XAxisCrosshairComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-x-axis-item-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    XAxisCrosshairComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return XAxisCrosshairComponent;
}(crosshair_component_generated_1.XAxisCrosshairComponentGenerated));
exports.XAxisCrosshairComponent = XAxisCrosshairComponent;
