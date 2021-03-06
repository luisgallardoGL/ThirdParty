import { OnChanges, OnDestroy, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CollectionService, Item } from "./collection.service";
import { ConfigurationService } from './configuration.service';
/**
 * @hidden
 */
export declare abstract class CollectionItemComponent implements Item, OnChanges, OnDestroy {
    protected configurationService: ConfigurationService;
    protected collectionService: CollectionService;
    protected subscription: Subscription;
    options: any;
    constructor(configurationService: ConfigurationService, collectionService: CollectionService);
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    protected notify(): void;
}
