!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.KendoDateMath=e():t.KendoDateMath=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}r(n(1)),r(n(3)),r(n(5)),r(n(2)),r(n(6)),r(n(7)),r(n(9)),r(n(8)),r(n(10)),r(n(11)),r(n(12)),r(n(13)),r(n(14)),r(n(15)),r(n(16)),r(n(4)),r(n(17)),r(n(18))},function(t,e,n){"use strict";var r=n(2);e.addDays=function(t,e){var n=new Date(t);return n.setDate(n.getDate()+e),r.adjustDST(n,t.getHours())}},function(t,e){"use strict";e.adjustDST=function(t,e){var n=new Date(t);return 0===e&&23===n.getHours()&&n.setHours(n.getHours()+2),n}},function(t,e,n){"use strict";var r=n(2),a=n(4),u=12,o=function(t,n){return t.getMonth()!==n?a.lastDayOfMonth(e.addMonths(t,-1)):t};e.addMonths=function(t,e){var n=new Date(t),a=(n.getMonth()+e)%u,i=(u+a)%u;return n.setMonth(n.getMonth()+e),o(r.adjustDST(n,t.getHours()),i)}},function(t,e,n){"use strict";var r=n(1);e.lastDayOfMonth=function(t){var e=new Date(t.getFullYear(),t.getMonth()+1,1);return r.addDays(e,-1)}},function(t,e,n){"use strict";var r=n(1);e.addWeeks=function(t,e){return r.addDays(t,7*e)}},function(t,e){"use strict";e.cloneDate=function(t){return t?new Date(t):t}},function(t,e,n){"use strict";var r=n(8),a=n(2);e.dayOfWeek=function(t,e,n){void 0===n&&(n=r.Direction.Forward);var u=new Date(t),o=(e-u.getDay()+7*n)%7;return u.setDate(u.getDate()+o),a.adjustDST(u,t.getHours())}},function(t,e){"use strict";!function(t){t[t.Forward=1]="Forward",t[t.Backward=-1]="Backward"}(e.Direction||(e.Direction={}));e.Direction},function(t,e){"use strict";!function(t){t[t.Sunday=0]="Sunday",t[t.Monday=1]="Monday",t[t.Tuesday=2]="Tuesday",t[t.Wednesday=3]="Wednesday",t[t.Thursday=4]="Thursday",t[t.Friday=5]="Friday",t[t.Saturday=6]="Saturday"}(e.Day||(e.Day={}));e.Day},function(t,e,n){"use strict";var r=n(8),a=n(7);e.nextDayOfWeek=function(t,e){return a.dayOfWeek(t,e,r.Direction.Forward)}},function(t,e,n){"use strict";var r=n(8),a=n(7);e.prevDayOfWeek=function(t,e){return a.dayOfWeek(t,e,r.Direction.Backward)}},function(t,e,n){"use strict";var r=n(2);e.getDate=function(t){var e=0;return r.adjustDST(new Date(t.getFullYear(),t.getMonth(),t.getDate(),e,0,0),e)}},function(t,e,n){"use strict";var r=n(9);e.firstDayInWeek=function(t,e){void 0===e&&(e=r.Day.Sunday);for(var n=new Date(t);n.getDay()!==e;)n.setDate(n.getDate()-1);return n}},function(t,e){"use strict";e.firstDayOfMonth=function(t){return new Date(t.getFullYear(),t.getMonth(),1)}},function(t,e){"use strict";e.isEqual=function(t,e){return!t&&!e||t&&e&&t.getTime()===e.getTime()}},function(t,e,n){"use strict";var r=n(12),a=n(15);e.isEqualDate=function(t,e){return!t&&!e||t&&e&&a.isEqual(r.getDate(t),r.getDate(e))}},function(t,e){"use strict";e.MS_PER_DAY=864e5},function(t,e,n){"use strict";var r=n(9),a=n(1),u=n(11),o=n(17),i=function(t,e){return e!==r.Day.Monday?a.addDays(u.prevDayOfWeek(t,e),4):a.addDays(t,4-(t.getDay()||7))},s=function(t,e){var n=new Date(t.getFullYear(),0,1,-6),r=i(t,e),a=r.getTime()-n.getTime(),u=Math.floor(a/o.MS_PER_DAY);return 1+Math.floor(u/7)};e.weekInYear=function(t,e){void 0===e&&(e=r.Day.Monday);var n=a.addDays(t,-7),u=a.addDays(t,7),o=s(t,e);return 0===o?s(n,e)+1:53===o&&s(u,e)>1?1:o}}])});