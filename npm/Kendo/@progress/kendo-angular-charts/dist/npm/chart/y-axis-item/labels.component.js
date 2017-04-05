"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var labels_component_generated_1 = require('../y-axis-item/labels.component.generated');
/**
 * The axis labels configuration.
 */
var YAxisLabelsComponent = (function (_super) {
    __extends(YAxisLabelsComponent, _super);
    // Place custom properties here
    function YAxisLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    YAxisLabelsComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisLabelsComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return YAxisLabelsComponent;
}(labels_component_generated_1.YAxisLabelsComponentGenerated));
exports.YAxisLabelsComponent = YAxisLabelsComponent;
