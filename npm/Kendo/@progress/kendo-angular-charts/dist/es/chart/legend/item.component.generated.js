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
export var LegendItemComponentGenerated = (function (_super) {
    __extends(LegendItemComponentGenerated, _super);
    function LegendItemComponentGenerated(configurationService) {
        _super.call(this, 'legend.item', configurationService);
        this.configurationService = configurationService;
    }
    LegendItemComponentGenerated.propDecorators = {
        'cursor': [{ type: Input },],
        'visual': [{ type: Input },],
    };
    return LegendItemComponentGenerated;
}(SettingsComponent));
