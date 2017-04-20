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
export var ValueAxisLabelsComponentGenerated = (function (_super) {
    __extends(ValueAxisLabelsComponentGenerated, _super);
    function ValueAxisLabelsComponentGenerated(configurationService) {
        _super.call(this, 'labels', configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisLabelsComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'content': [{ type: Input },],
        'font': [{ type: Input },],
        'format': [{ type: Input },],
        'margin': [{ type: Input },],
        'mirror': [{ type: Input },],
        'padding': [{ type: Input },],
        'rotation': [{ type: Input },],
        'skip': [{ type: Input },],
        'step': [{ type: Input },],
        'visible': [{ type: Input },],
        'visual': [{ type: Input },],
    };
    return ValueAxisLabelsComponentGenerated;
}(SettingsComponent));
