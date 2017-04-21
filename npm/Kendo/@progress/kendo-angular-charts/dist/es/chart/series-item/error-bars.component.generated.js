var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Input } from '@angular/core';
import { SettingsComponent } from '../../common/settings.component';
/**
 * @hidden
 */
export var SeriesErrorBarsComponentGenerated = (function (_super) {
    __extends(SeriesErrorBarsComponentGenerated, _super);
    function SeriesErrorBarsComponentGenerated(configurationService) {
        _super.call(this, 'errorBars', configurationService);
        this.configurationService = configurationService;
    }
    SeriesErrorBarsComponentGenerated.propDecorators = {
        'color': [{ type: Input },],
        'endCaps': [{ type: Input },],
        'line': [{ type: Input },],
        'value': [{ type: Input },],
        'visual': [{ type: Input },],
        'xValue': [{ type: Input },],
        'yValue': [{ type: Input },],
    };
    return SeriesErrorBarsComponentGenerated;
}(SettingsComponent));
