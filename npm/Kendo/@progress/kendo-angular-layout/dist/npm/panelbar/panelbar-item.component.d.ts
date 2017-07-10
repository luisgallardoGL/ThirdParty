import { TemplateRef, QueryList, AfterContentChecked, AfterViewChecked, ElementRef } from '@angular/core';
import { PanelBarService } from "./panelbar.service";
import { PanelBarContentDirective } from "./panelbar-content.directive";
import { PanelBarItemTitleDirective } from "./panelbar-item-title.directive";
import { PanelBarItemModel } from './panelbar-item-model';
/**
 * Represents the Kendo UI PanelBar items.
 */
export declare class PanelBarItemComponent implements AfterContentChecked, AfterViewChecked {
    /**
     * Sets the title of the PanelBar item.
     */
    title: string;
    /**
     * Allows the component to set the `"id"` property to each item.
     * This property is used to set `id` attributes of the nested elements and enable ARIA support.
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
     * Sets the selected state of a PanelBar item.
     */
    selected: boolean;
    /**
     * Sets the content of the PanelBar item.
     * By design, this option is used when the
     * [`items`]({% slug api_layout_panelbarcomponent_kendouiforangular %}#toc-items)
     * property of the PanelBar is set.
     */
    content: any;
    /**
     * @hidden
     */
    items: Array<PanelBarItemModel>;
    /**
     * @hidden
     */
    template: TemplateRef<any>;
    header: ElementRef;
    contentHeight: string;
    contentOverflow: string;
    childrenItems: Array<PanelBarItemComponent>;
    parent: PanelBarItemComponent;
    hasChildItems: boolean;
    hasContent: boolean;
    state: string;
    animate: boolean;
    role: string;
    titleAttribute: string;
    readonly className: string;
    readonly itemId: string;
    readonly ariaExpanded: boolean;
    readonly ariaSelected: boolean;
    readonly ariaDisabled: boolean;
    /**
     * @hidden
     */
    readonly titleTemplate: TemplateRef<any>;
    viewChildItems: QueryList<PanelBarItemComponent>;
    contentItems: QueryList<PanelBarItemComponent>;
    contentTemplate: PanelBarContentDirective;
    titleTemplates: QueryList<PanelBarItemTitleDirective>;
    focused: boolean;
    wrapperFocused: boolean;
    constructor(parent: PanelBarItemComponent, eventService: PanelBarService);
    /**
     * @hidden
     */
    headerHeight(): number;
    /**
     * @hidden
     */
    ngAfterContentChecked(): void;
    /**
     * @hidden
     */
    ngAfterViewChecked(): void;
    /**
     * @hidden
     */
    onItemAction(): void;
    /**
     * @hidden
     */
    readonly iconClasses: any;
    /**
     * @hidden
     */
    serialize(): PanelBarItemModel;
    /**
     * @hidden
     */
    subTreeViewItems(): Array<PanelBarItemComponent>;
    /**
     * @hidden
     */
    validateConfiguration(): void;
    private eventService;
    private _expanded;
    private onWrapperFocusChange(focused);
    private resolveClasses(classes);
}
