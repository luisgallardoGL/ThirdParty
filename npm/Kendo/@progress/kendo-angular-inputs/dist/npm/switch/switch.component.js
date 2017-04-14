"use strict";
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var enums_1 = require('../common/enums');
var kendo_inputs_common_1 = require('@telerik/kendo-inputs-common');
/**
 * Represents the Kendo UI Switch component for Angular.
 */
var SwitchComponent = (function () {
    function SwitchComponent() {
        var _this = this;
        /**
         * Changes the **On** label so it can be localized.
         */
        this.onLabel = "ON";
        /**
         * Changes the **Off** label so it can be localized.
         */
        this.offLabel = "OFF";
        /**
         * Sets the current value of the Switch when initially displayed.
         */
        this.checked = false;
        /**
         * Disables the Switch when set to `true`.
         */
        this.disabled = false;
        /**
         * Fires each time the user selects a new value.
         */
        this.valueChange = new core_1.EventEmitter();
        /**
         * @hidden
         */
        this.changeValue = function (value) {
            _this.checked = value;
            _this.ngChange(value);
        };
        this.ngChange = function (_) { };
        this.ngTouched = function () { };
        this.keyDownHandler = function (event) {
            var keyCode = event.keyCode;
            if (keyCode === enums_1.Keys.space || keyCode === enums_1.Keys.enter) {
                _this.controller.change(!_this.checked);
            }
        };
        this.ifEnabled = function (callback, event, emitEvent) {
            if (!_this.disabled) {
                callback(event);
                if (emitEvent !== undefined) {
                    _this.valueChange.emit(_this.checked);
                }
            }
        };
        this.applyStyle = function (props) {
            Object.keys(props).forEach(function (x) {
                _this.dragHandle.nativeElement.style[x] = props[x];
            });
        };
        this.updateView = function (elements) {
            if (_this.isDocumentAvailable()) {
                _this.applyStyle(_this.controller.addAnimation(elements.handle));
            }
        };
        this.controller = new kendo_inputs_common_1.SwitchController(this.updateView, this.changeValue);
    }
    /**
     * @hidden
     */
    SwitchComponent.prototype.keyDown = function ($event) {
        $event.preventDefault();
        this.ifEnabled(this.keyDownHandler, $event, true);
    };
    Object.defineProperty(SwitchComponent.prototype, "ariaDisabled", {
        get: function () {
            return this.disabled ? true : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "ariaChecked", {
        get: function () {
            return this.checked ? true : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "widget", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "switchClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "switchOn", {
        get: function () {
            return this.checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "switchOff", {
        get: function () {
            return !this.checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SwitchComponent.prototype, "stateDisabled", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    SwitchComponent.prototype.onBlur = function () {
        this.ngTouched();
    };
    /**
     * @hidden
     */
    SwitchComponent.prototype.ngAfterViewInit = function () {
        this.updateState();
    };
    /**
     * @hidden
     */
    SwitchComponent.prototype.onHandleDrag = function (event) {
        this.ifEnabled(this.controller.onDrag, event);
    };
    /**
     * @hidden
     */
    SwitchComponent.prototype.onHandlePress = function (event) {
        this.ifEnabled(this.controller.onPress, event);
    };
    /**
     * @hidden
     */
    SwitchComponent.prototype.onHandleRelease = function (event) {
        this.ifEnabled(this.controller.onRelease, event, true);
    };
    SwitchComponent.prototype.isDocumentAvailable = function () {
        return typeof document !== 'undefined';
    };
    SwitchComponent.prototype.updateState = function () {
        var coordsLeft = 0;
        var coordsRight = 0;
        var handleMargin = 0;
        var handleOffset = 0;
        var wrapperOffset = 0;
        if (this.isDocumentAvailable()) {
            coordsLeft = this.wrapper.nativeElement.getBoundingClientRect().left;
            coordsRight = this.wrapper.nativeElement.getBoundingClientRect().right;
            handleMargin = parseInt(getComputedStyle(this.dragHandle.nativeElement)['margin-right'], 10);
            handleOffset = this.dragHandle.nativeElement.offsetWidth;
            wrapperOffset = this.wrapper.nativeElement.offsetWidth;
        }
        this.controller.updateState({
            animate: false,
            checked: this.checked,
            coords: {
                left: coordsLeft,
                right: coordsRight
            },
            handleMargin: handleMargin,
            handleOffset: handleOffset,
            wrapperOffset: wrapperOffset
        });
    };
    //ngModel binding
    /**
     * @hidden
     */
    SwitchComponent.prototype.writeValue = function (value) {
        this.changeValue(value);
        this.updateState();
    };
    /**
     * @hidden
     */
    SwitchComponent.prototype.registerOnChange = function (fn) {
        this.ngChange = fn;
    };
    /**
     * @hidden
     */
    SwitchComponent.prototype.registerOnTouched = function (fn) {
        this.ngTouched = fn;
    };
    SwitchComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        { multi: true, provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return SwitchComponent; }) } /* tslint:disable-line */
                    ],
                    selector: 'kendo-switch',
                    template: "\n            <span class=\"k-switch-wrapper\">\n                <span class=\"k-switch-background\"></span>\n            </span>\n            <span\n                #wrapper\n                kendoDraggable\n                (kendo.drag)=\"onHandleDrag($event)\"\n                (kendo.press)=\"onHandlePress($event)\"\n                (kendo.release)=\"onHandleRelease($event)\"\n                class=\"k-switch-container\"\n                [attr.tabindex]=\"disabled ? undefined : 1\"\n                (blur)=\"onBlur()\"\n            >\n                <span #dragHandle class=\"k-switch-handle\">\n                    <span class=\"k-switch-label-on\">{{onLabel}}</span>\n                    <span class=\"k-switch-label-off\">{{offLabel}}</span>\n                </span>\n            </span>\n  "
                },] },
    ];
    /** @nocollapse */
    SwitchComponent.ctorParameters = function () { return []; };
    SwitchComponent.propDecorators = {
        'onLabel': [{ type: core_1.Input },],
        'offLabel': [{ type: core_1.Input },],
        'checked': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'valueChange': [{ type: core_1.Output },],
        'dragHandle': [{ type: core_1.ViewChild, args: ['dragHandle',] },],
        'wrapper': [{ type: core_1.ViewChild, args: ['wrapper',] },],
        'keyDown': [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
        'ariaDisabled': [{ type: core_1.HostBinding, args: ['attr.aria-disabled',] },],
        'ariaChecked': [{ type: core_1.HostBinding, args: ['attr.aria-checked',] },],
        'widget': [{ type: core_1.HostBinding, args: ['class.k-widget',] },],
        'switchClass': [{ type: core_1.HostBinding, args: ['class.k-switch',] },],
        'switchOn': [{ type: core_1.HostBinding, args: ['class.k-switch-on',] },],
        'switchOff': [{ type: core_1.HostBinding, args: ['class.k-switch-off',] },],
        'stateDisabled': [{ type: core_1.HostBinding, args: ['class.k-state-disabled',] },],
    };
    return SwitchComponent;
}());
exports.SwitchComponent = SwitchComponent;
