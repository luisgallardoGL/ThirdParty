"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('../common/configuration.service');
var tooltip_component_generated_1 = require('./tooltip.component.generated');
var series_tooltip_template_directive_1 = require('./tooltip/series-tooltip-template.directive');
var shared_tooltip_template_directive_1 = require('./tooltip/shared-tooltip-template.directive');
var tooltip_template_service_1 = require('../common/tooltip-template.service');
/**
 * The configuration options of the Chart series tooltip.
 */
var TooltipComponent = (function (_super) {
    __extends(TooltipComponent, _super);
    function TooltipComponent(configurationService, templateService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.templateService = templateService;
        this.hiddenByDefault = true;
        configurationService.notify(new configuration_service_1.Change("tooltip.visible", true));
    }
    TooltipComponent.prototype.ngAfterContentChecked = function () {
        this.templateService.setTemplate(this.seriesTooltipTemplate ? this.seriesTooltipTemplate.templateRef : null);
        this.templateService.setSharedTemplate(this.sharedTooltipTemplate ? this.sharedTooltipTemplate.templateRef : null);
    };
    TooltipComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'kendo-chart-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: tooltip_template_service_1.TooltipTemplateService, },
    ]; };
    TooltipComponent.propDecorators = {
        'seriesTooltipTemplate': [{ type: core_1.ContentChild, args: [series_tooltip_template_directive_1.SeriesTooltipTemplateDirective,] },],
        'sharedTooltipTemplate': [{ type: core_1.ContentChild, args: [shared_tooltip_template_directive_1.SharedTooltipTemplateDirective,] },],
    };
    return TooltipComponent;
}(tooltip_component_generated_1.TooltipComponentGenerated));
exports.TooltipComponent = TooltipComponent;
