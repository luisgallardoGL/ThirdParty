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
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesExtremesComponentGenerated } from '../series-item/extremes.component.generated';
/**
 * The Chart series extremes configuration. Applies to extreme outliers.
 * For more information, refer to [`series.outliers`]({% slug api_charts_seriesitemcomponent_kendouiforangular %}#toc-outliers).
 */
var SeriesExtremesComponent = (function (_super) {
    __extends(SeriesExtremesComponent, _super);
    // Place custom properties here
    function SeriesExtremesComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    return SeriesExtremesComponent;
}(SeriesExtremesComponentGenerated));
export { SeriesExtremesComponent };
SeriesExtremesComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'kendo-chart-series-item-extremes',
                template: ''
            },] },
];
/** @nocollapse */
SeriesExtremesComponent.ctorParameters = function () { return [
    { type: ConfigurationService, },
]; };
