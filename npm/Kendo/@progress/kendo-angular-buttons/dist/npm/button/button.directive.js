"use strict";
var core_1 = require('@angular/core');
var kendo_angular_l10n_1 = require('@progress/kendo-angular-l10n');
var button_service_1 = require('./button.service');
var util_1 = require('../util');
/**
 * Represents the Kendo UI Button component for Angular.
 */
var ButtonDirective = (function () {
    function ButtonDirective(element, renderer, service, rtl) {
        this.service = service;
        /**
         * Provides visual styling that indicates if the Button is active.
         * By default, `togglable` is set to `false`.
         */
        this.togglable = false;
        /**
         * Adds visual weight to the Button and makes it primary.
         */
        this.primary = false;
        /**
         * Reduces the visual weight of the Button by removing its background/outline.
         */
        this.bare = false;
        this.isDisabled = false;
        this.isIcon = false;
        this.isIconClass = false;
        /**
         * Sets the selected state of the Button.
         */
        this.selected = false;
        /**
         * Sets the tabIndex of the Button.
         */
        this.tabIndex = 0;
        this.direction = rtl ? 'rtl' : 'ltr';
        this.element = element.nativeElement;
        this.renderer = renderer;
    }
    Object.defineProperty(ButtonDirective.prototype, "icon", {
        /**
         * Defines a name of an existing icon in the Kendo UI theme.
         * The icon is rendered by a `span.k-icon` element inside the Button.
         */
        set: function (icon) {
            var _this = this;
            if (icon) {
                this.iconSetter(icon, function () {
                    _this.isIcon = true;
                    var classes = 'k-icon k-i-' + icon;
                    _this.addIcon(classes);
                });
            }
            else {
                this.isIcon = false;
                this.updateIconNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "iconClass", {
        /**
         * Defines a CSS class&mdash;or multiple classes separated by spaces&mdash;
         * which are applied to a `span` element inside the Button. Allows the use of custom icons.
         */
        set: function (iconClassName) {
            var _this = this;
            if (iconClassName) {
                this.iconSetter(iconClassName, function () {
                    _this.isIconClass = true;
                    _this.addIcon(iconClassName);
                });
            }
            else {
                this.isIconClass = false;
                this.updateIconNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "imageUrl", {
        /**
         * Defines a URL, which is used for an `img` element inside the Button.
         * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
         */
        set: function (imageUrl) {
            if (imageUrl) {
                this.iconSetter(imageUrl, this.addImgIcon.bind(this));
            }
            else {
                this.removeImageNode();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "disabled", {
        /**
         * Disables the Button if set to `true`.
         */
        set: function (disabled) {
            this.isDisabled = disabled;
            this.renderer.setElementProperty(this.element, 'disabled', disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classButton", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classDisabled", {
        get: function () {
            return this.isDisabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classPrimary", {
        get: function () {
            return this.primary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classBare", {
        get: function () {
            return this.bare;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classActive", {
        get: function () {
            return this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classIconText", {
        get: function () {
            return this.isIcon && this.hasText();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "classIcon", {
        get: function () {
            return this.isIcon && !this.hasText();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    ButtonDirective.prototype.onClick = function () {
        if (!this.togglable) {
            return;
        }
        if (!this.disabled && this.service) {
            this.service.click(this);
        }
        if (!this.service) {
            this.selected = !this.selected;
        }
    };
    Object.defineProperty(ButtonDirective.prototype, "dir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    ButtonDirective.prototype.ngOnDestroy = function () {
        this.removeNodes();
    };
    /**
     * @hidden
     */
    ButtonDirective.prototype.setAttribute = function (attribute, value) {
        this.renderer.setElementAttribute(this.element, attribute, value);
    };
    ButtonDirective.prototype.hasText = function () {
        var textContent = 0;
        if (util_1.isDocumentAvailable()) {
            textContent = this.element.innerText.length;
        }
        return textContent > 0;
    };
    ButtonDirective.prototype.addImgIcon = function (imageUrl) {
        var renderer = this.renderer;
        if (this.imageNode) {
            renderer.setElementProperty(this.imageNode, 'src', imageUrl);
        }
        else if (util_1.isDocumentAvailable()) {
            this.imageNode = this.createFirstChildElement('img');
            renderer.setElementProperty(this.imageNode, 'src', imageUrl);
            renderer.setElementProperty(this.imageNode, 'className', 'k-image');
            renderer.setElementAttribute(this.imageNode, 'role', 'presentation');
        }
    };
    ButtonDirective.prototype.addIcon = function (classNames) {
        var renderer = this.renderer;
        if (this.iconNode) {
            renderer.setElementProperty(this.iconNode, 'className', classNames);
        }
        else if (util_1.isDocumentAvailable()) {
            this.iconNode = this.createFirstChildElement('span');
            renderer.setElementProperty(this.iconNode, 'className', classNames);
            renderer.setElementAttribute(this.iconNode, 'role', 'presentation');
        }
    };
    ButtonDirective.prototype.createFirstChildElement = function (tagName) {
        var node = this.renderer.createElement(this.element, tagName);
        if (node !== this.element.firstChild) {
            this.renderer.invokeElementMethod(this.element, 'insertBefore', [node, this.element.firstChild]);
        }
        return node;
    };
    ButtonDirective.prototype.iconSetter = function (icon, insertIcon) {
        if (icon) {
            insertIcon(icon);
        }
    };
    ButtonDirective.prototype.removeNodes = function () {
        this.removeImageNode();
        this.removeIconNode();
    };
    ButtonDirective.prototype.removeImageNode = function () {
        if (this.imageNode) {
            this.renderer.invokeElementMethod(this.element, 'removeChild', [this.imageNode]);
            this.imageNode = undefined;
        }
    };
    ButtonDirective.prototype.removeIconNode = function () {
        if (this.iconNode) {
            this.renderer.invokeElementMethod(this.element, 'removeChild', [this.iconNode]);
            this.iconNode = undefined;
        }
    };
    ButtonDirective.prototype.updateIconNode = function () {
        if (!this.isIcon && !this.isIconClass) {
            this.removeIconNode();
        }
    };
    ButtonDirective.decorators = [
        { type: core_1.Directive, args: [{
                    exportAs: 'kendoButton',
                    selector: 'button[kendoButton]' // tslint:disable-line
                },] },
    ];
    /** @nocollapse */
    ButtonDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer, },
        { type: button_service_1.KendoButtonService, decorators: [{ type: core_1.Optional },] },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [kendo_angular_l10n_1.RTL,] },] },
    ]; };
    ButtonDirective.propDecorators = {
        'togglable': [{ type: core_1.Input },],
        'primary': [{ type: core_1.Input },],
        'bare': [{ type: core_1.Input },],
        'selected': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'iconClass': [{ type: core_1.Input },],
        'imageUrl': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'classButton': [{ type: core_1.HostBinding, args: ['class.k-button',] },],
        'classDisabled': [{ type: core_1.HostBinding, args: ['class.k-state-disabled',] },],
        'classPrimary': [{ type: core_1.HostBinding, args: ['class.k-primary',] },],
        'classBare': [{ type: core_1.HostBinding, args: ['class.k-bare',] },],
        'classActive': [{ type: core_1.HostBinding, args: ['class.k-state-active',] },],
        'classIconText': [{ type: core_1.HostBinding, args: ['class.k-button-icontext',] },],
        'classIcon': [{ type: core_1.HostBinding, args: ['class.k-button-icon',] },],
        'onClick': [{ type: core_1.HostListener, args: ['click',] },],
        'dir': [{ type: core_1.HostBinding, args: ['attr.dir',] },],
    };
    return ButtonDirective;
}());
exports.ButtonDirective = ButtonDirective;
