"use strict";
/**
 * @hidden
 */
(function (NavigationAction) {
    NavigationAction[NavigationAction["Undefined"] = 0] = "Undefined";
    NavigationAction[NavigationAction["Open"] = 1] = "Open";
    NavigationAction[NavigationAction["Close"] = 2] = "Close";
    NavigationAction[NavigationAction["Enter"] = 3] = "Enter";
    NavigationAction[NavigationAction["EnterPress"] = 4] = "EnterPress";
    NavigationAction[NavigationAction["EnterUp"] = 5] = "EnterUp";
    NavigationAction[NavigationAction["Tab"] = 6] = "Tab";
    NavigationAction[NavigationAction["Esc"] = 7] = "Esc";
    NavigationAction[NavigationAction["Navigate"] = 8] = "Navigate";
})(exports.NavigationAction || (exports.NavigationAction = {}));
var NavigationAction = exports.NavigationAction;
