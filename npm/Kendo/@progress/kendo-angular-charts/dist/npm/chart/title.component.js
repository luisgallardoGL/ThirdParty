"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../common/configuration.service');
var title_component_generated_1 = require('./title.component.generated');
/**
 * The Chart title configuration options or text.
 */
var TitleComponent = (function (_super) {
    __extends(TitleComponent, _super);
    // Place custom properties here
    function TitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    TitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    TitleComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return TitleComponent;
}(title_component_generated_1.TitleComponentGenerated));
exports.TitleComponent = TitleComponent;
