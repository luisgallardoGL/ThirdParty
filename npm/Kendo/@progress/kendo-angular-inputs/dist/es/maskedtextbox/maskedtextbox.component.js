import { ViewChild, Input, Component, forwardRef, ElementRef } from '@angular/core';
import { HostListener, HostBinding, Output, EventEmitter, Renderer } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';
import { createPatternValidator } from '../common/pattern.validator';
import { Keys } from '../common/enums';
var noop = function () { ; };
/**
 * Represents the Kendo UI MaskedTextBox component for Angular.
 *
 * @example
 * ```ts-preview
 *
 * @@Component({
 *     selector: 'my-app',
 *     template: `
 *      <kendo-maskedtextbox
 *          [mask]="mask1"
 *          [value]="value2">
 *      </kendo-maskedtextbox>
 *     `
 * })
 *
 * class AppComponent {
 *  public value1: number = 9580128055807792;
 *  public mask1: string = "0000-0000-0000-0000";
 * }
 * ```
 */
export var MaskedTextBoxComponent = (function () {
    function MaskedTextBoxComponent(element, renderer) {
        this.renderer = renderer;
        /**
         * Determines whether the component is disabled.
         */
        this.disabled = false;
        /**
         * Determines whether the built-in mask validator is enforced when validating a form.
         */
        this.maskValidation = false;
        /**
         * Fires each time the input element gets focused.
         */
        this.focus = new EventEmitter();
        /**
         * Fires each time the input element gets blurred.
         */
        this.blur = new EventEmitter();
        this.focused = false;
        this.innerValue = '';
        this.innerMask = '';
        this.isDel = false;
        this.promptChar = '_';
        this.ngTouched = noop;
        this.ngChange = noop;
        this.isPasted = false;
        this.patternValidateFn = undefined;
        this.innerRules = {
            "#": /[\d\s\+\-]/,
            "&": /[\S]/,
            "0": /[\d]/,
            "9": /[\d\s]/,
            "?": /[a-zA-Z\s]/,
            "A": /[a-zA-Z0-9]/,
            "C": /./,
            "L": /[a-zA-Z]/,
            "a": /[a-zA-Z0-9\s]/
        };
        this.wrapper = element.nativeElement;
        this.updateTokens();
    }
    Object.defineProperty(MaskedTextBoxComponent.prototype, "mask", {
        /**
         * Represents the current mask. If no mask is set, the component behaves as a standard `type="text"` input.
         */
        get: function () {
            return this.innerMask;
        },
        set: function (value) {
            if (value !== this.innerMask) {
                this.innerMask = value;
                this.updateTokens();
                this.updateValidator();
                this.ngChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MaskedTextBoxComponent.prototype, "value", {
        /**
         * Provides a value for the MaskedTextBox.
         */
        get: function () {
            if (!this.innerValue) {
                this.innerValue = this.emptyMask;
            }
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue || !this.value) {
                this.maskInput(value);
                this.ngChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MaskedTextBoxComponent.prototype, "rules", {
        /**
         * Exposes the RegExp-based mask validation array.
         */
        get: function () {
            return this.innerRules;
        },
        set: function (value) {
            Object.assign(this.innerRules, value);
            this.updateTokens();
            this.updateValidator();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MaskedTextBoxComponent.prototype, "prompt", {
        /**
         * A prompt character for the masked value. By default, it is `_`.
         */
        get: function () {
            return this.promptChar;
        },
        set: function (value) {
            if (value !== this.promptChar) {
                this.promptChar = value ? value[0] : undefined;
                this.updateTokens();
                this.ngChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.keydown = function (event) {
        this.lastCaret = this.caret();
        if (event.keyCode === Keys.delete) {
            this.isDel = true;
        }
        else if (event.keyCode === 13) {
            this.ngChange(this.value);
        }
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.paste = function (event) {
        var clipboard = event.clipboardData ? event.clipboardData : window.clipboardData;
        var clipboardText = clipboard ? clipboard.getData("text") : "";
        var caret = this.caret();
        var start = caret[0];
        var oldStart = start;
        var hasSelection = caret[1] - caret[0] > 0;
        this.isPasted = true;
        this.clearRange(caret);
        for (var _i = 0, clipboardText_1 = clipboardText; _i < clipboardText_1.length; _i++) {
            var char = clipboardText_1[_i];
            start = this.maskChar(start, char, false, true);
            if (start < oldStart) {
                start = oldStart;
            }
            else {
                oldStart = start;
            }
            if (hasSelection && start >= caret[1]) {
                break;
            }
        }
        this.caret(start, start);
    };
    Object.defineProperty(MaskedTextBoxComponent.prototype, "widgetClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MaskedTextBoxComponent.prototype, "textBoxClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MaskedTextBoxComponent.prototype, "maskedTextBoxClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Returns the raw value excluding the literal characters. By default (without parameters),
     * the prompt characters are removed from the return value. If a string parameter is supplied, it is used
     * to replace the prompt with the user-configured character.
     * @param {string} promptChar - A prompt character for the raw value. To get the value without prompt characters, leave it empty.
     * @returns {string} - A raw string value with or without prompt characters.
     */
    MaskedTextBoxComponent.prototype.rawValue = function (promptChar) {
        var unmasked = [];
        var value = this.innerValue;
        var token;
        if (promptChar && promptChar.length > 1) {
            promptChar = promptChar[0];
        }
        for (var index = 0; index < value.length; index++) {
            token = this.tokens[index];
            if (!token || !token.test) {
                continue;
            }
            if (token.test(value[index])) {
                unmasked.push(value[index]);
            }
            else if (promptChar !== undefined && value[index] === this.promptChar) {
                unmasked.push(promptChar);
            }
        }
        return unmasked.join("");
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.ngOnInit = function () {
        this.inputElement = this.input.nativeElement;
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.ngAfterViewInit = function () {
        this.updateTokens();
        this.updateInputValue();
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.ngOnChanges = function (changes) {
        if (changes.maskValidation) {
            this.updateValidator();
        }
        this.updateTokens();
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.validate = function (ctrl) {
        if (this.maskValidation) {
            return this.patternValidateFn(ctrl);
        }
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.writeValue = function (value) {
        if (value !== this.lastValue) {
            this.changeValue(value);
        }
        this.lastValue = value;
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.registerOnChange = function (fn) {
        this.ngChange = fn;
        this.ngChange(this.value);
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.registerOnTouched = function (fn) {
        this.ngTouched = fn;
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.changeValue = function (value) {
        this.value = value;
        this.updateInputValue();
        this.ngChange(this.value);
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.handleFocus = function (event) {
        this.focused = true;
        this.updateInputValue();
        this.focus.emit(event);
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.handleBlur = function (event) {
        this.focused = false;
        this.changeValue(this.innerValue);
        this.ngTouched();
        this.blur.emit(event);
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.handleChange = function (event) {
        this.value = event.target.value;
        this.ngTouched();
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.handleDragDrop = function () {
        return false;
    };
    /**
     * @hidden
     */
    MaskedTextBoxComponent.prototype.handleOnInput = function () {
        if (this.isPasted) {
            this.updateInputValue();
        }
        else {
            this.validateInput();
            this.updateInputValue(this.innerValue.substr(0, this.maskLength));
        }
        this.isPasted = false;
        this.isDel = false;
        this.restoreCaret();
    };
    MaskedTextBoxComponent.prototype.validateInput = function () {
        var newValue = this.inputElement.value;
        var oldValue = this.innerValue;
        var lastCaret = this.lastCaret;
        var caretPos = this.caret()[0];
        var char = undefined;
        this.clearRange(lastCaret);
        if (!newValue.length) {
            return;
        }
        if (newValue.length === oldValue.length - 1 && lastCaret[0] === lastCaret[1]) {
            this.maskChar(caretPos, this.promptChar, true);
            this.caret(this.isDel ? caretPos + 1 : caretPos);
            return;
        }
        else {
            char = newValue[--caretPos];
        }
        if (char && this.validateChar(caretPos, char, false, true).char !== undefined) {
            var latestPosition = this.maskChar(caretPos, char, false, true);
            this.caret(latestPosition, latestPosition);
            return;
        }
        this.caret(lastCaret[0], lastCaret[0]);
    };
    MaskedTextBoxComponent.prototype.validationPattern = function () {
        var pattern = [];
        var strToken;
        for (var _i = 0, _a = this.tokens; _i < _a.length; _i++) {
            var token = _a[_i];
            strToken = token + "";
            switch (strToken) {
                case "-":
                case "(":
                case ")":
                    pattern.push("\\" + strToken);
                    break;
                case " ":
                    pattern.push('\\s');
                    break;
                default:
                    pattern.push(strToken.substring(1, strToken.length - 1));
                    break;
            }
        }
        return pattern.join('{1}') + '{1}';
    };
    MaskedTextBoxComponent.prototype.updateInputValue = function (value) {
        var inputValue;
        if (value) {
            inputValue = value;
        }
        else if (this.value) {
            inputValue = this.value;
        }
        if (!this.inputElement) {
            return;
        }
        this.renderer.setElementProperty(this.inputElement, "value", inputValue);
    };
    MaskedTextBoxComponent.prototype.restoreCaret = function () {
        if (this.lastCaret && this.lastCaret.length > 0) {
            this.caret(this.lastCaret[0], this.lastCaret[1]);
        }
    };
    MaskedTextBoxComponent.prototype.updateValidator = function () {
        var pattern = this.validationPattern();
        this.patternValidateFn = createPatternValidator(pattern);
    };
    MaskedTextBoxComponent.prototype.updateTokens = function () {
        var tokens = [];
        var tokenIdx = 0;
        var mask = this.innerMask || "";
        var maskChars = mask.split("");
        var length = maskChars.length;
        var chr;
        var chrs;
        var rule;
        var emptyMask = "";
        for (var idx = 0; idx < length; idx++) {
            chr = maskChars[idx];
            rule = this.rules[chr];
            if (rule) {
                tokens[tokenIdx] = rule;
                emptyMask += this.promptChar;
                tokenIdx += 1;
            }
            else {
                if (chr === "\\") {
                    idx += 1;
                    chr = maskChars[idx];
                }
                chrs = chr.split("");
                for (var i = 0, l = chrs.length; i < l; i++) {
                    tokens[tokenIdx] = chrs[i];
                    emptyMask += chrs[i];
                    tokenIdx += 1;
                }
            }
        }
        this.tokens = tokens;
        this.emptyMask = emptyMask;
        this.maskLength = emptyMask.length;
    };
    MaskedTextBoxComponent.prototype.find = function (idx, isBackwards) {
        if (isBackwards === void 0) { isBackwards = false; }
        var value = this.innerValue || this.emptyMask;
        var step = isBackwards ? -1 : 1;
        while (idx > -1 || idx <= this.maskLength) {
            if (value.charAt(idx) !== this.tokens[idx]) {
                return idx;
            }
            idx += step;
        }
        return -1;
    };
    MaskedTextBoxComponent.prototype.clearRange = function (selection) {
        var start = selection[0];
        var end = selection[1];
        var range = end - start;
        if (!selection || range === 0) {
            return;
        }
        for (var p = start; p < end; p++) {
            this.maskChar(p, this.tokens[p].test ? this.promptChar : this.tokens[p], true);
        }
    };
    MaskedTextBoxComponent.prototype.maskInput = function (value) {
        var start = 0;
        var oldStart = 0;
        value = ((value || "") + "").substr(0, this.maskLength);
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var char = value_1[_i];
            start = this.maskChar(start, char, false, true);
            if (start < oldStart) {
                start = oldStart;
            }
            else {
                oldStart = start;
            }
        }
    };
    MaskedTextBoxComponent.prototype.maskChar = function (start, value, isDeleting, findFirstValid) {
        var current = this.innerValue || this.emptyMask;
        var currentArray = current.split("");
        var chr = value.charAt(0);
        var vToken;
        vToken = this.validateChar(start, chr, isDeleting, findFirstValid);
        chr = vToken.char;
        start = vToken.position;
        if (chr === undefined) {
            return 0;
        }
        currentArray[start] = chr;
        this.innerValue = currentArray.join("");
        start++;
        return this.find(start);
    };
    MaskedTextBoxComponent.prototype.validateChar = function (start, char, isDeleting, findFirstValid) {
        if (isDeleting === void 0) { isDeleting = false; }
        if (findFirstValid === void 0) { findFirstValid = false; }
        if (start >= this.tokens.length) {
            return new ValidationToken(undefined, start);
        }
        var regex = this.tokens[start];
        var valid;
        var token;
        if (regex && regex.test) {
            valid = regex.test(char) ? char : (isDeleting ? this.promptChar : undefined);
        }
        else {
            valid = char === regex ? char : undefined;
        }
        token = new ValidationToken(valid, start);
        if (findFirstValid && token.char === undefined) {
            token = this.validateChar(this.find(start), char, isDeleting, false);
        }
        return token;
    };
    MaskedTextBoxComponent.prototype.caret = function (start, end) {
        if (end === void 0) { end = start; }
        var isPosition = start !== undefined;
        var returnValue = [start];
        if (isPosition && this.disabled) {
            return undefined;
        }
        try {
            if (this.inputElement.selectionStart !== undefined) {
                if (isPosition) {
                    this.renderer.invokeElementMethod(this.inputElement, "focus");
                    this.renderer.invokeElementMethod(this.inputElement, "setSelectionRange", [start, end]);
                }
                else {
                    returnValue = [this.inputElement.selectionStart, this.inputElement.selectionEnd];
                }
            }
        }
        catch (e) {
            returnValue = [];
        }
        this.lastCaret = returnValue;
        return returnValue;
    };
    MaskedTextBoxComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'kendoMaskedTextBox',
                    providers: [
                        { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return MaskedTextBoxComponent; }), multi: true },
                        { provide: NG_VALIDATORS, useExisting: forwardRef(function () { return MaskedTextBoxComponent; }), multi: true } /* tslint:disable-line */
                    ],
                    selector: 'kendo-maskedtextbox',
                    template: "\n        <input type=\"text\"\n            #input\n            autocomplete=\"off\"\n            autocorrect=\"off\"\n            autocapitalize=\"off\"\n            spellcheck=\"false\"\n            class=\"k-input\"\n            [attr.title]=\"title\"\n            [attr.disabled]=\"disabled ? 'disabled' : undefined\"\n            (focus)=\"handleFocus($event)\"\n            (blur)=\"handleBlur($event)\"\n            (change)=\"handleChange($event)\"\n            (input)=\"handleOnInput()\"\n            (dragstart)=\"handleDragDrop()\"\n            (drop)=\"handleDragDrop()\"\n        />\n    "
                },] },
    ];
    /** @nocollapse */
    MaskedTextBoxComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: Renderer, },
    ]; };
    MaskedTextBoxComponent.propDecorators = {
        'disabled': [{ type: Input },],
        'maskValidation': [{ type: Input },],
        'title': [{ type: Input },],
        'focus': [{ type: Output },],
        'blur': [{ type: Output },],
        'input': [{ type: ViewChild, args: ['input',] },],
        'mask': [{ type: Input },],
        'value': [{ type: Input },],
        'rules': [{ type: Input },],
        'prompt': [{ type: Input },],
        'keydown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
        'paste': [{ type: HostListener, args: ['paste', ['$event'],] },],
        'widgetClass': [{ type: HostBinding, args: ['class.k-widget',] },],
        'textBoxClass': [{ type: HostBinding, args: ['class.k-textbox',] },],
        'maskedTextBoxClass': [{ type: HostBinding, args: ['class.k-maskedtextbox',] },],
    };
    return MaskedTextBoxComponent;
}());
var ValidationToken = (function () {
    function ValidationToken(char, position) {
        this.char = char;
        this.position = position;
    }
    return ValidationToken;
}());
