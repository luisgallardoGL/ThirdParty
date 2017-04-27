var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesLabelsComponentGenerated } from '../series-item/labels.component.generated';
/**
 * The Chart series label configuration.
 */
export var SeriesLabelsComponent = (function (_super) {
    __extends(SeriesLabelsComponent, _super);
    // Place custom properties here
    function SeriesLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesLabelsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesLabelsComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesLabelsComponent;
}(SeriesLabelsComponentGenerated));
