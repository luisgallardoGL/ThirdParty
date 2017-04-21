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
var CategoryAxisSelectComponentGenerated = (function (_super) {
    __extends(CategoryAxisSelectComponentGenerated, _super);
    function CategoryAxisSelectComponentGenerated(configurationService) {
        _super.call(this, 'select', configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisSelectComponentGenerated.propDecorators = {
        'from': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'mousewheel': [{ type: core_1.Input },],
        'to': [{ type: core_1.Input },],
    };
    return CategoryAxisSelectComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.CategoryAxisSelectComponentGenerated = CategoryAxisSelectComponentGenerated;
