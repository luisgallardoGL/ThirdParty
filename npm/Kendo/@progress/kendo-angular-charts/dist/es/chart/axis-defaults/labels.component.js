var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { AxisDefaultsLabelsComponentGenerated } from '../axis-defaults/labels.component.generated';
/**
 * The axis labels configuration.
 */
export var AxisDefaultsLabelsComponent = (function (_super) {
    __extends(AxisDefaultsLabelsComponent, _super);
    // Place custom properties here
    function AxisDefaultsLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsLabelsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-axis-defaults-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    AxisDefaultsLabelsComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return AxisDefaultsLabelsComponent;
}(AxisDefaultsLabelsComponentGenerated));
