"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var labels_to_component_generated_1 = require('../series-defaults/labels.to.component.generated');
/**
 * The Chart series to label configuration.
 */
var SeriesDefaultsLabelsToComponent = (function (_super) {
    __extends(SeriesDefaultsLabelsToComponent, _super);
    // Place custom properties here
    function SeriesDefaultsLabelsToComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesDefaultsLabelsToComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-labels-to',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsLabelsToComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesDefaultsLabelsToComponent;
}(labels_to_component_generated_1.SeriesDefaultsLabelsToComponentGenerated));
exports.SeriesDefaultsLabelsToComponent = SeriesDefaultsLabelsToComponent;
