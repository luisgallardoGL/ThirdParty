import { Border, NoteLabelPosition } from '../../common/property-types';
/**
 * The series.notes.label options.
 */
export interface SeriesNotesLabel {
    /**
     * The background color of the label. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the label.
     */
    border?: Border;
    /**
     * The text color of the label. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The function which returns the label content.
     *
     * The function argument contains a `value` field. It defines the point value.
     *
     * The text can be split into multiple lines by using line feed characters (`"\n"`).
     */
    content?: (e: any) => string;
    /**
     * The font style of the label.
     */
    font?: string;
    /**
     * The format used to display the notes label. Uses the IntlService [`format`]({% slug api_intl_intlservice_kendouiforangular %}#toc-format) method.
     * Contains one placeholder (`"{0}"`) which represents the axis value.
     */
    format?: string;
    /**
     * The position of the labels.
     *
     * - `"inside"`&mdash;The label is positioned inside the icon.
     * - `"outside"`&mdash;The label is positioned outside the icon.
     */
    position?: NoteLabelPosition;
    /**
     * The rotation angle of the label. By default, the label is not rotated.
     */
    rotation?: number;
    /**
     * If set to `true`, the Chart displays the series notes label.
     * By default, the series notes label is visible.
     */
    visible?: boolean;
}
