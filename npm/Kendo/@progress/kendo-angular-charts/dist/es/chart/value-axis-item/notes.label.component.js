var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisNotesLabelComponentGenerated } from '../value-axis-item/notes.label.component.generated';
/**
 * The label of the notes.
 */
export var ValueAxisNotesLabelComponent = (function (_super) {
    __extends(ValueAxisNotesLabelComponent, _super);
    // Place custom properties here
    function ValueAxisNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisNotesLabelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-value-axis-item-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ValueAxisNotesLabelComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return ValueAxisNotesLabelComponent;
}(ValueAxisNotesLabelComponentGenerated));
