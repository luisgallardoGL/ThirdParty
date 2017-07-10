"use strict";
var core_1 = require('@angular/core');
var tab_content_directive_1 = require('./tab-content.directive');
var tab_title_directive_1 = require('./tab-title.directive');
/**
 * Represents the Kendo UI TabStrip Tab component for Angular.
 */
var TabStripTabComponent = (function () {
    function TabStripTabComponent() {
        this.active = false;
    }
    TabStripTabComponent.prototype.ngAfterContentInit = function () {
        this.active = this.selected;
    };
    TabStripTabComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'kendoTabStripTab',
                    selector: 'kendo-tabstrip-tab',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    TabStripTabComponent.ctorParameters = function () { return []; };
    TabStripTabComponent.propDecorators = {
        'title': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'height': [{ type: core_1.Input },],
        'selected': [{ type: core_1.Input },],
        'tabContent': [{ type: core_1.ContentChild, args: [tab_content_directive_1.TabContentDirective,] },],
        'tabTitle': [{ type: core_1.ContentChild, args: [tab_title_directive_1.TabTitleDirective,] },],
    };
    return TabStripTabComponent;
}());
exports.TabStripTabComponent = TabStripTabComponent;
