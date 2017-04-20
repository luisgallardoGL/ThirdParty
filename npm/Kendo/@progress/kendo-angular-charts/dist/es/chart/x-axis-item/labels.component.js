var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { XAxisLabelsComponentGenerated } from '../x-axis-item/labels.component.generated';
/**
 * The axis labels configuration.
 */
export var XAxisLabelsComponent = (function (_super) {
    __extends(XAxisLabelsComponent, _super);
    // Place custom properties here
    function XAxisLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    XAxisLabelsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-x-axis-item-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    XAxisLabelsComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return XAxisLabelsComponent;
}(XAxisLabelsComponentGenerated));
