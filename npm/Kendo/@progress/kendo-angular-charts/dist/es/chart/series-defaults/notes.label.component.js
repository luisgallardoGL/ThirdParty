var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsNotesLabelComponentGenerated } from '../series-defaults/notes.label.component.generated';
/**
 * The label of the notes.
 */
export var SeriesDefaultsNotesLabelComponent = (function (_super) {
    __extends(SeriesDefaultsNotesLabelComponent, _super);
    // Place custom properties here
    function SeriesDefaultsNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsNotesLabelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsNotesLabelComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesDefaultsNotesLabelComponent;
}(SeriesDefaultsNotesLabelComponentGenerated));
