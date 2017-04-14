import { TemplateRef } from '@angular/core';
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
export declare class PanelBarItemTitleDirective {
    templateRef: TemplateRef<any>;
    constructor(templateRef: TemplateRef<any>);
}
