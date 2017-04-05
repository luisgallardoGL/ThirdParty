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
export var SeriesDefaultsLabelsFromComponentGenerated = (function (_super) {
    __extends(SeriesDefaultsLabelsFromComponentGenerated, _super);
    function SeriesDefaultsLabelsFromComponentGenerated(configurationService) {
        _super.call(this, 'seriesDefaults.labels.from', configurationService);
        this.configurationService = configurationService;
    }
    SeriesDefaultsLabelsFromComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'content': [{ type: Input },],
        'font': [{ type: Input },],
        'format': [{ type: Input },],
        'margin': [{ type: Input },],
        'padding': [{ type: Input },],
        'visible': [{ type: Input },],
    };
    return SeriesDefaultsLabelsFromComponentGenerated;
}(SettingsComponent));
