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
var LegendInactiveItemsComponentGenerated = (function (_super) {
    __extends(LegendInactiveItemsComponentGenerated, _super);
    function LegendInactiveItemsComponentGenerated(configurationService) {
        _super.call(this, 'legend.inactiveItems', configurationService);
        this.configurationService = configurationService;
    }
    LegendInactiveItemsComponentGenerated.propDecorators = {
        'labels': [{ type: core_1.Input },],
    };
    return LegendInactiveItemsComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.LegendInactiveItemsComponentGenerated = LegendInactiveItemsComponentGenerated;
