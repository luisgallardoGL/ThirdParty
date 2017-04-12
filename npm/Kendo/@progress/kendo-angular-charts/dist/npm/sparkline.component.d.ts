import { NgZone, ElementRef } from '@angular/core';
import { ConfigurationService } from './common/configuration.service';
import { InstanceEventService } from './events/instance-event.service';
import { ChartInstanceObserver } from './common/chart-instance-observer';
import { ChartComponent } from './chart.component';
import { ThemeService } from './common/theme.service';
import { IntlService } from '@progress/kendo-angular-intl';
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
export declare class SparklineComponent extends ChartComponent {
    configurationService: ConfigurationService;
    themeService: ThemeService;
    protected element: ElementRef;
    protected intl: IntlService;
    protected ngZone: NgZone;
    protected instanceEventService: InstanceEventService;
    readonly className: string;
    /**
     * The default series type.
     */
    type: string;
    /**
     * The data for the default Sparkline series.
     * Discarded if series are supplied.
     */
    data: any[];
    /**
     * @hidden
     */
    tooltipWrapperClass: string;
    /**
     * @hidden
     */
    tooltipContentClasses: any;
    constructor(configurationService: ConfigurationService, themeService: ThemeService, element: ElementRef, intl: IntlService, ngZone: NgZone, instanceEventService: InstanceEventService);
    protected createInstance(element: any, observer: ChartInstanceObserver): void;
    protected updateOptions(): void;
}
