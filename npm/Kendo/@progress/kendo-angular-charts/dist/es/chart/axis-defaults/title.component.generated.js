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
export var AxisDefaultsTitleComponentGenerated = (function (_super) {
    __extends(AxisDefaultsTitleComponentGenerated, _super);
    function AxisDefaultsTitleComponentGenerated(configurationService) {
        _super.call(this, 'axisDefaults.title', configurationService);
        this.configurationService = configurationService;
    }
    AxisDefaultsTitleComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'font': [{ type: Input },],
        'margin': [{ type: Input },],
        'padding': [{ type: Input },],
        'position': [{ type: Input },],
        'rotation': [{ type: Input },],
        'text': [{ type: Input },],
        'visible': [{ type: Input },],
        'visual': [{ type: Input },],
    };
    return AxisDefaultsTitleComponentGenerated;
}(SettingsComponent));
