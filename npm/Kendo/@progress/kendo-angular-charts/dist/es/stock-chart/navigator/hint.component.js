var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Input, ChangeDetectionStrategy, Component } from '@angular/core';
import { ConfigurationService } from '../../common/configuration.service';
import { SettingsComponent } from '../../common/settings.component';
/**
 * Default options for the navigator hint.
 */
export var NavigatorHintComponent = (function (_super) {
    __extends(NavigatorHintComponent, _super);
    function NavigatorHintComponent(configurationService) {
        _super.call(this, 'hint', configurationService);
        this.configurationService = configurationService;
    }
    NavigatorHintComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'kendo-chart-navigator-hint',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorHintComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    NavigatorHintComponent.propDecorators = {
        'content': [{ type: Input },],
        'format': [{ type: Input },],
        'visible': [{ type: Input },],
    };
    return NavigatorHintComponent;
}(SettingsComponent));
