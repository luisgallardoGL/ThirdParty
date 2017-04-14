import { Component, ViewChild, Input, ElementRef, Output, EventEmitter, HostBinding, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/takeUntil';
import { SliderUtil as Util, SliderModel } from '@telerik/kendo-inputs-common';
import { Keys } from '../common/enums';
/**
 * Represents the Kendo UI Slider component for Angular.
 */
export var SliderComponent = (function () {
    function SliderComponent(el) {
        var _this = this;
        /**
         * Sets the title of the **Increase** button of the Slider.
         */
        this.incrementTitle = 'increment';
        /**
         * Sets the title of the **Decrease** button of the Slider.
         */
        this.decrementTitle = 'decrement';
        /**
         * Makes the Slider side arrow buttons appear. When set to `false`, the buttons are not displayed.
         */
        this.showButtons = true;
        /**
         * Denotes the location of the tick marks in the Slider.
         *
         * The available options are:
         *   * `before`&mdash;Tick marks are located to the top side of the horizontal track or to the left side of a vertical track.
         *   * `after`&mdash;Tick marks are located to the bottom side of the horizontal track or to the right side of the vertical track.
         *   * `both`&mdash;Tick marks are located on both sides of the track.
         *   * `none`&mdash;Tick marks are not visible. The actual elements are not added to the DOM tree.
         */
        this.tickPlacement = 'both';
        /**
         * Defines the title of the ticks. The default title for each tick is its Slider value.
         * If a callback function is used, it accepts an argument holding the value of the component and returns a string with the new title.
         */
        this.title = Util.identity;
        /**
         * Changes the title attribute of the drag handle, so it can be localized.
         */
        this.dragHandleTitle = 'Drag';
        /**
         * If set to `true`, it changes the orientation of the Slider from horizontal to vertical.
         */
        this.vertical = false;
        /**
         * The minimum value of the Slider. The attribute accepts both integers and floating-point numbers.
         */
        this.min = 0;
        /**
         * The maximum value of the Slider. The attribute accepts both integers and floating-point numbers.
         */
        this.max = 10;
        /**
         * The step value of the Slider. The attribute accepts only positive numbers. Can be both integer or a float number.
         */
        this.smallStep = 1;
        /**
         * If set to `true`, it disables the Slider.
         */
        this.disabled = false;
        /**
         * The current value of the Slider when initially displayed.
         * The component can use either the `value` binging or `NgModel`, but not both of them at the same time.
         */
        this.value = 0;
        /**
         * Fires each time the user selects a new value.
         */
        this.valueChange = new EventEmitter();
        this.dragging = false;
        this.decreaseButtonSubscription = Subscription.EMPTY;
        this.increaseButtonSubscription = Subscription.EMPTY;
        this.keyBinding = (_a = {},
            _a[Keys.left] = function (_a) {
                var value = _a.value, smallStep = _a.smallStep;
                return value - smallStep;
            },
            _a[Keys.right] = function (_a) {
                var value = _a.value, smallStep = _a.smallStep;
                return value + smallStep;
            },
            _a[Keys.down] = function (_a) {
                var value = _a.value, smallStep = _a.smallStep;
                return value - smallStep;
            },
            _a[Keys.up] = function (_a) {
                var value = _a.value, smallStep = _a.smallStep;
                return value + smallStep;
            },
            _a[Keys.home] = function (_a) {
                var min = _a.min;
                return min;
            },
            _a[Keys.end] = function (_a) {
                var max = _a.max;
                return max;
            },
            _a
        );
        /**
         * @hidden
         */
        this.ifEnabled = function (callback, event) {
            if (!_this.disabled) {
                callback.call(_this, event);
            }
        };
        this.ngChange = function (_) { };
        this.ngTouched = function () { };
        this.decreaseValue = function () {
            _this.changeValue(Util.decreaseValueToStep(_this.getProps()));
        };
        this.increaseValue = function () {
            _this.changeValue(Util.increaseValueToStep(_this.getProps()));
        };
        this.wrapper = el.nativeElement;
        var _a;
    }
    Object.defineProperty(SliderComponent.prototype, "horizontalClass", {
        get: function () {
            return !this.vertical;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "verticalClass", {
        get: function () {
            return this.vertical;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "sliderClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "transitionsClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "widgetClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "stateDefaultClass", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "topLeftClass", {
        get: function () {
            return this.tickPlacement === 'before';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "bottomRightClass", {
        get: function () {
            return this.tickPlacement === 'after';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "disabledClass", {
        get: function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "tabIndex", {
        get: function () {
            return this.disabled ? undefined : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ariaDisabled", {
        get: function () {
            return this.disabled ? true : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ariaMin", {
        get: function () {
            return this.min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ariaMax", {
        get: function () {
            return this.max;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SliderComponent.prototype, "ariaValue", {
        get: function () {
            return this.value ? this.value : this.min;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    SliderComponent.prototype.active = function () {
        this.draghandle.nativeElement.focus();
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.keydown = function (event) {
        this.onKeyDown(event);
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.blur = function () {
        this.ngTouched();
    };
    SliderComponent.prototype.ngOnChanges = function (_) {
        this.ticksCount = Util.calculateTicksCount(this.max, this.min, this.smallStep);
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.isDocumentAvailable()) {
            return;
        }
        if (this.showButtons) {
            this.decreaseButtonSubscription = this.setValueChangeInterval(this.decreaseButton.nativeElement, function () { return _this.decreaseValue(); });
            this.increaseButtonSubscription = this.setValueChangeInterval(this.increaseButton.nativeElement, function () { return _this.increaseValue(); });
        }
        this.sizeComponent(false);
        if (this.ticks) {
            this.ticks.tickElements
                .changes
                .subscribe(function () { return _this.sizeComponent(false); });
        }
    };
    SliderComponent.prototype.ngOnDestroy = function () {
        this.decreaseButtonSubscription.unsubscribe();
        this.increaseButtonSubscription.unsubscribe();
    };
    SliderComponent.prototype.onTickClick = function (event) {
        var ticks = this.ticks.tickElements.map(function (element) { return element.nativeElement; });
        var index = ticks.indexOf(event.target);
        this.changeValue(Util.calculateValueFromTick(index, this.getProps()));
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.onTrackClick = function (event) {
        var trackClientRect = event.currentTarget.getBoundingClientRect();
        this.changeValue(Util.calculateValueFromTrack(trackClientRect, event, this.getProps()));
    };
    SliderComponent.prototype.onIncrement = function () {
        this.increaseValue();
    };
    ;
    SliderComponent.prototype.onDecrement = function () {
        this.decreaseValue();
    };
    ;
    SliderComponent.prototype.isDocumentAvailable = function () {
        return typeof document !== 'undefined';
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.onHandleDrag = function (event) {
        this.dragging = true;
        var element = this.track.nativeElement.getBoundingClientRect();
        this.changeValue(Util.calculateValueFromTrack(element, event, this.getProps()));
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.onKeyDown = function (event) {
        var options = this.getProps();
        var disabled = options.disabled, max = options.max, min = options.min;
        var handler = this.keyBinding[event.keyCode];
        if (handler && !disabled) {
            var value = handler(options);
            this.changeValue(Util.trimValue(max, min, value));
        }
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.onHandleRelease = function () {
        this.dragging = false; //needed for animation
    };
    //ngModel binding
    /**
     * @hidden
     */
    SliderComponent.prototype.writeValue = function (value) {
        this.changeValue(value);
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.registerOnChange = function (fn) {
        this.ngChange = fn;
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.registerOnTouched = function (fn) {
        this.ngTouched = fn;
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.changeValue = function (value) {
        this.value = value;
        this.ngChange(value);
        this.valueChange.emit(value);
        if (this.isDocumentAvailable()) {
            this.sizeComponent(true);
        }
    };
    /**
     * @hidden
     */
    SliderComponent.prototype.sizeComponent = function (animate) {
        var wrapper = this.wrapper.children[0];
        var props = this.getProps();
        var model = new SliderModel(props, wrapper, this.track.nativeElement);
        model.resizeTrack();
        if (this.ticks) {
            model.resizeTicks(this.ticks.container.nativeElement, this.ticks.tickElements.map(function (element) { return element.nativeElement; }));
        }
        this.handleAnimation(animate); //first time the widget is initialized the selection should not be animated
        model.positionHandle(this.draghandle.nativeElement);
        model.positionSelection(this.draghandle.nativeElement, this.sliderSelection.nativeElement);
        if (this.fixedTickWidth) {
            model.resizeWrapper();
        }
    };
    SliderComponent.prototype.setValueChangeInterval = function (element, callback) {
        var _this = this;
        var mousedown = Observable.fromEvent(element, 'mousedown');
        var mouseup = Observable.fromEvent(element, 'mouseup');
        var mouseout = Observable.fromEvent(element, 'mouseout');
        var subscription = mousedown
            .filter(function (e) { return e.button === 0; })
            .filter(function () { return !_this.disabled; })
            .concatMap(function () {
            return Observable.interval(150)
                .startWith(-1)
                .takeUntil(Observable.merge(mouseup, mouseout));
        })
            .subscribe(function () { return callback(); });
        return subscription;
    };
    SliderComponent.prototype.handleAnimation = function (animate) {
        var transition = '';
        if (!animate) {
            transition = 'none';
        }
        this.draghandle.nativeElement.style.transition = transition;
        this.sliderSelection.nativeElement.style.transition = transition;
    };
    SliderComponent.prototype.getProps = function () {
        return {
            disabled: this.disabled,
            fixedTickWidth: this.fixedTickWidth,
            max: this.max,
            min: this.min,
            smallStep: this.smallStep,
            value: Util.trimValue(this.max, this.min, this.value),
            vertical: this.vertical
        };
    };
    SliderComponent.decorators = [
        { type: Component, args: [{
                    providers: [
                        { multi: true, provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(function () { return SliderComponent; }) } /* tslint:disable-line */
                    ],
                    selector: 'kendo-slider',
                    template: "\n\n        <div class=\"k-slider-wrap k-slider-buttons\">\n            <a\n                #decreaseButton\n                *ngIf=\"showButtons\"\n                class=\"k-button k-button-decrease\"\n                [title]=\"decrementTitle\"\n                [attr.aria-label]=\"decrementTitle\"\n            >\n                <span\n                    [class.k-icon]=\"true\"\n                    [class.k-i-arrow-w]=\"!vertical\"\n                    [class.k-i-arrow-s]=\"vertical\"\n                >\n                </span>\n            </a>\n            <a\n                *ngIf=\"showButtons\"\n                #increaseButton\n                class=\"k-button k-button-increase\"\n                [title]=\"incrementTitle\"\n                [attr.aria-label]=\"incrementTitle\"\n            >\n                <span\n                    [class.k-icon]=\"true\"\n                    [class.k-i-arrow-e]=\"!vertical\"\n                    [class.k-i-arrow-n]=\"vertical\"\n                >\n                </span>\n            </a>\n            <kendo-slider-ticks\n                #ticks\n                *ngIf=\"tickPlacement !== 'none'\"\n                [title]=\"title\"\n                [vertical]=\"vertical\"\n                [ticksCount]=\"ticksCount\"\n                [step]=\"smallStep\"\n                (tickClick)=\"ifEnabled(onTickClick, $event)\"\n            >\n            </kendo-slider-ticks>\n        <div #track\n            class=\"k-slider-track\"\n            (click)=\"ifEnabled(onTrackClick, $event)\">\n            <div #sliderSelection\n                [class.k-slider-selection]=\"true\"\n                [class.k-pressed]=\"dragging\"\n                >\n            </div>\n                <a #draghandle\n                    [class.k-draghandle]=\"true\"\n                    [class.k-pressed]=\"dragging\"\n                    [title]=\"dragHandleTitle\"\n                    kendoDraggable\n                    (kendo.drag)=\"ifEnabled(onHandleDrag ,$event)\"\n                    (kendo.release)=\"ifEnabled(onHandleRelease, $event)\"\n                >Drag</a>\n            </div>\n\n            <kendo-resize-sensor (resize)=\"sizeComponent(false)\"></kendo-resize-sensor>\n        </div>\n\n  "
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
    SliderComponent.propDecorators = {
        'incrementTitle': [{ type: Input },],
        'decrementTitle': [{ type: Input },],
        'showButtons': [{ type: Input },],
        'tickPlacement': [{ type: Input },],
        'title': [{ type: Input },],
        'dragHandleTitle': [{ type: Input },],
        'vertical': [{ type: Input },],
        'min': [{ type: Input },],
        'max': [{ type: Input },],
        'smallStep': [{ type: Input },],
        'fixedTickWidth': [{ type: Input },],
        'disabled': [{ type: Input },],
        'value': [{ type: Input },],
        'valueChange': [{ type: Output },],
        'track': [{ type: ViewChild, args: ['track',] },],
        'draghandle': [{ type: ViewChild, args: ['draghandle',] },],
        'sliderSelection': [{ type: ViewChild, args: ['sliderSelection',] },],
        'ticks': [{ type: ViewChild, args: ['ticks',] },],
        'decreaseButton': [{ type: ViewChild, args: ['decreaseButton',] },],
        'increaseButton': [{ type: ViewChild, args: ['increaseButton',] },],
        'horizontalClass': [{ type: HostBinding, args: ['class.k-slider-horizontal',] },],
        'verticalClass': [{ type: HostBinding, args: ['class.k-slider-vertical',] },],
        'sliderClass': [{ type: HostBinding, args: ['class.k-slider',] },],
        'transitionsClass': [{ type: HostBinding, args: ['class.k-slider-transitions',] },],
        'widgetClass': [{ type: HostBinding, args: ['class.k-widget',] },],
        'stateDefaultClass': [{ type: HostBinding, args: ['class.k-state-default',] },],
        'topLeftClass': [{ type: HostBinding, args: ['class.k-slider-topleft',] },],
        'bottomRightClass': [{ type: HostBinding, args: ['class.k-slider-bottomright',] },],
        'disabledClass': [{ type: HostBinding, args: ['class.k-state-disabled',] },],
        'tabIndex': [{ type: HostBinding, args: ['tabIndex',] },],
        'ariaDisabled': [{ type: HostBinding, args: ['attr.aria-disabled',] },],
        'ariaMin': [{ type: HostBinding, args: ['attr.aria-valuemin',] },],
        'ariaMax': [{ type: HostBinding, args: ['attr.aria-valuemax',] },],
        'ariaValue': [{ type: HostBinding, args: ['attr.aria-valuenow',] },],
        'active': [{ type: HostListener, args: ['click',] }, { type: HostListener, args: ['focus',] },],
        'keydown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
        'blur': [{ type: HostListener, args: ['blur',] },],
    };
    return SliderComponent;
}());
