"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var labels_component_generated_1 = require('../category-axis-item/labels.component.generated');
/**
 * The axis labels configuration.
 */
var CategoryAxisLabelsComponent = (function (_super) {
    __extends(CategoryAxisLabelsComponent, _super);
    // Place custom properties here
    function CategoryAxisLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisLabelsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-category-axis-item-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisLabelsComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return CategoryAxisLabelsComponent;
}(labels_component_generated_1.CategoryAxisLabelsComponentGenerated));
exports.CategoryAxisLabelsComponent = CategoryAxisLabelsComponent;
