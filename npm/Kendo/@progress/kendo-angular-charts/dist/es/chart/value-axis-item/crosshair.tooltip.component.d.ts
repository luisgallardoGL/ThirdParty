import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisCrosshairTooltipComponentGenerated } from '../value-axis-item/crosshair.tooltip.component.generated';
/**
 * The crosshair tooltip options.
 *
 * The crosshair tooltip is displayed when the `visible` option is set to `true`.
 */
export declare class ValueAxisCrosshairTooltipComponent extends ValueAxisCrosshairTooltipComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
}
