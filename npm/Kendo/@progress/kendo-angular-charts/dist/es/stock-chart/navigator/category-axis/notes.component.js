var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { CategoryAxisNotesComponent } from '../../../chart/category-axis-item/notes.component';
/**
 * The notes configuration of the category axis.
 */
export var NavigatorCategoryAxisNotesComponent = (function (_super) {
    __extends(NavigatorCategoryAxisNotesComponent, _super);
    function NavigatorCategoryAxisNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorCategoryAxisNotesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-category-axis-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorCategoryAxisNotesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorCategoryAxisNotesComponent;
}(CategoryAxisNotesComponent));
