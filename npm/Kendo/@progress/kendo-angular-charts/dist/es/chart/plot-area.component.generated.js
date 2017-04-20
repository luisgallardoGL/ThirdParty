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
export var PlotAreaComponentGenerated = (function (_super) {
    __extends(PlotAreaComponentGenerated, _super);
    function PlotAreaComponentGenerated(configurationService) {
        _super.call(this, 'plotArea', configurationService);
        this.configurationService = configurationService;
    }
    PlotAreaComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'margin': [{ type: Input },],
        'opacity': [{ type: Input },],
        'padding': [{ type: Input },],
    };
    return PlotAreaComponentGenerated;
}(SettingsComponent));
