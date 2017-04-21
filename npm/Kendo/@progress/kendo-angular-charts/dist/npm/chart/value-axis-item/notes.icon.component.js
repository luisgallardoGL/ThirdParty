"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var notes_icon_component_generated_1 = require('../value-axis-item/notes.icon.component.generated');
/**
 * The icon of the notes.
 */
var ValueAxisNotesIconComponent = (function (_super) {
    __extends(ValueAxisNotesIconComponent, _super);
    // Place custom properties here
    function ValueAxisNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisNotesIconComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-value-axis-item-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ValueAxisNotesIconComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return ValueAxisNotesIconComponent;
}(notes_icon_component_generated_1.ValueAxisNotesIconComponentGenerated));
exports.ValueAxisNotesIconComponent = ValueAxisNotesIconComponent;
