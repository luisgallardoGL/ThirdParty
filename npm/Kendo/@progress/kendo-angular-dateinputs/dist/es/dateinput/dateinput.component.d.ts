import { EventEmitter, ElementRef, OnInit, OnChanges, Renderer } from '@angular/core';
import { AbstractControl, ControlValueAccessor } from '@angular/forms';
import { LocalizationService } from '@progress/kendo-angular-l10n';
import { IntlService } from '@progress/kendo-angular-intl';
/**
 * Represents the Kendo UI DateInput component for Angular.
 */
export declare class DateInputComponent implements OnInit, ControlValueAccessor, OnChanges {
    private intl;
    private renderer;
    localization: LocalizationService;
    /**
     * Sets or gets the `disabled` property of the DateInput and determines whether the component is active.
     */
    disabled: boolean;
    /**
     * Sets the title of the input element of the DateInput.
     */
    title: string;
    /**
     * Sets or gets the `tabIndex` property of the DateInput.
     * .
     */
    tabIndex: number;
    /**
     * Specifies the date format that is used when the component is not focused.
     */
    format: string;
    /**
     * Specifies the biggest date that is valid.
     */
    max: Date;
    /**
     * Specifies the smallest date that is valid.
     */
    min: Date;
    /**
     * Determines whether the built-in min or max validators are enforced when validating a form.
     */
    rangeValidation: boolean;
    /**
     * @hidden
     * Based on the min and max values, specifies whether the value will be auto-corrected while typing.
     */
    autoCorrect: boolean;
    /**
     * Specifies the value of the DateInput component.
     */
    value: Date;
    /**
     * Specifies whether the **Up** and **Down** spin buttons will be rendered.
     */
    spinners: boolean;
    /**
     * Fires each time the user selects a new value.
     */
    valueChange: EventEmitter<any>;
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
    onFocus: EventEmitter<any>;
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
    onBlur: EventEmitter<any>;
    /**
     * @hidden
     */
    dateInput: ElementRef;
    ariaValueMin: number;
    ariaValueMax: number;
    ariaValueNow: number;
    ariaValueText: string;
    protected currentValue: string;
    protected currentFormat: string;
    private focused;
    private minValidateFn;
    private maxValidateFn;
    private _min;
    private _max;
    private _value;
    private kendoDate;
    private stringMatcher;
    protected mousescroll(event: any): void;
    private readonly wrapperClass;
    readonly disabledClass: boolean;
    /**
     * @hidden
     */
    keydown(event: any): void;
    /**
     * @hidden
     */
    handleInput(_: any): void;
    constructor(intl: IntlService, renderer: Renderer, localization: LocalizationService);
    /**
     * @hidden
     */
    ngOnChanges(changes: any): void;
    /**
     * @hidden
     */
    validate(control: AbstractControl): {
        [key: string]: any;
    };
    /**
     * @hidden
     */
    ngOnInit(): void;
    /**
     * @hidden
     */
    setDisabledState(isDisabled: boolean): void;
    /**
     * @hidden
     */
    writeValue(value: Date): void;
    /**
     * @hidden
     */
    triggerChange(): void;
    /**
     * @hidden
     */
    registerOnChange(fn: () => any): void;
    /**
     * @hidden
     */
    registerOnTouched(fn: () => any): void;
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
    focus(): void;
    /**
     * Blurs the DateInput component.
     */
    blur(): void;
    /**
     * @hidden
     */
    modifyDateSegmentValue(offset: number): void;
    /**
     * @hidden
     */
    protected switchDateSegment(offset: number): boolean;
    /**
     * @hidden
     */
    protected selectDateSegment(symbol: string): void;
    /**
     * @hidden
     */
    handleFocus(): void;
    /**
     * @hidden
     */
    handleMouseUp(): void;
    /**
     * @hidden
     */
    handleBlur(): void;
    protected handleMouseWheel(event: any): void;
    private updateElementValue();
    private ngChange;
    private ngTouched;
    private caret(start?, end?);
    private selectNearestSegment(index);
    private verifySettings();
    private putDateInRange();
}
