import { Directive, HostListener, HostBinding } from '@angular/core';
import { EditService } from './edit.service';
/**
 * Represents the `add new item` command of the Grid.
 *
 * You can apply this directive to any `button` element inside a
 * [`ToolbarComponent`]({% slug api_grid_commandcolumncomponent_kendouiforangular %}).
 *
 * When an associated button with the directive is clicked, the
 * [`add`]({% slug api_grid_gridcomponent_kendouiforangular %}#toc-add) event
 * is triggered. For more information, refer to the [editing example]({% slug editing_grid_kendouiforangular %}).
 *
 * @example
 * ```ts-no-run
 * <kendo-grid>
 *   <kendo-grid-command-column title="command">
 *     <template>
 *       <button kendoGridAddCommand class="k-primary">Edit</button>
 *     </template>
 *   </kendo-grid-command-column>
 * </kendo-grid>
 * ```
 */
export var AddCommandDirective = (function () {
    function AddCommandDirective(editService) {
        this.editService = editService;
    }
    /**
     * @hidden
     */
    AddCommandDirective.prototype.click = function () {
        this.editService.beginAdd();
    };
    Object.defineProperty(AddCommandDirective.prototype, "buttonClass", {
        /**
         * @hidden
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AddCommandDirective.prototype, "commandClass", {
        /**
         * @hidden
         */
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AddCommandDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kendoGridAddCommand]'
                },] },
    ];
    /** @nocollapse */
    AddCommandDirective.ctorParameters = function () { return [
        { type: EditService, },
    ]; };
    AddCommandDirective.propDecorators = {
        'click': [{ type: HostListener, args: ['click',] },],
        'buttonClass': [{ type: HostBinding, args: ['class.k-button',] },],
        'commandClass': [{ type: HostBinding, args: ['class.k-grid-add-command',] },],
    };
    return AddCommandDirective;
}());
