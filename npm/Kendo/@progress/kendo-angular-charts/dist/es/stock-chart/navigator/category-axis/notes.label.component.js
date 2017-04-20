var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisNotesLabelComponent } from '../../../chart/category-axis-item/notes.label.component';
/**
 * The label of the notes.
 */
export var NavigatorCategoryAxisNotesLabelComponent = (function (_super) {
    __extends(NavigatorCategoryAxisNotesLabelComponent, _super);
    function NavigatorCategoryAxisNotesLabelComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisNotesLabelComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-notes-label',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisNotesLabelComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisNotesLabelComponent;
}(CategoryAxisNotesLabelComponent));
