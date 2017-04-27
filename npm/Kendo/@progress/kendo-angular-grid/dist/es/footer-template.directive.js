import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the column footer cell template of the Kendo UI Grid which helps to customize the table footer cell for the column.
 *
 * To define the footer template, nest a `<template>` tag with the `kendoGridFooterTemplate` directive
 * inside a `<kendo-grid-column>` tag.
 *
 * The template context is set to the current column and the following additional fields are passed:
 * - `column`&mdash;Defines an instance of the `ColumnComponent` option.
 * - `columnIndex`&mdash;Defines the current column index.
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *     selector: 'my-app',
 *     template: `
 *         <kendo-grid [data]="gridData" [scrollable]="'none'">
 *             <kendo-grid-column field="ProductName">
 *                 <template kendoGridFooterTemplate let-column let-columnIndex="columnIndex">
 *                   {{column.field}}({{columnIndex}})
 *                 </template>
 *             </kendo-grid-column>
 *              <kendo-grid-column field="UnitPrice">
 *                 <template kendoGridFooterTemplate let-column let-columnIndex="columnIndex">
 *                   {{column.field}}({{columnIndex}})
 *                 </template>
 *             </kendo-grid-column>
 *         </kendo-grid>
 *     `
 * })
 *
 * class AppComponent {
 *     public gridData = [{
 *         "ProductID": 1,
 *         "ProductName": "Chai",
 *         "UnitPrice": 18.0000,
 *         "Discontinued": false
 *       }, {
 *         "ProductID": 2,
 *         "ProductName": "Chang",
 *         "UnitPrice": 19.0000,
 *         "Discontinued": true
 *       }
 *     ];
 * }
 *
 * ```
 */
export var FooterTemplateDirective = (function () {
    function FooterTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    FooterTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoGridFooterTemplate]'
                },] },
    ];
    /** @nocollapse */
    FooterTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, decorators: [{ type: Optional },] },
    ]; };
    return FooterTemplateDirective;
}());
