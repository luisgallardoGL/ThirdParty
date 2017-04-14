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
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '../common/collection.service';
import { ConfigurationService } from '../common/configuration.service';
import { PaneComponentGenerated } from './pane.component.generated';
/**
 * The configuration component for a Chart pane.
 */
var PaneComponent = (function (_super) {
    __extends(PaneComponent, _super);
    // Place custom properties here
    function PaneComponent(configurationService, collectionService) {
        var _this = _super.call(this, configurationService, collectionService) || this;
        _this.configurationService = configurationService;
        _this.collectionService = collectionService;
        return _this;
    }
    return PaneComponent;
}(PaneComponentGenerated));
export { PaneComponent };
PaneComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [ConfigurationService],
                selector: 'kendo-chart-pane',
                template: ''
            },] },
];
/** @nocollapse */
PaneComponent.ctorParameters = function () { return [
    { type: ConfigurationService, },
    { type: CollectionService, },
]; };