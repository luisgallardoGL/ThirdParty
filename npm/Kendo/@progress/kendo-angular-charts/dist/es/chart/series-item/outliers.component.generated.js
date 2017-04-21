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
export var SeriesOutliersComponentGenerated = (function (_super) {
    __extends(SeriesOutliersComponentGenerated, _super);
    function SeriesOutliersComponentGenerated(configurationService) {
        _super.call(this, 'outliers', configurationService);
        this.configurationService = configurationService;
    }
    SeriesOutliersComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'rotation': [{ type: Input },],
        'size': [{ type: Input },],
        'type': [{ type: Input },],
    };
    return SeriesOutliersComponentGenerated;
}(SettingsComponent));
