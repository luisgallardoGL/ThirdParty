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
export var ValueAxisCrosshairComponentGenerated = (function (_super) {
    __extends(ValueAxisCrosshairComponentGenerated, _super);
    function ValueAxisCrosshairComponentGenerated(configurationService) {
        _super.call(this, 'crosshair', configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisCrosshairComponentGenerated.propDecorators = {
        'color': [{ type: Input },],
        'opacity': [{ type: Input },],
        'visible': [{ type: Input },],
        'width': [{ type: Input },],
        'tooltip': [{ type: Input },],
    };
    return ValueAxisCrosshairComponentGenerated;
}(SettingsComponent));
