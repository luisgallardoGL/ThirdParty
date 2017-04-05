var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { AxisDefaultsTitleComponentGenerated } from '../axis-defaults/title.component.generated';
/**
 * The title configuration of the axis.
 */
export var AxisDefaultsTitleComponent = (function (_super) {
    __extends(AxisDefaultsTitleComponent, _super);
    // Place custom properties here
    function AxisDefaultsTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsTitleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-axis-defaults-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    AxisDefaultsTitleComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return AxisDefaultsTitleComponent;
}(AxisDefaultsTitleComponentGenerated));
