import { CollectionService } from '../../common/collection.service';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesItemComponent } from '../../chart/series-item.component';
/**
 * The configuration component for a navigator series item.
 */
export declare class NavigatorSeriesItemComponent extends SeriesItemComponent {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
}
