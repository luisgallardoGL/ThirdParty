import { NgModule } from '@angular/core';
import { ChartModule } from './chart.module';
import { CommonModule } from '@angular/common';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ResizeSensorModule } from '@progress/kendo-angular-resize-sensor';
import { STOCK_CHART_DIRECTIVES } from './stock-chart.directives';
/**
 * A [module](https://angular.io/docs/ts/latest/guide/ngmodule.html) that includes the StockChart component and directives.
 *
 * Imports the StockChartModule into your application
 * [root module](https://angular.io/docs/ts/latest/guide/ngmodule.html#!#angular-modularity) or any other sub-module
 * that will use the StockChart component.
 *
 * @example
 * ```ts-no-run
 * import { NgModule } from '@angular/core';
 * import { BrowserModule } from '@angular/platform-browser';
 * import { StockChartModule } from '@progress/kendo-angular-charts';
 * import { AppComponent } from './app.component';
 *
 * @@NgModule({
 *     bootstrap:    [AppComponent],
 *     declarations: [AppComponent],
 *     imports:      [BrowserModule, StockChartModule]
 * })
 * export class AppModule {
 * }
 * ```
 */
var StockChartModule = (function () {
    function StockChartModule() {
    }
    return StockChartModule;
}());
export { StockChartModule };
StockChartModule.decorators = [
    { type: NgModule, args: [{
                declarations: [STOCK_CHART_DIRECTIVES],
                exports: [STOCK_CHART_DIRECTIVES, ChartModule],
                imports: [ChartModule, CommonModule, PopupModule, ResizeSensorModule]
            },] },
];
/** @nocollapse */
StockChartModule.ctorParameters = function () { return []; };