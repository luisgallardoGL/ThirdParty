var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { SeriesNotesLabelComponent } from '../../../chart/series-item/notes.label.component';
/**
 * The label of the notes.
 */
export var NavigatorSeriesNotesLabelComponent = (function (_super) {
    __extends(NavigatorSeriesNotesLabelComponent, _super);
    function NavigatorSeriesNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorSeriesNotesLabelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-series-item-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesNotesLabelComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorSeriesNotesLabelComponent;
}(SeriesNotesLabelComponent));
