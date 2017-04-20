"use strict";
var core_1 = require('@angular/core');
/**
 * A directive that selects a [template](https://angular.io/docs/ts/latest/guide/template-syntax.html)
 * within the `<kendo-chart-tooltip>` component to be used for the
 * [series tooltip]({% slug tooltips_chart_charts_kendouiforangular %}#toc-series-tooltip).
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-tooltip>
 *          <template kendoChartSeriesTooltipTemplate let-value="value">
 *             Value is {{value}}
 *           </template>
 *       </kendo-chart-tooltip>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
var SeriesTooltipTemplateDirective = (function () {
    function SeriesTooltipTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    SeriesTooltipTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[kendoChartSeriesTooltipTemplate]'
                },] },
    ];
    /** @nocollapse */
    SeriesTooltipTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
    ]; };
    return SeriesTooltipTemplateDirective;
}());
exports.SeriesTooltipTemplateDirective = SeriesTooltipTemplateDirective;
