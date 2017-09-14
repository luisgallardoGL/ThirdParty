import dateGenericFormat from './date-generic-format';

export default function dateFormatString(date, format, locale) {
    if ( locale === void 0 ) locale = "en";

    return dateGenericFormat(date, format, locale, true);
}
//# sourceMappingURL=date-format-string.js.map
