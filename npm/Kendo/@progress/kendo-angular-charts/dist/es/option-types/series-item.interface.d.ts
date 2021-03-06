import { drawing } from '@progress/kendo-drawing';
import { Border, BulletTarget, DashType, LabelConnectors } from '../common/property-types';
import { Margin, NegativeBubbleValues, Overlay, SeriesLine, SeriesType } from '../common/property-types';
import { LineStyle, SeriesStack, SeriesVisualArgs } from '../common/property-types';
import { SeriesErrorBars } from './series-item/error-bars.interface';
import { SeriesExtremes } from './series-item/extremes.interface';
import { SeriesHighlight } from './series-item/highlight.interface';
import { SeriesLabels } from './series-item/labels.interface';
import { SeriesMarkers } from './series-item/markers.interface';
import { SeriesNotes } from './series-item/notes.interface';
import { SeriesOutliers } from './series-item/outliers.interface';
import { SeriesTooltip } from './series-item/tooltip.interface';
/**
 * The series options.
 */
export interface Series {
    /**
     * The aggregate function to apply for date series.
     *
     * This function is used when a category (year, month, or other) contains 2 or more points.
     * The function return value is displayed instead of the individual points.
     *
     * The supported values are:
     *
     * - `"avg"`&mdash;The average of all values for the date period.
     * - `"count"`&mdash;The number of values for the date period.
     * - `"max"`&mdash;The highest value for the date period.
     * - `"min"`&mdash;The lowest value for the date period.
     * - `"sum"`&mdash;The sum of all values for the date period. Defaults to `0` if no data points are defined.
     * - `"sumOrNull"`&mdash;The sum of all values for the date period. Defaults to `null` if no data points are
     * defined.
     * - `"first"`&mdash;The first value.
     * - function(values, series, dataItems, category)&mdash;User-defined aggregate function. Returns a single
     * value or a data item.
     * - object(compound aggregate)&mdash;Applicable to the Candlestick, Box Plot, and OHLC series.
     * Specifies the aggregate for each data item field.
     */
    aggregate?: any;
    /**
     * The name of the value axis to use.
     *
     * The axis option is supported for scatter plots. For more information on scatter plots, refer to
     * [`xAxis`]({% slug api_charts_xaxis_kendouiforangular %}) and [`yAxis`]({% slug api_charts_yaxis_kendouiforangular %}).
     */
    axis?: string;
    /**
     * The border of the Chart series.
     *
     * The border option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bar"`, `"column"`, `"donut"`, `"pie"`, `"bubble"`,
     * `"boxPlot"`, `"candlestick"`, or `"ohlc"`.
     */
    border?: Border;
    /**
     * The name of the category axis to use for the series.
     *
     * If no [`categoryAxis`]({% slug api_charts_categoryaxis_kendouiforangular %}) is specified, the first axis is used.
     */
    categoryAxis?: string;
    /**
     * The data item field which contains the category name or date.
     *
     * If the category is a date, the points are rendered in chronological order.
     */
    categoryField?: string;
    /**
     * The data field containing the close value.
     *
     * The `closeField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"candlestick"` or `"ohlc"`.
     */
    closeField?: string;
    /**
     * The series base color. The supported values are:
     *
     * - CSS color string, including hex and rgb.
     * - function(point)&mdash;A user-defined function that is evaluated for each point. Returning undefined
     * assumes the default series color.
     */
    color?: any;
    /**
     * The data item field which contains the series color.
     *
     * The `colorField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type)
     * is set to `"bar"`, `"column"`, `"rangeBar"`, `"rangeColumn"`, `"bubble"`, `"donut"`, `"pie"`, `"candlestick"`,
     * `"ohlc"`, or `"waterfall"`.
     */
    colorField?: string;
    /**
     * The label connectors options.
     *
     * The connectors option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"donut"` or `"pie"`` and
     * [`series.labels.visible`]({% slug api_charts_serieslabels_kendouiforangular %}#toc-visible) is set to `true`.
     */
    connectors?: LabelConnectors;
    /**
     * The data item field containing the current value.
     *
     * The `currentField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bullet"` or `"verticalBullet"`.
     */
    currentField?: string;
    /**
     * The dash type of line Chart.
     *
     * The `dashType` option is taken into consideration only if the [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) option is set to `"line"`.
     *
     * The following dash types are supported:
     *
     * - `"dash"`&mdash;A line consisting of dashes.
     * - `"dashDot"`&mdash;A line consisting of a repeating pattern of dash-dot.
     * - `"dot"`&mdash;A line consisting of dots.
     * - `"longDash"`&mdash;A line consisting of a repeating pattern of long-dash.
     * - `"longDashDot"`&mdash;A line consisting of a repeating pattern of long-dash-dot.
     * - `"longDashDotDot"`&mdash;A line consisting of a repeating pattern of long-dash-dot-dot.
     * - `"solid"`&mdash;A solid line.
     */
    dashType?: DashType;
    /**
     * The array of data items which represent the series data.
     *
     * Can be set to :
     *
     * - Array of objects. Each point is bound to the field specified through the [`series.field`]({% slug api_charts_series_kendouiforangular %}#toc-field) option.
     * - Array of numbers. Supported when the [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) option is set to `"area"`, `"bar"`, `"column"`,
     * `"donut"`, `"pie"`, `"line"`, or `"waterfall"`.
     * - Array of arrays of numbers. Supported when the [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) option is set to the `"bubble"`, `"scatter"`,
     * `"scatterLine"`, `"ohlc"`, or `"polar"` series.
     * The Bubble series need arrays of three values&mdash;X value, Y value, and Size value&mdash;for example, `[1, 1, 10]Scatter`.
     * The Scatter Line series need arrays of 2 values&mdash;X value and Y valueOHLC. The Candlestick series
     * need arrays of 4 values&mdash;open, high, low, and close.
     */
    data?: any[];
    /**
     * The series color when the open value is greater than the close value.
     *
     * The `downColor` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"candlestick"`.
     */
    downColor?: string;
    /**
     * The data field containing the color applied when the open value is greater than the close value.
     *
     * The `downColorField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"candlestick"`.
     */
    downColorField?: string;
    /**
     * The `dynamicHeight` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"funnel"`.
     *
     * When set to `false`, all segments become with the same height.
     * Otherwise, the height of each segment is based on its value.
     */
    dynamicHeight?: boolean;
    /**
     * The `dynamicSlope` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"funnel"`.
     *
     * When set to `true`, the ratio of the bases of each segment is calculated based on the ratio of
     * `currentDataItem.value`/`nextDataItem.value`.
     * The last element is always created like a rectangle since there is no following element.
     */
    dynamicSlope?: boolean;
    /**
     * The data item field which contains the [`series.errorBars`]({% slug api_charts_series_kendouiforangular %}#toc-errorbars) high value.
     *
     * The `errorHighField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bar"`, `"column"`, `"line"`, or `"area"`.
     */
    errorHighField?: string;
    /**
     * The data item field which contains the [`series.errorBars`]({% slug api_charts_series_kendouiforangular %}#toc-errorbars) low value.
     *
     * The `errorLowField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bar"`, `"column"`, `"line"`, or `"area"`.
     */
    errorLowField?: string;
    /**
     * The data item field which contains a Boolean value indicating whether the sector is exploded.
     *
     * The `explodeField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"donut"` or `"pie"`.
     */
    explodeField?: string;
    /**
     * The data item field which contains the series value.
     */
    field?: string;
    /**
     * The data item field which contains the series from value.
     */
    fromField?: string;
    /**
     * The distance between categories expressed as a percentage of the bar width.
     *
     * See the related spacing setting.
     *
     * The gap option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bar"`, `"column"`, `"candlestick"`, `"ohlc"`,
     * `"radarColumn"`, or `"waterfall"`.
     */
    gap?: number;
    /**
     * The data field containing the high value.
     *
     * The `highField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"candlestick"` or `"ohlc"`.
     */
    highField?: string;
    /**
     * The diameter of the donut hole in pixels.
     *
     * The `holeSize` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"donut"`.
     */
    holeSize?: number;
    /**
     * The Chart line configuration options.
     *
     * The line option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"area"`, `"candlestick"`, `"ohlc"`, or
     * `"waterfall"`.
     */
    line?: SeriesLine;
    /**
     * The data field containing the low value.
     *
     * The `lowField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"candlestick"` or `"ohlc"`.
     */
    lowField?: string;
    /**
     * The data item field which contains the series lower value.
     */
    lowerField?: string;
    /**
     * The margin around each donut series (ring). A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * The maximum size of the chart bubble series marker.
     */
    maxSize?: number;
    /**
     * The data item field which contains the series mean value.
     */
    meanField?: string;
    /**
     * The data item field which contains the series median value.
     */
    medianField?: string;
    /**
     * The minimum size of the Chart bubble series marker.
     */
    minSize?: number;
    /**
     * The behavior for handling missing values. The supported values are:
     *
     * - `"gap"`&mdash;The plot stops before the missing point and continues after it.
     * - `"interpolate"`&mdash;The value is interpolated from neighboring points.
     * - `"zero"`&mdash;The value is assumed to be zero.
     *
     * The default value is `"interpolate"`, except for the `"area"` and stacked series which default to `"zero"`.
     *
     * The `missingValues` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"area"`, `"line"`, `"scatterLine"`,
     * `"radarLine"`, `"radarArea"`, `"polarLine"`, or `"polarArea"`.
     */
    missingValues?: 'gap' | 'interpolate' | 'zero';
    /**
     * The name of the Chart series which is visible in the legend.
     */
    name?: string;
    /**
     * Specifies the top-base/bottom-base ratio of the whole Chart. If the `neckRatio` is set to `3`, it means the top
     * base is 3 times smaller than the bottom base.
     *
     * The `neckRatio` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"funnel"` and `dynamicSlope` is set to `false`.
     */
    neckRatio?: number;
    /**
     * The color to use for the Bar, Column, or Waterfall series with negative values.
     * Accepts a valid CSS color string, including hex and rgb.
     */
    negativeColor?: string;
    /**
     * The options for displaying the Chart negative bubble values.
     */
    negativeValues?: NegativeBubbleValues;
    /**
     * The data item field which contains the series note text.
     */
    noteTextField?: string;
    /**
     * The series opacity. By default, the series are opaque.
     */
    opacity?: number;
    /**
     * The data field containing the open value.
     *
     * The `openField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"candlestick"` or `"ohlc"`.
     */
    openField?: string;
    /**
     * The data item field which contains the series outliers value.
     */
    outliersField?: string;
    /**
     * The Chart series overlay options.
     */
    overlay?: Overlay;
    /**
     * The padding around the Chart (equal on all sides).
     *
     * The padding option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"donut"` or `"pie"`.
     */
    padding?: number;
    /**
     * The data item field which contains the series `q1` value.
     */
    q1Field?: string;
    /**
     * The data item field which contains the series `q3` value.
     */
    q3Field?: string;
    /**
     * The space in pixels between the different segments of the Funnel Chart.
     *
     * The `segmentSpacing` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"funnel"`.
     */
    segmentSpacing?: number;
    /**
     * The radius of the Chart Donut series in pixels. If not set, the available space is split evenly
     * between the series.
     */
    size?: number;
    /**
     * The data field containing the bubble size value.
     */
    sizeField?: string;
    /**
     * The distance between series points within a category. Expressed as a percentage of the bar width.
     *
     * See the related gap setting.
     *
     * The spacing option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bar"`, `"column"`, `"candlestick"`, `"ohlc"`, or
     * `"radarColumn"`.
     */
    spacing?: number;
    /**
     * A Boolean value indicating if the series have to be stacked.
     * A string value is interpreted as [`series.stack.group`]({% slug api_charts_seriesstack_kendouiforangular %}#toc-group).
     *
     * The `stack` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bar"`, `"column"`, `"line"`, `"area"`,
     * `"verticalLine"`, `"verticalArea"`, `"radarLine"`, `"radarArea"`, and `"radarColumn"`.
     *
     * If not overridden, the stack settings of the first series are inherited as a default value by the rest of the series.
     */
    stack?: boolean | string | SeriesStack;
    /**
     * The start angle (in degrees) of the first Donut or Pie segment.
     *
     * Angles increase clockwise and zero is to the left. Negative values are acceptable.
     */
    startAngle?: number;
    /**
     * The supported values are:
     *
     * - `"normal"`&mdash;The values will be connected with a straight line.
     * - `"step"`&mdash;The values will be connected with a right-angled line.
     * - `"smooth"`&mdash;The values will be connected with a smooth line.
     *
     * The default value is `"normal"`.
     *
     * The style option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"line"`, `"scatterLine"`, `"radarLine"`, or
     * `"polarLine"`.
     *
     * The step value is only supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"line"`.
     *
     * The smooth options is not supported for stacked area series with missing values.
     */
    style?: LineStyle;
    /**
     * The data item field which contains the summary type for the Waterfall series.
     * Summary columns are optional and can be one of 2 types:
     *
     * - `"runningTotal"`&mdash;Displays the sum of all items since the last `"runningTotal"` point.
     * - `"total"`&mdash;Displays the sum of all previous items.
     *
     * The value (if any) of a data item marked as a summary point will be discarded.
     */
    summaryField?: string;
    /**
     * The configuration options of the target.
     *
     * The target option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bullet"` or `"verticalBullet"`.
     */
    target?: BulletTarget;
    /**
     * The data item field which contains the series to value.
     */
    toField?: string;
    /**
     * The type of the series.
     *
     * The supported values are:
     *
     * - `area`
     * - `bar`
     * - `bubble`
     * - `bullet`
     * - `candlestick`
     * - `column`
     * - `donut`
     * - `funnel`
     * - `horizontalWaterfall`
     * - `line`
     * - `ohlc`
     * - `pie`
     * - `polarArea`
     * - `polarLine`
     * - `polarScatter`
     * - `radarArea`
     * - `radarColumn`
     * - `radarLine`
     * - `rangeBar`
     * - `rangeColumn`
     * - `scatter`
     * - `scatterLine`
     * - `verticalArea`
     * - `verticalBoxPlot`
     * - `verticalBullet`
     * - `verticalLine`
     * - `waterfall`
     */
    type?: SeriesType;
    /**
     * The data item field which contains the series upper value.
     */
    upperField?: string;
    /**
     * Sets the visible property of a Chart series.
     */
    visible?: boolean;
    /**
     * A value indicating whether to show the point category (for Funnel, Donut, and Pie series)
     * or the series name (for other available series types) in the legend.
     */
    visibleInLegend?: boolean;
    /**
     * The data item field which indicates whether to show the point category name in the legend.
     *
     * The `visibleInLegendField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"funnel"`, `"donut"`, or `"pie"`.
     */
    visibleInLegendField?: string;
    /**
     * A function that can be used to create a custom visual for the points. Applicable for the Bar, Column,
     * Pie, Donut, Funnel, Range Bar, Range Column, and Waterfall series.
     *
     * The available argument fields are:
     *
     * - `rect`&mdash;The geometry [`Rect`]({% slug api_kendo-drawing_geometry_rect_kendouiforangular %}) that defines where the visual has to be rendered.
     * - `options`&mdash;The point options.
     * - `createVisual`&mdash;A function that can be used to get the default visual.
     * - `category`&mdash;The point category.
     * - `dataItem`&mdash;The point `dataItem`.
     * - `value`&mdash;The point value.
     * - `stackValue`&mdash;The cumulative point value on the stack. Available only for the stackable series.
     * - `sender`&mdash;The Chart instance.
     * - `series`&mdash;The point series.
     * - `percentage`&mdash;The point value represented as a percentage value. Available only for the Donut, Pie, and
     * 100% Stacked Charts.
     * - `runningTotal`&mdash;The sum of point values since the last `"runningTotal"` summary point. Available for
     * the Waterfall series.
     * - `total`&mdash;The sum of all previous series values. Available for the Waterfall series.
     * - `radius`&mdash;The segment radius. Available for the Donut and Pie series.
     * - `innerRadius`&mdash;The segment inner radius. Available for the Donut series.
     * - `startAngle`&mdash;The segment start angle. Available for the Donut and Pie series.
     * - `endAngle`&mdash;The segment end angle. Available for the Donut and Pie series.
     * - `center`&mdash;The segment center point. Available for the Donut and Pie series.
     * - `points`&mdash;The segment points. Available for the Funnel series.
     */
    visual?: (e: SeriesVisualArgs) => drawing.Element;
    /**
     * The line width.
     *
     * The width option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"line"`, `"scatterLine"`, `"radarLine"`, or
     * `"polarLine"`.
     */
    width?: number;
    /**
     * The name of the X axis to use.
     *
     * The [`xAxis`]({% slug api_charts_xaxis_kendouiforangular %}) option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bubble"`, `"scatter"`, `"scatterLine"`, or `"polar"` series.
     *
     * For the Polar series, the [`xAxis`]({% slug api_charts_xaxis_kendouiforangular %}) range is expressed in degrees.
     */
    xAxis?: string;
    /**
     * The data item field which contains the [`series.errorBars`]({% slug api_charts_series_kendouiforangular %}#toc-errorbars) xAxis high value.
     *
     * The `xErrorHighField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"scatter"``, `"scatterLine"`, or
     * `"bubble"`.
     */
    xErrorHighField?: string;
    /**
     * The data item field which contains the [`series.errorBars`]({% slug api_charts_series_kendouiforangular %}#toc-errorbars) xAxis low value.
     *
     * The `xErrorLowField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"scatter"`, `"scatterLine"`, or
     * `"bubble"`.
     */
    xErrorLowField?: string;
    /**
     * The data item field containing the x value.
     *
     * The `xField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bubble"`, `"scatter"`, `"scatterLine"`, or
     * `"polar"` series.
     */
    xField?: string;
    /**
     * The name of the Y axis to use.
     * Available for the Bubble, Scatter, Scatter Line, and Polar series.
     */
    yAxis?: string;
    /**
     * The data item field which contains the [`series.errorBars`]({% slug api_charts_series_kendouiforangular %}#toc-errorbars) yAxis high value.
     *
     * The `yErrorHighField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"scatter"`, `"scatterLine"`, or
     * `"bubble"`.
     */
    yErrorHighField?: string;
    /**
     * The data item field which contains the [`series.errorBars`]({% slug api_charts_series_kendouiforangular %}#toc-errorbars) yAxis low value.
     *
     * The `yErrorLowField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"scatter"`, `"scatterLine"`, or
     * `"bubble"`.
     */
    yErrorLowField?: string;
    /**
     * The data item field containing the y value.
     *
     * The `yField` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bubble"`, `"scatter"`, or `"scatterLine"`.
     */
    yField?: string;
    /**
     * An optional Z-index that can be used to change the default stacking order of series.
     *
     * The series with the highest Z-index are placed on top.
     *
     * Series with no Z-index use the default stacking order based on the series type.
     * For example, Line series will be on top with the Bar and Area following after.
     */
    zIndex?: number;
    /**
     * The error bars of the Chart series.
     *
     * The `errorBars` option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"bar"`, `"column"`, `"line"`, `"area"`,
     * `"scatter"`, `"scatterLine"`, or `"bubble"`.
     */
    errorBars?: SeriesErrorBars;
    /**
     * The Chart series extremes configuration. Applies to extreme outliers.
     * For more information, refer to [series.outliers]({% slug api_charts_series_kendouiforangular %}#toc-outliers).
     */
    extremes?: SeriesExtremes;
    /**
     * The Chart series highlighting configuration options.
     */
    highlight?: SeriesHighlight;
    /**
     * The Chart series label configuration.
     *
     * The Chart displays the series labels when the [`series.labels.visible`]({% slug api_charts_serieslabels_kendouiforangular %}#toc-visible) option is set to `true`.
     */
    labels?: SeriesLabels;
    /**
     * The Chart series marker configuration.
     *
     * The Chart displays the series labels when the [s`eries.markers.visible`]({% slug api_charts_seriesmarkers_kendouiforangular %}#toc-visible) option is set to `true`.
     * The markers option is supported when [`series.type`]({% slug api_charts_series_kendouiforangular %}#toc-type) is set to `"area"`, `"line"`, `"scatter"`, `"scatterLine"`,
     * `"radarLine"`, `"radarArea"`, `"polarLine"`, `"polarScatter"`, or `"polarArea"`.
     */
    markers?: SeriesMarkers;
    /**
     * The series notes configuration.
     */
    notes?: SeriesNotes;
    /**
     * The Chart series outliers configuration. Applies to mild outliers.
     * For more information, refer to [`series.extremes`]({% slug api_charts_series_kendouiforangular %}#toc-extremes).
     */
    outliers?: SeriesOutliers;
    /**
     * The configuration options of the chart series tooltip.
     *
     * The Chart series tooltip is displayed when the [`series.tooltip.visible`]({% slug api_charts_seriestooltip_kendouiforangular %}#toc-visible) option is set to `true`.
     */
    tooltip?: SeriesTooltip;
}
