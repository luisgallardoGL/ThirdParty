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
export var LegendInactiveItemsComponentGenerated = (function (_super) {
    __extends(LegendInactiveItemsComponentGenerated, _super);
    function LegendInactiveItemsComponentGenerated(configurationService) {
        _super.call(this, 'legend.inactiveItems', configurationService);
        this.configurationService = configurationService;
    }
    LegendInactiveItemsComponentGenerated.propDecorators = {
        'labels': [{ type: Input },],
    };
    return LegendInactiveItemsComponentGenerated;
}(SettingsComponent));
