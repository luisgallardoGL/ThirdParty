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
var PlotAreaComponentGenerated = (function (_super) {
    __extends(PlotAreaComponentGenerated, _super);
    function PlotAreaComponentGenerated(configurationService) {
        _super.call(this, 'plotArea', configurationService);
        this.configurationService = configurationService;
    }
    PlotAreaComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'padding': [{ type: core_1.Input },],
    };
    return PlotAreaComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.PlotAreaComponentGenerated = PlotAreaComponentGenerated;
