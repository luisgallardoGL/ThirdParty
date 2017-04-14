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
var LegendItemComponentGenerated = (function (_super) {
    __extends(LegendItemComponentGenerated, _super);
    function LegendItemComponentGenerated(configurationService) {
        var _this = _super.call(this, 'legend.item', configurationService) || this;
        _this.configurationService = configurationService;
        return _this;
    }
    return LegendItemComponentGenerated;
}(SettingsComponent));
export { LegendItemComponentGenerated };
LegendItemComponentGenerated.propDecorators = {
    'cursor': [{ type: Input },],
    'visual': [{ type: Input },],
};