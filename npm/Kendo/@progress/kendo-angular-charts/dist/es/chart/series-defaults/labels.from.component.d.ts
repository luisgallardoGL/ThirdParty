import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsLabelsFromComponentGenerated } from '../series-defaults/labels.from.component.generated';
/**
 * The Chart series from label configuration.
 */
export declare class SeriesDefaultsLabelsFromComponent extends SeriesDefaultsLabelsFromComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
}
