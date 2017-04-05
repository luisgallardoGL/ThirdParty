"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var markers_component_generated_1 = require('../series-item/markers.component.generated');
/**
 * The Chart series marker configuration.
 */
var SeriesMarkersComponent = (function (_super) {
    __extends(SeriesMarkersComponent, _super);
    // Place custom properties here
    function SeriesMarkersComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesMarkersComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-markers',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesMarkersComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesMarkersComponent;
}(markers_component_generated_1.SeriesMarkersComponentGenerated));
exports.SeriesMarkersComponent = SeriesMarkersComponent;
