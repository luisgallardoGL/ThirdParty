
export class Chart {
    constructor(element: HTMLElement, options: any, theme: any, context: any);

    setOptions(options: any, theme?: any): void;

    resize(): void;

    hideElements(): void;

    applyOptions(options: any, theme?: any): void;

    bindCategories(): void;

    destroy(): void;
}
