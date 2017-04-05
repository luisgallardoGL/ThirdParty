var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '../../common/collection.service';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesItemComponent } from '../../chart/series-item.component';
/**
 * The configuration component for a navigator series item.
 */
export var NavigatorSeriesItemComponent = (function (_super) {
    __extends(NavigatorSeriesItemComponent, _super);
    function NavigatorSeriesItemComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    NavigatorSeriesItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [ConfigurationService],
                    selector: 'kendo-chart-navigator-series-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesItemComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: CollectionService, },
    ]; };
    return NavigatorSeriesItemComponent;
}(SeriesItemComponent));
