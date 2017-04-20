var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisNotesIconComponentGenerated } from '../category-axis-item/notes.icon.component.generated';
/**
 * The icon of the notes.
 */
export var CategoryAxisNotesIconComponent = (function (_super) {
    __extends(CategoryAxisNotesIconComponent, _super);
    // Place custom properties here
    function CategoryAxisNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisNotesIconComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-category-axis-item-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisNotesIconComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return CategoryAxisNotesIconComponent;
}(CategoryAxisNotesIconComponentGenerated));
