import { drawing } from '@progress/kendo-drawing';
import { AxisNoteVisualArgs, NoteLine, NotePosition } from '../../common/property-types';
import { XAxisNotesIcon } from './notes.icon.interface';
import { XAxisNotesLabel } from './notes.label.interface';
/**
 * The xAxis.notes options.
 */
export interface XAxisNotes {
    /**
     * The items of the notes.
     */
    data?: any[];
    /**
     * The line of the notes.
     */
    line?: NoteLine;
    /**
     * The position of the x-axis note.
     *
     * - `"top"`&mdash;The note is positioned on the top.
     * - `"bottom"`&mdash;The note is positioned on the bottom.
     * - `"left"`&mdash;The note is positioned on the left.
     * - `"right"`&mdash;The note is positioned on the right.
     */
    position?: NotePosition;
    /**
     * A function that can be used to create a custom visual for the notes.
     *
     * The available argument fields are:
     *
     * - `rect`&mdash;The geometry [`Rect`]({% slug api_kendo-drawing_geometry_rect_kendouiforangular %}) that defines the note target rect.
     * - `sender`&mdash;The chart instance (might be `undefined`).
     * - `options`&mdash;The note options.
     * - `createVisual`&mdash;A function that can be used to get the default visual.
     * - `value`&mdash;The note value.
     */
    visual?: (e: AxisNoteVisualArgs) => drawing.Element;
    /**
     * The icon of the notes.
     */
    icon?: XAxisNotesIcon;
    /**
     * The label of the notes.
     */
    label?: XAxisNotesLabel;
}
