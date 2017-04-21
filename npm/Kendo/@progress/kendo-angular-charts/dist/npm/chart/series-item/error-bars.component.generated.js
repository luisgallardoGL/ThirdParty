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
var SeriesErrorBarsComponentGenerated = (function (_super) {
    __extends(SeriesErrorBarsComponentGenerated, _super);
    function SeriesErrorBarsComponentGenerated(configurationService) {
        _super.call(this, 'errorBars', configurationService);
        this.configurationService = configurationService;
    }
    SeriesErrorBarsComponentGenerated.propDecorators = {
        'color': [{ type: core_1.Input },],
        'endCaps': [{ type: core_1.Input },],
        'line': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'visual': [{ type: core_1.Input },],
        'xValue': [{ type: core_1.Input },],
        'yValue': [{ type: core_1.Input },],
    };
    return SeriesErrorBarsComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesErrorBarsComponentGenerated = SeriesErrorBarsComponentGenerated;
