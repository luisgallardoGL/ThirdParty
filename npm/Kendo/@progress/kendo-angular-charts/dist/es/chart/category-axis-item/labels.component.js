var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisLabelsComponentGenerated } from '../category-axis-item/labels.component.generated';
/**
 * The axis labels configuration.
 */
export var CategoryAxisLabelsComponent = (function (_super) {
    __extends(CategoryAxisLabelsComponent, _super);
    // Place custom properties here
    function CategoryAxisLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisLabelsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-category-axis-item-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisLabelsComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return CategoryAxisLabelsComponent;
}(CategoryAxisLabelsComponentGenerated));
