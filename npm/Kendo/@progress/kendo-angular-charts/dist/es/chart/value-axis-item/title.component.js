var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisTitleComponentGenerated } from '../value-axis-item/title.component.generated';
/**
 * The title configuration of the value axis.
 */
export var ValueAxisTitleComponent = (function (_super) {
    __extends(ValueAxisTitleComponent, _super);
    // Place custom properties here
    function ValueAxisTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisTitleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-value-axis-item-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ValueAxisTitleComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return ValueAxisTitleComponent;
}(ValueAxisTitleComponentGenerated));
