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
export var YAxisNotesIconComponentGenerated = (function (_super) {
    __extends(YAxisNotesIconComponentGenerated, _super);
    function YAxisNotesIconComponentGenerated(configurationService) {
        _super.call(this, 'notes.icon', configurationService);
        this.configurationService = configurationService;
    }
    YAxisNotesIconComponentGenerated.propDecorators = {
        'background': [{ type: Input },],
        'border': [{ type: Input },],
        'size': [{ type: Input },],
        'type': [{ type: Input },],
        'visible': [{ type: Input },],
    };
    return YAxisNotesIconComponentGenerated;
}(SettingsComponent));
