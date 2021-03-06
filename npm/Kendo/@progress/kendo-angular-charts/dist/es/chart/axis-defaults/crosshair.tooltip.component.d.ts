import { ConfigurationService } from '../../common/configuration.service';
import { AxisDefaultsCrosshairTooltipComponentGenerated } from '../axis-defaults/crosshair.tooltip.component.generated';
/**
 * The crosshair tooltip options.
 * The crosshair tooltip is displayed when the [`axisDefaults.crosshair.tooltip.visible`]({% slug api_charts_axisdefaultscrosshairtooltipcomponent_kendouiforangular %}#toc-visible)
 * option is set to `true`.
 */
export declare class AxisDefaultsCrosshairTooltipComponent extends AxisDefaultsCrosshairTooltipComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
}
