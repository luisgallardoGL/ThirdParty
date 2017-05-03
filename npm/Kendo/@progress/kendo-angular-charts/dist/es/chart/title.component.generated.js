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
export var TitleComponentGenerated = (function (_super) {
    __extends(TitleComponentGenerated, _super);
    function TitleComponentGenerated(configurationService) {
        _super.call(this, 'title', configurationService);
        this.configurationService = configurationService;
    }
    TitleComponentGenerated.propDecorators = {
        'align': [{ type: Input },],
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'font': [{ type: Input },],
        'margin': [{ type: Input },],
        'padding': [{ type: Input },],
        'position': [{ type: Input },],
        'text': [{ type: Input },],
        'visible': [{ type: Input },],
    };
    return TitleComponentGenerated;
}(SettingsComponent));
