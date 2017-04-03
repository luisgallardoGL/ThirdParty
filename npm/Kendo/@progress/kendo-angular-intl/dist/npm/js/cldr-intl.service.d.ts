import { DateFormatOptions, DateFormatNameOptions, NumberFormatOptions } from '@telerik/kendo-intl';
import { IntlService } from './intl.service';
/**
 * The Internationalization service implemented by using
 * the CLDR Database via the @telerik/kendo-intl package.
 */
export declare class CldrIntlService implements IntlService {
    localeId: string;
    /**
     * Creates a new instance of the service with the ID of the specified locale.
     *
     * Note that the parts of the locale ID can be separated by either `_` (underscore)
     * or `-` (dash).
     */
    constructor(localeId: string);
    /**
     * Formats a string with placeholders such as
     * `Total amount {0:c}`.
     */
    format(format: string, ...values: any[]): string;
    /**
     * Converts an object to a string based on the specified format.
     */
    toString(value: string, format: string): string;
    /**
     * Converts a `Date` object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     */
    formatDate(value: Date, format?: String | DateFormatOptions): string;
    /**
     * Converts a string to a `Date` object based on the specified format.
     */
    parseDate(value: string, format?: string | DateFormatOptions | string[] | DateFormatOptions[]): Date;
    /**
     * Converts a string to a `Number`.
     */
    parseNumber(value: string, format?: string | NumberFormatOptions): number;
    /**
     * Converts a `Number` to a string based on the specified format.
     */
    formatNumber(value: number, format: string | NumberFormatOptions): string;
    /**
     * Returns the day names from the current locale based on the option.
     */
    dateFormatNames(options: DateFormatNameOptions): any;
    /**
     * Returns the first day index starting from Sunday.
     */
    firstDay(): number;
}
