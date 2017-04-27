"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var settings_component_1 = require('../../common/settings.component');
/**
 * @hidden
 */
var XAxisCrosshairComponentGenerated = (function (_super) {
    __extends(XAxisCrosshairComponentGenerated, _super);
    function XAxisCrosshairComponentGenerated(configurationService) {
        _super.call(this, 'crosshair', configurationService);
        this.configurationService = configurationService;
    }
    XAxisCrosshairComponentGenerated.propDecorators = {
        'color': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
    };
    return XAxisCrosshairComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.XAxisCrosshairComponentGenerated = XAxisCrosshairComponentGenerated;
