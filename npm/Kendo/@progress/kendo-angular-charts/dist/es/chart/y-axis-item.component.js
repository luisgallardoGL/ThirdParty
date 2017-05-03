var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { YAxisItemComponentGenerated } from './y-axis-item.component.generated';
/**
 * The configuration component for the X axis.
 */
export var YAxisItemComponent = (function (_super) {
    __extends(YAxisItemComponent, _super);
    // Place custom properties here
    function YAxisItemComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    YAxisItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [ConfigurationService],
                    selector: 'kendo-chart-y-axis-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    YAxisItemComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: CollectionService, },
    ]; };
    return YAxisItemComponent;
}(YAxisItemComponentGenerated));
