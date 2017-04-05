"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var configuration_service_1 = require('./common/configuration.service');
var tooltip_template_service_1 = require('./common/tooltip-template.service');
var instance_event_service_1 = require('./events/instance-event.service');
var chart_component_1 = require('./chart.component');
var theme_service_1 = require('./common/theme.service');
var kendo_angular_intl_1 = require('@progress/kendo-angular-intl');
var kendo_charts_1 = require('@progress/kendo-charts');
/* tslint:disable:no-access-missing-member */
/**
 * The root Chart component.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-sparkline [data]=[data] type="column">
 *     </kendo-sparkline>
 *   `
 * })
 * class AppComponent {
 *   public data: any[] = [
 *     936, 968, 1025, 999, 998, 1014, 1017, 1010, 1010, 1007,
 *     1004, 988, 990, 988, 987, 995, 946, 954, 991, 984,
 *     974, 956, 986, 936, 955, 1021, 1013, 1005, 958, 953,
 *     952, 940, 937, 980, 966, 965, 928, 916, 910, 980
 *   ];
 * }
 *
 * ```
 */
var SparklineComponent = (function (_super) {
    __extends(SparklineComponent, _super);
    function SparklineComponent(configurationService, themeService, element, intl, ngZone, instanceEventService) {
        _super.call(this, configurationService, themeService, element, intl, ngZone, instanceEventService);
        this.configurationService = configurationService;
        this.themeService = themeService;
        this.element = element;
        this.intl = intl;
        this.ngZone = ngZone;
        this.instanceEventService = instanceEventService;
        /**
         * @hidden
         */
        this.classNames = {
            'k-sparkline-tooltip': true
        };
    }
    Object.defineProperty(SparklineComponent.prototype, "className", {
        get: function () {
            return 'k-sparkline k-widget';
        },
        enumerable: true,
        configurable: true
    });
    SparklineComponent.prototype.createInstance = function (element, observer) {
        this.instance = new kendo_charts_1.Sparkline(element, kendo_charts_1.Sparkline.normalizeOptions(this.options), this.theme, {
            intlService: this.intl,
            observer: observer,
            sender: this
        });
    };
    SparklineComponent.prototype.updateOptions = function () {
        this.instance.setOptions(kendo_charts_1.Sparkline.normalizeOptions(this.options));
    };
    SparklineComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'kendoSparkline',
                    providers: [configuration_service_1.ConfigurationService, tooltip_template_service_1.TooltipTemplateService, instance_event_service_1.InstanceEventService],
                    selector: 'kendo-sparkline',
                    template: "\n        <span class=\"k-chart-surface\" (mouseleave)=\"chartMouseleave($event)\"></span>\n        <kendo-chart-crosshair-tooltips-container>\n        </kendo-chart-crosshair-tooltips-container>\n        <kendo-chart-tooltip-popup [animate]=\"false\" [classNames]=\"classNames\" (mouseleave)=\"tooltipMouseleave($event)\">\n        </kendo-chart-tooltip-popup>\n        <kendo-resize-sensor (resize)=\"chartResize()\"></kendo-resize-sensor>\n    "
                },] },
    ];
    /** @nocollapse */
    SparklineComponent.ctorParameters = function () { return [
        { type: configuration_service_1.ConfigurationService, },
        { type: theme_service_1.ThemeService, },
        { type: core_1.ElementRef, },
        { type: kendo_angular_intl_1.IntlService, },
        { type: core_1.NgZone, },
        { type: instance_event_service_1.InstanceEventService, },
    ]; };
    SparklineComponent.propDecorators = {
        'className': [{ type: core_1.HostBinding, args: ['class',] },],
        'type': [{ type: core_1.Input },],
        'data': [{ type: core_1.Input },],
    };
    return SparklineComponent;
}(chart_component_1.ChartComponent));
exports.SparklineComponent = SparklineComponent;
