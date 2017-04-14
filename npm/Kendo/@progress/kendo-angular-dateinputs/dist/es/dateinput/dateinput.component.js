import { Component, Input, Output, ViewChild, EventEmitter, HostBinding, HostListener, isDevMode, Renderer, forwardRef } from '@angular/core';
import { minValidator } from '../validators/min.validator';
import { maxValidator } from '../validators/max.validator';
import { Keys } from './keys.enum';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { L10N_PREFIX, LocalizationService } from '@progress/kendo-angular-l10n';
import { IntlService } from '@progress/kendo-angular-intl';
import { cloneDate, isEqual } from '@progress/kendo-date-math';
import { noop, isInRange, dateInRange } from '../util';
var MIN_DOC_LINK = 'http://www.telerik.com/kendo-angular-ui/components/dateinputs/api/DateInputComponent/#toc-min';
var MAX_DOC_LINK = 'http://www.telerik.com/kendo-angular-ui/components/dateinputs/api/DateInputComponent/#toc-max';
var time = function (date) { return date ? date.getTime() : null; };
/**
 * Represents the Kendo UI DateInput component for Angular.
 */
export var DateInputComponent = (function () {
    function DateInputComponent(intl, renderer, localization) {
        this.intl = intl;
        this.renderer = renderer;
        this.localization = localization;
        /**
         * Sets or gets the `disabled` property of the DateInput and determines whether the component is active.
         */
        this.disabled = false;
        /**
         * Sets the title of the input element of the DateInput.
         */
        this.title = "";
        /**
         * Sets or gets the `tabIndex` property of the DateInput.
         * .
         */
        this.tabIndex = 0;
        /**
         * Specifies the date format that is used when the component is not focused.
         */
        this.format = "d";
        /**
         * Determines whether the built-in min or max validators are enforced when validating a form.
         */
        this.rangeValidation = true;
        /**
         * @hidden
         * Based on the min and max values, specifies whether the value will be auto-corrected while typing.
         */
        this.autoCorrect = false;
        /**
         * Specifies whether the **Up** and **Down** spin buttons will be rendered.
         */
        this.spinners = false;
        /**
         * Fires each time the user selects a new value.
         */
        this.valueChange = new EventEmitter();
        /**
         * Fires each time the user focuses the input element.
         *
         * @example
         * ```ts
         * @@Component({
         * selector: 'my-app',
         * template: `
         *  <kendo-dateinput (focus)="handleFocus()"></kendo-dateinput>
         * `
         * })
         * class AppComponent {
         *   public handleFocus(): void {
         *      console.log("Component is focused");
         *   }
         * }
         * ```
         *
         * > To wire the event programmatically, use the `onFocus` property.
         */
        this.onFocus = new EventEmitter(); //tslint:disable-line:no-output-rename
        /**
         * Fires each time the input element gets blurred.
         *
         * @example
         * ```ts
         * @@Component({
         * selector: 'my-app',
         * template: `
         *  <kendo-dateinput (blur)="handleBlur()"></kendo-dateinput>
         * `
         * })
         * class AppComponent {
         *   public handleBlur(): void {
         *      console.log("Component is blurred");
         *   }
         * }
         * ```
         *
         * > To wire the event programmatically, use the `onBlur` property.
         */
        this.onBlur = new EventEmitter(); //tslint:disable-line:no-output-rename
        this.currentValue = "";
        this.currentFormat = "";
        this.focused = false;
        this.minValidateFn = noop;
        this.maxValidateFn = noop;
        this._value = null;
        this.kendoDate = null;
        this.stringMatcher = new StringMatching();
        this.ngChange = function (_) { };
        this.ngTouched = function () { };
    }
    Object.defineProperty(DateInputComponent.prototype, "max", {
        get: function () {
            return this._max;
        },
        /**
         * Specifies the biggest date that is valid.
         */
        set: function (max) {
            this._max = max;
            this.ariaValueMax = time(max);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInputComponent.prototype, "min", {
        get: function () {
            return this._min;
        },
        /**
         * Specifies the smallest date that is valid.
         */
        set: function (min) {
            this._min = min;
            this.ariaValueMin = time(min);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInputComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        /**
         * Specifies the value of the DateInput component.
         */
        set: function (value) {
            if (this.autoCorrect && !isInRange(value, this.min, this.max)) {
                return;
            }
            this._value = cloneDate(value);
        },
        enumerable: true,
        configurable: true
    });
    DateInputComponent.prototype.mousescroll = function (event) {
        this.handleMouseWheel(event);
    };
    Object.defineProperty(DateInputComponent.prototype, "wrapperClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DateInputComponent.prototype, "disabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    DateInputComponent.prototype.keydown = function (event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case Keys.down:
                this.modifyDateSegmentValue(-1);
                break;
            case Keys.up:
                this.modifyDateSegmentValue(1);
                break;
            case Keys.right:
                this.switchDateSegment(1);
                break;
            case Keys.left:
                this.switchDateSegment(-1);
                break;
            default:
                return; //skip the preventDefault if we didn't handled the keyCode
        }
        event.preventDefault();
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.handleInput = function (_) {
        if (this.disabled) {
            return;
        }
        var diff = this.stringMatcher.approximateStringMatching(this.currentValue, this.currentFormat, this.dateInput.nativeElement.value, this.caret()[0]);
        var navigationOnly = (diff.length === 1 && diff[0][1] === "_");
        if (!navigationOnly) {
            for (var i = 0; i < diff.length; i++) {
                this.kendoDate.parsePart(diff[i][0], diff[i][1]);
            }
        }
        this.putDateInRange();
        this.updateElementValue();
        this.triggerChange();
        if (diff.length && diff[0][0] !== "_") {
            this.selectDateSegment(diff[0][0]);
        }
        if (navigationOnly) {
            this.switchDateSegment(1);
        }
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.ngOnChanges = function (changes) {
        this.verifySettings();
        if (changes.min || changes.max) {
            this.minValidateFn = this.rangeValidation ? minValidator(this.min) : noop;
            this.maxValidateFn = this.rangeValidation ? maxValidator(this.max) : noop;
        }
        if (this.kendoDate && changes.value) {
            this.writeValue(this.value);
        }
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.validate = function (control) {
        return this.minValidateFn(control) || this.maxValidateFn(control);
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.ngOnInit = function () {
        this.kendoDate = new KendoDate(this.intl, this.format, this.value);
        this.updateElementValue();
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    //ngModel binding
    /**
     * @hidden
     */
    DateInputComponent.prototype.writeValue = function (value) {
        this.value = cloneDate(value);
        this.kendoDate = new KendoDate(this.intl, this.format, cloneDate(this.value));
        this.updateElementValue();
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.triggerChange = function () {
        var dateObject = this.kendoDate.getDateObject();
        if (+dateObject !== +this.value) {
            this.value = cloneDate(dateObject);
            this.valueChange.emit(cloneDate(this.value));
            this.ngChange(cloneDate(this.value));
        }
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.registerOnChange = function (fn) {
        this.ngChange = fn;
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.registerOnTouched = function (fn) {
        this.ngTouched = fn;
    };
    /**
     * Focuses the DateInput component.
     *
     * @example
     * ```ts
     * @@Component({
     * selector: 'my-app',
     * template: `
     *  <button (click)="dateinput.focus()">Focus date input</button>
     *  <kendo-dateinput #dateinput></kendo-dateinput>
     * `
     * })
     * class AppComponent { }
     * ```
     */
    DateInputComponent.prototype.focus = function () {
        if (!this.dateInput) {
            return;
        }
        this.renderer.invokeElementMethod(this.dateInput.nativeElement, "focus");
    };
    /**
     * Blurs the DateInput component.
     */
    DateInputComponent.prototype.blur = function () {
        if (!this.dateInput) {
            return;
        }
        this.renderer.invokeElementMethod(this.dateInput.nativeElement, "blur");
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.modifyDateSegmentValue = function (offset) {
        var caret = this.caret();
        var symbol = this.currentFormat[caret[0]];
        this.kendoDate.modifyPart(symbol, offset);
        this.putDateInRange();
        this.updateElementValue();
        this.triggerChange();
        this.selectDateSegment(symbol);
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.switchDateSegment = function (offset) {
        var caret = this.caret();
        if (caret[0] < caret[1] && this.currentFormat[caret[0]] !== this.currentFormat[caret[1] - 1]) {
            this.selectNearestSegment(offset > 0 ? caret[0] : caret[1] - 1);
            return true;
        }
        var previousFormatSymbol = this.currentFormat[caret[0]];
        var a = caret[0] + offset;
        while (a > 0 && a < this.currentFormat.length) {
            if (this.currentFormat[a] !== previousFormatSymbol &&
                this.currentFormat[a] !== "_") {
                break;
            }
            a += offset;
        }
        if (this.currentFormat[a] === "_") {
            //there is not known symbol found
            return false;
        }
        var b = a;
        while (b >= 0 && b < this.currentFormat.length) {
            if (this.currentFormat[b] !== this.currentFormat[a]) {
                break;
            }
            b += offset;
        }
        if (a > b && (b + 1 !== caret[0] || a + 1 !== caret[1])) {
            this.caret(b + 1, a + 1);
            return true;
        }
        else if (a < b && (a !== caret[0] || b !== caret[1])) {
            this.caret(a, b);
            return true;
        }
        return false;
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.selectDateSegment = function (symbol) {
        var begin = -1;
        var end = 0;
        for (var i = 0; i < this.currentFormat.length; i++) {
            if (this.currentFormat[i] === symbol) {
                end = i + 1;
                if (begin === -1) {
                    begin = i;
                }
            }
        }
        if (begin < 0) {
            begin = 0;
        }
        this.caret(begin, end);
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.handleFocus = function () {
        this.focused = true;
        this.onFocus.emit();
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.handleMouseUp = function () {
        var caret = this.caret();
        if (caret[0] === caret[1]) {
            // Do not correct when the user explicitly selects text, to avoid braking copy-paste and dragging.
            // This should execute only when the start and end of a selection are the same.
            // Finds the nearest (in both directions) known part.
            this.selectNearestSegment(caret[0]);
        }
    };
    /**
     * @hidden
     */
    DateInputComponent.prototype.handleBlur = function () {
        this.focused = false;
        this.ngTouched();
        this.onBlur.emit();
    };
    DateInputComponent.prototype.handleMouseWheel = function (event) {
        if (this.disabled || !this.focused) {
            return;
        }
        event = window.event || event;
        if (event.shiftKey) {
            this.switchDateSegment((event.wheelDelta || -event.detail) > 0 ? -1 : 1);
        }
        else {
            this.modifyDateSegmentValue((event.wheelDelta || -event.detail) > 0 ? 1 : -1);
        }
        event.returnValue = false;
        if (event.preventDefault) {
            event.preventDefault();
        }
        if (event.stopPropagation) {
            event.stopPropagation();
        }
    };
    DateInputComponent.prototype.updateElementValue = function () {
        var texts = this.kendoDate.getTextAndFormat();
        this.currentValue = texts[0];
        this.currentFormat = texts[1];
        this.dateInput.nativeElement.value = this.currentValue;
        var currentDate = this.kendoDate.getDateObject();
        this.ariaValueNow = time(currentDate);
        this.ariaValueText = this.intl.formatDate(currentDate, this.format);
    };
    DateInputComponent.prototype.caret = function (start, end) {
        if (end === void 0) { end = start; }
        var isPosition = start !== undefined;
        var returnValue = [start, start];
        var element = this.dateInput.nativeElement;
        if (isPosition && this.disabled) {
            return undefined;
        }
        try {
            if (element.selectionStart !== undefined) {
                if (isPosition) {
                    element.focus();
                    element.setSelectionRange(start, end);
                }
                returnValue = [element.selectionStart, element.selectionEnd];
            }
        }
        catch (e) {
            returnValue = [];
        }
        return returnValue;
    };
    DateInputComponent.prototype.selectNearestSegment = function (index) {
        // Finds the nearest (in both directions) known part.
        for (var i = index, j = index - 1; i < this.currentFormat.length || j >= 0; i++, j--) {
            if (i < this.currentFormat.length && this.currentFormat[i] !== "_") {
                this.selectDateSegment(this.currentFormat[i]);
                return;
            }
            if (j >= 0 && this.currentFormat[j] !== "_") {
                this.selectDateSegment(this.currentFormat[j]);
                return;
            }
        }
    };
    DateInputComponent.prototype.verifySettings = function () {
        if (!isDevMode()) {
            return;
        }
        if (this.min > this.max) {
            throw new Error("The max value should be bigger than the min. See " + MIN_DOC_LINK + " and " + MAX_DOC_LINK + ".");
        }
    };
    DateInputComponent.prototype.putDateInRange = function () {
        var currentDate = this.kendoDate.getDateObject();
        var candidate = dateInRange(currentDate, this.min, this.max);
        if (this.autoCorrect && !isEqual(currentDate, candidate)) {
            this.kendoDate = new KendoDate(this.intl, this.format, candidate);
        }
    };
    DateInputComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return DateInputComponent; }), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return DateInputComponent; }), multi: true },
                        { provide: L10N_PREFIX, useValue: 'kendo.dateinput' },
                        LocalizationService
                    ],
                    selector: 'kendo-dateinput',
                    template: "\n    <ng-container kendoDateInputLocalizedMessages\n        i18n-increment=\"kendo.dateinput.increment|The label for the **Increment** button in the DateInput\"\n        increment=\"Increase value\"\n\n        i18n-decrement=\"kendo.dateinput.decrement|The label for the **Decrement** button in the DateInput\"\n        decrement=\"Decrease value\"\n    >\n    </ng-container>\n    <span class=\"k-dateinput-wrap\">\n        <input\n            #dateInput\n            class=\"k-input\"\n            role=\"spinbutton\"\n            [title]=\"title\"\n            [tabindex]=\"tabIndex\"\n            [attr.disabled]=\"disabled ? 'disabled' : undefined\"\n            [attr.aria-valuemin]=\"ariaValueMin\"\n            [attr.aria-valuemax]=\"ariaValueMax\"\n            [attr.aria-valuenow]=\"ariaValueNow\"\n            [attr.aria-valuetext]=\"ariaValueText\"\n            (focus)=\"handleFocus()\"\n            (blur)=\"handleBlur()\"\n            (mouseup)=\"handleMouseUp()\"\n        />\n        <span *ngIf=\"spinners\" class=\"k-select\" (mousedown)=\"$event.preventDefault()\">\n            <span (click)=\"modifyDateSegmentValue(1)\" class=\"k-link k-link-increase\"\n                [title]=\"localization.get('increment')\"\n                [attr.aria-label]=\"localization.get('increment')\">\n                <span class=\"k-icon k-i-arrow-n\"></span>\n            </span>\n            <span (click)=\"modifyDateSegmentValue(-1)\" class=\"k-link k-link-decrease\"\n                [title]=\"localization.get('decrement')\"\n                [attr.aria-label]=\"localization.get('decrement')\">\n                <span class=\"k-icon k-i-arrow-s\"></span>\n            </span>\n        </span>\n    </span>\n  "
                },] },
    ];
    /** @nocollapse */
    DateInputComponent.ctorParameters = function () { return [
        { type: IntlService, },
        { type: Renderer, },
        { type: LocalizationService, },
    ]; };
    DateInputComponent.propDecorators = {
        'disabled': [{ type: Input },],
        'title': [{ type: Input },],
        'tabIndex': [{ type: Input },],
        'format': [{ type: Input },],
        'max': [{ type: Input },],
        'min': [{ type: Input },],
        'rangeValidation': [{ type: Input },],
        'autoCorrect': [{ type: Input },],
        'value': [{ type: Input },],
        'spinners': [{ type: Input },],
        'valueChange': [{ type: Output },],
        'onFocus': [{ type: Output, args: ['focus',] },],
        'onBlur': [{ type: Output, args: ['blur',] },],
        'dateInput': [{ type: ViewChild, args: ['dateInput',] },],
        'mousescroll': [{ type: HostListener, args: ['mousewheel', ['$event'],] }, { type: HostListener, args: ['onmousewheel', ['$event'],] }, { type: HostListener, args: ['DOMMouseScroll', ['$event'],] },],
        'wrapperClass': [{ type: HostBinding, args: ['class.k-widget',] }, { type: HostBinding, args: ['class.k-dateinput',] },],
        'disabledClass': [{ type: HostBinding, args: ['class.k-state-disabled',] },],
        'keydown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
        'handleInput': [{ type: HostListener, args: ['input', ['$event'],] },],
    };
    return DateInputComponent;
}());
var KendoDate = (function () {
    function KendoDate(intl, format, value) {
        this.year = true;
        this.month = true;
        this.date = true;
        this.hours = true;
        this.minutes = true;
        this.seconds = true;
        this.milliseconds = true;
        this.value = new Date();
        this.format = "";
        this.typedMonthPart = "";
        this.monthNames = null;
        this.knownParts = "dhmMsEy";
        this.symbols = {
            "day": "d",
            "hour": "h",
            "minute": "m",
            "month": "M",
            "second": "s",
            "weekday": "E",
            "year": "y"
        };
        this.intl = intl;
        this.format = format;
        this.monthNames = this.allFormatedMonths();
        if (!value) {
            this.value = new Date();
            var sampleFormat = this.dateFormatString(this.value, this.format).symbols;
            for (var i = 0; i < sampleFormat.length; i++) {
                this.setExisting(sampleFormat[i], false);
            }
        }
        else {
            this.value = new Date(value);
        }
    }
    KendoDate.prototype.getDateObject = function () {
        for (var i = 0; i < this.knownParts.length; i++) {
            if (!this.getExisting(this.knownParts[i])) {
                return null;
            }
        }
        return new Date(this.value);
    };
    KendoDate.prototype.getTextAndFormat = function () {
        return this.merge(this.intl.formatDate(this.value, this.format), this.dateFormatString(this.value, this.format));
    };
    KendoDate.prototype.setExisting = function (symbol, value) {
        switch (symbol) {
            case "y":
                this.year = value;
                break;
            case "M":
                this.month = value;
                if (value === false) {
                    this.value.setMonth(0);
                }
                break; //make sure you can type 31 at day part
            case "d":
                this.date = value;
                break;
            case "h":
                this.hours = value;
                break;
            case "m":
                this.minutes = value;
                break;
            case "s":
                this.seconds = value;
                break;
            default: return;
        }
    };
    KendoDate.prototype.modifyPart = function (symbol, offset) {
        var newValue = new Date(this.value);
        switch (symbol) {
            case "y":
                newValue.setFullYear(newValue.getFullYear() + offset);
                break;
            case "M":
                newValue.setMonth(newValue.getMonth() + offset);
                break;
            case "d":
            case "E":
                newValue.setDate(newValue.getDate() + offset);
                break;
            case "h":
                newValue.setHours(newValue.getHours() + offset);
                break;
            case "m":
                newValue.setMinutes(newValue.getMinutes() + offset);
                break;
            case "s":
                newValue.setSeconds(newValue.getSeconds() + offset);
                break;
            default: break;
        }
        if (newValue.getFullYear() > 0) {
            this.setExisting(symbol, true);
            this.value = newValue;
        }
    };
    KendoDate.prototype.parsePart = function (symbol, currentChar) {
        if (!currentChar) {
            this.setExisting(symbol, false);
            return null;
        }
        var baseDate = this.intl.formatDate(this.value, this.format);
        var baseFormat = this.dateFormatString(this.value, this.format).symbols;
        var replaced = false;
        var prefix = "";
        var current = "";
        var suffix = "";
        for (var i = 0; i < baseDate.length; i++) {
            if (baseFormat[i] === symbol) {
                current += this.getExisting(symbol) ? baseDate[i] : "0";
                replaced = true;
            }
            else if (!replaced) {
                prefix += baseDate[i];
            }
            else {
                suffix += baseDate[i];
            }
        }
        var currentMaxLength = current.length - 3;
        var parsedDate = null;
        for (var i = Math.max(0, currentMaxLength); i <= current.length; i++) {
            var middle = current.substring(i) + currentChar;
            parsedDate = this.intl.parseDate(prefix + middle + suffix, this.format);
            if (parsedDate) {
                this.value = parsedDate;
                this.setExisting(symbol, true);
                return this.value;
            }
        }
        var month = this.matchMonth(currentChar);
        if (month) {
            parsedDate = this.intl.parseDate(prefix + month + suffix, this.format);
            if (parsedDate) {
                this.value = parsedDate;
                this.setExisting(symbol, true);
                return this.value;
            }
        }
        if (currentChar === "0") {
            this.setExisting(symbol, false);
        }
    };
    KendoDate.prototype.matchMonth = function (typedChar) {
        this.typedMonthPart += typedChar.toLowerCase();
        if (!this.monthNames) {
            return "";
        }
        while (this.typedMonthPart.length > 0) {
            for (var i = 0; i < this.monthNames.length; i++) {
                if (this.monthNames[i].toLowerCase().indexOf(this.typedMonthPart) === 0) {
                    return this.monthNames[i];
                }
            }
            var monthAsNum = parseInt(this.typedMonthPart, 10);
            if (monthAsNum >= 1 && monthAsNum <= 12 && monthAsNum.toString() === this.typedMonthPart /*ensure they exact match*/) {
                return this.monthNames[monthAsNum - 1];
            }
            this.typedMonthPart = this.typedMonthPart.substring(1, this.typedMonthPart.length);
        }
        return "";
    };
    KendoDate.prototype.allFormatedMonths = function () {
        var dateFormatParts = this.intl.splitDateFormat(this.format);
        for (var i = 0; i < dateFormatParts.length; i++) {
            if (dateFormatParts[i].type === "month" && dateFormatParts[i].names) {
                return this.intl.dateFormatNames(dateFormatParts[i].names);
            }
        }
        return null;
    };
    KendoDate.prototype.dateFormatString = function (date, format) {
        var dateFormatParts = this.intl.splitDateFormat(format);
        var parts = [];
        var partMap = [];
        for (var i = 0; i < dateFormatParts.length; i++) {
            var partLength = this.intl.formatDate(date, { pattern: dateFormatParts[i].pattern }).length;
            while (partLength > 0) {
                parts.push(this.symbols[dateFormatParts[i].type] || "_");
                partMap.push(dateFormatParts[i]);
                partLength--;
            }
        }
        var returnValue = new Mask;
        returnValue.symbols = parts.join("");
        returnValue.partMap = partMap;
        return returnValue;
    };
    KendoDate.prototype.merge = function (text, mask) {
        // Important: right to left.
        var resultText = "";
        var resultFormat = "";
        var format = mask.symbols;
        for (var r = format.length - 1; r >= 0; r--) {
            if (this.knownParts.indexOf(format[r]) === -1
                || this.getExisting(format[r])) {
                resultText = text[r] + resultText;
                resultFormat = format[r] + resultFormat;
            }
            else {
                var currentSymbol = format[r];
                while (r >= 0 && currentSymbol === format[r]) {
                    r--;
                }
                r++;
                resultText = this.intl.dateFieldName(mask.partMap[r]) + resultText;
                while (resultFormat.length < resultText.length) {
                    resultFormat = format[r] + resultFormat;
                }
            }
        }
        return [resultText, resultFormat];
    };
    KendoDate.prototype.getExisting = function (symbol) {
        switch (symbol) {
            case "y": return this.year;
            case "M":
            case "L": return this.month;
            case "d": return this.date;
            case "E": return this.date && this.month && this.year;
            case "h":
            case "H": return this.hours;
            case "m": return this.minutes;
            case "s": return this.seconds;
            default: return true;
        }
    };
    return KendoDate;
}());
var Mask = (function () {
    function Mask() {
        this.symbols = "";
    }
    return Mask;
}());
var StringMatching = (function () {
    function StringMatching() {
    }
    StringMatching.prototype.approximateStringMatching = function (oldText, oldFormat, newText, caret) {
        // Remove the right part of the cursor.
        //oldFormat = oldFormat.substring(0, caret + oldText.length - newText.length);
        var oldTextSeparator = oldText[caret + oldText.length - newText.length];
        oldText = oldText.substring(0, caret + oldText.length - newText.length);
        newText = newText.substring(0, caret);
        var diff = [];
        // Handle typing a single character over the same selection.
        if (oldText === newText && caret > 0) {
            diff.push([oldFormat[caret - 1], newText[caret - 1]]);
            return diff;
        }
        if (oldText.indexOf(newText) === 0 && (newText.length === 0 || oldFormat[newText.length - 1] !== oldFormat[newText.length])) {
            // Handle Delete/Backspace.
            var deletedSymbol = "";
            for (var i = newText.length; i < oldText.length; i++) {
                if (oldFormat[i] !== deletedSymbol && oldFormat[i] !== "_") {
                    deletedSymbol = oldFormat[i];
                    diff.push([deletedSymbol, ""]);
                }
            }
            return diff;
        }
        // Handle inserting text (the new text is longer than the previous one).
        // Handle typing over a literal as well.
        if (newText.indexOf(oldText) === 0 || oldFormat[caret - 1] === "_") {
            var symbol = oldFormat[0];
            for (var i = Math.max(0, oldText.length - 1); i < oldFormat.length; i++) {
                if (oldFormat[i] !== "_") {
                    symbol = oldFormat[i];
                    break;
                }
            }
            return [[symbol, newText[caret - 1]]];
        }
        // Handle entering a space or a separator, for navigation to the next item.
        if (newText[newText.length - 1] === " " || newText[newText.length - 1] === oldTextSeparator) {
            return [[oldFormat[caret - 1], "_"]];
        }
        // Handle typing over a correctly selected part.
        return [[oldFormat[caret - 1], newText[caret - 1]]];
    };
    return StringMatching;
}());
