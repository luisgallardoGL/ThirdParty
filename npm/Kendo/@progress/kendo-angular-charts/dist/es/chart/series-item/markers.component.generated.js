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
export var SeriesMarkersComponentGenerated = (function (_super) {
    __extends(SeriesMarkersComponentGenerated, _super);
    function SeriesMarkersComponentGenerated(configurationService) {
        _super.call(this, 'markers', configurationService);
        this.configurationService = configurationService;
    }
    SeriesMarkersComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'rotation': [{ type: Input },],
        'size': [{ type: Input },],
        'type': [{ type: Input },],
        'visible': [{ type: Input },],
        'visual': [{ type: Input },],
    };
    return SeriesMarkersComponentGenerated;
}(SettingsComponent));
