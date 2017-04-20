var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ContentChildren } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { XAxisItemComponent } from './x-axis-item.component';
/**
 * @hidden
 */
export var XAxisComponentGenerated = (function (_super) {
    __extends(XAxisComponentGenerated, _super);
    function XAxisComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'xAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    XAxisComponentGenerated.propDecorators = {
        'children': [{ type: ContentChildren, args: [XAxisItemComponent,] },],
    };
    return XAxisComponentGenerated;
}(CollectionComponent));
