"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var collection_component_1 = require("../common/collection.component");
var value_axis_item_component_1 = require("./value-axis-item.component");
/**
 * @hidden
 */
var ValueAxisComponentGenerated = (function (_super) {
    __extends(ValueAxisComponentGenerated, _super);
    function ValueAxisComponentGenerated(configurationService, collectionService) {
        var _this = _super.call(this, 'valueAxis', configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    return ValueAxisComponentGenerated;
}(collection_component_1.CollectionComponent));
ValueAxisComponentGenerated.propDecorators = {
    'children': [{ type: core_1.ContentChildren, args: [value_axis_item_component_1.ValueAxisItemComponent,] },],
};
exports.ValueAxisComponentGenerated = ValueAxisComponentGenerated;