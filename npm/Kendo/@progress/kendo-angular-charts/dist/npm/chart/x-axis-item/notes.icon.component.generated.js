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
var XAxisNotesIconComponentGenerated = (function (_super) {
    __extends(XAxisNotesIconComponentGenerated, _super);
    function XAxisNotesIconComponentGenerated(configurationService) {
        _super.call(this, 'notes.icon', configurationService);
        this.configurationService = configurationService;
    }
    XAxisNotesIconComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
    };
    return XAxisNotesIconComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.XAxisNotesIconComponentGenerated = XAxisNotesIconComponentGenerated;
