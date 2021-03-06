var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ViewChild, ElementRef, HostBinding, Input } from '@angular/core';
import { SeriesTooltipTemplateDirective } from './series-tooltip-template.directive';
import { SharedTooltipTemplateDirective } from './shared-tooltip-template.directive';
import { TooltipTemplatePoint } from './tooltip-template-point';
import { BaseTooltip } from './base-tooltip';
import { hasParent } from '../../common/has-parent';
import { TooltipTemplateService } from '../../common/tooltip-template.service';
var SHARED_TOOLTIP_CLASS = 'k-chart-shared-tooltip';
// Codelyzer 2.0.0-beta2 doesn't handle inherited members
/* tslint:disable:no-access-missing-member */
/**
 * @hidden
 */
export var TooltipPopupComponent = (function (_super) {
    __extends(TooltipPopupComponent, _super);
    function TooltipPopupComponent(element, templateService) {
        _super.call(this);
        this.element = element;
        this.templateService = templateService;
        this.seriesTooltipContext = {};
        this.seriesSharedTooltipContext = {};
        this.animate = true;
    }
    Object.defineProperty(TooltipPopupComponent.prototype, "className", {
        get: function () {
            return 'k-chart-tooltip-wrapper';
        },
        enumerable: true,
        configurable: true
    });
    TooltipPopupComponent.prototype.show = function (e) {
        _super.prototype.show.call(this, e);
        this.shared = e.shared;
        this.popupClasses[SHARED_TOOLTIP_CLASS] = e.shared;
        if (!e.shared) {
            this.seriesTooltipContext = new TooltipTemplatePoint(e.point, e.format);
            this.seriesTooltipTemplateRef = this.pointTemplateRef(e.point);
        }
        else {
            this.seriesSharedTooltipTemplateRef = this.templateService.getSharedTemplate()
                || this.defaultSharedTooltipTemplate.templateRef;
            this.seriesSharedTooltipContext = this.sharedTemplateContext(e);
        }
    };
    TooltipPopupComponent.prototype.containsElement = function (element) {
        var tooltipElement = this.element.nativeElement;
        return hasParent(element, tooltipElement);
    };
    TooltipPopupComponent.prototype.sharedTemplateContext = function (e) {
        var points = e.points;
        var nameColumn = points.filter(function (point) { return typeof point.series.name !== 'undefined'; }).length > 0;
        var colorMarker = e.series.length > 1;
        var colspan = 1;
        if (nameColumn) {
            colspan++;
        }
        if (colorMarker) {
            colspan++;
        }
        return {
            category: e.category,
            categoryText: e.categoryText,
            colorMarker: colorMarker,
            colspan: colspan,
            nameColumn: nameColumn,
            points: this.wrapPoints(e.points, e.format)
        };
    };
    TooltipPopupComponent.prototype.pointTemplateRef = function (point) {
        return this.templateService.getTemplate(point.series.index) || this.defaultSeriesTooltipTemplate.templateRef;
    };
    TooltipPopupComponent.prototype.wrapPoints = function (points, format) {
        var result = [];
        for (var idx = 0; idx < points.length; idx++) {
            var point = points[idx];
            var template = this.pointTemplateRef(point);
            var pointFormat = ((point.options || {}).tooltip || {}).format || format;
            result.push(new TooltipTemplatePoint(point, pointFormat, template));
        }
        return result;
    };
    TooltipPopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kendo-chart-tooltip-popup',
                    template: "\n    <kendo-popup [offset]=\"offset\" [popupAlign]=\"align\" [collision]=\"collision\" [animate]=\"animate\" *ngIf=\"active\" >\n        <div [ngClass]=\"popupClasses\" [ngStyle]=\"style\">\n          <template [ngTemplateOutlet]=\"seriesTooltipTemplateRef\" *ngIf=\"!shared\"\n                    [ngOutletContext]=\"seriesTooltipContext\">\n          </template>\n          <template [ngTemplateOutlet]=\"seriesSharedTooltipTemplateRef\" *ngIf=\"shared\"\n                    [ngOutletContext]=\"seriesSharedTooltipContext\">\n          </template>\n        </div>\n    </kendo-popup>\n    <template kendoChartSeriesTooltipTemplate let-formattedValue=\"formattedValue\">\n        <span [innerHTML]=\"formattedValue\"></span>\n    </template>\n    <template kendoChartSharedTooltipTemplate let-points=\"points\" let-categoryText=\"categoryText\" let-colspan=\"colspan\" let-colorMarker=\"colorMarker\" let-nameColumn=\"nameColumn\" >\n        <table>\n            <tr><th [attr.colspan]='colspan'> {{ categoryText }} </th></tr>\n            <tr *ngFor=\"let point of points\">\n                <td *ngIf=\"colorMarker\"><span class='k-chart-shared-tooltip-marker' [style.background-color]='point.series.color'></span></td>\n                <td *ngIf=\"nameColumn\">\n                    <ng-container *ngIf=\"point.series.name !== undefined\">{{ point.series.name }}</ng-container>\n                    <ng-container *ngIf=\"point.series.name === undefined\">&nbsp;</ng-container>\n                </td>\n                <td>\n                  <template [ngTemplateOutlet]=\"point.template\"\n                            [ngOutletContext]=\"point\">\n                  </template>\n                </td>\n            </tr>\n        </table>\n    </template>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipPopupComponent.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: TooltipTemplateService, },
    ]; };
    TooltipPopupComponent.propDecorators = {
        'defaultSeriesTooltipTemplate': [{ type: ViewChild, args: [SeriesTooltipTemplateDirective,] },],
        'defaultSharedTooltipTemplate': [{ type: ViewChild, args: [SharedTooltipTemplateDirective,] },],
        'animate': [{ type: Input },],
        'classNames': [{ type: Input },],
        'className': [{ type: HostBinding, args: ['class',] },],
    };
    return TooltipPopupComponent;
}(BaseTooltip));
