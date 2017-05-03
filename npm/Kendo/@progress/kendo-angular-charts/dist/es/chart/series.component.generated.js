var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ContentChildren } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { SeriesItemComponent } from './series-item.component';
/**
 * @hidden
 */
export var SeriesComponentGenerated = (function (_super) {
    __extends(SeriesComponentGenerated, _super);
    function SeriesComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'series', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    SeriesComponentGenerated.propDecorators = {
        'children': [{ type: ContentChildren, args: [SeriesItemComponent,] },],
    };
    return SeriesComponentGenerated;
}(CollectionComponent));
