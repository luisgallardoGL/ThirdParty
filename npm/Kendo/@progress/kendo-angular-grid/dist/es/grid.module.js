import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { ColumnComponent } from './column.component';
import { ColumnGroupComponent } from './column-group.component';
import { CommandColumnComponent } from './command-column.component';
import { ToolbarComponent } from './toolbar.component';
import { CellTemplateDirective } from './cell-template.directive';
import { HeaderTemplateDirective } from './header-template.directive';
import { FooterTemplateDirective } from './footer-template.directive';
import { DetailTemplateDirective } from './detail-template.directive';
import { GroupHeaderTemplateDirective } from './grouping/group-header-template.directive';
import { GroupFooterTemplateDirective } from './grouping/group-footer-template.directive';
import { NoRecordsTemplateDirective } from './no-records-template.directive';
import { EditTemplateDirective } from './edit-template.directive';
import { ListComponent } from './list.component';
import { SharedModule } from './shared.module';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
import { EditCommandDirective } from './edit-command.directive';
import { CancelCommandDirective } from './cancel-command.directive';
import { SaveCommandDirective } from './save-command.directive';
import { RemoveCommandDirective } from './remove-command.directive';
import { AddCommandDirective } from './add-command.directive';
import { DataBindingDirective } from './databinding.directive';
import { FilterRowComponent } from './filtering/filter-row.component';
import { FilterCellComponent } from './filtering/filter-cell.component';
import { FilterCellTemplateDirective } from './filtering/filter-cell-template.directive';
import { FilterCellOperatorsComponent } from './filtering/filter-cell-operators.component';
import { StringFilterCellComponent } from './filtering/string-filter-cell.component';
import { NumericFilterCellComponent } from './filtering/numeric-filter-cell.component';
import { AutoCompleteFilterCellComponent } from './filtering/autocomplete-filter-cell.component';
import { BooleanFilterCellComponent } from './filtering/boolean-filter-cell.component';
import { LocalizedMessagesDirective } from './localization/localized-messages.directive';
import { CustomMessagesComponent } from './localization/custom-messages.component';
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
var exportedFilterOperators = [
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
var exportedModules = [
    GridComponent,
    ColumnComponent,
    ColumnGroupComponent,
    CommandColumnComponent,
    ToolbarComponent,
    CellTemplateDirective,
    HeaderTemplateDirective,
    FooterTemplateDirective,
    GroupHeaderTemplateDirective,
    GroupFooterTemplateDirective,
    DetailTemplateDirective,
    NoRecordsTemplateDirective,
    EditTemplateDirective,
    EditCommandDirective,
    CancelCommandDirective,
    SaveCommandDirective,
    RemoveCommandDirective,
    AddCommandDirective,
    DataBindingDirective,
    CustomMessagesComponent,
    FilterRowComponent,
    FilterCellComponent,
    FilterCellTemplateDirective,
    FilterCellOperatorsComponent,
    StringFilterCellComponent,
    NumericFilterCellComponent,
    AutoCompleteFilterCellComponent
].concat(exportedFilterOperators);
var declarations = [
    GridComponent,
    ToolbarComponent,
    ListComponent,
    LocalizedMessagesDirective,
    CustomMessagesComponent
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
export var GridModule = (function () {
    function GridModule() {
    }
    GridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [declarations],
                    entryComponents: [StringFilterCellComponent, NumericFilterCellComponent, BooleanFilterCellComponent],
                    exports: [exportedModules],
                    imports: [CommonModule, SharedModule],
                    providers: [
                        { provide: IntlService, useClass: CldrIntlService }
                    ]
                },] },
    ];
    /** @nocollapse */
    GridModule.ctorParameters = function () { return []; };
    return GridModule;
}());
