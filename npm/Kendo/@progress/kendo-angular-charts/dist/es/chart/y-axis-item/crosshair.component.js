var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisCrosshairComponentGenerated } from '../y-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options.
 */
export var YAxisCrosshairComponent = (function (_super) {
    __extends(YAxisCrosshairComponent, _super);
    // Place custom properties here
    function YAxisCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    YAxisCrosshairComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisCrosshairComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return YAxisCrosshairComponent;
}(YAxisCrosshairComponentGenerated));
