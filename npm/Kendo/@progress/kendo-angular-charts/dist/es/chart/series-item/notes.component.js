var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesNotesComponentGenerated } from '../series-item/notes.component.generated';
/**
 * The series notes configuration.
 */
export var SeriesNotesComponent = (function (_super) {
    __extends(SeriesNotesComponent, _super);
    // Place custom properties here
    function SeriesNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesNotesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesNotesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesNotesComponent;
}(SeriesNotesComponentGenerated));
