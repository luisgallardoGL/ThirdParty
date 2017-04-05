"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_component_1 = require('../common/collection.component');
var x_axis_item_component_1 = require('./x-axis-item.component');
/**
 * @hidden
 */
var XAxisComponentGenerated = (function (_super) {
    __extends(XAxisComponentGenerated, _super);
    function XAxisComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'xAxis', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    XAxisComponentGenerated.propDecorators = {
        'children': [{ type: core_1.ContentChildren, args: [x_axis_item_component_1.XAxisItemComponent,] },],
    };
    return XAxisComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.XAxisComponentGenerated = XAxisComponentGenerated;
