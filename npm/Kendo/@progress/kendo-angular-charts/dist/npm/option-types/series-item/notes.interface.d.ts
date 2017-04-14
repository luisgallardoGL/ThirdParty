import { drawing } from '@progress/kendo-drawing';
import { NoteLine, NotePosition, SeriesNoteVisualArgs } from '../../common/property-types';
import { SeriesNotesIcon } from './notes.icon.interface';
import { SeriesNotesLabel } from './notes.label.interface';
/**
 * The series.notes options.
 */
export interface SeriesNotes {
    /**
     * The line of the notes.
     */
    line?: NoteLine;
    /**
     * The position of the series note.
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
     * - `options`&mdash;The note options.
     * - `createVisual`&mdash;A function that can be used to get the default visual.
     * - `category`&mdash;The category of the note point.
     * - `dataItem`&mdash;The `dataItem` of the note point.
     * - `value`&mdash;The value of the note point.
     * - `sender`&mdash;The Chart instance.
     * - `series`&mdash;The series of the note point.
     * - `text`&mdash;The note text.
     */
    visual?: (e: SeriesNoteVisualArgs) => drawing.Element;
    /**
     * The icon of the notes.
     */
    icon?: SeriesNotesIcon;
    /**
     * The label of the notes.
     */
    label?: SeriesNotesLabel;
}