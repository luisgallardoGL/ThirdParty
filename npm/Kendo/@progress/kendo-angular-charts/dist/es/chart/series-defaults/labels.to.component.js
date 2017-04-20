var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsLabelsToComponentGenerated } from '../series-defaults/labels.to.component.generated';
/**
 * The Chart series to label configuration.
 */
export var SeriesDefaultsLabelsToComponent = (function (_super) {
    __extends(SeriesDefaultsLabelsToComponent, _super);
    // Place custom properties here
    function SeriesDefaultsLabelsToComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesDefaultsLabelsToComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-labels-to',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsLabelsToComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesDefaultsLabelsToComponent;
}(SeriesDefaultsLabelsToComponentGenerated));
