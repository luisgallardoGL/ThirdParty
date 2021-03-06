"use strict";
var core_1 = require('@angular/core');
var chart_module_1 = require('./chart.module');
var sparkline_directives_1 = require('./sparkline.directives');
var common_1 = require('@angular/common');
var kendo_angular_popup_1 = require('@progress/kendo-angular-popup');
var kendo_angular_resize_sensor_1 = require('@progress/kendo-angular-resize-sensor');
/**
 * A [module](https://angular.io/docs/ts/latest/guide/ngmodule.html) that includes the Sparkline component and directives.
 *
 * Imports the SparklineModule into your application
 * [root module](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#angular-modularity) or any other sub-module
 * that will use the Sparkline component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { SparklineModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * @@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, SparklineModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
var SparklineModule = (function () {
    function SparklineModule() {
    }
    SparklineModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [sparkline_directives_1.SPARKLINE_DIRECTIVES],
                    exports: [sparkline_directives_1.SPARKLINE_DIRECTIVES, chart_module_1.ChartModule],
                    imports: [chart_module_1.ChartModule, common_1.CommonModule, kendo_angular_popup_1.PopupModule, kendo_angular_resize_sensor_1.ResizeSensorModule]
                },] },
    ];
    /** @nocollapse */
    SparklineModule.ctorParameters = function () { return []; };
    return SparklineModule;
}());
exports.SparklineModule = SparklineModule;
