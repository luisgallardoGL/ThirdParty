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
var TooltipComponentGenerated = (function (_super) {
    __extends(TooltipComponentGenerated, _super);
    function TooltipComponentGenerated(configurationService) {
        _super.call(this, 'tooltip', configurationService);
        this.configurationService = configurationService;
    }
    TooltipComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'font': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'padding': [{ type: core_1.Input },],
        'shared': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
    };
    return TooltipComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.TooltipComponentGenerated = TooltipComponentGenerated;
