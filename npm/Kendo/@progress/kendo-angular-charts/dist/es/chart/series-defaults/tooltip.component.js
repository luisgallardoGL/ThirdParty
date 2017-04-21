var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsTooltipComponentGenerated } from '../series-defaults/tooltip.component.generated';
/**
 * The configuration options of the Chart series tooltip.
 *
 * The Chart series tooltip is displayed when the [`seriesDefaults.tooltip.visible`]({% slug api_charts_seriesdefaultstooltipcomponent_kendouiforangular %}#toc-visible) option is set to `true`.
 */
export var SeriesDefaultsTooltipComponent = (function (_super) {
    __extends(SeriesDefaultsTooltipComponent, _super);
    // Place custom properties here.
    function SeriesDefaultsTooltipComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
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
    return SeriesDefaultsTooltipComponent;
}(SeriesDefaultsTooltipComponentGenerated));
