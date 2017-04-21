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
export var SeriesHighlightComponentGenerated = (function (_super) {
    __extends(SeriesHighlightComponentGenerated, _super);
    function SeriesHighlightComponentGenerated(configurationService) {
        _super.call(this, 'highlight', configurationService);
        this.configurationService = configurationService;
    }
    SeriesHighlightComponentGenerated.propDecorators = {
        'border': [{ type: Input },],
        'color': [{ type: Input },],
        'line': [{ type: Input },],
        'opacity': [{ type: Input },],
        'toggle': [{ type: Input },],
        'visible': [{ type: Input },],
        'visual': [{ type: Input },],
    };
    return SeriesHighlightComponentGenerated;
}(SettingsComponent));
