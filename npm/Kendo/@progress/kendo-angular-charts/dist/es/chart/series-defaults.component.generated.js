var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Input } from '@angular/core';
import { SettingsComponent } from '../common/settings.component';
/**
 * @hidden
 */
export var SeriesDefaultsComponentGenerated = (function (_super) {
    __extends(SeriesDefaultsComponentGenerated, _super);
    function SeriesDefaultsComponentGenerated(configurationService) {
        _super.call(this, 'seriesDefaults', configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsComponentGenerated.propDecorators = {
        'border': [{ type: Input },],
        'gap': [{ type: Input },],
        'overlay': [{ type: Input },],
        'spacing': [{ type: Input },],
        'stack': [{ type: Input },],
        'type': [{ type: Input },],
        'visual': [{ type: Input },],
        'labels': [{ type: Input },],
        'notes': [{ type: Input },],
        'tooltip': [{ type: Input },],
    };
    return SeriesDefaultsComponentGenerated;
}(SettingsComponent));
