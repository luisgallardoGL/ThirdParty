"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_component_1 = require('../common/collection.component');
var series_item_component_1 = require('./series-item.component');
/**
 * @hidden
 */
var SeriesComponentGenerated = (function (_super) {
    __extends(SeriesComponentGenerated, _super);
    function SeriesComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'series', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    SeriesComponentGenerated.propDecorators = {
        'children': [{ type: core_1.ContentChildren, args: [series_item_component_1.SeriesItemComponent,] },],
    };
    return SeriesComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.SeriesComponentGenerated = SeriesComponentGenerated;
