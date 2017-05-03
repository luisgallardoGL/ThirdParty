"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var settings_component_1 = require("../../common/settings.component");
/**
 * @hidden
 */
var SeriesNotesLabelComponentGenerated = (function (_super) {
    __extends(SeriesNotesLabelComponentGenerated, _super);
    function SeriesNotesLabelComponentGenerated(configurationService) {
        var _this = _super.call(this, 'notes.label', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    return SeriesNotesLabelComponentGenerated;
}(settings_component_1.SettingsComponent));
SeriesNotesLabelComponentGenerated.propDecorators = {
    'background': [{ type: core_1.Input },],
    'border': [{ type: core_1.Input },],
    'color': [{ type: core_1.Input },],
    'content': [{ type: core_1.Input },],
    'font': [{ type: core_1.Input },],
    'format': [{ type: core_1.Input },],
    'position': [{ type: core_1.Input },],
    'rotation': [{ type: core_1.Input },],
    'visible': [{ type: core_1.Input },],
};
exports.SeriesNotesLabelComponentGenerated = SeriesNotesLabelComponentGenerated;
