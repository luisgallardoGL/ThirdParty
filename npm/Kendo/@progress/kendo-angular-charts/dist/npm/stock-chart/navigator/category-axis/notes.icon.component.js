"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var notes_icon_component_1 = require('../../../chart/category-axis-item/notes.icon.component');
/**
 * The icon of the notes.
 */
var NavigatorCategoryAxisNotesIconComponent = (function (_super) {
    __extends(NavigatorCategoryAxisNotesIconComponent, _super);
    function NavigatorCategoryAxisNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisNotesIconComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisNotesIconComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisNotesIconComponent;
}(notes_icon_component_1.CategoryAxisNotesIconComponent));
exports.NavigatorCategoryAxisNotesIconComponent = NavigatorCategoryAxisNotesIconComponent;
