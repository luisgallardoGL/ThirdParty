import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisCrosshairTooltipComponentGenerated } from '../category-axis-item/crosshair.tooltip.component.generated';
/**
 * The crosshair tooltip options.
 *
 * The crosshair tooltip is displayed when the visible option is set to `true`.
 */
export declare class CategoryAxisCrosshairTooltipComponent extends CategoryAxisCrosshairTooltipComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
}
