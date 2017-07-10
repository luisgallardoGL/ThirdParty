import { OnChanges, AfterViewInit, ElementRef } from '@angular/core';
import { OnInit, EventEmitter, Renderer } from '@angular/core';
import { ControlValueAccessor, AbstractControl } from '@angular/forms';
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
export declare class MaskedTextBoxComponent implements ControlValueAccessor, OnChanges, OnInit, AfterViewInit {
    private renderer;
    /**
     * Determines whether the component is disabled.
     */
    disabled: boolean;
    /**
     * Determines whether the built-in mask validator is enforced when validating a form.
     */
    maskValidation: boolean;
    /**
     * Sets the title of the input element.
     */
    title: string;
    /**
     * Fires each time the input element gets focused.
     */
    focus: EventEmitter<any>;
    /**
     * Fires each time the input element gets blurred.
     */
    blur: EventEmitter<any>;
    /**
     * @hidden
     */
    input: ElementRef;
    private focused;
    private innerValue;
    private innerMask;
    private isDel;
    private tokens;
    private emptyMask;
    private maskLength;
    private promptChar;
    private wrapper;
    private inputElement;
    private ngTouched;
    private ngChange;
    private lastCaret;
    private isPasted;
    private patternValidateFn;
    private lastValue;
    private innerRules;
    constructor(element: ElementRef, renderer: Renderer);
    /**
     * Represents the current mask. If no mask is set, the component behaves as a standard `type="text"` input.
     */
    mask: string;
    /**
     * Provides a value for the MaskedTextBox.
     */
    value: any;
    /**
     * Exposes the RegExp-based mask validation array.
     */
    rules: {
        [key: string]: RegExp;
    };
    /**
     * A prompt character for the masked value. By default, it is `_`.
     */
    prompt: string;
    /**
     * @hidden
     */
    keydown(event: any): void;
    /**
     * @hidden
     */
    paste(event: any): void;
    readonly widgetClass: boolean;
    readonly textBoxClass: boolean;
    readonly maskedTextBoxClass: boolean;
    /**
     * Returns the raw value excluding the literal characters. By default (without parameters),
     * the prompt characters are removed from the return value. If a string parameter is supplied, it is used
     * to replace the prompt with the user-configured character.
     * @param {string} promptChar - A prompt character for the raw value. To get the value without prompt characters, leave it empty.
     * @returns {string} - A raw string value with or without prompt characters.
     */
    rawValue(promptChar?: string): string;
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    ngOnChanges(changes: any): void;
    /**
     * @hidden
     */
    validate(ctrl: AbstractControl): any;
    /**
     * @hidden
     */
    writeValue(value: any): void;
    /**
     * @hidden
     */
    registerOnChange(fn: any): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: any): void;
    /**
     * @hidden
     */
    changeValue(value: string): void;
    /**
     * @hidden
     */
    handleFocus(event: FocusEvent): void;
    /**
     * @hidden
     */
    handleBlur(event: FocusEvent): void;
    /**
     * @hidden
     */
    handleChange(event: Event): void;
    /**
     * @hidden
     */
    handleDragDrop(): boolean;
    /**
     * @hidden
     */
    handleOnInput(): void;
    protected validateInput(): void;
    protected validationPattern(): string;
    private updateInputValue(value?);
    private restoreCaret();
    private updateValidator();
    private updateTokens();
    private find(idx, isBackwards?);
    private clearRange(selection);
    private maskInput(value);
    private maskChar(start, value, isDeleting, findFirstValid?);
    private validateChar(start, char, isDeleting?, findFirstValid?);
    private caret(start?, end?);
}
