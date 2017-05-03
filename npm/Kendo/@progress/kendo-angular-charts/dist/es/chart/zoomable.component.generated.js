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
export var ZoomableComponentGenerated = (function (_super) {
    __extends(ZoomableComponentGenerated, _super);
    function ZoomableComponentGenerated(configurationService) {
        _super.call(this, 'zoomable', configurationService);
        this.configurationService = configurationService;
    }
    ZoomableComponentGenerated.propDecorators = {
        'mousewheel': [{ type: Input },],
        'selection': [{ type: Input },],
    };
    return ZoomableComponentGenerated;
}(SettingsComponent));
