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
var AxisDefaultsCrosshairTooltipComponentGenerated = (function (_super) {
    __extends(AxisDefaultsCrosshairTooltipComponentGenerated, _super);
    function AxisDefaultsCrosshairTooltipComponentGenerated(configurationService) {
        _super.call(this, 'axisDefaults.crosshair.tooltip', configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsCrosshairTooltipComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'font': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'padding': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
    };
    return AxisDefaultsCrosshairTooltipComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.AxisDefaultsCrosshairTooltipComponentGenerated = AxisDefaultsCrosshairTooltipComponentGenerated;
