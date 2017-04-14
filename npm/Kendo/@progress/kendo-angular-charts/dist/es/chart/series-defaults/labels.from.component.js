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
import { SeriesDefaultsLabelsFromComponentGenerated } from '../series-defaults/labels.from.component.generated';
/**
 * The Chart series from label configuration.
 */
var SeriesDefaultsLabelsFromComponent = (function (_super) {
    __extends(SeriesDefaultsLabelsFromComponent, _super);
    // Place custom properties here
    function SeriesDefaultsLabelsFromComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.hiddenByDefault = true;
        return _this;
    }
    return SeriesDefaultsLabelsFromComponent;
}(SeriesDefaultsLabelsFromComponentGenerated));
export { SeriesDefaultsLabelsFromComponent };
SeriesDefaultsLabelsFromComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'kendo-chart-series-defaults-labels-from',
                template: ''
            },] },
];
/** @nocollapse */
SeriesDefaultsLabelsFromComponent.ctorParameters = function () { return [
    { type: ConfigurationService, },
]; };