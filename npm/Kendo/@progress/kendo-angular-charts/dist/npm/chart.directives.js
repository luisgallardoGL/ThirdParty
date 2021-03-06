"use strict";
var chart_component_1 = require('./chart.component');
exports.ChartComponent = chart_component_1.ChartComponent;
var series_tooltip_template_directive_1 = require('./chart/tooltip/series-tooltip-template.directive');
var shared_tooltip_template_directive_1 = require('./chart/tooltip/shared-tooltip-template.directive');
var crosshair_tooltip_component_1 = require('./chart/tooltip/crosshair-tooltip.component');
var crosshair_tooltips_container_component_1 = require('./chart/tooltip/crosshair-tooltips-container.component');
var tooltip_popup_component_1 = require('./chart/tooltip/tooltip-popup.component');
var chart_directives_generated_1 = require('./chart.directives.generated');
// Re-exports
/**
 * @hidden
 */
exports.CHART_DIRECTIVES = [
    chart_component_1.ChartComponent,
    tooltip_popup_component_1.TooltipPopupComponent,
    series_tooltip_template_directive_1.SeriesTooltipTemplateDirective,
    shared_tooltip_template_directive_1.SharedTooltipTemplateDirective,
    crosshair_tooltips_container_component_1.CrosshairTooltipsContainerComponent,
    crosshair_tooltip_component_1.CrosshairTooltipComponent
].concat(chart_directives_generated_1.CHART_DIRECTIVES_GENERATED);
