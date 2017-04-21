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
export var ValueAxisNotesLabelComponentGenerated = (function (_super) {
    __extends(ValueAxisNotesLabelComponentGenerated, _super);
    function ValueAxisNotesLabelComponentGenerated(configurationService) {
        _super.call(this, 'notes.label', configurationService);
        this.configurationService = configurationService;
    }
    ValueAxisNotesLabelComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'content': [{ type: Input },],
        'font': [{ type: Input },],
        'format': [{ type: Input },],
        'position': [{ type: Input },],
        'rotation': [{ type: Input },],
        'visible': [{ type: Input },],
    };
    return ValueAxisNotesLabelComponentGenerated;
}(SettingsComponent));
