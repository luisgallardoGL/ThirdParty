"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('./configuration.service');
var root_configuration_service_1 = require('./root-configuration.service');
/**
 * @hidden
 */
exports.PREFIX = new core_1.OpaqueToken('configuration prefix');
/**
 * @hidden
 */
var PrefixConfigurationService = (function (_super) {
    __extends(PrefixConfigurationService, _super);
    function PrefixConfigurationService(rootService, prefix) {
        _super.call(this);
        this.rootService = rootService;
        this.prefix = prefix;
    }
    PrefixConfigurationService.prototype.push = function (store) {
        this.rootService.notify(new configuration_service_1.Change(this.prefix, store));
    };
    PrefixConfigurationService.prototype.notify = function (change) {
        change.key = this.prefix + (change.key ? "." + change.key : '');
        this.rootService.notify(change);
    };
    PrefixConfigurationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    PrefixConfigurationService.ctorParameters = function () { return [
        { type: root_configuration_service_1.RootConfigurationService, decorators: [{ type: core_1.Inject, args: [root_configuration_service_1.RootConfigurationService,] },] },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.PREFIX,] },] },
    ]; };
    return PrefixConfigurationService;
}(configuration_service_1.ConfigurationService));
exports.PrefixConfigurationService = PrefixConfigurationService;
