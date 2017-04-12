var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Input } from '@angular/core';
import { ComponentMessages } from '@progress/kendo-angular-l10n';
/**
 * @hidden
 */
export var Messages = (function (_super) {
    __extends(Messages, _super);
    function Messages() {
        _super.apply(this, arguments);
    }
    Messages.propDecorators = {
        'groupPanelEmpty': [{ type: Input },],
        'noRecords': [{ type: Input },],
        'pagerFirstPage': [{ type: Input },],
        'pagerLastPage': [{ type: Input },],
        'pagerPreviousPage': [{ type: Input },],
        'pagerNextPage': [{ type: Input },],
        'pagerPage': [{ type: Input },],
        'pagerItemsPerPage': [{ type: Input },],
        'pagerOf': [{ type: Input },],
        'pagerItems': [{ type: Input },],
        'filterEqOperator': [{ type: Input },],
        'filterNotEqOperator': [{ type: Input },],
        'filterIsNullOperator': [{ type: Input },],
        'filterIsNotNullOperator': [{ type: Input },],
        'filterIsEmptyOperator': [{ type: Input },],
        'filterIsNotEmptyOperator': [{ type: Input },],
        'filterStartsWithOperator': [{ type: Input },],
        'filterContainsOperator': [{ type: Input },],
        'filterNotContainsOperator': [{ type: Input },],
        'filterEndsWithOperator': [{ type: Input },],
        'filterGteOperator': [{ type: Input },],
        'filterGtOperator': [{ type: Input },],
        'filterLteOperator': [{ type: Input },],
        'filterLtOperator': [{ type: Input },],
        'filterIsTrue': [{ type: Input },],
        'filterIsFalse': [{ type: Input },],
    };
    return Messages;
}(ComponentMessages));
