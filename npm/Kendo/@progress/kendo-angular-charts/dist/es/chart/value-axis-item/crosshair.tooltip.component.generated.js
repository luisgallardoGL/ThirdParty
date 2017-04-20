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
export var ValueAxisCrosshairTooltipComponentGenerated = (function (_super) {
    __extends(ValueAxisCrosshairTooltipComponentGenerated, _super);
    function ValueAxisCrosshairTooltipComponentGenerated(configurationService) {
        _super.call(this, 'crosshair.tooltip', configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisCrosshairTooltipComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'font': [{ type: Input },],
        'format': [{ type: Input },],
        'padding': [{ type: Input },],
        'visible': [{ type: Input },],
    };
    return ValueAxisCrosshairTooltipComponentGenerated;
}(SettingsComponent));
