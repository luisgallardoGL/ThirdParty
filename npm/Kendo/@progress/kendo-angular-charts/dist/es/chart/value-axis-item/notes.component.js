var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { ValueAxisNotesComponentGenerated } from '../value-axis-item/notes.component.generated';
/**
 * The value axis notes configuration.
 */
export var ValueAxisNotesComponent = (function (_super) {
    __extends(ValueAxisNotesComponent, _super);
    // Place custom properties here
    function ValueAxisNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisNotesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-value-axis-item-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ValueAxisNotesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return ValueAxisNotesComponent;
}(ValueAxisNotesComponentGenerated));
