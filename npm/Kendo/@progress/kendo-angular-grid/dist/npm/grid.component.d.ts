import { EventEmitter, OnDestroy, QueryList, AfterContentInit, AfterViewInit, OnChanges, SimpleChange, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/groupBy';
import { SortDescriptor, GroupDescriptor, GroupResult, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { DetailTemplateDirective } from './detail-template.directive';
import { ScrollMode } from './scrollmode';
import { SortSettings } from './sort-settings';
import { PagerSettings } from './pager-settings';
import { BrowserSupportService } from './browser-support.service';
import { GridDataResult, DataCollection } from './data.collection';
import { SelectionService, SelectionEvent } from './selection.service';
import { EditService } from './edit.service';
import { PageChangeEvent, DataStateChangeEvent } from './change-event-args.interface';
import { DetailsService } from './details.service';
import { GroupsService } from './grouping/groups.service';
import { ColumnsContainer } from './columns-container';
import { GroupInfoService } from './grouping/group-info.service';
import { GroupableSettings } from './grouping/group-settings';
import { ListComponent } from './list.component';
import { ChangeNotificationService } from './change-notification.service';
import { NoRecordsTemplateDirective } from './no-records-template.directive';
import { ColumnBase } from './column-base';
import { FilterService } from './filtering/filter.service';
/**
 * Represents the Kendo UI Grid component for Angular.
 *
 * @example
 * ```ts-preview
 * @@Component({
 *    selector: 'my-app',
 *    template: `
 *        <kendo-grid [data]="gridData">
 *        </kendo-grid>
 *    `
 * })
 * class AppComponent {
 *    private gridData: any[] = products;
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
 * ```
 */
export declare class GridComponent implements AfterContentInit, AfterViewInit, OnDestroy, OnChanges {
    wrapper: ElementRef;
    private groupInfoService;
    private groupsService;
    private changeNotification;
    private detailsService;
    private editService;
    private filterService;
    /**
     * Sets the data of the Grid. If an array is provided, the Grid automatically gets the total count.
     */
    data: Array<any> | GridDataResult;
    /**
     * Defines the page size used by the Grid pager.
     * Required by the [paging]({% slug paging_grid_kendouiforangular %}) functionality.
     */
    pageSize: number;
    /**
     * Defines the height (in pixels) that is used when the `scrollable` option of the Grid is set.
     */
    height: number;
    /**
     * Defines the row height that is used when the `scrollable` option of the Grid is set to `virtual`.
     * Required by the [virtual scrolling functionality]({% slug scrollmmodes_grid_kendouiforangular %}).
     */
    rowHeight: number;
    /**
     * Defines the detail row height that is used when the `scrollable` option of the Grid is set to `virtual`.
     * Required by the [virtual scrolling functionality]({% slug scrollmmodes_grid_kendouiforangular %}).
     */
    detailRowHeight: number;
    /**
     * Defines the number of records to be skipped by the pager.
     * Required by the [paging]({% slug paging_grid_kendouiforangular %}) functionality.
     */
    skip: number;
    /**
     * Defines the scroll mode used by the Grid.
     *
     * The available options are:
     *  - `none`&mdash;Renders no scrollbar.
     *  - `scrollable`&mdash;This is the default scroll mode. It requires the setting of the `height` option.
     *  - `virtual`&mdash;Displays no pager and renders a portion of the data (optimized rendering) while the user is scrolling the content.
     */
    scrollable: ScrollMode;
    /**
     * Enables the single-row [selection]({% slug selection_grid_kendouiforangular %}) of the Grid.
     */
    selectable: boolean;
    /**
     */
    /**
     * The descriptors by which the data will be sorted.
     */
    sort: Array<SortDescriptor>;
    /**
     * The descriptor by which the data will to be filtered.
     */
    filter: CompositeFilterDescriptor;
    /**
     */
    /**
     * The descriptors by which the data will to be grouped.
     */
    group: Array<GroupDescriptor>;
    /**
     * @hidden
     */
    readonly isLocked: boolean;
    /**
     * @hidden
     */
    readonly showPager: boolean;
    /**
     * @hidden
     */
    readonly showGroupPanel: boolean;
    /**
     * Enables the [filtering]({% slug filtering_grid_kendouiforangular %}) of the Grid columns that have their `field` option set.
     */
    filterable: boolean;
    /**
     * Enables the [sorting]({% slug sorting_grid_kendouiforangular %}) of the Grid columns that have their `field` option set.
     */
    sortable: SortSettings;
    /**
     * Configures the pager of the Grid.
     *
     * The available options are:
     *
     * - `buttonCount: Number`&mdash;Sets the maximum numeric buttons count before the buttons are collapsed.
     * - `info: Boolean`&mdash;Toggles the information about the current page and the total number of records.
     * - `type: PagerType`&mdash;Accepts the `numeric` (buttons with numbers) and `input` (input for typing the page number) values.
     * - `pageSizes: Boolean` or `Array<number>`&mdash;Shows a menu for selecting the page size.
     * - `previousNext: Boolean`&mdash;Toggles the **Previous** and **Next** buttons.
     */
    pageable: PagerSettings | boolean;
    /**
     * If set to `true`, the user can group the Grid by dragging the column header cells.
     * By default, grouping is disabled.
     */
    groupable: GroupableSettings | boolean;
    /**
     * Fires when the Grid filter is modified through the UI.
     * You have to handle the event yourself and filter the data.
     */
    filterChange: EventEmitter<{
        filter: CompositeFilterDescriptor;
    }>;
    /**
     * Fires when the page of the Grid is changed.
     * You have to handle the event yourself and page the data.
     */
    pageChange: EventEmitter<PageChangeEvent>;
    /**
     * Fires when the grouping of the Grid is changed.
     * You have to handle the event yourself and group the data.
     */
    groupChange: EventEmitter<Array<GroupDescriptor>>;
    /**
     * Fires when the sorting of the Grid is changed.
     * You have to handle the event yourself and sort the data.
     */
    sortChange: EventEmitter<Array<SortDescriptor>>;
    /**
     * Fires when the user selects a Grid row.
     * Emits the [`SelectionEvent`]({% slug api_grid_selectionevent_kendouiforangular %}#toc-selectionchange).
     */
    selectionChange: EventEmitter<SelectionEvent>;
    /**
     * Fires when the data state of the Grid is changed.
     */
    dataStateChange: EventEmitter<DataStateChangeEvent>;
    /**
     * Fires when the user expands a group header.
     */
    groupExpand: EventEmitter<{
        group: GroupResult;
    }>;
    /**
     * Fires when the user collapses a group header.
     */
    groupCollapse: EventEmitter<{
        group: GroupResult;
    }>;
    /**
     * Fires when the user expands a master row.
     */
    detailExpand: EventEmitter<{
        index: number;
        dataItem: any;
    }>;
    /**
     * Fires when the user collapses a master row.
     */
    detailCollapse: EventEmitter<{
        index: number;
        dataItem: any;
    }>;
    /**
     * Fires when the user clicks the **Edit** command button to edit a row.
     */
    edit: EventEmitter<{
        dataItem: any;
        isNew: boolean;
        rowIndex: number;
        sender: GridComponent;
    }>;
    /**
     * Fires when the user clicks the **Cancel** command button to close a row.
     */
    cancel: EventEmitter<{
        dataItem: any;
        isNew: boolean;
        rowIndex: number;
        formGroup: FormGroup;
        sender: GridComponent;
    }>;
    /**
     * Fires when the user clicks the **Save** command button to save changes in a row.
     */
    save: EventEmitter<{
        dataItem: any;
        isNew: boolean;
        rowIndex: number;
        formGroup: FormGroup;
        sender: GridComponent;
    }>;
    /**
     * Fires when the user clicks the **Remove** command button to remove a row.
     */
    remove: EventEmitter<{
        dataItem: any;
        isNew: boolean;
        rowIndex: number;
        sender: GridComponent;
    }>;
    /**
     * Fires when the user clicks the **Add** command button to add a new row.
     */
    add: EventEmitter<{
        dataItem: any;
        isNew: boolean;
        rowIndex: number;
        sender: GridComponent;
    }>;
    columns: QueryList<ColumnBase>;
    readonly hostClasses: boolean;
    readonly lockedClasses: boolean;
    readonly virtualClasses: boolean;
    detailTemplate: DetailTemplateDirective;
    noRecordsTemplate: NoRecordsTemplateDirective;
    lockedHeader: any;
    header: any;
    footer: any;
    list: ListComponent;
    scrollbarWidth: number;
    columnsContainer: ColumnsContainer;
    view: DataCollection;
    readonly showGroupFooters: boolean;
    readonly showFooter: boolean;
    private shouldGenerateColumns;
    private _sort;
    private _group;
    readonly isVirtual: boolean;
    readonly isScrollable: boolean;
    readonly lockedColumns: QueryList<ColumnBase>;
    readonly nonLockedColumns: QueryList<ColumnBase>;
    readonly lockedLeafColumns: QueryList<ColumnBase>;
    readonly nonLockedLeafColumns: QueryList<ColumnBase>;
    readonly leafColumns: QueryList<ColumnBase>;
    readonly totalColumnLevels: number;
    readonly lockedWidth: number;
    readonly nonLockedWidth: number;
    private selectionSubscription;
    private stateChangeSubscription;
    private groupExpandCollapseSubscription;
    private detailsServiceSubscribtion;
    private editServiceSubscription;
    constructor(supportService: BrowserSupportService, selectionService: SelectionService, wrapper: ElementRef, groupInfoService: GroupInfoService, groupsService: GroupsService, changeNotification: ChangeNotificationService, detailsService: DetailsService, editService: EditService, filterService: FilterService);
    /**
     * Expands the specified master row.
     *
     * @param {number} index - The absolute index of the master row.
     */
    expandRow(index: number): void;
    /**
     * Collapses the specified master row.
     *
     * @param {number} index - The absolute index of the master row.
     */
    collapseRow(index: number): void;
    /**
     * Expands a group header item for the given index.
     * For example, `0_1` expands the second inner group of the first master group.
     *
     * @param {string} index - The underscore separated hierarchical index of the group.
     */
    expandGroup(index: string): void;
    /**
     * Collapses a group header item for the given index.
     * For example, `0_1` collapses the second inner group of the first master group.
     *
     * @param {string} index - The underscore separated hierarchical index of the group.
     */
    collapseGroup(index: string): void;
    /**
     * @hidden
     */
    onDataChange(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngAfterViewInit(): void;
    ngAfterContentChecked(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    /**
     * @hidden
     */
    containerScroll({scrollLeft}: {
        scrollTop: number;
        scrollLeft: number;
    }): void;
    /**
     * Switches the specified table row in the edit mode.
     *
     * @param {number} index - The row index that will be switched in the edit mode.
     * @param {FormGroup} group - The [`FormGroup`](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html)
     * that describes the edit form.
     */
    editRow(index: number, group?: any): void;
    /**
     * Closes the editor for a given row.
     *
     * @param {number} index - The row index that will be switched out of the edit mode. If no index is provided, it is assumed
     * that the new item editor will be closed.
     */
    closeRow(index?: number): void;
    /**
     * Creates a new row editor.
     *
     * @param {FormGroup} group - The [`FormGroup`](https://angular.io/docs/ts/latest/api/forms/index/FormGroup-class.html) that describes
     * the edit form. If called with a data item, it will build the `FormGroup` from the data item fields.
     */
    addRow(group: any): void;
    /**
     * @hidden
     */
    notifyPageChange(source: string, event: any): void;
    private verifySettings();
    private autoGenerateColumns();
    private attachStateChangesEmitter();
    private attachEditHandlers();
    private emitCRUDEvent({action, rowIndex, formGroup, isNew});
}
