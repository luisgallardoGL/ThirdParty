"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('./configuration.service');
/**
 * @hidden
 */
var RootConfigurationService = (function (_super) {
    __extends(RootConfigurationService, _super);
    function RootConfigurationService() {
        _super.apply(this, arguments);
    }
    RootConfigurationService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RootConfigurationService.ctorParameters = function () { return []; };
    return RootConfigurationService;
}(configuration_service_1.ConfigurationService));
exports.RootConfigurationService = RootConfigurationService;
