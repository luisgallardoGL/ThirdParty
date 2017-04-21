"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var notes_label_component_generated_1 = require('../x-axis-item/notes.label.component.generated');
/**
 * The label of the notes.
 */
var XAxisNotesLabelComponent = (function (_super) {
    __extends(XAxisNotesLabelComponent, _super);
    // Place custom properties here
    function XAxisNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    XAxisNotesLabelComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-x-axis-item-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    XAxisNotesLabelComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return XAxisNotesLabelComponent;
}(notes_label_component_generated_1.XAxisNotesLabelComponentGenerated));
exports.XAxisNotesLabelComponent = XAxisNotesLabelComponent;
