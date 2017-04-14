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
import { ConfigurationService } from '../common/configuration.service';
import { PlotAreaComponentGenerated } from './plot-area.component.generated';
/**
 * The plot area configuration options. The plot area is the area which displays the series.
 */
var PlotAreaComponent = (function (_super) {
    __extends(PlotAreaComponent, _super);
    // Place custom properties here
    function PlotAreaComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    return PlotAreaComponent;
}(PlotAreaComponentGenerated));
export { PlotAreaComponent };
PlotAreaComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'kendo-chart-plot-area',
                template: ''
            },] },
];
/** @nocollapse */
PlotAreaComponent.ctorParameters = function () { return [
    { type: ConfigurationService, },
]; };