"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var notes_icon_component_generated_1 = require('../y-axis-item/notes.icon.component.generated');
/**
 * The icon of the notes.
 */
var YAxisNotesIconComponent = (function (_super) {
    __extends(YAxisNotesIconComponent, _super);
    // Place custom properties here
    function YAxisNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    YAxisNotesIconComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisNotesIconComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return YAxisNotesIconComponent;
}(notes_icon_component_generated_1.YAxisNotesIconComponentGenerated));
exports.YAxisNotesIconComponent = YAxisNotesIconComponent;
