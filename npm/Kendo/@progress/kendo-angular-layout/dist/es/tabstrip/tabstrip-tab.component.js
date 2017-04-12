import { Component, ContentChild, Input } from '@angular/core';
import { TabContentDirective } from './tab-content.directive';
import { TabTitleDirective } from './tab-title.directive';
/**
 * Represents the Kendo UI TabStrip Tab component for Angular.
 */
export var TabStripTabComponent = (function () {
    function TabStripTabComponent() {
        this.active = false;
    }
    TabStripTabComponent.prototype.ngAfterContentInit = function () {
        this.active = this.selected;
    };
    TabStripTabComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'kendoTabStripTab',
                    selector: 'kendo-tabstrip-tab',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TabStripTabComponent.ctorParameters = function () { return []; };
    TabStripTabComponent.propDecorators = {
        'title': [{ type: Input },],
        'disabled': [{ type: Input },],
        'height': [{ type: Input },],
        'selected': [{ type: Input },],
        'tabContent': [{ type: ContentChild, args: [TabContentDirective,] },],
        'tabTitle': [{ type: ContentChild, args: [TabTitleDirective,] },],
    };
    return TabStripTabComponent;
}());
