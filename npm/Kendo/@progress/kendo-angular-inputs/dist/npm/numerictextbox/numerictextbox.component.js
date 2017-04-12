"use strict";
var core_1 = require('@angular/core');
var enums_1 = require('../common/enums');
var max_validator_1 = require('../common/max.validator');
var min_validator_1 = require('../common/min.validator');
var forms_1 = require('@angular/forms');
var kendo_angular_intl_1 = require('@progress/kendo-angular-intl');
/**
 * Represents the Kendo UI NumericTextBox component for Angular 2.
 */
var NumericTextBoxComponent = (function () {
    function NumericTextBoxComponent(intl, renderer, el) {
        this.intl = intl;
        this.renderer = renderer;
        /**
         * Sets the title of the **Increase** button of the NumericTextBox.
         */
        this.incrementTitle = 'increment';
        /**
         * Sets the title of the **Decrease** button of the NumericTextBox.
         */
        this.decrementTitle = 'decrement';
        /**
         * Sets the title of the input element of the NumericTextBox.
         */
        this.title = '';
        /**
         * Specifies whether the value will be auto-corrected based on the min and max values.
         */
        this.autoCorrect = false;
        /**
         * Specifies the number format used when the component is not focused.
         */
        this.format = "n2";
        /**
         * Specifies the number precision applied to the component value when it is focused.
         * If the user enters a number with a greater precision than is currently configured, the component value is rounded.
         */
        this.decimals = null;
        /**
         * Specifies the value used to increment or decrement the component value.
         */
        this.step = 1;
        /**
         * Specifies whether the **Up** and **Down** spin buttons should be rendered.
         */
        this.spinners = true;
        /**
         * Specifies whether the value should be rounded or truncated.
         * The length of the fraction is defined by the value of decimals.
         */
        this.round = true;
        /**
         * Specifies whether the length of decimals should be restricted during typing.
         * The length of the fraction is defined by the value of decimals.
         */
        this.restrictDecimals = false;
        /**
         * Fires each time the user selects a new value.
         */
        this.valueChange = new core_1.EventEmitter();
        /**
         * Fires each time the user focuses the input element.
         */
        this.focus = new core_1.EventEmitter();
        /**
         * Fires each time the input element gets blurred.
         */
        this.blur = new core_1.EventEmitter();
        this.focused = false;
        this.DECIMAL_SEPARATOR = ".";
        this.INTEGER_REGEXP = /^(-)?(\d*)$/;
        this.minValidateFn = null;
        this.maxValidateFn = null;
        this.ngChange = function (_) { };
        this.ngTouched = function () { };
        this.wrapper = el.nativeElement;
    }
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.hostBlur = function () {
        this.ngTouched();
    };
    Object.defineProperty(NumericTextBoxComponent.prototype, "widgetClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NumericTextBoxComponent.prototype, "numericClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(NumericTextBoxComponent.prototype, "tabIndex", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.keydown = function (event) {
        switch (event.keyCode) {
            case enums_1.Keys.down:
                event.preventDefault();
                this.decreaseValue();
                break;
            case enums_1.Keys.up:
                event.preventDefault();
                this.increaseValue();
                break;
            default: break;
        }
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.ngOnChanges = function (inputs) {
        if (inputs.max) {
            this.maxValidateFn = max_validator_1.createMaxValidator(this.max);
        }
        if (inputs.min) {
            this.minValidateFn = min_validator_1.createMinValidator(this.min);
        }
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.validate = function (c) {
        var validationResult = null;
        if (this.minValidateFn) {
            validationResult = this.minValidateFn(c);
        }
        if (this.maxValidateFn && !validationResult) {
            validationResult = this.maxValidateFn(c);
        }
        return validationResult;
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.ngOnInit = function () {
        if (this.value || this.value === 0) {
            this.changeValue(this.value);
        }
    };
    //ngModel binding
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.writeValue = function (value) {
        this.changeValue(value);
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.registerOnChange = function (fn) {
        this.ngChange = fn;
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.registerOnTouched = function (fn) {
        this.ngTouched = fn;
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.changeValue = function (value) {
        this.value = value;
        this.ngChange(value);
        if (this.value || this.value === 0) {
            this.changeText();
        }
        this.valueChange.emit(value);
    };
    /**
     * When the `decreaseValue` method is called, it decreases the value of the component by
     * subtracting the step property value.
     */
    NumericTextBoxComponent.prototype.decreaseValue = function () {
        this.changeValue(this.decreaseValueToStep(this.value, this.step));
    };
    /**
     * When the `increaseValue` method is called, it increases the value of the component by
     * adding the step property value.
     */
    NumericTextBoxComponent.prototype.increaseValue = function () {
        this.changeValue(this.increaseValueToStep(this.value, this.step));
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.keyPress = function (e) {
        if (e.which === 0 || e.keyCode === enums_1.Keys.backspace || e.keyCode === enums_1.Keys.enter) {
            return;
        }
        var start = e.target.selectionStart;
        var end = e.target.selectionEnd;
        var currentChar = String.fromCharCode(e.which);
        var text = this.numericInput.nativeElement.value;
        text = text.substring(0, start) + currentChar + text.substring(end);
        var isValid = this.numericRegex().test(text);
        if (!isValid) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.handleFocus = function (event) {
        this.focused = true;
        if ((this.value || this.value === 0)) {
            var formattedValue = this.formatNumberWithSettings();
            this.renderer.setElementProperty(this.numericInput.nativeElement, "value", formattedValue);
            this.renderer.invokeElementMethod(this.numericInput.nativeElement, "setSelectionRange", [formattedValue.length, formattedValue.length]);
        }
        this.focus.emit(event);
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.handleBlur = function (event) {
        if (!this.numericInput.nativeElement.value.length) {
            this.value = undefined;
        }
        this.focused = false;
        var parsedInput = this.intl.parseNumber(this.numericInput.nativeElement.value);
        if (parsedInput !== null) {
            if (this.decimals && this.round) {
                parsedInput = this.roundNumber(parsedInput, this.decimals);
            }
            if (this.decimals && !this.round) {
                parsedInput = this.truncateNumber(parsedInput, this.decimals);
            }
        }
        this.changeValue(parsedInput === null ? null : this.autoCorrect ? this.trimValue(parsedInput) : parsedInput);
        this.ngTouched();
        this.blur.emit(event);
    };
    /**
     * @hidden
     */
    NumericTextBoxComponent.prototype.handlePaste = function () {
        var that = this;
        var oldValue = this.numericInput.nativeElement.value;
        setTimeout(function () {
            var isValid = that.numericRegex().test(that.numericInput.nativeElement.value);
            if (!isValid) {
                that.renderer.setElementProperty(that.numericInput.nativeElement, "value", oldValue);
            }
        });
    };
    NumericTextBoxComponent.prototype.changeText = function () {
        if (this.focused) {
            this.renderer.setElementProperty(this.numericInput.nativeElement, "value", this.formatNumberWithSettings());
        }
        else {
            this.renderer.setElementProperty(this.numericInput.nativeElement, "value", this.intl.formatNumber(this.value, this.format));
        }
    };
    NumericTextBoxComponent.prototype.formatNumberWithSettings = function () {
        var numberOfDecimals;
        if (this.decimals !== null && this.restrictDecimals) {
            numberOfDecimals = this.decimals;
        }
        else {
            var currentValue = this.value;
            var decimalPart = currentValue.toString().split('.')[1];
            numberOfDecimals = !decimalPart || !decimalPart.length ? 0 : decimalPart.length;
        }
        return this.intl.formatNumber(this.value, {
            maximumFractionDigits: numberOfDecimals,
            minimumFractionDigits: numberOfDecimals, useGrouping: false
        });
    };
    NumericTextBoxComponent.prototype.numericRegex = function () {
        var symbols = this.intl.numberSymbols();
        var decimalSeparator = symbols.decimal;
        var fractionRule = "*";
        if (decimalSeparator === this.DECIMAL_SEPARATOR) {
            decimalSeparator = "\\" + decimalSeparator;
        }
        if (this.decimals === 0) {
            return this.INTEGER_REGEXP;
        }
        if (this.decimals && this.restrictDecimals) {
            fractionRule = "{0," + this.decimals + "}";
        }
        return new RegExp("^(-)?(((\\d+(" + decimalSeparator + "\\d" + fractionRule +
            ")?)|(" + decimalSeparator + "\\d" + fractionRule + ")))?$");
    };
    NumericTextBoxComponent.prototype.trimValue = function (value) {
        if (this.max !== undefined && value > this.max) {
            return this.max;
        }
        if (this.min !== undefined && value < this.min) {
            return this.min;
        }
        return value;
    };
    NumericTextBoxComponent.prototype.roundNumber = function (value, precision) {
        var result = value;
        var decimals = precision || 0;
        result = result.toString().split('e');
        result = Math.round(Number(result[0] + 'e' + (result[1] ? (Number(result[1]) + decimals) : decimals)));
        result = result.toString().split('e');
        result = Number(result[0] + 'e' + (result[1] ? (Number(result[1]) - decimals) : -decimals));
        return Number(result.toFixed(decimals));
    };
    NumericTextBoxComponent.prototype.truncateNumber = function (value, precision) {
        var parts = value.toString().split('.');
        if (parts[1]) {
            parts[1] = parts[1].substring(0, precision);
        }
        return this.intl.parseNumber(parts.join('.'));
    };
    NumericTextBoxComponent.prototype.increaseValueToStep = function (value, step) {
        if (value === null || value === undefined) {
            value = 0;
        }
        var increasedValue = value + step;
        return this.autoCorrect ? this.trimValue(increasedValue) : increasedValue;
    };
    NumericTextBoxComponent.prototype.decreaseValueToStep = function (value, step) {
        if (value === null || value === undefined) {
            value = 0;
        }
        var decreasedValue = value - step;
        return this.autoCorrect ? this.trimValue(decreasedValue) : decreasedValue;
    };
    NumericTextBoxComponent.decorators = [
        { type: core_1.Component, args: [{
                    providers: [
                        { provide: forms_1.NG_VALUE_ACCESSOR, useExisting: core_1.forwardRef(function () { return NumericTextBoxComponent; }), multi: true },
                        { provide: forms_1.NG_VALIDATORS, useExisting: core_1.forwardRef(function () { return NumericTextBoxComponent; }), multi: true } /* tslint:disable-line */
                    ],
                    selector: 'kendo-numerictextbox',
                    template: "\n    <span class=\"k-numeric-wrap\">\n        <input\n        (keypress)=\"keyPress($event)\"\n        [title]=\"title\"\n        role=\"spinbutton\"\n        [attr.aria-valuemin]=\"min\"\n        [attr.aria-valuemax]=\"max\"\n        [attr.aria-valuenow]=\"value\"\n        class=\"k-input\"\n        [class.k-formatted-value]=\"!focused\"\n        (paste)=\"handlePaste()\"\n        (focus)=\"handleFocus($event)\"\n        (blur)=\"handleBlur($event)\"\n        #numericInput />\n        <span class=\"k-select\" *ngIf=\"spinners\">\n            <span (click)=\"increaseValue()\" class=\"k-link k-link-increase\"\n                [title]=\"incrementTitle\"\n                [attr.aria-label]=\"incrementTitle\">\n                <span class=\"k-icon k-i-arrow-n\"></span>\n            </span>\n            <span (click)=\"decreaseValue()\" class=\"k-link k-link-decrease\"\n                [title]=\"decrementTitle\"\n                [attr.aria-label]=\"decrementTitle\">\n                <span class=\"k-icon k-i-arrow-s\"></span>\n            </span>\n        </span>\n    </span>\n  "
                },] },
    ];
    /** @nocollapse */
    NumericTextBoxComponent.ctorParameters = function () { return [
        { type: kendo_angular_intl_1.IntlService, },
        { type: core_1.Renderer, },
        { type: core_1.ElementRef, },
    ]; };
    NumericTextBoxComponent.propDecorators = {
        'incrementTitle': [{ type: core_1.Input },],
        'decrementTitle': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'autoCorrect': [{ type: core_1.Input },],
        'format': [{ type: core_1.Input },],
        'max': [{ type: core_1.Input },],
        'min': [{ type: core_1.Input },],
        'decimals': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'spinners': [{ type: core_1.Input },],
        'round': [{ type: core_1.Input },],
        'restrictDecimals': [{ type: core_1.Input },],
        'value': [{ type: core_1.Input },],
        'valueChange': [{ type: core_1.Output },],
        'focus': [{ type: core_1.Output },],
        'blur': [{ type: core_1.Output },],
        'numericInput': [{ type: core_1.ViewChild, args: ['numericInput',] },],
        'hostBlur': [{ type: core_1.HostListener, args: ['blur',] },],
        'widgetClass': [{ type: core_1.HostBinding, args: ['class.k-widget',] },],
        'numericClass': [{ type: core_1.HostBinding, args: ['class.k-numerictextbox',] },],
        'tabIndex': [{ type: core_1.HostBinding, args: ['tabIndex',] },],
        'keydown': [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return NumericTextBoxComponent;
}());
exports.NumericTextBoxComponent = NumericTextBoxComponent;
