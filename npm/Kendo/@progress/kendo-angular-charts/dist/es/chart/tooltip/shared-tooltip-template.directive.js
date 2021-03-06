import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * A directive that selects a [template](https://angular.io/docs/ts/latest/guide/template-syntax.html)
 * within the `<kendo-chart-tooltip>` component to be used for the
 * [shared series tooltip]({% slug tooltips_chart_charts_kendouiforangular %}#toc-shared-tooltip).
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-tooltip [shared]="true">
 *         <template kendoChartSharedTooltipTemplate let-category="category" let-points="points">
 *             <div> {{ category }} </div>
 *             <div *ngFor="let point of points">
 *                 {{ point.series.name }} : {{ point.value }}
 *             </div>
 *         </template>
 *       </kendo-chart-tooltip>
 *       <kendo-chart-category-axis>
 *         <kendo-chart-category-axis-item [categories]="['A', 'B', 'C']">
 *         </kendo-chart-category-axis-item>
 *       </kendo-chart-category-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item name="A" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item name="B" [data]="[1, 2, 3]">
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
export var SharedTooltipTemplateDirective = (function () {
    function SharedTooltipTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    SharedTooltipTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoChartSharedTooltipTemplate]'
                },] },
    ];
    /** @nocollapse */
    SharedTooltipTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, decorators: [{ type: Optional },] },
    ]; };
    return SharedTooltipTemplateDirective;
}());
