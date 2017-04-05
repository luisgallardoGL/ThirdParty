var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ContentChildren } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { CategoryAxisItemComponent } from './category-axis-item.component';
/**
 * @hidden
 */
export var CategoryAxisComponentGenerated = (function (_super) {
    __extends(CategoryAxisComponentGenerated, _super);
    function CategoryAxisComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'categoryAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    CategoryAxisComponentGenerated.propDecorators = {
        'children': [{ type: ContentChildren, args: [CategoryAxisItemComponent,] },],
    };
    return CategoryAxisComponentGenerated;
}(CollectionComponent));
