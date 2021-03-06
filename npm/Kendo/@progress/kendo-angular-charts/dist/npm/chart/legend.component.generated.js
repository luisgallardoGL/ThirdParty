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
var LegendComponentGenerated = (function (_super) {
    __extends(LegendComponentGenerated, _super);
    function LegendComponentGenerated(configurationService) {
        _super.call(this, 'legend', configurationService);
        this.configurationService = configurationService;
    }
    LegendComponentGenerated.propDecorators = {
        'align': [{ type: core_1.Input },],
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'labels': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'offsetX': [{ type: core_1.Input },],
        'offsetY': [{ type: core_1.Input },],
        'orientation': [{ type: core_1.Input },],
        'padding': [{ type: core_1.Input },],
        'position': [{ type: core_1.Input },],
        'reverse': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
        'inactiveItems': [{ type: core_1.Input },],
        'item': [{ type: core_1.Input },],
    };
    return LegendComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.LegendComponentGenerated = LegendComponentGenerated;
