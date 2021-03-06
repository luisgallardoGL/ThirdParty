/**
 * @hidden
 */
export declare abstract class PreventableEvent {
    /**
     * Prevents the default action for a specified event.
     * In this way, the source component suppresses the built-in behavior that follows the event.
     */
    preventDefault(): void;
    /**
     * If the event is prevented by any of its subscribers, returns `true`.
     *
     * @returns `true` if the default action was prevented. Otherwise, returns `false`.
     */
    isDefaultPrevented(): boolean;
    private prevented;
}
/**
 * Fires when the **Tab** is clicked.
 */
export declare class SelectEvent extends PreventableEvent {
    index: number;
    title: string;
    /**
     * Constructs the event arguments for the `select` event.
     * @param index - The index of the selected tab.
     * @param title - The title of the selected tab.
     */
    constructor(index: number, title: string);
}
