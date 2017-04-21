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
export var CategoryAxisNotesComponentGenerated = (function (_super) {
    __extends(CategoryAxisNotesComponentGenerated, _super);
    function CategoryAxisNotesComponentGenerated(configurationService) {
        _super.call(this, 'notes', configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisNotesComponentGenerated.propDecorators = {
        'data': [{ type: Input },],
        'line': [{ type: Input },],
        'position': [{ type: Input },],
        'visual': [{ type: Input },],
        'icon': [{ type: Input },],
        'label': [{ type: Input },],
    };
    return CategoryAxisNotesComponentGenerated;
}(SettingsComponent));
