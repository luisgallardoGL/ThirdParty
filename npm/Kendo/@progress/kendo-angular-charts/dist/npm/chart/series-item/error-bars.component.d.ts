import { ConfigurationService } from '../../common/configuration.service';
import { SeriesErrorBarsComponentGenerated } from '../series-item/error-bars.component.generated';
/**
 * The error bars of the Chart series.
 */
export declare class SeriesErrorBarsComponent extends SeriesErrorBarsComponentGenerated {
    configurationService: ConfigurationService;
    constructor(configurationService: ConfigurationService);
}
