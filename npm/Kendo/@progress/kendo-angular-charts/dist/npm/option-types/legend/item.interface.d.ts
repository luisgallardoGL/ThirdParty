import { drawing } from '@progress/kendo-drawing';
import { LegendItemVisualArgs } from '../../common/property-types';
/**
 * The legend.item options.
 */
export interface LegendItem {
    /**
     * The cursor style of the legend item.
     */
    cursor?: string;
    /**
     * A function that can be used to create a custom visual for the legend items.
     *
     * The available argument fields are:
     *
     * - `options`&mdash;The item options.
     * - `createVisual`&mdash;A function that can be used to get the default visual.
     * - `series`&mdash;The item series.
     * - `pointIndex`&mdash;The index of the point in the series. Available for the Pie, Donut, and Funnel series.
     */
    visual?: (e: LegendItemVisualArgs) => drawing.Element;
}
