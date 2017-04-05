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
export var TooltipComponentGenerated = (function (_super) {
    __extends(TooltipComponentGenerated, _super);
    function TooltipComponentGenerated(configurationService) {
        _super.call(this, 'tooltip', configurationService);
        this.configurationService = configurationService;
    }
    TooltipComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'font': [{ type: Input },],
        'format': [{ type: Input },],
        'opacity': [{ type: Input },],
        'padding': [{ type: Input },],
        'shared': [{ type: Input },],
        'visible': [{ type: Input },],
    };
    return TooltipComponentGenerated;
}(SettingsComponent));
