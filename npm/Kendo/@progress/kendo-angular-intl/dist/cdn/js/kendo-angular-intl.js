!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@angular/core")):"function"==typeof define&&define.amd?define(["@angular/core"],r):"object"==typeof exports?exports.KendoAngularIntl=r(require("@angular/core")):e.KendoAngularIntl=r(e["@angular/core"])}(this,function(e){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){for(var t in e)r.hasOwnProperty(t)||(r[t]=e[t])}n(t(1)),n(t(3)),n(t(7)),n(t(8)),n(t(9)),n(t(4))},function(e,r,t){"use strict";var n=this&&this.__decorate||function(e,r,t,n){var a,i=arguments.length,o=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(o=(i<3?a(o):i>3?a(r,t,o):a(r,t))||o);return i>3&&o&&Object.defineProperty(r,t,o),o},a=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},i=t(2),o=function(){function e(){}return e=n([i.Injectable(),a("design:paramtypes",[])],e)}();r.IntlService=o},function(r,t){r.exports=e},function(e,r,t){"use strict";var n=this&&this.__decorate||function(e,r,t,n){var a,i=arguments.length,o=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(o=(i<3?a(o):i>3?a(r,t,o):a(r,t))||o);return i>3&&o&&Object.defineProperty(r,t,o),o},a=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},i=this&&this.__param||function(e,r){return function(t,n){r(t,n,e)}},o=t(2),u=t(4),s=t(4),l=t(4),m=function(){function e(e){this.localeId=e.replace(/_/g,"-")}return e.prototype.format=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return u.format(e,r,this.localeId)},e.prototype.toString=function(e,r,t){return u.toString(e,r,t||this.localeId)},e.prototype.formatDate=function(e,r,t){return s.formatDate(e,r,t||this.localeId)},e.prototype.parseDate=function(e,r,t){return s.parseDate(e,r,t||this.localeId)},e.prototype.parseNumber=function(e,r,t){return l.parseNumber(e,t||this.localeId,r)},e.prototype.formatNumber=function(e,r,t){return l.formatNumber(e,r,t||this.localeId)},e.prototype.dateFieldName=function(e,r){return s.dateFieldName(e,r||this.localeId)},e.prototype.dateFormatNames=function(e,r){return s.dateFormatNames(r||this.localeId,e)},e.prototype.splitDateFormat=function(e,r){return s.splitDateFormat(e,r||this.localeId)},e.prototype.numberSymbols=function(e){return l.numberSymbols(e||this.localeId)},e.prototype.firstDay=function(e){return s.firstDay(e||this.localeId)},e=n([o.Injectable(),i(0,o.Inject(o.LOCALE_ID)),a("design:paramtypes",[String])],e)}();r.CldrIntlService=m},function(e,r,t){"use strict";function n(e){var r=e.message,t=o.errorSolutions[Object.keys(o.errorSolutions).filter(function(e){return 0===r.indexOf(e)})[0]];return t?r+" "+t:r}function a(e){return function(){for(var r=[],t=0;t<arguments.length;t++)r[t-0]=arguments[t];try{return e.apply(null,r)}catch(e){throw e.message=n(e),e}}}var i=t(5),o=t(6);r.dateFormatNames=a(i.dateFormatNames),r.dateFieldName=a(i.dateFieldName),r.firstDay=a(i.firstDay),r.format=a(i.format),r.formatDate=a(i.formatDate),r.formatNumber=a(i.formatNumber),r.load=a(i.load),r.numberSymbols=a(i.numberSymbols),r.parseDate=a(i.parseDate),r.parseNumber=a(i.parseNumber),r.splitDateFormat=a(i.splitDateFormat),r.toString=a(i.toString)},function(e,r){"use strict";function t(e,r){var t=e.split("-"),n=t[0],a=t[1],i=t[2];return er[e]||r.indexOf(i)!==-1&&er[n+"-"+i]||r.indexOf(a)!==-1&&er[n+"-"+a]||er[n]}function n(e,r){for(var t=er.supplemental.likelySubtags,n=0;n<r.length;n++){var a=t[e+"-"+r[n]];if(a)return a}if(t[e])return t[e]}function a(e){var r;return r="string"==typeof e?i(e):e}function i(e){if(er[e])return er[e];var r=er.supplemental.likelySubtags;if(r){var a=e.split("-"),i=a[0],o=a.slice(1),u=n(i,o),s=u?t(u,o):null;if(s)return s}throw Ke.NoLocale.error(e)}function o(e){var r=e.split("-"),t=r.length;if(t>1){var n=r[t-1];return n.toUpperCase()}}function u(e){if(e.territory)return e.territory;var r,t=er.supplemental.likelySubtags,n=e.name;return r=e.identity&&e.identity.territory?e.identity.territory:o(t&&t[n]?t[n]:n),e.territory=r,r}function s(e,r){var t=a(e),n=t.numbers.currencies;if(!n)throw tr.error();var i=n[r];if(!i)throw nr.error();return i}function l(e,r){return r.length-e.length}function m(e){for(var r,t,n,a,i=0;i<e.length;i++){var o=e[i],u=Object.keys(o)[0],s=o[u];if(u!==lr&&"false"!==s._tender&&s._from)if(s._to){if(!n){var l=rr(s._from),m=rr(s._to);(!t||t.to<m||t.from<l)&&(r=u,t={from:l,to:m})}}else{var c=rr(s._from);(!a||a<c)&&(n=u,a=c)}}return n||r}function c(e,r){var t=s(e,r);if(!t.displays){var n=[r];for(var a in t)n.push(t[a]);n.sort(l),t.displays=n}return t.displays}function d(e,r){var t=r.value,n=r.currency,a=r.currencyDisplay;if(void 0===a&&(a=sr),"code"===a)return n;var i,o=s(e,n);return i=a===sr?o["symbol-alt-narrow"]||o[sr]:void 0===typeof t||1!==t?o["displayName-count-other"]:o["displayName-count-one"]}function f(e){var r=ur,t=ur,n=((er.supplemental.currencyData||{}).fractions||{})[e];return n&&n._digits&&(t=r=parseInt(n._digits,10)),{minimumFractionDigits:r,maximumFractionDigits:t}}function y(e){var r=er.supplemental.currencyData;if(!r)throw ar.error();var t=r.region[e];if(!t)throw ir.error(e);var n=m(t);return n}function p(e,r){var t=a(e),n=t.numbers;if(!n.localeCurrency){var i=y(u(t));if(!i&&r)throw or.error(t.name);n.localeCurrency=i}return n.localeCurrency}function M(e){return pr.lastIndex=0,e.replace(Mr,"$").replace(pr,"n").split(";")}function v(e){pr.lastIndex=0;var r=pr.exec(e.split(fr)[0])[0].split(yr),t=r[0],n=t.split(dr).slice(1).map(function(e){return e.length}).reverse();return n}function h(e,r){for(var t in r)t.startsWith("unitPattern")&&(e[t]=r[t].replace("{0}","n").replace("{1}","$"))}function g(e,r){var t=er[e],n=t.numbers=t.numbers||{};n.symbols=n.symbols||{};for(var a in r)if(a===cr)Object.assign(n.symbols,r[a]);else if(a.includes(mr)){var i=a.substr(0,a.indexOf(mr)),o=r[a].standard;n[i]={patterns:M(o)},"currency"===i?(n[i].groupSize=v((r["decimal"+mr]||r[a]).standard),h(n[i],r[a])):n[i].groupSize=v(o)}else if("currencies"===a){n.currencies=r[a];var s=u(t);s&&er.supplemental.currencyData&&(n.localeCurrency=y(s))}}function b(e){for(var r=[],t=Object.getOwnPropertyNames(e),n=0;n<t.length;n++){var a=e[t[n]];r.push(a)}return r}function S(e,r){var t={};for(var n in e){var a=t[n]={};for(var i in e[n]){var o=e[n][i];a[i]=r?o:b(o)}}return t}function F(e){var r={},t=r.format={},n={eraAbbr:"abbreviated",eraNames:"wide",eraNarrow:"narrow"};for(var a in e){var i=n[a];t[i]=e[a]}return r}function w(e,r){var t=er[e].calendar;t.days=S(r.days),t.months=S(r.months),t.quarters=S(r.quarters),t.dayPeriods=S(r.dayPeriods,!0),t.eras=F(r.eras)}function H(e,r){var t=er[e].calendar,n={};for(var a in r){var i=a.split("-"),o=i[0],u=i[1];void 0===u&&(u="wide");var s=n[o]||{},l=r[a].displayName;l&&(s[u]=l,n[o]=s)}t.dateFields=n}function D(e,r){for(var t=[],n=0;n<e.length;n++){for(var a=e[n],i=r,o=0;o<a.length;o++)i=i[a[o]];t.push(i)}return t.join(" ")}function x(e,r){var t=er[e].calendar,n=t.patterns={};for(var a in hr)n[a]=D(hr[a],r);for(var i in vr)n[i]=vr[i];t.dateTimeFormats=r.dateTimeFormats,t.timeFormats=r.timeFormats,t.dateFormats=r.dateFormats}function N(e,r){var t=er[e].calendar=er[e].calendar||{};for(var n in r)"timeZoneNames"===n?(t.gmtFormat=r[n].gmtFormat,t.gmtZeroFormat=r[n].gmtZeroFormat):"calendars"===n&&r[n].gregorian?(x(e,r[n].gregorian),w(e,r[n].gregorian)):"fields"===n&&H(e,r.fields)}function E(e,r){for(var t in r)"numbers"===t?g(e,r[t]):"dates"===t&&N(e,r[t])}function I(){for(var e=arguments,r=arguments.length,t=0;t<r;t++){var n=e[t];if(n.main){var a=Object.keys(n.main)[0],i=n.main[a],o=er[a]=er[a]||{};o.name=o.name||a,o.identity=o.identity||i.identity,u(o),E(a,i)}else n.supplemental&&(n.supplemental.weekData?er.supplemental.weekData={firstDay:n.supplemental.weekData.firstDay}:Object.assign(er.supplemental,n.supplemental))}}function O(e){for(var r=[],t=0;t<e.length;t++)r.push(e[t].toLowerCase());return r}function T(e){var r={};for(var t in e)r[t]=e[t].toLowerCase();return r}function k(e){var r=Array.isArray(e)?O(e):T(e);return r}function A(e,r){var t=r.type,n=r.nameType,i=r.standAlone,o=r.lower,u=a(e),s=i?"stand-alone":"format",l=(o?"lower-":"")+n,m=u.calendar[t][s],c=m[l];return!c&&o&&(c=m[l]=k(m[n])),c}function C(e){var r=er.supplemental.weekData;if(!r)throw br.error();var t=a(e),n=r.firstDay[u(t)];if(!n)throw Sr.error();return Fr.indexOf(n)}function z(e){var r=a(e);return r.numbers.symbols}function P(e,r){void 0===r&&(r={}),r.currency||(r.currency=p(e,!0));var t=d(e,r);return t}function j(e,r,t,n,a){var i=a.numbers.symbols,o=e.indexOf(i.decimal),u=n.groupSize.slice(),s=u.shift(),l=o!==-1?o:t+1,m=e.substring(r,l),c=e,d=m.length;if(d>=s){for(var f=d,y=[];f>-1;){var p=m.substring(f-s,f);p&&y.push(p),f-=s;var M=u.shift();if(s=void 0!==M?M:s,0===s){y.push(m.substring(0,f));break}}m=y.reverse().join(i.group),c=e.substring(0,r)+m+e.substring(l)}return c}function _(e,r,t){void 0===r&&(r=2),void 0===t&&(t=!1);var n=r-String(e).length,a=e;if(n>0){var i=new Array(n+1).join("0");a=t?e+i:i+e}return a}function L(e,r){var t=e,n=r||0;return t=t.toString().split("e"),t=Math.round(Number(t[0]+"e"+(t[1]?Number(t[1])+n:n))),t=t.toString().split("e"),t=Number(t[0]+"e"+(t[1]?Number(t[1])-n:-n)),t.toFixed(n)}function R(e){var r,t=e.minimumFractionDigits,n=e.maximumFractionDigits,a=e.style,i=a===Nr;return i&&(r=f(e.currency)),void 0===t&&(t=i?r.minimumFractionDigits:0),void 0===n&&(n=a===Er?Math.max(t,Hr):i?Math.max(t,r.maximumFractionDigits):Math.max(t,wr)),{minimumFractionDigits:t,maximumFractionDigits:n}}function G(e,r,t){for(var n=Ir,a=0,i=r.length;a<i;a++){var o=r.charAt(a);n+=o===xr?e:"$"===o||"%"===o?t:o}return n}function q(e,r){var t=e.numbers.currency,n=1!==r?t["unitPattern-count-other"]:t["unitPattern-count-one"];return r<0&&(n=n.replace("n","-n")),n}function Q(e,r,t){var n=r.style;if("scientific"===n)return void 0!==r.minimumFractionDigits?e.toExponential(r.minimumFractionDigits):e.toExponential();var a,i=t.numbers.symbols,o=e;n===Nr&&(r.value=o,a=P(t,r)),n===Er&&(o*=100,a=i.percentSign);var u=R(r),s=u.minimumFractionDigits,l=u.maximumFractionDigits;o=L(o,l);var m=o<0,c=o.split("."),d=c[0],f=_(c[1]?c[1].replace(Dr,Ir):Ir,s,!0);m&&(d=d.substring(1)),r.minimumIntegerDigits&&(d=_(d,r.minimumIntegerDigits));var y=r.useGrouping!==!1?j(d,0,d.length,r,t):d;f&&(y+=i.decimal+f);var p;if(n===Nr&&"name"===r.currencyDisplay)p=q(t,e);else{var M=r.patterns;p=m?M[1]||"-"+M[0]:M[0]}if(p===xr&&!m)return y;var v=G(y,p,a);return v}function X(e){var r=e.format;if(r.indexOf("'")>-1||r.indexOf('"')>-1||r.indexOf("\\")>-1){var t=e.literals=[];e.format=r.replace(Rr,function(e){var r=e.charAt(0).replace("\\",""),n=e.slice(1).replace(r,"");return t.push(n),kr})}}function Z(e){var r=e.number,t=e.format,n=t.indexOf(zr);if(n!==-1){var a=t.lastIndexOf(_r)-n,i=t.lastIndexOf(jr)-n,o=a>-1,u=i>-1,s=r.toString().split("e");s=s[1]?L(r,Math.abs(s[1])):s[0],s=s.split(zr)[1]||Lr;var l=s.length;o||u?o&&a>i?l=a:i>a&&(u&&l>i?l=i:o&&l<a&&(l=a)):(e.format=t.substring(0,n)+t.substring(n+1),n=-1,l=0),l>-1&&(r=L(r,l))}else r=L(r);e.negative&&r*-1>=0&&(e.negative=!1),e.number=r,e.decimalIndex=n}function J(e){return e.indexOf(jr)===-1&&e.indexOf(_r)===-1}function U(e){var r=e.number,t=e.format;if(t=t.split(";"),e.negative&&t[1])t=t[1],e.hasNegativeFormat=!0;else if(0===r){var n=t[2];t=n||t[0],n&&J(n)&&(e.constant=n)}else t=t[0];e.format=t}function W(e,r){var t=e.format;t.indexOf(Tr)!==-1&&(e.style=Cr,e.symbol=r.numbers.symbols.percentSign,e.number*=100),t.indexOf(Or)!==-1&&(e.style=Ar,e.symbol=P(r))}function $(e){e.hasGroup=e.format.indexOf(Pr)>-1,e.hasGroup&&(e.format=e.format.replace(Gr,Lr))}function B(e,r,t){var n;return n=e===-1&&r!==-1?r:e!==-1&&r===-1?e:t?Math.min(e,r):Math.max(e,r)}function Y(e){var r=e.format,t=r.indexOf(jr),n=r.indexOf(_r),a=B(t,n,!0);t=r.lastIndexOf(jr),n=r.lastIndexOf(_r);var i=B(t,n);a===r.length&&(i=a),e.start=a,e.end=i,e.lastZeroIndex=n}function V(e,r,t){var n=e;if(r===Ar||r===Cr){n=Lr;for(var a=0,i=e.length;a<i;a++){var o=e.charAt(a);n+=o===Or||o===Tr?t:o}}return n}function K(e,r){var t=e;if(r)for(var n=r.length,a=0;a<n;a++)t=t.replace(kr,r[a]);return t}function ee(e,r){var t=e.start,n=e.end,a=e.negative,i=e.format,o=e.decimalIndex,u=e.lastZeroIndex,s=e.hasNegativeFormat,l=e.hasGroup,m=e.number,c=m.toString().split(zr),d=i.length,f=c[0],y=c[1]||Lr,p=f.length,M=Lr;m=i.substring(0,t),a&&!s&&(m+="-");for(var v=t;v<d;v++){var h=i.charAt(v);if(o===-1){if(n-v<p){m+=f;break}}else if(u!==-1&&u<v&&(M=Lr),o-v<=p&&o-v>-1&&(m+=f,v=o),o===v){m+=(y?r.numbers.symbols.decimal:Lr)+y,v+=n-o+1;continue}h===_r?(m+=h,M=h):h===jr&&(m+=M)}return l&&(m=j(m,t+(a?1:0),Math.max(n,p+t),r.numbers.decimal,r)),n>=t&&(m+=i.substring(n+1)),m}function re(e,r){var t=e.number;return e.start!==-1&&(t=ee(e,r),t=V(t,e.style,e.symbol),t=K(t,e.literals)),t}function te(e,r,t){var n={negative:e<0,number:Math.abs(e),format:r};return U(n),n.constant?n.constant:(X(n),W(n,t),$(n),Z(n),Y(n),re(n,t))}function ne(e){var r=qr.exec(e);if(r){var t={style:"decimal"},n=r[1].toLowerCase();return"c"===n&&(t.style="currency"),"p"===n&&(t.style="percent"),"e"===n&&(t.style="scientific"),r[2]&&(t.minimumFractionDigits=t.maximumFractionDigits=parseInt(r[2],10)),t}}function ae(e){var r;return r="string"==typeof e?ne(e):e}function ie(e,r,t){if(void 0===r&&(r="n"),void 0===t&&(t="en"),void 0===e)return"";if(!isFinite(e))return e;var n,a=i(t),o=ae(r);if(o){var u=(o||{}).style||"decimal";n=Q(e,Object.assign({},a.numbers[u],o),a)}else n=te(e,r,a);return n}function oe(e,r,t){var n,a="currency"===t.style,i=e,o=t.currency||p(r,a);if(o){for(var u=c(r,o),s=0;s<u.length;s++){var l=u[s];if(i.includes(l)){i=i.replace(l,""),a=!0;break}}if(a){var m=r.numbers.currency.patterns;if(m.length>1){var d=(m[1]||"").replace("$","").split("n");i.indexOf(d[0])>-1&&i.indexOf(d[1])>-1&&(i=i.replace(d[0],"").replace(d[1],""),n=!0)}}}return{number:i,negative:n}}function ue(e,r,t){if(void 0===r&&(r="en"),void 0===t&&(t={}),!e&&0!==e)return null;if("number"==typeof e)return e;var n,a=i(r),o=a.numbers.symbols,u=e.toString();if(Qr.test(u))return u=parseFloat(u.replace(o.decimal,".")),isNaN(u)?null:u;var s=u.indexOf("-");if(s>0)return null;var l=s>-1,m=oe(u,a,t),c=m.negative,d=m.number;return u=d,l=void 0!==c?c:l,("percent"===t.style||u.indexOf(o.percentSign)>-1)&&(u=u.replace(o.percentSign,""),n=!0),u=u.replace("-","").replace(Xr," ").split(o.group.replace(Xr," ")).join("").replace(o.decimal,"."),u=parseFloat(u),isNaN(u)?u=null:l&&(u*=-1),u&&n&&(u/=100),u}function se(e){var r=arguments;return e.replace(Zr,function(e,t){var n=r[parseInt(t,10)+1];return n})}function le(e){return e.hour12?"h":"H"}function me(e){return nt[e]||(nt[e]=new RegExp(e+"+")),nt[e]}function ce(e){for(var r=[],t=e.charAt(0),n=t,a=1;a<e.length;a++){var i=e.charAt(a);i===n?t+=i:(r.push(t),t=n=i)}return r.push(t),r}function de(e,r){var t,n,a=e.length,i=-Number.MAX_VALUE;for(var o in r){for(var u=[],s=o.replace("v","z"),l=0,m=0;m<a;m++){var c=e[m],d=me(c[0]),f=(d.exec(s)||[])[0];if(f){if(s=s.replace(f,""),f.length!==c.length){var y=Math.max(Math.min(Wr[f.length]-Wr[c.length],2),-2);l-=Kr[y]}}else l-=Jr;if(u.push(f),l<i)break}s.length&&(l-=ce(s).length*Ur),l>i&&(i=l,t=u,n=r[o])}n=n.replace("v","z");for(var p=0;p<a;p++)t[p]&&t[p]!==e[p]&&(n=n.replace(me(t[p][0]),e[p]));return n}function fe(e,r,t){at[t]||(at[t]={}),at[t][e]=r}function ye(e,r){var t=r.calendar.dateTimeFormats.availableFormats;if(t[e])return t[e];if(at[r.name]&&at[r.name][e])return at[r.name][e];var n,a=e.search(rt);if(a>0){var i=e.substr(0,a),o=e.substr(a);n=se(r.calendar.dateTimeFormats.short,t[o]||de(ce(o),t),t[i]||de(ce(i),t))}else n=de(ce(e),t);return fe(e,n,r.name),n}function pe(e){for(var r=[],t=0;t<tt.length;t++){var n=tt[t],a=n.key,i=e[a];if(i){var o=n.specifier||n.getSpecifier(e);r.push(o.repeat(et[i]))}}return r.join("")}function Me(e,r){var t,n=r.calendar;if("string"==typeof e)t=n.patterns[e]?n.patterns[e]:e;else if(e){if(e.pattern)return e.pattern;var a=e.skeleton;a||(e.datetime?t=se(n.dateTimeFormats[e.datetime],n.timeFormats[e.datetime],n.dateFormats[e.datetime]):e.date?t=n.dateFormats[e.date]:e.time?t=n.timeFormats[e.time]:a=pe(e)),a&&(t=ye(a,r))}return t||(t=n.patterns.d),t}function ve(e){var r;return e<=3?r="abbreviated":4===e?r="wide":5===e?r="narrow":6===e&&(r="short"),r}function he(e,r,t,n,a){return A(e,{type:r,nameType:ve(t),standAlone:n,lower:a})}function ge(e){return it.call(e)===ot}function be(e,r,t){var n,a=C(t);return n=e<a?7-a+e:e-a,n+1}function Se(e,r,t,n){return r<=2?_(e+1,r):he(t,"months",r,n)[e]}function Fe(e,r,t,n){var a=Math.floor(e.getMonth()/3);return r<3?a+1:he(t,"quarters",r,n)[a]}function we(e,r,t){var n=t.shortHours,a=t.optionalMinutes,i=t.separator,o=t.localizedName,u=t.zZeroOffset,s=e.getTimezoneOffset()/60;if(0===s&&u)return"Z";var l=s<=0?"+":"-",m=Math.abs(s).toString().split("."),c=m[1]||0,d=l+(n?m[0]:_(m[0],2));if(!c&&a||(d+=(i?":":"")+_(c,2)),o){var f=0===s?r.calendar.gmtZeroFormat:r.calendar.gmtFormat;d=se(f,d)}return d}function He(e,r,t,n){var a;return a=r<3?be(e.getDay(),r,t):he(t,"days",r,n)[e.getDay()]}function De(e,r,t){if(void 0===t&&(t="en"),!ge(e))return e;var n=i(t),a=Me(r,n);return a.replace(ft,function(r){var t,a=r.length;return t=r.includes("'")||r.includes('"')?r.slice(1,a-1):yt[r[0]](e,a,n)})}function xe(e,r,t){var n=e.getTimezoneOffset(),a=new Date(e.getTime()+6e4*(r-t)),i=a.getTimezoneOffset();return new Date(a.getTime()+6e4*(i-n))}function Ne(e,r){r||23!==e.getHours()||e.setHours(e.getHours()+2)}function Ee(e,r,t){return!(e>=r&&e<=t)}function Ie(e,r){for(var t=r.format,n=r.idx,a=0;t[n]===e;)a++,n++;return a>0&&(n-=1),r.idx=n,a}function Oe(e,r){var t=e?ht[e]||new RegExp("^\\d{1,"+e+"}"):gt,n=r.value.substr(r.valueIdx,e).match(t);return n?(n=n[0],r.valueIdx+=n.length,parseInt(n,10)):null}function Te(e,r,t){for(var n,a,i,o=0,u=e.length,s=0,l=0;o<u;o++)n=e[o],a=n.length,i=r.value.substr(r.valueIdx,a),t&&(i=i.toLowerCase()),i===n&&a>s&&(s=a,l=o);return s?(r.valueIdx+=s,l+1):null}function ke(e){var r=!1;return e.value.charAt(e.valueIdx)===e.format[e.idx]&&(e.valueIdx++,r=!0),r}function Ae(e){var r=e.gmtFormat,t=e.gmtZeroFormat;if(!r)throw Ke.NoGMTInfo.error();return[r.replace(bt,"").toLowerCase(),t.replace(bt,"").toLowerCase()]}function Ce(e,r,t){var n=t.shortHours,a=t.noSeparator,i=t.optionalMinutes,o=t.localizedName,u=t.zLiteral;if(e.UTC=!0,u&&"Z"===e.value.charAt(e.valueIdx))return e.valueIdx++,!1;if(o&&!Te(Ae(r.calendar),e,!0))return!0;var s=pt.exec(e.value.substr(e.valueIdx,6));if(!s)return!o;var l=s[1],m=s[3],c=parseInt(l,10),d=s[2],f=parseInt(m,10);return!!(isNaN(c)||!n&&3!==l.length||!i&&isNaN(f)||a&&d)||(isNaN(f)&&(f=null),!!(Ee(c,-12,13)||f&&Ee(f,0,59))||(e.valueIdx+=s[0].length,e.hoursOffset=c,void(e.minutesOffset=f)))}function ze(e,r,t){var n=Ie(e,r),a=he(t,"months",n,"L"===e,!0),i=n<3?Oe(2,r):Te(a,r,!0);return!(null!==i&&!Ee(i,1,12))||void(r.month=i-1)}function Pe(e,r,t){var n=Ie(e,r),a=he(t,"days",n,"c"===e,!0),i=n<3?Oe(1,r):Te(a,r,!0);if(!i&&0!==i||Ee(i,1,7))return!0}function je(e){var r,t=e.year,n=e.month,a=e.day,i=e.hours,o=e.minutes,u=e.seconds,s=e.milliseconds,l=e.pmHour,m=e.UTC,c=e.hoursOffset,d=e.minutesOffset,f=null!==i||null!==o||u||null,y=new Date;return null===t&&null===n&&null===a&&f?(t=y.getFullYear(),n=y.getMonth(),a=y.getDate()):(null===t&&(t=y.getFullYear()),null===a&&(a=1)),l&&i<12&&(i+=12),m?(c&&(i+=-c),d&&(o+=-d*(c<0?-1:1)),r=new Date(Date.UTC(t,n,a,i,o,u,s))):(r=new Date(t,n,a,i,o,u,s),Ne(r,i)),t<100&&r.setFullYear(t),r.getDate()!==a&&void 0===m?null:r}function _e(e,r,t){for(var n=Me(r,t).split(""),a={format:n,idx:0,value:e,valueIdx:0,year:null,month:null,day:null,hours:null,minutes:null,seconds:null,milliseconds:null},i=n.length,o=!1;a.idx<i;a.idx++){var u=n[a.idx];if(o)"'"===u&&(o=!1),ke(a);else if(Ht[u]){var s=Ht[u](a,t);if(s)return null}else if("'"===u)o=!0,ke(a);else if(!ke(a))return null}return a.valueIdx<e.length?null:je(a)||null}function Le(e){var r="-"===e.substr(0,1)?-1:1,t=e.substring(1);return t=60*parseInt(t.substr(0,2),10)+parseInt(t.substring(2),10),r*t}function Re(e){if(e&&0===e.indexOf("/D")){var r=Mt.exec(e);if(r){r=r[1];var t=vt.exec(r.substring(1));return r=new Date(parseInt(r,10)),t&&(t=Le(t[0]),r=xe(r,r.getTimezoneOffset(),0),r=xe(r,0,-1*t)),r}}}function Ge(e){for(var r=[],t=e.patterns,n=Ft.length,a=0;a<n;a++)r.push(t[Ft[a]]);return r.concat(St)}function qe(e,r,t){if(void 0===t&&(t="en"),!e)return null;if(ge(e))return e;var n=String(e).trim(),a=Re(n);if(a)return a;var o=i(t),u=r||Ge(o.calendar);u=Array.isArray(u)?u:[u];for(var s=u.length,l=0;l<s;l++)if(a=_e(n,u[l],o))return a;return a}function Qe(e,r){var t=e[e.length-1];t&&t.type===xt?t.pattern+=r:e.push({type:xt,pattern:r})}function Xe(e,r){void 0===r&&(r="en");for(var t=i(r),n=Me(e,t),a=[],o=ft.lastIndex=0,u=ft.exec(n);u;){var s=u[0];if(o<u.index&&Qe(a,n.substring(o,u.index)),s.startsWith('"')||s.startsWith("'"))Qe(a,s);else{var l=s[0],m=dt[l],c={type:m,pattern:s},d=Dt[m];if(d){var f=typeof d.minLength===Nt?d.minLength:d.minLength[l],y=s.length;y>=f&&(c.names={type:d.type,nameType:ve(y),standAlone:d.standAlone===l})}a.push(c)}o=ft.lastIndex,u=ft.exec(n)}return o<n.length&&Qe(a,n.substring(o)),a}function Ze(e,r,t){if(r){if(ge(e))return De(e,r,t);if("number"==typeof e)return ie(e,r,t)}return void 0!==e?e:""}function Je(e,r,t){return e.replace(Et,function(e,n,a){var i=r[parseInt(n,10)];return Ze(i,a?a.substring(1):"",t)})}Object.defineProperty(r,"__esModule",{value:!0});var Ue={en:{name:"en",identity:{version:{_number:"$Revision: 12418 $",_cldrVersion:"29"},language:"en"},territory:"US",numbers:{symbols:{decimal:".",group:",",list:";",percentSign:"%",plusSign:"+",minusSign:"-",exponential:"E",superscriptingExponent:"×",perMille:"‰",infinity:"∞",nan:"NaN",timeSeparator:":"},decimal:{patterns:["n"],groupSize:[3]},scientific:{patterns:["nEn"],groupSize:[]},percent:{patterns:["n%"],groupSize:[3]},currency:{patterns:["$n"],groupSize:[3],"unitPattern-count-one":"n $","unitPattern-count-other":"n $"},currencies:{BGN:{displayName:"Bulgarian Lev","displayName-count-one":"Bulgarian lev","displayName-count-other":"Bulgarian leva",symbol:"BGN"},EUR:{displayName:"Euro","displayName-count-one":"euro","displayName-count-other":"euros",symbol:"€","symbol-alt-narrow":"€"},USD:{displayName:"US Dollar","displayName-count-one":"US dollar","displayName-count-other":"US dollars",symbol:"$","symbol-alt-narrow":"$"}},localeCurrency:"USD"},calendar:{gmtFormat:"GMT{0}",gmtZeroFormat:"GMT",patterns:{d:"M/d/y",D:"EEEE, MMMM d, y",m:"MMM d",M:"MMMM d",y:"MMM y",Y:"MMMM y",F:"EEEE, MMMM d, y h:mm:ss a",g:"M/d/y h:mm a",G:"M/d/y h:mm:ss a",t:"h:mm a",T:"h:mm:ss a",s:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",u:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'"},dateTimeFormats:{full:"{1} 'at' {0}",long:"{1} 'at' {0}",medium:"{1}, {0}",short:"{1}, {0}",availableFormats:{d:"d",E:"ccc",Ed:"d E",Ehm:"E h:mm a",EHm:"E HH:mm",Ehms:"E h:mm:ss a",EHms:"E HH:mm:ss",Gy:"y G",GyMMM:"MMM y G",GyMMMd:"MMM d, y G",GyMMMEd:"E, MMM d, y G",h:"h a",H:"HH",hm:"h:mm a",Hm:"HH:mm",hms:"h:mm:ss a",Hms:"HH:mm:ss",hmsv:"h:mm:ss a v",Hmsv:"HH:mm:ss v",hmv:"h:mm a v",Hmv:"HH:mm v",M:"L",Md:"M/d",MEd:"E, M/d",MMM:"LLL",MMMd:"MMM d",MMMEd:"E, MMM d",MMMMd:"MMMM d",MMMMW:"'week' W 'of' MMM",ms:"mm:ss",y:"y",yM:"M/y",yMd:"M/d/y",yMEd:"E, M/d/y",yMMM:"MMM y",yMMMd:"MMM d, y",yMMMEd:"E, MMM d, y",yMMMM:"MMMM y",yQQQ:"QQQ y",yQQQQ:"QQQQ y",yw:"'week' w 'of' y"},appendItems:{Day:"{0} ({2}: {1})","Day-Of-Week":"{0} {1}",Era:"{0} {1}",Hour:"{0} ({2}: {1})",Minute:"{0} ({2}: {1})",Month:"{0} ({2}: {1})",Quarter:"{0} ({2}: {1})",Second:"{0} ({2}: {1})",Timezone:"{0} {1}",Week:"{0} ({2}: {1})",Year:"{0} {1}"},intervalFormats:{intervalFormatFallback:"{0} – {1}",d:{d:"d – d"},h:{a:"h a – h a",h:"h – h a"},H:{H:"HH – HH"},hm:{a:"h:mm a – h:mm a",h:"h:mm – h:mm a",m:"h:mm – h:mm a"},Hm:{H:"HH:mm – HH:mm",m:"HH:mm – HH:mm"},hmv:{a:"h:mm a – h:mm a v",h:"h:mm – h:mm a v",m:"h:mm – h:mm a v"},Hmv:{H:"HH:mm – HH:mm v",m:"HH:mm – HH:mm v"},hv:{a:"h a – h a v",h:"h – h a v"},Hv:{H:"HH – HH v"},M:{M:"M – M"},Md:{d:"M/d – M/d",M:"M/d – M/d"},MEd:{d:"E, M/d – E, M/d",M:"E, M/d – E, M/d"},MMM:{M:"MMM – MMM"},MMMd:{d:"MMM d – d",M:"MMM d – MMM d"},MMMEd:{d:"E, MMM d – E, MMM d",M:"E, MMM d – E, MMM d"},y:{y:"y – y"},yM:{M:"M/y – M/y",y:"M/y – M/y"},yMd:{d:"M/d/y – M/d/y",M:"M/d/y – M/d/y",y:"M/d/y – M/d/y"},yMEd:{d:"E, M/d/y – E, M/d/y",M:"E, M/d/y – E, M/d/y",y:"E, M/d/y – E, M/d/y"},yMMM:{M:"MMM – MMM y",y:"MMM y – MMM y"},yMMMd:{d:"MMM d – d, y",M:"MMM d – MMM d, y",y:"MMM d, y – MMM d, y"},yMMMEd:{d:"E, MMM d – E, MMM d, y",M:"E, MMM d – E, MMM d, y",y:"E, MMM d, y – E, MMM d, y"},yMMMM:{M:"MMMM – MMMM y",y:"MMMM y – MMMM y"}}},timeFormats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},dateFormats:{full:"EEEE, MMMM d, y",long:"MMMM d, y",medium:"MMM d, y",short:"M/d/yy"},days:{format:{abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},"stand-alone":{abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}},months:{format:{abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},"stand-alone":{abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]}},quarters:{format:{abbreviated:["Q1","Q2","Q3","Q4"],narrow:["1","2","3","4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},"stand-alone":{abbreviated:["Q1","Q2","Q3","Q4"],narrow:["1","2","3","4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]}},dayPeriods:{format:{abbreviated:{midnight:"midnight",am:"AM","am-alt-variant":"am",noon:"noon",pm:"PM","pm-alt-variant":"pm",morning1:"in the morning",afternoon1:"in the afternoon",evening1:"in the evening",night1:"at night"},narrow:{midnight:"mi",am:"a","am-alt-variant":"am",noon:"n",pm:"p","pm-alt-variant":"pm",morning1:"in the morning",afternoon1:"in the afternoon",evening1:"in the evening",night1:"at night"},wide:{midnight:"midnight",am:"AM","am-alt-variant":"am",noon:"noon",pm:"PM","pm-alt-variant":"pm",morning1:"in the morning",afternoon1:"in the afternoon",evening1:"in the evening",night1:"at night"}},"stand-alone":{abbreviated:{midnight:"midnight",am:"AM","am-alt-variant":"am",noon:"noon",pm:"PM","pm-alt-variant":"pm",morning1:"morning",afternoon1:"afternoon",evening1:"evening",night1:"night"},narrow:{midnight:"midnight",am:"AM","am-alt-variant":"am",noon:"noon",pm:"PM","pm-alt-variant":"pm",morning1:"morning",afternoon1:"afternoon",evening1:"evening",night1:"night"},wide:{midnight:"midnight",am:"AM","am-alt-variant":"am",noon:"noon",pm:"PM","pm-alt-variant":"pm",morning1:"morning",afternoon1:"afternoon",evening1:"evening",night1:"night"}}},eras:{format:{wide:{0:"Before Christ",1:"Anno Domini","0-alt-variant":"Before Common Era","1-alt-variant":"Common Era"},abbreviated:{0:"BC",1:"AD","0-alt-variant":"BCE","1-alt-variant":"CE"},narrow:{0:"B",1:"A","0-alt-variant":"BCE","1-alt-variant":"CE"}}},dateFields:{era:{wide:"era"},year:{wide:"year",short:"yr.",narrow:"yr."},quarter:{wide:"quarter",short:"qtr.",narrow:"qtr."},month:{wide:"month",short:"mo.",narrow:"mo."},week:{wide:"week",short:"wk.",narrow:"wk."},day:{wide:"day",short:"day",narrow:"day"},weekday:{wide:"day of the week"},dayperiod:{wide:"AM/PM"},hour:{wide:"hour",short:"hr.",narrow:"hr."},minute:{wide:"minute",short:"min.",narrow:"min."},second:{wide:"second",short:"sec.",narrow:"sec."},zone:{wide:"time zone"}}}},supplemental:{likelySubtags:{en:"en-Latn-US"},currencyData:{region:{US:[{USD:{_from:"1792-01-01"}}]}},weekData:{firstDay:{US:"sun"}}}},We={NoLocale:"Missing locale info for '{0}'",NoCurrency:"Cannot determine currency information. Please load the locale currencies data.",NoSupplementalCurrency:"Cannot determine currency. Please load the supplemental currencyData.",NoCurrencyRegion:"No currency data for region '{0}'",NoCurrencyDisplay:"Cannot determine currency display information. Please load the locale currencies data. The default culture does not include the all currencies data.",NoGMTInfo:"Cannot determine locale GMT format. Please load the locale timeZoneNames data.",NoWeekData:"Cannot determine locale first day of week. Please load the supplemental weekData.",NoFirstDay:"Cannot determine locale first day of week. Please load the supplemental weekData. The default culture includes only the 'en-US' first day info.",NoValidCurrency:"Cannot determine a default currency for the {0} locale. Please specify explicitly the currency with the format options."},$e=/\{(\d+)}?\}/g,Be=function(e){var r=e.name,t=e.message;if(!r||!t)throw new Error("{ name: string, message: string } object is required!");this.name=r,this.message=t};Be.prototype.formatMessage=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];var t=Ye(e),n=this.message.replace($e,function(e,r){return t[parseInt(r,10)]});return this.name+": "+n},Be.prototype.error=function(){for(var e=[],r=arguments.length;r--;)e[r]=arguments[r];return new Error(this.formatMessage(e))};var Ye=function(e){return e.reduce(function(e,r){return e.concat(r)},[])},Ve=function(e){var r=function(r,t){return r[t]=new Be({name:t,message:e[t]}),r};return Object.keys(e).reduce(r,{})},Ke=Ve(We),er=Ue,rr=function(e){var r=e.split("-"),t=parseInt(r[0],10),n=parseInt(r[1],10)-1,a=parseInt(r[2],10);return new Date(t,n,a)},tr=Ke.NoCurrency,nr=Ke.NoCurrencyDisplay,ar=Ke.NoSupplementalCurrency,ir=Ke.NoCurrencyRegion,or=Ke.NoValidCurrency,ur=2,sr="symbol",lr="XXX",mr="Formats-numberSystem-latn",cr="symbols-numberSystem-latn",dr=",",fr=";",yr=".",pr=/([ #,0. ]+)/g,Mr=/¤/g,vr={s:"yyyy'-'MM'-'dd'T'HH':'mm':'ss",u:"yyyy'-'MM'-'dd HH':'mm':'ss'Z'"},hr={d:[["dateTimeFormats","availableFormats","yMd"]],D:[["dateFormats","full"]],m:[["dateTimeFormats","availableFormats","MMMd"]],M:[["dateTimeFormats","availableFormats","MMMMd"]],y:[["dateTimeFormats","availableFormats","yMMM"]],Y:[["dateTimeFormats","availableFormats","yMMMM"]],F:[["dateFormats","full"],["timeFormats","medium"]],g:[["dateTimeFormats","availableFormats","yMd"],["timeFormats","short"]],G:[["dateTimeFormats","availableFormats","yMd"],["timeFormats","medium"]],t:[["timeFormats","short"]],T:[["timeFormats","medium"]]},gr=function(e,r){void 0===r&&(r="en");var t=i(r),n=t.calendar.dateFields||{},a=n[e.type]||{};return a[e.nameType]||a.wide},br=Ke.NoWeekData,Sr=Ke.NoFirstDay,Fr=["sun","mon","tue","wed","thu","fri","sat"],wr=3,Hr=0,Dr=/0+$/,xr="n",Nr="currency",Er="percent",Ir="",Or="$",Tr="%",kr="??",Ar="currency",Cr="percent",zr=".",Pr=",",jr="#",_r="0",Lr="",Rr=/(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,Gr=/\,/g,qr=/^(n|c|p|e)(\d*)$/i,Qr=/[eE][\-+]?[0-9]+/,Xr=/\u00A0/g,Zr=/\{(\d+)}/g,Jr=120,Ur=20,Wr=[2,1,5,3,4],$r=-2,Br=-1,Yr=1,Vr=2,Kr={};Kr[$r]=8,Kr[Br]=6,Kr[Vr]=6,Kr[Yr]=3;var et={numeric:1,"2-digit":2,short:3,long:4,narrow:5},rt=/[hHmsSzZoOvVxX]/,tt=[{key:"era",specifier:"G"},{key:"year",specifier:"y"},{key:"month",specifier:"M"
},{key:"day",specifier:"d"},{key:"weekday",specifier:"E"},{key:"hour",getSpecifier:le},{key:"minute",specifier:"m"},{key:"second",specifier:"s"},{key:"timeZoneName",specifier:"z"}],nt={},at={},it={}.toString,ot="[object Date]",ut="month",st="hour",lt="zone",mt="weekday",ct="quarter",dt={G:"era",y:"year",q:ct,Q:ct,M:ut,L:ut,d:"day",E:mt,c:mt,e:mt,h:st,H:st,m:"minute",s:"second",a:"dayperiod",x:lt,X:lt,z:lt,Z:lt},ft=/d{1,2}|E{1,6}|e{1,6}|c{3,6}|c{1}|M{1,5}|L{1,5}|y{1,4}|H{1,2}|h{1,2}|m{1,2}|a{1,5}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|x{1,5}|X{1,5}|G{1,5}|q{1,5}|Q{1,5}|"[^"]*"|'[^']*'/g,yt={};yt.d=function(e,r){return _(e.getDate(),r)},yt.E=function(e,r,t){return he(t,"days",r)[e.getDay()]},yt.M=function(e,r,t){return Se(e.getMonth(),r,t,!1)},yt.L=function(e,r,t){return Se(e.getMonth(),r,t,!0)},yt.y=function(e,r){var t=e.getFullYear();return 2===r&&(t%=100),_(t,r)},yt.h=function(e,r){var t=e.getHours()%12||12;return _(t,r)},yt.H=function(e,r){return _(e.getHours(),r)},yt.m=function(e,r){return _(e.getMinutes(),r)},yt.s=function(e,r){return _(e.getSeconds(),r)},yt.S=function(e,r){var t,n=e.getMilliseconds();return t=0!==n?String(e.getMilliseconds()/1e3).split(".")[1].substr(0,r):_("",r)},yt.a=function(e,r,t){return he(t,"dayPeriods",r)[e.getHours()<12?"am":"pm"]},yt.z=function(e,r,t){return we(e,t,{shortHours:r<4,optionalMinutes:r<4,separator:!0,localizedName:!0})},yt.Z=function(e,r,t){return we(e,t,{separator:r>3,localizedName:4===r,zZeroOffset:5===r})},yt.x=function(e,r,t){return we(e,t,{optionalMinutes:1===r,separator:3===r||5===r})},yt.X=function(e,r,t){return we(e,t,{optionalMinutes:1===r,separator:3===r||5===r,zZeroOffset:!0})},yt.G=function(e,r,t){var n=e.getFullYear()>=0?1:0;return he(t,"eras",r)[n]},yt.e=He,yt.c=function(e,r,t){return He(e,r,t,!0)},yt.q=function(e,r,t){return Fe(e,r,t,!0)},yt.Q=Fe;var pt=/([+|\-]\d{1,2})(:?)(\d{2})?/,Mt=/^\/Date\((.*?)\)\/$/,vt=/[+-]\d*/,ht={2:/^\d{1,2}/,3:/^\d{1,3}/,4:/^\d{4}/},gt=/\d+/,bt="{0}",St=["yyyy/MM/dd HH:mm:ss","yyyy/MM/dd HH:mm","yyyy/MM/dd","E MMM dd yyyy HH:mm:ss","yyyy-MM-ddTHH:mm:ss.SSSSSSSXXX","yyyy-MM-ddTHH:mm:ss.SSSXXX","yyyy-MM-ddTHH:mm:ssXXX","yyyy-MM-ddTHH:mm:ss.SSSSSSS","yyyy-MM-ddTHH:mm:ss.SSS","yyyy-MM-ddTHH:mmXXX","yyyy-MM-ddTHH:mmX","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mm","yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm","yyyy-MM-dd","HH:mm:ss","HH:mm"],Ft=["G","g","F","Y","y","M","m","D","d","y","T","t"],wt=2029,Ht={};Ht.d=function(e){Ie("d",e);var r=Oe(2,e);return!(null!==r&&!Ee(r,1,31))||void(null===e.day&&(e.day=r))},Ht.E=function(e,r){var t=Ie("E",e),n=Te(he(r,"days",t,!1,!0),e,!0);if(null===n)return!0},Ht.M=function(e,r){return ze("M",e,r)},Ht.L=function(e,r){return ze("L",e,r)},Ht.y=function(e){var r=Ie("y",e),t=Oe(1===r?void 0:r,e);if(null===t)return!0;if(2===r){var n=(new Date).getFullYear();t=n-n%100+t,t>wt&&(t-=100)}e.year=t},Ht.h=function(e){Ie("h",e);var r=Oe(2,e);return 12===r&&(r=0),!(null!==r&&!Ee(r,0,11))||void(e.hours=r)},Ht.a=function(e,r){var t=Ie("a",e),n=he(r,"dayPeriods",t,!1,!0),a=Te([n.pm],e,!0);return!a&&!Te([n.am],e,!0)||void(e.pmHour=a)},Ht.H=function(e){Ie("H",e);var r=Oe(2,e);return!(null!==r&&!Ee(r,0,23))||void(e.hours=r)},Ht.m=function(e){Ie("m",e);var r=Oe(2,e);return!(null!==r&&!Ee(r,0,59))||void(e.minutes=r)},Ht.s=function(e){Ie("s",e);var r=Oe(2,e);return!(null!==r&&!Ee(r,0,59))||void(e.seconds=r)},Ht.S=function(e){var r=Ie("S",e),t=e.value.substr(e.valueIdx,r),n=null;return isNaN(parseInt(t,10))||(n=parseFloat("0."+t,10),n=L(n,3),n*=1e3,e.valueIdx+=r),!(null!==n&&!Ee(n,0,999))||void(e.milliseconds=n)},Ht.z=function(e,r){var t=Ie("z",e),n=t<4,a=Ce(e,r,{shortHours:n,optionalMinutes:n,localizedName:!0});if(a)return a},Ht.Z=function(e,r){var t=Ie("Z",e),n=Ce(e,r,{noSeparator:t<4,zLiteral:5===t,localizedName:4===t});if(n)return n},Ht.x=function(e,r){var t=Ie("x",e),n=Ce(e,r,{noSeparator:3!==t&&5!==t,optionalMinutes:1===t});if(n)return n},Ht.X=function(e,r){var t=Ie("X",e),n=Ce(e,r,{noSeparator:3!==t&&5!==t,optionalMinutes:1===t,zLiteral:!0});if(n)return n},Ht.G=function(e,r){var t=Ie("G",e),n=he(r,"eras",t,!1,!0),a=Te([n[0],n[1]],e,!0);if(null===a)return!0},Ht.e=function(e,r){return Pe("e",e,r)},Ht.c=function(e,r){return Pe("c",e,r)};var Dt={month:{type:"months",minLength:3,standAlone:"L"},quarter:{type:"quarters",minLength:3,standAlone:"q"},weekday:{type:"days",minLength:{E:0,c:3,e:3},standAlone:"c"},dayperiod:{type:"dayPeriods",minLength:0},era:{type:"eras",minLength:0}},xt="literal",Nt="number",Et=/\{(\d+)(:[^\}]+)?\}/g;r.formatNumber=ie,r.parseNumber=ue,r.formatDate=De,r.parseDate=qe,r.splitDateFormat=Xe,r.load=I,r.dateFieldName=gr,r.dateFormatNames=A,r.cldr=er,r.localeInfo=i,r.currencyDisplays=c,r.currencyDisplay=d,r.currencyFractionOptions=f,r.territoryCurrencyCode=y,r.localeCurrency=p,r.firstDay=C,r.numberSymbols=z,r.toString=Ze,r.format=Je,r.errors=Ke,r.IntlError=Be,r.toIntlErrors=Ve},function(e,r){"use strict";var t="http://www.telerik.com/kendo-angular-ui/components/internationalization/troubleshooting/";r.errorSolutions={NoCurrencyDisplay:"Solution: "+t+"#toc-insufficient-default-locale",NoLocale:"Solution: "+t+"#toc-missing-cldr-info"}},function(e,r,t){"use strict";var n=this&&this.__decorate||function(e,r,t,n){var a,i=arguments.length,o=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(o=(i<3?a(o):i>3?a(r,t,o):a(r,t))||o);return i>3&&o&&Object.defineProperty(r,t,o),o},a=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},i=t(2),o=t(1),u=function(e){return!isNaN(e-parseFloat(e))},s=function(){function e(e){this.intlService=e}return e.prototype.transform=function(e,r){return void 0===r&&(r=""),e=this.normalize(e),e?this.intlService.formatDate(e,r):e},e.prototype.normalize=function(e){return e&&"string"==typeof e?e=this.intlService.parseDate(e):e&&u(e)&&(e=new Date(parseFloat(e))),e},e=n([i.Pipe({name:"kendoDate"}),a("design:paramtypes",[o.IntlService])],e)}();r.DatePipe=s},function(e,r,t){"use strict";var n=this&&this.__decorate||function(e,r,t,n){var a,i=arguments.length,o=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(o=(i<3?a(o):i>3?a(r,t,o):a(r,t))||o);return i>3&&o&&Object.defineProperty(r,t,o),o},a=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},i=t(2),o=t(1),u=function(){function e(e){this.intlService=e}return e.prototype.transform=function(e,r){return"string"==typeof e&&(e=this.intlService.parseNumber(e)),null!==e&&void 0!==e?this.intlService.formatNumber(e,r):e},e=n([i.Pipe({name:"kendoNumber"}),a("design:paramtypes",[o.IntlService])],e)}();r.NumberPipe=u},function(e,r,t){"use strict";var n=this&&this.__decorate||function(e,r,t,n){var a,i=arguments.length,o=i<3?r:null===n?n=Object.getOwnPropertyDescriptor(r,t):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,r,t,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(o=(i<3?a(o):i>3?a(r,t,o):a(r,t))||o);return i>3&&o&&Object.defineProperty(r,t,o),o},a=this&&this.__metadata||function(e,r){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,r)},i=t(2),o=t(7),u=t(8),s=t(1),l=t(3),m=[o.DatePipe,u.NumberPipe],c=function(){function e(){}return e=n([i.NgModule({declarations:[m],exports:[m],providers:[{provide:s.IntlService,useClass:l.CldrIntlService}]}),a("design:paramtypes",[])],e)}();r.IntlModule=c}])});