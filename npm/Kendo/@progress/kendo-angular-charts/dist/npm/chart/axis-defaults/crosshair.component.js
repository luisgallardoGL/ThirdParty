"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var crosshair_component_generated_1 = require('../axis-defaults/crosshair.component.generated');
/**
 * The crosshair configuration options.
 */
var AxisDefaultsCrosshairComponent = (function (_super) {
    __extends(AxisDefaultsCrosshairComponent, _super);
    // Place custom properties here
    function AxisDefaultsCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    AxisDefaultsCrosshairComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-axis-defaults-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    AxisDefaultsCrosshairComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return AxisDefaultsCrosshairComponent;
}(crosshair_component_generated_1.AxisDefaultsCrosshairComponentGenerated));
exports.AxisDefaultsCrosshairComponent = AxisDefaultsCrosshairComponent;
