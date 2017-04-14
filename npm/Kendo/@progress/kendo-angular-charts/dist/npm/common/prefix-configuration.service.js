"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var configuration_service_1 = require("./configuration.service");
var root_configuration_service_1 = require("./root-configuration.service");
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
        var _this = _super.call(this) || this;
        _this.rootService = rootService;
        _this.prefix = prefix;
        return _this;
    }
    PrefixConfigurationService.prototype.push = function (store) {
        this.rootService.notify(new configuration_service_1.Change(this.prefix, store));
    };
    PrefixConfigurationService.prototype.notify = function (change) {
        change.key = this.prefix + (change.key ? "." + change.key : '');
        this.rootService.notify(change);
    };
    return PrefixConfigurationService;
}(configuration_service_1.ConfigurationService));
PrefixConfigurationService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
PrefixConfigurationService.ctorParameters = function () { return [
    { type: root_configuration_service_1.RootConfigurationService, decorators: [{ type: core_1.Inject, args: [root_configuration_service_1.RootConfigurationService,] },] },
    { type: undefined, decorators: [{ type: core_1.Inject, args: [exports.PREFIX,] },] },
]; };
exports.PrefixConfigurationService = PrefixConfigurationService;
