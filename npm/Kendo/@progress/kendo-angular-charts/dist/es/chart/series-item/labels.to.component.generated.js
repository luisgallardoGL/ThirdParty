var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Input } from '@angular/core';
import { SettingsComponent } from '../../common/settings.component';
/**
 * @hidden
 */
var SeriesLabelsToComponentGenerated = (function (_super) {
    __extends(SeriesLabelsToComponentGenerated, _super);
    function SeriesLabelsToComponentGenerated(configurationService) {
        var _this = _super.call(this, 'labels.to', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    return SeriesLabelsToComponentGenerated;
}(SettingsComponent));
export { SeriesLabelsToComponentGenerated };
SeriesLabelsToComponentGenerated.propDecorators = {
    'background': [{ type: Input },],
    'border': [{ type: Input },],
    'color': [{ type: Input },],
    'content': [{ type: Input },],
    'font': [{ type: Input },],
    'format': [{ type: Input },],
    'margin': [{ type: Input },],
    'padding': [{ type: Input },],
    'position': [{ type: Input },],
    'visible': [{ type: Input },],
};