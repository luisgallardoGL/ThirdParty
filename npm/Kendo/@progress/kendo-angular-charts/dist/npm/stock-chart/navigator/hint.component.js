"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var settings_component_1 = require('../../common/settings.component');
/**
 * Default options for the navigator hint.
 */
var NavigatorHintComponent = (function (_super) {
    __extends(NavigatorHintComponent, _super);
    function NavigatorHintComponent(configurationService) {
        _super.call(this, 'hint', configurationService);
        this.configurationService = configurationService;
    }
    NavigatorHintComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-hint',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorHintComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    NavigatorHintComponent.propDecorators = {
        'content': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
    };
    return NavigatorHintComponent;
}(settings_component_1.SettingsComponent));
exports.NavigatorHintComponent = NavigatorHintComponent;
