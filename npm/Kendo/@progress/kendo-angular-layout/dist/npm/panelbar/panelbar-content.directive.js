"use strict";
var core_1 = require('@angular/core');
/**
 * Represents the content template of the declaratively initialized Kendo UI PanelBar items.
 * The content can be expanded or collapsed through the item.
 */
var PanelBarContentDirective = (function () {
    function PanelBarContentDirective(templateRef) {
        this.templateRef = templateRef;
    }
    PanelBarContentDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[kendoPanelBarContent]"
                },] },
    ];
    /** @nocollapse */
    PanelBarContentDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, },
    ]; };
    return PanelBarContentDirective;
}());
exports.PanelBarContentDirective = PanelBarContentDirective;
