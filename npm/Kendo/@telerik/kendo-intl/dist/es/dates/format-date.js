import dateGenericFormat from './date-generic-format';

export default function formatDate(date, format, locale) {
    if ( locale === void 0 ) locale = "en";

    return dateGenericFormat(date, format, locale, false);
}
//# sourceMappingURL=format-date.js.map
