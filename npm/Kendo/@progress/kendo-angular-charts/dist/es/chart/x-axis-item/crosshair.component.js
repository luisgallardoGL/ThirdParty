var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { XAxisCrosshairComponentGenerated } from '../x-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options.
 */
export var XAxisCrosshairComponent = (function (_super) {
    __extends(XAxisCrosshairComponent, _super);
    // Place custom properties here
    function XAxisCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    XAxisCrosshairComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-x-axis-item-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    XAxisCrosshairComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return XAxisCrosshairComponent;
}(XAxisCrosshairComponentGenerated));
