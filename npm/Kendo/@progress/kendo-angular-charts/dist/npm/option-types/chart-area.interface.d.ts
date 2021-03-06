import { Border, Margin } from '../common/property-types';
/**
 * The chartArea options.
 */
export interface ChartArea {
    /**
     * The background color of the Chart area. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the Chart area.
     */
    border?: Border;
    /**
     * The height of the Chart area.
     */
    height?: number;
    /**
     * The margin of the Chart area. A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * The background opacity of the Chart area. By default, the background is opaque.
     */
    opacity?: number;
    /**
     * The width of the Chart area.
     */
    width?: number;
}
