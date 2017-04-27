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
var SeriesDefaultsTooltipComponentGenerated = (function (_super) {
    __extends(SeriesDefaultsTooltipComponentGenerated, _super);
    function SeriesDefaultsTooltipComponentGenerated(configurationService) {
        _super.call(this, 'seriesDefaults.tooltip', configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsTooltipComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'color': [{ type: core_1.Input },],
        'font': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'padding': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
    };
    return SeriesDefaultsTooltipComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesDefaultsTooltipComponentGenerated = SeriesDefaultsTooltipComponentGenerated;
