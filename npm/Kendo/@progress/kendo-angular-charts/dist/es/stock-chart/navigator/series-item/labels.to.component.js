var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesLabelsToComponent } from '../../../chart/series-item/labels.to.component';
/**
 * The to label configuration of the StockChart navigator series.
 */
export var NavigatorSeriesLabelsToComponent = (function (_super) {
    __extends(NavigatorSeriesLabelsToComponent, _super);
    function NavigatorSeriesLabelsToComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    NavigatorSeriesLabelsToComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-labels-to',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesLabelsToComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorSeriesLabelsToComponent;
}(SeriesLabelsToComponent));
