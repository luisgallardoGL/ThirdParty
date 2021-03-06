import { SERIES_CLICK, SERIES_HOVER } from '../constants';
import { eventElement } from '../../common';

var PointEventsMixin = {
    click: function(chart, e) {
        return chart.trigger(
            SERIES_CLICK,
            this.eventArgs(e)
        );
    },

    hover: function(chart, e) {
        return chart.trigger(
            SERIES_HOVER,
            this.eventArgs(e)
        );
    },

    eventArgs: function(e) {
        return {
            value: this.value,
            percentage: this.percentage,
            stackValue: this.stackValue,
            category: this.category,
            series: this.series,
            dataItem: this.dataItem,
            runningTotal: this.runningTotal,
            total: this.total,
            element: eventElement(e),
            originalEvent: e,
            point: this
        };
    }
};

export default PointEventsMixin;
//# sourceMappingURL=point-events-mixin.js.map
