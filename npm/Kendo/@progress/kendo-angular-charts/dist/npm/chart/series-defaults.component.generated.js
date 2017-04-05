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
var SeriesDefaultsComponentGenerated = (function (_super) {
    __extends(SeriesDefaultsComponentGenerated, _super);
    function SeriesDefaultsComponentGenerated(configurationService) {
        _super.call(this, 'seriesDefaults', configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsComponentGenerated.propDecorators = {
        'border': [{ type: core_1.Input },],
        'gap': [{ type: core_1.Input },],
        'overlay': [{ type: core_1.Input },],
        'spacing': [{ type: core_1.Input },],
        'stack': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'visual': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'notes': [{ type: core_1.Input },],
        'tooltip': [{ type: core_1.Input },],
    };
    return SeriesDefaultsComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesDefaultsComponentGenerated = SeriesDefaultsComponentGenerated;
