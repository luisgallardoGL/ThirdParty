var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Input, Component, NgZone, HostBinding, ElementRef } from '@angular/core';
import { ConfigurationService } from './common/configuration.service';
import { TooltipTemplateService } from './common/tooltip-template.service';
import { InstanceEventService } from './events/instance-event.service';
import { ChartComponent } from './chart.component';
import { ThemeService } from './common/theme.service';
import { IntlService } from '@progress/kendo-angular-intl';
import { Sparkline } from '@progress/kendo-charts';
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
export var SparklineComponent = (function (_super) {
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
        this.instance = new Sparkline(element, Sparkline.normalizeOptions(this.options), this.theme, {
            intlService: this.intl,
            observer: observer,
            sender: this
        });
    };
    SparklineComponent.prototype.updateOptions = function () {
        this.instance.setOptions(Sparkline.normalizeOptions(this.options));
    };
    SparklineComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'kendoSparkline',
                    providers: [ConfigurationService, TooltipTemplateService, InstanceEventService],
                    selector: 'kendo-sparkline',
                    template: "\n        <span class=\"k-chart-surface\" (mouseleave)=\"chartMouseleave($event)\"></span>\n        <kendo-chart-crosshair-tooltips-container>\n        </kendo-chart-crosshair-tooltips-container>\n        <kendo-chart-tooltip-popup [animate]=\"false\" [classNames]=\"classNames\" (mouseleave)=\"tooltipMouseleave($event)\">\n        </kendo-chart-tooltip-popup>\n        <kendo-resize-sensor (resize)=\"chartResize()\"></kendo-resize-sensor>\n    "
                },] },
    ];
    /** @nocollapse */
    SparklineComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: ThemeService, },
        { type: ElementRef, },
        { type: IntlService, },
        { type: NgZone, },
        { type: InstanceEventService, },
    ]; };
    SparklineComponent.propDecorators = {
        'className': [{ type: HostBinding, args: ['class',] },],
        'type': [{ type: Input },],
        'data': [{ type: Input },],
    };
    return SparklineComponent;
}(ChartComponent));
