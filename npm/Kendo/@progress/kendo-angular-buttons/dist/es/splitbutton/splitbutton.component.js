var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ElementRef, Input, Output, HostBinding, HostListener, Inject, Optional, EventEmitter, ContentChild, Renderer } from '@angular/core';
import { RTL } from '@progress/kendo-angular-l10n';
import { ListButton } from './../listbutton/list-button';
import { ButtonItemTemplateDirective } from './../listbutton/button-item-template.directive';
import { FocusService } from './../focusable/focus.service';
import { NavigationService } from './../navigation/navigation.service';
import { NAVIGATION_CONFIG } from './../navigation/navigation-config';
import { isPresent, isDocumentAvailable, guid } from './../util';
import { PreventableEvent } from '../preventable-event';
var NAVIGATION_SETTINGS = {
    useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER = {
    provide: NAVIGATION_CONFIG,
    useValue: NAVIGATION_SETTINGS
};
/**
 * Represents the Kendo UI SplitButton component for Angular.
 *
 * @example
 * ```ts
 * @@Component({
 * selector: 'my-app',
 * template: `
 *  <kendo-splitbutton [data]="data" [icon]="'paste'"
 *      (itemClick)="onSplitButtonItemClick($event)"
 *      (buttonClick)="onSplitButtonClick()">Paste</kendo-splitbutton>
 * `
 * })
 *
 * class AppComponent {
 *   public data: Array<any> = [{
 *       text: 'Keep Text Only',
 *       icon: 'paste-plain-text',
 *       click: () => { console.log('Keep Text Only click handler'); }
 *   }, {
 *       text: 'Paste as HTML',
 *       icon: 'paste-as-html'
 *   }, {
 *       text: 'Paste Markdown',
 *       icon: 'paste-markdown'
 *   }, {
 *       text: 'Set Default Paste'
 *   }];
 *
 *   public onSplitButtonClick(dataItem: any): void {
 *       console.log('Paste');
 *   }
 *
 *   public onSplitButtonItemClick(dataItem: any): void {
 *       if (dataItem) {
 *           console.log(dataItem.text);
 *       }
 *   }
 * }
 * ```
 */
export var SplitButtonComponent = (function (_super) {
    __extends(SplitButtonComponent, _super);
    function SplitButtonComponent(focusService, navigationService, wrapperRef, renderer, rtl) {
        _super.call(this, focusService, navigationService, wrapperRef, renderer);
        /**
         * Sets the text of the SplitButton.
         */
        this.text = '';
        /**
         * Defines an icon to be rendered next to the button text.
         */
        this.icon = '';
        /**
         * Defines an icon with a custom CSS class to be rendered next to the button text.
         */
        this.iconClass = '';
        /**
         * Defines the location of an image to be displayed next to the button text.
         */
        this.imageUrl = '';
        /**
         * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
         */
        this.tabIndex = 0;
        /**
         * Fires each time the user clicks the main button.
         */
        this.buttonClick = new EventEmitter();
        /**
         * Fires each time the user clicks on the drop-down list. The event data contains the data item bound to the clicked list item.
         */
        this.itemClick = new EventEmitter();
        /**
         * Fires each time the popup is about to open.
         * This event is preventable. If you cancel the event, the popup will remain closed.
         */
        this.open = new EventEmitter();
        /**
         * Fires each time the popup is about to close.
         * This event is preventable. If you cancel the event, the popup will remain opened.
         */
        this.close = new EventEmitter();
        this.listId = guid();
        this.buttonText = '';
        this.direction = rtl ? 'rtl' : 'ltr';
        this._itemClick = this.itemClick;
    }
    Object.defineProperty(SplitButtonComponent.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        /**
         * When set to `true`, disables a SplitButton item.
         */
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "popupSettings", {
        get: function () {
            if (!this._popupSettings) {
                this._popupSettings = { animate: true, popupClass: '' };
            }
            return this._popupSettings;
        },
        /**
         * Configures the popup of the SplitButton.
         *
         * The available options are:
         * - `animate`&mdash;Enables or disables the popup animation.
         * - `popupClass`&mdash;Specifies a list of CSS classes used for styling the popup.
         */
        set: function (value) {
            this._popupSettings = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "data", {
        get: function () {
            if (!this._data) {
                this.data = [];
            }
            return this._data;
        },
        /**
         * Sets the data of the SplitButton.
         *
         * > The data has to be provided in an array-like list.
         */
        set: function (data) {
            this._data = data || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "openState", {
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
                var eventArgs = new PreventableEvent();
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
    Object.defineProperty(SplitButtonComponent.prototype, "active", {
        /**
         * @hidden
         */
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "isFocused", {
        get: function () {
            return this._isFocused && !this._disabled;
        },
        set: function (value) {
            this._isFocused = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "widgetClasses", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "widgetTabIndex", {
        get: function () {
            return this.disabled ? -1 : this.tabIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "role", {
        get: function () {
            return 'listbox';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "ariaDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "ariaExpanded", {
        get: function () {
            return this.openState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "ariaHasPopup", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "ariaOwns", {
        get: function () {
            return this.listId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "ariaLabel", {
        get: function () {
            return this.buttonText + " splitbutton";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitButtonComponent.prototype, "dir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.onButtonFocus = function () {
        this.renderer.invokeElementMethod(this.wrapper, "focus");
        return true;
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.onButtonClick = function () {
        this.focusWrapper();
        this.buttonClick.emit();
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.focus = function () {
        this._isFocused = true;
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.keydown = function (event) {
        this.keyDownHandler(event);
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.keypress = function (event) {
        this.keyPressHandler(event);
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.keyup = function (event) {
        this.keyUpHandler(event);
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.ngAfterViewInit = function () {
        this.updateButtonText();
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('text')) {
            this.updateButtonText();
        }
    };
    /**
     * @hidden
     */
    SplitButtonComponent.prototype.togglePopupVisibility = function () {
        _super.prototype.togglePopupVisibility.call(this);
        this.openState = this._open;
    };
    Object.defineProperty(SplitButtonComponent.prototype, "anchorAlign", {
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
    Object.defineProperty(SplitButtonComponent.prototype, "popupAlign", {
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
    SplitButtonComponent.prototype.toggle = function (open) {
        if (!this.disabled) {
            this._open = (open === undefined) ? !this._open : open;
        }
    };
    Object.defineProperty(SplitButtonComponent.prototype, "isOpen", {
        /**
         * Returns the current open state of the popup.
         */
        get: function () {
            return this.openState;
        },
        enumerable: true,
        configurable: true
    });
    SplitButtonComponent.prototype.enterHanlder = function () {
        if (this.disabled) {
            return;
        }
        if (this.openState) {
            var focused = this.focusService.focused;
            if (isPresent(focused) && focused !== -1) {
                this.emitItemClickHandler(focused);
            }
        }
        else {
            this.buttonClick.emit();
        }
    };
    SplitButtonComponent.prototype.updateButtonText = function () {
        var _this = this;
        if (isDocumentAvailable()) {
            var innerText_1 = this.wrapper.innerText.split('\n').join('').trim();
            //setTimout is needed because of `Expression has changed after it was checked.` error;
            setTimeout(function () { _this.buttonText = innerText_1; }, 0);
        }
    };
    SplitButtonComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'kendoSplitButton',
                    providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER],
                    selector: 'kendo-splitbutton',
                    template: "\n        <button kendoButton #button\n            [disabled]=\"disabled\"\n            [icon]=\"icon\"\n            [class.k-state-active]=\"active\"\n            [iconClass]=\"iconClass\"\n            [imageUrl]=\"imageUrl\"\n            [tabindex]=\"-1\"\n            (focus)=\"onButtonFocus()\"\n            (click)=\"onButtonClick()\">\n            {{text}}<ng-content></ng-content>\n        </button><button kendoButton\n            [disabled]=\"disabled\"\n            [icon]=\"'arrow-s'\"\n            [tabindex]=\"-1\"\n            (focus)=\"onButtonFocus()\"\n            (click)=\"togglePopupVisibility()\">\n        </button>\n        <kendo-popup *ngIf=\"openState\"\n            [anchor]=\"button\"\n            [anchorAlign]=\"anchorAlign\"\n            [popupAlign]=\"popupAlign\"\n            [animate]=\"popupSettings.animate\"\n            [popupClass]=\"popupClasses\"\n            (anchorViewportLeave)=\"openState=false\">\n            <kendo-button-list [data]=\"data\"\n                [id]=\"listId\"\n                [textField]=\"textField\"\n                [itemTemplate]=\"itemTemplate\"\n                (onItemBlur)=\"blurHandler()\"\n                (onItemClick)=\"onItemClick($event)\">\n            </kendo-button-list>\n        </kendo-popup>\n    "
                },] },
    ];
    /** @nocollapse */
    SplitButtonComponent.ctorParameters = function () { return [
        { type: FocusService, },
        { type: NavigationService, },
        { type: ElementRef, },
        { type: Renderer, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [RTL,] },] },
    ]; };
    SplitButtonComponent.propDecorators = {
        'text': [{ type: Input },],
        'icon': [{ type: Input },],
        'iconClass': [{ type: Input },],
        'imageUrl': [{ type: Input },],
        'disabled': [{ type: Input },],
        'popupSettings': [{ type: Input },],
        'tabIndex': [{ type: Input },],
        'textField': [{ type: Input },],
        'itemTemplate': [{ type: ContentChild, args: [ButtonItemTemplateDirective,] },],
        'buttonClick': [{ type: Output },],
        'itemClick': [{ type: Output },],
        'data': [{ type: Input },],
        'open': [{ type: Output },],
        'close': [{ type: Output },],
        'isFocused': [{ type: HostBinding, args: ['class.k-state-focused',] },],
        'widgetClasses': [{ type: HostBinding, args: ['class.k-widget',] }, { type: HostBinding, args: ['class.k-split-button',] }, { type: HostBinding, args: ['class.k-button-group',] },],
        'widgetTabIndex': [{ type: HostBinding, args: ['tabindex',] },],
        'role': [{ type: HostBinding, args: ['attr.role',] },],
        'ariaDisabled': [{ type: HostBinding, args: ['attr.aria-disabled',] },],
        'ariaExpanded': [{ type: HostBinding, args: ['attr.aria-expanded',] },],
        'ariaHasPopup': [{ type: HostBinding, args: ['attr.aria-haspopup',] },],
        'ariaOwns': [{ type: HostBinding, args: ['attr.aria-owns',] },],
        'ariaLabel': [{ type: HostBinding, args: ['attr.aria-label',] },],
        'dir': [{ type: HostBinding, args: ['attr.dir',] },],
        'focus': [{ type: HostListener, args: ['focus',] },],
        'keydown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
        'keypress': [{ type: HostListener, args: ['keypress', ['$event'],] },],
        'keyup': [{ type: HostListener, args: ['keyup', ['$event'],] },],
    };
    return SplitButtonComponent;
}(ListButton));
