/**
 * The time interval steps to use when `baseUnit` is set to either `"fit"` or `"auto"`.
 *
 * The axis will try to divide the active period into the smallest possible units
 * that yield `maxDateGroups` or less discrete intervals.
 */
export interface AutoBaseUnitSteps {
    /**
     * The preferred interval steps when displaying milliseconds.
     */
    milliseconds?: number[];
    /**
     * The preferred interval steps when displaying seconds.
     */
    seconds?: number[];
    /**
     * The preferred interval steps when displaying minutes.
     */
    minutes?: number[];
    /**
     * The preferred interval steps when displaying hours.
     */
    hours?: number[];
    /**
     * The preferred interval steps when displaying days.
     */
    days?: number[];
    /**
     * The preferred interval steps when displaying weeks.
     */
    weeks?: number[];
    /**
     * The preferred interval steps when displaying months.
     */
    months?: number[];
    /**
     * The preferred interval steps when displaying years.
     */
    years?: number[];
}
