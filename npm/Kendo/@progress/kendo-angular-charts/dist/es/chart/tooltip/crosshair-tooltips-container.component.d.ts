import { QueryList } from '@angular/core';
import { CrosshairTooltipComponent } from './crosshair-tooltip.component';
/**
 * @hidden
 */
export declare class CrosshairTooltipsContainerComponent {
    crossahirTooltipComponents: QueryList<CrosshairTooltipComponent>;
    tooltipKeys: Array<any>;
    private tooltipsMap;
    show(e: any): void;
    hide(): void;
    createCrosshairTooltips(options: any): void;
    protected removeTooltip(key: string): void;
    protected mapTooltips(options: any): any;
    protected axesCrosshairTooltipOptions(options: any, name: string): any;
}
