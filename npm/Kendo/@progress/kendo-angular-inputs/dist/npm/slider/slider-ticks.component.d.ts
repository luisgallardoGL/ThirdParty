import { OnChanges, EventEmitter, QueryList, ElementRef } from '@angular/core';
/**
 * @hidden
 */
export declare class KendoSliderTicksComponent implements OnChanges {
    tickClick: EventEmitter<any>;
    vertical: boolean;
    ticksCount: number;
    title: string;
    step: number;
    container: ElementRef;
    tickElements: QueryList<ElementRef>;
    ticks: Array<any>;
    ngOnChanges(_: any): void;
    onClick(event: Event): void;
    tickClasses(tick: any): Object;
    private createTicks();
}
