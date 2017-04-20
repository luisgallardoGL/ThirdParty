"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var collection_service_1 = require('../common/collection.service');
var configuration_service_1 = require('../common/configuration.service');
var series_item_component_generated_1 = require('./series-item.component.generated');
var tooltip_component_1 = require('./series-item/tooltip.component');
var toggle = function (flag) { return flag === undefined ? false : !flag; };
/**
 * The configuration component for a series item.
 */
var SeriesItemComponent = (function (_super) {
    __extends(SeriesItemComponent, _super);
    function SeriesItemComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    /**
     * Toggles the series visibility and updates the parent Chart
     * without animated transitions.
     */
    SeriesItemComponent.prototype.toggleVisibility = function () {
        this.options.visible = toggle(this.options.visible);
        this.notify();
    };
    /**
     * Toggles the visibility of a point with the given index.
     * Applicable for the Pie, Donut, and Funnel series.
     *
     * @param pointIndex - The zero-based index of the point to toggle.
     */
    SeriesItemComponent.prototype.togglePointVisibility = function (pointIndex) {
        var pv = this.options.pointVisibility = this.options.pointVisibility || {};
        pv[pointIndex] = toggle(pv[pointIndex]);
        this.notify();
    };
    Object.defineProperty(SeriesItemComponent.prototype, "seriesTooltipTemplateRef", {
        get: function () {
            if (this.seriesTooltip) {
                return this.seriesTooltip.seriesTooltipTemplateRef;
            }
        },
        enumerable: true,
        configurable: true
    });
    SeriesItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [configuration_service_1.ConfigurationService],
                    selector: 'kendo-chart-series-item',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesItemComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: collection_service_1.CollectionService, },
    ]; };
    SeriesItemComponent.propDecorators = {
        'seriesTooltip': [{ type: core_1.ContentChild, args: [tooltip_component_1.SeriesTooltipComponent,] },],
    };
    return SeriesItemComponent;
}(series_item_component_generated_1.SeriesItemComponentGenerated));
exports.SeriesItemComponent = SeriesItemComponent;
