import { Change } from './configuration.service';
import { copyChanges } from './copy-changes';
var VISIBLE_KEY = 'visible';
/**
 * @hidden
 */
export var SettingsComponent = (function () {
    function SettingsComponent(configKey, configurationService) {
        this.configKey = configKey;
        this.configurationService = configurationService;
        this.hiddenByDefault = false;
        this.store = {};
        this.userSetVisible = false;
        if (configKey === undefined) {
            throw 'Configuration key not set';
        }
    }
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.store = undefined;
        this.notify();
    };
    SettingsComponent.prototype.ngOnChanges = function (changes) {
        copyChanges(changes, this.store);
        this.toggleVisibility(changes[VISIBLE_KEY]);
        // This is the only property we need to rename for now
        // hence the quick and dirty replacement
        if (typeof (this.store.content) === "function") {
            this.store.template = this.store.content;
            delete this.store.content;
        }
        this.notify();
    };
    SettingsComponent.prototype.toggleVisibility = function (change) {
        if (!this.store || !this.hiddenByDefault) {
            // No automatic toggling necessary
            return;
        }
        if (change || this.userSetVisible) {
            // Visibility is controlled by user
            this.userSetVisible = true;
            return;
        }
        var keyCount = Object.keys(this.store).length;
        if (keyCount === 0) {
            // Empty store, no action necessary
            return;
        }
        if (this.store.visible && keyCount === 1) {
            // Resetting automatic visibility
            delete this.store.visible;
            return;
        }
        // Set automatic visibility to true
        this.store.visible = true;
        this.userSetVisible = false;
    };
    SettingsComponent.prototype.notify = function () {
        this.configurationService.notify(new Change(this.configKey, this.store));
    };
    return SettingsComponent;
}());
