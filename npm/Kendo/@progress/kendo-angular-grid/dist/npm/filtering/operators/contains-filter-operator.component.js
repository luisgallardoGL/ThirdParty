"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var filter_operator_base_1 = require('./filter-operator.base');
/**
 * Represents the `Contains` (**Contains**) filter operator.
 */
var ContainsFilterOperatorComponent = (function (_super) {
    __extends(ContainsFilterOperatorComponent, _super);
    function ContainsFilterOperatorComponent() {
        _super.call(this, "contains");
    }
    ContainsFilterOperatorComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        {
                            provide: filter_operator_base_1.FilterOperatorBase,
                            useExisting: core_1.forwardRef(function () { return ContainsFilterOperatorComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-filter-contains-operator',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    ContainsFilterOperatorComponent.ctorParameters = function () { return []; };
    return ContainsFilterOperatorComponent;
}(filter_operator_base_1.FilterOperatorBase));
exports.ContainsFilterOperatorComponent = ContainsFilterOperatorComponent;
