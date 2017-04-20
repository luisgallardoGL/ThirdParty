var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsNotesIconComponentGenerated } from '../series-defaults/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
export var SeriesDefaultsNotesIconComponent = (function (_super) {
    __extends(SeriesDefaultsNotesIconComponent, _super);
    // Place custom properties here
    function SeriesDefaultsNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsNotesIconComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsNotesIconComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesDefaultsNotesIconComponent;
}(SeriesDefaultsNotesIconComponentGenerated));
