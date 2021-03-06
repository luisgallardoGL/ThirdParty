"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var title_component_generated_1 = require('../axis-defaults/title.component.generated');
/**
 * The title configuration of the axis.
 */
var AxisDefaultsTitleComponent = (function (_super) {
    __extends(AxisDefaultsTitleComponent, _super);
    // Place custom properties here
    function AxisDefaultsTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsTitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-axis-defaults-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    AxisDefaultsTitleComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return AxisDefaultsTitleComponent;
}(title_component_generated_1.AxisDefaultsTitleComponentGenerated));
exports.AxisDefaultsTitleComponent = AxisDefaultsTitleComponent;
