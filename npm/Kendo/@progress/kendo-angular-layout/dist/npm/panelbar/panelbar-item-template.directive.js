"use strict";
var core_1 = require('@angular/core');
/**
 * Represents the Kendo UI PanelBar item template directive which helps to customize the item content.
 */
var PanelBarItemTemplateDirective = (function () {
    function PanelBarItemTemplateDirective(templateRef) {
        this.templateRef = templateRef;
    }
    PanelBarItemTemplateDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[kendoPanelBarItemTemplate]'
                },] },
    ];
    /** @nocollapse */
    PanelBarItemTemplateDirective.ctorParameters = function () { return [
        { type: core_1.TemplateRef, decorators: [{ type: core_1.Optional },] },
    ]; };
    return PanelBarItemTemplateDirective;
}());
exports.PanelBarItemTemplateDirective = PanelBarItemTemplateDirective;
