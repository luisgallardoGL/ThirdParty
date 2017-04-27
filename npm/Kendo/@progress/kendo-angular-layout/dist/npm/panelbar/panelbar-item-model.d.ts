/**
 * Represents the Kendo UI PanelBar items model. These are the interface fields that the PanelBar items use.
 */
export interface PanelBarItemModel {
    /**
     * Sets the title of the PanelBar item.
     */
    title: string;
    /**
     * Allows the component to set the `"id"` property of each item.
     */
    id: string;
    /**
     * Defines an icon to be rendered next to the title.
     */
    icon: string;
    /**
     * Defines an icon with a custom CSS class to be rendered next to the title.
     */
    iconClass: string;
    /**
     * Defines the location of an image to be displayed next to the title.
     */
    imageUrl: string;
    /**
     * Disables a PanelBar item when set to `true`.
     */
    disabled: boolean;
    /**
     * Expands the PanelBar item when set to `true`.
     */
    expanded: boolean;
    /**
     * Sets the focused state of a PanelBar item.
     */
    focused: boolean;
    /**
     * Sets the selected state of a PanelBar item.
     */
    selected: boolean;
    /**
     * Defines the child items as an array.
     */
    children: Array<PanelBarItemModel>;
    /**
     * Sets the content of the PanelBar item.
     */
    content: any;
}
