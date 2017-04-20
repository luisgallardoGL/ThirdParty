import Bar from '../bar-chart/bar';
import BarLabel from '../bar-chart/bar-label';

import { deepExtend } from '../../common';

import { TemplateService } from '../../services';


var RangeBar = (function (Bar) {
    function RangeBar () {
        Bar.apply(this, arguments);
    }

    if ( Bar ) RangeBar.__proto__ = Bar;
    RangeBar.prototype = Object.create( Bar && Bar.prototype );
    RangeBar.prototype.constructor = RangeBar;

    RangeBar.prototype.createLabel = function createLabel () {
        var labels = this.options.labels;
        var fromOptions = deepExtend({}, labels, labels.from);
        var toOptions = deepExtend({}, labels, labels.to);

        if (fromOptions.visible) {
            this.labelFrom = this._createLabel(fromOptions);
            this.append(this.labelFrom);
        }

        if (toOptions.visible) {
            this.labelTo = this._createLabel(toOptions);
            this.append(this.labelTo);
        }
    };

    RangeBar.prototype._createLabel = function _createLabel (options) {
        var labelText;

        if (options.template) {
            var labelTemplate = TemplateService.compile(options.template);
            labelText = labelTemplate({
                dataItem: this.dataItem,
                category: this.category,
                value: this.value,
                percentage: this.percentage,
                runningTotal: this.runningTotal,
                total: this.total,
                series: this.series
            });
        } else {
            labelText = this.formatValue(options.format);
        }

        return new BarLabel(labelText,
            deepExtend({
                vertical: this.options.vertical
            },
            options
        ));
    };

    RangeBar.prototype.reflow = function reflow (targetBox) {
        this.render();

        var ref = this;
        var labelFrom = ref.labelFrom;
        var labelTo = ref.labelTo;
        var value = ref.value;

        this.box = targetBox;

        if (labelFrom) {
            labelFrom.options.aboveAxis = value.from > value.to;
            labelFrom.reflow(targetBox);
        }

        if (labelTo) {
            labelTo.options.aboveAxis = value.to > value.from;
            labelTo.reflow(targetBox);
        }

        if (this.note) {
            this.note.reflow(targetBox);
        }
    };

    return RangeBar;
}(Bar));

RangeBar.prototype.defaults = deepExtend({}, RangeBar.prototype.defaults, {
    labels: {
        format: "{0} - {1}"
    },
    tooltip: {
        format: "{1}"
    }
});

export default RangeBar;
//# sourceMappingURL=range-bar.js.map
