var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesDefaultsLabelsFromComponentGenerated } from '../series-defaults/labels.from.component.generated';
/**
 * The Chart series from label configuration.
 */
export var SeriesDefaultsLabelsFromComponent = (function (_super) {
    __extends(SeriesDefaultsLabelsFromComponent, _super);
    // Place custom properties here
    function SeriesDefaultsLabelsFromComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    SeriesDefaultsLabelsFromComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-defaults-labels-from',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesDefaultsLabelsFromComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return SeriesDefaultsLabelsFromComponent;
}(SeriesDefaultsLabelsFromComponentGenerated));
