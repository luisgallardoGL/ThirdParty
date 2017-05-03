var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Injectable } from '@angular/core';
import { ConfigurationService } from './configuration.service';
/**
 * @hidden
 */
export var RootConfigurationService = (function (_super) {
    __extends(RootConfigurationService, _super);
    function RootConfigurationService() {
        _super.apply(this, arguments);
    }
    RootConfigurationService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RootConfigurationService.ctorParameters = function () { return []; };
    return RootConfigurationService;
}(ConfigurationService));
