/**
 * The series type.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 * import { SeriesType } from '@progress/kendo-angular-charts';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item [type]="seriesType" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 *   public seriesType: SeriesType = "verticalLine";
 * }
 *
 * ```
 */
export declare type SeriesType = 'area' | 'bar' | 'bubble' | 'bullet' | 'candlestick' | 'column' | 'donut' | 'funnel' | 'horizontalWaterfall' | 'line' | 'ohlc' | 'pie' | 'polarArea' | 'polarLine' | 'polarScatter' | 'radarArea' | 'radarColumn' | 'radarLine' | 'rangeBar' | 'rangeColumn' | 'scatter' | 'scatterLine' | 'verticalArea' | 'verticalBoxPlot' | 'verticalBullet' | 'verticalLine' | 'waterfall';
