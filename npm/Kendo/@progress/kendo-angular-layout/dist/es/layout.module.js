import { NgModule } from '@angular/core';
import { PanelBarModule } from './panelbar.module';
import { TabStripModule } from './tabstrip.module';
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
export var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule.decorators = [
        { type: NgModule, args: [{
                    exports: [PanelBarModule, TabStripModule]
                },] },
    ];
    /** @nocollapse */
    LayoutModule.ctorParameters = function () { return []; };
    return LayoutModule;
}());
