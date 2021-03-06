import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisItemComponent } from '../../chart/category-axis-item.component';
/**
 * The configuration component for the navigator category axis.
 */
export declare class NavigatorCategoryAxisComponent extends CategoryAxisItemComponent {
    protected configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
}
