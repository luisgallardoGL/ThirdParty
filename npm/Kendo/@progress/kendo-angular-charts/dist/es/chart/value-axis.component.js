var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ConfigurationService } from "../common/configuration.service";
import { CollectionService } from "../common/collection.service";
import { ValueAxisComponentGenerated } from './value-axis.component.generated';
/**
 * A collection of one or more value axis configuration components.
 *
 * @example
 * ```ts
 * import { Component } from '@angular/core';
 *
 * @@Component({
 *   selector: 'my-app',
 *   template: `
 *     <kendo-chart>
 *       <kendo-chart-value-axis>
 *         <kendo-chart-value-axis-item>
 *         </kendo-chart-value-axis-item>
 *         <kendo-chart-value-axis-item name="secondAxis">
 *         </kendo-chart-value-axis-item>
 *       </kendo-chart-value-axis>
 *       <kendo-chart-series>
 *         <kendo-chart-series-item type="line" [data]="[1, 2, 3]">
 *         </kendo-chart-series-item>
 *         <kendo-chart-series-item type="line" [data]="[0.1, 0.2, 0.3]"
 *                                  axis="secondAxis">
 *         </kendo-chart-series-item>
 *       </kendo-chart-series>
 *     </kendo-chart>
 *   `
 * })
 * class AppComponent {
 * }
 *
 * ```
 */
export var ValueAxisComponent = (function (_super) {
    __extends(ValueAxisComponent, _super);
    // Place custom properties here
    function ValueAxisComponent(configurationService, collectionService) {
        _super.call(this, configurationService, collectionService);
        this.configurationService = configurationService;
        this.collectionService = collectionService;
    }
    ValueAxisComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [CollectionService],
                    selector: 'kendo-chart-value-axis',
                    template: ''
                },] },
    ];
    /** @nocollapse */
    ValueAxisComponent.ctorParameters = function () { return [
        { type: ConfigurationService, },
        { type: CollectionService, },
    ]; };
    return ValueAxisComponent;
}(ValueAxisComponentGenerated));
