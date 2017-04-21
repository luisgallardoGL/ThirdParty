var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { ValueAxisItemComponentGenerated } from './value-axis-item.component.generated';
/**
 * The configuration component for a value axis.
 */
export var ValueAxisItemComponent = (function (_super) {
    __extends(ValueAxisItemComponent, _super);
    // Place custom properties here
    function ValueAxisItemComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    ValueAxisItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [ConfigurationService],
                    selector: 'kendo-chart-value-axis-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ValueAxisItemComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: CollectionService, },
    ]; };
    return ValueAxisItemComponent;
}(ValueAxisItemComponentGenerated));
