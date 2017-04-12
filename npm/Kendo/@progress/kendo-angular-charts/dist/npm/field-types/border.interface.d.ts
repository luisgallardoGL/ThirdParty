import { DashType } from './dash-type';
/**
 * Appearance settings for the border lines.
 */
export interface Border {
    /**
     * The color of the border line. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The dash type of the border line.
     */
    dashType?: DashType;
    /**
     * The width of the border line in pixels.
     */
    width?: number;
}
