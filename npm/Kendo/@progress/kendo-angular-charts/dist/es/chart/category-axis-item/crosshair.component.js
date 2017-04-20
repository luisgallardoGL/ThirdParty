var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisCrosshairComponentGenerated } from '../category-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options.
 */
export var CategoryAxisCrosshairComponent = (function (_super) {
    __extends(CategoryAxisCrosshairComponent, _super);
    // Place custom properties here
    function CategoryAxisCrosshairComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    CategoryAxisCrosshairComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-category-axis-item-crosshair',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisCrosshairComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return CategoryAxisCrosshairComponent;
}(CategoryAxisCrosshairComponentGenerated));
