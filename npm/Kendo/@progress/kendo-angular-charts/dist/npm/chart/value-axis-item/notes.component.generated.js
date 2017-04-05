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
var ValueAxisNotesComponentGenerated = (function (_super) {
    __extends(ValueAxisNotesComponentGenerated, _super);
    function ValueAxisNotesComponentGenerated(configurationService) {
        _super.call(this, 'notes', configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisNotesComponentGenerated.propDecorators = {
        'data': [{ type: core_1.Input },],
        'line': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'visual': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'label': [{ type: core_1.Input },],
    };
    return ValueAxisNotesComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.ValueAxisNotesComponentGenerated = ValueAxisNotesComponentGenerated;
