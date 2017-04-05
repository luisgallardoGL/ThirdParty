var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { YAxisNotesIconComponentGenerated } from '../y-axis-item/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
export var YAxisNotesIconComponent = (function (_super) {
    __extends(YAxisNotesIconComponent, _super);
    // Place custom properties here
    function YAxisNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    YAxisNotesIconComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-y-axis-item-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisNotesIconComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return YAxisNotesIconComponent;
}(YAxisNotesIconComponentGenerated));
