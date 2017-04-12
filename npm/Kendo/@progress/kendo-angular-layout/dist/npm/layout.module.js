"use strict";
var core_1 = require('@angular/core');
var panelbar_module_1 = require('./panelbar.module');
var tabstrip_module_1 = require('./tabstrip.module');
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the Layout components.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Layout module.
 * import { LayoutModule } from '@progress/kendo-angular-layout';
 *
 * // The browser platform with a compiler.
 * import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 *
 * import { NgModule } from '@angular/core';
 *
 * // Import the app component.
 * import { AppComponent } from './app.component';
 *
 * // Define the app module.
 * @@NgModule({
 *     declarations: [AppComponent], // declare app component
 *     imports:      [BrowserModule, LayoutModule], // import Layout module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module.
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [panelbar_module_1.PanelBarModule, tabstrip_module_1.TabStripModule]
                },] },
    ];
    /** @nocollapse */
    LayoutModule.ctorParameters = function () { return []; };
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
