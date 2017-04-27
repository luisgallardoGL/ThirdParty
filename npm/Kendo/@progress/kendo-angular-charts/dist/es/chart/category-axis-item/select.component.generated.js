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
export var CategoryAxisSelectComponentGenerated = (function (_super) {
    __extends(CategoryAxisSelectComponentGenerated, _super);
    function CategoryAxisSelectComponentGenerated(configurationService) {
        _super.call(this, 'select', configurationService);
        this.configurationService = configurationService;
    }
    CategoryAxisSelectComponentGenerated.propDecorators = {
        'from': [{ type: Input },],
        'max': [{ type: Input },],
        'min': [{ type: Input },],
        'mousewheel': [{ type: Input },],
        'to': [{ type: Input },],
    };
    return CategoryAxisSelectComponentGenerated;
}(SettingsComponent));
