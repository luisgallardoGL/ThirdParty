import { NgModule } from '@angular/core';
import { KendoDraggableDirective } from './common/draggable';
import { CommonModule } from '@angular/common';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
/**
 * @hidden
 */
/**
 * @hidden
 */
export var DraggableModule = (function () {
    function DraggableModule() {
    }
    DraggableModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [KendoDraggableDirective],
                    exports: [KendoDraggableDirective],
                    imports: [CommonModule],
                    providers: [
                        { provide: IntlService, useClass: CldrIntlService }
                    ]
                },] },
    ];
    /** @nocollapse */
    DraggableModule.ctorParameters = function () { return []; };
    return DraggableModule;
}());
