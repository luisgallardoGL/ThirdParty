import { DateFormatOptions, DateFormatNameOptions, NumberFormatOptions } from '@telerik/kendo-intl';
/**
 * An abstract base class that implements
 * the Internationalization service methods
 * for the current locale.
 */
export declare abstract class IntlService {
    /**
     * Formats a string with placeholders such as
     * `Total amount {0:c}`.
     */
    abstract format(format: string, ...values: any[]): string;
    /**
     * Converts an object to a string based on the specified format.
     */
    abstract toString(value: string, format: string): string;
    /**
     * Converts a Date object to a string based on the specified format.
     * If no format is provided, the default short date format is used.
     */
    abstract formatDate(value: Date, format?: String | DateFormatOptions): string;
    /**
     * Converts a string to a `Date` object based on the specified format.
     */
    abstract parseDate(value: string, format?: string | DateFormatOptions | string[] | DateFormatOptions[]): Date;
    /**
     * Converts a string to a `Number`.
     */
    abstract parseNumber(value: string, format?: string | NumberFormatOptions): number;
    /**
     * Converts a `Number` to a string based on the specified format.
     */
    abstract formatNumber(value: number, format: string | NumberFormatOptions): string;
    /**
     * Returns the day names from the current locale based on the option.
     */
    abstract dateFormatNames(options: DateFormatNameOptions): any;
    /**
     * Returns the first day index starting from Sunday.
     */
    abstract firstDay(): number;
}
