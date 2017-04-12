var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisCrosshairTooltipComponentGenerated } from '../value-axis-item/crosshair.tooltip.component.generated';
/**
 * The crosshair tooltip options.
 *
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
var ValueAxisCrosshairTooltipComponent = (function (_super) {
    __extends(ValueAxisCrosshairTooltipComponent, _super);
    // Place custom properties here.
    function ValueAxisCrosshairTooltipComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.hiddenByDefault = true;
        return _this;
    }
    return ValueAxisCrosshairTooltipComponent;
}(ValueAxisCrosshairTooltipComponentGenerated));
export { ValueAxisCrosshairTooltipComponent };
ValueAxisCrosshairTooltipComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'kendo-chart-value-axis-item-crosshair-tooltip',
                template: ''
            },] },
];
/** @nocollapse */
ValueAxisCrosshairTooltipComponent.ctorParameters = function () { return [
    { type: ConfigurationService, },
]; };
