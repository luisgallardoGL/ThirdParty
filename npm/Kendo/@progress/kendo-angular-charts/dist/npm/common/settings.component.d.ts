import { OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { ConfigurationService } from './configuration.service';
/**
 * @hidden
 */
export declare abstract class SettingsComponent implements OnChanges, OnDestroy {
    protected configKey: string;
    configurationService: ConfigurationService;
    protected hiddenByDefault: boolean;
    private store;
    private userSetVisible;
    constructor(configKey: string, configurationService: ConfigurationService);
    ngOnDestroy(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    private toggleVisibility(change);
    private notify();
}
