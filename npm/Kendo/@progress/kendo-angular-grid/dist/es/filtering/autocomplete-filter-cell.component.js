// tslint:disable:no-access-missing-member
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Input } from '@angular/core';
import { ColumnComponent } from '../column.component';
import { FilterService } from './filter.service';
import { BaseFilterCellComponent, localizeOperators } from './base-filter-cell.component';
import { LocalizationService } from '@progress/kendo-angular-l10n';
var stringOperators = localizeOperators({
    "filterContainsOperator": "contains",
    "filterNotContainsOperator": "doesnotcontain",
    // tslint:disable-next-line:object-literal-sort-keys
    "filterEqOperator": "eq",
    "filterNotEqOperator": "neq",
    "filterStartsWithOperator": "startswith",
    "filterEndsWithOperator": "endswith",
    "filterIsNullOperator": "isnull",
    "filterIsNotNullOperator": "isnotnull",
    "filterIsEmptyOperator": "isempty",
    "filterIsNotEmptyOperator": "isnotempty"
});
/**
 * @hidden
 */
export var AutoCompleteFilterCellComponent = (function (_super) {
    __extends(AutoCompleteFilterCellComponent, _super);
    function AutoCompleteFilterCellComponent(filterService, column, localization) {
        _super.call(this, filterService);
        this.localization = localization;
        this.showOperators = true;
        this.defaultOperators = stringOperators(this.localization);
        this.column = column;
    }
    Object.defineProperty(AutoCompleteFilterCellComponent.prototype, "valueField", {
        get: function () {
            return this._valueField ? this._valueField : this.column.field;
        },
        set: function (value) {
            this._valueField = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteFilterCellComponent.prototype, "currentFilter", {
        get: function () {
            return this.filterByField(this.column.field);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AutoCompleteFilterCellComponent.prototype, "currentOperator", {
        get: function () {
            return this.currentFilter ? this.currentFilter.operator : "contains";
        },
        enumerable: true,
        configurable: true
    });
    AutoCompleteFilterCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kendo-grid-autocomplete-filter-cell',
                    template: "\n        <kendo-grid-filter-wrapper-cell \n            [column]=\"column\" \n            [filter]=\"filter\" \n            [operators]=\"operators\"\n            [showOperators]=\"showOperators\">\n            <kendo-autocomplete \n                kendoFilterInput \n                [data]=\"data\" \n                [valueField]=\"valueField\" \n                [value]=\"currentFilter?.value\">\n            </kendo-autocomplete>\n        </kendo-grid-filter-wrapper-cell>\n    "
                },] },
    ];
    /** @nocollapse */
    AutoCompleteFilterCellComponent.ctorParameters = function () { return [
        { type: FilterService, },
        { type: ColumnComponent, },
        { type: LocalizationService, },
    ]; };
    AutoCompleteFilterCellComponent.propDecorators = {
        'showOperators': [{ type: Input },],
        'column': [{ type: Input },],
        'filter': [{ type: Input },],
        'data': [{ type: Input },],
        'valueField': [{ type: Input },],
    };
    return AutoCompleteFilterCellComponent;
}(BaseFilterCellComponent));
