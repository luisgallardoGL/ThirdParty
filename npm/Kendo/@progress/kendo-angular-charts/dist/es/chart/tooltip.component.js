var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ContentChild } from '@angular/core';
import { ConfigurationService, Change } from '../common/configuration.service';
import { TooltipComponentGenerated } from './tooltip.component.generated';
import { SeriesTooltipTemplateDirective } from './tooltip/series-tooltip-template.directive';
import { SharedTooltipTemplateDirective } from './tooltip/shared-tooltip-template.directive';
import { TooltipTemplateService } from '../common/tooltip-template.service';
/**
 * The configuration options of the Chart series tooltip.
 */
export var TooltipComponent = (function (_super) {
    __extends(TooltipComponent, _super);
    function TooltipComponent(configurationService, templateService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
        this.templateService = templateService;
        this.hiddenByDefault = true;
        configurationService.notify(new Change("tooltip.visible", true));
    }
    TooltipComponent.prototype.ngAfterContentChecked = function () {
        this.templateService.setTemplate(this.seriesTooltipTemplate ? this.seriesTooltipTemplate.templateRef : null);
        this.templateService.setSharedTemplate(this.sharedTooltipTemplate ? this.sharedTooltipTemplate.templateRef : null);
    };
    TooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kendo-chart-tooltip',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    TooltipComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: TooltipTemplateService, },
    ]; };
    TooltipComponent.propDecorators = {
        'seriesTooltipTemplate': [{ type: ContentChild, args: [SeriesTooltipTemplateDirective,] },],
        'sharedTooltipTemplate': [{ type: ContentChild, args: [SharedTooltipTemplateDirective,] },],
    };
    return TooltipComponent;
}(TooltipComponentGenerated));
