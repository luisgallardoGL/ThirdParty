import { TemplateService } from '../../services';

var PieChartMixin = {
    createLegendItem: function(value, point, options) {
        var legendOptions = this.options.legend || {};
        var labelsOptions = legendOptions.labels || {};
        var inactiveItems = legendOptions.inactiveItems || {};
        var inactiveItemsLabels = inactiveItems.labels || {};

        if (options && options.visibleInLegend !== false) {
            var pointVisible = options.visible !== false;
            var labelTemplate = pointVisible ? labelsOptions.template :
                (inactiveItemsLabels.template || labelsOptions.template);
            var text = options.category || "";

            if (labelTemplate) {
                text = TemplateService.compile(labelTemplate)({
                    text: text,
                    series: options.series,
                    dataItem: options.dataItem,
                    percentage: options.percentage,
                    value: value
                });
            }

            var itemLabelOptions, markerColor;
            if (pointVisible) {
                itemLabelOptions = {};
                markerColor = point.color;
            } else {
                itemLabelOptions = {
                    color: inactiveItemsLabels.color,
                    font: inactiveItemsLabels.font
                };
                markerColor = (inactiveItems.markers || {}).color;
            }

            if (text) {
                this.legendItems.push({
                    pointIndex: options.index,
                    text: text,
                    series: options.series,
                    markerColor: markerColor,
                    labels: itemLabelOptions
                });
            }
        }
    }
};

export default PieChartMixin;
//# sourceMappingURL=pie-chart-mixin.js.map
