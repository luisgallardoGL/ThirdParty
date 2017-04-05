var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { AxisDefaultsCrosshairTooltipComponentGenerated } from '../axis-defaults/crosshair.tooltip.component.generated';
/**
 * The crosshair tooltip options.
 * The crosshair tooltip is displayed when the [`axisDefaults.crosshair.tooltip.visible`]({% slug api_charts_axisdefaultscrosshairtooltipcomponent_kendouiforangular %}#toc-visible)
 * option is set to `true`.
 */
export var AxisDefaultsCrosshairTooltipComponent = (function (_super) {
    __extends(AxisDefaultsCrosshairTooltipComponent, _super);
    // Place custom properties here
    function AxisDefaultsCrosshairTooltipComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    AxisDefaultsCrosshairTooltipComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-axis-defaults-crosshair-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    AxisDefaultsCrosshairTooltipComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return AxisDefaultsCrosshairTooltipComponent;
}(AxisDefaultsCrosshairTooltipComponentGenerated));
