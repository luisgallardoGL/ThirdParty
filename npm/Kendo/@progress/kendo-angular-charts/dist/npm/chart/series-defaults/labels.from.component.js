"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var labels_from_component_generated_1 = require('../series-defaults/labels.from.component.generated');
/**
 * The Chart series from label configuration.
 */
var SeriesDefaultsLabelsFromComponent = (function (_super) {
    __extends(SeriesDefaultsLabelsFromComponent, _super);
    // Place custom properties here
    function SeriesDefaultsLabelsFromComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesDefaultsLabelsFromComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-labels-from',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsLabelsFromComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesDefaultsLabelsFromComponent;
}(labels_from_component_generated_1.SeriesDefaultsLabelsFromComponentGenerated));
exports.SeriesDefaultsLabelsFromComponent = SeriesDefaultsLabelsFromComponent;
