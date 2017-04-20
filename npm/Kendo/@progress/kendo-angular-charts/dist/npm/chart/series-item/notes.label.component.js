"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var notes_label_component_generated_1 = require('../series-item/notes.label.component.generated');
/**
 * The label of the notes.
 */
var SeriesNotesLabelComponent = (function (_super) {
    __extends(SeriesNotesLabelComponent, _super);
    // Place custom properties here
    function SeriesNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesNotesLabelComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesNotesLabelComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesNotesLabelComponent;
}(notes_label_component_generated_1.SeriesNotesLabelComponentGenerated));
exports.SeriesNotesLabelComponent = SeriesNotesLabelComponent;
