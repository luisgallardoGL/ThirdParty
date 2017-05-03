var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisCrosshairComponentGenerated } from '../value-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options.
 */
export var ValueAxisCrosshairComponent = (function (_super) {
    __extends(ValueAxisCrosshairComponent, _super);
    // Place custom properties here
    function ValueAxisCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    ValueAxisCrosshairComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-value-axis-item-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ValueAxisCrosshairComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return ValueAxisCrosshairComponent;
}(ValueAxisCrosshairComponentGenerated));
