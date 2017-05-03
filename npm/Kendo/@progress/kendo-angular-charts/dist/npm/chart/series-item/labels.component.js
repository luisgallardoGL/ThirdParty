"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var labels_component_generated_1 = require('../series-item/labels.component.generated');
/**
 * The Chart series label configuration.
 */
var SeriesLabelsComponent = (function (_super) {
    __extends(SeriesLabelsComponent, _super);
    // Place custom properties here
    function SeriesLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesLabelsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesLabelsComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesLabelsComponent;
}(labels_component_generated_1.SeriesLabelsComponentGenerated));
exports.SeriesLabelsComponent = SeriesLabelsComponent;
