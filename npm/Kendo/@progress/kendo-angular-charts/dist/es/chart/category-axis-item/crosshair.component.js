var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisCrosshairComponentGenerated } from '../category-axis-item/crosshair.component.generated';
/**
 * The crosshair configuration options.
 */
var CategoryAxisCrosshairComponent = (function (_super) {
    __extends(CategoryAxisCrosshairComponent, _super);
    // Place custom properties here
    function CategoryAxisCrosshairComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.hiddenByDefault = true;
        return _this;
    }
    return CategoryAxisCrosshairComponent;
}(CategoryAxisCrosshairComponentGenerated));
export { CategoryAxisCrosshairComponent };
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
