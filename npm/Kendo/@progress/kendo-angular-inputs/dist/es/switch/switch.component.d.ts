import { EventEmitter, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
/**
 * Represents the Kendo UI Switch component for Angular.
 */
export declare class SwitchComponent implements ControlValueAccessor, AfterViewInit {
    /**
     * Changes the **On** label so it can be localized.
     */
    onLabel: string;
    /**
     * Changes the **Off** label so it can be localized.
     */
    offLabel: string;
    /**
     * Sets the current value of the Switch when initially displayed.
     */
    checked: boolean;
    /**
     * Disables the Switch when set to `true`.
     */
    disabled: boolean;
    /**
     * Fires each time the user selects a new value.
     */
    valueChange: EventEmitter<any>;
    dragHandle: any;
    wrapper: any;
    private controller;
    /**
     * @hidden
     */
    keyDown($event: any): void;
    readonly ariaDisabled: any;
    readonly ariaChecked: any;
    readonly widget: any;
    readonly switchClass: any;
    readonly switchOn: any;
    readonly switchOff: any;
    readonly stateDisabled: any;
    constructor();
    /**
     * @hidden
     */
    onBlur(): void;
    /**
     * @hidden
     */
    ngAfterViewInit(): void;
    /**
     * @hidden
     */
    onHandleDrag(event: Event): void;
    /**
     * @hidden
     */
    onHandlePress(event: Event): void;
    /**
     * @hidden
     */
    onHandleRelease(event: Event): void;
    protected isDocumentAvailable(): boolean;
    protected updateState(): void;
    /**
     * @hidden
     */
    writeValue(value: boolean): void;
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
    changeValue: Function;
    protected ngChange: Function;
    protected ngTouched: Function;
    private keyDownHandler;
    private ifEnabled;
    private applyStyle;
    private updateView;
}
