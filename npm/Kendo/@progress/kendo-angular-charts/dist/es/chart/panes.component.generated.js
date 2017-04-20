var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ContentChildren } from '@angular/core';
import { CollectionComponent } from '../common/collection.component';
import { PaneComponent } from './pane.component';
/**
 * @hidden
 */
export var PanesComponentGenerated = (function (_super) {
    __extends(PanesComponentGenerated, _super);
    function PanesComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'panes', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    PanesComponentGenerated.propDecorators = {
        'children': [{ type: ContentChildren, args: [PaneComponent,] },],
    };
    return PanesComponentGenerated;
}(CollectionComponent));
