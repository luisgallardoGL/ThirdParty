"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var outliers_component_generated_1 = require('../series-item/outliers.component.generated');
/**
 * The Chart series outliers configuration. Applies to mild outliers.
 * For more information, refer to the [`series.extremes`]({% slug api_charts_seriesitemcomponent_kendouiforangular %}#toc-extremes) option.
 */
var SeriesOutliersComponent = (function (_super) {
    __extends(SeriesOutliersComponent, _super);
    // Place custom properties here
    function SeriesOutliersComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesOutliersComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-outliers',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesOutliersComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesOutliersComponent;
}(outliers_component_generated_1.SeriesOutliersComponentGenerated));
exports.SeriesOutliersComponent = SeriesOutliersComponent;
