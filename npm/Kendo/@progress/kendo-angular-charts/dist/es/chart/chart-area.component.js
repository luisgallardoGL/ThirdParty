var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { ChartAreaComponentGenerated } from './chart-area.component.generated';
/**
 * The Chart area configuration options. Represents the entire visible area of the Chart.
 */
export var ChartAreaComponent = (function (_super) {
    __extends(ChartAreaComponent, _super);
    // Place custom properties here
    function ChartAreaComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ChartAreaComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-area',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ChartAreaComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return ChartAreaComponent;
}(ChartAreaComponentGenerated));
