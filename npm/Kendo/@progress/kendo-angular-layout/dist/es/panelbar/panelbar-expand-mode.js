/**
 * Represents the expand modes of the Kendo UI PanelBar. By default, the expand mode is set to `Multiple`.
 */
export var PanelBarExpandMode;
(function (PanelBarExpandMode) {
    /**
     * Allows you to expand only one item at a time. Expanding an item collapses the previously expanded one.
     */
    PanelBarExpandMode[PanelBarExpandMode["Single"] = 0] = "Single";
    /**
     * Allows you to expand only one item at a time.
     * The expanded area occupies the entire height of the PanelBar. The `"full"` mode requires you to set the `height` property.
     */
    PanelBarExpandMode[PanelBarExpandMode["Full"] = 1] = "Full";
    /**
     * The default mode of the PanelBar.
     * Allows you to expand more than one item at a time. Items can also be toggled.
     */
    PanelBarExpandMode[PanelBarExpandMode["Multiple"] = 2] = "Multiple";
    /**
     * By default, the expand mode is set to `Multiple`.
     */
    PanelBarExpandMode[PanelBarExpandMode["Default"] = 2] = "Default";
})(PanelBarExpandMode || (PanelBarExpandMode = {}));
