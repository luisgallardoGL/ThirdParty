import { AfterViewChecked, SimpleChange, OnChanges, EventEmitter, QueryList, Renderer, ElementRef, TemplateRef } from '@angular/core';
import { PanelBarItemComponent } from './panelbar-item.component';
import { PanelBarItemModel } from './panelbar-item-model';
import { PanelBarService } from "./panelbar.service";
import { PanelBarItemTemplateDirective } from "./panelbar-item-template.directive";
/**
 * Represents the Kendo UI PanelBar component for Angular.
 */
export declare class PanelBarComponent implements AfterViewChecked, OnChanges {
    /**
     * Sets the expand mode of the PanelBar by using the `PanelBarExpandMode` enum.
     *
     * The available modes are:
     * - `"single"`&mdash;This mode allows you to expand only one item at a time. Expanding an item collapses the previously expanded one.
     * - `"multiple"`&mdash;This is the default mode of the PanelBar.
     * It allows you to expand more than one item at a time. Items can also be toggled.
     * - `"full"`&mdash;This mode allows you to expand only one item at a time.
     * The expanded area occupies the entire height of the PanelBar. The `"full"` mode requires you to set the `height` property.
     */
    expandMode: number;
    /**
     * Allows the PanelBar to modify the selected state of the items.
     */
    selectable: boolean;
    /**
     * Sets the animate state of the PanelBar.
     */
    animate: boolean;
    /**
     * Sets the height of the component when the `"full"` expand mode is used.
     * This option is ignored in the `"multiple"` and `"single"` expand modes.
     */
    height: any;
    /**
     * Sets the items of the PanelBar as `Array` of `PanelBarItemModel` instances.
     */
    items: Array<PanelBarItemModel>;
    /**
     * Fires each time the user interacts with a PanelBar item. The event data contains all items that are modified.
     */
    stateChange: EventEmitter<any>;
    tabIndex: number;
    role: string;
    activeDescendant: string;
    readonly hostHeight: string;
    readonly overflow: string;
    readonly dir: string;
    template: PanelBarItemTemplateDirective;
    contentItems: QueryList<PanelBarItemComponent>;
    contentChildItems: QueryList<PanelBarItemComponent>;
    viewChildItems: QueryList<PanelBarItemComponent>;
    /**
     * @hidden
     */
    invertKeys(original: any, inverted: any): any;
    constructor(elementRef: ElementRef, eventService: PanelBarService, rtl: boolean, renderer: Renderer);
    readonly computedKeys: Object;
    ngAfterViewChecked(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    readonly templateRef: TemplateRef<any>;
    /**
     * @hidden
     */
    onComponentClick(event: any): void;
    /**
     * @hidden
     */
    onComponentFocus(): void;
    /**
     * @hidden
     */
    onComponentBlur(): void;
    /**
     * @hidden
     */
    onComponentKeyDown(event: any): void;
    private readonly viewItems;
    private renderer;
    private direction;
    private allItems;
    private childrenItems;
    private isViewInit;
    private focused;
    private elementRef;
    private eventService;
    private keyBindings;
    private validateConfiguration();
    private updateChildrenHeight;
    private updateAnimate;
    private onItemAction(item);
    readonly hostClasses: boolean;
    private isVisible(item);
    private getVisibleParent(item);
    private focusItem(action);
    private moveFocus(from, to);
    private focusLastItem();
    private focusFirstItem();
    private focusNextItem();
    private focusPreviousItem();
    private expandItem();
    private collapseItem();
    private selectFocusedItem();
    private visibleItems();
    private flatVisibleItems(listOfItems?, flattedItems?);
}
