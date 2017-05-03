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
var collection_service_1 = require("../common/collection.service");
var configuration_service_1 = require("../common/configuration.service");
var x_axis_item_component_generated_1 = require("./x-axis-item.component.generated");
/**
 * The configuration component for an X axis.
 */
var XAxisItemComponent = (function (_super) {
    __extends(XAxisItemComponent, _super);
    // Place custom properties here
    function XAxisItemComponent(configurationService, collectionService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    return XAxisItemComponent;
}(x_axis_item_component_generated_1.XAxisItemComponentGenerated));
XAxisItemComponent.decorators = [
    { type: core_1.Component, args: [{
                changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                providers: [configuration_service_1.ConfigurationService],
                selector: 'kendo-chart-x-axis-item',
                template: ''
            },] },
];
/** @nocollapse */
XAxisItemComponent.ctorParameters = function () { return [
    { type: configuration_service_1.ConfigurationService, },
    { type: collection_service_1.CollectionService, },
]; };
exports.XAxisItemComponent = XAxisItemComponent;
