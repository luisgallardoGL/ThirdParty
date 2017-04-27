import { EventEmitter, ElementRef, Renderer, OnInit, OnChanges } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { IntlService } from '@progress/kendo-angular-intl';
/**
 * Represents the Kendo UI NumericTextBox component for Angular 2.
 */
export declare class NumericTextBoxComponent implements OnInit, ControlValueAccessor, OnChanges {
    private intl;
    private renderer;
    /**
     * Sets the title of the **Increase** button of the NumericTextBox.
     */
    incrementTitle: string;
    /**
     * Sets the title of the **Decrease** button of the NumericTextBox.
     */
    decrementTitle: string;
    /**
     * Sets the title of the input element of the NumericTextBox.
     */
    title: string;
    /**
     * Specifies whether the value will be auto-corrected based on the min and max values.
     */
    autoCorrect: boolean;
    /**
     * Specifies the number format used when the component is not focused.
     */
    format: string;
    /**
     * Specifies the greatest value that is valid.
     */
    max: number;
    /**
     * Specifies the smallest value that is valid.
     */
    min: number;
    /**
     * Specifies the number precision applied to the component value when it is focused.
     * If the user enters a number with a greater precision than is currently configured, the component value is rounded.
     */
    decimals: number;
    /**
     * Specifies the value used to increment or decrement the component value.
     */
    step: number;
    /**
     * Specifies whether the **Up** and **Down** spin buttons should be rendered.
     */
    spinners: boolean;
    /**
     * Specifies whether the value should be rounded or truncated.
     * The length of the fraction is defined by the value of decimals.
     */
    round: boolean;
    /**
     * Specifies whether the length of decimals should be restricted during typing.
     * The length of the fraction is defined by the value of decimals.
     */
    restrictDecimals: boolean;
    /**
     * Specifies the value of the NumericTextBox component.
     */
    value: number;
    /**
     * Fires each time the user selects a new value.
     */
    valueChange: EventEmitter<any>;
    /**
     * Fires each time the user focuses the input element.
     */
    focus: EventEmitter<any>;
    /**
     * Fires each time the input element gets blurred.
     */
    blur: EventEmitter<any>;
    /**
     * @hidden
     */
    numericInput: ElementRef;
    focused: boolean;
    private wrapper;
    private DECIMAL_SEPARATOR;
    private INTEGER_REGEXP;
    private minValidateFn;
    private maxValidateFn;
    /**
     * @hidden
     */
    hostBlur(): void;
    readonly widgetClass: boolean;
    readonly numericClass: boolean;
    readonly tabIndex: number;
    /**
     * @hidden
     */
    keydown(event: any): void;
    constructor(intl: IntlService, renderer: Renderer, el: ElementRef);
    /**
     * @hidden
     */
    ngOnChanges(inputs: any): void;
    /**
     * @hidden
     */
    validate(c: FormControl): any;
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    writeValue(value: number): void;
    /**
     * @hidden
     */
    registerOnChange(fn: () => any): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: () => any): void;
    /**
     * @hidden
     */
    changeValue(value: number): void;
    /**
     * When the `decreaseValue` method is called, it decreases the value of the component by
     * subtracting the step property value.
     */
    decreaseValue(): void;
    /**
     * When the `increaseValue` method is called, it increases the value of the component by
     * adding the step property value.
     */
    increaseValue(): void;
    /**
     * @hidden
     */
    keyPress(e: any): void;
    /**
     * @hidden
     */
    handleFocus(event: any): void;
    /**
     * @hidden
     */
    handleBlur(event: any): void;
    /**
     * @hidden
     */
    handlePaste(): void;
    private ngChange;
    private ngTouched;
    private changeText();
    private formatNumberWithSettings();
    private numericRegex();
    private trimValue(value);
    private roundNumber(value, precision);
    private truncateNumber(value, precision);
    private increaseValueToStep(value, step);
    private decreaseValueToStep(value, step);
}
