var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { ZoomableComponentGenerated } from './zoomable.component.generated';
/**
 * Specifies if the Chart can be zoomed.
 */
export var ZoomableComponent = (function (_super) {
    __extends(ZoomableComponent, _super);
    // Place custom properties here
    function ZoomableComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    ZoomableComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-zoomable',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ZoomableComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return ZoomableComponent;
}(ZoomableComponentGenerated));
