"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_component_1 = require('../common/collection.component');
var pane_component_1 = require('./pane.component');
/**
 * @hidden
 */
var PanesComponentGenerated = (function (_super) {
    __extends(PanesComponentGenerated, _super);
    function PanesComponentGenerated(configurationService, collectionService) {
        _super.call(this, 'panes', configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    PanesComponentGenerated.propDecorators = {
        'children': [{ type: core_1.ContentChildren, args: [pane_component_1.PaneComponent,] },],
    };
    return PanesComponentGenerated;
}(collection_component_1.CollectionComponent));
exports.PanesComponentGenerated = PanesComponentGenerated;
