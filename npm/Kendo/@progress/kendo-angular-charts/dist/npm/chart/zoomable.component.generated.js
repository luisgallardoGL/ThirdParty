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
var ZoomableComponentGenerated = (function (_super) {
    __extends(ZoomableComponentGenerated, _super);
    function ZoomableComponentGenerated(configurationService) {
        _super.call(this, 'zoomable', configurationService);
        this.configurationService = configurationService;
    }
    ZoomableComponentGenerated.propDecorators = {
        'mousewheel': [{ type: core_1.Input },],
        'selection': [{ type: core_1.Input },],
    };
    return ZoomableComponentGenerated;
}(settings_component_1.SettingsComponent));
exports.ZoomableComponentGenerated = ZoomableComponentGenerated;
