"use strict";
var collection_service_1 = require("./collection.service");
var copy_changes_1 = require('./copy-changes');
/**
 * @hidden
 */
var CollectionItemComponent = (function () {
    function CollectionItemComponent(configurationService, collectionService) {
        var _this = this;
        this.configurationService = configurationService;
        this.collectionService = collectionService;
        this.options = {};
        this.subscription = configurationService.onFastChange$.subscribe(function (store) {
            _this.options = store;
            _this.notify();
        });
    }
    CollectionItemComponent.prototype.ngOnChanges = function (changes) {
        var store = this.configurationService.store;
        copy_changes_1.copyChanges(changes, store);
        this.configurationService.push(store);
    };
    CollectionItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CollectionItemComponent.prototype.notify = function () {
        this.collectionService.notify(new collection_service_1.ItemChange(this, this.options));
    };
    return CollectionItemComponent;
}());
exports.CollectionItemComponent = CollectionItemComponent;
