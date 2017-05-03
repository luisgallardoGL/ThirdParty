var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesOutliersComponentGenerated } from '../series-item/outliers.component.generated';
/**
 * The Chart series outliers configuration. Applies to mild outliers.
 * For more information, refer to the [`series.extremes`]({% slug api_charts_seriesitemcomponent_kendouiforangular %}#toc-extremes) option.
 */
export var SeriesOutliersComponent = (function (_super) {
    __extends(SeriesOutliersComponent, _super);
    // Place custom properties here
    function SeriesOutliersComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesOutliersComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-outliers',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesOutliersComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesOutliersComponent;
}(SeriesOutliersComponentGenerated));
