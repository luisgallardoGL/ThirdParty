"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var kendo_angular_dropdowns_1 = require('@progress/kendo-angular-dropdowns');
var kendo_angular_inputs_1 = require('@progress/kendo-angular-inputs');
var column_component_1 = require('./column.component');
var column_group_component_1 = require('./column-group.component');
var command_column_component_1 = require('./command-column.component');
var cell_template_directive_1 = require('./cell-template.directive');
var header_template_directive_1 = require('./header-template.directive');
var footer_template_directive_1 = require('./footer-template.directive');
var detail_template_directive_1 = require('./detail-template.directive');
var no_records_template_directive_1 = require('./no-records-template.directive');
var edit_template_directive_1 = require('./edit-template.directive');
var col_group_component_1 = require('./col-group.component');
var field_accessor_pipe_1 = require('./field-accessor.pipe');
var footer_component_1 = require('./footer.component');
var header_component_1 = require('./header.component');
var resizable_directive_1 = require('./resizable.directive');
var selectable_directive_1 = require('./selectable.directive');
var table_body_component_1 = require('./table-body.component');
var template_context_directive_1 = require('./template-context.directive');
var group_header_template_directive_1 = require('./grouping/group-header-template.directive');
var group_header_component_1 = require('./grouping/group-header.component');
var group_footer_template_directive_1 = require('./grouping/group-footer-template.directive');
var draggable_directive_1 = require('./draggable.directive');
var group_panel_component_1 = require('./grouping/group-panel.component');
var group_indicator_component_1 = require('./grouping/group-indicator.component');
var cell_component_1 = require('./cell.component');
var pager_component_1 = require('./pager.component');
var edit_command_directive_1 = require('./edit-command.directive');
var cancel_command_directive_1 = require('./cancel-command.directive');
var save_command_directive_1 = require('./save-command.directive');
var remove_command_directive_1 = require('./remove-command.directive');
var add_command_directive_1 = require('./add-command.directive');
var databinding_directive_1 = require('./databinding.directive');
var filter_row_component_1 = require('./filtering/filter-row.component');
var filter_cell_component_1 = require('./filtering/filter-cell.component');
var filter_cell_template_directive_1 = require('./filtering/filter-cell-template.directive');
var numeric_filter_cell_component_1 = require('./filtering/numeric-filter-cell.component');
var filter_input_directive_1 = require('./filtering/filter-input.directive');
var filter_cell_wrapper_component_1 = require('./filtering/filter-cell-wrapper.component');
var string_filter_cell_component_1 = require('./filtering/string-filter-cell.component');
var filter_cell_operators_component_1 = require('./filtering/filter-cell-operators.component');
var filter_host_directive_1 = require('./filtering/filter-host.directive');
var autocomplete_filter_cell_component_1 = require('./filtering/autocomplete-filter-cell.component');
var boolean_filter_cell_component_1 = require('./filtering/boolean-filter-cell.component');
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
/**
 * @hidden
 */
var exportedFilterOperators = [
    filter_cell_operators_component_1.FilterCellOperatorsComponent,
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
/**
 * @hidden
 */
var exportedModules = [
    column_component_1.ColumnComponent,
    column_group_component_1.ColumnGroupComponent,
    command_column_component_1.CommandColumnComponent,
    cell_template_directive_1.CellTemplateDirective,
    header_template_directive_1.HeaderTemplateDirective,
    footer_template_directive_1.FooterTemplateDirective,
    detail_template_directive_1.DetailTemplateDirective,
    group_header_template_directive_1.GroupHeaderTemplateDirective,
    group_footer_template_directive_1.GroupFooterTemplateDirective,
    edit_template_directive_1.EditTemplateDirective,
    col_group_component_1.ColGroupComponent,
    field_accessor_pipe_1.FieldAccessorPipe,
    footer_component_1.FooterComponent,
    header_component_1.HeaderComponent,
    resizable_directive_1.ResizableContainerDirective,
    selectable_directive_1.SelectableDirective,
    table_body_component_1.TableBodyComponent,
    template_context_directive_1.TemplateContextDirective,
    group_header_component_1.GroupHeaderComponent,
    draggable_directive_1.DraggableDirective,
    group_panel_component_1.GroupPanelComponent,
    group_indicator_component_1.GroupIndicatorComponent,
    no_records_template_directive_1.NoRecordsTemplateDirective,
    pager_component_1.PagerComponent,
    cell_component_1.CellComponent,
    edit_command_directive_1.EditCommandDirective,
    cancel_command_directive_1.CancelCommandDirective,
    save_command_directive_1.SaveCommandDirective,
    remove_command_directive_1.RemoveCommandDirective,
    add_command_directive_1.AddCommandDirective,
    databinding_directive_1.DataBindingDirective,
    filter_row_component_1.FilterRowComponent,
    filter_cell_component_1.FilterCellComponent,
    filter_cell_template_directive_1.FilterCellTemplateDirective,
    filter_host_directive_1.FilterHostDirective,
    filter_cell_wrapper_component_1.FilterCellWrapperComponent,
    filter_input_directive_1.FilterInputDirective,
    string_filter_cell_component_1.StringFilterCellComponent,
    numeric_filter_cell_component_1.NumericFilterCellComponent,
    autocomplete_filter_cell_component_1.AutoCompleteFilterCellComponent,
    boolean_filter_cell_component_1.BooleanFilterCellComponent
].concat(exportedFilterOperators);
/**
 * @hidden
 */
var importedModules = [
    common_1.CommonModule,
    forms_1.ReactiveFormsModule,
    forms_1.FormsModule,
    kendo_angular_dropdowns_1.DropDownListModule,
    kendo_angular_dropdowns_1.AutoCompleteModule,
    kendo_angular_inputs_1.InputsModule
];
/**
 * @hidden
 */
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [exportedModules],
                    exports: [exportedModules],
                    imports: importedModules.slice()
                },] },
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = function () { return []; };
    return SharedModule;
}());
exports.SharedModule = SharedModule;
