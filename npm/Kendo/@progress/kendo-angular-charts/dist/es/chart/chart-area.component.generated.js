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
export var ChartAreaComponentGenerated = (function (_super) {
    __extends(ChartAreaComponentGenerated, _super);
    function ChartAreaComponentGenerated(configurationService) {
        _super.call(this, 'chartArea', configurationService);
        this.configurationService = configurationService;
    }
    ChartAreaComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'height': [{ type: Input },],
        'margin': [{ type: Input },],
        'opacity': [{ type: Input },],
        'width': [{ type: Input },],
    };
    return ChartAreaComponentGenerated;
}(SettingsComponent));
