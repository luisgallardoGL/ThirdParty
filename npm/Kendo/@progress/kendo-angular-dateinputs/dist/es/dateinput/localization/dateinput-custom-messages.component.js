var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, forwardRef } from '@angular/core';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { Messages } from './messages';
/**
 * Custom component messages override default component messages.
 */
export var DateInputCustomMessagesComponent = (function (_super) {
    __extends(DateInputCustomMessagesComponent, _super);
    function DateInputCustomMessagesComponent(service) {
        _super.call(this);
        this.service = service;
    }
    Object.defineProperty(DateInputCustomMessagesComponent.prototype, "override", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    DateInputCustomMessagesComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        {
                            provide: Messages,
                            useExisting: forwardRef(function () { return DateInputCustomMessagesComponent; }) // tslint:disable-line:no-forward-ref
                        }
                    ],
                    selector: 'kendo-dateinput-messages',
                    template: ""
                },] },
    ];
    /** @nocollapse */
    DateInputCustomMessagesComponent.ctorParameters = function () { return [
        { type: LocalizationService, },
    ]; };
    return DateInputCustomMessagesComponent;
}(Messages));
