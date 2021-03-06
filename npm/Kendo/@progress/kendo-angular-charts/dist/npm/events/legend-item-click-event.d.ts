import { PreventableEvent } from './preventable-event';
import { ChartComponent } from '../chart.component';
import { EventSeriesOptions } from '../api-types/event-series-options.interface';
/**
 * Arguments for the `legendItemClick` event.
 */
export declare class LegendItemClickEvent extends PreventableEvent {
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
     *
     * Applicable only to the Pie, Donut, and
     * Funnel series.
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
     * If called, the series visibility is not toggled
     * as a result of clicking the legend item.
     */
    preventDefault(): void;
}
