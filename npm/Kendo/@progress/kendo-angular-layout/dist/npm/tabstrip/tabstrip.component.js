"use strict";
var core_1 = require('@angular/core');
var kendo_angular_l10n_1 = require('@progress/kendo-angular-l10n');
var tabstrip_tab_component_1 = require('./tabstrip-tab.component');
var keys_1 = require('../common/keys');
var tabstrip_events_1 = require('./tabstrip-events');
/**
 * Represents the Kendo UI TabStrip component for Angular.
 */
var TabStripComponent = (function () {
    function TabStripComponent(rtl) {
        /**
         * Enables the tab animation.
         */
        this.animate = true;
        /**
         * When set to `true`, the component renders all tabs and they are persisted in the DOM.
         * By default, this option is set to `false`.
         */
        this.keepTabContent = false;
        /**
         * Fires each time the user selects a tab.
         * The event data contains the index of the selected tab and its title.
         */
        this.tabSelect = new core_1.EventEmitter();
        /**
         * @hidden
         */
        this._animate = false;
        this.direction = rtl ? 'rtl' : 'ltr';
        this.keyBindings = this.computedKeys;
    }
    Object.defineProperty(TabStripComponent.prototype, "hostClasses", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabStripComponent.prototype, "dir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    TabStripComponent.prototype.contentClass = function (active) {
        var visible = !this.keepTabContent || active;
        return visible ? 'k-content k-state-active' : 'k-content';
    };
    Object.defineProperty(TabStripComponent.prototype, "computedKeys", {
        get: function () {
            var _this = this;
            return (_a = {},
                _a[this.invertKeys(keys_1.Keys.left, keys_1.Keys.right)] = function (selectedIndex) { return _this.prevNavigatableIndex(selectedIndex); },
                _a[this.invertKeys(keys_1.Keys.right, keys_1.Keys.left)] = function (selectedIndex) { return _this.nextNavigatableIndex(selectedIndex); },
                _a[this.invertKeys(keys_1.Keys.down, keys_1.Keys.up)] = function (selectedIndex) { return _this.nextNavigatableIndex(selectedIndex); },
                _a[this.invertKeys(keys_1.Keys.up, keys_1.Keys.down)] = function (selectedIndex) { return _this.prevNavigatableIndex(selectedIndex); },
                _a[keys_1.Keys.home] = function () { return _this.firstNavigatableIndex(); },
                _a[keys_1.Keys.end] = function () { return _this.lastNavigatableIndex(); },
                _a
            );
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    TabStripComponent.prototype.invertKeys = function (original, inverted) {
        return this.direction === 'rtl' ? inverted : original;
    };
    /**
     * @hidden
     */
    TabStripComponent.prototype.onKeyDown = function (event) {
        var selectedIndex = this.tabs.toArray().findIndex(function (tab) { return tab.active && !tab.disabled; });
        if (event.currentTarget !== this.tablist.nativeElement) {
            return;
        }
        if (event.keyCode === keys_1.Keys.space || event.keyCode === keys_1.Keys.up || event.keyCode === keys_1.Keys.down ||
            event.keyCode === keys_1.Keys.left || event.keyCode === keys_1.Keys.right || event.keyCode === keys_1.Keys.home ||
            event.keyCode === keys_1.Keys.end || event.keyCode === keys_1.Keys['page up'] || event.keyCode === keys_1.Keys['page down']) {
            event.preventDefault();
        }
        if (selectedIndex === -1) {
            this.selectTab(this.firstNavigatableIndex());
        }
        else {
            var getTabIndex = this.keyBindings[event.keyCode];
            if (getTabIndex) {
                var nextIndex = getTabIndex(selectedIndex);
                if (selectedIndex !== nextIndex) {
                    this.selectTab(getTabIndex(selectedIndex));
                }
            }
        }
    };
    /**
     * @hidden
     */
    TabStripComponent.prototype.tabPanelId = function (id) {
        return 'k-tabstrip-tabpanel-' + id;
    };
    /**
     * @hidden
     */
    TabStripComponent.prototype.tabId = function (id) {
        return 'k-tabstrip-tab-' + id;
    };
    /**
     * @hidden
     */
    TabStripComponent.prototype.selectTab = function (selectedIndex) {
        var tab = this.tabs.toArray()[selectedIndex];
        if (!tab || !!tab.disabled) {
            return;
        }
        this.emitEvent(tab, selectedIndex);
    };
    /**
     * @hidden
     */
    TabStripComponent.prototype.tabItemClass = function (tab) {
        return {
            'k-item': true,
            'k-state-active': tab.active,
            'k-state-default': true,
            'k-state-disabled': tab.disabled
        };
    };
    TabStripComponent.prototype.firstNavigatableIndex = function () {
        var tabs = this.tabs.toArray();
        for (var i = 0; i < tabs.length; i++) {
            if (!tabs[i].disabled) {
                return i;
            }
        }
    };
    TabStripComponent.prototype.lastNavigatableIndex = function () {
        var tabs = this.tabs.toArray();
        for (var i = tabs.length - 1; i > 0; i--) {
            if (!tabs[i].disabled) {
                return i;
            }
        }
    };
    TabStripComponent.prototype.prevNavigatableIndex = function (selectedIndex) {
        if (selectedIndex - 1 < 0) {
            return this.lastNavigatableIndex();
        }
        var tabs = this.tabs.toArray();
        for (var i = selectedIndex - 1; i > -1; i--) {
            if (!tabs[i].disabled) {
                return i;
            }
            if (i === 0) {
                return this.lastNavigatableIndex();
            }
        }
        return selectedIndex;
    };
    TabStripComponent.prototype.nextNavigatableIndex = function (selectedIndex) {
        if (selectedIndex + 1 >= this.tabs.length) {
            return this.firstNavigatableIndex();
        }
        var tabs = this.tabs.toArray();
        for (var i = selectedIndex + 1; i < tabs.length; i++) {
            if (!tabs[i].disabled) {
                return i;
            }
            if (i + 1 === tabs.length) {
                return this.firstNavigatableIndex();
            }
        }
    };
    TabStripComponent.prototype.emitEvent = function (tab, selectedIndex) {
        var selectArgs = new tabstrip_events_1.SelectEvent(selectedIndex, tab.title);
        this.tabSelect.emit(selectArgs);
        if (!selectArgs.isDefaultPrevented()) {
            this._animate = this.animate;
            this.deactivateAll();
            tab.active = true;
        }
    };
    TabStripComponent.prototype.deactivateAll = function () {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
    };
    TabStripComponent.decorators = [
        { type: core_1.Component, args: [{
                    animations: [
                        core_1.trigger('state', [
                            core_1.state('active', core_1.style({
                                opacity: 1
                            })),
                            core_1.transition('* => active', [
                                core_1.style({ opacity: 0 }),
                                core_1.animate('400ms ease-in')
                            ])
                        ])
                    ],
                    exportAs: 'kendoTabStrip',
                    selector: 'kendo-tabstrip',
                    template: "\n        <ul\n            class=\"k-reset k-tabstrip-items\"\n            role=\"tablist\"\n            (keydown)=\"onKeyDown($event)\"\n            [tabIndex]=\"0\"\n            #tablist\n        >\n            <li *ngFor=\"let tab of tabs; let i = index;\" (click)=\"selectTab(i)\"\n                [ngClass]=\"tabItemClass(tab)\"\n                role=\"tab\"\n                [id]=\"tabId(i)\"\n                [attr.aria-selected]=\"tab.active\"\n                [attr.aria-controls]=\"tab.tabPanelId\"\n                [attr.aria-disabled]=\"tab.disabled\"\n            ><span class=\"k-link\">{{ tab.title }}<template [ngTemplateOutlet]=\"tab.tabTitle?.templateRef\"></template></span></li>\n        </ul>\n        <template ngFor let-tab [ngForOf]=\"tabs\" let-i=\"index\">\n            <div\n                [@state]=\"tab.active && _animate ? 'active' : 'inactive'\"\n                *ngIf=\"tab.active || keepTabContent\"\n                [ngClass]=\"contentClass(tab.active)\"\n                [ngStyle]=\"{'height': tab.height}\"\n                role=\"tabpanel\"\n                [id]=\"tabPanelId(i)\"\n                [attr.aria-hidden]=\"!tab.active\"\n                [attr.aria-expanded]=\"tab.active\"\n                [attr.aria-labelledby]=\"tabId(i)\"\n                [attr.aria-disabled]=\"tab.disabled\"\n            >\n                <template [ngTemplateOutlet]=\"tab.tabContent.templateRef\"></template>\n            </div>\n        </template>\n    "
                },] },
    ];
    /** @nocollapse */
    TabStripComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [kendo_angular_l10n_1.RTL,] },] },
    ]; };
    TabStripComponent.propDecorators = {
        'height': [{ type: core_1.Input },],
        'animate': [{ type: core_1.Input },],
        'keepTabContent': [{ type: core_1.Input },],
        'tablist': [{ type: core_1.ViewChild, args: ['tablist',] },],
        'tabSelect': [{ type: core_1.Output },],
        'hostClasses': [{ type: core_1.HostBinding, args: ['class.k-widget',] }, { type: core_1.HostBinding, args: ['class.k-tabstrip',] }, { type: core_1.HostBinding, args: ['class.k-floatwrap',] }, { type: core_1.HostBinding, args: ['class.k-tabstrip-top',] }, { type: core_1.HostBinding, args: ['class.k-header',] },],
        'dir': [{ type: core_1.HostBinding, args: ['attr.dir',] },],
        'tabs': [{ type: core_1.ContentChildren, args: [tabstrip_tab_component_1.TabStripTabComponent,] },],
    };
    return TabStripComponent;
}());
exports.TabStripComponent = TabStripComponent;
