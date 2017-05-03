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
var SeriesDefaultsNotesComponentGenerated = (function (_super) {
    __extends(SeriesDefaultsNotesComponentGenerated, _super);
    function SeriesDefaultsNotesComponentGenerated(configurationService) {
        _super.call(this, 'seriesDefaults.notes', configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsNotesComponentGenerated.propDecorators = {
        'line': [{ type: core_1.Input },],
        'visual': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
    };
    return SeriesDefaultsNotesComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesDefaultsNotesComponentGenerated = SeriesDefaultsNotesComponentGenerated;
