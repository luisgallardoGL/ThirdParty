"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var panelbar_component_1 = require('./panelbar/panelbar.component');
var panelbar_item_component_1 = require('./panelbar/panelbar-item.component');
var panelbar_content_directive_1 = require('./panelbar/panelbar-content.directive');
var panelbar_item_template_directive_1 = require('./panelbar/panelbar-item-template.directive');
var panelbar_item_title_directive_1 = require('./panelbar/panelbar-item-title.directive');
var exportedModules = [
    panelbar_component_1.PanelBarComponent,
    panelbar_item_component_1.PanelBarItemComponent,
    panelbar_content_directive_1.PanelBarContentDirective,
    panelbar_item_template_directive_1.PanelBarItemTemplateDirective,
    panelbar_item_title_directive_1.PanelBarItemTitleDirective
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
var PanelBarModule = (function () {
    function PanelBarModule() {
    }
    PanelBarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [declarations],
                    exports: [exportedModules],
                    imports: [common_1.CommonModule]
                },] },
    ];
    /** @nocollapse */
    PanelBarModule.ctorParameters = function () { return []; };
    return PanelBarModule;
}());
exports.PanelBarModule = PanelBarModule;
