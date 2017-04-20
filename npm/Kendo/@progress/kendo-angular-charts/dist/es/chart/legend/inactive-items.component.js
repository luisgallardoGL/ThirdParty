var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { LegendInactiveItemsComponentGenerated } from '../legend/inactive-items.component.generated';
/**
 * The configuration of the inactive Chart legend items.
 */
export var LegendInactiveItemsComponent = (function (_super) {
    __extends(LegendInactiveItemsComponent, _super);
    // Place custom properties here
    function LegendInactiveItemsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    LegendInactiveItemsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-legend-inactive-items',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    LegendInactiveItemsComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return LegendInactiveItemsComponent;
}(LegendInactiveItemsComponentGenerated));
