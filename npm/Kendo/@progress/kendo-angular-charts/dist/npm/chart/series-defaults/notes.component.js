"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var notes_component_generated_1 = require('../series-defaults/notes.component.generated');
/**
 * The [`seriesDefaults`]({% slug api_charts_seriesdefaultscomponent_kendouiforangular %}) notes configuration.
 */
var SeriesDefaultsNotesComponent = (function (_super) {
    __extends(SeriesDefaultsNotesComponent, _super);
    // Place custom properties here
    function SeriesDefaultsNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsNotesComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsNotesComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    return SeriesDefaultsNotesComponent;
}(notes_component_generated_1.SeriesDefaultsNotesComponentGenerated));
exports.SeriesDefaultsNotesComponent = SeriesDefaultsNotesComponent;
