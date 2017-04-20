var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { XAxisNotesComponentGenerated } from '../x-axis-item/notes.component.generated';
/**
 * The X-axis notes configuration.
 */
export var XAxisNotesComponent = (function (_super) {
    __extends(XAxisNotesComponent, _super);
    // Place custom properties here
    function XAxisNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    XAxisNotesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-x-axis-item-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    XAxisNotesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return XAxisNotesComponent;
}(XAxisNotesComponentGenerated));
