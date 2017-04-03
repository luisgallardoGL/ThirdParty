"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* tslint:disable:no-access-missing-member */
var core_1 = require('@angular/core');
var kendo_angular_l10n_1 = require('@progress/kendo-angular-l10n');
var button_item_template_directive_1 = require('../listbutton/button-item-template.directive');
var util_1 = require('../util');
var list_button_1 = require('../listbutton/list-button');
var focus_service_1 = require('../focusable/focus.service');
var navigation_service_1 = require('../navigation/navigation.service');
var navigation_config_1 = require('../navigation/navigation-config');
var preventable_event_1 = require('../preventable-event');
var NAVIGATION_SETTINGS = {
    useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER = {
    provide: navigation_config_1.NAVIGATION_CONFIG,
    useValue: NAVIGATION_SETTINGS
};
/**
 * Represents the Kendo UI DropDownButton component for Angular.
 *
 * @example
 * ```ts
 * @@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-dropdownbutton [data]="data">
 *    User Settings
 *  </kendo-dropdownbutton>
 * `
 * })
 * class AppComponent {
 *   public data: Array<any> = [{
 *       text: 'My Profile'
 *   }, {
 *       text: 'Friend Requests'
 *   }, {
 *       text: 'Account Settings'
 *   }, {
 *       text: 'Support'
 *   }, {
 *       text: 'Log Out'
 *   }];
 * }
 * ```
 */
var DropDownButtonComponent = (function (_super) {
    __extends(DropDownButtonComponent, _super);
    function DropDownButtonComponent(focusService, navigationService, wrapperRef, renderer, rtl) {
        _super.call(this, focusService, navigationService, wrapperRef, renderer);
        /**
         * Defines the name of an existing icon in the Kendo UI theme.
         */
        this.icon = '';
        /**
         * Defines the list of CSS classes used for styling the Button with custom icons.
         */
        this.iconClass = '';
        /**
         * Defines a URL for styling the button with a custom image.
         */
        this.imageUrl = '';
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        /**
         * Fires each time the user clicks on a drop-down list item. The event data contains the data item bound to the clicked list item.
         */
        this.itemClick = new core_1.EventEmitter();
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed.
         */
        this.open = new core_1.EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain opened.
         */
        this.close = new core_1.EventEmitter();
        this.listId = util_1.guid();
        this.direction = rtl ? 'rtl' : 'ltr';
        this._itemClick = this.itemClick;
    }
    Object.defineProperty(DropDownButtonComponent.prototype, "popupSettings", {
        get: function () {
            return this._popupSettings;
        },
        /**
         * Configures the popup of the DropDownButton.
         *
         * The available options are:
         * - `animate`&mdash;Enables or disables the popup animation.
         * - `popupClass`&mdash;Specifies the list of CSS classes used for styling the popup.
         */
        set: function (settings) {
            this._popupSettings = Object.assign({ animate: true, popupClass: '' }, settings);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * Sets the disabled state of the DropDownButton.
         */
        set: function (value) {
            if (value && this._open) {
                this.openState = false;
            }
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        /**
         * Sets or gets the data of the DropDownButton.
         *
         * > The data has to be provided in an array-like list.
         */
        set: function (data) {
            this._data = data || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "openState", {
        /**
         * @hidden
         */
        get: function () {
            return this._open;
        },
        /**
         * @hidden
         */
        set: function (open) {
            if (!this.disabled) {
                var eventArgs = new preventable_event_1.PreventableEvent();
                if (open) {
                    this.open.emit(eventArgs);
                }
                else {
                    this.close.emit(eventArgs);
                }
                if (!eventArgs.isDefaultPrevented()) {
                    this._open = open;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "componentTabIndex", {
        get: function () {
            return this.disabled ? (-1) : this.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "focused", {
        get: function () {
            return this._isFocused && !this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "role", {
        get: function () {
            return 'menu';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "ariaDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "ariaExpanded", {
        get: function () {
            return this.openState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "ariaHasPopup", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "ariaOwns", {
        get: function () {
            return this.listId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "widgetClasses", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "dir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "active", {
        /**
         * @hidden
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    DropDownButtonComponent.prototype.focus = function () {
        if (!this._disabled) {
            this._isFocused = true;
        }
    };
    /**
     * @hidden
     */
    DropDownButtonComponent.prototype.blur = function () {
        this._isFocused = false;
    };
    /**
     * @hidden
     */
    DropDownButtonComponent.prototype.keydown = function (event) {
        this.keyDownHandler(event);
    };
    /**
     * @hidden
     */
    DropDownButtonComponent.prototype.keypress = function (event) {
        this.keyPressHandler(event);
    };
    /**
     * @hidden
     */
    DropDownButtonComponent.prototype.keyup = function (event) {
        this.keyUpHandler(event);
    };
    /**
     * @hidden
     */
    DropDownButtonComponent.prototype.mousedown = function (event) {
        if (this._disabled) {
            event.preventDefault();
        }
    };
    /**
     * @hidden
     */
    DropDownButtonComponent.prototype.openPopup = function () {
        this.togglePopupVisibility();
        this.focusFirstItem();
    };
    Object.defineProperty(DropDownButtonComponent.prototype, "anchorAlign", {
        /**
         * @hidden
         */
        get: function () {
            var align = { horizontal: 'left', vertical: 'bottom' };
            if (this.direction === 'rtl') {
                align.horizontal = 'right';
            }
            return align;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DropDownButtonComponent.prototype, "popupAlign", {
        /**
         * @hidden
         */
        get: function () {
            var align = { horizontal: 'left', vertical: 'top' };
            if (this.direction === 'rtl') {
                align.horizontal = 'right';
            }
            return align;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggles the visibility of the popup.
     * If `toggle` method is used to open or close the popup, the `open` and `close` events will not be fired.
     *
     * @param open The state of the popup.
     */
    DropDownButtonComponent.prototype.toggle = function (open) {
        if (!this.disabled) {
            this._open = (open === undefined) ? !this._open : open;
        }
    };
    Object.defineProperty(DropDownButtonComponent.prototype, "isOpen", {
        /**
         * Returns the current open state of the popup.
         */
        get: function () {
            return this.openState;
        },
        enumerable: true,
        configurable: true
    });
    DropDownButtonComponent.prototype.subscribeNavigationEvents = function () {
        var _this = this;
        this.navigationSubscription = this.navigationService.navigate
            .subscribe(function (index) { _this.onArrowKeyNavigate(index); });
        this.enterPressSubscription = this.navigationService.enterpress.subscribe(function () { _this.onNavigationEnterPress(); });
        this.enterUpSubscription = this.navigationService.enterup.subscribe(function () { _this.onNavigationEnterUp(); });
        this.openSubscription = this.navigationService.open.subscribe(function () { _this.onNavigationOpen(); });
        this.closeSubscription = this.navigationService.close
            .merge(this.navigationService.esc)
            .subscribe(function () { _this.onNavigationClose(); });
    };
    DropDownButtonComponent.prototype.onNavigationEnterPress = function () {
        if (!this._disabled && !this.openState) {
            this._active = true;
        }
    };
    DropDownButtonComponent.prototype.onNavigationEnterUp = function () {
        if (!this._disabled && !this.openState) {
            this._active = false;
        }
        if (this.openState) {
            var focused = this.focusService.focused;
            if (util_1.isPresent(focused) && focused !== -1) {
                this.emitItemClickHandler(focused);
            }
        }
        this.togglePopupVisibility();
        if (this.openState) {
            this.focusFirstItem();
        }
        else {
            this.renderer.invokeElementMethod(this.wrapper, 'focus');
        }
    };
    DropDownButtonComponent.prototype.onNavigationOpen = function () {
        if (!this._disabled && !this.openState) {
            this.togglePopupVisibility();
            this.focusFirstItem();
        }
    };
    DropDownButtonComponent.prototype.onNavigationClose = function () {
        if (this.openState) {
            this.togglePopupVisibility();
            this.renderer.invokeElementMethod(this.wrapper, 'focus');
        }
    };
    DropDownButtonComponent.prototype.onArrowKeyNavigate = function (index) {
        this.focusService.focus(index);
    };
    DropDownButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'kendoDropDownButton',
                    providers: [focus_service_1.FocusService, navigation_service_1.NavigationService, NAVIGATION_SETTINGS_PROVIDER],
                    selector: 'kendo-dropdownbutton',
                    template: "\n        <button kendoButton #button\n            tabIndex=\"-1\"\n            type=\"button\"\n            [class.k-state-active]=\"active\"\n            [disabled]=\"disabled\"\n            [icon]=\"icon\"\n            [iconClass]=\"iconClass\"\n            [imageUrl]=\"imageUrl\"\n            (click)=\"openPopup()\">\n            <ng-content></ng-content>\n        </button>\n        <kendo-popup *ngIf=\"openState\"\n            [anchor]=\"button\"\n            [anchorAlign]=\"anchorAlign\"\n            [popupAlign]=\"popupAlign\"\n            [animate]=\"popupSettings?.animate\"\n            [popupClass]=\"popupClasses\"\n            (anchorViewportLeave)=\"openState=false\">\n            <kendo-button-list\n                [id]=\"listId\"\n                [data]=\"data\"\n                [textField]=\"textField\"\n                [itemTemplate]=\"itemTemplate\"\n                (onItemClick)=\"onItemClick($event)\">\n            </kendo-button-list>\n        </kendo-popup>\n    "
                },] },
    ];
    /** @nocollapse */
    DropDownButtonComponent.ctorParameters = function () { return [
        { type: focus_service_1.FocusService, },
        { type: navigation_service_1.NavigationService, },
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [kendo_angular_l10n_1.RTL,] },] },
    ]; };
    DropDownButtonComponent.propDecorators = {
        'icon': [{ type: core_1.Input },],
        'iconClass': [{ type: core_1.Input },],
        'imageUrl': [{ type: core_1.Input },],
        'popupSettings': [{ type: core_1.Input },],
        'textField': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'data': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'itemClick': [{ type: core_1.Output },],
        'open': [{ type: core_1.Output },],
        'close': [{ type: core_1.Output },],
        'componentTabIndex': [{ type: core_1.HostBinding, args: ['tabindex',] },],
        'focused': [{ type: core_1.HostBinding, args: ['class.k-state-focused',] },],
        'role': [{ type: core_1.HostBinding, args: ['attr.role',] },],
        'ariaDisabled': [{ type: core_1.HostBinding, args: ['attr.aria-disabled',] },],
        'ariaExpanded': [{ type: core_1.HostBinding, args: ['attr.aria-expanded',] },],
        'ariaHasPopup': [{ type: core_1.HostBinding, args: ['attr.aria-haspopup',] },],
        'ariaOwns': [{ type: core_1.HostBinding, args: ['attr.aria-owns',] },],
        'widgetClasses': [{ type: core_1.HostBinding, args: ['class.k-widget',] }, { type: core_1.HostBinding, args: ['class.k-dropdown-button',] },],
        'dir': [{ type: core_1.HostBinding, args: ['attr.dir',] },],
        'itemTemplate': [{ type: core_1.ContentChild, args: [button_item_template_directive_1.ButtonItemTemplateDirective,] },],
        'focus': [{ type: core_1.HostListener, args: ['focus',] },],
        'blur': [{ type: core_1.HostListener, args: ['blur',] },],
        'keydown': [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
        'keypress': [{ type: core_1.HostListener, args: ['keypress', ['$event'],] },],
        'keyup': [{ type: core_1.HostListener, args: ['keyup', ['$event'],] },],
        'mousedown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
    };
    return DropDownButtonComponent;
}(list_button_1.ListButton));
exports.DropDownButtonComponent = DropDownButtonComponent;
