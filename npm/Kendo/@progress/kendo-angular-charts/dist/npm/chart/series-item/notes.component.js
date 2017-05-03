"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var notes_component_generated_1 = require('../series-item/notes.component.generated');
/**
 * The series notes configuration.
 */
var SeriesNotesComponent = (function (_super) {
    __extends(SeriesNotesComponent, _super);
    // Place custom properties here
    function SeriesNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesNotesComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesNotesComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesNotesComponent;
}(notes_component_generated_1.SeriesNotesComponentGenerated));
exports.SeriesNotesComponent = SeriesNotesComponent;
