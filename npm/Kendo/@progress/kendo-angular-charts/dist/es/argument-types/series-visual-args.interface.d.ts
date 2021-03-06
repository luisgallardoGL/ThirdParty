import { ChartComponent } from '../chart.component';
import { drawing, geometry } from '@progress/kendo-drawing';
/**
 * The context for the series point visual function.
 */
export interface SeriesVisualArgs {
    /**
     * The point category.
     */
    category: any;
    /**
     * A function that can be used to get the default visual.
     */
    createVisual: () => drawing.Element;
    /**
     * The segment center point.
     *
     * Available for the `donut` and `pie` series.
     */
    center?: geometry.Point;
    /**
     * The point data item.
     */
    dataItem: any;
    /**
     * The segment end angle.
     *
     * Available for the Donut and Pie series.
     */
    endAngle?: number;
    /**
     * The segment inner radius.
     *
     * Available for the Donut and Pie series.
     */
    innerRadius?: number;
    /**
     * The point options.
     */
    options: any;
    /**
     * The point value represented as a percentage value.
     * Available only for the Donut, Pie, and 100% stacked charts.
     */
    percentage?: number;
    /**
     * The segment points.
     *
     * Available for the Donut and Pie series.
     */
    points?: geometry.Point[];
    /**
     * The segment radius.
     *
     * Available for the Donut and Pie series.
     */
    radius?: number;
    /**
     * The rectangle that defines the normal position of the visual.
     */
    rect: geometry.Rect;
    /**
     * The sum of point values since the last `runningTotal`
     * summary point.
     *
     * Available for the Waterfall series.
     */
    runningTotal?: number;
    /**
     * The instance of the Chart component.
     */
    sender: ChartComponent;
    /**
     * The point series.
     */
    series: any;
    /**
     * The segment start angle.
     *
     * Available for the Donut and Pie series.
     */
    startAngle?: number;
    /**
     * The sum of all previous series values.
     *
     * Available for the Waterfall series.
     */
    total?: number;
    /**
     * The point value.
     */
    value: any;
}
