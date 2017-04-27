var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable, Inject, OpaqueToken } from '@angular/core';
import { ConfigurationService, Change } from './configuration.service';
import { RootConfigurationService } from './root-configuration.service';
/**
 * @hidden
 */
export var PREFIX = new OpaqueToken('configuration prefix');
/**
 * @hidden
 */
export var PrefixConfigurationService = (function (_super) {
    __extends(PrefixConfigurationService, _super);
    function PrefixConfigurationService(rootService, prefix) {
        _super.call(this);
        this.rootService = rootService;
        this.prefix = prefix;
    }
    PrefixConfigurationService.prototype.push = function (store) {
        this.rootService.notify(new Change(this.prefix, store));
    };
    PrefixConfigurationService.prototype.notify = function (change) {
        change.key = this.prefix + (change.key ? "." + change.key : '');
        this.rootService.notify(change);
    };
    PrefixConfigurationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    PrefixConfigurationService.ctorParameters = function () { return [
        { type: RootConfigurationService, decorators: [{ type: Inject, args: [RootConfigurationService,] },] },
        { type: undefined, decorators: [{ type: Inject, args: [PREFIX,] },] },
    ]; };
    return PrefixConfigurationService;
}(ConfigurationService));
