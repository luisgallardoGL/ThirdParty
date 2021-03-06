var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { AxisDefaultsCrosshairComponentGenerated } from '../axis-defaults/crosshair.component.generated';
/**
 * The crosshair configuration options.
 */
export var AxisDefaultsCrosshairComponent = (function (_super) {
    __extends(AxisDefaultsCrosshairComponent, _super);
    // Place custom properties here
    function AxisDefaultsCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    AxisDefaultsCrosshairComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-axis-defaults-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    AxisDefaultsCrosshairComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return AxisDefaultsCrosshairComponent;
}(AxisDefaultsCrosshairComponentGenerated));
