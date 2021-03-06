import { ItemChange } from "./collection.service";
import { copyChanges } from './copy-changes';
/**
 * @hidden
 */
export var CollectionItemComponent = (function () {
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
        copyChanges(changes, store);
        this.configurationService.push(store);
    };
    CollectionItemComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CollectionItemComponent.prototype.notify = function () {
        this.collectionService.notify(new ItemChange(this, this.options));
    };
    return CollectionItemComponent;
}());
