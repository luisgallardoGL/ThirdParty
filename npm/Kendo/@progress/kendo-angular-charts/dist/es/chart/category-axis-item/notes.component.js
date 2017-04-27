var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { CategoryAxisNotesComponentGenerated } from '../category-axis-item/notes.component.generated';
/**
 * The category axis notes configuration.
 */
export var CategoryAxisNotesComponent = (function (_super) {
    __extends(CategoryAxisNotesComponent, _super);
    // Place custom properties here
    function CategoryAxisNotesComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisNotesComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-category-axis-item-notes',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisNotesComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return CategoryAxisNotesComponent;
}(CategoryAxisNotesComponentGenerated));
