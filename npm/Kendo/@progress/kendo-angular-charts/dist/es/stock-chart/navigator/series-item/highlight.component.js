var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesHighlightComponent } from '../../../chart/series-item/highlight.component';
/**
 * The highlighting configuration options for the StockChart series.
 */
export var NavigatorSeriesHighlightComponent = (function (_super) {
    __extends(NavigatorSeriesHighlightComponent, _super);
    function NavigatorSeriesHighlightComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesHighlightComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-highlight',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesHighlightComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorSeriesHighlightComponent;
}(SeriesHighlightComponent));
