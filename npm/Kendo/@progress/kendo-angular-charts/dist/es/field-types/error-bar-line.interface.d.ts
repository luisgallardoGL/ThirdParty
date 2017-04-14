import { DashType } from './dash-type';
/**
 * Appearance settings for the error bar lines.
 */
export interface ErrorBarLine {
    /**
     * The dash type of the line.
     */
    dashType?: DashType;
    /**
     * The width of the line in pixels.
     */
    width?: number;
}
