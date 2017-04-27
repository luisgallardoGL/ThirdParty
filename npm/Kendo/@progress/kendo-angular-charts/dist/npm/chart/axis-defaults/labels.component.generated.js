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
var AxisDefaultsLabelsComponentGenerated = (function (_super) {
    __extends(AxisDefaultsLabelsComponentGenerated, _super);
    function AxisDefaultsLabelsComponentGenerated(configurationService) {
        _super.call(this, 'axisDefaults.labels', configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsLabelsComponentGenerated.propDecorators = {
        'content': [{ type: core_1.Input },],
        'font': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'mirror': [{ type: core_1.Input },],
        'padding': [{ type: core_1.Input },],
        'rotation': [{ type: core_1.Input },],
        'skip': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'visual': [{ type: core_1.Input },],
    };
    return AxisDefaultsLabelsComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.AxisDefaultsLabelsComponentGenerated = AxisDefaultsLabelsComponentGenerated;
