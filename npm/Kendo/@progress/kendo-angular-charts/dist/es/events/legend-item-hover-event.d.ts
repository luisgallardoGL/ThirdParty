import { PreventableEvent } from './preventable-event';
import { ChartComponent } from '../chart.component';
import { EventSeriesOptions } from '../api-types/event-series-options.interface';
/**
 * Arguments for the `legendItemHover` event.
 */
export declare class LegendItemHoverEvent extends PreventableEvent {
    /**
     * An object containing the series options.
     */
    series: EventSeriesOptions;
    /**
     * The index of the series in the parent Chart.
     */
    seriesIndex: number;
    /**
     * The point index in the series.
     * Applicable only for the Pie, Donut, and Funnel series.
     */
    pointIndex: number;
    /**
     * The text of the legend item.
     */
    text: string;
    /**
     * @hidden
     */
    constructor(e: any, sender: ChartComponent);
    /**
     * If called, the series highlight is not shown as a result of hovering over the legend item.
     */
    preventDefault(): void;
}
