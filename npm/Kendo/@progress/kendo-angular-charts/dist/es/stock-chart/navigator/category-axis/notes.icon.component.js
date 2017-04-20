var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisNotesIconComponent } from '../../../chart/category-axis-item/notes.icon.component';
/**
 * The icon of the notes.
 */
export var NavigatorCategoryAxisNotesIconComponent = (function (_super) {
    __extends(NavigatorCategoryAxisNotesIconComponent, _super);
    function NavigatorCategoryAxisNotesIconComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisNotesIconComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-notes-icon',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisNotesIconComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisNotesIconComponent;
}(CategoryAxisNotesIconComponent));
