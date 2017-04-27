import { CellContext } from './calendar/models/cell-context.interface';
declare const range: (start: number, end: number) => number[];
declare const isInDatesArray: (date: Date, dates?: Date[]) => boolean;
declare const isInRange: (candidate: Date, min: Date, max: Date) => boolean;
declare const dateInRange: (candidate: Date, min: Date, max: Date) => Date;
declare const guid: () => string;
declare const noop: (_: any) => void;
declare const isDocumentAvailable: () => boolean;
declare const cellContextToString: (ctx: CellContext) => string;
declare const stringifyClassObject: (classes: {
    [x: string]: boolean;
}) => string;
declare const generateDates: (start: Date, count: number) => Date[];
declare const monthsDistance: (d1: Date, d2: Date) => number;
declare const shiftWeekNames: (names: string[], offset: number) => string[];
export { cellContextToString, dateInRange, generateDates, guid, isDocumentAvailable, isInDatesArray, isInRange, monthsDistance, range, noop, stringifyClassObject, shiftWeekNames };
