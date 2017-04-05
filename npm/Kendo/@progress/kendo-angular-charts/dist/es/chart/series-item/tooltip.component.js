var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component, ContentChild, TemplateRef } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SeriesTooltipComponentGenerated } from '../series-item/tooltip.component.generated';
/**
 * The configuration options of the Chart series tooltip.
 *
 * The Chart series tooltip is displayed when the [`series.tooltip.visible`]({% slug api_charts_seriestooltipcomponent_kendouiforangular %}#toc-visible) option is set to `true`.
 */
export var SeriesTooltipComponent = (function (_super) {
    __extends(SeriesTooltipComponent, _super);
    function SeriesTooltipComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.hiddenByDefault = true;
    }
    Object.defineProperty(SeriesTooltipComponent.prototype, "seriesTooltipTemplateRef", {
        get: function () {
            return this.seriesTooltipTemplate;
        },
        enumerable: true,
        configurable: true
    });
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
    return SeriesTooltipComponent;
}(SeriesTooltipComponentGenerated));
