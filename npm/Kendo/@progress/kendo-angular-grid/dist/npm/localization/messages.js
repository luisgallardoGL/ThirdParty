"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var kendo_angular_l10n_1 = require('@progress/kendo-angular-l10n');
/**
 * @hidden
 */
var Messages = (function (_super) {
    __extends(Messages, _super);
    function Messages() {
        _super.apply(this, arguments);
    }
    Messages.propDecorators = {
        'groupPanelEmpty': [{ type: core_1.Input },],
        'noRecords': [{ type: core_1.Input },],
        'pagerFirstPage': [{ type: core_1.Input },],
        'pagerLastPage': [{ type: core_1.Input },],
        'pagerPreviousPage': [{ type: core_1.Input },],
        'pagerNextPage': [{ type: core_1.Input },],
        'pagerPage': [{ type: core_1.Input },],
        'pagerItemsPerPage': [{ type: core_1.Input },],
        'pagerOf': [{ type: core_1.Input },],
        'pagerItems': [{ type: core_1.Input },],
        'filterEqOperator': [{ type: core_1.Input },],
        'filterNotEqOperator': [{ type: core_1.Input },],
        'filterIsNullOperator': [{ type: core_1.Input },],
        'filterIsNotNullOperator': [{ type: core_1.Input },],
        'filterIsEmptyOperator': [{ type: core_1.Input },],
        'filterIsNotEmptyOperator': [{ type: core_1.Input },],
        'filterStartsWithOperator': [{ type: core_1.Input },],
        'filterContainsOperator': [{ type: core_1.Input },],
        'filterNotContainsOperator': [{ type: core_1.Input },],
        'filterEndsWithOperator': [{ type: core_1.Input },],
        'filterGteOperator': [{ type: core_1.Input },],
        'filterGtOperator': [{ type: core_1.Input },],
        'filterLteOperator': [{ type: core_1.Input },],
        'filterLtOperator': [{ type: core_1.Input },],
        'filterIsTrue': [{ type: core_1.Input },],
        'filterIsFalse': [{ type: core_1.Input },],
    };
    return Messages;
}(kendo_angular_l10n_1.ComponentMessages));
exports.Messages = Messages;
