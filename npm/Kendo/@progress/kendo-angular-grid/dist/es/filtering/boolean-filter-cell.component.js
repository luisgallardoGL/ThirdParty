// tslint:disable:no-access-missing-member
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, Input, HostBinding } from '@angular/core';
import { FilterService } from './filter.service';
import { BaseFilterCellComponent } from './base-filter-cell.component';
import { LocalizationService } from '@progress/kendo-angular-l10n';
/**
 * Represents a Boolean filter-cell component.
 *
 * @example
 *
 *  ```ts-no-run
 *      <kendo-grid-column field="ProductName" title="Product Name">
 *          <template kendoGridFilterCellTemplate let-filter let-column="column">
 *          <kendo-grid-boolean-filter-cell
 *              [column]="column"
 *              [filter]="filter">
 *          </kendo-grid-boolean-filter-cell>
 *          </template>
 *      </kendo-grid-column>
 *   ```
 */
export var BooleanFilterCellComponent = (function (_super) {
    __extends(BooleanFilterCellComponent, _super);
    function BooleanFilterCellComponent(filterService, localization) {
        _super.call(this, filterService);
        this.localization = localization;
        /**
         * @hidden
         */
        this.operator = "eq";
        /**
         * @hidden
         */
        this.items = [
            { text: this.localization.get("filterIsTrue"), value: true },
            { text: this.localization.get("filterIsFalse"), value: false }
        ];
    }
    Object.defineProperty(BooleanFilterCellComponent.prototype, "hostClasses", {
        /**
         * @hidden
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanFilterCellComponent.prototype, "currentFilter", {
        /**
         * The current filter for the associated column field.
         * @readonly
         * @type {FilterDescriptor}
         */
        get: function () {
            return this.filterByField(this.column.field);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BooleanFilterCellComponent.prototype, "currentOperator", {
        /**
         * The current filter operator for the associated column field.
         * @readonly
         * @type {string}
         */
        get: function () {
            return this.currentFilter ? this.currentFilter.operator : this.operator;
        },
        enumerable: true,
        configurable: true
    });
    BooleanFilterCellComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kendo-grid-boolean-filter-cell',
                    template: "\n        <kendo-grid-filter-wrapper-cell\n            [column]=\"column\"\n            [filter]=\"filter\"\n            [showOperators]=\"false\"\n            [defaultOperator]=\"operator\">\n            <kendo-dropdownlist\n                kendoFilterInput\n                [data]=\"items\"\n                textField=\"text\"\n                valueField=\"value\"\n                [popupSettings]=\"{ width: 'auto' }\"\n                [valuePrimitive]=\"true\"\n                [value]=\"currentFilter?.value\">\n            </kendo-dropdownlist>\n        </kendo-grid-filter-wrapper-cell>\n    "
                },] },
    ];
    /** @nocollapse */
    BooleanFilterCellComponent.ctorParameters = function () { return [
        { type: FilterService, },
        { type: LocalizationService, },
    ]; };
    BooleanFilterCellComponent.propDecorators = {
        'hostClasses': [{ type: HostBinding, args: ['class.k-filtercell-boolean',] },],
        'column': [{ type: Input },],
        'filter': [{ type: Input },],
    };
    return BooleanFilterCellComponent;
}(BaseFilterCellComponent));
