var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesOutliersComponent } from '../../../chart/series-item/outliers.component';
/**
 * The outliers configuration of the StockChart navigator series. Applies to mild outliers.
 */
export var NavigatorSeriesOutliersComponent = (function (_super) {
    __extends(NavigatorSeriesOutliersComponent, _super);
    function NavigatorSeriesOutliersComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesOutliersComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-outliers',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesOutliersComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorSeriesOutliersComponent;
}(SeriesOutliersComponent));
