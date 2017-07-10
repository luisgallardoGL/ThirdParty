import { QueryList, EventEmitter, ElementRef } from '@angular/core';
import { TabStripTabComponent } from './tabstrip-tab.component';
import { SelectEvent } from './tabstrip-events';
/**
 * Represents the Kendo UI TabStrip component for Angular.
 */
export declare class TabStripComponent {
    /**
     * Sets the height of the TabStrip.
     */
    height: string;
    /**
     * Enables the tab animation.
     */
    animate: boolean;
    /**
     * When set to `true`, the component renders all tabs and they are persisted in the DOM.
     * By default, this option is set to `false`.
     */
    keepTabContent: boolean;
    /**
     * @hidden
     */
    tablist: ElementRef;
    /**
     * Fires each time the user selects a tab.
     * The event data contains the index of the selected tab and its title.
     */
    tabSelect: EventEmitter<SelectEvent>;
    readonly hostClasses: boolean;
    readonly dir: string;
    /**
     * @hidden
     */
    tabs: QueryList<TabStripTabComponent>;
    /**
     * @hidden
     */
    _animate: boolean;
    /**
     * @hidden
     */
    contentClass(active: boolean): string;
    constructor(rtl: boolean);
    readonly computedKeys: Object;
    /**
     * @hidden
     */
    invertKeys(original: any, inverted: any): any;
    /**
     * @hidden
     */
    onKeyDown(event: KeyboardEvent): void;
    /**
     * @hidden
     */
    tabPanelId(id: number): string;
    /**
     * @hidden
     */
    tabId(id: number): string;
    /**
     * @hidden
     */
    selectTab(selectedIndex: number): void;
    /**
     * @hidden
     */
    tabItemClass(tab: TabStripTabComponent): Object;
    private direction;
    private keyBindings;
    private firstNavigatableIndex();
    private lastNavigatableIndex();
    private prevNavigatableIndex(selectedIndex);
    private nextNavigatableIndex(selectedIndex);
    private emitEvent(tab, selectedIndex);
    private deactivateAll();
}
