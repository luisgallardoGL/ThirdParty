var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { CategoryAxisItemComponentGenerated } from './category-axis-item.component.generated';
/**
 * The configuration component for a category axis.
 */
export var CategoryAxisItemComponent = (function (_super) {
    __extends(CategoryAxisItemComponent, _super);
    function CategoryAxisItemComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    CategoryAxisItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [ConfigurationService],
                    selector: 'kendo-chart-category-axis-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    CategoryAxisItemComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: CollectionService, },
    ]; };
    return CategoryAxisItemComponent;
}(CategoryAxisItemComponentGenerated));
