import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelBarComponent } from './panelbar/panelbar.component';
import { PanelBarItemComponent } from './panelbar/panelbar-item.component';
import { PanelBarContentDirective } from './panelbar/panelbar-content.directive';
import { PanelBarItemTemplateDirective } from './panelbar/panelbar-item-template.directive';
import { PanelBarItemTitleDirective } from './panelbar/panelbar-item-title.directive';
var exportedModules = [
    PanelBarComponent,
    PanelBarItemComponent,
    PanelBarContentDirective,
    PanelBarItemTemplateDirective,
    PanelBarItemTitleDirective
];
var declarations = exportedModules.slice();
/**
 * Represents the [NgModule](https://angular.io/docs/ts/latest/guide/ngmodule.html)
 * definition for the PanelBar component.
 *
 * The module registers:
 * - `PanelBarComponent`&mdash;The `PanelBar` component class.
 * - `PanelBarItemComponent`&mdash;The `PanelBarItem` component class.
 * - `PanelBarContentComponent`&mdash;The `PanelBarContent` component class.
 * - `PanelBarItemTemplateDirective&mdash;The `PanelBarItemTemplate` directive.
 * - `PanelBarItemTitleDirective&mdash;The `PanelBarItemTitle` directive.
 */
export var PanelBarModule = (function () {
    function PanelBarModule() {
    }
    PanelBarModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [declarations],
                    exports: [exportedModules],
                    imports: [CommonModule]
                },] },
    ];
    /** @nocollapse */
    PanelBarModule.ctorParameters = function () { return []; };
    return PanelBarModule;
}());
