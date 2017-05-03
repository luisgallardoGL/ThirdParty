import { drawing } from '@progress/kendo-drawing';
/**
 * A series point.
 */
export interface SeriesPoint {
    /**
     * The point category value. Available only for categorical points(Bar, Line, etc.).
     */
    category?: string | Date | number;
    /**
     * The point dataItem.
     */
    dataItem?: any;
    /**
     * The point options.
     */
    options?: any;
    /**
     * The point value represented as a percentage value. Available only for donut, pie and 100% stacked charts points.
     */
    percentage?: number;
    /**
     * The sum of point values since the last "runningTotal" summary point. Available for waterfall series points.
     */
    runningTotal?: number;
    /**
     * The sum of all previous series values. Available for waterfall series points.
     */
    total?: number;
    /**
     * The point value.
     */
    value?: any;
    /**
     * The Drawing element used to draw the point.
     */
    visual?: drawing.Element;
}
