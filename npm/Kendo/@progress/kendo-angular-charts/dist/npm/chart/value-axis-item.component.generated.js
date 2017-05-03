"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_item_component_1 = require('../common/collection-item.component');
/**
 * @hidden
 */
var ValueAxisItemComponentGenerated = (function (_super) {
    __extends(ValueAxisItemComponentGenerated, _super);
    function ValueAxisItemComponentGenerated(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    ValueAxisItemComponentGenerated.propDecorators = {
        'axisCrossingValue': [{ type: core_1.Input },],
        'background': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'line': [{ type: core_1.Input },],
        'majorGridLines': [{ type: core_1.Input },],
        'majorTicks': [{ type: core_1.Input },],
        'majorUnit': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'minorGridLines': [{ type: core_1.Input },],
        'minorTicks': [{ type: core_1.Input },],
        'minorUnit': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'narrowRange': [{ type: core_1.Input },],
        'pane': [{ type: core_1.Input },],
        'plotBands': [{ type: core_1.Input },],
        'reverse': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'crosshair': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'notes': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
    };
    return ValueAxisItemComponentGenerated;
}(collection_item_component_1.CollectionItemComponent));
exports.ValueAxisItemComponentGenerated = ValueAxisItemComponentGenerated;
