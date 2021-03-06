import { ChartComponent } from '../chart.component';
import { drawing } from '@progress/kendo-drawing';
/**
 * The context for the legend item visual function.
 */
export interface LegendItemVisualArgs {
    /**
     * A function that can be used to get the default visual.
     */
    createVisual: () => drawing.Element;
    /**
     * The legend item options.
     */
    options: any;
    /**
     * The index of the point in the series.
     *
     * Available for the Donut, Pie, and Funnel series.
     */
    pointIndex: any;
    /**
     * The instance of the Chart component.
     */
    sender: ChartComponent;
    /**
     * The item series.
     */
    series: any;
}
