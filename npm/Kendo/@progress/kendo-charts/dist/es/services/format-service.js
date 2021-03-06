import IntlService from './intl-service';
import { FORMAT_REGEX } from '../common/constants';

var FORMAT_REPLACE_REGEX = /\{(\d+)(:[^\}]+)?\}/g;

var FormatService = function FormatService(intlService) {
    this._intlService = intlService;
};

var prototypeAccessors = { intlService: {} };

prototypeAccessors.intlService.get = function () {
    return this._intlService || IntlService.implementation;
};

FormatService.prototype.auto = function auto (formatString) {
        var values = [], len = arguments.length - 1;
        while ( len-- > 0 ) values[ len ] = arguments[ len + 1 ];

    var intl = this.intlService;

    if (formatString.match(FORMAT_REGEX)) {
        return intl.format.apply(intl, [ formatString ].concat( values ));
    }

    return intl.toString(values[0], formatString);
};

FormatService.prototype.localeAuto = function localeAuto (formatString, values, locale) {
    var intl = this.intlService;
    var result;

    if (formatString.match(FORMAT_REGEX)) {
        result = formatString.replace(FORMAT_REPLACE_REGEX, function(match, index, placeholderFormat) {
            var value = values[parseInt(index, 10)];

            return intl.toString(value, placeholderFormat ? placeholderFormat.substring(1) : "", locale);
        });
    } else {
        result = intl.toString(values[0], formatString, locale);
    }

    return result;
};

Object.defineProperties( FormatService.prototype, prototypeAccessors );

export default FormatService;
//# sourceMappingURL=format-service.js.map
