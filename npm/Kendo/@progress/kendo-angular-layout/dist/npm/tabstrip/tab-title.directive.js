"use strict";
var core_1 = require('@angular/core');
/**
 * Represents the title template of the Kendo UI TabStrip.
 *
 * To define the template, nest a `<template>` tag with the `kendoTabTitle` directive inside the component tag.
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *     selector: 'my-app',
 *     template: `
 *         <kendo-tabstrip [ngStyle]="{'width': '400px'}" [animate]="true">
 *           <kendo-tabstrip-tab [title]="'Paris'" [selected]="true">
 *             <template kendoTabTitle>
 *               Title
 *             </template>
 *             <template kendoTabContent>
 *               <h3>Content 1</h3>
 *             </template>
 *           </kendo-tabstrip-tab>
 *
 *           <kendo-tabstrip-tab [title]="'Sofia'">
 *             <template kendoTabContent>
 *               <h3>Content 2</h3>
 *             </template>
 *           </kendo-tabstrip-tab>
 *         </kendo-tabstrip>
 *     `
 * })
 *
 * class AppComponent {}
 *
 * ```
 */
var TabTitleDirective = (function () {
    function TabTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    TabTitleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[kendoTabTitle]'
                },] },
    ];
    /** @nocollapse */
    TabTitleDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return TabTitleDirective;
}());
exports.TabTitleDirective = TabTitleDirective;
