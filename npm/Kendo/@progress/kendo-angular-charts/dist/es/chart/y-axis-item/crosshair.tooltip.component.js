var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisCrosshairTooltipComponentGenerated } from '../y-axis-item/crosshair.tooltip.component.generated';
/**
 * The crosshair tooltip options.
 *
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
export var YAxisCrosshairTooltipComponent = (function (_super) {
    __extends(YAxisCrosshairTooltipComponent, _super);
    // Place custom properties here.
    function YAxisCrosshairTooltipComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    YAxisCrosshairTooltipComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-crosshair-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisCrosshairTooltipComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return YAxisCrosshairTooltipComponent;
}(YAxisCrosshairTooltipComponentGenerated));
