"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../../common/configuration.service');
var tooltip_component_generated_1 = require('../series-item/tooltip.component.generated');
/**
 * The configuration options of the Chart series tooltip.
 *
 * The Chart series tooltip is displayed when the [`series.tooltip.visible`]({% slug api_charts_seriestooltipcomponent_kendouiforangular %}#toc-visible) option is set to `true`.
 */
var SeriesTooltipComponent = (function (_super) {
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
        { type: core_1.Component, args: [{
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-series-item-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    SeriesTooltipComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
    ]; };
    SeriesTooltipComponent.propDecorators = {
        'seriesTooltipTemplate': [{ type: core_1.ContentChild, args: [core_1.TemplateRef,] },],
    };
    return SeriesTooltipComponent;
}(tooltip_component_generated_1.SeriesTooltipComponentGenerated));
exports.SeriesTooltipComponent = SeriesTooltipComponent;
