import { TemplateRef, QueryList } from '@angular/core';
import { HeaderTemplateDirective } from './header-template.directive';
import { FooterTemplateDirective } from './footer-template.directive';
/**
 * @hidden
 */
export declare class ColumnBase {
    parent: ColumnBase;
    /**
     * The title of the column.
     */
    title: string;
    /**
     * The width of the column in pixels.
     */
    width: number;
    /**
     * Toggles the locked (frozen) state of the columns.
     * Locked (frozen) columns are visible at all times during the horizontal Grid scrolling.
     * For the option to work properly, make sure the Grid is configured to meet the following requirements:
     * - Scrolling is enabled.
     * - The `height` option of the Grid is set.
     * - The widths of all Grid columns are explicitly set in pixels.
     * In this way, the Grid adjusts the layout of the frozen and non-frozen columns.
     *
     * @example
     * ```ts
     * @@Component({
     *    selector: 'my-app',
     *    template: `
     *        <kendo-grid [data]="gridData" [scrollable]="scrollable" style="height: 200px">
     *          <kendo-grid-column field="ProductID" title="Product ID" width="120" [locked]="true">
     *          </kendo-grid-column>
     *          <kendo-grid-column field="ProductName" title="Product Name" width="200">
     *          </kendo-grid-column>
     *          <kendo-grid-column field="UnitPrice" title="Unit Price" width="230">
     *          </kendo-grid-column>
     *        </kendo-grid>
     *    `
     * })
     *
     * class AppComponent {
     *    private gridData: any[];
     *
     *    constructor() {
     *        this.gridData = products;
     *    }
     * }
     *
     * const products = [{
     *    "ProductID": 1,
     *    "ProductName": "Chai",
     *    "UnitPrice": 18.0000,
     *    "Discontinued": true
     *  }, {
     *    "ProductID": 2,
     *    "ProductName": "Chang",
     *    "UnitPrice": 19.0000,
     *    "Discontinued": false
     *  }
     * ];
     *
     * ```
     */
    locked: boolean;
    /**
     * Sets the custom styles to be applied to the column cells.
     * The `style` option uses [NgStyle](https://angular.io/docs/ts/latest/api/common/index/NgStyle-directive.html)
     * to apply the property under the hood.
     */
    style: {
        [key: string]: string;
    };
    /**
     * Sets the custom styles to be applied to the column headers.
     * The `headerStyle` option uses [NgStyle](https://angular.io/docs/ts/latest/api/common/index/NgStyle-directive.html)
     * to apply the property under the hood.
     */
    headerStyle: {
        [key: string]: string;
    };
    /**
     * Sets the custom styles for the column footers.
     * The `footerStyle` option uses [NgStyle](https://angular.io/docs/ts/latest/api/common/index/NgStyle-directive.html)
     * to apply the property under the hood.
     */
    footerStyle: {
        [key: string]: string;
    };
    /**
     * Sets the custom CSS classes to the column cells.
     * The `class` option uses [NgClass](https://angular.io/docs/ts/latest/api/common/index/NgClass-directive.html)
     * to apply the property under the hood.
     */
    cssClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    /**
     * Sets the custom CSS classes to the column header cell.
     * The `headerClass` option uses [NgClass](https://angular.io/docs/ts/latest/api/common/index/NgClass-directive.html)
     * to apply the property under the hood.
     */
    headerClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    /**
     * Sets the custom CSS classes to the column footer cell.
     * The `footerClass` option uses [NgClass](https://angular.io/docs/ts/latest/api/common/index/NgClass-directive.html)
     * to apply the property under the hood.
     */
    footerClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    /**
     * @hidden
     */
    children: QueryList<ColumnBase>;
    /**
     * @hidden
     */
    headerTemplates: QueryList<HeaderTemplateDirective>;
    /**
     * @hidden
     */
    footerTemplate: FooterTemplateDirective;
    /**
     * @hidden
     */
    readonly level: number;
    /**
     * @hidden
     */
    readonly isLocked: boolean;
    private _width;
    /**
     * @hidden
     */
    readonly colspan: number;
    /**
     * @hidden
     */
    rowspan(totalColumnLevels: number): number;
    /**
     * @hidden
     */
    readonly headerTemplateRef: TemplateRef<any>;
    /**
     * @hidden
     */
    readonly footerTemplateRef: TemplateRef<any>;
    constructor(parent?: ColumnBase);
}
