import { ChartComponent } from './chart.component';
import { SeriesTooltipTemplateDirective } from './chart/tooltip/series-tooltip-template.directive';
import { SharedTooltipTemplateDirective } from './chart/tooltip/shared-tooltip-template.directive';
import { CrosshairTooltipComponent } from './chart/tooltip/crosshair-tooltip.component';
import { CrosshairTooltipsContainerComponent } from './chart/tooltip/crosshair-tooltips-container.component';
import { TooltipPopupComponent } from './chart/tooltip/tooltip-popup.component';
import { CHART_DIRECTIVES_GENERATED } from './chart.directives.generated';
// Re-exports
export { ChartComponent };
/**
 * @hidden
 */
export var CHART_DIRECTIVES = [
    ChartComponent,
    TooltipPopupComponent,
    SeriesTooltipTemplateDirective,
    SharedTooltipTemplateDirective,
    CrosshairTooltipsContainerComponent,
    CrosshairTooltipComponent
].concat(CHART_DIRECTIVES_GENERATED);
