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
var PaneComponentGenerated = (function (_super) {
    __extends(PaneComponentGenerated, _super);
    function PaneComponentGenerated(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    PaneComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'clip': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'name': [{ type: core_1.Input },],
        'padding': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
    };
    return PaneComponentGenerated;
}(collection_item_component_1.CollectionItemComponent));
exports.PaneComponentGenerated = PaneComponentGenerated;
