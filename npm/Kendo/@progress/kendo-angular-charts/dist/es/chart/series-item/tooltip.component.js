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
import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesTooltipComponentGenerated } from '../series-item/tooltip.component.generated';
/**
 * The configuration options of the Chart series tooltip.
 *
 * The Chart series tooltip is displayed when the [`series.tooltip.visible`]({% slug api_charts_seriestooltipcomponent_kendouiforangular %}#toc-visible) option is set to `true`.
 */
var SeriesTooltipComponent = (function (_super) {
    __extends(SeriesTooltipComponent, _super);
    function SeriesTooltipComponent(configurationService) {
        var _this = _super.call(this, configurationService) || this;
        _this.configurationService = configurationService;
        _this.hiddenByDefault = true;
        return _this;
    }
    Object.defineProperty(SeriesTooltipComponent.prototype, "seriesTooltipTemplateRef", {
        get: function () {
            return this.seriesTooltipTemplate;
        },
        enumerable: true,
        configurable: true
    });
    return SeriesTooltipComponent;
}(SeriesTooltipComponentGenerated));
export { SeriesTooltipComponent };
SeriesTooltipComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'kendo-chart-series-item-tooltip',
                template: ''
            },] },
];
/** @nocollapse */
SeriesTooltipComponent.ctorParameters = function () { return [
    { type: ConfigurationService, },
]; };
SeriesTooltipComponent.propDecorators = {
    'seriesTooltipTemplate': [{ type: ContentChild, args: [TemplateRef,] },],
};