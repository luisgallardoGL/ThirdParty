var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { XAxisTitleComponentGenerated } from '../x-axis-item/title.component.generated';
/**
 * The title configuration of the Scatter Chart X axis.
 */
export var XAxisTitleComponent = (function (_super) {
    __extends(XAxisTitleComponent, _super);
    // Place custom properties here
    function XAxisTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    XAxisTitleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-x-axis-item-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    XAxisTitleComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return XAxisTitleComponent;
}(XAxisTitleComponentGenerated));
