"use strict";
var core_1 = require('@angular/core');
var panelbar_service_1 = require("./panelbar.service");
var panelbar_content_directive_1 = require("./panelbar-content.directive");
var panelbar_item_title_directive_1 = require("./panelbar-item-title.directive");
/**
 * @hidden
 */
var nextId = 0;
/**
 * Represents the Kendo UI PanelBar items.
 */
var PanelBarItemComponent = (function () {
    function PanelBarItemComponent(parent, eventService) {
        var _this = this;
        /**
         * Sets the title of the PanelBar item.
         */
        this.title = 'Untitled';
        /**
         * Allows the component to set the `"id"` property to each item.
         * This property is used to set `id` attributes of the nested elements and enable ARIA support.
         */
        this.id = "default-" + nextId++;
        /**
         * Defines an icon to be rendered next to the title.
         */
        this.icon = '';
        /**
         * Defines an icon with a custom CSS class to be rendered next to the title.
         */
        this.iconClass = '';
        /**
         * Defines the location of an image to be displayed next to the title.
         */
        this.imageUrl = '';
        /**
         * Disables a PanelBar item when set to `true`.
         */
        this.disabled = false;
        /**
         * Sets the selected state of a PanelBar item.
         */
        this.selected = false;
        this.hasChildItems = false;
        this.hasContent = false;
        this.state = "";
        this.animate = false;
        this.role = "treeitem";
        this.titleAttribute = null; // tslint:disable-line
        this.focused = false;
        this.wrapperFocused = false;
        this._expanded = false;
        this.eventService = eventService;
        this.eventService.parent$.subscribe(function (focused) { return _this.onWrapperFocusChange(focused); });
        this.wrapperFocused = parent ? parent.focused : false;
        this.parent = parent;
    }
    Object.defineProperty(PanelBarItemComponent.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        /**
         * Expands the PanelBar item when set to `true`.
         */
        set: function (value) {
            var activeState = this.animate ? "active" : "activeWithoutAnimation";
            this.state = value ? activeState : "";
            this._expanded = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelBarItemComponent.prototype, "className", {
        get: function () {
            return this.resolveClasses({
                'k-item': true,
                'k-state-default': !this.disabled,
                'k-state-disabled': this.disabled,
                'k-state-expanded': !this.disabled && this.expanded && (this.hasChildItems || this.hasContent)
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelBarItemComponent.prototype, "itemId", {
        get: function () {
            return 'k-panelbar-item-' + this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelBarItemComponent.prototype, "ariaExpanded", {
        get: function () {
            return (this.hasChildItems || this.hasContent) ? !this.disabled && this.expanded : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelBarItemComponent.prototype, "ariaSelected", {
        get: function () {
            return !this.disabled && this.selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelBarItemComponent.prototype, "ariaDisabled", {
        get: function () {
            return this.disabled ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PanelBarItemComponent.prototype, "titleTemplate", {
        /**
         * @hidden
         */
        get: function () {
            return this.titleTemplates.length > 0 ? this.titleTemplates.toArray()[0].templateRef : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @hidden
     */
    PanelBarItemComponent.prototype.headerHeight = function () {
        return this.header.nativeElement.offsetHeight;
    };
    /**
     * @hidden
     */
    PanelBarItemComponent.prototype.ngAfterContentChecked = function () {
        this.hasChildItems = this.contentItems.length > 1 || (this.items && this.items.length > 0);
        this.hasContent = this.contentTemplate !== undefined || this.content !== undefined;
        this.validateConfiguration();
    };
    /**
     * @hidden
     */
    PanelBarItemComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.items) {
            this.childrenItems = this.viewChildItems.toArray();
        }
        else {
            this.childrenItems = this.contentItems.filter(function (item) { return item !== _this; });
        }
    };
    /**
     * @hidden
     */
    PanelBarItemComponent.prototype.onItemAction = function () {
        if (!this.disabled) {
            this.eventService.onSelect(this);
        }
    };
    Object.defineProperty(PanelBarItemComponent.prototype, "iconClasses", {
        /**
         * @hidden
         */
        get: function () {
            var icon = this.icon ? 'k-i-' + this.icon : null;
            return (_a = {},
                _a[icon || this.iconClass] = true,
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
    PanelBarItemComponent.prototype.serialize = function () {
        return {
            content: this.content,
            disabled: this.disabled,
            expanded: this.expanded,
            focused: this.focused,
            icon: this.icon,
            iconClass: this.iconClass,
            id: this.id,
            imageUrl: this.imageUrl,
            selected: this.selected,
            title: this.title
        };
    };
    /**
     * @hidden
     */
    PanelBarItemComponent.prototype.subTreeViewItems = function () {
        var subTree = [];
        this.viewChildItems.forEach(function (item) {
            subTree = subTree.concat(item.subTreeViewItems());
            subTree.push(item);
        });
        return subTree;
    };
    /**
     * @hidden
     */
    PanelBarItemComponent.prototype.validateConfiguration = function () {
        if (core_1.isDevMode()) {
            if (this.content && (this.contentTemplate !== undefined)) {
                throw new Error("Invalid configuration: mixed template components and component property.");
            }
        }
    };
    PanelBarItemComponent.prototype.onWrapperFocusChange = function (focused) {
        this.wrapperFocused = focused;
    };
    PanelBarItemComponent.prototype.resolveClasses = function (classes) {
        var resolved = '';
        Object.keys(classes).forEach(function (key) {
            resolved += classes[key] ? key + ' ' : '';
        });
        return resolved;
    };
    PanelBarItemComponent.decorators = [
        { type: core_1.Component, args: [{
                    animations: [
                        core_1.trigger('toggle', [
                            core_1.transition('active => void', [
                                core_1.animate(200, core_1.style({ display: 'block', height: '0px' }))
                            ]),
                            core_1.transition('void => active', [
                                core_1.style({ display: 'block', height: '0px' }),
                                core_1.animate(200, core_1.style({ display: 'block', height: core_1.AUTO_STYLE }))
                            ])
                        ])
                    ],
                    exportAs: 'kendoPanelbarItem',
                    selector: "kendo-panelbar-item",
                    template: "<span\n            #header\n            [class.k-link]=\"true\"\n            [class.k-header]=\"!parent\"\n            [class.k-state-selected]=\"!disabled && selected\"\n            [class.k-state-focused]=\"!disabled && focused && wrapperFocused\"\n            (click)=\"onItemAction()\"\n        >\n            <span\n                *ngIf=\"icon || iconClass\"\n                class=\"k-icon\"\n                [ngClass]=\"iconClasses\"\n            ></span>\n            <img\n                *ngIf=\"imageUrl\"\n                class=\"k-image\"\n                [src]=\"imageUrl\"\n                alt=\"\"\n            >\n            {{title}}\n            <template [ngTemplateOutlet]=\"titleTemplate\"></template>\n            <span *ngIf=\"hasChildItems || hasContent\"\n                [class.k-icon]=\"true\"\n                [class.k-i-arrow-n]=\"expanded\"\n                [class.k-panelbar-collapse]=\"expanded\"\n                [class.k-i-arrow-s]=\"!expanded\"\n                [class.k-panelbar-expand]=\"!expanded\"\n            ></span>\n        </span>\n        <div\n            *ngIf=\"!disabled && expanded && (hasChildItems || hasContent)\"\n            [@toggle]=\"state\"\n            [style.overflow]=\"'hidden'\"\n            [attr.role]=\"'group'\"\n            [attr.aria-hidden]=\"!disabled && !expanded\"\n        >\n            <div\n                *ngIf=\"hasChildItems && !items?.length\"\n                [style.overflow]=\"contentOverflow\"\n                [style.height]=\"contentHeight\"\n                class=\"k-panel k-group\"\n            >\n                <ng-content select=\"kendo-panelbar-item\"></ng-content>\n            </div>\n            <div\n                *ngIf=\"hasContent && !content\"\n                [style.overflow]=\"contentOverflow\"\n                [style.height]=\"contentHeight\"\n                class=\"k-content\"\n            >\n                <template\n                    [ngTemplateOutlet]=\"contentTemplate.templateRef\"\n                    [ngOutletContext]=\"{\n                        $implicit: {\n                            title: title,\n                            id: id,\n                            icon: icon,\n                            imageUrl: imageUrl,\n                            disabled: disabled,\n                            content: content\n                        }\n                    }\"\n                >\n                </template>\n            </div>\n            <div\n                *ngIf=\"items?.length\"\n                [style.overflow]=\"contentOverflow\"\n                [style.height]=\"contentHeight\"\n                class=\"k-panel k-group\"\n            >\n                <kendo-panelbar-item\n                    *ngFor=\"let item of items\"\n                    [title]=\"item.title\"\n                    [id]=\"item.id\"\n                    [icon]=\"item.icon\"\n                    [imageUrl]=\"item.imageUrl\"\n                    [selected]=\"!!item.selected\"\n                    [expanded]=\"!!item.expanded\"\n                    [disabled]=\"!!item.disabled\"\n                    [template]=\"template\"\n                    [items]=\"item.children\"\n                    [content]=\"item.content\"\n                ></kendo-panelbar-item>\n            </div>\n            <div\n                *ngIf=\"content\"\n                [style.overflow]=\"contentOverflow\"\n                [style.height]=\"contentHeight\"\n                class=\"k-content\"\n            >\n                <template\n                    [ngTemplateOutlet]=\"template\"\n                    [ngOutletContext]=\"{\n                        $implicit: {\n                            title: title,\n                            id: id,\n                            icon: icon,\n                            imageUrl: imageUrl,\n                            disabled: disabled,\n                            content: content\n                        }\n                    }\"\n                >\n                </template>\n                <template [ngIf]=\"!template\">{{content}}</template>\n            </div>\n        </div>"
                },] },
    ];
    /** @nocollapse */
    PanelBarItemComponent.ctorParameters = function () { return [
        { type: PanelBarItemComponent, decorators: [{ type: core_1.SkipSelf }, { type: core_1.Host }, { type: core_1.Optional },] },
        { type: panelbar_service_1.PanelBarService, },
    ]; };
    PanelBarItemComponent.propDecorators = {
        'title': [{ type: core_1.Input },],
        'id': [{ type: core_1.Input },],
        'icon': [{ type: core_1.Input },],
        'iconClass': [{ type: core_1.Input },],
        'imageUrl': [{ type: core_1.Input },],
        'disabled': [{ type: core_1.Input },],
        'expanded': [{ type: core_1.Input },],
        'selected': [{ type: core_1.Input },],
        'content': [{ type: core_1.Input },],
        'items': [{ type: core_1.Input },],
        'template': [{ type: core_1.Input },],
        'header': [{ type: core_1.ViewChild, args: ['header', {},] },],
        'role': [{ type: core_1.HostBinding, args: ['attr.role',] },],
        'titleAttribute': [{ type: core_1.HostBinding, args: ['attr.title',] },],
        'className': [{ type: core_1.HostBinding, args: ['class',] },],
        'itemId': [{ type: core_1.HostBinding, args: ['id',] },],
        'ariaExpanded': [{ type: core_1.HostBinding, args: ['attr.aria-expanded',] },],
        'ariaSelected': [{ type: core_1.HostBinding, args: ['attr.aria-selected',] },],
        'ariaDisabled': [{ type: core_1.HostBinding, args: ['attr.aria-disabled',] },],
        'viewChildItems': [{ type: core_1.ViewChildren, args: [PanelBarItemComponent,] },],
        'contentItems': [{ type: core_1.ContentChildren, args: [PanelBarItemComponent,] },],
        'contentTemplate': [{ type: core_1.ContentChild, args: [panelbar_content_directive_1.PanelBarContentDirective,] },],
        'titleTemplates': [{ type: core_1.ContentChildren, args: [panelbar_item_title_directive_1.PanelBarItemTitleDirective, { descendants: false },] },],
    };
    return PanelBarItemComponent;
}());
exports.PanelBarItemComponent = PanelBarItemComponent;
