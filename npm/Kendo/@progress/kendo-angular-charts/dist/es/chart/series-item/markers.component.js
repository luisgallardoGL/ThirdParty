var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesMarkersComponentGenerated } from '../series-item/markers.component.generated';
/**
 * The Chart series marker configuration.
 */
export var SeriesMarkersComponent = (function (_super) {
    __extends(SeriesMarkersComponent, _super);
    // Place custom properties here
    function SeriesMarkersComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesMarkersComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-markers',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesMarkersComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesMarkersComponent;
}(SeriesMarkersComponentGenerated));
