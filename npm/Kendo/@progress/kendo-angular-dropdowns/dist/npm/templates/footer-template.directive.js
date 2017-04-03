"use strict";
/* tslint:disable:max-line-length */
var core_1 = require('@angular/core');
/**
 * Used for rendering the list footer content.
 *
 * To define the footer template, nest a `<template>` tag with the `kendo<ComponentName>FooterTemplate` directive inside the component tag.
 *
 * Use:
 * - The `kendoAutoCompleteFooterTemplate` directive for the AutoComplete.
 * - The `kendoComboBoxFooterTemplate` directive for the ComboBox.
 * - The `kendoDropDownListFooterTemplate` directive for the DropDownList.
 * - The `kendoMultiSelectFooterTemplate` directive for the MultiSelect.
 *
 *
 * @example
 * ```ts
 * @@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-combobox [data]="listItems">
 *    <template kendoComboBoxFooterTemplate>
 *      <h4>Footer template</h4>
 *    </template>
 *  </kendo-combobox>
 * `
 * })
 * class AppComponent {
 *   public listItems: Array<string> = ["Item 1", "Item 2", "Item 3", "Item 4"];
 * }
 * ```
 *
 * For more examples, refer to the article on [templates]({% slug overview_ddl_kendouiforangular %}#toc-templates).
 */
var FooterTemplateDirective = (function () {
    function FooterTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    FooterTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[kendoDropDownListFooterTemplate],[kendoComboBoxFooterTemplate],[kendoAutoCompleteFooterTemplate],[kendoMultiSelectFooterTemplate]'
                },] },
    ];
    /** @nocollapse */
    FooterTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return FooterTemplateDirective;
}());
exports.FooterTemplateDirective = FooterTemplateDirective;
