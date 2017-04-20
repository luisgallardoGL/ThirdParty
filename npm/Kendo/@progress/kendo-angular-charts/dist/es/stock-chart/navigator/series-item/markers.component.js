var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesMarkersComponent } from '../../../chart/series-item/markers.component';
/**
 * The marker configuration of the StockChart navigator series.
 */
export var NavigatorSeriesMarkersComponent = (function (_super) {
    __extends(NavigatorSeriesMarkersComponent, _super);
    function NavigatorSeriesMarkersComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesMarkersComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-markers',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesMarkersComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorSeriesMarkersComponent;
}(SeriesMarkersComponent));
