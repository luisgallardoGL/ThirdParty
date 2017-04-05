"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var title_component_1 = require('../../../chart/category-axis-item/title.component');
/**
 * The title configuration of the navigator category axis.
 */
var NavigatorCategoryAxisTitleComponent = (function (_super) {
    __extends(NavigatorCategoryAxisTitleComponent, _super);
    function NavigatorCategoryAxisTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisTitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisTitleComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisTitleComponent;
}(title_component_1.CategoryAxisTitleComponent));
exports.NavigatorCategoryAxisTitleComponent = NavigatorCategoryAxisTitleComponent;
