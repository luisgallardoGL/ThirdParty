import IntlService from './intl-service';
import FormatService from './format-service';

var ChartService = function ChartService(chart, context) {
    if ( context === void 0 ) context = {};

    this._intlService = context.intlService;
    this.sender = context.sender || chart;
    this.format = new FormatService(context.intlService);
    this.chart = chart;
};

var prototypeAccessors = { intl: {} };

prototypeAccessors.intl.get = function () {
    return this._intlService || IntlService.implementation;
};

ChartService.prototype.notify = function notify (name, args) {
    this.chart.trigger(name, args);
};

Object.defineProperties( ChartService.prototype, prototypeAccessors );

export default ChartService;
//# sourceMappingURL=chart-service.js.map
