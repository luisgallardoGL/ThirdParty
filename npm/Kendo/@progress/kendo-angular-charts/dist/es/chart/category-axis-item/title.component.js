var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisTitleComponentGenerated } from '../category-axis-item/title.component.generated';
/**
 * The title configuration of the category axis.
 */
export var CategoryAxisTitleComponent = (function (_super) {
    __extends(CategoryAxisTitleComponent, _super);
    // Place custom properties here
    function CategoryAxisTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisTitleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-category-axis-item-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisTitleComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return CategoryAxisTitleComponent;
}(CategoryAxisTitleComponentGenerated));
