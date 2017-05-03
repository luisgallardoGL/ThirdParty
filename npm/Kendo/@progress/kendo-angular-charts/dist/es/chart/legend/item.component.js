var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { LegendItemComponentGenerated } from '../legend/item.component.generated';
/**
 * The configuration of the Chart legend item.
 */
export var LegendItemComponent = (function (_super) {
    __extends(LegendItemComponent, _super);
    // Place custom properties here
    function LegendItemComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    LegendItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-legend-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    LegendItemComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return LegendItemComponent;
}(LegendItemComponentGenerated));
