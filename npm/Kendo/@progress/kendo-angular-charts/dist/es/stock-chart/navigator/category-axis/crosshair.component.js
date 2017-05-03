var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisCrosshairComponent } from '../../../chart/category-axis-item/crosshair.component';
/**
 * The crosshair configuration options.
 */
export var NavigatorCategoryAxisCrosshairComponent = (function (_super) {
    __extends(NavigatorCategoryAxisCrosshairComponent, _super);
    function NavigatorCategoryAxisCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisCrosshairComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisCrosshairComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisCrosshairComponent;
}(CategoryAxisCrosshairComponent));
