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
import { SeriesDefaultsTooltipComponentGenerated } from '../series-defaults/tooltip.component.generated';
/**
 * The configuration options of the Chart series tooltip.
 *
 * The Chart series tooltip is displayed when the [`seriesDefaults.tooltip.visible`]({% slug api_charts_seriesdefaultstooltipcomponent_kendouiforangular %}#toc-visible) option is set to `true`.
 */
var SeriesDefaultsTooltipComponent = (function (_super) {
    __extends(SeriesDefaultsTooltipComponent, _super);
    // Place custom properties here.
    function SeriesDefaultsTooltipComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.hiddenByDefault = true;
        return _this;
    }
    return SeriesDefaultsTooltipComponent;
}(SeriesDefaultsTooltipComponentGenerated));
export { SeriesDefaultsTooltipComponent };
SeriesDefaultsTooltipComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'kendo-chart-series-defaults-tooltip',
                template: ''
            },] },
];
/** @nocollapse */
SeriesDefaultsTooltipComponent.ctorParameters = function () { return [
    { type: ConfigurationService, },
]; };
