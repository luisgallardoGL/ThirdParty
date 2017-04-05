var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ContentChildren } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { ValueAxisItemComponent } from './value-axis-item.component';
/**
 * @hidden
 */
export var ValueAxisComponentGenerated = (function (_super) {
    __extends(ValueAxisComponentGenerated, _super);
    function ValueAxisComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'valueAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    ValueAxisComponentGenerated.propDecorators = {
        'children': [{ type: ContentChildren, args: [ValueAxisItemComponent,] },],
    };
    return ValueAxisComponentGenerated;
}(CollectionComponent));
