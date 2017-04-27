"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var highlight_component_generated_1 = require('../series-item/highlight.component.generated');
/**
 * The Chart series highlighting configuration options.
 */
var SeriesHighlightComponent = (function (_super) {
    __extends(SeriesHighlightComponent, _super);
    // Place custom properties here
    function SeriesHighlightComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesHighlightComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-highlight',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesHighlightComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesHighlightComponent;
}(highlight_component_generated_1.SeriesHighlightComponentGenerated));
exports.SeriesHighlightComponent = SeriesHighlightComponent;
