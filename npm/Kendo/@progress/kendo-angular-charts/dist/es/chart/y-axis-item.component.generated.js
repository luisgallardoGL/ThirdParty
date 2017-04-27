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
export var YAxisItemComponentGenerated = (function (_super) {
    __extends(YAxisItemComponentGenerated, _super);
    function YAxisItemComponentGenerated(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    YAxisItemComponentGenerated.propDecorators = {
        'axisCrossingValue': [{ type: Input },],
        'background': [{ type: Input },],
        'baseUnit': [{ type: Input },],
        'color': [{ type: Input },],
        'line': [{ type: Input },],
        'majorGridLines': [{ type: Input },],
        'majorTicks': [{ type: Input },],
        'majorUnit': [{ type: Input },],
        'max': [{ type: Input },],
        'min': [{ type: Input },],
        'minorGridLines': [{ type: Input },],
        'minorTicks': [{ type: Input },],
        'minorUnit': [{ type: Input },],
        'name': [{ type: Input },],
        'narrowRange': [{ type: Input },],
        'pane': [{ type: Input },],
        'plotBands': [{ type: Input },],
        'reverse': [{ type: Input },],
        'type': [{ type: Input },],
        'visible': [{ type: Input },],
        'crosshair': [{ type: Input },],
        'labels': [{ type: Input },],
        'notes': [{ type: Input },],
        'title': [{ type: Input },],
    };
    return YAxisItemComponentGenerated;
}(CollectionItemComponent));
