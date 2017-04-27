"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var settings_component_1 = require('../common/settings.component');
/**
 * @hidden
 */
var AxisDefaultsComponentGenerated = (function (_super) {
    __extends(AxisDefaultsComponentGenerated, _super);
    function AxisDefaultsComponentGenerated(configurationService) {
        _super.call(this, 'axisDefaults', configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'line': [{ type: core_1.Input },],
        'majorGridLines': [{ type: core_1.Input },],
        'majorTicks': [{ type: core_1.Input },],
        'minorGridLines': [{ type: core_1.Input },],
        'minorTicks': [{ type: core_1.Input },],
        'narrowRange': [{ type: core_1.Input },],
        'pane': [{ type: core_1.Input },],
        'plotBands': [{ type: core_1.Input },],
        'reverse': [{ type: core_1.Input },],
        'startAngle': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'crosshair': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
    };
    return AxisDefaultsComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.AxisDefaultsComponentGenerated = AxisDefaultsComponentGenerated;
