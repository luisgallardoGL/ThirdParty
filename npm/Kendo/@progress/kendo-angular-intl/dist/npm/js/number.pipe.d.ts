import { PipeTransform } from '@angular/core';
import { IntlService } from './intl.service';
import { NumberFormatOptions } from '@telerik/kendo-intl';
/**
 * Formats a number value to a string based on the requested format.
 * This pipe uses the `IntlService`.
 * @see IntlService.
 *
 * @example <caption>Basic Usage</caption>
 * ```ng-template-no-run
 *   <ul>
 *     <li>{{decimal | kendoNumber:'c' }}</li>
 *     <li>{{stringNumber | kendoNumber:'p' }}</li>
 *     <li>{{int | kendoNumber:'##.00' }}</li>
 *  </ul>
 * ```
 */
export declare class NumberPipe implements PipeTransform {
    private intlService;
    constructor(intlService: IntlService);
    transform(value: any, format?: string | NumberFormatOptions): any;
}
