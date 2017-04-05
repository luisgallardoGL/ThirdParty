"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var title_component_generated_1 = require('../pane/title.component.generated');
/**
 * The title configuration of the Chart pane.
 */
var PanesTitleComponent = (function (_super) {
    __extends(PanesTitleComponent, _super);
    // Place custom properties here
    function PanesTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    PanesTitleComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-pane-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    PanesTitleComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return PanesTitleComponent;
}(title_component_generated_1.PanesTitleComponentGenerated));
exports.PanesTitleComponent = PanesTitleComponent;
