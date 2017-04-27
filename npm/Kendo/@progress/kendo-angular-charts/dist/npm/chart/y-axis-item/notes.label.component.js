"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var notes_label_component_generated_1 = require('../y-axis-item/notes.label.component.generated');
/**
 * The label of the notes.
 */
var YAxisNotesLabelComponent = (function (_super) {
    __extends(YAxisNotesLabelComponent, _super);
    // Place custom properties here
    function YAxisNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    YAxisNotesLabelComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisNotesLabelComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return YAxisNotesLabelComponent;
}(notes_label_component_generated_1.YAxisNotesLabelComponentGenerated));
exports.YAxisNotesLabelComponent = YAxisNotesLabelComponent;
