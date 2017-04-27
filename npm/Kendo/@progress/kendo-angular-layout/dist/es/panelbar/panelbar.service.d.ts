import { Observable } from 'rxjs/Observable';
import { PanelBarItemComponent } from "./panelbar-item.component";
/**
 * @hidden
 */
export declare class PanelBarService {
    children$: Observable<PanelBarItemComponent>;
    parent$: Observable<boolean>;
    onSelect(event: PanelBarItemComponent): void;
    onFocus(): void;
    onBlur(): void;
    constructor();
    private childSource;
    private parentSource;
}
