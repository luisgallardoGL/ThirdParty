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
var ValueAxisTitleComponentGenerated = (function (_super) {
    __extends(ValueAxisTitleComponentGenerated, _super);
    function ValueAxisTitleComponentGenerated(configurationService) {
        _super.call(this, 'title', configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisTitleComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'font': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'padding': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'rotation': [{ type: core_1.Input },],
        'text': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'visual': [{ type: core_1.Input },],
    };
    return ValueAxisTitleComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.ValueAxisTitleComponentGenerated = ValueAxisTitleComponentGenerated;
