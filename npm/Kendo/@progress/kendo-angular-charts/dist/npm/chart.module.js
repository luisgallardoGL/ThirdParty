"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var kendo_angular_popup_1 = require('@progress/kendo-angular-popup');
var kendo_angular_resize_sensor_1 = require('@progress/kendo-angular-resize-sensor');
var kendo_angular_intl_1 = require('@progress/kendo-angular-intl');
var theme_service_1 = require('./common/theme.service');
var tooltip_template_service_1 = require('./common/tooltip-template.service');
var chart_directives_1 = require('./chart.directives');
/**
 * A [module](https://angular.io/docs/ts/latest/guide/ngmodule.html) that includes the Chart component and directives.
 *
 * Imports the ChartModule into your application
 * [root module](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#angular-modularity) or any other sub-module
 * that will use the Chart component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { ChartModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * @@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, ChartModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [chart_directives_1.CHART_DIRECTIVES],
                    exports: [chart_directives_1.CHART_DIRECTIVES],
                    imports: [common_1.CommonModule, kendo_angular_popup_1.PopupModule, kendo_angular_resize_sensor_1.ResizeSensorModule],
                    providers: [
                        { provide: kendo_angular_intl_1.IntlService, useClass: kendo_angular_intl_1.CldrIntlService },
                        theme_service_1.ThemeService,
                        tooltip_template_service_1.TooltipTemplateService
                    ]
                },] },
    ];
    /** @nocollapse */
    ChartModule.ctorParameters = function () { return []; };
    return ChartModule;
}());
exports.ChartModule = ChartModule;
