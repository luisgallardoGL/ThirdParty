import { drawing } from '@progress/kendo-drawing';
import { AxisLabelVisualArgs, Border, LabelRotation, Margin } from '../../common/property-types';
import { Padding } from '../../common/property-types';
/**
 * The valueAxis.labels options.
 */
export interface ValueAxisLabels {
    /**
     * The background color of the labels. Accepts a valid CSS color string, including hex and rgb.
     */
    background?: string;
    /**
     * The border of the labels.
     */
    border?: Border;
    /**
     * The text color of the labels. Accepts a valid CSS color string, including hex and rgb.
     */
    color?: string;
    /**
     * The function which returns the label content.
     * The function argument contains a `value` field. It defines the label value.
     * The text can be split into multiple lines by using the line feed characters (`"\n"`).
     */
    content?: (e: any) => string;
    /**
     * The font style of the labels.
     */
    font?: string;
    /**
     * The format used to display the labels. Uses the IntlService [`format`]({% slug api_intl_intlservice_kendouiforangular %}#toc-format) method.
     * Contains one placeholder (`"{0}"`) which represents the category value.
     */
    format?: string;
    /**
     * The margin of the labels. A numeric value sets all margins.
     */
    margin?: Margin | number;
    /**
     * If set to `true`, the Chart mirrors the axis labels and ticks. If the labels are normally on the
     * left side of the axis, the mirroring of the axis renders them to the right.
     */
    mirror?: boolean;
    /**
     * The padding of the labels. A numeric value sets all margins.
     */
    padding?: Padding | number;
    /**
     * The rotation angle (in degrees) of the labels. By default, the labels are not rotated. Angles
     * increase clockwise and zero is to the left. Negative values are acceptable. Can be set to `"auto"` if
     * the axis is horizontal. In this case, the labels will be rotated only if the slot size is not
     * sufficient for the entire labels.
     */
    rotation?: LabelRotation | number | 'auto';
    /**
     * The number of labels to skip. By default, no labels are skipped.
     */
    skip?: number;
    /**
     * The label rendering step.
     * Every n<sup>th</sup> label is rendered where `n` is the step.
     */
    step?: number;
    /**
     * If set to `true`, the Chart displays the value axis labels.
     * By default, the category axis labels are visible.
     */
    visible?: boolean;
    /**
     * A function that can be used to create a custom visual for the labels.
     *
     * The available argument fields are:
     *
     * - `createVisual`&mdash;A function that can be used to get the default visual.
     * - `culture`&mdash;The default culture (if set) on the label.
     * - `format`&mdash;The default format of the label.
     * - `options`&mdash;The label options.
     * - `rect`&mdash;The geometry [`Rect`]({% slug api_kendo-drawing_geometry_rect_kendouiforangular %}) that defines where the visual has to be rendered.
     * - `sender`&mdash;The Chart instance (might be `undefined`).
     * - `text`&mdash;The label text.
     * - `value`&mdash;The category value.
     */
    visual?: (e: AxisLabelVisualArgs) => drawing.Element;
}
