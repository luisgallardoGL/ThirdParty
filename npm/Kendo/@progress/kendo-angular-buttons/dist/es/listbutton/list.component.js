import { Component, Input, Output, EventEmitter } from '@angular/core';
/**
 * @hidden
 */
export var ListComponent = (function () {
    function ListComponent() {
        this.onItemClick = new EventEmitter();
        this.onItemBlur = new EventEmitter();
    }
    ListComponent.prototype.getText = function (dataItem) {
        if (dataItem) {
            return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
        }
        return undefined;
    };
    ListComponent.prototype.getIconClasses = function (dataItem) {
        var icon = dataItem.icon ? 'k-icon k-i-' + dataItem.icon : undefined;
        return (_a = {},
            _a[icon || dataItem.iconClass] = true,
            _a
        );
        var _a;
    };
    ListComponent.prototype.onClick = function (index) {
        this.onItemClick.emit(index);
    };
    ListComponent.prototype.onBlur = function () {
        this.onItemBlur.emit();
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kendo-button-list',
                    template: "\n        <ul class=\"k-list k-reset\" unselectable=\"on\">\n            <li role=\"menuItem\" unselectable=\"on\" tabindex=\"-1\"\n                kendoButtonFocusable\n                *ngFor=\"let dataItem of data; let index = index;\"\n                [index]=\"index\"\n                [ngClass]=\"{'k-item': true, 'k-state-disabled': dataItem.disabled}\"\n                (click)=\"onClick(index)\"\n                (blur)=\"onBlur()\"\n                [attr.aria-disabled]=\"dataItem.disabled ? true : false\">\n                <template *ngIf=\"itemTemplate?.templateRef\"\n                    [templateContext]=\"{\n                        templateRef: itemTemplate?.templateRef,\n                        $implicit: dataItem\n                    }\">\n                </template>\n                <template [ngIf]=\"!itemTemplate?.templateRef\">\n                    <span\n                        *ngIf=\"dataItem.icon || dataItem.iconClass\"\n                        [ngClass]=\"getIconClasses(dataItem)\"\n                    ></span>\n                    <img\n                        *ngIf=\"dataItem.imageUrl\"\n                        class=\"k-image\"\n                        [src]=\"dataItem.imageUrl\"\n                        alt=\"\"\n                    >\n                    {{ getText(dataItem) }}\n                </template>\n            </li>\n        </ul>\n      "
                },] },
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return []; };
    ListComponent.propDecorators = {
        'data': [{ type: Input },],
        'textField': [{ type: Input },],
        'itemTemplate': [{ type: Input },],
        'onItemClick': [{ type: Output },],
        'onItemBlur': [{ type: Output },],
    };
    return ListComponent;
}());
