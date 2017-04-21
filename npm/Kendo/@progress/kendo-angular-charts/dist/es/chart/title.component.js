var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { TitleComponentGenerated } from './title.component.generated';
/**
 * The Chart title configuration options or text.
 */
export var TitleComponent = (function (_super) {
    __extends(TitleComponent, _super);
    // Place custom properties here
    function TitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    TitleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    TitleComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return TitleComponent;
}(TitleComponentGenerated));
