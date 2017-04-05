"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_service_1 = require('../../common/collection.service');
var configuration_service_1 = require('../../common/configuration.service');
var series_item_component_1 = require('../../chart/series-item.component');
/**
 * The configuration component for a navigator series item.
 */
var NavigatorSeriesItemComponent = (function (_super) {
    __extends(NavigatorSeriesItemComponent, _super);
    function NavigatorSeriesItemComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    NavigatorSeriesItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [configuration_service_1.ConfigurationService],
                    selector: 'kendo-chart-navigator-series-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorSeriesItemComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: collection_service_1.CollectionService, },
    ]; };
    return NavigatorSeriesItemComponent;
}(series_item_component_1.SeriesItemComponent));
exports.NavigatorSeriesItemComponent = NavigatorSeriesItemComponent;
