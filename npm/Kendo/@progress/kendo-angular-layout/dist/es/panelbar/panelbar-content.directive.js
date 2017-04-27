import { Directive, TemplateRef } from '@angular/core';
/**
 * Represents the content template of the declaratively initialized Kendo UI PanelBar items.
 * The content can be expanded or collapsed through the item.
 */
export var PanelBarContentDirective = (function () {
    function PanelBarContentDirective(templateRef) {
        this.templateRef = templateRef;
    }
    PanelBarContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: "[kendoPanelBarContent]"
                },] },
    ];
    /** @nocollapse */
    PanelBarContentDirective.ctorParameters = function () { return [
        { type: TemplateRef, },
    ]; };
    return PanelBarContentDirective;
}());
