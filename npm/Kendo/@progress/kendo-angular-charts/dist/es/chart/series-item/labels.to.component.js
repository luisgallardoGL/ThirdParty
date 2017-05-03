var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesLabelsToComponentGenerated } from '../series-item/labels.to.component.generated';
/**
 * The Chart series to label configuration.
 */
export var SeriesLabelsToComponent = (function (_super) {
    __extends(SeriesLabelsToComponent, _super);
    // Place custom properties here
    function SeriesLabelsToComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesLabelsToComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-labels-to',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesLabelsToComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesLabelsToComponent;
}(SeriesLabelsToComponentGenerated));
