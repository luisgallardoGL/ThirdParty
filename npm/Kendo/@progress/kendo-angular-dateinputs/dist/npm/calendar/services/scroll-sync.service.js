"use strict";
var core_1 = require('@angular/core');
require('rxjs/add/observable/merge');
require('rxjs/add/operator/bufferCount');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/map');
var dom_service_1 = require('./dom.service');
//const isUserScrolling = (xs: ScrollEvent[]): boolean => xs[0].target === xs[1].target;
var divideByMagnitude = function (magnitude) { return function (x) { return Math.floor(x / magnitude); }; };
var powerByMagnitude = function (magnitude) { return function (x) { return x * magnitude; }; };
/**
 * @hidden
 */
var ScrollSyncService = (function () {
    function ScrollSyncService(dom, zone) {
        this.dom = dom;
        this.zone = zone;
        var magnitude = Math.max(dom.monthViewHeight() / dom.navigationItemHeight(), 1);
        this.divideByMagnitude = divideByMagnitude(magnitude);
        this.powerByMagnitude = powerByMagnitude(magnitude);
    }
    ScrollSyncService.prototype.sync = function (navigator, view) {
        var _this = this;
        this.unsubscribe();
        if (!navigator || !view) {
            return;
        }
        this.navigator = navigator;
        this.view = view;
        this.zone.runOutsideAngular(function () {
            var navScrolled, monthScrolled;
            _this.navSubscription = navigator.scroll$()
                .subscribe(function (e) {
                if (monthScrolled) {
                    monthScrolled = false;
                    return;
                }
                navScrolled = true;
                _this.scrollSiblingOf(e.target);
            });
            _this.viewSubscription = view.scroll$()
                .subscribe(function (e) {
                if (navScrolled) {
                    navScrolled = false;
                    return;
                }
                monthScrolled = true;
                _this.scrollSiblingOf(e.target);
            });
            /*this.subscription = Observable
                .merge(navigator.scroll$(), view.scroll$())
                .bufferCount(2)
                .filter(xs => isUserScrolling(xs))
                .map(xs => ({ target: xs[0].target }))
                .subscribe(({ target }) => this.scrollSiblingOf(target));*/
        });
    };
    ScrollSyncService.prototype.scrollSiblingOf = function (scrolledElement) {
        var component = this.siblingComponent(scrolledElement);
        var scrollTop = this.calculateScroll(component, scrolledElement.scrollTop);
        component.scrollTo(scrollTop);
    };
    ScrollSyncService.prototype.siblingComponent = function (scrollableElement) {
        return this.navigator.container.nativeElement === scrollableElement ? this.view : this.navigator;
    };
    ScrollSyncService.prototype.calculateScroll = function (component, scrollTop) {
        var modifier = component === this.navigator ? this.divideByMagnitude : this.powerByMagnitude;
        return modifier(scrollTop);
    };
    ScrollSyncService.prototype.destroy = function () {
        this.unsubscribe();
    };
    ScrollSyncService.prototype.unsubscribe = function () {
        if (this.navSubscription) {
            this.navSubscription.unsubscribe();
        }
        if (this.viewSubscription) {
            this.viewSubscription.unsubscribe();
        }
    };
    ScrollSyncService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ScrollSyncService.ctorParameters = function () { return [
        { type: dom_service_1.DOMService, },
        { type: core_1.NgZone, },
    ]; };
    return ScrollSyncService;
}());
exports.ScrollSyncService = ScrollSyncService;
