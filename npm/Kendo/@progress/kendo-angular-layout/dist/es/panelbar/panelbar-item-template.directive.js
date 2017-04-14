import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the Kendo UI PanelBar item template directive which helps to customize the item content.
 */
export var PanelBarItemTemplateDirective = (function () {
    function PanelBarItemTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    PanelBarItemTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoPanelBarItemTemplate]'
                },] },
    ];
    /** @nocollapse */
    PanelBarItemTemplateDirective.ctorParameters = function () { return [
        { type: TemplateRef, decorators: [{ type: Optional },] },
    ]; };
    return PanelBarItemTemplateDirective;
}());
