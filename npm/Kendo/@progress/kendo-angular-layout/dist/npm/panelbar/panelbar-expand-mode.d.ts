/**
 * Represents the expand modes of the Kendo UI PanelBar. By default, the expand mode is set to `Multiple`.
 */
export declare enum PanelBarExpandMode {
    /**
     * Allows you to expand only one item at a time. Expanding an item collapses the previously expanded one.
     */
    Single = 0,
    /**
     * Allows you to expand only one item at a time.
     * The expanded area occupies the entire height of the PanelBar. The `"full"` mode requires you to set the `height` property.
     */
    Full = 1,
    /**
     * The default mode of the PanelBar.
     * Allows you to expand more than one item at a time. Items can also be toggled.
     */
    Multiple = 2,
    /**
     * By default, the expand mode is set to `Multiple`.
     */
    Default = 2,
}
