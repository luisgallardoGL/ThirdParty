"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_service_1 = require('../common/collection.service');
var configuration_service_1 = require('../common/configuration.service');
var category_axis_item_component_generated_1 = require('./category-axis-item.component.generated');
/**
 * The configuration component for a category axis.
 */
var CategoryAxisItemComponent = (function (_super) {
    __extends(CategoryAxisItemComponent, _super);
    function CategoryAxisItemComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    CategoryAxisItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [configuration_service_1.ConfigurationService],
                    selector: 'kendo-chart-category-axis-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisItemComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: collection_service_1.CollectionService, },
    ]; };
    return CategoryAxisItemComponent;
}(category_axis_item_component_generated_1.CategoryAxisItemComponentGenerated));
exports.CategoryAxisItemComponent = CategoryAxisItemComponent;
