"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var notes_label_component_1 = require('../../../chart/category-axis-item/notes.label.component');
/**
 * The label of the notes.
 */
var NavigatorCategoryAxisNotesLabelComponent = (function (_super) {
    __extends(NavigatorCategoryAxisNotesLabelComponent, _super);
    function NavigatorCategoryAxisNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisNotesLabelComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisNotesLabelComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisNotesLabelComponent;
}(notes_label_component_1.CategoryAxisNotesLabelComponent));
exports.NavigatorCategoryAxisNotesLabelComponent = NavigatorCategoryAxisNotesLabelComponent;
