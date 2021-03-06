"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var tabstrip_component_1 = require('./tabstrip/tabstrip.component');
var tabstrip_tab_component_1 = require('./tabstrip/tabstrip-tab.component');
var tab_content_directive_1 = require('./tabstrip/tab-content.directive');
var tab_title_directive_1 = require('./tabstrip/tab-title.directive');
var exportedModules = [
    tabstrip_component_1.TabStripComponent,
    tabstrip_tab_component_1.TabStripTabComponent,
    tab_content_directive_1.TabContentDirective,
    tab_title_directive_1.TabTitleDirective
];
var declarations = exportedModules.slice();
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the TabStrip component.
 *
 * The module registers:
 * - `TabStripComponent`&mdash;The `TabStrip` component class.
 * - `TabStripTabComponent`&mdash;The `TabStripTab` component class.
 * - `TabContentDirective`&mdash;The tab content directive used on the `<template>` tag.
 * - `TabTitleDirective`&mdash;The tab title directive used on the `<template>` tag.
 */
var TabStripModule = (function () {
    function TabStripModule() {
    }
    TabStripModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [declarations],
                    exports: [exportedModules],
                    imports: [common_1.CommonModule]
                },] },
    ];
    /** @nocollapse */
    TabStripModule.ctorParameters = function () { return []; };
    return TabStripModule;
}());
exports.TabStripModule = TabStripModule;
