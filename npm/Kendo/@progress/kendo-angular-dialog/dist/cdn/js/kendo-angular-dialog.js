!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/core"),require("@progress/kendo-angular-l10n"),require("@angular/common"),require("rxjs/add/operator/map"),require("rxjs/add/operator/take"),require("rxjs/add/observable/merge"),require("rxjs/Observable"),require("rxjs/Subject")):"function"==typeof define&&define.amd?define(["@angular/core","@progress/kendo-angular-l10n","@angular/common","rxjs/add/operator/map","rxjs/add/operator/take","rxjs/add/observable/merge","rxjs/Observable","rxjs/Subject"],t):"object"==typeof exports?exports.KendoAngularDialog=t(require("@angular/core"),require("@progress/kendo-angular-l10n"),require("@angular/common"),require("rxjs/add/operator/map"),require("rxjs/add/operator/take"),require("rxjs/add/observable/merge"),require("rxjs/Observable"),require("rxjs/Subject")):e.KendoAngularDialog=t(e["@angular/core"],e["@progress/kendo-angular-l10n"],e["@angular/common"],e["rxjs/add/operator/map"],e["rxjs/add/operator/take"],e["rxjs/add/observable/merge"],e["rxjs/Observable"],e["rxjs/Subject"])}(this,function(e,t,n,o,r,i,a,c){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var o=n(1);t.DialogComponent=o.DialogComponent;var r=n(5);t.DialogTitleBarComponent=r.DialogTitleBarComponent;var i=n(4);t.DialogActionsComponent=i.DialogActionsComponent;var a=n(6);t.DialogModule=a.DialogModule;var c=n(8);t.DialogService=c.DialogService;var l=n(15);t.DialogCloseResult=l.DialogCloseResult,t.DialogRef=l.DialogRef},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(n,o){t(n,o,e)}},a=n(2),c=n(3),l=n(4),s=n(5),p=function(){function e(e,t,n){this._elRef=e,this._renderer=t,this.action=new a.EventEmitter,this.close=new a.EventEmitter,this.direction=n?"rtl":"ltr"}return Object.defineProperty(e.prototype,"dir",{get:function(){return this.direction},enumerable:!0,configurable:!0}),e.prototype.ngAfterContentInit=function(){this.bubble("close",this.titlebarContent)},e.prototype.ngAfterViewInit=function(){this.bubble("close",this.titlebarView),this.bubble("action",this.actionsView)},e.prototype.ngOnInit=function(){this._renderer.setElementAttribute(this._elRef.nativeElement,"title",null)},Object.defineProperty(e.prototype,"wrapperClass",{get:function(){return!0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styles",{get:function(){var e={};return this.width&&(e.width=this.width+"px"),this.height&&(e.height=this.height+"px"),e},enumerable:!0,configurable:!0}),e.prototype.bubble=function(e,t){var n=this;t&&t[e].subscribe(function(t){return n[e].emit(t)})},o([a.Input(),r("design:type",String)],e.prototype,"title",void 0),o([a.Input(),r("design:type",String)],e.prototype,"actions",void 0),o([a.Input(),r("design:type",Number)],e.prototype,"width",void 0),o([a.Input(),r("design:type",Number)],e.prototype,"height",void 0),o([a.Output(),r("design:type",a.EventEmitter)],e.prototype,"action",void 0),o([a.Output(),r("design:type",a.EventEmitter)],e.prototype,"close",void 0),o([a.HostBinding("attr.dir"),r("design:type",String)],e.prototype,"dir",null),o([a.ContentChild(s.DialogTitleBarComponent),r("design:type",s.DialogTitleBarComponent)],e.prototype,"titlebarContent",void 0),o([a.ViewChild(s.DialogTitleBarComponent),r("design:type",s.DialogTitleBarComponent)],e.prototype,"titlebarView",void 0),o([a.ViewChild(l.DialogActionsComponent),r("design:type",l.DialogActionsComponent)],e.prototype,"actionsView",void 0),o([a.HostBinding("class.k-dialog-wrapper"),r("design:type",Boolean)],e.prototype,"wrapperClass",null),e=o([a.Component({animations:[a.trigger("overlayAppear",[a.state("in",a.style({opacity:1})),a.transition("void => *",[a.style({opacity:.1}),a.animate(".3s cubic-bezier(.2, .6, .4, 1)")])]),a.trigger("dialogSlideInAppear",[a.state("in",a.style({transform:"translate(-50%, -50%)"})),a.transition("void => *",[a.style({transform:"translate(-50%, -60%)"}),a.animate(".3s cubic-bezier(.2, 1, .2, 1)")])])],exportAs:"kendoDialog",selector:"kendo-dialog",template:'\n    <div class="k-overlay" @overlayAppear></div>\n\n    <div class="k-widget k-window k-dialog k-centered k-dialog-centered" [ngStyle]="styles" @dialogSlideInAppear>\n\n      <kendo-dialog-titlebar *ngIf="title">{{title}}</kendo-dialog-titlebar>\n      <ng-content select="kendo-dialog-titlebar" *ngIf="!title"></ng-content>\n\n      <div class="k-content k-window-content k-dialog-content">\n        <ng-content *ngIf="!contentTemplate"></ng-content>\n        <template [ngTemplateOutlet]="contentTemplate" *ngIf="contentTemplate"></template>\n      </div>\n\n      <ng-content select="kendo-dialog-actions" *ngIf="!actions"></ng-content>\n      <kendo-dialog-actions [actions]="actions" *ngIf="actions"></kendo-dialog-actions>\n\n    </div>\n  '}),i(2,a.Optional()),i(2,a.Inject(c.RTL)),r("design:paramtypes",[a.ElementRef,a.Renderer,Boolean])],e)}();t.DialogComponent=p},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(2),a=function(){function e(){this.action=new i.EventEmitter}return Object.defineProperty(e.prototype,"className",{get:function(){return!0},enumerable:!0,configurable:!0}),e.prototype.actionTemplate=function(){return this.actions instanceof i.TemplateRef},e.prototype.onButtonClick=function(e){this.action.emit(e)},e.prototype.buttonClass=function(e){var t=["k-button"];return e.primary&&t.push("k-primary"),t.join(" ")},o([i.Input(),r("design:type",Object)],e.prototype,"actions",void 0),o([i.Output(),r("design:type",i.EventEmitter)],e.prototype,"action",void 0),o([i.HostBinding("class.k-button-group"),i.HostBinding("class.k-dialog-buttongroup"),i.HostBinding("class.k-dialog-button-layout-stretched"),r("design:type",Boolean)],e.prototype,"className",null),e=o([i.Component({selector:"kendo-dialog-actions",template:'\n    <ng-content *ngIf="!actions"></ng-content>\n    <ng-container *ngIf="!actionTemplate()">\n      <button\n        [ngClass]="buttonClass(action)"\n        (click)="onButtonClick(action)"\n        *ngFor="let action of actions">\n        {{ action.text }}\n      </button>\n    </ng-container>\n    <template [ngTemplateOutlet]="actions" *ngIf="actionTemplate()"></template>\n  '}),r("design:paramtypes",[])],e)}();t.DialogActionsComponent=a},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(2),a=function(){function e(){this.close=new i.EventEmitter}return Object.defineProperty(e.prototype,"className",{get:function(){return!0},enumerable:!0,configurable:!0}),e.prototype.onCloseClick=function(e){e.preventDefault(),this.close.emit()},o([i.Output(),r("design:type",i.EventEmitter)],e.prototype,"close",void 0),o([i.HostBinding("class.k-window-titlebar"),i.HostBinding("class.k-dialog-titlebar"),i.HostBinding("class.k-header"),r("design:type",String)],e.prototype,"className",null),e=o([i.Component({selector:"kendo-dialog-titlebar",template:'\n    <div class="k-window-title k-dialog-title">\n      <ng-content></ng-content>\n    </div>\n    <div class="k-window-actions k-dialog-actions">\n      <a href="#" role="button"\n         aria-label="Close"\n         class="k-button k-bare k-button-icon k-window-action k-dialog-action k-dialog-close"\n         (click)="onCloseClick($event)">\n        <span class="k-icon k-i-x"></span>\n      </a>\n    </div>\n  '}),r("design:paramtypes",[])],e)}();t.DialogTitleBarComponent=a},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(2),a=n(7),c=n(1),l=n(5),s=n(4),p=n(8),u=n(16),f=n(14);t.DIALOG_DIRECTIVES=[c.DialogComponent,l.DialogTitleBarComponent,s.DialogActionsComponent];var d=function(){function e(){}return e.forRoot=function(n){var o=n||[];return{ngModule:e,providers:[p.DialogService,{multi:!0,provide:i.ANALYZE_FOR_ENTRY_COMPONENTS,useValue:t.DIALOG_DIRECTIVES.concat(o)}]}},e=o([i.NgModule({declarations:[t.DIALOG_DIRECTIVES,u.DialogContainerDirective],entryComponents:[t.DIALOG_DIRECTIVES],exports:[t.DIALOG_DIRECTIVES,u.DialogContainerDirective],imports:[a.CommonModule],providers:[f.DialogContainerService]}),r("design:paramtypes",[])],e)}();t.DialogModule=d},function(e,t){e.exports=n},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};n(9),n(10),n(11);var i=n(12),a=n(13),c=n(2),l=n(1),s=n(14),p=n(15),u=function(){function e(e,t){this.resolver=e,this.containerService=t}return e.prototype.open=function(e){this.containerService.validate();var t=this.resolver.resolveComponentFactory(l.DialogComponent),n=this.containerService.container,o=this.contentFrom(e.content),r=n.createComponent(t,0,void 0,o.nodes);this.applyOptions(r.instance,e);var c=new a.Subject,s=function(e){c.next(e||new p.DialogCloseResult),r.destroy()},u=i.Observable.merge(c,r.instance.close,r.instance.action).take(1);return u.subscribe(s),{result:u,dialog:r,content:o.componentRef||null,close:s}},e.prototype.applyOptions=function(e,t){e.title=t.title,e.actions=t.actions,t.content instanceof c.TemplateRef&&(e.contentTemplate=t.content)},e.prototype.contentFrom=function(e){var t=[],n=null;if("string"==typeof e)t=[this.containerService.renderer.createText(null,e)];else if(e&&!(e instanceof c.TemplateRef)){var o=this.resolver.resolveComponentFactory(e);n=this.containerService.container.createComponent(o),t=[n.location.nativeElement]}return{componentRef:n,nodes:[[],t,[]]}},e=o([c.Injectable(),r("design:paramtypes",[c.ComponentFactoryResolver,s.DialogContainerService])],e)}();t.DialogService=u},function(e,t){e.exports=o},function(e,t){e.exports=r},function(e,t){e.exports=i},function(e,t){e.exports=a},function(e,t){e.exports=c},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(2),a=function(){function e(){}return Object.defineProperty(e.prototype,"container",{get:function(){return e.container},set:function(t){e.container=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"renderer",{get:function(){return e.renderer},set:function(t){e.renderer=t},enumerable:!0,configurable:!0}),e.prototype.validate=function(){var t=e.container&&e.renderer;if(!t)throw new Error("\n  Cannot attach dialog to the page.\n  Verify that there is an element that uses the kendoDialogContainer directive.\n  See http://www.telerik.com/kendo-angular-ui/components/dialog/api/DialogContainerDirective/ .\n      ");return!!t},e=o([i.Injectable(),r("design:paramtypes",[])],e)}();t.DialogContainerService=a},function(e,t){"use strict";var n=function(){function e(){}return e}();t.DialogAction=n;var o=function(){function e(){}return e}();t.DialogCloseResult=o;var r=function(){function e(){}return e}();t.DialogSettings=r;var i=function(){function e(){}return e}();t.DialogRef=i},function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(2),a=n(14),c=function(){function e(e,t,n){n.container=e,n.renderer=t}return e=o([i.Directive({selector:"[kendoDialogContainer]"}),r("design:paramtypes",[i.ViewContainerRef,i.Renderer,a.DialogContainerService])],e)}();t.DialogContainerDirective=c}])});