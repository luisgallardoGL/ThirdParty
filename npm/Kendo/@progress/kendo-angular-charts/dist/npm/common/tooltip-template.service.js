"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * @hidden
 */
var TooltipTemplateService = (function () {
    function TooltipTemplateService() {
    }
    TooltipTemplateService.prototype.setTemplate = function (template) {
        this.template = template;
    };
    TooltipTemplateService.prototype.getTemplate = function (seriesIndex) {
        if (this.seriesTemplates && this.seriesTemplates[seriesIndex]) {
            return this.seriesTemplates[seriesIndex];
        }
        return this.template;
    };
    TooltipTemplateService.prototype.setSeriesTemplates = function (seriesTemplates) {
        this.seriesTemplates = seriesTemplates;
    };
    TooltipTemplateService.prototype.setSharedTemplate = function (sharedTemplate) {
        this.sharedTemplate = sharedTemplate;
    };
    TooltipTemplateService.prototype.getSharedTemplate = function () {
        return this.sharedTemplate;
    };
    return TooltipTemplateService;
}());
TooltipTemplateService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
TooltipTemplateService.ctorParameters = function () { return []; };
exports.TooltipTemplateService = TooltipTemplateService;