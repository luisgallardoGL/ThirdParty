/**
 * The point passed to the tooltip template.
 */
export var TooltipTemplatePoint = (function () {
    /**
     * @hidden
     */
    function TooltipTemplatePoint(point, format, template) {
        this.value = point.value;
        this.category = point.category;
        this.series = point.series;
        this.dataItem = point.dataItem;
        this.percentage = point.percentage;
        this.runningTotal = point.runningTotal;
        this.total = point.total;
        this.low = point.low;
        this.high = point.high;
        this.xLow = point.xLow;
        this.xHigh = point.xHigh;
        this.yLow = point.yLow;
        this.yHigh = point.yHigh;
        this.template = template;
        this.point = point;
        this.format = format;
    }
    Object.defineProperty(TooltipTemplatePoint.prototype, "formattedValue", {
        get: function () {
            return this.format ? this.point.formatValue(this.format) : String(this.value);
        },
        enumerable: true,
        configurable: true
    });
    return TooltipTemplatePoint;
}());
