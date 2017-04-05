"use strict";
/**
 * @hidden
 */
function hasParent(element, parent) {
    var current = element;
    while (current && current !== parent) {
        current = current.parentNode;
    }
    return current ? true : false;
}
exports.hasParent = hasParent;
