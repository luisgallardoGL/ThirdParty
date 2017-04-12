"use strict";
var core_1 = require('@angular/core');
/**
 * @hidden
 */
var KendoSliderTicksComponent = (function () {
    function KendoSliderTicksComponent() {
        this.tickClick = new core_1.EventEmitter();
        this.ticks = [];
    }
    KendoSliderTicksComponent.prototype.ngOnChanges = function (_) {
        this.createTicks();
    };
    KendoSliderTicksComponent.prototype.onClick = function (event) {
        this.tickClick.next(event);
    };
    KendoSliderTicksComponent.prototype.tickClasses = function (tick) {
        return {
            'k-first': (tick.first && !this.vertical) || (tick.last && this.vertical),
            'k-last': (tick.last && !this.vertical) || (tick.first && this.vertical),
            'k-tick': true
        };
    };
    KendoSliderTicksComponent.prototype.createTicks = function () {
        var result = [];
        for (var i = 0; i < this.ticksCount; i++) {
            var first = i === 0;
            var last = i === this.ticksCount - 1;
            var tick = new SliderTick(first, last);
            result.push(tick);
        }
        this.ticks = result;
    };
    KendoSliderTicksComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'kendo-slider-ticks',
                    template: "\n    <ul #container class=\"k-reset k-slider-items\">\n        <li #tickElement *ngFor=\"let tick of ticks let idx=index \"\n            [ngClass]=\"tickClasses(tick)\"\n            title=\"{{title(idx * step)}}\"\n            (click)=\"onClick($event)\"\n            role=\"presentation\"\n         >&nbsp;</li>\n    </ul>\n  "
                },] },
    ];
    /** @nocollapse */
    KendoSliderTicksComponent.ctorParameters = function () { return []; };
    KendoSliderTicksComponent.propDecorators = {
        'tickClick': [{ type: core_1.Output },],
        'vertical': [{ type: core_1.Input },],
        'ticksCount': [{ type: core_1.Input },],
        'title': [{ type: core_1.Input },],
        'step': [{ type: core_1.Input },],
        'container': [{ type: core_1.ViewChild, args: ['container',] },],
        'tickElements': [{ type: core_1.ViewChildren, args: ['tickElement',] },],
    };
    return KendoSliderTicksComponent;
}());
exports.KendoSliderTicksComponent = KendoSliderTicksComponent;
/**
 * @hidden
 */
var SliderTick = (function () {
    function SliderTick(first, last) {
        this.first = first;
        this.last = last;
    }
    return SliderTick;
}());
