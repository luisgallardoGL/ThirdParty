import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntlModule } from '@progress/kendo-angular-intl';
import { CalendarComponent } from './calendar.component';
import { HeaderComponent } from './header.component';
import { VirtualizationComponent } from './virtualization.component';
import { NavigationComponent } from './navigation.component';
import { MonthViewComponent } from './month-view.component';
import { MonthComponent } from './month.component';
import { CellTemplateDirective } from './templates/cell-template.directive';
import { DOMService } from './services/dom.service';
import { MonthViewService } from './services/month-view.service';
import { NavigationService } from './services/navigation.service';
import { ScrollSyncService } from './services/scroll-sync.service';
import { LocalizedMessagesDirective } from './localization/localized-messages.directive';
import { CalendarCustomMessagesComponent } from './localization/calendar-custom-messages.component';
var COMPONENT_DIRECTIVES = [
    CalendarComponent,
    HeaderComponent,
    NavigationComponent,
    MonthViewComponent,
    MonthComponent,
    VirtualizationComponent,
    CellTemplateDirective,
    CalendarCustomMessagesComponent,
    LocalizedMessagesDirective
];
var CALENDAR_PROVIDERS = [
    DOMService,
    MonthViewService,
    NavigationService,
    ScrollSyncService
];
/**
 * The exported package module.
 *
 * The package exports:
 * - `CalendarComponent`&mdash;The Calendar component class.
 * - `CellTemplateDirective`&mdash;The cell template directive.
 *
 * @example
 *
 * ```ts-no-run
 * // Import the Calendar module.
 * import { CalendarModule } from '@progress/kendo-angular-dateinputs';
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
 *     imports:      [BrowserModule, CalendarModule], // import Calendar module
 *     bootstrap:    [AppComponent]
 * })
 * export class AppModule {}
 *
 * // Compile and launch the module.
 * platformBrowserDynamic().bootstrapModule(AppModule);
 *
 * ```
 */
export var CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [COMPONENT_DIRECTIVES],
                    exports: [COMPONENT_DIRECTIVES],
                    imports: [CommonModule, IntlModule],
                    providers: CALENDAR_PROVIDERS
                },] },
    ];
    /** @nocollapse */
    CalendarModule.ctorParameters = function () { return []; };
    return CalendarModule;
}());
