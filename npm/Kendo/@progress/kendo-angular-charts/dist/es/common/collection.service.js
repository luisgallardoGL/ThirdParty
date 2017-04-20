import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/**
 * @hidden
 */
export var ItemChange = (function () {
    function ItemChange(sender, options) {
        this.sender = sender;
        this.options = options;
    }
    return ItemChange;
}());
/**
 * @hidden
 */
export var CollectionService = (function () {
    function CollectionService() {
        this.source = new Subject();
        this.onItemChange$ = this.source.asObservable();
    }
    CollectionService.prototype.notify = function (change) {
        this.source.next(change);
    };
    CollectionService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    CollectionService.ctorParameters = function () { return []; };
    return CollectionService;
}());
