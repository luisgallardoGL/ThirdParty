"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @hidden
 */
var PreventableEvent = (function () {
    function PreventableEvent() {
        this.prevented = false;
    }
    /**
     * Prevents the default action for a specified event.
     * In this way, the source component suppresses the built-in behavior that follows the event.
     */
    PreventableEvent.prototype.preventDefault = function () {
        this.prevented = true;
    };
    /**
     * If the event is prevented by any of its subscribers, returns `true`.
     *
     * @returns `true` if the default action was prevented. Otherwise, returns `false`.
     */
    PreventableEvent.prototype.isDefaultPrevented = function () {
        return this.prevented;
    };
    return PreventableEvent;
}());
exports.PreventableEvent = PreventableEvent;
/**
 * Fires when the **Tab** is clicked.
 */
var SelectEvent = (function (_super) {
    __extends(SelectEvent, _super);
    /**
     * Constructs the event arguments for the `select` event.
     * @param index - The index of the selected tab.
     * @param title - The title of the selected tab.
     */
    function SelectEvent(index, title) {
        _super.call(this);
        this.index = index;
        this.title = title;
    }
    return SelectEvent;
}(PreventableEvent));
exports.SelectEvent = SelectEvent;
