"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var title_component_generated_1 = require('../value-axis-item/title.component.generated');
/**
 * The title configuration of the value axis.
 */
var ValueAxisTitleComponent = (function (_super) {
    __extends(ValueAxisTitleComponent, _super);
    // Place custom properties here
    function ValueAxisTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisTitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-value-axis-item-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ValueAxisTitleComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return ValueAxisTitleComponent;
}(title_component_generated_1.ValueAxisTitleComponentGenerated));
exports.ValueAxisTitleComponent = ValueAxisTitleComponent;
