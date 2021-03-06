"use strict";
var core_1 = require('@angular/core');
/**
 * Represents the filter-cell template.
 */
var FilterCellTemplateDirective = (function () {
    function FilterCellTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    FilterCellTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[kendoGridFilterCellTemplate]'
                },] },
    ];
    /** @nocollapse */
    FilterCellTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
    ]; };
    return FilterCellTemplateDirective;
}());
exports.FilterCellTemplateDirective = FilterCellTemplateDirective;
