"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../common/configuration.service');
var zoomable_component_generated_1 = require('./zoomable.component.generated');
/**
 * Specifies if the Chart can be zoomed.
 */
var ZoomableComponent = (function (_super) {
    __extends(ZoomableComponent, _super);
    // Place custom properties here
    function ZoomableComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ZoomableComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-zoomable',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ZoomableComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return ZoomableComponent;
}(zoomable_component_generated_1.ZoomableComponentGenerated));
exports.ZoomableComponent = ZoomableComponent;
