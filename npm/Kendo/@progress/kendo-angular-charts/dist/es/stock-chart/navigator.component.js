var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ConfigurationService } from '../common/configuration.service';
import { PrefixConfigurationService, PREFIX } from '../common/prefix-configuration.service';
import { SettingsComponent } from '../common/settings.component';
export var NavigatorComponent = (function (_super) {
    __extends(NavigatorComponent, _super);
    function NavigatorComponent(configurationService) {
        _super.call(this, '', configurationService);
        this.configurationService = configurationService;
    }
    NavigatorComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{ provide: PREFIX, useValue: 'navigator' }, { provide: ConfigurationService, useClass: PrefixConfigurationService }],
                    selector: 'kendo-chart-navigator',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    NavigatorComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
    ]; };
    NavigatorComponent.propDecorators = {
        'visible': [{ type: Input },],
        'categoryAxis': [{ type: Input },],
        'hint': [{ type: Input },],
        'pane': [{ type: Input },],
        'select': [{ type: Input },],
        'series': [{ type: Input },],
    };
    return NavigatorComponent;
}(SettingsComponent));
