var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisTitleComponent } from '../../../chart/category-axis-item/title.component';
/**
 * The title configuration of the navigator category axis.
 */
export var NavigatorCategoryAxisTitleComponent = (function (_super) {
    __extends(NavigatorCategoryAxisTitleComponent, _super);
    function NavigatorCategoryAxisTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisTitleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisTitleComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisTitleComponent;
}(CategoryAxisTitleComponent));
