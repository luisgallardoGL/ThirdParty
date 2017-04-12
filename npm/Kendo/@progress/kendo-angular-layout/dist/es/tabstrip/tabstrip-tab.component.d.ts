import { AfterContentInit } from '@angular/core';
import { TabContentDirective } from './tab-content.directive';
import { TabTitleDirective } from './tab-title.directive';
/**
 * Represents the Kendo UI TabStrip Tab component for Angular.
 */
export declare class TabStripTabComponent implements AfterContentInit {
    active: boolean;
    /**
     * Sets the title of a tab. Used as an attribute on a Tab.
     */
    title: string;
    /**
     * Disables a tab. Used as an attribute on a Tab.
     */
    disabled: boolean;
    /**
     * @hidden
     */
    height: number;
    /**
     * Determines which tab to be selected upon the initial loading of the TabStrip.
     */
    selected: boolean;
    tabContent: TabContentDirective;
    tabTitle: TabTitleDirective;
    ngAfterContentInit(): void;
}
