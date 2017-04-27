"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var notes_icon_component_generated_1 = require('../series-defaults/notes.icon.component.generated');
/**
 * The icon of the notes.
 */
var SeriesDefaultsNotesIconComponent = (function (_super) {
    __extends(SeriesDefaultsNotesIconComponent, _super);
    // Place custom properties here
    function SeriesDefaultsNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsNotesIconComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsNotesIconComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesDefaultsNotesIconComponent;
}(notes_icon_component_generated_1.SeriesDefaultsNotesIconComponentGenerated));
exports.SeriesDefaultsNotesIconComponent = SeriesDefaultsNotesIconComponent;
