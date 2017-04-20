"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_component_1 = require('../common/collection.component');
var category_axis_item_component_1 = require('./category-axis-item.component');
/**
 * @hidden
 */
var CategoryAxisComponentGenerated = (function (_super) {
    __extends(CategoryAxisComponentGenerated, _super);
    function CategoryAxisComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'categoryAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    CategoryAxisComponentGenerated.propDecorators = {
        'children': [{ type: core_1.ContentChildren, args: [category_axis_item_component_1.CategoryAxisItemComponent,] },],
    };
    return CategoryAxisComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.CategoryAxisComponentGenerated = CategoryAxisComponentGenerated;
