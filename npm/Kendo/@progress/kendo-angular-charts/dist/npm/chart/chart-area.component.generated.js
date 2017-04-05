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
var ChartAreaComponentGenerated = (function (_super) {
    __extends(ChartAreaComponentGenerated, _super);
    function ChartAreaComponentGenerated(configurationService) {
        _super.call(this, 'chartArea', configurationService);
        this.configurationService = configurationService;
    }
    ChartAreaComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'margin': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'width': [{ type: core_1.Input },],
    };
    return ChartAreaComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.ChartAreaComponentGenerated = ChartAreaComponentGenerated;
