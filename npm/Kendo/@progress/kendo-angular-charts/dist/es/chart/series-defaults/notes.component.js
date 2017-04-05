var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsNotesComponentGenerated } from '../series-defaults/notes.component.generated';
/**
 * The [`seriesDefaults`]({% slug api_charts_seriesdefaultscomponent_kendouiforangular %}) notes configuration.
 */
export var SeriesDefaultsNotesComponent = (function (_super) {
    __extends(SeriesDefaultsNotesComponent, _super);
    // Place custom properties here
    function SeriesDefaultsNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsNotesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsNotesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesDefaultsNotesComponent;
}(SeriesDefaultsNotesComponentGenerated));
