import { Component, Input, HostBinding, Inject, Optional, ContentChildren, EventEmitter, ViewChild, Output, trigger, state, style, transition, animate } from '@angular/core';
import { RTL } from '@progress/kendo-angular-l10n';
import { TabStripTabComponent } from './tabstrip-tab.component';
import { Keys } from '../common/keys';
import { SelectEvent } from './tabstrip-events';
/**
 * Represents the Kendo UI TabStrip component for Angular.
 */
export var TabStripComponent = (function () {
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
        this.tabSelect = new EventEmitter();
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
                _a[this.invertKeys(Keys.left, Keys.right)] = function (selectedIndex) { return _this.prevNavigatableIndex(selectedIndex); },
                _a[this.invertKeys(Keys.right, Keys.left)] = function (selectedIndex) { return _this.nextNavigatableIndex(selectedIndex); },
                _a[this.invertKeys(Keys.down, Keys.up)] = function (selectedIndex) { return _this.nextNavigatableIndex(selectedIndex); },
                _a[this.invertKeys(Keys.up, Keys.down)] = function (selectedIndex) { return _this.prevNavigatableIndex(selectedIndex); },
                _a[Keys.home] = function () { return _this.firstNavigatableIndex(); },
                _a[Keys.end] = function () { return _this.lastNavigatableIndex(); },
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
        if (event.keyCode === Keys.space || event.keyCode === Keys.up || event.keyCode === Keys.down ||
            event.keyCode === Keys.left || event.keyCode === Keys.right || event.keyCode === Keys.home ||
            event.keyCode === Keys.end || event.keyCode === Keys['page up'] || event.keyCode === Keys['page down']) {
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
        var selectArgs = new SelectEvent(selectedIndex, tab.title);
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
        { type: Component, args: [{
                    animations: [
                        trigger('state', [
                            state('active', style({
                                opacity: 1
                            })),
                            transition('* => active', [
                                style({ opacity: 0 }),
                                animate('400ms ease-in')
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
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [RTL,] },] },
    ]; };
    TabStripComponent.propDecorators = {
        'height': [{ type: Input },],
        'animate': [{ type: Input },],
        'keepTabContent': [{ type: Input },],
        'tablist': [{ type: ViewChild, args: ['tablist',] },],
        'tabSelect': [{ type: Output },],
        'hostClasses': [{ type: HostBinding, args: ['class.k-widget',] }, { type: HostBinding, args: ['class.k-tabstrip',] }, { type: HostBinding, args: ['class.k-floatwrap',] }, { type: HostBinding, args: ['class.k-tabstrip-top',] }, { type: HostBinding, args: ['class.k-header',] },],
        'dir': [{ type: HostBinding, args: ['attr.dir',] },],
        'tabs': [{ type: ContentChildren, args: [TabStripTabComponent,] },],
    };
    return TabStripComponent;
}());
