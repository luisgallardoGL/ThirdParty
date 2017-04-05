var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { PanesTitleComponentGenerated } from '../pane/title.component.generated';
/**
 * The title configuration of the Chart pane.
 */
export var PanesTitleComponent = (function (_super) {
    __extends(PanesTitleComponent, _super);
    // Place custom properties here
    function PanesTitleComponent(configurationService) {
        _super.call(this, configurationService);
        this.configurationService = configurationService;
    }
    PanesTitleComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-pane-title',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    PanesTitleComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    return PanesTitleComponent;
}(PanesTitleComponentGenerated));
