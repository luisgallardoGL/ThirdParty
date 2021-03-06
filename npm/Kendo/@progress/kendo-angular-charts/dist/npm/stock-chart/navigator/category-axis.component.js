"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var prefix_configuration_service_1 = require('../../common/prefix-configuration.service');
var category_axis_item_component_1 = require('../../chart/category-axis-item.component');
/**
 * The configuration component for the navigator category axis.
 */
var NavigatorCategoryAxisComponent = (function (_super) {
    __extends(NavigatorCategoryAxisComponent, _super);
    function NavigatorCategoryAxisComponent(configurationService) {
        _super.call(this, configurationService, null);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: prefix_configuration_service_1.PREFIX,
                            useValue: 'navigator.categoryAxis'
                        }, {
                            provide: configuration_service_1.ConfigurationService,
                            useClass: prefix_configuration_service_1.PrefixConfigurationService
                        }],
                    selector: 'kendo-chart-navigator-category-axis',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisComponent;
}(category_axis_item_component_1.CategoryAxisItemComponent));
exports.NavigatorCategoryAxisComponent = NavigatorCategoryAxisComponent;
