!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/core")):"function"==typeof define&&define.amd?define(["@angular/core"],t):"object"==typeof exports?exports.KendoAngularL10N=t(require("@angular/core")):e.KendoAngularL10N=t(e["@angular/core"])}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}n(r(1)),n(r(3)),n(r(4)),n(r(5))},function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=r(2),c=function(){function e(){}return e=n([i.Injectable(),o("design:paramtypes",[])],e)}();t.MessageService=c},function(t,r){t.exports=e},function(e,t){"use strict";var r=function(){function e(){}return Object.defineProperty(e.prototype,"override",{get:function(){return!1},enumerable:!0,configurable:!0}),e.prototype.ngOnChanges=function(e){var t=this,r=Object.keys(e);r.forEach(function(e){return t.service.register(e,t[e],t.override)})},e}();t.ComponentMessages=r},function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,c=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(c=(i<3?o(c):i>3?o(t,r,c):o(t,r))||c);return i>3&&c&&Object.defineProperty(t,r,c),c},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(r,n){t(r,n,e)}},c=r(2),a=r(1);t.L10N_PREFIX=new c.OpaqueToken("Localization key prefix");var f=function(){function e(e,t){this.prefix=e,this.messageService=t,this.dictionary={}}return e.prototype.get=function(e){var t=this.key(e);return this.dictionary[t]},e.prototype.register=function(e,t,r){void 0===r&&(r=!1);var n=this.key(e),o=t;if(!r){if(this.dictionary.hasOwnProperty(n))return;o=this.defaultValue(n,t)}this.dictionary[n]=o},e.prototype.key=function(e){return this.prefix+"."+e},e.prototype.defaultValue=function(e,t){if(!this.messageService)return t;var r=this.messageService.get(e);return void 0===r?t:r},e=n([c.Injectable(),i(0,c.Inject(t.L10N_PREFIX)),i(1,c.Optional()),o("design:paramtypes",[String,a.MessageService])],e)}();t.LocalizationService=f},function(e,t,r){"use strict";var n=r(2);t.RTL=new n.OpaqueToken("Kendo UI Right-to-Left token")}])});