var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Input } from '@angular/core';
import { CollectionItemComponent } from '../common/collection-item.component';
/**
 * @hidden
 */
export var PaneComponentGenerated = (function (_super) {
    __extends(PaneComponentGenerated, _super);
    function PaneComponentGenerated(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    PaneComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'clip': [{ type: Input },],
        'height': [{ type: Input },],
        'margin': [{ type: Input },],
        'name': [{ type: Input },],
        'padding': [{ type: Input },],
        'title': [{ type: Input },],
    };
    return PaneComponentGenerated;
}(CollectionItemComponent));
