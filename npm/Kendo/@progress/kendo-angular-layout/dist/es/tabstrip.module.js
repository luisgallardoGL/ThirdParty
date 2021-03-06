import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabStripComponent } from './tabstrip/tabstrip.component';
import { TabStripTabComponent } from './tabstrip/tabstrip-tab.component';
import { TabContentDirective } from './tabstrip/tab-content.directive';
import { TabTitleDirective } from './tabstrip/tab-title.directive';
var exportedModules = [
    TabStripComponent,
    TabStripTabComponent,
    TabContentDirective,
    TabTitleDirective
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
export var TabStripModule = (function () {
    function TabStripModule() {
    }
    TabStripModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [declarations],
                    exports: [exportedModules],
                    imports: [CommonModule]
                },] },
    ];
    /** @nocollapse */
    TabStripModule.ctorParameters = function () { return []; };
    return TabStripModule;
}());
