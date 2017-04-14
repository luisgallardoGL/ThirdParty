var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesLabelsToComponent } from '../../../chart/series-item/labels.to.component';
/**
 * The to label configuration of the StockChart navigator series.
 */
var NavigatorSeriesLabelsToComponent = (function (_super) {
    __extends(NavigatorSeriesLabelsToComponent, _super);
    function NavigatorSeriesLabelsToComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.hiddenByDefault = true;
        return _this;
    }
    return NavigatorSeriesLabelsToComponent;
}(SeriesLabelsToComponent));
export { NavigatorSeriesLabelsToComponent };
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