var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesLabelsFromComponent } from '../../../chart/series-item/labels.from.component';
/**
 * The from label configuration of the StockChart navigator series.
 */
export var NavigatorSeriesLabelsFromComponent = (function (_super) {
    __extends(NavigatorSeriesLabelsFromComponent, _super);
    function NavigatorSeriesLabelsFromComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    NavigatorSeriesLabelsFromComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-labels-from',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesLabelsFromComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorSeriesLabelsFromComponent;
}(SeriesLabelsFromComponent));
