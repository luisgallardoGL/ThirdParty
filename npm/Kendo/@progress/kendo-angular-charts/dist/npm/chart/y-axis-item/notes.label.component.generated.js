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
var YAxisNotesLabelComponentGenerated = (function (_super) {
    __extends(YAxisNotesLabelComponentGenerated, _super);
    function YAxisNotesLabelComponentGenerated(configurationService) {
        _super.call(this, 'notes.label', configurationService);
        this.configurationService = configurationService;
    }
    YAxisNotesLabelComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'content': [{ type: core_1.Input },],
        'font': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'rotation': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
    };
    return YAxisNotesLabelComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.YAxisNotesLabelComponentGenerated = YAxisNotesLabelComponentGenerated;
