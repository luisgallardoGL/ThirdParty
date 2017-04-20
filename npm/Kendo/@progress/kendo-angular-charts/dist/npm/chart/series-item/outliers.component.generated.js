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
var SeriesOutliersComponentGenerated = (function (_super) {
    __extends(SeriesOutliersComponentGenerated, _super);
    function SeriesOutliersComponentGenerated(configurationService) {
        _super.call(this, 'outliers', configurationService);
        this.configurationService = configurationService;
    }
    SeriesOutliersComponentGenerated.propDecorators = {
        'background': [{ type: core_1.Input },],
        'border': [{ type: core_1.Input },],
        'rotation': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
    };
    return SeriesOutliersComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.SeriesOutliersComponentGenerated = SeriesOutliersComponentGenerated;
