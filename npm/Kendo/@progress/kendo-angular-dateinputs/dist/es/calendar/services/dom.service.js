import { Injectable } from '@angular/core';
import { isDocumentAvailable } from '../../util';
var monthHeader = function () {
    var div = document.createElement('div');
    div.className = 'k-calendar-header';
    div.innerHTML = "\n        <span class=\"k-calendar-title\">March 2017</span>\n        <span class=\"k-calendar-today\">TODAY</span>\n    ";
    return div;
};
var monthWeekHeader = function () {
    var table = document.createElement('table');
    table.className = 'k-calendar-weekdays';
    table.innerHTML = '<thead><tr><th>MO</th></tr></thead>';
    return table;
};
var table = function () {
    var tableEl = document.createElement('table');
    tableEl.innerHTML = "\n        <tbody>\n          <tr><th>1</th></tr>\n          <tr><td>1</td></tr>\n          <tr><td>1</td></tr>\n          <tr><td>1</td></tr>\n          <tr><td>1</td></tr>\n          <tr><td>1</td></tr>\n          <tr><td>1</td></tr>\n        </tbody>\n    ";
    return tableEl;
};
var scrollable = function () {
    var scrollableElement = document.createElement('div');
    scrollableElement.className = 'k-content k-scrollable';
    return scrollableElement;
};
var monthScrollable = function () {
    var scrollableElement = scrollable();
    scrollableElement.appendChild(table());
    return scrollableElement;
};
var monthView = function () {
    var view = document.createElement('div');
    view.className = 'k-calendar-monthview';
    view.appendChild(monthHeader());
    view.appendChild(monthWeekHeader());
    view.appendChild(monthScrollable());
    return view;
};
var listItem = function () {
    var li = document.createElement('li');
    li.innerHTML = "<span>FEB</span>";
    return li;
};
var list = function () {
    var listElement = document.createElement('ul');
    listElement.appendChild(listItem());
    return listElement;
};
var navigationScrollable = function () {
    var scrollableElement = scrollable();
    scrollableElement.appendChild(list());
    return scrollableElement;
};
var navigation = function () {
    var nav = document.createElement('div');
    nav.className = 'k-calendar-navigation';
    nav.appendChild(navigationScrollable());
    return nav;
};
var calendar = function () {
    if (!isDocumentAvailable()) {
        return null;
    }
    var cal = document.createElement('div');
    cal.className = 'k-widget k-calendar k-calendar-infinite';
    cal.style.left = '-10000px';
    cal.appendChild(navigation());
    cal.appendChild(monthView());
    return cal;
};
var CALENDAR_ELEMENT = calendar();
/**
 * @hidden
 */
export var DOMService = (function () {
    function DOMService() {
    }
    DOMService.prototype.calendarHeight = function () {
        return this.computedHeight(function (el) { return el; });
    };
    DOMService.prototype.monthScrollableContentHeight = function () {
        return this.computedHeight(function (el) { return el.querySelector('.k-calendar-monthview').querySelector('.k-scrollable'); });
    };
    DOMService.prototype.monthViewHeight = function () {
        return this.computedHeight(function (el) { return el.querySelector('tbody'); });
    };
    DOMService.prototype.monthHeaderHeight = function () {
        return this.computedHeight(function (el) { return el.querySelector('tbody').children[0]; });
    };
    DOMService.prototype.navigationItemHeight = function () {
        return this.computedHeight(function (el) { return el.querySelector('li'); });
    };
    DOMService.prototype.computedHeight = function (selector) {
        if (!isDocumentAvailable()) {
            return 0;
        }
        var rootElement = document.body.appendChild(CALENDAR_ELEMENT);
        var element = selector(rootElement);
        var height = parseFloat(window.getComputedStyle(element).height) || element.offsetHeight;
        document.body.removeChild(rootElement);
        return height;
    };
    DOMService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    DOMService.ctorParameters = function () { return []; };
    return DOMService;
}());
