"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_component_1 = require('../common/collection.component');
var value_axis_item_component_1 = require('./value-axis-item.component');
/**
 * @hidden
 */
var ValueAxisComponentGenerated = (function (_super) {
    __extends(ValueAxisComponentGenerated, _super);
    function ValueAxisComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'valueAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    ValueAxisComponentGenerated.propDecorators = {
        'children': [{ type: core_1.ContentChildren, args: [value_axis_item_component_1.ValueAxisItemComponent,] },],
    };
    return ValueAxisComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.ValueAxisComponentGenerated = ValueAxisComponentGenerated;
