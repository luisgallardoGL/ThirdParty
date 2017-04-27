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
export var CategoryAxisItemComponentGenerated = (function (_super) {
    __extends(CategoryAxisItemComponentGenerated, _super);
    function CategoryAxisItemComponentGenerated(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    CategoryAxisItemComponentGenerated.propDecorators = {
        'autoBaseUnitSteps': [{ type: Input },],
        'axisCrossingValue': [{ type: Input },],
        'background': [{ type: Input },],
        'baseUnit': [{ type: Input },],
        'baseUnitStep': [{ type: Input },],
        'categories': [{ type: Input },],
        'color': [{ type: Input },],
        'justified': [{ type: Input },],
        'line': [{ type: Input },],
        'majorGridLines': [{ type: Input },],
        'majorTicks': [{ type: Input },],
        'max': [{ type: Input },],
        'maxDateGroups': [{ type: Input },],
        'min': [{ type: Input },],
        'minorGridLines': [{ type: Input },],
        'minorTicks': [{ type: Input },],
        'name': [{ type: Input },],
        'pane': [{ type: Input },],
        'plotBands': [{ type: Input },],
        'reverse': [{ type: Input },],
        'roundToBaseUnit': [{ type: Input },],
        'startAngle': [{ type: Input },],
        'type': [{ type: Input },],
        'visible': [{ type: Input },],
        'weekStartDay': [{ type: Input },],
        'crosshair': [{ type: Input },],
        'labels': [{ type: Input },],
        'notes': [{ type: Input },],
        'select': [{ type: Input },],
        'title': [{ type: Input },],
    };
    return CategoryAxisItemComponentGenerated;
}(CollectionItemComponent));
