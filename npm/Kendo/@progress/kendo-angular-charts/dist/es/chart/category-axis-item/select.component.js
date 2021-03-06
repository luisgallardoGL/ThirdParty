var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisSelectComponentGenerated } from '../category-axis-item/select.component.generated';
/**
 * The selected axis range. If set, the axis selection is enabled. The range is index-based and starts from 0.
 * Categories with indexes in the range ([`select.from`]({% slug api_charts_categoryaxisselectcomponent_kendouiforangular %}#toc-from) and
 * [`select.to`]({% slug api_charts_categoryaxisselectcomponent_kendouiforangular %}#toc-to)) will be selected.
 * That is, the last category in the range will not be included in the selection.
 * If the categories are dates, the range also has to be specified with date values.
 */
export var CategoryAxisSelectComponent = (function (_super) {
    __extends(CategoryAxisSelectComponent, _super);
    // Place custom properties here
    function CategoryAxisSelectComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisSelectComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-category-axis-item-select',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisSelectComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return CategoryAxisSelectComponent;
}(CategoryAxisSelectComponentGenerated));
