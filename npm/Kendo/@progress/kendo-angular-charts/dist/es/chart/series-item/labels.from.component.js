var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesLabelsFromComponentGenerated } from '../series-item/labels.from.component.generated';
/**
 * The Chart series from label configuration.
 */
export var SeriesLabelsFromComponent = (function (_super) {
    __extends(SeriesLabelsFromComponent, _super);
    // Place custom properties here
    function SeriesLabelsFromComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesLabelsFromComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-labels-from',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesLabelsFromComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesLabelsFromComponent;
}(SeriesLabelsFromComponentGenerated));
