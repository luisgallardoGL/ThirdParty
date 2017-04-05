var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsLabelsComponentGenerated } from '../series-defaults/labels.component.generated';
/**
 * The Chart series label configuration.
 */
export var SeriesDefaultsLabelsComponent = (function (_super) {
    __extends(SeriesDefaultsLabelsComponent, _super);
    // Place custom properties here
    function SeriesDefaultsLabelsComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesDefaultsLabelsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-labels',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsLabelsComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesDefaultsLabelsComponent;
}(SeriesDefaultsLabelsComponentGenerated));
