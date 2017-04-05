var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesNotesIconComponentGenerated } from '../series-item/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
export var SeriesNotesIconComponent = (function (_super) {
    __extends(SeriesNotesIconComponent, _super);
    // Place custom properties here
    function SeriesNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    SeriesNotesIconComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesNotesIconComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesNotesIconComponent;
}(SeriesNotesIconComponentGenerated));
