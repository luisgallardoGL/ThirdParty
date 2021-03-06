"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../../common/configuration.service');
var notes_label_component_1 = require('../../../chart/series-item/notes.label.component');
/**
 * The label of the notes.
 */
var NavigatorSeriesNotesLabelComponent = (function (_super) {
    __extends(NavigatorSeriesNotesLabelComponent, _super);
    function NavigatorSeriesNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesNotesLabelComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesNotesLabelComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return NavigatorSeriesNotesLabelComponent;
}(notes_label_component_1.SeriesNotesLabelComponent));
exports.NavigatorSeriesNotesLabelComponent = NavigatorSeriesNotesLabelComponent;
