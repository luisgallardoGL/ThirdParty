"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_component_1 = require('../common/collection.component');
var y_axis_item_component_1 = require('./y-axis-item.component');
/**
 * @hidden
 */
var YAxisComponentGenerated = (function (_super) {
    __extends(YAxisComponentGenerated, _super);
    function YAxisComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'yAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    YAxisComponentGenerated.propDecorators = {
        'children': [{ type: core_1.ContentChildren, args: [y_axis_item_component_1.YAxisItemComponent,] },],
    };
    return YAxisComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.YAxisComponentGenerated = YAxisComponentGenerated;
