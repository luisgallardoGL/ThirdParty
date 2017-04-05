var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisNotesComponentGenerated } from '../y-axis-item/notes.component.generated';
/**
 * The Y axis notes configuration.
 */
export var YAxisNotesComponent = (function (_super) {
    __extends(YAxisNotesComponent, _super);
    // Place custom properties here
    function YAxisNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    YAxisNotesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisNotesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return YAxisNotesComponent;
}(YAxisNotesComponentGenerated));
