import { PipeTransform } from '@angular/core';
import { IntlService } from './intl.service';
import { DateFormatOptions } from '@telerik/kendo-intl';
/**
 * Formats a date value to a string based on the requested format.
 * This pipe uses the IntlService.
 * @see IntlService.
 *
 * @example <caption>Basic Usage</caption>
 * ```ng-template-no-run
 * <ul>
 *    <li>{{date | kendoDate }}</li>
 *    <li>{{milliseconds | kendoDate: 'M/dd/yyy' }}</li>
 *    <li>{{stringDate | kendoDate: 'G' }}</li>
 * </ul>
 * ```
 */
export declare class DatePipe implements PipeTransform {
    private intlService;
    constructor(intlService: IntlService);
    transform(value: any, format?: String | DateFormatOptions): any;
    private normalize(value);
}
