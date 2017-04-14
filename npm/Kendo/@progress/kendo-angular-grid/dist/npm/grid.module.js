"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var grid_component_1 = require('./grid.component');
var column_component_1 = require('./column.component');
var column_group_component_1 = require('./column-group.component');
var command_column_component_1 = require('./command-column.component');
var toolbar_component_1 = require('./toolbar.component');
var cell_template_directive_1 = require('./cell-template.directive');
var header_template_directive_1 = require('./header-template.directive');
var footer_template_directive_1 = require('./footer-template.directive');
var detail_template_directive_1 = require('./detail-template.directive');
var group_header_template_directive_1 = require('./grouping/group-header-template.directive');
var group_footer_template_directive_1 = require('./grouping/group-footer-template.directive');
var no_records_template_directive_1 = require('./no-records-template.directive');
var edit_template_directive_1 = require('./edit-template.directive');
var list_component_1 = require('./list.component');
var shared_module_1 = require('./shared.module');
var kendo_angular_intl_1 = require('@progress/kendo-angular-intl');
var edit_command_directive_1 = require('./edit-command.directive');
var cancel_command_directive_1 = require('./cancel-command.directive');
var save_command_directive_1 = require('./save-command.directive');
var remove_command_directive_1 = require('./remove-command.directive');
var add_command_directive_1 = require('./add-command.directive');
var databinding_directive_1 = require('./databinding.directive');
var filter_row_component_1 = require('./filtering/filter-row.component');
var filter_cell_component_1 = require('./filtering/filter-cell.component');
var filter_cell_template_directive_1 = require('./filtering/filter-cell-template.directive');
var filter_cell_operators_component_1 = require('./filtering/filter-cell-operators.component');
var string_filter_cell_component_1 = require('./filtering/string-filter-cell.component');
var numeric_filter_cell_component_1 = require('./filtering/numeric-filter-cell.component');
var autocomplete_filter_cell_component_1 = require('./filtering/autocomplete-filter-cell.component');
var boolean_filter_cell_component_1 = require('./filtering/boolean-filter-cell.component');
var localized_messages_directive_1 = require('./localization/localized-messages.directive');
var custom_messages_component_1 = require('./localization/custom-messages.component');
var contains_filter_operator_component_1 = require('./filtering/operators/contains-filter-operator.component');
var not_contains_filter_operator_component_1 = require('./filtering/operators/not-contains-filter-operator.component');
var ends_with_filter_operator_component_1 = require('./filtering/operators/ends-with-filter-operator.component');
var eq_filter_operator_component_1 = require('./filtering/operators/eq-filter-operator.component');
var is_empty_filter_operator_component_1 = require('./filtering/operators/is-empty-filter-operator.component');
var is_not_empty_filter_operator_component_1 = require('./filtering/operators/is-not-empty-filter-operator.component');
var is_not_null_filter_operator_component_1 = require('./filtering/operators/is-not-null-filter-operator.component');
var isnull_filter_operator_component_1 = require('./filtering/operators/isnull-filter-operator.component');
var neq_filter_operator_component_1 = require('./filtering/operators/neq-filter-operator.component');
var starts_with_filter_operator_component_1 = require('./filtering/operators/starts-with-filter-operator.component');
var gt_filter_operator_component_1 = require('./filtering/operators/gt-filter-operator.component');
var gte_filter_operator_component_1 = require('./filtering/operators/gte-filter-operator.component');
var lt_filter_operator_component_1 = require('./filtering/operators/lt-filter-operator.component');
var lte_filter_operator_component_1 = require('./filtering/operators/lte-filter-operator.component');
var exportedFilterOperators = [
    contains_filter_operator_component_1.ContainsFilterOperatorComponent,
    not_contains_filter_operator_component_1.DoesNotContainFilterOperatorComponent,
    ends_with_filter_operator_component_1.EndsWithFilterOperatorComponent,
    eq_filter_operator_component_1.EqualFilterOperatorComponent,
    is_empty_filter_operator_component_1.IsEmptyFilterOperatorComponent,
    is_not_empty_filter_operator_component_1.IsNotEmptyFilterOperatorComponent,
    is_not_null_filter_operator_component_1.IsNotNullFilterOperatorComponent,
    isnull_filter_operator_component_1.IsNullFilterOperatorComponent,
    neq_filter_operator_component_1.NotEqualFilterOperatorComponent,
    starts_with_filter_operator_component_1.StartsWithFilterOperatorComponent,
    gt_filter_operator_component_1.GreaterFilterOperatorComponent,
    gte_filter_operator_component_1.GreaterOrEqualToFilterOperatorComponent,
    lt_filter_operator_component_1.LessFilterOperatorComponent,
    lte_filter_operator_component_1.LessOrEqualToFilterOperatorComponent
];
var exportedModules = [
    grid_component_1.GridComponent,
    column_component_1.ColumnComponent,
    column_group_component_1.ColumnGroupComponent,
    command_column_component_1.CommandColumnComponent,
    toolbar_component_1.ToolbarComponent,
    cell_template_directive_1.CellTemplateDirective,
    header_template_directive_1.HeaderTemplateDirective,
    footer_template_directive_1.FooterTemplateDirective,
    group_header_template_directive_1.GroupHeaderTemplateDirective,
    group_footer_template_directive_1.GroupFooterTemplateDirective,
    detail_template_directive_1.DetailTemplateDirective,
    no_records_template_directive_1.NoRecordsTemplateDirective,
    edit_template_directive_1.EditTemplateDirective,
    edit_command_directive_1.EditCommandDirective,
    cancel_command_directive_1.CancelCommandDirective,
    save_command_directive_1.SaveCommandDirective,
    remove_command_directive_1.RemoveCommandDirective,
    add_command_directive_1.AddCommandDirective,
    databinding_directive_1.DataBindingDirective,
    custom_messages_component_1.CustomMessagesComponent,
    filter_row_component_1.FilterRowComponent,
    filter_cell_component_1.FilterCellComponent,
    filter_cell_template_directive_1.FilterCellTemplateDirective,
    filter_cell_operators_component_1.FilterCellOperatorsComponent,
    string_filter_cell_component_1.StringFilterCellComponent,
    numeric_filter_cell_component_1.NumericFilterCellComponent,
    autocomplete_filter_cell_component_1.AutoCompleteFilterCellComponent
].concat(exportedFilterOperators);
var declarations = [
    grid_component_1.GridComponent,
    toolbar_component_1.ToolbarComponent,
    list_component_1.ListComponent,
    localized_messages_directive_1.LocalizedMessagesDirective,
    custom_messages_component_1.CustomMessagesComponent
];
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the Grid component.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Grid module
 * import { GridModule } from '@progress/kendo-angular-grid';
 *
 * // The browser platform with a compiler
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component
 * import { AppComponent } from './app.component';
 *
 * // Define the app module
 * @@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, GridModule], // import Grid module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
var GridModule = (function () {
    function GridModule() {
    }
    GridModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [declarations],
                    entryComponents: [string_filter_cell_component_1.StringFilterCellComponent, numeric_filter_cell_component_1.NumericFilterCellComponent, boolean_filter_cell_component_1.BooleanFilterCellComponent],
                    exports: [exportedModules],
                    imports: [common_1.CommonModule, shared_module_1.SharedModule],
                    providers: [
                        { provide: kendo_angular_intl_1.IntlService, useClass: kendo_angular_intl_1.CldrIntlService }
                    ]
                },] },
    ];
    /** @nocollapse */
    GridModule.ctorParameters = function () { return []; };
    return GridModule;
}());
exports.GridModule = GridModule;
