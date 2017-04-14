import { NgModule } from '@angular/core';
import { ChartModule } from './chart.module';
import { SPARKLINE_DIRECTIVES } from './sparkline.directives';
import { CommonModule } from '@angular/common';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ResizeSensorModule } from '@progress/kendo-angular-resize-sensor';
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
    return SparklineModule;
}());
export { SparklineModule };
SparklineModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SPARKLINE_DIRECTIVES],
                exports: [SPARKLINE_DIRECTIVES, ChartModule],
                imports: [ChartModule, CommonModule, PopupModule, ResizeSensorModule]
            },] },
];
/** @nocollapse */
SparklineModule.ctorParameters = function () { return []; };