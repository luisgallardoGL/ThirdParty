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
export var AxisDefaultsCrosshairTooltipComponentGenerated = (function (_super) {
    __extends(AxisDefaultsCrosshairTooltipComponentGenerated, _super);
    function AxisDefaultsCrosshairTooltipComponentGenerated(configurationService) {
        _super.call(this, 'axisDefaults.crosshair.tooltip', configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsCrosshairTooltipComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'font': [{ type: Input },],
        'format': [{ type: Input },],
        'padding': [{ type: Input },],
        'visible': [{ type: Input },],
    };
    return AxisDefaultsCrosshairTooltipComponentGenerated;
}(SettingsComponent));
