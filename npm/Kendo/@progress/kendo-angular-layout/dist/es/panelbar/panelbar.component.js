import { Component, Input, Output, Inject, Optional, ContentChild, ContentChildren, ViewChildren, HostBinding, HostListener, EventEmitter, Renderer, isDevMode, ElementRef } from '@angular/core';
import { RTL } from '@progress/kendo-angular-l10n';
import { Keys } from '../common/keys';
import { PanelBarExpandMode } from './panelbar-expand-mode';
import { PanelBarItemComponent } from './panelbar-item.component';
import { PanelBarService } from "./panelbar.service";
import { PanelBarItemTemplateDirective } from "./panelbar-item-template.directive";
/**
 * Represents the Kendo UI PanelBar component for Angular.
 */
//TODO: add styles as input prop
export var PanelBarComponent = (function () {
    function PanelBarComponent(elementRef, eventService, rtl, renderer) {
        var _this = this;
        /**
         * Sets the expand mode of the PanelBar by using the `PanelBarExpandMode` enum.
         *
         * The available modes are:
         * - `"single"`&mdash;This mode allows you to expand only one item at a time. Expanding an item collapses the previously expanded one.
         * - `"multiple"`&mdash;This is the default mode of the PanelBar.
         * It allows you to expand more than one item at a time. Items can also be toggled.
         * - `"full"`&mdash;This mode allows you to expand only one item at a time.
         * The expanded area occupies the entire height of the PanelBar. The `"full"` mode requires you to set the `height` property.
         */
        this.expandMode = PanelBarExpandMode.Default;
        /**
         * Allows the PanelBar to modify the selected state of the items.
         */
        this.selectable = true;
        /**
         * Sets the animate state of the PanelBar.
         */
        this.animate = true;
        /**
         * Sets the height of the component when the `"full"` expand mode is used.
         * This option is ignored in the `"multiple"` and `"single"` expand modes.
         */
        this.height = "400px";
        /**
         * Fires each time the user interacts with a PanelBar item. The event data contains all items that are modified.
         */
        this.stateChange = new EventEmitter();
        this.tabIndex = 0;
        this.role = "tree";
        this.activeDescendant = "";
        this.isViewInit = true;
        this.focused = false;
        this.updateChildrenHeight = function () {
            var childrenHeight = 0;
            var panelbarHeight = _this.elementRef.nativeElement.offsetHeight;
            var contentOverflow = _this.expandMode === PanelBarExpandMode.Full ? 'auto' : 'visible';
            _this.childrenItems.forEach(function (item) {
                childrenHeight += item.headerHeight();
            });
            _this.childrenItems.forEach(function (item) {
                item.contentHeight = PanelBarExpandMode.Full === _this.expandMode ? (panelbarHeight - childrenHeight) + "px" : 'auto';
                item.contentOverflow = contentOverflow;
            });
        };
        this.updateAnimate = function () {
            _this.allItems.forEach(function (item) {
                if (item.state === "activeWithoutAnimation") {
                    item.state = "active";
                }
            });
        };
        this.direction = rtl ? 'rtl' : 'ltr';
        this.keyBindings = this.computedKeys;
        this.elementRef = elementRef;
        this.eventService = eventService;
        this.eventService.children$.subscribe(function (event) { return _this.onItemAction(event); });
        this.renderer = renderer;
    }
    Object.defineProperty(PanelBarComponent.prototype, "hostHeight", {
        get: function () {
            return this.expandMode === PanelBarExpandMode.Full ? this.height : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelBarComponent.prototype, "overflow", {
        get: function () {
            return this.expandMode === PanelBarExpandMode.Full ? "hidden" : "visible";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelBarComponent.prototype, "dir", {
        get: function () {
            return this.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    PanelBarComponent.prototype.invertKeys = function (original, inverted) {
        return this.direction === 'rtl' ? inverted : original;
    };
    Object.defineProperty(PanelBarComponent.prototype, "computedKeys", {
        get: function () {
            var _this = this;
            return (_a = {},
                _a[Keys.space] = function () { return _this.selectFocusedItem(); },
                _a[Keys.enter] = function () { return _this.selectFocusedItem(); },
                _a[Keys.up] = function () { return _this.focusPreviousItem(); },
                _a[this.invertKeys(Keys.left, Keys.right)] = function () { return _this.collapseItem(); },
                _a[Keys.down] = function () { return _this.focusNextItem(); },
                _a[this.invertKeys(Keys.right, Keys.left)] = function () { return _this.expandItem(); },
                _a[Keys.end] = function () { return _this.focusLastItem(); },
                _a[Keys.home] = function () { return _this.focusFirstItem(); },
                _a
            );
            var _a;
        },
        enumerable: true,
        configurable: true
    });
    PanelBarComponent.prototype.ngAfterViewChecked = function () {
        if (this.items) {
            this.childrenItems = this.viewChildItems.toArray();
            this.allItems = this.viewItems;
        }
        else {
            this.childrenItems = this.contentChildItems.toArray();
            this.allItems = this.contentItems.toArray();
        }
        if (this.isViewInit && this.childrenItems.length) {
            this.isViewInit = false;
            setTimeout(this.updateChildrenHeight);
        }
        this.validateConfiguration();
    };
    PanelBarComponent.prototype.ngOnChanges = function (changes) {
        if (changes['height'] || changes['expandMode'] || changes["items"]) {
            if (this.childrenItems) {
                setTimeout(this.updateChildrenHeight);
            }
        }
    };
    Object.defineProperty(PanelBarComponent.prototype, "templateRef", {
        get: function () {
            return this.template ? this.template.templateRef : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    PanelBarComponent.prototype.onComponentClick = function (event) {
        var itemClicked = this.visibleItems().some(function (item) {
            return item.header.nativeElement.contains(event.target);
        });
        if (!this.focused && itemClicked) {
            this.renderer.invokeElementMethod(this.elementRef.nativeElement, "focus");
        }
    };
    /**
     * @hidden
     */
    PanelBarComponent.prototype.onComponentFocus = function () {
        this.eventService.onFocus();
        this.focused = true;
        if (this.allItems.length > 0) {
            var visibleItems = this.visibleItems();
            var focusedItems = visibleItems.filter(function (item) { return item.focused; });
            if (!focusedItems.length && visibleItems.length > 0) {
                visibleItems[0].focused = true;
                this.activeDescendant = visibleItems[0].itemId;
            }
        }
        if (this.animate) {
            this.updateAnimate();
        }
    };
    /**
     * @hidden
     */
    PanelBarComponent.prototype.onComponentBlur = function () {
        this.eventService.onBlur();
        this.focused = false;
        this.activeDescendant = "";
    };
    /**
     * @hidden
     */
    PanelBarComponent.prototype.onComponentKeyDown = function (event) {
        if (event.target === this.elementRef.nativeElement) {
            if (event.keyCode === Keys.space || event.keyCode === Keys.up || event.keyCode === Keys.down ||
                event.keyCode === Keys.left || event.keyCode === Keys.right || event.keyCode === Keys.home ||
                event.keyCode === Keys.end || event.keyCode === Keys['page up'] || event.keyCode === Keys['page down']) {
                event.preventDefault();
            }
            var handler = this.keyBindings[event.keyCode];
            //TODO: check if next item is disabled and skip operation?
            if (handler) {
                handler();
            }
        }
    };
    Object.defineProperty(PanelBarComponent.prototype, "viewItems", {
        get: function () {
            var treeItems = [];
            this.viewChildItems.toArray().forEach(function (item) {
                treeItems.push(item);
                treeItems = treeItems.concat(item.subTreeViewItems());
            });
            return treeItems;
        },
        enumerable: true,
        configurable: true
    });
    PanelBarComponent.prototype.validateConfiguration = function () {
        if (isDevMode()) {
            if (this.items && (this.contentItems && this.contentItems.length > 0)) {
                throw new Error("Invalid configuration: mixed template components and items property.");
            }
        }
    };
    PanelBarComponent.prototype.onItemAction = function (item) {
        var _this = this;
        if (!item) {
            return;
        }
        var modifiedItems = new Array();
        this.allItems
            .forEach(function (currentItem) {
            var selectedState = currentItem === item;
            var focusedState = selectedState;
            selectedState = _this.selectable ? selectedState : currentItem.selected;
            if (currentItem.selected !== selectedState || currentItem.focused !== focusedState) {
                currentItem.selected = selectedState;
                currentItem.focused = focusedState;
                _this.activeDescendant = focusedState ? currentItem.itemId : "";
                modifiedItems.push(currentItem);
            }
        });
        if (this.expandMode === PanelBarExpandMode.Multiple) {
            if (item.hasChildItems || item.hasContent) {
                item.animate = this.animate;
                item.expanded = !item.expanded;
            }
            if (modifiedItems.indexOf(item) < 0) {
                modifiedItems.push(item);
            }
        }
        else {
            var siblings = item.parent ? item.parent.childrenItems : this.childrenItems;
            if (item.hasChildItems || item.hasContent) {
                siblings
                    .forEach(function (currentItem) {
                    var expandedState = currentItem === item;
                    if (currentItem.expanded !== expandedState) {
                        currentItem.animate = _this.animate;
                        currentItem.expanded = expandedState;
                        if (modifiedItems.indexOf(currentItem) < 0) {
                            modifiedItems.push(currentItem);
                        }
                    }
                });
            }
        }
        if (modifiedItems.length > 0) {
            this.stateChange.emit(modifiedItems.map(function (currentItem) { return currentItem.serialize(); }));
        }
    };
    Object.defineProperty(PanelBarComponent.prototype, "hostClasses", {
        get: function () {
            return true;
        },
        enumerable: true,
        configurable: true
    });
    PanelBarComponent.prototype.isVisible = function (item) {
        var visibleItems = this.visibleItems();
        return visibleItems.some(function (i) { return i === item; });
    };
    PanelBarComponent.prototype.getVisibleParent = function (item) {
        var visibleItems = this.visibleItems();
        if (!item.parent) {
            return item;
        }
        return visibleItems.some(function (i) { return i === item.parent; }) ? item.parent : this.getVisibleParent(item.parent);
    };
    PanelBarComponent.prototype.focusItem = function (action) {
        var visibleItems = this.visibleItems();
        var currentIndex = visibleItems.findIndex(function (item) { return item.focused; });
        var currentItem = visibleItems[currentIndex];
        var nextItem;
        if (currentIndex === -1) {
            var focusedItem = this.allItems.find(function (item) { return item.focused; });
            focusedItem.focused = false;
            currentItem = this.getVisibleParent(focusedItem);
            currentIndex = visibleItems.findIndex(function (item) { return item === currentItem; });
        }
        switch (action) {
            case "lastItem":
                nextItem = visibleItems[visibleItems.length - 1];
                break;
            case "firstItem":
                nextItem = visibleItems[0];
                break;
            case "nextItem":
                nextItem = visibleItems[currentIndex < visibleItems.length - 1 ? currentIndex + 1 : 0];
                break;
            case "previousItem":
                nextItem = visibleItems[currentIndex > 0 ? currentIndex - 1 : visibleItems.length - 1];
                break;
            default:
        }
        if (currentItem && nextItem && currentItem !== nextItem) {
            this.moveFocus(currentItem, nextItem);
        }
    };
    PanelBarComponent.prototype.moveFocus = function (from, to) {
        from.focused = false;
        to.focused = true;
        this.activeDescendant = to.itemId;
        var modifiedItems = new Array(from.serialize(), to.serialize());
        this.stateChange.emit(modifiedItems);
    };
    PanelBarComponent.prototype.focusLastItem = function () {
        this.focusItem("lastItem");
    };
    PanelBarComponent.prototype.focusFirstItem = function () {
        this.focusItem("firstItem");
    };
    PanelBarComponent.prototype.focusNextItem = function () {
        this.focusItem("nextItem");
    };
    PanelBarComponent.prototype.focusPreviousItem = function () {
        this.focusItem("previousItem");
    };
    PanelBarComponent.prototype.expandItem = function () {
        var currentItem = this.allItems.filter(function (item) { return item.focused; })[0];
        if (!this.isVisible(currentItem)) {
            currentItem.focused = false;
            currentItem = this.getVisibleParent(currentItem);
        }
        if (currentItem.hasChildItems || currentItem.hasContent) {
            if (!currentItem.expanded) {
                this.onItemAction(currentItem);
            }
            else if (currentItem.hasChildItems) {
                var firstChildIndex = currentItem.childrenItems.findIndex(function (item) { return !item.disabled; });
                if (firstChildIndex > -1) {
                    this.moveFocus(currentItem, currentItem.childrenItems[firstChildIndex]);
                }
            }
        }
    };
    PanelBarComponent.prototype.collapseItem = function () {
        var currentItem = this.allItems.filter(function (item) { return item.focused; })[0];
        if (currentItem.expanded) {
            this.onItemAction(currentItem);
        }
        else if (currentItem.parent) {
            this.moveFocus(currentItem, currentItem.parent);
        }
    };
    PanelBarComponent.prototype.selectFocusedItem = function () {
        var focusedItem = this.allItems.filter(function (item) { return item.focused; })[0];
        if (!this.isVisible(focusedItem)) {
            focusedItem.focused = false;
            focusedItem = this.getVisibleParent(focusedItem);
        }
        if (focusedItem) {
            focusedItem.onItemAction();
        }
    };
    PanelBarComponent.prototype.visibleItems = function () {
        return this.flatVisibleItems(this.childrenItems);
    };
    PanelBarComponent.prototype.flatVisibleItems = function (listOfItems, flattedItems) {
        var _this = this;
        if (listOfItems === void 0) { listOfItems = new Array(); }
        if (flattedItems === void 0) { flattedItems = new Array(); }
        listOfItems.forEach(function (item) {
            if (!item.disabled) {
                flattedItems.push(item);
                if (item.expanded && item.hasChildItems) {
                    _this.flatVisibleItems(item.childrenItems, flattedItems);
                }
            }
        });
        return flattedItems;
    };
    PanelBarComponent.decorators = [
        { type: Component, args: [{
                    exportAs: 'kendoPanelbar',
                    providers: [PanelBarService],
                    selector: 'kendo-panelbar',
                    template: "\n        <ng-content *ngIf=\"contentChildItems && !items\" select=\"kendo-panelbar-item\"></ng-content>\n        <template [ngIf]=\"items?.length\">\n            <kendo-panelbar-item\n                *ngFor=\"let item of items\"\n                 [title]=\"item.title\"\n                 [id]=\"item.id\"\n                 [icon]=\"item.icon\"\n                 [imageUrl]=\"item.imageUrl\"\n                 [selected]=\"!!item.selected\"\n                 [expanded]=\"!!item.expanded\"\n                 [disabled]=\"!!item.disabled\"\n                 [template]=\"templateRef\"\n                 [items]=\"item.children\"\n                 [content]=\"item.content\"\n            >\n            </kendo-panelbar-item>\n        </template>\n    "
                },] },
    ];
    /** @nocollapse */
    PanelBarComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: PanelBarService, },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [RTL,] },] },
        { type: Renderer, },
    ]; };
    PanelBarComponent.propDecorators = {
        'expandMode': [{ type: Input },],
        'selectable': [{ type: Input },],
        'animate': [{ type: Input },],
        'height': [{ type: Input },],
        'items': [{ type: Input },],
        'stateChange': [{ type: Output },],
        'tabIndex': [{ type: HostBinding, args: ['attr.tabIndex',] },],
        'role': [{ type: HostBinding, args: ['attr.role',] },],
        'activeDescendant': [{ type: HostBinding, args: ['attr.aria-activedescendant',] },],
        'hostHeight': [{ type: HostBinding, args: ['style.height',] },],
        'overflow': [{ type: HostBinding, args: ['style.overflow',] },],
        'dir': [{ type: HostBinding, args: ['attr.dir',] },],
        'template': [{ type: ContentChild, args: [PanelBarItemTemplateDirective,] },],
        'contentItems': [{ type: ContentChildren, args: [PanelBarItemComponent, { descendants: true },] },],
        'contentChildItems': [{ type: ContentChildren, args: [PanelBarItemComponent,] },],
        'viewChildItems': [{ type: ViewChildren, args: [PanelBarItemComponent,] },],
        'onComponentClick': [{ type: HostListener, args: ['click', ['$event'],] },],
        'onComponentFocus': [{ type: HostListener, args: ['focus',] },],
        'onComponentBlur': [{ type: HostListener, args: ['blur',] },],
        'onComponentKeyDown': [{ type: HostListener, args: ['keydown', ['$event'],] },],
        'hostClasses': [{ type: HostBinding, args: ['class.k-widget',] }, { type: HostBinding, args: ['class.k-panelbar',] },],
    };
    return PanelBarComponent;
}());
