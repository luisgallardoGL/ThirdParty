var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../../common/configuration.service';
import { PanesTitleComponent } from '../../../chart/pane/title.component';
/**
 * The title configuration of the StockChart navigator pane.
 */
export var NavigatorPaneTitleComponent = (function (_super) {
    __extends(NavigatorPaneTitleComponent, _super);
    function NavigatorPaneTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    NavigatorPaneTitleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-pane-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorPaneTitleComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return NavigatorPaneTitleComponent;
}(PanesTitleComponent));
