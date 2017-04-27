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
export var SeriesLabelsComponentGenerated = (function (_super) {
    __extends(SeriesLabelsComponentGenerated, _super);
    function SeriesLabelsComponentGenerated(configurationService) {
        _super.call(this, 'labels', configurationService);
        this.configurationService = configurationService;
    }
    SeriesLabelsComponentGenerated.propDecorators = {
        'align': [{ type: Input },],
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'content': [{ type: Input },],
        'distance': [{ type: Input },],
        'font': [{ type: Input },],
        'format': [{ type: Input },],
        'margin': [{ type: Input },],
        'padding': [{ type: Input },],
        'position': [{ type: Input },],
        'visible': [{ type: Input },],
        'visual': [{ type: Input },],
        'from': [{ type: Input },],
        'to': [{ type: Input },],
    };
    return SeriesLabelsComponentGenerated;
}(SettingsComponent));
