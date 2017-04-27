/**
 * The `navigator.hint` options.
 */
export interface NavigatorHint {
    /**
     * The function that returns the hint content.
     *
     * The fields available in the event argument are:
     *
     * - `from`&mdash;The lower boundary of the selected range.
     * - `to`&mdash;The upper boundary of the selected range.
     */
    content?: (e: any) => string;
    /**
     * The format of the hint.
     */
    format?: string;
    /**
     * The visibility of the hint.
     */
    visible?: boolean;
}
