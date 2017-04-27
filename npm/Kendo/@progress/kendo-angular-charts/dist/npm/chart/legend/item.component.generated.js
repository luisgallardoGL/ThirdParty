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
var LegendItemComponentGenerated = (function (_super) {
    __extends(LegendItemComponentGenerated, _super);
    function LegendItemComponentGenerated(configurationService) {
        _super.call(this, 'legend.item', configurationService);
        this.configurationService = configurationService;
    }
    LegendItemComponentGenerated.propDecorators = {
        'cursor': [{ type: core_1.Input },],
        'visual': [{ type: core_1.Input },],
    };
    return LegendItemComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.LegendItemComponentGenerated = LegendItemComponentGenerated;
