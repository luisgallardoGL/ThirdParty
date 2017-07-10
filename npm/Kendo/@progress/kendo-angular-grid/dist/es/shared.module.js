import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropDownListModule, AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ColumnComponent } from './column.component';
import { ColumnGroupComponent } from './column-group.component';
import { CommandColumnComponent } from './command-column.component';
import { CellTemplateDirective } from './cell-template.directive';
import { HeaderTemplateDirective } from './header-template.directive';
import { FooterTemplateDirective } from './footer-template.directive';
import { DetailTemplateDirective } from './detail-template.directive';
import { NoRecordsTemplateDirective } from './no-records-template.directive';
import { EditTemplateDirective } from './edit-template.directive';
import { ColGroupComponent } from './col-group.component';
import { FieldAccessorPipe } from './field-accessor.pipe';
import { FooterComponent } from './footer.component';
import { HeaderComponent } from './header.component';
import { ResizableContainerDirective } from './resizable.directive';
import { SelectableDirective } from './selectable.directive';
import { TableBodyComponent } from './table-body.component';
import { TemplateContextDirective } from './template-context.directive';
import { GroupHeaderTemplateDirective } from './grouping/group-header-template.directive';
import { GroupHeaderComponent } from './grouping/group-header.component';
import { GroupFooterTemplateDirective } from './grouping/group-footer-template.directive';
import { DraggableDirective } from './draggable.directive';
import { GroupPanelComponent } from './grouping/group-panel.component';
import { GroupIndicatorComponent } from './grouping/group-indicator.component';
import { CellComponent } from './cell.component';
import { PagerComponent } from './pager.component';
import { EditCommandDirective } from './edit-command.directive';
import { CancelCommandDirective } from './cancel-command.directive';
import { SaveCommandDirective } from './save-command.directive';
import { RemoveCommandDirective } from './remove-command.directive';
import { AddCommandDirective } from './add-command.directive';
import { DataBindingDirective } from './databinding.directive';
import { FilterRowComponent } from './filtering/filter-row.component';
import { FilterCellComponent } from './filtering/filter-cell.component';
import { FilterCellTemplateDirective } from './filtering/filter-cell-template.directive';
import { NumericFilterCellComponent } from './filtering/numeric-filter-cell.component';
import { FilterInputDirective } from './filtering/filter-input.directive';
import { FilterCellWrapperComponent } from './filtering/filter-cell-wrapper.component';
import { StringFilterCellComponent } from './filtering/string-filter-cell.component';
import { FilterCellOperatorsComponent } from './filtering/filter-cell-operators.component';
import { FilterHostDirective } from './filtering/filter-host.directive';
import { AutoCompleteFilterCellComponent } from './filtering/autocomplete-filter-cell.component';
import { BooleanFilterCellComponent } from './filtering/boolean-filter-cell.component';
import { ContainsFilterOperatorComponent } from './filtering/operators/contains-filter-operator.component';
import { DoesNotContainFilterOperatorComponent } from './filtering/operators/not-contains-filter-operator.component';
import { EndsWithFilterOperatorComponent } from './filtering/operators/ends-with-filter-operator.component';
import { EqualFilterOperatorComponent } from './filtering/operators/eq-filter-operator.component';
import { IsEmptyFilterOperatorComponent } from './filtering/operators/is-empty-filter-operator.component';
import { IsNotEmptyFilterOperatorComponent } from './filtering/operators/is-not-empty-filter-operator.component';
import { IsNotNullFilterOperatorComponent } from './filtering/operators/is-not-null-filter-operator.component';
import { IsNullFilterOperatorComponent } from './filtering/operators/isnull-filter-operator.component';
import { NotEqualFilterOperatorComponent } from './filtering/operators/neq-filter-operator.component';
import { StartsWithFilterOperatorComponent } from './filtering/operators/starts-with-filter-operator.component';
import { GreaterFilterOperatorComponent } from './filtering/operators/gt-filter-operator.component';
import { GreaterOrEqualToFilterOperatorComponent } from './filtering/operators/gte-filter-operator.component';
import { LessFilterOperatorComponent } from './filtering/operators/lt-filter-operator.component';
import { LessOrEqualToFilterOperatorComponent } from './filtering/operators/lte-filter-operator.component';
/**
 * @hidden
 */
var exportedFilterOperators = [
    FilterCellOperatorsComponent,
    ContainsFilterOperatorComponent,
    DoesNotContainFilterOperatorComponent,
    EndsWithFilterOperatorComponent,
    EqualFilterOperatorComponent,
    IsEmptyFilterOperatorComponent,
    IsNotEmptyFilterOperatorComponent,
    IsNotNullFilterOperatorComponent,
    IsNullFilterOperatorComponent,
    NotEqualFilterOperatorComponent,
    StartsWithFilterOperatorComponent,
    GreaterFilterOperatorComponent,
    GreaterOrEqualToFilterOperatorComponent,
    LessFilterOperatorComponent,
    LessOrEqualToFilterOperatorComponent
];
/**
 * @hidden
 */
var exportedModules = [
    ColumnComponent,
    ColumnGroupComponent,
    CommandColumnComponent,
    CellTemplateDirective,
    HeaderTemplateDirective,
    FooterTemplateDirective,
    DetailTemplateDirective,
    GroupHeaderTemplateDirective,
    GroupFooterTemplateDirective,
    EditTemplateDirective,
    ColGroupComponent,
    FieldAccessorPipe,
    FooterComponent,
    HeaderComponent,
    ResizableContainerDirective,
    SelectableDirective,
    TableBodyComponent,
    TemplateContextDirective,
    GroupHeaderComponent,
    DraggableDirective,
    GroupPanelComponent,
    GroupIndicatorComponent,
    NoRecordsTemplateDirective,
    PagerComponent,
    CellComponent,
    EditCommandDirective,
    CancelCommandDirective,
    SaveCommandDirective,
    RemoveCommandDirective,
    AddCommandDirective,
    DataBindingDirective,
    FilterRowComponent,
    FilterCellComponent,
    FilterCellTemplateDirective,
    FilterHostDirective,
    FilterCellWrapperComponent,
    FilterInputDirective,
    StringFilterCellComponent,
    NumericFilterCellComponent,
    AutoCompleteFilterCellComponent,
    BooleanFilterCellComponent
].concat(exportedFilterOperators);
/**
 * @hidden
 */
var importedModules = [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    DropDownListModule,
    AutoCompleteModule,
    InputsModule
];
/**
 * @hidden
 */
export var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [exportedModules],
                    exports: [exportedModules],
                    imports: importedModules.slice()
                },] },
    ];
    /** @nocollapse */
    SharedModule.ctorParameters = function () { return []; };
    return SharedModule;
}());
