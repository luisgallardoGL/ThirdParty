var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ContentChildren } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { YAxisItemComponent } from './y-axis-item.component';
/**
 * @hidden
 */
export var YAxisComponentGenerated = (function (_super) {
    __extends(YAxisComponentGenerated, _super);
    function YAxisComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'yAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    YAxisComponentGenerated.propDecorators = {
        'children': [{ type: ContentChildren, args: [YAxisItemComponent,] },],
    };
    return YAxisComponentGenerated;
}(CollectionComponent));
