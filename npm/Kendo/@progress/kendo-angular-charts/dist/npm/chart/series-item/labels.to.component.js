"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var labels_to_component_generated_1 = require('../series-item/labels.to.component.generated');
/**
 * The Chart series to label configuration.
 */
var SeriesLabelsToComponent = (function (_super) {
    __extends(SeriesLabelsToComponent, _super);
    // Place custom properties here
    function SeriesLabelsToComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesLabelsToComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-labels-to',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesLabelsToComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesLabelsToComponent;
}(labels_to_component_generated_1.SeriesLabelsToComponentGenerated));
exports.SeriesLabelsToComponent = SeriesLabelsToComponent;
