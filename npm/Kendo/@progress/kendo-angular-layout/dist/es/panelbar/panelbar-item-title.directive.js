import { Directive, TemplateRef, Optional } from '@angular/core';
/**
 * Represents the Kendo UI PanelBar item title template directive which helps to customize the item title.
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *     selector: 'my-app',
 *     template: `
 *        <kendo-panelbar>
 *            <kendo-panelbar-item [title]="'Paris'" [expanded]="true">
 *                <template kendoPanelBarItemTitle>
 *                    Additional Content
 *                </template>
 *            </kendo-panelbar-item>
 *        </kendo-panelbar>
 *     `
 * })
 *
 * class AppComponent {}
 *
 * ```
 */
export var PanelBarItemTitleDirective = (function () {
    function PanelBarItemTitleDirective(templateRef) {
        this.templateRef = templateRef;
    }
    PanelBarItemTitleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoPanelBarItemTitle]'
                },] },
    ];
    /** @nocollapse */
    PanelBarItemTitleDirective.ctorParameters = function () { return [
        { type: TemplateRef, decorators: [{ type: Optional },] },
    ]; };
    return PanelBarItemTitleDirective;
}());
