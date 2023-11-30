"use strict";
(self["webpackChunkMarieke"] = self["webpackChunkMarieke"] || []).push([["main"],{

/***/ 1757:
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fade: () => (/* binding */ fade)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 2501);

let fade = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fade', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.state)('void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  opacity: 0
})), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('void => *', [
//style({backgroundColor: 'black', opacity: 0}),
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(2000)
//animate(2000, style({backgroundColor: 'white', opacity:1}))
]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)('* => void', [
//style({backgroundColor: 'black', opacity: 0}),
(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(2000)])]);
//   trigger('fade', [
//     state('void', style({opacity:0})),
//     transition('void => *', [
//       //style({backgroundColor: 'black', opacity: 0}),
//       animate(2000)
//       //animate(2000, style({backgroundColor: 'white', opacity:1}))
//     ]),
//     transition('* => void', [
//       //style({backgroundColor: 'black', opacity: 0}),
//       animate(2000)
//     ])
//   ])

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/general/home/home.component */ 4023);
/* harmony import */ var _modules_general_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/general/aboutme/aboutme.component */ 9999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'about',
  component: _modules_general_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_1__.aboutmeComponent
}, {
  path: 'outreach',
  // component: outreachComponent, 
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/general/outreach/outreach.module */ 4494)).then(mod => mod.OutreachModule)
}, {
  path: 'publications',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/general/publications/publications.module */ 8567)).then(mod => mod.PublicationsModule)
}, {
  path: 'talks',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/general/talks/talks.module */ 1774)).then(mod => mod.TalksModule)
}, {
  path: 'teaching',
  loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/general/teaching/teaching.module */ 8201)).then(mod => mod.TeachingModule)
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
      // initialNavigation: 'enabledBlocking'
      useHash: false,
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 6471);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer.component */ 7913);






class AppComponent {
  constructor(platformId) {
    this.platformId = platformId;
    this.title = 'angular-app';
    this.footerUrl = 'https://www.ganatan.com/';
    this.footerLink = 'www.ganatan.com';
  }
  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        };
      }
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.PLATFORM_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 4,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-footer");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    styles: [".navbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 500;\n  border-top: 1px solid #09238d;\n  border-bottom: 1px solid #09238d;\n}\n\n.navbar.navbar-dark[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: yellow;\n  border-top: 1px solid yellow;\n  border-bottom: 1px solid yellow;\n}\n\n.nga-navbar[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 11px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #09238d;\n}\n\n.nga-navbar-logo[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.nga-navbar-logo[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.nga-logo[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n\n.nga-logo[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.nga-footer[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: yellow;\n  text-decoration: underline;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .hint[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUVFLDhFQUE4RTtFQUM5RSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaO0FBQ0Y7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluayB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwOTIzOGQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwOTIzOGQ7XHJcbn1cclxuXHJcbi5uYXZiYXIubmF2YmFyLWRhcmsgLm5hdmJhci1uYXYgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XHJcbiAgY29sb3I6IHllbGxvdztcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgeWVsbG93O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB5ZWxsb3c7XHJcbn1cclxuXHJcbi5uZ2EtbmF2YmFyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMTFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDExcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA5MjM4ZDtcclxufVxyXG5cclxuLm5nYS1uYXZiYXItbG9nbyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm5nYS1uYXZiYXItbG9nbzpob3ZlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbn1cclxuXHJcbi5uZ2EtbG9nbyB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLm5nYS1sb2dvOmhvdmVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxufVxyXG5cclxuLm5nYS1mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmdhLWZvb3RlciBhIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lXHJcbn1cclxuXHJcbi5uZ2EtZm9vdGVyIGE6aG92ZXIsXHJcbi5uZ2EtZm9vdGVyIGE6Zm9jdXMge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5uZ2EtZm9vdGVyIC5oaW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xyXG59XHJcblxyXG4ubmdhLWZvb3RlciAuaGludDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/service-worker */ 1509);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/general/home/home.component */ 4023);
/* harmony import */ var _components_header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.module */ 4085);
/* harmony import */ var _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.module */ 1409);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _instagram_dom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./instagram-dom.service */ 4759);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _modules_general_outreach_outreach_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/general/outreach/outreach.module */ 4494);
/* harmony import */ var _modules_general_talks_talks_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/general/talks/talks.module */ 1774);
/* harmony import */ var _modules_general_teaching_teaching_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/general/teaching/teaching.module */ 8201);
/* harmony import */ var _modules_general_publications_publications_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/general/publications/publications.module */ 8567);
/* harmony import */ var _modules_general_outreach_instagram_instagram_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/general/outreach/instagram/instagram.module */ 1178);
/* harmony import */ var _modules_general_aboutme_aboutme_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/general/aboutme/aboutme.module */ 9477);





















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [_instagram_dom_service__WEBPACK_IMPORTED_MODULE_5__.InstagramDOMService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.isDevMode)(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }), _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _components_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _modules_general_outreach_outreach_module__WEBPACK_IMPORTED_MODULE_6__.OutreachModule, _modules_general_talks_talks_module__WEBPACK_IMPORTED_MODULE_7__.TalksModule, _modules_general_teaching_teaching_module__WEBPACK_IMPORTED_MODULE_8__.TeachingModule, _modules_general_publications_publications_module__WEBPACK_IMPORTED_MODULE_9__.PublicationsModule, _modules_general_outreach_instagram_instagram_module__WEBPACK_IMPORTED_MODULE_10__.InstagramModule, _modules_general_aboutme_aboutme_module__WEBPACK_IMPORTED_MODULE_11__.AboutmeModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _modules_general_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_14__.ServiceWorkerModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _components_header_header_module__WEBPACK_IMPORTED_MODULE_3__.HeaderModule, _components_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _modules_general_outreach_outreach_module__WEBPACK_IMPORTED_MODULE_6__.OutreachModule, _modules_general_talks_talks_module__WEBPACK_IMPORTED_MODULE_7__.TalksModule, _modules_general_teaching_teaching_module__WEBPACK_IMPORTED_MODULE_8__.TeachingModule, _modules_general_publications_publications_module__WEBPACK_IMPORTED_MODULE_9__.PublicationsModule, _modules_general_outreach_instagram_instagram_module__WEBPACK_IMPORTED_MODULE_10__.InstagramModule, _modules_general_aboutme_aboutme_module__WEBPACK_IMPORTED_MODULE_11__.AboutmeModule],
    exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__.MatToolbarModule]
  });
})();

/***/ }),

/***/ 5539:
/*!************************************************************!*\
  !*** ./src/app/components/footer/footer-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterRoutingModule: () => (/* binding */ FooterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class FooterRoutingModule {
  static #_ = this.ɵfac = function FooterRoutingModule_Factory(t) {
    return new (t || FooterRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: FooterRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 7913:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class FooterComponent {
  static #_ = this.ɵfac = function FooterComponent_Factory(t) {
    return new (t || FooterComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FooterComponent,
    selectors: [["app-footer"]],
    decls: 12,
    vars: 0,
    consts: [[1, "nga-footer"], [1, "d-flex", "flex-wrap", "justify-content-between", "align-items-center", "py-4", "my-5"], [1, "col-md-5", "d-flex", "align-items-center"], ["src", "assets/params/images/logo/stonyBrook.png", 1, "stonyBrook"], ["src", "assets/params/images/logo/simonsCenter.png", 1, "simons"], [1, "nav", "col-md-4", "align-items-center", "justify-content-end", "d-flex", "footlinks"], ["type", "button", "href", "https://www.linkedin.com/in/marieke-tunstall-van-beest-526650106/", "aria-label", "Linkedin Marieke", "target", "\u201D_blank\u201D", 1, "nga-btn-social", "nga-btn-linkedin"], [1, "fab", "fa-linkedin-in"], ["type", "button", "href", "https://inspirehep.net/authors/1790663", "aria-label", "InspireHep Marieke", "target", "\u201D_blank\u201D", 1, "nga-btn-social", "nga-btn-inspire"], ["src", "assets/icons/inspire-square.svg", 1, "inspire"], ["type", "button", "href", "https://orcid.org/0000-0001-6424-941X", "aria-label", "Orcid Marieke", "target", "\u201D_blank\u201D", 1, "nga-btn-social", "nga-btn-orcid"], ["src", "assets/icons/orcid-square.svg", 1, "orcid"]],
    template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "footer", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3)(4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5)(6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      }
    },
    styles: [".nga-footer[_ngcontent-%COMP%] {\n  position:relative;\n  bottom:-115px;\n  background-color:rgb(37, 37, 37);\n  width:100%;\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: white;\n  text-decoration: underline;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .nga-hint[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .nga-hint[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.nga-btn-social[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  padding: 0;\n  margin: 15px;\n  overflow: hidden;\n  vertical-align: middle;\n  cursor: pointer;\n  border-radius: 50%;\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  transition: all 0.4s ease-in-out;\n  width: 40px;\n  height: 40px\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 42px\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: inherit;\n  color: rgb(255, 255, 255);\n  text-align: center\n}\n\n\n\n\n\n.nga-btn-linkedin[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255);\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(37, 37, 37);\n}\n\n.nga-btn-linkedin[_ngcontent-%COMP%]:hover {\n  background-color: #0082ca;\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: rgb(255, 255, 255);\n}\n\n\n\n.nga-btn-inspire[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255);\n}\n\n.nga-btn-inspire[_ngcontent-%COMP%]:hover {\n  background-color: rgb(112,156,203);\n}\n\n.inspire[_ngcontent-%COMP%] {\n  width: 1.5em;\n  margin-top: 6px;\n  margin-left: 8.5px;\n  filter: invert(0%) sepia(1%) saturate(7470%) hue-rotate(330deg) brightness(95%) contrast(100%);\n}\n\n.inspire[_ngcontent-%COMP%]:hover {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);\n}\n\n\n\n.nga-btn-orcid[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255);\n}\n\n.nga-btn-orcid[_ngcontent-%COMP%]:hover {\n  background-color: #5c5b5b;\n}\n\n.orcid[_ngcontent-%COMP%] {\n  width: 1.5em;\n  margin-top: 6px;\n  margin-left: 8.5px;\n  filter: invert(0%) sepia(1%) saturate(7470%) hue-rotate(330deg) brightness(95%) contrast(100%);\n}\n\n.orcid[_ngcontent-%COMP%]:hover {\n  filter: invert(77%) sepia(18%) saturate(1589%) hue-rotate(30deg) brightness(102%) contrast(80%);\n}\n\n.simons[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.stonyBrook[_ngcontent-%COMP%] {\n  width: 100px;\n  margin-left: 25%;\n  margin-right: 10%;\n}\n\n\n\n\n@media (min-width: 1600px) {\n  .stonyBrook[_ngcontent-%COMP%] {\n    width: 7vw;\n  }\n  .simons[_ngcontent-%COMP%] {\n    width: 14vw;\n  }\n} \n\n\n\n\n@media only screen and (max-width: 2400px) and (min-width: 680px) {\n  footer[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n\n  .footlinks[_ngcontent-%COMP%] {\n    padding-right: 6%;\n  }\n}\n\n@media only screen and (max-width: 680px) and (min-width: 100px) {\n  footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .stonyBrook[_ngcontent-%COMP%] {\n    margin-left: -15px;\n    margin-bottom: 35px;\n    width: 70px;\n  }\n  .simons[_ngcontent-%COMP%] {\n    margin-bottom: 35px;\n    width: 140px;\n  }\n\n  .footlinks[_ngcontent-%COMP%] {\n    padding-right: 0%;\n  }\n}\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWjtBQUNGOztBQUVBOztFQUVFLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUVsQiw4RUFBOEU7RUFFOUUsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QjtBQUNGOzs7O0FBSUEsYUFBYTtBQUNiO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLFlBQVk7QUFDWjtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDhGQUE4RjtBQUNoRzs7QUFFQTtFQUNFLGdHQUFnRztBQUNsRzs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiw4RkFBOEY7QUFDaEc7O0FBRUE7RUFDRSwrRkFBK0Y7QUFDakc7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7Ozs7QUFLQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRjs7Ozs7QUFLQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5uZ2EtZm9vdGVyIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBib3R0b206LTExNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDM3LCAzNywgMzcpO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5uZ2EtZm9vdGVyIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmVcclxufVxyXG5cclxuLm5nYS1mb290ZXIgYTpob3ZlcixcclxuLm5nYS1mb290ZXIgYTpmb2N1cyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ubmdhLWZvb3RlciAubmdhLWhpbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XHJcbn1cclxuXHJcbi5uZ2EtZm9vdGVyIC5uZ2EtaGludDpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4ubmdhLWJ0bi1zb2NpYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHhcclxufVxyXG5cclxuLm5nYS1idG4tc29jaWFsIGkge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogNDJweFxyXG59XHJcblxyXG4ubmdhLWJ0bi1zb2NpYWwgaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcblxyXG5cclxuLyogTGlua2VkaW4gKi9cclxuLm5nYS1idG4tbGlua2VkaW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLm5nYS1idG4tc29jaWFsIGkge1xyXG4gIGNvbG9yOiByZ2IoMzcsIDM3LCAzNyk7XHJcbn1cclxuXHJcbi5uZ2EtYnRuLWxpbmtlZGluOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MmNhO1xyXG59XHJcblxyXG4ubmdhLWJ0bi1zb2NpYWwgaTpob3ZlciB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLyogSW5zcGlyZSAqL1xyXG4ubmdhLWJ0bi1pbnNwaXJlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5uZ2EtYnRuLWluc3BpcmU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTIsMTU2LDIwMyk7XHJcbn1cclxuXHJcbi5pbnNwaXJlIHtcclxuICB3aWR0aDogMS41ZW07XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4LjVweDtcclxuICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDc0NzAlKSBodWUtcm90YXRlKDMzMGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwMCUpO1xyXG59XHJcblxyXG4uaW5zcGlyZTpob3ZlciB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjg4ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMiUpO1xyXG59XHJcblxyXG4vKiBPcmNpZCAqL1xyXG4ubmdhLWJ0bi1vcmNpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubmdhLWJ0bi1vcmNpZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWI1YjtcclxufVxyXG5cclxuLm9yY2lkIHtcclxuICB3aWR0aDogMS41ZW07XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4LjVweDtcclxuICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDc0NzAlKSBodWUtcm90YXRlKDMzMGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwMCUpO1xyXG59XHJcblxyXG4ub3JjaWQ6aG92ZXIge1xyXG4gIGZpbHRlcjogaW52ZXJ0KDc3JSkgc2VwaWEoMTglKSBzYXR1cmF0ZSgxNTg5JSkgaHVlLXJvdGF0ZSgzMGRlZykgYnJpZ2h0bmVzcygxMDIlKSBjb250cmFzdCg4MCUpO1xyXG59XHJcblxyXG4uc2ltb25zIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5zdG9ueUJyb29rIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE2MDBweCkge1xyXG4gIC5zdG9ueUJyb29rIHtcclxuICAgIHdpZHRoOiA3dnc7XHJcbiAgfVxyXG4gIC5zaW1vbnMge1xyXG4gICAgd2lkdGg6IDE0dnc7XHJcbiAgfVxyXG59IFxyXG5cclxuXHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyNDAwcHgpIGFuZCAobWluLXdpZHRoOiA2ODBweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuXHJcbiAgLmZvb3RsaW5rcyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA2JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjgwcHgpIGFuZCAobWluLXdpZHRoOiAxMDBweCkge1xyXG4gIGZvb3RlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuc3RvbnlCcm9vayB7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgfVxyXG4gIC5zaW1vbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICB9XHJcblxyXG4gIC5mb290bGlua3Mge1xyXG4gICAgcGFkZGluZy1yaWdodDogMCU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 1409:
/*!****************************************************!*\
  !*** ./src/app/components/footer/footer.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterModule: () => (/* binding */ FooterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-routing.module */ 5539);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component */ 7913);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 2484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





class FooterModule {
  static #_ = this.ɵfac = function FooterModule_Factory(t) {
    return new (t || FooterModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: FooterModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FooterModule, {
    declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _footer_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterRoutingModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarModule],
    exports: [_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent]
  });
})();

/***/ }),

/***/ 7961:
/*!************************************************************!*\
  !*** ./src/app/components/header/header-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderRoutingModule: () => (/* binding */ HeaderRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class HeaderRoutingModule {
  static #_ = this.ɵfac = function HeaderRoutingModule_Factory(t) {
    return new (t || HeaderRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: HeaderRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HeaderRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6471:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class HeaderComponent {
  static #_ = this.ɵfac = function HeaderComponent_Factory(t) {
    return new (t || HeaderComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HeaderComponent,
    selectors: [["app-header"]],
    decls: 41,
    vars: 0,
    consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top", "nga-navbar"], ["aria-label", "Main navigation", 1, "container"], [1, "titleMarieke"], ["routerLink", "/", "alt", "Accueil", "aria-label", "Ganatan", 1, "navbar-brand"], [1, "nga-logo"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-light", "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["aria-current", "page", "routerLink", "/", 1, "nav-link", "nga-nav-link"], [1, "fab", "me-1"], ["aria-current", "page", "routerLink", "/about", 1, "nav-link", "nga-nav-link"], ["aria-current", "page", "routerLink", "/publications", 1, "nav-link", "nga-nav-link"], [1, "fas", "me-1"], ["aria-current", "page", "routerLink", "/talks", 1, "nav-link", "nga-nav-link"], ["aria-current", "page", "routerLink", "/teaching", 1, "nav-link", "nga-nav-link"], ["aria-current", "page", "routerLink", "/outreach", 1, "nav-link", "nga-nav-link"], [1, "links"], ["type", "button", "href", "https://www.linkedin.com/in/marieke-tunstall-van-beest-526650106/", "aria-label", "Linkedin Marieke", "target", "\u201D_blank\u201D", 1, "nga-btn-social", "nga-btn-linkedin"], [1, "fab", "fa-linkedin-in"], ["type", "button", "href", "https://inspirehep.net/authors/1790663", "aria-label", "InspireHep Marieke", "target", "\u201D_blank\u201D", 1, "nga-btn-social", "nga-btn-inspire"], ["src", "assets/icons/inspire-square.svg", 1, "inspire"], ["type", "button", "href", "https://orcid.org/0000-0001-6424-941X", "aria-label", "Orcid Marieke", "target", "\u201D_blank\u201D", 1, "nga-btn-social", "nga-btn-orcid"], ["src", "assets/icons/orcid-square.svg", 1, "orcid"]],
    template: function HeaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "nav", 1)(2, "div", 2)(3, "a", 3)(4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " m|1a|3r|2i|2e|1k|2e|2 |1v|1a|0n|2 |1b|1e|0e|3s|1t|1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 9)(15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 9)(19, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "publications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 9)(23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "talks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 9)(27, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "teaching");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 9)(31, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "outreach");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 18)(35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
    styles: ["@font-face {\n  font-family: titleFont;\n  src: url('Mediga.woff');\n}\n\n\n.container[_ngcontent-%COMP%] {\n  max-width: 1600px;\n}\n@media (max-width: 991px) {\n  .nga-btn-linkedin[_ngcontent-%COMP%] {\n    margin-left: 34vw !important;\n  }\n  .nga-nav-link[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n@media (max-width: 710px) {\n  .nga-btn-linkedin[_ngcontent-%COMP%] {\n    margin-left: 30vw !important;\n  }\n\n  .nga-logo[_ngcontent-%COMP%] {\n    font-size: 52px !important;\n  }\n}\n\n@media (max-width: 600px) {\n  .nga-btn-linkedin[_ngcontent-%COMP%] {\n    margin-left: 30vw !important;\n  }\n\n  .nga-logo[_ngcontent-%COMP%] {\n    font-size: 50px !important;\n  }\n\n  .titleMarieke[_ngcontent-%COMP%] {\n    height: 80px;\n  }\n}\n\n@media (max-width: 540px) {\n  .nga-btn-linkedin[_ngcontent-%COMP%] {\n    margin-left: 26vw !important;\n  }\n\n  .nga-logo[_ngcontent-%COMP%] {\n    font-size: 45px !important;\n  }\n\n  .titleMarieke[_ngcontent-%COMP%] {\n    height: 65px;\n  }\n}\n\n@media (max-width: 500px) {\n  .nga-btn-linkedin[_ngcontent-%COMP%] {\n    margin-left: 26vw !important;\n  }\n\n  .nga-logo[_ngcontent-%COMP%] {\n    font-size: 40px !important;\n  }\n\n  .titleMarieke[_ngcontent-%COMP%] {\n    height: 60px;\n  }\n}\n\n@media (max-width: 460px) {\n  .nga-btn-linkedin[_ngcontent-%COMP%] {\n    margin-left: 24vw !important;\n  }\n\n  .nga-logo[_ngcontent-%COMP%] {\n    font-size: 35px !important;\n  }\n\n  .titleMarieke[_ngcontent-%COMP%] {\n    height: 55px;\n  }\n}\n\n@media (max-width: 400px) {\n  .nga-btn-linkedin[_ngcontent-%COMP%] {\n    margin-left: 21vw !important;\n  }\n\n  .nga-logo[_ngcontent-%COMP%] {\n    font-size: 30px !important;\n  }\n\n  .titleMarieke[_ngcontent-%COMP%] {\n    height: 50px;\n  }\n}\n\n.nga-nav-link[_ngcontent-%COMP%] {\n  color: rgb(37, 37, 37);\n  border-top: 1px solid rgb(255, 255, 255);\n  border-bottom: 1px solid rgb(255, 255, 255);\n  font-weight: 500;\n  font-family: titleFont;\n}\n\n\n\n\n\n\n\n\n\n\n.nga-nav-link[_ngcontent-%COMP%]:after {\n  content: '';\n  display: block;\n  margin: auto;\n  height: 0.1px;\n  width: 0px;\n  background: transparent;\n  transition: width 0.8s ease, background-color 0.8s ease;\n}\n.nga-nav-link[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  background: rgb(0, 0, 0);\n}\n\n\n\n.nav-item[_ngcontent-%COMP%] {\n  margin-inline: 1vw;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.nga-navbar[_ngcontent-%COMP%] {\n  \n\n  \n\n  background-color: rgb(255, 255, 255);\n}\n\n.nga-logo[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-family: 'DatalegreyaThin';\n  color: rgb(37, 37, 37);\n  font-style: normal; \n  font-size: 52px;\n}\n\n.nga-logo[_ngcontent-%COMP%]:hover {\n  color: rgb(138, 138, 138);\n}\n\n.nga-btn-navbar[_ngcontent-%COMP%] {\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #1976d2;\n  --bs-btn-border-color: #1976d2;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0b5ed7;\n  --bs-btn-hover-border-color: #0a58ca;\n}\n\n\n.nga-footer[_ngcontent-%COMP%] {\n  position:fixed;\n  bottom:0px;\n  background-color:rgb(40,45,78);\n  width:100%;\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none\n}\n\n.nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .nga-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  color: white;\n  text-decoration: underline;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .nga-hint[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n}\n\n.nga-footer[_ngcontent-%COMP%]   .nga-hint[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.nga-btn-social[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n  padding: 0;\n  margin: 15px;\n  overflow: hidden;\n  vertical-align: middle;\n  cursor: pointer;\n  border-radius: 50%;\n  \n\n\n  transition: all 0.4s ease-in-out;\n  width: 45px;\n  height: 45px\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  line-height: 47px\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: inherit;\n  color: rgb(255, 255, 255);\n  text-align: center\n}\n\n.nga-btn-social[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n\n\n.nga-btn-linkedin[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255);\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: rgb(37, 37, 37);\n}\n\n.nga-btn-linkedin[_ngcontent-%COMP%]:hover {\n  background-color: #0082ca;\n}\n\n.nga-btn-social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover {\n  color: rgb(255, 255, 255);\n}\n\n\n\n.nga-btn-inspire[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255);\n}\n\n.nga-btn-inspire[_ngcontent-%COMP%]:hover {\n  background-color: rgb(112,156,203);\n}\n\n.inspire[_ngcontent-%COMP%] {\n  width: 1.5em;\n  margin-top: 8px;\n  margin-left: 11px;\n  filter: invert(0%) sepia(1%) saturate(7470%) hue-rotate(330deg) brightness(95%) contrast(100%);\n}\n\n.inspire[_ngcontent-%COMP%]:hover {\n  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);\n}\n\n\n\n.nga-btn-orcid[_ngcontent-%COMP%] {\n  background-color: rgb(255, 255, 255);\n}\n\n.nga-btn-orcid[_ngcontent-%COMP%]:hover {\n  background-color: #5c5b5b;\n}\n\n.orcid[_ngcontent-%COMP%] {\n  width: 1.5em;\n  margin-top: 8px;\n  margin-left: 11px;\n  filter: invert(0%) sepia(1%) saturate(7470%) hue-rotate(330deg) brightness(95%) contrast(100%);\n}\n\n.orcid[_ngcontent-%COMP%]:hover {\n  filter: invert(77%) sepia(18%) saturate(1589%) hue-rotate(30deg) brightness(102%) contrast(80%);\n}\n\n@media (min-width: 991px) {\n  .navbar[_ngcontent-%COMP%] > .container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n\n  .navbar-collapse[_ngcontent-%COMP%] {\n    transform: translate(100px);\n  }\n\n  .titleMarieke[_ngcontent-%COMP%] {\n    height: 70px;\n  }\n}\n\n@media (min-width: 1600px) {\n  .links[_ngcontent-%COMP%] {\n    transform: translate(8vw);\n  }\n  \n} \n\n@media only screen and (max-width: 1800px) and (min-width: 1600px) {\n  .links[_ngcontent-%COMP%] {\n    transform: translate(4vw);\n  }\n}\n\n@media only screen and (max-width: 1600px) and (min-width: 1380px) {\n  .links[_ngcontent-%COMP%] {\n    transform: translate(3vw);\n  }\n}\n\n@media only screen and (max-width: 1380px) and (min-width: 1150px) {\n  .links[_ngcontent-%COMP%] {\n    transform: translate(3vw);\n  }\n\n  .nav-item[_ngcontent-%COMP%] {\n    padding-inline: 1vw;\n  }\n\n}\n\n@media only screen and (max-width: 1150px) and (min-width: 1000px) {\n  .links[_ngcontent-%COMP%] {\n    transform: translate(1vw);\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    padding-inline: 0.5vw;\n  }\n}\n\n@media only screen and (max-width: 1000px) and (min-width: 991px) {\n  .links[_ngcontent-%COMP%] {\n    transform: translate(1vw);\n  }\n  .nav-item[_ngcontent-%COMP%] {\n    padding-inline: 0vw;\n  }\n}\n\n\n\n\n@media only screen and (max-width: 1450px) and (min-width: 991px) {\n  .links[_ngcontent-%COMP%] {\n    visibility: hidden;\n  }\n}\n\n@media only screen and (max-width: 2450px) and (min-width: 800px) {\n  .nga-nav-link[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n}\n\n@media only screen and (max-width: 850px) and (min-width: 0px) {\n  .nga-nav-link[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQWdEO0FBQ2xEOzs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDRCQUE0QjtFQUM5Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3Q0FBd0M7RUFDeEMsMkNBQTJDO0VBQzNDLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUEsa0JBQWtCO0FBQ2xCOzs7O0dBSUc7O0FBRUg7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2Qix1REFBdUQ7QUFDekQ7QUFDQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7QUFDMUI7Ozs7QUFJQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNEZBQTRGO0VBQzVGLG9GQUFvRjtFQUNwRixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsb0NBQW9DO0FBQ3RDOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWjtBQUNGOztBQUVBOztFQUVFLFlBQVk7RUFDWiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQjttRkFDaUY7RUFFakYsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWDtBQUNGOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QjtBQUNGOztBQUVBO0VBRUU7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQSxhQUFhO0FBQ2I7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsWUFBWTtBQUNaO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsOEZBQThGO0FBQ2hHOztBQUVBO0VBQ0UsZ0dBQWdHO0FBQ2xHOztBQUVBLFVBQVU7QUFDVjtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDhGQUE4RjtBQUNoRzs7QUFFQTtFQUNFLCtGQUErRjtBQUNqRzs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCOzs7RUFHQTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUY7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBLDhCQUE4Qjs7QUFFOUI7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiB0aXRsZUZvbnQ7XHJcbiAgc3JjOiB1cmwoLi4vLi4vLi4vYXNzZXRzL3BhcmFtcy9jc3MvTWVkaWdhLndvZmYpO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgLm5nYS1idG4tbGlua2VkaW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDM0dncgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLm5nYS1uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzEwcHgpIHtcclxuICAubmdhLWJ0bi1saW5rZWRpbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzB2dyAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5nYS1sb2dvIHtcclxuICAgIGZvbnQtc2l6ZTogNTJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLm5nYS1idG4tbGlua2VkaW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwdncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uZ2EtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDUwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZU1hcmlla2Uge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgLm5nYS1idG4tbGlua2VkaW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2dncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uZ2EtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZU1hcmlla2Uge1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgLm5nYS1idG4tbGlua2VkaW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2dncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uZ2EtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZU1hcmlla2Uge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgLm5nYS1idG4tbGlua2VkaW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0dncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uZ2EtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZU1hcmlla2Uge1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLm5nYS1idG4tbGlua2VkaW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIxdncgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5uZ2EtbG9nbyB7XHJcbiAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZU1hcmlla2Uge1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm5nYS1uYXYtbGluayB7XHJcbiAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LWZhbWlseTogdGl0bGVGb250O1xyXG59XHJcblxyXG4vKiBTb3J0ZSBzdHJlZ2VyICovXHJcbi8qIC5uZ2EtbmF2LWxpbms6aG92ZXIge1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMzcsIDM3LCAzNyk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigzNywgMzcsIDM3KTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgMC44cyBlYXNlLWluLW91dDtcclxufSAqL1xyXG5cclxuLm5nYS1uYXYtbGluazphZnRlciB7XHJcbiAgY29udGVudDogJyc7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogMC4xcHg7XHJcbiAgd2lkdGg6IDBweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjhzIGVhc2UsIGJhY2tncm91bmQtY29sb3IgMC44cyBlYXNlO1xyXG59XHJcbi5uZ2EtbmF2LWxpbms6aG92ZXI6YWZ0ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYigwLCAwLCAwKTtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gIG1hcmdpbi1pbmxpbmU6IDF2dztcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLm5nYS1uYXZiYXIge1xyXG4gIC8qIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAxMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpOyAqL1xyXG4gIC8qIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMTFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTsgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5uZ2EtbG9nbyB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LWZhbWlseTogJ0RhdGFsZWdyZXlhVGhpbic7XHJcbiAgY29sb3I6IHJnYigzNywgMzcsIDM3KTtcclxuICBmb250LXN0eWxlOiBub3JtYWw7IFxyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxufVxyXG5cclxuLm5nYS1sb2dvOmhvdmVyIHtcclxuICBjb2xvcjogcmdiKDEzOCwgMTM4LCAxMzgpO1xyXG59XHJcblxyXG4ubmdhLWJ0bi1uYXZiYXIge1xyXG4gIC0tYnMtYnRuLWNvbG9yOiAjZmZmO1xyXG4gIC0tYnMtYnRuLWJnOiAjMTk3NmQyO1xyXG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogIzE5NzZkMjtcclxuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI2ZmZjtcclxuICAtLWJzLWJ0bi1ob3Zlci1iZzogIzBiNWVkNztcclxuICAtLWJzLWJ0bi1ob3Zlci1ib3JkZXItY29sb3I6ICMwYTU4Y2E7XHJcbn1cclxuXHJcblxyXG4ubmdhLWZvb3RlciB7XHJcbiAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgYm90dG9tOjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig0MCw0NSw3OCk7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLm5nYS1mb290ZXIgYSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4ubmdhLWZvb3RlciBhOmhvdmVyLFxyXG4ubmdhLWZvb3RlciBhOmZvY3VzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5uZ2EtZm9vdGVyIC5uZ2EtaGludCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5NzZkMjtcclxufVxyXG5cclxuLm5nYS1mb290ZXIgLm5nYS1oaW50OmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5uZ2EtYnRuLXNvY2lhbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC8qIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KTsgKi9cclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogNDVweFxyXG59XHJcblxyXG4ubmdhLWJ0bi1zb2NpYWwgaSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0N3B4XHJcbn1cclxuXHJcbi5uZ2EtYnRuLXNvY2lhbCBpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLm5nYS1idG4tc29jaWFsOmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpXHJcbn1cclxuXHJcbi5uZ2EtYnRuLXNvY2lhbCBpOmhvdmVyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi8qIExpbmtlZGluICovXHJcbi5uZ2EtYnRuLWxpbmtlZGluIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5uZ2EtYnRuLXNvY2lhbCBpIHtcclxuICBjb2xvcjogcmdiKDM3LCAzNywgMzcpO1xyXG59XHJcblxyXG4ubmdhLWJ0bi1saW5rZWRpbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODJjYTtcclxufVxyXG5cclxuLm5nYS1idG4tc29jaWFsIGk6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi8qIEluc3BpcmUgKi9cclxuLm5nYS1idG4taW5zcGlyZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubmdhLWJ0bi1pbnNwaXJlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLDE1NiwyMDMpO1xyXG59XHJcblxyXG4uaW5zcGlyZSB7XHJcbiAgd2lkdGg6IDEuNWVtO1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBtYXJnaW4tbGVmdDogMTFweDtcclxuICBmaWx0ZXI6IGludmVydCgwJSkgc2VwaWEoMSUpIHNhdHVyYXRlKDc0NzAlKSBodWUtcm90YXRlKDMzMGRlZykgYnJpZ2h0bmVzcyg5NSUpIGNvbnRyYXN0KDEwMCUpO1xyXG59XHJcblxyXG4uaW5zcGlyZTpob3ZlciB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMTAwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMjg4ZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDEwMiUpO1xyXG59XHJcblxyXG4vKiBPcmNpZCAqL1xyXG4ubmdhLWJ0bi1vcmNpZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ubmdhLWJ0bi1vcmNpZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVjNWI1YjtcclxufVxyXG5cclxuLm9yY2lkIHtcclxuICB3aWR0aDogMS41ZW07XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxMXB4O1xyXG4gIGZpbHRlcjogaW52ZXJ0KDAlKSBzZXBpYSgxJSkgc2F0dXJhdGUoNzQ3MCUpIGh1ZS1yb3RhdGUoMzMwZGVnKSBicmlnaHRuZXNzKDk1JSkgY29udHJhc3QoMTAwJSk7XHJcbn1cclxuXHJcbi5vcmNpZDpob3ZlciB7XHJcbiAgZmlsdGVyOiBpbnZlcnQoNzclKSBzZXBpYSgxOCUpIHNhdHVyYXRlKDE1ODklKSBodWUtcm90YXRlKDMwZGVnKSBicmlnaHRuZXNzKDEwMiUpIGNvbnRyYXN0KDgwJSk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xyXG4gIC5uYXZiYXI+LmNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcblxyXG4gIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTAwcHgpO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlTWFyaWVrZSB7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgLmxpbmtzIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDh2dyk7XHJcbiAgfVxyXG4gIFxyXG59IFxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxODAwcHgpIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcclxuICAubGlua3Mge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHZ3KTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTYwMHB4KSBhbmQgKG1pbi13aWR0aDogMTM4MHB4KSB7XHJcbiAgLmxpbmtzIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDN2dyk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzODBweCkgYW5kIChtaW4td2lkdGg6IDExNTBweCkge1xyXG4gIC5saW5rcyB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzdncpO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAxdnc7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTUwcHgpIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAubGlua3Mge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXZ3KTtcclxuICB9XHJcbiAgLm5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAwLjV2dztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSBhbmQgKG1pbi13aWR0aDogOTkxcHgpIHtcclxuICAubGlua3Mge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXZ3KTtcclxuICB9XHJcbiAgLm5hdi1pdGVtIHtcclxuICAgIHBhZGRpbmctaW5saW5lOiAwdnc7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBJY29uIHZpZXcgaGlkZSBpZiBubyBzcGFjZSovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NTBweCkgYW5kIChtaW4td2lkdGg6IDk5MXB4KSB7XHJcbiAgLmxpbmtzIHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjQ1MHB4KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcclxuICAubmdhLW5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAobWluLXdpZHRoOiAwcHgpIHtcclxuICAubmdhLW5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4085:
/*!****************************************************!*\
  !*** ./src/app/components/header/header.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderModule: () => (/* binding */ HeaderModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _header_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header-routing.module */ 7961);
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ 6471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class HeaderModule {
  static #_ = this.ɵfac = function HeaderModule_Factory(t) {
    return new (t || HeaderModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: HeaderModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _header_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HeaderModule, {
    declarations: [_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _header_routing_module__WEBPACK_IMPORTED_MODULE_0__.HeaderRoutingModule],
    exports: [_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent]
  });
})();

/***/ }),

/***/ 4759:
/*!******************************************!*\
  !*** ./src/app/instagram-dom.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstagramDOMService: () => (/* binding */ InstagramDOMService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class InstagramDOMService {
  processEmbeddedInstagramPosts() {
    instgrm.Embeds.process();
  }
  static #_ = this.ɵfac = function InstagramDOMService_Factory(t) {
    return new (t || InstagramDOMService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: InstagramDOMService,
    factory: InstagramDOMService.ɵfac
  });
}

/***/ }),

/***/ 7470:
/*!*******************************************************************!*\
  !*** ./src/app/modules/general/aboutme/aboutme-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutmeRoutingModule: () => (/* binding */ aboutmeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _aboutme_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutme.component */ 9999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _aboutme_component__WEBPACK_IMPORTED_MODULE_0__.aboutmeComponent,
  children: []
}];
class aboutmeRoutingModule {
  static #_ = this.ɵfac = function aboutmeRoutingModule_Factory(t) {
    return new (t || aboutmeRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: aboutmeRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](aboutmeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9999:
/*!**************************************************************!*\
  !*** ./src/app/modules/general/aboutme/aboutme.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   aboutmeComponent: () => (/* binding */ aboutmeComponent)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations */ 1757);
/* harmony import */ var _models_about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/about */ 1526);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 4699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _sanitized_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sanitized-html.pipe */ 7776);






function aboutmeComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 10)(1, "div", 11)(2, "div", 12)(3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "sanitizedHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "span", 16)(10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const about_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bs-target", "#panelsStayOpen-collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](about_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", "panelsStayOpen-collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 4, about_r1.html), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
  }
}
class aboutmeComponent {
  constructor(seoService) {
    this.seoService = seoService;
    const content = 'Marieke - About me';
    const title = 'Marieke - About me';
    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
    this.abouts = [];
  }
  ngOnInit() {
    this.abouts = [new _models_about__WEBPACK_IMPORTED_MODULE_1__.About("About me", ` <p>
            My field of research is high energy theory, more specifically quantum field theory and string theory. 
            I am interested in nonperturbative physics, phase structures, and defects, which I study using generalized symmetries and their 't Hooft anomalies.
            My work in string theory centers on constructions of supersymmetric quantum field theories,
            where I bring in tools from geometry and algebraic topology to understand strongly-coupled fixed points, defects, and dualities.
          </p>
          <p>
            I am currently employed as a <i>Research Assistant Professor</i> at the <i>Simons Center for Geometry and Physics</i>.
          </p> 
        `), new _models_about__WEBPACK_IMPORTED_MODULE_1__.About("About me 2", ` <p>
            My field of research is high energy theory, more specifically quantum field theory and string theory. 
            I am interested in nonperturbative physics, phase structures, and defects, which I study using generalized symmetries and their 't Hooft anomalies.
            My work in string theory centers on constructions of supersymmetric quantum field theories,
            where I bring in tools from geometry and algebraic topology to understand strongly-coupled fixed points, defects, and dualities.
          </p>
          <p>
            I am currently employed as a <i>Research Assistant Professor</i> at the <i>Simons Center for Geometry and Physics</i>.
          </p> 
        `), new _models_about__WEBPACK_IMPORTED_MODULE_1__.About("Education", ` 
        <p class="dateTitle">09/2022 &mdash; current</p>
          <p>
            <b>Research Assistant Professor</b><br>
            <i>SCGP, Stony Brook U.</i> | <i>Stony Brook, NY, USA</i><br>
          <\p>
          <p class="dateTitle">10/2018 &mdash; 09/2022</p>
          <p>
            <b>DPhil in Mathematics, Mathematical Physics</b><br>
            <i>Mathematical Institute, University of Oxford</i> | <i>Oxford, UK</i><br>
            Advisor: Prof. Sakura Schafer-Nameki. Thesis title: Strongly coupled quantum field theories from string theory.
          <\p>
          <p class="dateTitle">02/2016 &mdash; 04/2018</p>
          <p>
            <b>MSc in Quantum Physics</b> <br>
            <i>Niels Bohr Institute, University of Copenhagen</i> | <i>Copenhagen, DK</i><br>
            Thesis advisor: Prof. Niels Obers. Thesis title: Newton-Cartan gravity and 3D Chern-Simons theory.
          <\p>
          <p class="dateTitle">06/2016 &mdash; 09/2016</p>
          <p>
            <b>Summer Student</b> <br>
            <i>CERN Summer School, CERN</i> | <i>Geneva, CH</i><br>
            Project: The Information Paradox and Firewalls. Project advisor: Kyriakos Papadodimas.
          <\p>
          <p class="dateTitle"> 09/2014 &mdash; 06/2015</p>
          <p>
            <b>Full Year Undergraduate Exchange Programme</b><br>
            <i>Caltech, California Institute of Technology</i> | <i>Pasadena, CA, USA</i><br>
            Independent project: Dark matter study. Project supervisors: Clifford Cheung and Maria Spiropulu.
          <\p>
          <p class="dateTitle"> 09/2012 &mdash; 11/2015</p>
          <p>
            <b>BA in Physics</b> <br>
            <i>Niels Bohr Institute, University of Copenhagen</i> | <i>Copenhagen, DK</i><br>
            Thesis advisor: Prof. Jens Paaske. Thesis title: Fock-Darwin states for an elliptical spin-orbit coupled quantum well.
          <\p>   
        `), new _models_about__WEBPACK_IMPORTED_MODULE_1__.About("Awards and Scholarships", `<p>
        <b>Awards</b>
      <ul>
          <li>Award for <i>Contributing to the Department</i>, 2020. Awarded by the Mathematical Institute, University of Oxford for 
          <i>her contribution to research group activities, more specifically for organising student group meetings/presentations during 
          lockdown and ensuring new student involvement</i>.</li>
          <li><i>Lorup Honorary Graduate Award</i>, 2017. Awarded by the Lorup Foundation, Niels Bohr Institute, University of Copenhagen 
          for <i>academic excellence, as well as original and advanced level of MSc thesis work</i>.</li>
      </ul>
      <\p>
      <p>
      <b>Scholarships</b><br>
      <ul>
          <li><i>Milne Scholarship</i>, Apr 2022-Jul 2022. Awarded by the University of Oxford and the EPSRC for the full-time DPhil in 
          Mathematics.</li>
          <li><i>Oxford-Wolfson Marriott Graduate Scholarship</i>, Sep 2018-Apr 2022. Awarded by the University of Oxford and the EPSRC 
          for the full-time DPhil in Mathematics.</li>
      </ul>
      <\p> 
        `), new _models_about__WEBPACK_IMPORTED_MODULE_1__.About("Organization", `<p>
          <p>
          <b>Organization of Conferences and Workshops</b>
          <\p>
          <p>
          10/2021 Annual Mathematical Physics Student Conference, 2nd edition<br>
          University of Oxford | Oxford, UK
          <\p>
          <p>
          03/2021 Oxford Meets the Hologram, online group workshop on Holography with stu-
          dent, postdoc and faculty engagement
          University of Oxford | Oxford, UK
          <\p>
          <p>
          07/2020 Annual Mathematical Physics Student Conference, co-founder
          University of Oxford | Oxford, UK
          <\p>
          <p>
          09/2019 Geometry and Strings Conference 2019
          University of Oxford | Oxford, UK
          <\p>
          <p>
          <b>Professional Responsibilities and Contributions</b>
          <\p>
          <p>
          2020 -- 2022 Co-organizer of the weekly Oxford String Theory Journal Club
          University of Oxford | Oxford, UK
          <\p>
          <p>
          2020 -- 2022 Student Representative for the Mathematical Physics DPhil students
          University of Oxford | Oxford, UK
          <\p>
          <p>
          2021 Referee for Journal of High Energy Physics (JHEP)
          <\p>
          <p>
          Dec 2020,
          Dec 2021
          Undergraduate Admissions interviewer, respectively as junior interviewer with
          James Sparks, subsequently as senior interviewer
          Oriel College, University of Oxford | Oxford, UK
          <\p>
          <p>
          Sep 2016 Co-organizer of the Physics MSc social and academic introduction program
          Niels Bohr Institute, University of Copenhagen | Copenhagen, DK
          <\p>
          <p>
          Sep 2013 Co-organizer of the Physics BA social and academic introduction program
          Niels Bohr Institute, University of Copenhagen | Copenhagen, DK
          </p>
        `)];
  }
  static #_ = this.ɵfac = function aboutmeComponent_Factory(t) {
    return new (t || aboutmeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: aboutmeComponent,
    selectors: [["app-aboutme"]],
    decls: 16,
    vars: 2,
    consts: [[1, "container", "py-5"], [1, "row"], [1, "col-3", "pic"], [1, "col-3"], [1, "col-9"], ["src", "../../../../assets/params/images/aboutMe/About_me_dummy_billede2.jpg", 1, "marieke"], [1, "col-1"], [1, "col-8"], ["id", "accordionAbout", 1, "accordion-wrap"], ["class", "accordion collapsed", "data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", 4, "ngFor", "ngForOf"], ["data-bs-toggle", "collapse", "role", "button", "aria-expanded", "false", 1, "accordion", "collapsed"], [1, "teaser"], [1, "title"], ["data-bs-parent", "#accordionAbout", 1, "collapse"], [1, "content", 3, "innerHTML"], [1, "accordion-toggle"], [1, "one"], [1, "two"]],
    template: function aboutmeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Quality is at the heart of everything we do");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 7)(14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, aboutmeComponent_a_15_Template, 11, 6, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.abouts);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _sanitized_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SanitizedHtmlPipe],
    styles: ["@font-face {\n  font-family: titleFont;\n  src: url('Mediga.woff');\n}\n@media (min-width: 982px) {\n  .clear {\n    clear: both;\n    height: 0px;\n  }\n  .container {\n    max-width: 80%;\n  }\n}\n@media only screen and (max-width: 981px) and (min-width: 292px) {\n  .clear {\n    clear: both;\n    height: 250px;\n  }\n}\n.dateTitle {\n  text-align: right;\n  transform: translate(-3px, 40px);\n  margin-top: -35px;\n}\n\nh3 {\n  font-family: titleFont;\n  font-size: 30px;\n}\n\n.marieke {\n  position: absolute;\n  width: 31vw;\n  max-width: inherit;\n  opacity: 100%;\n  z-index: 1;\n  transform: translate(-35%);\n}\n\n.box {\n  height: 460px;\n  width: 295px;\n  transform: translate(148px, 100px);\n  background-color: rgb(37, 37, 37);\n}\n\n.pic {\n  padding-left: 0px;\n  padding-top: 0px;\n}\n\n.accordion-wrap {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.accordion-wrap a {\n  color: #000000;\n  text-decoration: none;\n}\n.accordion-wrap a:hover {\n  text-decoration: none;\n}\n.accordion-wrap .accordion {\n  position: relative;\n  border-top: 1px solid #000000;\n}\n.accordion-wrap .accordion:last-child {\n  border-bottom: 1px solid rgb(0, 0, 0);\n}\n.accordion-wrap .accordion .teaser {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  width: 100%;\n  padding: 24px 100px 24px 0;\n  position: relative;\n}\n.accordion-wrap .accordion .teaser:last-child {\n  border-bottom: 1px solid #000000;\n}\n.accordion-wrap .accordion .teaser .time {\n  margin-top: 5px;\n  width: 200px;\n}\n.accordion-wrap .accordion .teaser .title .theme {\n  opacity: 0.4;\n}\n@media (max-width: 990px) {\n  .accordion-wrap .accordion .teaser {\n    flex-direction: column;\n  }\n}\n.accordion-wrap .accordion .content {\n  padding: 0 80px 30px 20px;\n}\n@media (max-width: 1200px) {\n  .accordion-wrap .accordion .content {\n    padding: 0 120px 30px 0;\n  }\n}\n.accordion-wrap .accordion .accordion-toggle {\n  width: 60px;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(192, 192, 192, 0.253);\n  right: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 0.3s ease;\n}\n.accordion-wrap .accordion .accordion-toggle span {\n  background-color: #000000;\n  transition: 0.3s ease;\n}\n.accordion-wrap .accordion .accordion-toggle span.one {\n  height: 1px;\n  width: 20px;\n  position: absolute;\n  top: 50%;\n}\n.accordion-wrap .accordion .accordion-toggle span.two {\n  width: 1px;\n  height: 20px;\n  position: absolute;\n  left: 50%;\n  opacity: 1;\n  transform: rotate(90deg);\n}\n.accordion-wrap .accordion.collapsed .accordion-toggle span.two {\n  opacity: 1;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2Fib3V0bWUvYWJvdXRtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRDtBQUVBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQUFOO0VBR0Q7SUFDQyxjQUFBO0VBREE7QUFDRjtBQUdBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQUROO0FBQ0Y7QUFJQTtFQUNDLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUZEOztBQUtBO0VBQ0Msc0JBQUE7RUFDQSxlQUFBO0FBRkQ7O0FBS0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7QUFGRDs7QUFLRTtFQUNELGFBQUE7RUFDRyxZQUFBO0VBQ0Esa0NBQUE7RUFDSCxpQ0FBQTtBQUZEOztBQU1FO0VBQ0QsaUJBQUE7RUFDQSxnQkFBQTtBQUhEOztBQU9BO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUpEO0FBTUM7RUFDQyxjQUFBO0VBQ0EscUJBQUE7QUFKRjtBQU1FO0VBQ0MscUJBQUE7QUFKSDtBQVFDO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBQU5EO0FBUUU7RUFDQyxxQ0FBQTtBQU5IO0FBU0U7RUFDQyxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBUEg7QUFTRztFQUNDLGdDQUFBO0FBUEo7QUFVRztFQUNDLGVBQUE7RUFDQSxZQUFBO0FBUko7QUFhSTtFQUNDLFlBQUE7QUFYTDtBQWVHO0VBeEJEO0lBeUJFLHNCQUFBO0VBWkY7QUFDRjtBQWVFO0VBQ0MseUJBQUE7QUFiSDtBQWVHO0VBSEQ7SUFJRSx1QkFBQTtFQVpGO0FBQ0Y7QUFlRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQWJIO0FBZUc7RUFDQyx5QkFBQTtFQUNBLHFCQUFBO0FBYko7QUFlSTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBYkw7QUFnQkk7RUFDQyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtBQWRMO0FBc0JJO0VBQ0MsVUFBQTtFQUNELHVCQUFBO0FBcEJKIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcblx0Zm9udC1mYW1pbHk6IHRpdGxlRm9udDtcclxuXHRzcmM6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGFyYW1zL2Nzcy9NZWRpZ2Eud29mZik7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5ODJweCkge1xyXG4gICAgLmNsZWFyIHsgXHJcbiAgICAgICAgY2xlYXI6IGJvdGg7IFxyXG4gICAgICAgIGhlaWdodDogMHB4OyBcclxuICAgIH1cclxuXHJcblx0LmNvbnRhaW5lciB7XHJcblx0XHRtYXgtd2lkdGg6IDgwJTtcclxuXHR9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODFweCkgYW5kIChtaW4td2lkdGg6IDI5MnB4KSAge1xyXG4gICAgLmNsZWFyIHsgXHJcbiAgICAgICAgY2xlYXI6IGJvdGg7IFxyXG4gICAgICAgIGhlaWdodDogMjUwcHg7IFxyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZVRpdGxlIHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDsgXHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgNDBweCk7XHJcblx0bWFyZ2luLXRvcDogLTM1cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuXHRmb250LWZhbWlseTogdGl0bGVGb250O1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLm1hcmlla2Uge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMzF2dztcclxuXHRtYXgtd2lkdGg6IGluaGVyaXQ7XHJcblx0b3BhY2l0eTogMTAwJTtcclxuXHR6LWluZGV4OiAxO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNSUpO1xyXG59XHJcblxyXG4gIC5ib3gge1xyXG5cdGhlaWdodDogNDYwcHg7XHJcbiAgICB3aWR0aDogMjk1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxNDhweCwgMTAwcHgpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnBpYyB7XHJcblx0cGFkZGluZy1sZWZ0OiAwcHg7XHJcblx0cGFkZGluZy10b3A6IDBweDtcclxuICB9XHJcblxyXG5cclxuLmFjY29yZGlvbi13cmFwIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHJcblx0YSB7XHJcblx0XHRjb2xvcjogIzAwMDAwMDtcclxuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdFxyXG5cdFx0Jjpob3ZlciB7XHJcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0LmFjY29yZGlvbiB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwO1xyXG5cdFxyXG5cdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LnRlYXNlciB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRwYWRkaW5nOiAyNHB4IDEwMHB4IDI0cHggMDtcclxuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuXHRcdFx0JjpsYXN0LWNoaWxkIHtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDAwMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0LnRpbWUge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDVweDtcclxuXHRcdFx0XHR3aWR0aDogMjAwcHg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC50aXRsZSB7XHJcblxyXG5cdFx0XHRcdC50aGVtZSB7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAuNDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0LmNvbnRlbnQge1xyXG5cdFx0XHRwYWRkaW5nOiAwIDgwcHggMzBweCAyMHB4O1xyXG5cclxuXHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG5cdFx0XHRcdHBhZGRpbmc6IDAgMTIwcHggMzBweCAwO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC5hY2NvcmRpb24tdG9nZ2xlIHtcclxuXHRcdFx0d2lkdGg6IDYwcHg7XHJcblx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5MiwgMTkyLCAxOTIsIDAuMjUzKTtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuXHJcblx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcblx0XHRcdFx0dHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG5cclxuXHRcdFx0XHQmLm9uZSB7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDFweDtcclxuXHRcdFx0XHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0dG9wOiA1MCU7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQmLnR3byB7XHJcblx0XHRcdFx0XHR3aWR0aDogMXB4O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0bGVmdDogNTAlO1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ji5jb2xsYXBzZWQge1xyXG5cdFx0XHQuYWNjb3JkaW9uLXRvZ2dsZSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3Bhbi50d28ge1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    encapsulation: 2,
    data: {
      animation: [_animations__WEBPACK_IMPORTED_MODULE_0__.fade]
    }
  });
}

/***/ }),

/***/ 9477:
/*!***********************************************************!*\
  !*** ./src/app/modules/general/aboutme/aboutme.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutmeModule: () => (/* binding */ AboutmeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _aboutme_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutme.component */ 9999);
/* harmony import */ var _aboutme_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutme-routing.module */ 7470);
/* harmony import */ var _sanitized_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sanitized-html.pipe */ 7776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);





class AboutmeModule {
  static #_ = this.ɵfac = function AboutmeModule_Factory(t) {
    return new (t || AboutmeModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: AboutmeModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _aboutme_routing_module__WEBPACK_IMPORTED_MODULE_1__.aboutmeRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutmeModule, {
    declarations: [_aboutme_component__WEBPACK_IMPORTED_MODULE_0__.aboutmeComponent, _sanitized_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SanitizedHtmlPipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _aboutme_routing_module__WEBPACK_IMPORTED_MODULE_1__.aboutmeRoutingModule],
    exports: [_aboutme_component__WEBPACK_IMPORTED_MODULE_0__.aboutmeComponent]
  });
})();

/***/ }),

/***/ 7776:
/*!****************************************************************!*\
  !*** ./src/app/modules/general/aboutme/sanitized-html.pipe.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SanitizedHtmlPipe: () => (/* binding */ SanitizedHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SanitizedHtmlPipe {
  constructor(sanitized) {
    this.sanitized = sanitized;
  }
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
  static #_ = this.ɵfac = function SanitizedHtmlPipe_Factory(t) {
    return new (t || SanitizedHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "sanitizedHtml",
    type: SanitizedHtmlPipe,
    pure: true
  });
}

/***/ }),

/***/ 4023:
/*!********************************************************!*\
  !*** ./src/app/modules/general/home/home.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 553);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations */ 1757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 4699);




class HomeComponent {
  constructor(seoService) {
    this.seoService = seoService;
    this.name = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.name;
    this.angular = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.angular;
    this.bootstrap = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.bootstrap;
    this.fontawesome = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.application.fontawesome;
    const content = 'This application was developed with ' + this.angular + ' and ' + this.bootstrap + ' It applies Routing, Lazy loading and Progressive Web App (PWA)';
    const title = 'Marieke van Beest';
    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 11,
    vars: 1,
    consts: [[1, "container", "py-2"], [1, "right"], [1, "left"], ["src", "../../../../assets/params/images/home/marieke.jpg", 1, "marieke"], [1, "footCorrect"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Marieke van Beest ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " I am a Danish theoretical physicist currently living in Long Island, New York, USA. I am a postdoc at the Simons Center for Geometry and Physics. My research centers on problems in quantum field theory and string theory. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fade", undefined);
      }
    },
    styles: [".nga-container[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n\n@media (max-width: 992px) {\n  .nga-container[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n\n.nga-gradient[_ngcontent-%COMP%] {\n  padding: 3rem 0;\n  background: linear-gradient(225deg, #0d47a1, #42a5f5);\n}\n\n.nga-btn-home[_ngcontent-%COMP%] {\n  --bs-btn-color: #fff;\n  --bs-btn-border-color: white;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: black;\n  --bs-btn-hover-border-color: #0a58ca;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0a58ca;\n  --bs-btn-active-border-color: #0a53be;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #0d6efd;\n  --bs-btn-disabled-border-color: #0d6efd;\n}\n\n.nga-text-primary[_ngcontent-%COMP%] {\n  color: #0d6efd;\n}\n\n.nga-card-step[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 0.25rem;\n}\n\n.nga-card-step[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  text-decoration: none;\n}\n\n.nga-card-step[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #0d6efd;\n}\n\n.nga-card-step[_ngcontent-%COMP%]:hover {\n  border: 1px solid #99ccff;\n  color: #0d6efd;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;\n  transition: box-shadow 0.3s ease-in-out;\n}\n\n.nga-btn-guide[_ngcontent-%COMP%] {\n  border-radius: 10em;\n  font-size: .80rem;\n  font-weight: bold;\n  padding: .84rem 2.14rem;\n  text-transform: uppercase;\n  --bs-btn-color: #fff;\n  --bs-btn-bg: #1976d2;\n  --bs-btn-border-color: #1976d2;\n  --bs-btn-hover-color: white;\n  --bs-btn-hover-bg: #1976d2;\n  --bs-btn-hover-border-color: #1976d2;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #1976d2;\n  --bs-btn-active-border-color: #1976d2;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #1976d2;\n  --bs-btn-disabled-border-color: #1976d2;\n}\n\n.nga-btn-guide[_ngcontent-%COMP%]:hover {\n  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;\n  transition: box-shadow 0.3s ease-in-out;\n}\n\n.nga-text-guide[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n\n.right[_ngcontent-%COMP%] {\n  background-image: url('galaxy.jpg');\n  width: 2000px;\n  position: absolute;\n  right: 0px;\n  height: 1200px;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  filter: grayscale(80%) brightness(100%);\n}\n\n\n.left[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  left: 0px;\n  height: 1000px;\n  padding: 14% 18% 0% 8%;\n  color: #fff;\n}\n\n.footCorrect[_ngcontent-%COMP%] {\n  height: 800px;\n}\n\n.marieke[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 330px;\n  top: 60px;\n  opacity: 100%;\n  border: rgba(0, 0, 0, 0.25) solid 3px;\n}\n\n\n@media only screen and (max-width: 2400px) and (min-width: 1200px) {\n  .marieke[_ngcontent-%COMP%] {\n    right: -265px;\n  }\n  .left[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n\n@media only screen and (max-width: 1200px) and (min-width: 720px) {\n  .marieke[_ngcontent-%COMP%] {\n    right: -365px;\n  }\n  .left[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n}\n\n@media only screen and (max-width: 720px) and (min-width: 540px) {\n  .marieke[_ngcontent-%COMP%] {\n    width: 70%;\n    top: 30%;\n    transform: translate(-50%, 0px);\n  }\n  .left[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 16% 18% 0% 18%;\n    height: 1200px;\n  }\n  .footCorrect[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n}\n\n@font-face {\n  font-family: titleFont;\n  src: url('Mediga.woff');\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: titleFont;\n}\n\n@media only screen and (max-width: 540px) and (min-width: 300px) {\n  .marieke[_ngcontent-%COMP%] {\n    width: 70%;\n    top: 35%;\n    transform: translate(-50%, 0px);\n  }\n  .left[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    padding: 14% 18% 0% 18%;\n    height: 1000px;\n  }\n  .right[_ngcontent-%COMP%] {\n    height: 1000px;\n  }\n  .footCorrect[_ngcontent-%COMP%] {\n    height: 800px;\n  }\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLG9DQUFvQztFQUNwQyx1Q0FBdUM7RUFDdkMsMkJBQTJCO0VBQzNCLDJCQUEyQjtFQUMzQixxQ0FBcUM7RUFDckMsNERBQTREO0VBQzVELDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixzQ0FBc0M7RUFDdEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsY0FBYztFQUNkLCtFQUErRTtFQUMvRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLHVDQUF1QztFQUN2QywyQkFBMkI7RUFDM0IsMkJBQTJCO0VBQzNCLHFDQUFxQztFQUNyQyw0REFBNEQ7RUFDNUQsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxnRkFBZ0Y7RUFDaEYsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1DQUF1RTtFQUN2RSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qix1Q0FBdUM7QUFDekM7OztBQUdBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDOzs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLFFBQVE7SUFDUiwrQkFBK0I7RUFDakM7RUFDQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBbUQ7QUFDckQ7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5uZ2EtY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubmdhLWNvbnRhaW5lciB7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcbn1cclxuXHJcbi5uZ2EtZ3JhZGllbnQge1xyXG4gIHBhZGRpbmc6IDNyZW0gMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjMGQ0N2ExLCAjNDJhNWY1KTtcclxufVxyXG5cclxuLm5nYS1idG4taG9tZSB7XHJcbiAgLS1icy1idG4tY29sb3I6ICNmZmY7XHJcbiAgLS1icy1idG4tYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogI2ZmZjtcclxuICAtLWJzLWJ0bi1ob3Zlci1iZzogYmxhY2s7XHJcbiAgLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiAjMGE1OGNhO1xyXG4gIC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6IDQ5LCAxMzIsIDI1MztcclxuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICNmZmY7XHJcbiAgLS1icy1idG4tYWN0aXZlLWJnOiAjMGE1OGNhO1xyXG4gIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6ICMwYTUzYmU7XHJcbiAgLS1icy1idG4tYWN0aXZlLXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiAjZmZmO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWJnOiAjMGQ2ZWZkO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzBkNmVmZDtcclxufVxyXG5cclxuLm5nYS10ZXh0LXByaW1hcnkge1xyXG4gIGNvbG9yOiAjMGQ2ZWZkO1xyXG59XHJcblxyXG4ubmdhLWNhcmQtc3RlcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbi5uZ2EtY2FyZC1zdGVwIGEge1xyXG4gIGNvbG9yOiAjMGQ2ZWZkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm5nYS1jYXJkLXN0ZXAgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMwZDZlZmQ7XHJcbn1cclxuXHJcbi5uZ2EtY2FyZC1zdGVwOmhvdmVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOTljY2ZmO1xyXG4gIGNvbG9yOiAjMGQ2ZWZkO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDE1cHggMjVweCwgcmdiYSgwLCAwLCAwLCAwLjA1KSAwcHggNXB4IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4ubmdhLWJ0bi1ndWlkZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBlbTtcclxuICBmb250LXNpemU6IC44MHJlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAuODRyZW0gMi4xNHJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIC0tYnMtYnRuLWNvbG9yOiAjZmZmO1xyXG4gIC0tYnMtYnRuLWJnOiAjMTk3NmQyO1xyXG4gIC0tYnMtYnRuLWJvcmRlci1jb2xvcjogIzE5NzZkMjtcclxuICAtLWJzLWJ0bi1ob3Zlci1jb2xvcjogd2hpdGU7XHJcbiAgLS1icy1idG4taG92ZXItYmc6ICMxOTc2ZDI7XHJcbiAgLS1icy1idG4taG92ZXItYm9yZGVyLWNvbG9yOiAjMTk3NmQyO1xyXG4gIC0tYnMtYnRuLWZvY3VzLXNoYWRvdy1yZ2I6IDQ5LCAxMzIsIDI1MztcclxuICAtLWJzLWJ0bi1hY3RpdmUtY29sb3I6ICNmZmY7XHJcbiAgLS1icy1idG4tYWN0aXZlLWJnOiAjMTk3NmQyO1xyXG4gIC0tYnMtYnRuLWFjdGl2ZS1ib3JkZXItY29sb3I6ICMxOTc2ZDI7XHJcbiAgLS1icy1idG4tYWN0aXZlLXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWNvbG9yOiAjZmZmO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWJnOiAjMTk3NmQyO1xyXG4gIC0tYnMtYnRuLWRpc2FibGVkLWJvcmRlci1jb2xvcjogIzE5NzZkMjtcclxufVxyXG5cclxuLm5nYS1idG4tZ3VpZGU6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDE0cHggMjhweCwgcmdiYSgwLCAwLCAwLCAwLjIyKSAwcHggMTBweCAxMHB4O1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLm5nYS10ZXh0LWd1aWRlIHtcclxuICBjb2xvcjogIzE5NzZkMjtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL3BhcmFtcy9pbWFnZXMvaG9tZS9nYWxheHkuanBnKTtcclxuICB3aWR0aDogMjAwMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMHB4O1xyXG4gIGhlaWdodDogMTIwMHB4O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGZpbHRlcjogZ3JheXNjYWxlKDgwJSkgYnJpZ2h0bmVzcygxMDAlKTtcclxufVxyXG5cclxuXHJcbi5sZWZ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDBweDtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBwYWRkaW5nOiAxNCUgMTglIDAlIDglO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uZm9vdENvcnJlY3Qge1xyXG4gIGhlaWdodDogODAwcHg7XHJcbn1cclxuXHJcbi5tYXJpZWtlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMzMHB4O1xyXG4gIHRvcDogNjBweDtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIGJvcmRlcjogcmdiYSgwLCAwLCAwLCAwLjI1KSBzb2xpZCAzcHg7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDI0MDBweCkgYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gIC5tYXJpZWtlIHtcclxuICAgIHJpZ2h0OiAtMjY1cHg7XHJcbiAgfVxyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgLm1hcmlla2Uge1xyXG4gICAgcmlnaHQ6IC0zNjVweDtcclxuICB9XHJcbiAgLmxlZnQge1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIGFuZCAobWluLXdpZHRoOiA1NDBweCkge1xyXG4gIC5tYXJpZWtlIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDBweCk7XHJcbiAgfVxyXG4gIC5sZWZ0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTYlIDE4JSAwJSAxOCU7XHJcbiAgICBoZWlnaHQ6IDEyMDBweDtcclxuICB9XHJcbiAgLmZvb3RDb3JyZWN0IHtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IHRpdGxlRm9udDtcclxuICBzcmM6IHVybCguLi8uLi8uLi8uLi9hc3NldHMvcGFyYW1zL2Nzcy9NZWRpZ2Eud29mZik7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LWZhbWlseTogdGl0bGVGb250O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSBhbmQgKG1pbi13aWR0aDogMzAwcHgpIHtcclxuICAubWFyaWVrZSB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgdG9wOiAzNSU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpO1xyXG4gIH1cclxuICAubGVmdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0JSAxOCUgMCUgMTglO1xyXG4gICAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgfVxyXG4gIC5yaWdodCB7XHJcbiAgICBoZWlnaHQ6IDEwMDBweDtcclxuICB9XHJcbiAgLmZvb3RDb3JyZWN0IHtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_animations__WEBPACK_IMPORTED_MODULE_1__.fade]
    }
  });
}

/***/ }),

/***/ 1526:
/*!*************************************************!*\
  !*** ./src/app/modules/general/models/about.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   About: () => (/* binding */ About)
/* harmony export */ });
class About {
  constructor(title, html) {
    this.title = title;
    this.html = html;
  }
}

/***/ }),

/***/ 8184:
/*!**************************************************!*\
  !*** ./src/app/modules/general/models/author.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Author: () => (/* binding */ Author)
/* harmony export */ });
class Author {
  constructor(name, affiliation) {
    this.name = name;
    this.affiliation = affiliation;
  }
}

/***/ }),

/***/ 4896:
/*!*******************************************************!*\
  !*** ./src/app/modules/general/models/publication.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Publication: () => (/* binding */ Publication)
/* harmony export */ });
class Publication {
  constructor(title, pdfLink, body, authors, date, addInfo) {
    this.title = title;
    this.pdfLink = pdfLink;
    this.body = body;
    this.authors = authors;
    this.date = date;
    this.addInfo = addInfo;
  }
}

/***/ }),

/***/ 9935:
/*!********************************************************************************!*\
  !*** ./src/app/modules/general/outreach/instagram/instagram-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instagramRoutingModule: () => (/* binding */ instagramRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _instagram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instagram.component */ 4046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _instagram_component__WEBPACK_IMPORTED_MODULE_0__.instagramComponent,
  children: []
}];
class instagramRoutingModule {
  static #_ = this.ɵfac = function instagramRoutingModule_Factory(t) {
    return new (t || instagramRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: instagramRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](instagramRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4046:
/*!***************************************************************************!*\
  !*** ./src/app/modules/general/outreach/instagram/instagram.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   instagramComponent: () => (/* binding */ instagramComponent)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations */ 1757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _instagram_dom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../instagram-dom.service */ 4759);



class instagramComponent {
  constructor(instagram) {
    this.instagram = instagram;
  }
  ngOnInit() {
    this.instagram.processEmbeddedInstagramPosts();
  }
  static #_ = this.ɵfac = function instagramComponent_Factory(t) {
    return new (t || instagramComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_instagram_dom_service__WEBPACK_IMPORTED_MODULE_1__.InstagramDOMService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: instagramComponent,
    selectors: [["app-instagram"]],
    decls: 225,
    vars: 1,
    consts: [["data-instgrm-captioned", "", "data-instgrm-permalink", "https://www.instagram.com/p/CGhUzd9huhD/?utm_source=ig_embed&utm_campaign=loading", "data-instgrm-version", "14", 1, "instagram-media", 2, "background", "#FFF", "border", "0", "border-radius", "3px", "box-shadow", "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", "margin", "1px", "max-width", "540px", "min-width", "326px", "padding", "0", "width", "99.375%", "width", "-webkit-calc(100% - 2px)", "width", "calc(100% - 2px)"], [2, "padding", "16px"], ["href", "https://www.instagram.com/p/CGhUzd9huhD/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "background", "#FFFFFF", "line-height", "0", "padding", "0 0", "text-align", "center", "text-decoration", "none", "width", "100%"], [2, "display", "flex", "flex-direction", "row", "align-items", "center"], [2, "background-color", "#F4F4F4", "border-radius", "50%", "flex-grow", "0", "height", "40px", "margin-right", "14px", "width", "40px"], [2, "display", "flex", "flex-direction", "column", "flex-grow", "1", "justify-content", "center"], [2, "background-color", "#F4F4F4", "border-radius", "4px", "flex-grow", "0", "height", "14px", "margin-bottom", "6px", "width", "100px"], [2, "background-color", "#F4F4F4", "border-radius", "4px", "flex-grow", "0", "height", "14px", "width", "60px"], [2, "padding", "19% 0"], [2, "display", "block", "height", "50px", "margin", "0 auto 12px", "width", "50px"], ["width", "50px", "height", "50px", "viewBox", "0 0 60 60", "version", "1.1", "xmlns", "https://www.w3.org/2000/svg", 0, "xmlns", "xlink", "https://www.w3.org/1999/xlink"], ["stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["transform", "translate(-511.000000, -20.000000)", "fill", "#000000"], ["d", "M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"], [2, "padding-top", "8px"], [2, "color", "#3897f0", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "550", "line-height", "18px"], [2, "padding", "12.5% 0"], [2, "display", "flex", "flex-direction", "row", "margin-bottom", "14px", "align-items", "center"], [2, "background-color", "#F4F4F4", "border-radius", "50%", "height", "12.5px", "width", "12.5px", "transform", "translateX(0px) translateY(7px)"], [2, "background-color", "#F4F4F4", "height", "12.5px", "transform", "rotate(-45deg) translateX(3px) translateY(1px)", "width", "12.5px", "flex-grow", "0", "margin-right", "14px", "margin-left", "2px"], [2, "background-color", "#F4F4F4", "border-radius", "50%", "height", "12.5px", "width", "12.5px", "transform", "translateX(9px) translateY(-18px)"], [2, "margin-left", "8px"], [2, "background-color", "#F4F4F4", "border-radius", "50%", "flex-grow", "0", "height", "20px", "width", "20px"], [2, "width", "0", "height", "0", "border-top", "2px solid transparent", "border-left", "6px solid #f4f4f4", "border-bottom", "2px solid transparent", "transform", "translateX(16px) translateY(-4px) rotate(30deg)"], [2, "margin-left", "auto"], [2, "width", "0px", "border-top", "8px solid #F4F4F4", "border-right", "8px solid transparent", "transform", "translateY(16px)"], [2, "background-color", "#F4F4F4", "flex-grow", "0", "height", "12px", "width", "16px", "transform", "translateY(-4px)"], [2, "width", "0", "height", "0", "border-top", "8px solid #F4F4F4", "border-left", "8px solid transparent", "transform", "translateY(-4px) translateX(8px)"], [2, "display", "flex", "flex-direction", "column", "flex-grow", "1", "justify-content", "center", "margin-bottom", "24px"], [2, "background-color", "#F4F4F4", "border-radius", "4px", "flex-grow", "0", "height", "14px", "margin-bottom", "6px", "width", "224px"], [2, "background-color", "#F4F4F4", "border-radius", "4px", "flex-grow", "0", "height", "14px", "width", "144px"], [2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "line-height", "17px", "margin-bottom", "0", "margin-top", "8px", "overflow", "hidden", "padding", "8px 0 7px", "text-align", "center", "text-overflow", "ellipsis", "white-space", "nowrap"], ["href", "https://www.instagram.com/p/CGhUzd9huhD/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "normal", "line-height", "17px", "text-decoration", "none"], ["data-instgrm-captioned", "", "data-instgrm-permalink", "https://www.instagram.com/p/CGjtPpGBAJz/?utm_source=ig_embed&utm_campaign=loading", "data-instgrm-version", "14", 1, "instagram-media", 2, "background", "#FFF", "border", "0", "border-radius", "3px", "box-shadow", "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", "margin", "1px", "max-width", "540px", "min-width", "326px", "padding", "0", "width", "99.375%", "width", "-webkit-calc(100% - 2px)", "width", "calc(100% - 2px)"], ["href", "https://www.instagram.com/p/CGjtPpGBAJz/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "background", "#FFFFFF", "line-height", "0", "padding", "0 0", "text-align", "center", "text-decoration", "none", "width", "100%"], ["href", "https://www.instagram.com/p/CGjtPpGBAJz/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "normal", "line-height", "17px", "text-decoration", "none"], ["data-instgrm-captioned", "", "data-instgrm-permalink", "https://www.instagram.com/p/CGmMi-nhiq4/?utm_source=ig_embed&utm_campaign=loading", "data-instgrm-version", "14", 1, "instagram-media", 2, "background", "#FFF", "border", "0", "border-radius", "3px", "box-shadow", "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", "margin", "1px", "max-width", "540px", "min-width", "326px", "padding", "0", "width", "99.375%", "width", "-webkit-calc(100% - 2px)", "width", "calc(100% - 2px)"], ["href", "https://www.instagram.com/p/CGmMi-nhiq4/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "background", "#FFFFFF", "line-height", "0", "padding", "0 0", "text-align", "center", "text-decoration", "none", "width", "100%"], ["href", "https://www.instagram.com/p/CGmMi-nhiq4/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "normal", "line-height", "17px", "text-decoration", "none"], ["data-instgrm-captioned", "", "data-instgrm-permalink", "https://www.instagram.com/p/CGo0H8FBmtj/?utm_source=ig_embed&utm_campaign=loading", "data-instgrm-version", "14", 1, "instagram-media", 2, "background", "#FFF", "border", "0", "border-radius", "3px", "box-shadow", "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", "margin", "1px", "max-width", "540px", "min-width", "326px", "padding", "0", "width", "99.375%", "width", "-webkit-calc(100% - 2px)", "width", "calc(100% - 2px)"], ["href", "https://www.instagram.com/p/CGo0H8FBmtj/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "background", "#FFFFFF", "line-height", "0", "padding", "0 0", "text-align", "center", "text-decoration", "none", "width", "100%"], ["href", "https://www.instagram.com/p/CGo0H8FBmtj/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "normal", "line-height", "17px", "text-decoration", "none"], ["data-instgrm-captioned", "", "data-instgrm-permalink", "https://www.instagram.com/p/CGo0KS_hDzy/?utm_source=ig_embed&utm_campaign=loading", "data-instgrm-version", "14", 1, "instagram-media", 2, "background", "#FFF", "border", "0", "border-radius", "3px", "box-shadow", "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", "margin", "1px", "max-width", "540px", "min-width", "326px", "padding", "0", "width", "99.375%", "width", "-webkit-calc(100% - 2px)", "width", "calc(100% - 2px)"], ["href", "https://www.instagram.com/p/CGo0KS_hDzy/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "background", "#FFFFFF", "line-height", "0", "padding", "0 0", "text-align", "center", "text-decoration", "none", "width", "100%"], ["href", "https://www.instagram.com/p/CGo0KS_hDzy/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "normal", "line-height", "17px", "text-decoration", "none"], ["data-instgrm-captioned", "", "data-instgrm-permalink", "https://www.instagram.com/p/CGrY96bhrJL/?utm_source=ig_embed&utm_campaign=loading", "data-instgrm-version", "14", 1, "instagram-media", 2, "background", "#FFF", "border", "0", "border-radius", "3px", "box-shadow", "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)", "margin", "1px", "max-width", "540px", "min-width", "326px", "padding", "0", "width", "99.375%", "width", "-webkit-calc(100% - 2px)", "width", "calc(100% - 2px)"], ["href", "https://www.instagram.com/p/CGrY96bhrJL/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "background", "#FFFFFF", "line-height", "0", "padding", "0 0", "text-align", "center", "text-decoration", "none", "width", "100%"], ["href", "https://www.instagram.com/p/CGrY96bhrJL/?utm_source=ig_embed&utm_campaign=loading", "target", "_blank", 2, "color", "#c9c8cd", "font-family", "Arial,sans-serif", "font-size", "14px", "font-style", "normal", "font-weight", "normal", "line-height", "17px", "text-decoration", "none"]],
    template: function instagramComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Post... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "blockquote", 0)(4, "div", 1)(5, "a", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 6)(10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "svg", 10)(14, "g", 11)(15, "g", 12)(16, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14)(19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "View this post on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 17)(23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 18)(25, "div", 19)(26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 22)(29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "div", 25)(32, "div", 26)(33, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 29)(36, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "p", 31)(38, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "A post shared by Kvinder I Fysik (@kvinderifysik)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "blockquote", 33)(41, "div", 1)(42, "a", 34)(43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](46, "div", 6)(47, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "svg", 10)(51, "g", 11)(52, "g", 12)(53, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 14)(56, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "View this post on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](58, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 17)(60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "div", 18)(62, "div", 19)(63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](65, "div", 22)(66, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](68, "div", 25)(69, "div", 26)(70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](72, "div", 29)(73, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 31)(75, "a", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "A post shared by Kvinder I Fysik (@kvinderifysik)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "blockquote", 36)(78, "div", 1)(79, "a", 37)(80, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "div", 6)(84, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](85, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "svg", 10)(88, "g", 11)(89, "g", 12)(90, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 14)(93, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "View this post on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](95, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 17)(97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "div", 18)(99, "div", 19)(100, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](102, "div", 22)(103, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](105, "div", 25)(106, "div", 26)(107, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "div", 29)(110, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "p", 31)(112, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "A post shared by Kvinder I Fysik (@kvinderifysik)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "blockquote", 39)(115, "div", 1)(116, "a", 40)(117, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](118, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](120, "div", 6)(121, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "svg", 10)(125, "g", 11)(126, "g", 12)(127, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](128, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 14)(130, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "View this post on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](132, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "div", 17)(134, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](135, "div", 18)(136, "div", 19)(137, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](138, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "div", 22)(140, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](142, "div", 25)(143, "div", 26)(144, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "div", 29)(147, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "p", 31)(149, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](150, "A post shared by Kvinder I Fysik (@kvinderifysik)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "blockquote", 42)(152, "div", 1)(153, "a", 43)(154, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](155, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](157, "div", 6)(158, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](159, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "svg", 10)(162, "g", 11)(163, "g", 12)(164, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](165, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](166, "div", 14)(167, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](168, "View this post on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](169, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 17)(171, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](172, "div", 18)(173, "div", 19)(174, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](176, "div", 22)(177, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](178, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](179, "div", 25)(180, "div", 26)(181, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](182, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](183, "div", 29)(184, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](185, "p", 31)(186, "a", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](187, "A post shared by Kvinder I Fysik (@kvinderifysik)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "blockquote", 45)(189, "div", 1)(190, "a", 46)(191, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](192, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](194, "div", 6)(195, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](196, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](197, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "svg", 10)(199, "g", 11)(200, "g", 12)(201, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](202, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "div", 14)(204, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](205, "View this post on Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](206, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](207, "div", 17)(208, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](209, "div", 18)(210, "div", 19)(211, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](213, "div", 22)(214, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](216, "div", 25)(217, "div", 26)(218, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](219, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](220, "div", 29)(221, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "p", 31)(223, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](224, "A post shared by Kvinder I Fysik (@kvinderifysik)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fade", undefined);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_animations__WEBPACK_IMPORTED_MODULE_0__.fade]
    }
  });
}

/***/ }),

/***/ 1178:
/*!************************************************************************!*\
  !*** ./src/app/modules/general/outreach/instagram/instagram.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstagramModule: () => (/* binding */ InstagramModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _instagram_dom_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../instagram-dom.service */ 4759);
/* harmony import */ var _instagram_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram-routing.module */ 9935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class InstagramModule {
  static #_ = this.ɵfac = function InstagramModule_Factory(t) {
    return new (t || InstagramModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: InstagramModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    providers: [_instagram_dom_service__WEBPACK_IMPORTED_MODULE_0__.InstagramDOMService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _instagram_routing_module__WEBPACK_IMPORTED_MODULE_1__.instagramRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](InstagramModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _instagram_routing_module__WEBPACK_IMPORTED_MODULE_1__.instagramRoutingModule]
  });
})();

/***/ }),

/***/ 7114:
/*!*********************************************************************!*\
  !*** ./src/app/modules/general/outreach/outreach-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outreachRoutingModule: () => (/* binding */ outreachRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _outreach_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outreach.component */ 6128);
/* harmony import */ var _instagram_instagram_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instagram/instagram.component */ 4046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);





const routes = [{
  path: '',
  component: _outreach_component__WEBPACK_IMPORTED_MODULE_0__.outreachComponent,
  children: [
  //{ path: '', component: instagramComponent },
  {
    path: 'instagram',
    component: _instagram_instagram_component__WEBPACK_IMPORTED_MODULE_1__.instagramComponent
  }, {
    path: '',
    component: _instagram_instagram_component__WEBPACK_IMPORTED_MODULE_1__.instagramComponent
  }, {
    path: 'mapping',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_general_outreach_mapping_mapping_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../outreach/mapping/mapping.module */ 1806)).then(mod => mod.MappingModule)
  }]
}];
class outreachRoutingModule {
  static #_ = this.ɵfac = function outreachRoutingModule_Factory(t) {
    return new (t || outreachRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: outreachRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](outreachRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 6128:
/*!****************************************************************!*\
  !*** ./src/app/modules/general/outreach/outreach.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   outreachComponent: () => (/* binding */ outreachComponent)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations */ 1757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 4699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class outreachComponent {
  constructor(seoService) {
    this.seoService = seoService;
    const content = 'Marieke - Outreach';
    const title = 'Marieke - Outreach';
    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }
  static #_ = this.ɵfac = function outreachComponent_Factory(t) {
    return new (t || outreachComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: outreachComponent,
    selectors: [["app-outreach"]],
    decls: 13,
    vars: 1,
    consts: [[1, "container", "py-2"], ["routerLink", "/outreach/instagram"], ["routerLink", "/outreach/mapping"]],
    template: function outreachComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "outreach workz!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ul")(4, "li")(5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "li")(8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Mapping");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Child Routes Result");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fade", undefined);
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
    styles: ["@media (min-width: 982px) {\n    .clear[_ngcontent-%COMP%] { \n        clear: both; \n        height: 0px; \n    }\n}\n@media only screen and (max-width: 981px) and (min-width: 292px)  {\n    .clear[_ngcontent-%COMP%] { \n        clear: both; \n        height: 250px; \n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL291dHJlYWNoL291dHJlYWNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7QUFDSjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDk4MnB4KSB7XHJcbiAgICAuY2xlYXIgeyBcclxuICAgICAgICBjbGVhcjogYm90aDsgXHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7IFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgxcHgpIGFuZCAobWluLXdpZHRoOiAyOTJweCkgIHtcclxuICAgIC5jbGVhciB7IFxyXG4gICAgICAgIGNsZWFyOiBib3RoOyBcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4OyBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_animations__WEBPACK_IMPORTED_MODULE_0__.fade]
    }
  });
}

/***/ }),

/***/ 4494:
/*!*************************************************************!*\
  !*** ./src/app/modules/general/outreach/outreach.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutreachModule: () => (/* binding */ OutreachModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _outreach_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outreach.component */ 6128);
/* harmony import */ var _outreach_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outreach-routing.module */ 7114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class OutreachModule {
  static #_ = this.ɵfac = function OutreachModule_Factory(t) {
    return new (t || OutreachModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: OutreachModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _outreach_routing_module__WEBPACK_IMPORTED_MODULE_1__.outreachRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OutreachModule, {
    declarations: [_outreach_component__WEBPACK_IMPORTED_MODULE_0__.outreachComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _outreach_routing_module__WEBPACK_IMPORTED_MODULE_1__.outreachRoutingModule],
    exports: [_outreach_component__WEBPACK_IMPORTED_MODULE_0__.outreachComponent]
  });
})();

/***/ }),

/***/ 4471:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/general/publications/publications-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publicationsRoutingModule: () => (/* binding */ publicationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publications.component */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _publications_component__WEBPACK_IMPORTED_MODULE_0__.publicationsComponent,
  children: []
}];
class publicationsRoutingModule {
  static #_ = this.ɵfac = function publicationsRoutingModule_Factory(t) {
    return new (t || publicationsRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: publicationsRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](publicationsRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 7797:
/*!************************************************************************!*\
  !*** ./src/app/modules/general/publications/publications.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   publicationsComponent: () => (/* binding */ publicationsComponent)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations */ 1757);
/* harmony import */ var _models_publication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/publication */ 4896);
/* harmony import */ var _models_author__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/author */ 8184);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 4699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






function publicationsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10)(2, "a", 11)(3, "h4", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 13)(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 14)(11, "div", 15)(12, "div", 2)(13, "div", 16)(14, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " Abstract: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br")(17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 3)(19, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const pub_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-bs-target", "#panelsStayOpen-collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pub_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", pub_r1.authors, " ", pub_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pub_r1.addInfo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", "panelsStayOpen-collapse" + i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("href", pub_r1.pdfLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", pub_r1.body, " ");
  }
}
class publicationsComponent {
  constructor(seoService) {
    this.seoService = seoService;
    const content = 'Marieke - Publications';
    const title = 'Marieke - Publications';
    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
    this.publications = [];
  }
  ngOnInit() {
    this.publications = [new _models_publication__WEBPACK_IMPORTED_MODULE_1__.Publication("Monopoles, Scattering, and Generalized Symmetries", "https://arxiv.org/abs/2306.07318", "We reconsider the problem of electrically charged, massless fermions scattering off magnetic monopoles. The interpretation of the outgoing states has long been a puzzle as, in certain circumstances, they necessarily carry fractional quantum numbers. We argue that consistency requires such outgoing particles to be attached to a topological co-dimension 1 surface, which ends on the monopole. This surface cannot participate in a 2-group with the magnetic 1-form symmetry and is often non-invertible. Equivalently, the outgoing radiation lies in a twisted sector and not in the original Fock space. The outgoing radiation therefore not only carries unconventional flavor quantum numbers, but is often trailed by a topological field theory. We exemplify these ideas in the 1+1 dimensional, chiral 3450 model which shares many of the same features. We comment on the effects of gauge field fluctuations on the lowest angular momentum fermion scattering states in the presence of a magnetic monopole. While, to leading order, these zero modes can penetrate into the monopole core, in the full theory some of the zero modes are lifted and develop a small centrifugal barrier. The dynamics of the zero modes is that of a multi-flavor Schwinger model with a space-dependent gauge coupling. Symmetries and anomalies constrain the fate of the pseudo-zero modes.", this.getAuthorString([new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Marieke van Beest", "Stony Brook U., New York, SCGP"), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Philip Boyle Smith", "Tokyo U., IPMU"), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Diego Delmastro", "Stony Brook U., New York, SCGP"), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Zohar Komargodski", "Stony Brook U., New York, SCGP"), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("David Tong", "Cambridge U., DAMTP")]), "(Jun 12, 2023)", "e-Print: 2306.07318 [hep-th]"), new _models_publication__WEBPACK_IMPORTED_MODULE_1__.Publication("Symmetry TFTs for 3d QFTs from M-theory", "https://arxiv.org/abs/2210.03703", "We derive the Symmetry Topological Field Theories (SymTFTs) for 3d super symmetric quantum field theories (QFTs) constructed in M-theory either via geometric engineering or holography. These 4d SymTFTs encode the symmetry structures of the 3d QFTs,for instance the generalized global symmetries and their ’t Hooft anomalies. Using differential cohomology, we derive the SymTFT by reducing M-theory on a 7-manifold Y7, which either is the link of a conical Calabi-Yau four-fold or part of an AdS4×Y7 holographic solution. In the holographic setting we first consider the 3d N=6 ABJ(M) theories and derive the BF-couplings, which allow the identification of the global form of the gauge group,as well as 1-form symmetry anomalies. Secondly, we compute the SymTFT for 3d N=2 quiver gauge theories whose holographic duals are based on Sasaki-Einstein 7-manifolds of type Y7=Yp,k(CP2). The SymTFT encodes 0-and 1-form symmetries, as well as potential ’t Hooft anomalies between these. Furthermore, by studying the gapped boundary conditions of the SymTFT we constrain the allowed choices for U(1) Chern-Simons terms in the dual field theory.", this.getAuthorString([new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Marieke van Beest", "Stony Brook U., New York, SCGP"), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Dewi S.W. Gould", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Sakura Schafer-Nameki", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Yi-Nan Wang", "Peking U., Maryland U., Peking U., CHEP")]), "(Oct 7, 2022)", "Published in: JHEP 02 (2023) 226 • e-Print: 2210.03703 [hep-th]"), new _models_publication__WEBPACK_IMPORTED_MODULE_1__.Publication("Connecting 5d Higgs branches via Fayet-Iliopoulos deformations", "https://arxiv.org/abs/2110.02872", "We describe how the geometry of the Higgs branch of 5d superconformal field theories is transformed under movement along the extended Coulomb branch. Working directly with the (unitary) magnetic quiver, we demonstrate a correspondence between Fayet-Iliopoulos deformations in 3d and 5d mass deformations. When the Higgs branch has multiple cones, characterised by a collection of magnetic quivers, the mirror map is not globally well-defined, however we are able to utilize the correspondence to establish a local version of mirror symmetry. We give several detailed examples of deformations, including decouplings and weak-coupling limits, in (Dn, Dn) conformal matter theories, Tn theory and its parent Pn, for which we find new Lagrangian descriptions given by quiver gauge theories with fundamental and anti-symmetric matter.", this.getAuthorString([new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Marieke van Beest", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Simone Giacomelli", "Oxford U., Inst. Math., Milan Bicocca U.")]), "(Oct 6, 2021)", "Published in: JHEP 12 (2021) 202 • e-Print: 2110.02872 [hep-th]"), new _models_publication__WEBPACK_IMPORTED_MODULE_1__.Publication("Holography, 1-form symmetries, and confinement", "https://arxiv.org/abs/2104.12764", "We study confinement in 4d N=1 SU(N) Super-Yang Mills (SYM) from a holographic point of view, focusing on the 1-form symmetry and its relation to chiral symmetry breaking (Xsb). We identify the topological couplings in the 5d truncation of the Klebanov-Strassler solution that determine the 1-form symmetry and its ’t Hooft anomalies. One coupling is a mixed 0-/1-form symmetry anomaly related to Xsb in gapped confining vacua. In the gravity dual we also identify the infrared 4d topological field theory which realizes Xsb and matches the mixed anomaly. Finally, complementing this, we derive the chiral and mixed anomalies from the little string theory realization of pure SYM.", this.getAuthorString([new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Fabio Apruzzi", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Marieke van Beest", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Dewi S.W. Gould", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Sakura Schafer-Nameki", "Oxford U., Inst. Math.")]), "(Apr 26, 2021)", "Published in: Phys.Rev.D 104 (2021) 6, 066005 • e-Print: 2104.12764 [hep-th]"), new _models_publication__WEBPACK_IMPORTED_MODULE_1__.Publication("Lectures on the Swampland Program in String Compactifications", "https://arxiv.org/abs/2102.01111", "The Swampland program aims to determine the constraints that an effective field theory must satisfy to be consistent with a UV embedding in a quantum gravity theory. Different proposals have been formulated in the form of Swampland conjectures. In these lecture notes, we provide a pedagogical introduction to the most important Swampland conjectures, their connections and their realization in string theory compactifications. The notes are based on the series of lectures given by Irene Valenzuela at the online QFT and Geometry summer school in July 2020.", this.getAuthorString([new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Marieke van Beest", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("José Calderón-Infante", "CSIC, Madrid"), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Delaram Mirfendereski", "Bogazici U."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Irene Valenzuela", "Jefferson Lab")]), "(Feb 1, 2021)", "Published in: Phys.Rept. 989 (2022) 1-50 • e-Print: 2102.01111 [hep-th]"), new _models_publication__WEBPACK_IMPORTED_MODULE_1__.Publication("(5d RG-flow) Trees in the Tropical Rain Forest", "https://arxiv.org/abs/2011.07033", "5d superconformal field theories (SCFTs) can be obtained from 6d SCFTs by circle compactification and mass deformation. Successive decoupling of hypermultiplet matter and RG-flow generates a decoupling tree of descendant 5d SCFTs. In this paper we determine the magnetic quivers and Hasse diagrams, that encode the Higgs branches of 5d SCFTs, for entire decoupling trees. Central to this undertaking is the approach in [1], which, starting from the generalized toric polygons (GTPs) dual to 5-brane webs/tropical curves, provides a systematic and succinct derivation of magnetic quivers and their Hasse diagrams. The decoupling in the GTP description is straightforward, and generalizes the standard flop transitions of curves in toric polygons. We apply this approach to a large class of 5d KK-theories, and compute the Higgs branches for their descendants. In particular we determine the decoupling tree for all rank 2 5d SCFTs. For each tree, we also identify the flavor symmetry algebras from the magnetic quivers, including non-simply-laced flavor symmetries.", this.getAuthorString([new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Marieke van Beest", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Antoine Bourget", "Imperial Coll., London"), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Julius Eckhard", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Sakura Schäfer-Nameki", "Oxford U., Inst. Math.")]), "(Nov 13, 2020)", "Published in: JHEP 03 (2021) 241 • e-Print: 2011.07033 [hep-th]"), new _models_publication__WEBPACK_IMPORTED_MODULE_1__.Publication("(Symplectic) Leaves and (5d Higgs) Branches in the Poly(go)nesian Tropical Rain Forest", "https://arxiv.org/abs/2008.05577", "We derive the structure of the Higgs branch of 5d superconformal field theories or gauge theories from their realization as a generalized toric polygon (or dot diagram). This approach is motivated by a dual, tropical curve decomposition of the (p, q) 5-brane-web system. We define an edge coloring, which provides a decomposition of the generalized toric polygon into a refined Minkowski sum of sub-polygons, from which we compute the magnetic quiver. The Coulomb branch of the magnetic quiver is then conjecturally identified with the 5d Higgs branch. Furthermore, from partial resolutions, we identify the symplectic leaves of the Higgs branch and thereby the entire foliation structure. In the case of strictly toric polygons, this approach reduces to the description of deformations of the Calabi-Yau singularities in terms of Minkowski sums.", this.getAuthorString([new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Marieke van Beest", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Antoine Bourget", "Imperial Coll., London"), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Julius Eckhard", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Sakura Schäfer-Nameki", "Oxford U., Inst. Math.")]), "(Aug 12, 2020)", "Published in: JHEP 11 (2020) 124 • e-Print: 2008.05577 [hep-th]"), new _models_publication__WEBPACK_IMPORTED_MODULE_1__.Publication("I/C-Extremization in M/F-Duality", "https://arxiv.org/abs/2008.05577", "We study the holographic dual to I/C-extremization for 2d (0,2) superconformal field theories (SCFTs) that have an AdS3 dual realized in Type IIB with varying axio-dilaton, i.e. F-theory. M/F-duality implies that such AdS3 solutions can be mapped to AdS2 solutions in M-theory, which are holographically dual to superconformal quantum mechanics (SCQM), obtained by dimensional reduction of the 2d SCFTs. We analyze the corresponding map between holographic I/C-extremization in F-theory and I-extremization in M-theory, where in general the latter receives corrections relative to the F-theory result.", this.getAuthorString([new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Marieke van Beest", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Sebastjan Cizel", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("Sakura Schäfer-Nameki", "Oxford U., Inst. Math."), new _models_author__WEBPACK_IMPORTED_MODULE_2__.Author("James Sparks", "Oxford U., Inst. Math.")]), "(Apr 27, 2020)", "Published in: SciPost Phys. 9 (2020) 3, 029 • e-Print: 2004.04020 [hep-th]")];
  }
  getAuthorString(authors) {
    let res = "";
    authors.forEach(element => {
      res += element.name + " (" + element.affiliation + "), ";
    });
    return res.slice(0, -2);
  }
  static #_ = this.ɵfac = function publicationsComponent_Factory(t) {
    return new (t || publicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_3__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: publicationsComponent,
    selectors: [["app-publications"]],
    decls: 16,
    vars: 2,
    consts: [[1, "container", "py-2"], [1, "container"], [1, "row"], [1, "col-1"], [1, "col-10"], [1, "col-1", "col-md-1"], [1, "col-12", "col-md-10"], ["id", "accordion", "role", "tablist", 1, "panel-group", "accordion"], ["class", "panel panel-default", 4, "ngFor", "ngForOf"], [1, "panel", "panel-default"], ["role", "tab", 1, "panel-heading"], ["id", "collapse", "type", "button", "data-bs-toggle", "collapse", 1, "collapsed"], [1, "panel-title"], [1, "authors"], ["role", "tabpanel", 1, "panel-collapse", "collapse", "in"], [1, "panel-body"], [1, "col-9", "col-md-11"], [2, "margin-top", "20px"], ["target", "_blank", "type", "button", 1, "nga-btn-arxiv"], ["src", "../../../../assets/icons/arxiv.svg", 1, "arxiv"]],
    template: function publicationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4)(6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Publications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Here is a list of my papers, including links to pdf-files which are freely accessible to anyone. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 6)(14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, publicationsComponent_div_15_Template, 23, 8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.publications);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
    styles: ["@media (min-width: 982px) {\n    .clear[_ngcontent-%COMP%] { \n        clear: both; \n        height: 0px; \n    }\n}\n@media only screen and (max-width: 981px) and (min-width: 292px)  {\n    .clear[_ngcontent-%COMP%] { \n        clear: both; \n        height: 250px; \n    }\n}\n\n#accordion[_ngcontent-%COMP%]   .panel[_ngcontent-%COMP%]{\n    border: none;\n    border-radius: 5px;\n    box-shadow: none;\n    margin-bottom: 10px;\n    background: transparent;\n}\n#accordion[_ngcontent-%COMP%]   .panel-heading[_ngcontent-%COMP%]{\n    padding: 0;\n    border: none;\n    border-radius: 5px;\n    background: transparent;\n    position: relative;\n}\n.panel-heading[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\n    display: block;\n    padding: 15px 45px 0.5px 25px;\n    margin-bottom: 0px;\n    margin-top: 18px;\n    background: rgba(0,0,0,0.15);\n    color: rgba(0,0,0,1);\n    letter-spacing: 1px;\n    border: none;\n    border-radius: 3px;\n    position: relative;\n    text-decoration: none;\n}\n.panel-heading[_ngcontent-%COMP%]    > a.collapsed[_ngcontent-%COMP%]{ border: none; }\n.panel-heading[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:before, .panel-heading[_ngcontent-%COMP%]    > a.collapsed[_ngcontent-%COMP%]:before{\n    content: \"\\f107\";\n    width: 30px;\n    height: 30px;\n    line-height: 27px;\n    text-align: center;\n    position: absolute;\n    top: 15px;\n    right: 30px;\n    transform: rotate(180deg);\n    transition: all .4s cubic-bezier(0.080, 1.090, 0.320, 1.275);\n    font-family: \"Font Awesome 5 Free\";\n    font-size: 30px;\n    font-weight: 900;\n    color: rgba(37, 37, 37);\n}\n.panel-heading[_ngcontent-%COMP%]    > a.collapsed[_ngcontent-%COMP%]:before{\n    color: rgba(255,255,255,0.5);\n    transform: rotate(0deg);\n}\n\n#accordion[_ngcontent-%COMP%]   .panel-title[_ngcontent-%COMP%]{\n    font-family: 'Montserrat', sans-serif;\n    font-size: 18px;\n    font-weight: 900;\n    color: rgba(37, 37, 37);\n}\n#accordion[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]{\n    padding: 20px 30px;\n    background: rgba(0,0,0,0.6);\n    font-size: 15px;\n    color: #fff;\n    line-height: 28px;\n    letter-spacing: 1px;\n    border-top: none;\n    border-radius: 3px;\n}\n\n.authors[_ngcontent-%COMP%]{\n    font-family: 'Montserrat', sans-serif;\n    font-weight: 500;\n    font-size: 14px;\n    \n\n}\n\n.nga-btn-arxiv[_ngcontent-%COMP%] {\n    background-color: rgb(217,217,217);\n    position: relative;\n    z-index: 1;\n    display: inline-block;\n    padding: 0;\n    margin: 10px;\n    overflow: hidden;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n    \n\n\n    transition: all 0.4s ease-in-out;\n    width: 45px;\n    height: 45px\n}\n\n.nga-btn-arxiv[_ngcontent-%COMP%]:hover {\nbackground-color: rgb(112,0,0);\n}\n\n.arxiv[_ngcontent-%COMP%] {\n    width: 1.5em;\n    margin-top: 9px;\n    margin-left: 11.5px;\n    filter: invert(12%) sepia(48%) saturate(4591%) hue-rotate(350deg) brightness(84%) contrast(119%);\n}\n\n.arxiv[_ngcontent-%COMP%]:hover {\nfilter: invert(100%) sepia(0%) saturate(0%) hue-rotate(163deg) brightness(110%) contrast(101%);\n}\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFdBQVc7SUFDZjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0EsK0JBQStCLFlBQVksRUFBRTtBQUM3Qzs7SUFFSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLHlCQUF5QjtJQUN6Qiw0REFBNEQ7SUFDNUQsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCOzJGQUN1RjtJQUV2RixnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYO0FBQ0o7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnR0FBZ0c7QUFDcEc7O0FBRUE7QUFDQSw4RkFBOEY7QUFDOUYiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1pbi13aWR0aDogOTgycHgpIHtcclxuICAgIC5jbGVhciB7IFxyXG4gICAgICAgIGNsZWFyOiBib3RoOyBcclxuICAgICAgICBoZWlnaHQ6IDBweDsgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODFweCkgYW5kIChtaW4td2lkdGg6IDI5MnB4KSAge1xyXG4gICAgLmNsZWFyIHsgXHJcbiAgICAgICAgY2xlYXI6IGJvdGg7IFxyXG4gICAgICAgIGhlaWdodDogMjUwcHg7IFxyXG4gICAgfVxyXG59XHJcblxyXG4jYWNjb3JkaW9uIC5wYW5lbHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuI2FjY29yZGlvbiAucGFuZWwtaGVhZGluZ3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4ucGFuZWwtaGVhZGluZyA+IGF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDE1cHggNDVweCAwLjVweCAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMThweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwxKTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLnBhbmVsLWhlYWRpbmcgPiAgYS5jb2xsYXBzZWR7IGJvcmRlcjogbm9uZTsgfVxyXG4ucGFuZWwtaGVhZGluZyA+ICBhOmJlZm9yZSxcclxuLnBhbmVsLWhlYWRpbmcgPiAgYS5jb2xsYXBzZWQ6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcXGYxMDdcIjtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllcigwLjA4MCwgMS4wOTAsIDAuMzIwLCAxLjI3NSk7XHJcbiAgICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCI7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMzcsIDM3LCAzNyk7XHJcbn1cclxuLnBhbmVsLWhlYWRpbmcgPiAgYS5jb2xsYXBzZWQ6YmVmb3Jle1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG59XHJcblxyXG4jYWNjb3JkaW9uIC5wYW5lbC10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMzcsIDM3LCAzNyk7XHJcbn1cclxuI2FjY29yZGlvbiAucGFuZWwtYm9keXtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxufVxyXG5cclxuLmF1dGhvcnN7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIC8qIGNvbG9yOiByZ2JhKDM3LCAzNywgMzcpOyAqL1xyXG59XHJcblxyXG4ubmdhLWJ0bi1hcnhpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LDIxNywyMTcpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC8qIC13ZWJraXQtYm94LXNoYWRvdzogMCA4cHggMTFweCAwIHJnYmEoMzcsIDM3LCAzNywgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDM3LCAzNywgMzcsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMzcsIDM3LCAzNywgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDM3LCAzNywgMzcsIDAuMTUpOyAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHhcclxufVxyXG5cclxuLm5nYS1idG4tYXJ4aXY6aG92ZXIge1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTEyLDAsMCk7XHJcbn1cclxuXHJcbi5hcnhpdiB7XHJcbiAgICB3aWR0aDogMS41ZW07XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTEuNXB4O1xyXG4gICAgZmlsdGVyOiBpbnZlcnQoMTIlKSBzZXBpYSg0OCUpIHNhdHVyYXRlKDQ1OTElKSBodWUtcm90YXRlKDM1MGRlZykgYnJpZ2h0bmVzcyg4NCUpIGNvbnRyYXN0KDExOSUpO1xyXG59XHJcblxyXG4uYXJ4aXY6aG92ZXIge1xyXG5maWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMCUpIGh1ZS1yb3RhdGUoMTYzZGVnKSBicmlnaHRuZXNzKDExMCUpIGNvbnRyYXN0KDEwMSUpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_animations__WEBPACK_IMPORTED_MODULE_0__.fade]
    }
  });
}

/***/ }),

/***/ 8567:
/*!*********************************************************************!*\
  !*** ./src/app/modules/general/publications/publications.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PublicationsModule: () => (/* binding */ PublicationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _publications_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publications.component */ 7797);
/* harmony import */ var _publications_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publications-routing.module */ 4471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class PublicationsModule {
  static #_ = this.ɵfac = function PublicationsModule_Factory(t) {
    return new (t || PublicationsModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: PublicationsModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _publications_routing_module__WEBPACK_IMPORTED_MODULE_1__.publicationsRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PublicationsModule, {
    declarations: [_publications_component__WEBPACK_IMPORTED_MODULE_0__.publicationsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _publications_routing_module__WEBPACK_IMPORTED_MODULE_1__.publicationsRoutingModule],
    exports: [_publications_component__WEBPACK_IMPORTED_MODULE_0__.publicationsComponent]
  });
})();

/***/ }),

/***/ 1614:
/*!********************************************************!*\
  !*** ./src/app/modules/general/talks/category.pipe.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryPipe: () => (/* binding */ CategoryPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CategoryPipe {
  transform(category) {
    let result;
    switch (category) {
      case 'movie':
        {
          result = 'fas fa-film';
          break;
        }
      case 'show':
        {
          result = 'fas fa-desktop';
          break;
        }
      case 'clip':
        {
          result = 'fas fa-volume-up';
          break;
        }
      case 'game':
        {
          result = 'fab fa-playstation';
          break;
        }
      case 'documentary':
        {
          result = 'fas fa-photo-video';
          break;
        }
      default:
        {
          result = 'fas fa-desktop';
          break;
        }
    }
    return result;
  }
  static #_ = this.ɵfac = function CategoryPipe_Factory(t) {
    return new (t || CategoryPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "category",
    type: CategoryPipe,
    pure: true
  });
}

/***/ }),

/***/ 5211:
/*!**************************************************************!*\
  !*** ./src/app/modules/general/talks/items/items.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ItemsService: () => (/* binding */ ItemsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 4860);




class ItemsService {
  constructor(http) {
    this.http = http;
  }
  getItems(url) {
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError('getItems', [])));
  }
  getItem(url) {
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(this.handleError('getItems', [])));
  }
  handleError(operation = 'operation', result) {
    return error => {
      console.error(`${operation} failed: ${error.message}`);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(result);
    };
  }
  static #_ = this.ɵfac = function ItemsService_Factory(t) {
    return new (t || ItemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ItemsService,
    factory: ItemsService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7272:
/*!****************************************************!*\
  !*** ./src/app/modules/general/talks/safe.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafePipe: () => (/* binding */ SafePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SafePipe {
  constructor(sanitizer) {
    this.sanitizer = sanitizer;
  }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  static #_ = this.ɵfac = function SafePipe_Factory(t) {
    return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16));
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "safe",
    type: SafePipe,
    pure: true
  });
}

/***/ }),

/***/ 3757:
/*!***************************************************************!*\
  !*** ./src/app/modules/general/talks/talks-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   talksRoutingModule: () => (/* binding */ talksRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _talks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./talks.component */ 9099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _talks_component__WEBPACK_IMPORTED_MODULE_0__.talksComponent,
  children: []
}];
class talksRoutingModule {
  static #_ = this.ɵfac = function talksRoutingModule_Factory(t) {
    return new (t || talksRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: talksRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](talksRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9099:
/*!**********************************************************!*\
  !*** ./src/app/modules/general/talks/talks.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   talksComponent: () => (/* binding */ talksComponent)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations */ 1757);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 4699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _items_items_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/items.service */ 5211);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _category_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category.pipe */ 1614);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./safe.pipe */ 7272);










function talksComponent_div_211_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 53)(1, "div", 54)(2, "div", 55)(3, "div", 40)(4, "div", 56)(5, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function talksComponent_div_211_div_1_Template_a_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r5.openTrailer(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 55)(8, "div", 40)(9, "div", 59)(10, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function talksComponent_div_211_div_1_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r7.openTrailer(item_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("src", "https://img.youtube.com/vi/", item_r3.youtubeLink, "/mqdefault.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 5, item_r3.category), " me-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r3.name);
  }
}
function talksComponent_div_211_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, talksComponent_div_211_div_1_Template, 15, 7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.items);
  }
}
function talksComponent_div_221_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "iframe", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "https://www.youtube.com/embed/" + ctx_r1.player), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeResourceUrl"]);
  }
}
class talksComponent {
  constructor(seoService, router, itemsService, fb) {
    this.seoService = seoService;
    this.router = router;
    this.itemsService = itemsService;
    this.fb = fb;
    const content = 'Marieke - Talks';
    const title = 'Marieke - Talks';
    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
    this.loaded = false;
    this.items = [];
    this.badges = [];
    this.itemsLoaded = false;
    this.searchField = '';
    this.player = '';
    this.playerLoaded = false;
    this.filtersEnabled = false;
    this.resultsFound = false;
  }
  ngOnInit() {
    this.getItems();
  }
  getItems() {
    this.loaded = false;
    const url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.urlMovies;
    this.itemsService.getItems(url).subscribe(items => {
      this.items = items;
      this.loaded = true;
    });
  }
  openTrailer(item) {
    this.player = item.youtubeLink;
    this.playerLoaded = true;
    if (this.modalPlayer === undefined) {
      this.modalPlayer = new bootstrap.Modal(document.getElementById('newsModal'), {
        keyboard: true
      });
      const selectPlayer = document.getElementById('newsModal');
      selectPlayer?.addEventListener('hidden.bs.modal', this.onCloseModal.bind(this));
    }
    this.modalPlayer?.show();
  }
  onCloseModal() {
    this.player = '';
    this.playerLoaded = false;
  }
  onHandleKeyDown(event) {
    if (event.keyCode === 13) {
      this.onSearch();
    }
  }
  onSearch() {
    this.getItems();
  }
  static #_ = this.ɵfac = function talksComponent_Factory(t) {
    return new (t || talksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_2__.SeoService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_items_items_service__WEBPACK_IMPORTED_MODULE_3__.ItemsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: talksComponent,
    selectors: [["app-talks"]],
    decls: 226,
    vars: 3,
    consts: [[1, "container", "py-0"], [1, "light"], ["id", "pageHeaderTitle", 1, "h1", "text-center"], [1, "postcard", "dark", "blue"], ["href", "#", 1, "postcard__img_link"], ["src", "https://picsum.photos/1000/1000", "alt", "Image Title", 1, "postcard__img"], [1, "postcard__text"], [1, "postcard__title", "blue"], ["href", "#"], [1, "postcard__subtitle", "small"], ["datetime", "2020-05-25 12:00:00"], [1, "fas", "fa-calendar-alt", "mr-2"], [1, "postcard__bar"], [1, "postcard__preview-txt"], [1, "postcard__tagbox"], [1, "tag__item"], [1, "fas", "fa-tag", "mr-2"], [1, "fas", "fa-clock", "mr-2"], [1, "tag__item", "play", "blue"], [1, "fas", "fa-play", "mr-2"], [1, "postcard", "dark", "red"], ["src", "https://picsum.photos/501/500", "alt", "Image Title", 1, "postcard__img"], [1, "postcard__title", "red"], [1, "tag__item", "play", "red"], [1, "postcard", "dark", "green"], ["src", "https://picsum.photos/500/501", "alt", "Image Title", 1, "postcard__img"], [1, "postcard__title", "green"], [1, "tag__item", "play", "green"], [1, "postcard", "dark", "yellow"], ["src", "https://picsum.photos/501/501", "alt", "Image Title", 1, "postcard__img"], [1, "postcard__title", "yellow"], [1, "tag__item", "play", "yellow"], [1, "container", "py-2"], ["id", "pageHeaderTitle", 1, "h1", "text-center", "text-dark"], [1, "postcard", "light", "blue"], [1, "postcard__text", "t-dark"], [1, "postcard", "light", "red"], [1, "postcard", "light", "green"], [1, "postcard", "light", "yellow"], [1, "row", "justify-content-center"], [1, "col"], ["class", "row pt-4", 4, "ngIf"], ["id", "newsModal", "role", "dialog", "tabindex", "-1", "aria-labelledby", "youtube Player", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "clearfix", "d-block", "d-sm-none", "d-flex", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-sm", "btn-outline-primary", "btn-rounded", "btn-md", "ml-4"], [1, "modal-body"], ["class", "nga-embed nga-embed-youtube nga-z-depth", 4, "ngIf"], [1, "modal-footer", "justify-content-center"], ["type", "button", "data-bs-dismiss", "modal", 1, "clearfix", "d-none", "d-sm-inline-block", "d-md-inline-block", "d-lg-inline-block", "d-xl-inline-block", "btn", "btn-outline-primary", "btn-sm", "btn-rounded", "btn-md"], [1, "row", "pt-4"], ["class", "col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 px-2 mb-3", 4, "ngFor", "ngForOf"], [1, "col-6", "col-sm-6", "col-md-4", "col-lg-3", "col-xl-3", "px-2", "mb-3"], [1, "nga-card-movie"], [1, "row"], [1, "card-movie-img"], [3, "click"], ["alt", "", 1, "img-fluid", "rounded", "z-depth-2", 3, "src"], [1, "card-movie-text"], [1, "waves-effect", 3, "click"], [1, "nga-embed", "nga-embed-youtube", "nga-z-depth"], ["allowfullscreen", "", 1, "nga-embed-item", 3, "src"]],
    template: function talksComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "div", 0)(3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "My Cards Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "article", 3)(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6)(9, "h1", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Podcast Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9)(13, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Mon, May 25th 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "ul", 14)(20, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "55 mins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "li", 18)(27, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Play Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "article", 20)(31, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 6)(34, "h1", 22)(35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Podcast Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 9)(38, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Mon, May 25th 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "ul", 14)(45, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](49, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "55 mins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "li", 23)(52, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](53, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Play Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "article", 24)(56, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 6)(59, "h1", 26)(60, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "Podcast Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 9)(63, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](64, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "Mon, May 25th 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "ul", 14)(70, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "55 mins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "li", 27)(77, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Play Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "article", 28)(81, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](82, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 6)(84, "h1", 30)(85, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Podcast Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 9)(88, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](89, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Mon, May 25th 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "ul", 14)(95, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](96, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](99, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "55 mins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "li", 31)(102, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](103, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Play Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "section", 1)(106, "div", 32)(107, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "My Cards Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "article", 34)(110, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](111, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 35)(113, "h1", 7)(114, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Podcast Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "div", 9)(117, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](118, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119, "Mon, May 25th 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](120, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](122, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](123, "ul", 14)(124, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](125, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](126, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](128, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129, "55 mins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](130, "li", 18)(131, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](132, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](133, "Play Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](134, "article", 36)(135, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](136, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "div", 35)(138, "h1", 22)(139, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](140, "Podcast Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "div", 9)(142, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](143, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](144, "Mon, May 25th 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](145, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](146, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](147, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "ul", 14)(149, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](150, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](151, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](153, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154, "55 mins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](155, "li", 23)(156, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](157, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](158, "Play Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](159, "article", 37)(160, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](161, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](162, "div", 35)(163, "h1", 26)(164, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "Podcast Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "div", 9)(167, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](168, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "Mon, May 25th 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](170, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](171, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](172, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "ul", 14)(174, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](175, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](176, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](177, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](178, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179, "55 mins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](180, "li", 27)(181, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](182, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](183, "Play Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](184, "article", 38)(185, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](186, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](187, "div", 35)(188, "h1", 30)(189, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](190, "Podcast Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "div", 9)(192, "time", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](193, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](194, "Mon, May 25th 2020 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](195, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](197, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "ul", 14)(199, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](200, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](201, "Podcast");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](202, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](203, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](204, "55 mins.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](205, "li", 31)(206, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](207, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](208, "Play Episode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "div", 39)(210, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](211, talksComponent_div_211_Template, 2, 1, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](212, "section")(213, "div", 42)(214, "div", 43)(215, "div", 44)(216, "div", 45)(217, "button", 46)(218, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](219, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](220, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](221, talksComponent_div_221_Template, 3, 3, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](222, "div", 49)(223, "button", 50)(224, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](225, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fade", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.playerLoaded);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _category_pipe__WEBPACK_IMPORTED_MODULE_4__.CategoryPipe, _safe_pipe__WEBPACK_IMPORTED_MODULE_5__.SafePipe],
    styles: ["@import url(https://fonts.googleapis.com/css2?family=Baloo+2&display=swap);.nga-btn[_ngcontent-%COMP%] {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  padding: 0.5rem 0.5rem 0.5rem 0.5rem;\n  font-size: 0.82rem;\n  border-radius: 0.125rem;\n}\n\n.nga-btn[_ngcontent-%COMP%]:hover, .nga-btn[_ngcontent-%COMP%]:active, .nga-btn[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n\n.nga-btn-primary[_ngcontent-%COMP%] {\n  border: 2px solid #4285f4 !important;\n  color: #4285f4 !important;\n  background-color: transparent !important;\n}\n\n.nga-form-control[_ngcontent-%COMP%] {\n  border: 1.2px solid #dfe3e7;\n  background-color: #fff;\n  border: 1.9px solid #dfe3e7;\n}\n\n.nga-form-control[_ngcontent-%COMP%]:focus {\n  color: #555252;\n  background-color: #fff;\n  border-color: #5a8dee;\n  border: 1.9px solid #5a8dee;\n  outline: 0;\n  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.1);\n}\n\n.form-check[_ngcontent-%COMP%]   .nga-form-check-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.nga-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 12px;\n  margin-right: 1rem;\n  margin-bottom: 1rem;\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.6);\n  cursor: pointer;\n  background-color: #eceff1;\n  border-radius: 16px;\n  transition: all 0.3s linear;\n}\n\n.nga-badge[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n\n.nga-badge[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  line-height: 32px;\n}\n\n.nga-badge[_ngcontent-%COMP%]   .fa-film[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.nga-badge[_ngcontent-%COMP%]   .fa-desktop[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.nga-badge[_ngcontent-%COMP%]   .fa-volume-up[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.nga-badge[_ngcontent-%COMP%]   .fa-playstation[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.nga-badge[_ngcontent-%COMP%]   .fa-photo-video[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.nga-card-movie[_ngcontent-%COMP%] {\n  padding: 5px 5px 5px 5px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 0px solid #dfe3e7;\n  border-radius: 0.25rem;\n}\n\n.nga-card[_ngcontent-%COMP%] {\n  display: block;\n  background-color: rgba(255, 255, 255, 0.8);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  border-radius: 2px;\n  transition: all 0.2s ease-in-out;\n  margin-top: 20px;\n}\n\n.nga-card[_ngcontent-%COMP%]   .card-img-block[_ngcontent-%COMP%] {\n  width: 91%;\n  margin: 0 auto;\n  position: relative;\n  top: -20px;\n}\n\n.nga-card[_ngcontent-%COMP%]   .card-img-block[_ngcontent-%COMP%]   .nga-card-img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.63);\n  cursor: pointer;\n}\n\n.nga-player[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: transparent;\n}\n\n.nga-player[_ngcontent-%COMP%]:hover {\n  opacity: 0.4;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: transparent;\n  cursor: pointer;\n}\n\n.nga-embed[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n\n.nga-embed[_ngcontent-%COMP%]::before {\n  display: block;\n  content: \"\";\n}\n\n.nga-embed[_ngcontent-%COMP%]   .nga-embed-item[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   embed[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   object[_ngcontent-%COMP%], .nga-embed[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.nga-embed-youtube[_ngcontent-%COMP%]::before {\n  padding-top: 56.25%;\n}\n\n.nga-z-depth[_ngcontent-%COMP%] {\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;\n}\n\n.card-movie[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #fff;\n  border: 0px solid #ddd;\n  border-radius: 0.25rem;\n  transition: all 0.2s ease-in-out;\n  font-size: 24px;\n  color: black;\n  font-weight: bold;\n}\n\n.card-movie-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: gray;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n}\n\n.card-movie-date[_ngcontent-%COMP%] {\n  padding: 0px 10px 0px 0px;\n  position: relative;\n  font-size: 9px;\n  border: 0px solid #ddd;\n  border-radius: 0.25rem;\n  transition: all 0.2s ease-in-out;\n  color: gray;\n  text-align: right;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  background-color: transparent;\n}\n\n.card-movie-date[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n  text-decoration: underline;\n}\n\n.card-movie-img[_ngcontent-%COMP%] {\n  opacity: 1;\n  border-radius: 5px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.63);\n  cursor: pointer;\n  text-align: center;\n  margin: auto;\n  display: flex;\n}\n\n.card-movie-img[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n}\n\n.card-movie-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #3F729B;\n  font-weight: 700;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-text-decoration-skip: objects;\n  cursor: pointer;\n}\n\n.card-movie-text[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #0d6efd;\n  font-weight: 700;\n}\n\n.card-movie-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.card-movie-text[_ngcontent-%COMP%] {\n  padding: 7px 4px 0px 0px;\n  display: block;\n  font-size: 0.8rem;\n  display: -webkit-box;\n  max-width: 400px;\n  margin: 0 auto;\n  line-height: 1.4;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.nga-bd-blue-200[_ngcontent-%COMP%] {\n  color: #000;\n  background-color: #9ec5fe;\n}\n\n.nga-bd-blue-300[_ngcontent-%COMP%] {\n  color: #000;\n  background-color: #6ea8fe;\n}\n\n.nga-bd-blue-400[_ngcontent-%COMP%] {\n  color: #000;\n  background-color: #3d8bfd;\n}\n\n.nga-bd-blue-500[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0d6efd;\n}\n\n.nga-bd-blue-600[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #0a58ca;\n}\n\n.nga-bd-blue-700[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #084298;\n}\n\n.nga-bd-blue-800[_ngcontent-%COMP%] {\n  color: #fff;\n  background-color: #052c65;\n}\n\n\n\nbody[_ngcontent-%COMP%] {\n  font-family: \"Baloo 2\", cursive;\n  font-size: 16px;\n  color: #ffffff;\n  text-rendering: optimizeLegibility;\n  font-weight: initial;\n}\n\n.dark[_ngcontent-%COMP%] {\n  background: #110f16;\n}\n\n.light[_ngcontent-%COMP%] {\n  background: #ffffff;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  transition: color 0.3s ease-in-out;\n}\n\n#pageHeaderTitle[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n  text-transform: uppercase;\n  text-align: center;\n  font-size: 2.5rem;\n}\n\n\n\n.postcard[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);\n  border-radius: 10px;\n  margin: 0 0 2rem 0;\n  overflow: hidden;\n  position: relative;\n  color: #ffffff;\n}\n.postcard.dark[_ngcontent-%COMP%] {\n  background-color: #18151f;\n}\n.postcard.light[_ngcontent-%COMP%] {\n  background-color: #e1e5ea;\n}\n.postcard[_ngcontent-%COMP%]   .t-dark[_ngcontent-%COMP%] {\n  color: #18151f;\n}\n.postcard[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.postcard[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .postcard[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n.postcard[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__img[_ngcontent-%COMP%] {\n  max-height: 180px;\n  width: 100%;\n  object-fit: cover;\n  position: relative;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__img_link[_ngcontent-%COMP%] {\n  display: contents;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__bar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 10px;\n  margin: 10px 0;\n  border-radius: 5px;\n  background-color: #424242;\n  transition: width 0.2s ease;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__text[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__preview-txt[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: justify;\n  height: 100%;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__tagbox[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row wrap;\n  font-size: 14px;\n  margin: 20px 0 0 0;\n  padding: 0;\n  justify-content: center;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__tagbox[_ngcontent-%COMP%]   .tag__item[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(83, 83, 83, 0.4);\n  border-radius: 3px;\n  padding: 2.5px 10px;\n  margin: 0 5px 5px 0;\n  cursor: default;\n  -webkit-user-select: none;\n          user-select: none;\n  transition: background-color 0.3s;\n}\n.postcard[_ngcontent-%COMP%]   .postcard__tagbox[_ngcontent-%COMP%]   .tag__item[_ngcontent-%COMP%]:hover {\n  background: rgba(83, 83, 83, 0.8);\n}\n.postcard[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: linear-gradient(-70deg, #424242, transparent 50%);\n  opacity: 1;\n  border-radius: 10px;\n}\n.postcard[_ngcontent-%COMP%]:hover   .postcard__bar[_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n@media screen and (min-width: 769px) {\n  .postcard[_ngcontent-%COMP%] {\n    flex-wrap: inherit;\n  }\n  .postcard[_ngcontent-%COMP%]   .postcard__title[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .postcard[_ngcontent-%COMP%]   .postcard__tagbox[_ngcontent-%COMP%] {\n    justify-content: start;\n  }\n  .postcard[_ngcontent-%COMP%]   .postcard__img[_ngcontent-%COMP%] {\n    max-width: 300px;\n    max-height: 100%;\n    transition: transform 0.3s ease;\n  }\n  .postcard[_ngcontent-%COMP%]   .postcard__text[_ngcontent-%COMP%] {\n    padding: 3rem;\n    width: 100%;\n  }\n  .postcard[_ngcontent-%COMP%]   .media.postcard__text[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    background: #18151f;\n    top: -20%;\n    height: 130%;\n    width: 55px;\n  }\n  .postcard[_ngcontent-%COMP%]:hover   .postcard__img[_ngcontent-%COMP%] {\n    transform: scale(1.1);\n  }\n  .postcard[_ngcontent-%COMP%]:nth-child(2n+1) {\n    flex-direction: row;\n  }\n  .postcard[_ngcontent-%COMP%]:nth-child(2n+0) {\n    flex-direction: row-reverse;\n  }\n  .postcard[_ngcontent-%COMP%]:nth-child(2n+1)   .postcard__text[_ngcontent-%COMP%]::before {\n    left: -12px !important;\n    transform: rotate(4deg);\n  }\n  .postcard[_ngcontent-%COMP%]:nth-child(2n+0)   .postcard__text[_ngcontent-%COMP%]::before {\n    right: -12px !important;\n    transform: rotate(-4deg);\n  }\n}\n@media screen and (min-width: 1024px) {\n  .postcard__text[_ngcontent-%COMP%] {\n    padding: 2rem 3.5rem;\n  }\n  .postcard__text[_ngcontent-%COMP%]:before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    top: -20%;\n    height: 130%;\n    width: 55px;\n  }\n  .postcard.dark[_ngcontent-%COMP%]   .postcard__text[_ngcontent-%COMP%]:before {\n    background: #18151f;\n  }\n  .postcard.light[_ngcontent-%COMP%]   .postcard__text[_ngcontent-%COMP%]:before {\n    background: #e1e5ea;\n  }\n}\n\n\n.postcard[_ngcontent-%COMP%]   .postcard__tagbox[_ngcontent-%COMP%]   .green.play[_ngcontent-%COMP%]:hover {\n  background: #79dd09;\n  color: black;\n}\n\n.green[_ngcontent-%COMP%]   .postcard__title[_ngcontent-%COMP%]:hover {\n  color: #79dd09;\n}\n\n.green[_ngcontent-%COMP%]   .postcard__bar[_ngcontent-%COMP%] {\n  background-color: #79dd09;\n}\n\n.green[_ngcontent-%COMP%]::before {\n  background-image: linear-gradient(-30deg, rgba(121, 221, 9, 0.1), transparent 50%);\n}\n\n.green[_ngcontent-%COMP%]:nth-child(2n)::before {\n  background-image: linear-gradient(30deg, rgba(121, 221, 9, 0.1), transparent 50%);\n}\n\n.postcard[_ngcontent-%COMP%]   .postcard__tagbox[_ngcontent-%COMP%]   .blue.play[_ngcontent-%COMP%]:hover {\n  background: #0076bd;\n}\n\n.blue[_ngcontent-%COMP%]   .postcard__title[_ngcontent-%COMP%]:hover {\n  color: #0076bd;\n}\n\n.blue[_ngcontent-%COMP%]   .postcard__bar[_ngcontent-%COMP%] {\n  background-color: #0076bd;\n}\n\n.blue[_ngcontent-%COMP%]::before {\n  background-image: linear-gradient(-30deg, rgba(0, 118, 189, 0.1), transparent 50%);\n}\n\n.blue[_ngcontent-%COMP%]:nth-child(2n)::before {\n  background-image: linear-gradient(30deg, rgba(0, 118, 189, 0.1), transparent 50%);\n}\n\n.postcard[_ngcontent-%COMP%]   .postcard__tagbox[_ngcontent-%COMP%]   .red.play[_ngcontent-%COMP%]:hover {\n  background: #bd150b;\n}\n\n.red[_ngcontent-%COMP%]   .postcard__title[_ngcontent-%COMP%]:hover {\n  color: #bd150b;\n}\n\n.red[_ngcontent-%COMP%]   .postcard__bar[_ngcontent-%COMP%] {\n  background-color: #bd150b;\n}\n\n.red[_ngcontent-%COMP%]::before {\n  background-image: linear-gradient(-30deg, rgba(189, 21, 11, 0.1), transparent 50%);\n}\n\n.red[_ngcontent-%COMP%]:nth-child(2n)::before {\n  background-image: linear-gradient(30deg, rgba(189, 21, 11, 0.1), transparent 50%);\n}\n\n.postcard[_ngcontent-%COMP%]   .postcard__tagbox[_ngcontent-%COMP%]   .yellow.play[_ngcontent-%COMP%]:hover {\n  background: #bdbb49;\n  color: black;\n}\n\n.yellow[_ngcontent-%COMP%]   .postcard__title[_ngcontent-%COMP%]:hover {\n  color: #bdbb49;\n}\n\n.yellow[_ngcontent-%COMP%]   .postcard__bar[_ngcontent-%COMP%] {\n  background-color: #bdbb49;\n}\n\n.yellow[_ngcontent-%COMP%]::before {\n  background-image: linear-gradient(-30deg, rgba(189, 187, 73, 0.1), transparent 50%);\n}\n\n.yellow[_ngcontent-%COMP%]:nth-child(2n)::before {\n  background-image: linear-gradient(30deg, rgba(189, 187, 73, 0.1), transparent 50%);\n}\n\n@media screen and (min-width: 769px) {\n  .green[_ngcontent-%COMP%]::before {\n    background-image: linear-gradient(-80deg, rgba(121, 221, 9, 0.1), transparent 50%);\n  }\n  .green[_ngcontent-%COMP%]:nth-child(2n)::before {\n    background-image: linear-gradient(80deg, rgba(121, 221, 9, 0.1), transparent 50%);\n  }\n  .blue[_ngcontent-%COMP%]::before {\n    background-image: linear-gradient(-80deg, rgba(0, 118, 189, 0.1), transparent 50%);\n  }\n  .blue[_ngcontent-%COMP%]:nth-child(2n)::before {\n    background-image: linear-gradient(80deg, rgba(0, 118, 189, 0.1), transparent 50%);\n  }\n  .red[_ngcontent-%COMP%]::before {\n    background-image: linear-gradient(-80deg, rgba(189, 21, 11, 0.1), transparent 50%);\n  }\n  .red[_ngcontent-%COMP%]:nth-child(2n)::before {\n    background-image: linear-gradient(80deg, rgba(189, 21, 11, 0.1), transparent 50%);\n  }\n  .yellow[_ngcontent-%COMP%]::before {\n    background-image: linear-gradient(-80deg, rgba(189, 187, 73, 0.1), transparent 50%);\n  }\n  .yellow[_ngcontent-%COMP%]:nth-child(2n)::before {\n    background-image: linear-gradient(80deg, rgba(189, 187, 73, 0.1), transparent 50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL3RhbGtzL3RhbGtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNkVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBRUEsdUJBQUE7QUFFSjs7QUFDRTtFQUVFLDhFQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUNFO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBRUo7O0FBQ0U7RUFDRSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFFSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBRUo7O0FBQ0U7RUFDRSx5QkFBQTtBQUVKOztBQUNFO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtBQUVKOztBQUNFO0VBQ0Usd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsMENBQUE7RUFDQSx3RUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUVKOztBQUNFO0VBQ0UsbUJBQUE7QUFFSjs7QUFDRTtFQUVFLHlGQUFBO0FBRUo7O0FBQ0U7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUdBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtBQUVKOztBQUNFO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBR0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUVKOztBQUNFO0VBQ0UsWUFBQTtFQUNBLDBCQUFBO0FBRUo7O0FBQ0U7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQ0U7RUFDRSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFFSjs7QUFDRTtFQUNFLFlBQUE7QUFFSjs7QUFDRTtFQUNFLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRUo7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFDRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQUVKOztBQUNFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBRUo7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUFFSjs7QUFpQkEsYUFBQTtBQUNBO0VBQ0MsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUFkRDs7QUFpQkE7RUFDQyxtQkFBQTtBQWREOztBQWtCQTtFQUNDLG1CQUFBO0FBZkQ7O0FBa0JBO0VBQ0MscUJBQUE7RUFDQSxrQ0FBQTtBQWZEOztBQWtCQTtFQUNDLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFmRDs7QUFrQkEsVUFBQTtBQUNBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFFQSxnREFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQWhCRjtBQWtCQztFQUNDLHlCQUFBO0FBaEJGO0FBa0JDO0VBQ0MseUJBQUE7QUFoQkY7QUFtQkM7RUFDQyxjQUFBO0FBakJGO0FBb0JFO0VBQ0UsY0FBQTtBQWxCSjtBQXFCQztFQUNDLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQW5CRjtBQXNCQztFQUNDLGNBQUE7QUFwQkY7QUF1QkU7RUFDRSxrQkFBQTtBQXJCSjtBQXdCRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF0Qko7QUF5QkU7RUFDRSxpQkFBQTtBQXZCSjtBQTBCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQXhCSjtBQTJCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQXpCSjtBQTRCRTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUExQko7QUE2QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDRixVQUFBO0VBQ0UsdUJBQUE7QUEzQko7QUE2Qkk7RUFDRSxxQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxpQ0FBQTtBQTNCTjtBQTZCTTtFQUNFLGlDQUFBO0FBM0JSO0FBZ0NFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG1FQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBOUJKO0FBaUNFO0VBQ0UsWUFBQTtBQS9CSjs7QUFtQ0E7RUFDRTtJQUNFLGtCQUFBO0VBaENGO0VBa0NFO0lBQ0UsZUFBQTtFQWhDSjtFQW1DRTtJQUNFLHNCQUFBO0VBakNKO0VBb0NFO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtJQUNBLCtCQUFBO0VBbENKO0VBcUNFO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUFuQ0o7RUFzQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsbUJBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUFwQ0o7RUF1Q0U7SUFDRSxxQkFBQTtFQXJDSjtFQXdDRTtJQUNFLG1CQUFBO0VBdENKO0VBeUNFO0lBQ0UsMkJBQUE7RUF2Q0o7RUEwQ0U7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0VBeENKO0VBMkNFO0lBQ0UsdUJBQUE7SUFDQSx3QkFBQTtFQXpDSjtBQUNGO0FBNENBO0VBQ0U7SUFDSSxvQkFBQTtFQTFDSjtFQTZDQTtJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFFQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUE1Q0o7RUFnREE7SUFDQyxtQkFBQTtFQTlDRDtFQWtEQTtJQUNDLG1CQUFBO0VBaEREO0FBQ0Y7QUFvREEsV0FBQTtBQUNBO0VBQ0MsbUJBaFBZO0VBaVBaLFlBQUE7QUFsREQ7O0FBb0RBO0VBQ0MsY0FwUFk7QUFtTWI7O0FBbURBO0VBQ0MseUJBdlBZO0FBdU1iOztBQWtEQTtFQUNDLGtGQUFBO0FBL0NEOztBQXFEQTtFQUNDLGlGQUFBO0FBbEREOztBQXFEQTtFQUNDLG1CQS9QVztBQTZNWjs7QUFvREE7RUFDQyxjQWxRVztBQWlOWjs7QUFtREE7RUFDQyx5QkFyUVc7QUFxTlo7O0FBa0RBO0VBQ0Msa0ZBQUE7QUEvQ0Q7O0FBaURBO0VBQ0MsaUZBQUE7QUE5Q0Q7O0FBaURBO0VBQ0MsbUJBalJVO0FBbU9YOztBQWdEQTtFQUNDLGNBcFJVO0FBdU9YOztBQStDQTtFQUNDLHlCQXZSVTtBQTJPWDs7QUE4Q0E7RUFDQyxrRkFBQTtBQTNDRDs7QUE2Q0E7RUFDQyxpRkFBQTtBQTFDRDs7QUE2Q0E7RUFDQyxtQkFuU2E7RUFvU2IsWUFBQTtBQTFDRDs7QUE0Q0E7RUFDQyxjQXZTYTtBQThQZDs7QUEyQ0E7RUFDQyx5QkExU2E7QUFrUWQ7O0FBMENBO0VBQ0MsbUZBQUE7QUF2Q0Q7O0FBNkNBO0VBQ0Msa0ZBQUE7QUExQ0Q7O0FBaURBO0VBQ0M7SUFDQyxrRkFBQTtFQTlDQTtFQW9ERDtJQUNDLGlGQUFBO0VBbERBO0VBeUREO0lBQ0Msa0ZBQUE7RUF2REE7RUE2REQ7SUFDQyxpRkFBQTtFQTNEQTtFQThERDtJQUNDLGtGQUFBO0VBNURBO0VBOEREO0lBQ0MsaUZBQUE7RUE1REE7RUErREQ7SUFDQyxtRkFBQTtFQTdEQTtFQW1FRDtJQUNDLGtGQUFBO0VBakVBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubmdhLWJ0biB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDAuNXJlbSAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuODJyZW07XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAuMTI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYnRuOmhvdmVyLCAubmdhLWJ0bjphY3RpdmUsIC5uZ2EtYnRuOmZvY3VzIHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwgMCwgMCwgMC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgb3V0bGluZTogMDtcclxuICB9XHJcbiAgXHJcbiAgLm5nYS1idG4tcHJpbWFyeSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNDI4NWY0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzQyODVmNCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLm5nYS1mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOiAxLjIwcHggc29saWQgI2RmZTNlNztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDEuOTBweCBzb2xpZCAjZGZlM2U3O1xyXG4gIH1cclxuICBcclxuICAubmdhLWZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzU1NTI1MjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICM1YThkZWU7XHJcbiAgICBib3JkZXI6IDEuOTBweCBzb2xpZCAjNWE4ZGVlO1xyXG4gICAgb3V0bGluZTogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCAwIHJnYmEoMCwgMCwgMCwgLjEpXHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWNoZWNrIC5uZ2EtZm9ybS1jaGVjay1sYWJlbCBpIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAubmdhLWJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgMTJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmFkZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcclxuICB9XHJcbiAgXHJcbiAgLm5nYS1iYWRnZSAuY2xvc2Uge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmFkZ2UgLmZhLWZpbG0ge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmFkZ2UgLmZhLWRlc2t0b3Age1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmFkZ2UgLmZhLXZvbHVtZS11cCB7XHJcbiAgICBjb2xvcjogZ3JleTtcclxuICB9XHJcbiAgXHJcbiAgLm5nYS1iYWRnZSAuZmEtcGxheXN0YXRpb24ge1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmFkZ2UgLmZhLXBob3RvLXZpZGVvIHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gIH1cclxuICBcclxuICAubmdhLWNhcmQtbW92aWUge1xyXG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2RmZTNlNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtY2FyZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjgpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgLjI0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAubmdhLWNhcmQgLmNhcmQtaW1nLWJsb2NrIHtcclxuICAgIHdpZHRoOiA5MSU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtY2FyZCAuY2FyZC1pbWctYmxvY2sgLm5nYS1jYXJkLWltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNjMpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAubmdhLXBsYXllciB7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtcGxheWVyOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm5nYS1lbWJlZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtZW1iZWQ6OmJlZm9yZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtZW1iZWQgLm5nYS1lbWJlZC1pdGVtLCAubmdhLWVtYmVkIGlmcmFtZSwgLm5nYS1lbWJlZCBlbWJlZCwgLm5nYS1lbWJlZCBvYmplY3QsIC5uZ2EtZW1iZWQgdmlkZW8ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAubmdhLWVtYmVkLXlvdXR1YmU6OmJlZm9yZSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTYuMjUlO1xyXG4gIH1cclxuICBcclxuICAubmdhLXotZGVwdGgge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDVweCAxMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsIDAsIDAsIDAuMTgpLCAwIDRweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE1KSAhaW1wb3J0YW50XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW1vdmllIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW1vdmllLWRhdGUgYSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tc2tpcDogb2JqZWN0cztcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtbW92aWUtZGF0ZSB7XHJcbiAgICBwYWRkaW5nOiAwcHggMTBweCAwcHggMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtbW92aWUtZGF0ZSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1tb3ZpZS1pbWcge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW1vdmllLWltZzpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW1vdmllLXRleHQgYSB7XHJcbiAgICBjb2xvcjogIzNGNzI5QjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW1vdmllLXRleHQgaSB7XHJcbiAgICBjb2xvcjogIzBkNmVmZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW1vdmllLXRleHQgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLW1vdmllLXRleHQge1xyXG4gICAgcGFkZGluZzogN3B4IDRweCAwcHggMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmQtYmx1ZS0yMDAge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWVjNWZlXHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmQtYmx1ZS0zMDAge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmVhOGZlXHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmQtYmx1ZS00MDAge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q4YmZkXHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmQtYmx1ZS01MDAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQ2ZWZkXHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmQtYmx1ZS02MDAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGE1OGNhXHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmQtYmx1ZS03MDAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDg0Mjk4XHJcbiAgfVxyXG4gIFxyXG4gIC5uZ2EtYmQtYmx1ZS04MDAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUyYzY1XHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9QmFsb28rMiZkaXNwbGF5PXN3YXBcIik7XHJcbiRtYWluLWdyZWVuOiAjNzlkZDA5ICFkZWZhdWx0O1xyXG4kbWFpbi1ncmVlbi1yZ2ItMDE1OiByZ2JhKDEyMSwgMjIxLCA5LCAwLjEpICFkZWZhdWx0O1xyXG4kbWFpbi15ZWxsb3c6ICNiZGJiNDkgIWRlZmF1bHQ7XHJcbiRtYWluLXllbGxvdy1yZ2ItMDE1OiByZ2JhKDE4OSwgMTg3LCA3MywgMC4xKSAhZGVmYXVsdDtcclxuJG1haW4tcmVkOiAjYmQxNTBiICFkZWZhdWx0O1xyXG4kbWFpbi1yZWQtcmdiLTAxNTogcmdiYSgxODksIDIxLCAxMSwgMC4xKSAhZGVmYXVsdDtcclxuJG1haW4tYmx1ZTogIzAwNzZiZCAhZGVmYXVsdDtcclxuJG1haW4tYmx1ZS1yZ2ItMDE1OiByZ2JhKDAsIDExOCwgMTg5LCAwLjEpICFkZWZhdWx0O1xyXG5cclxuLyogVGhpcyBwZW4gKi9cclxuYm9keSB7XHJcblx0Zm9udC1mYW1pbHk6IFwiQmFsb28gMlwiLCBjdXJzaXZlO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRjb2xvcjogI2ZmZmZmZjtcclxuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG5cdGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xyXG59XHJcblxyXG4uZGFyayB7XHJcblx0YmFja2dyb3VuZDogIzExMGYxNjtcclxufVxyXG5cclxuXHJcbi5saWdodCB7XHJcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG5cclxuYSwgYTpob3ZlciB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbiNwYWdlSGVhZGVyVGl0bGUge1xyXG5cdG1hcmdpbjogMnJlbSAwO1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMi41cmVtO1xyXG59XHJcblxyXG4vKiBDYXJkcyAqL1xyXG4ucG9zdGNhcmQge1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIFxyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDIxcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjY2KTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogMCAwIDJyZW0gMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuXHJcblx0Ji5kYXJrIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMxODE1MWY7XHJcblx0fVxyXG5cdCYubGlnaHQge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2UxZTVlYTtcclxuXHR9XHJcblx0XHJcblx0LnQtZGFyayB7XHJcblx0XHRjb2xvcjogIzE4MTUxZjtcclxuXHR9XHJcblx0XHJcbiAgYSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcblx0XHJcblx0aDEsXHQuaDEge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxLjI7XHJcblx0fVxyXG5cdFxyXG5cdC5zbWFsbCB7XHJcblx0XHRmb250LXNpemU6IDgwJTtcclxuXHR9XHJcblxyXG4gIC5wb3N0Y2FyZF9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnBvc3RjYXJkX19pbWcge1xyXG4gICAgbWF4LWhlaWdodDogMTgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuXHJcbiAgLnBvc3RjYXJkX19pbWdfbGluayB7XHJcbiAgICBkaXNwbGF5OiBjb250ZW50cztcclxuICB9XHJcblxyXG4gIC5wb3N0Y2FyZF9fYmFyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnBvc3RjYXJkX190ZXh0IHtcclxuICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLnBvc3RjYXJkX19wcmV2aWV3LXR4dCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLnBvc3RjYXJkX190YWdib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDIwcHggMCAwIDA7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnRhZ19faXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg4MywgODMsIDgzLCAwLjQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgIHBhZGRpbmc6IDIuNXB4IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMCA1cHggNXB4IDA7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcclxuXHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoODMsIDgzLCA4MywgMC44KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtNzBkZWcsICM0MjQyNDIsIHRyYW5zcGFyZW50IDUwJSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIgLnBvc3RjYXJkX19iYXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcclxuICAucG9zdGNhcmQge1xyXG4gICAgZmxleC13cmFwOiBpbmhlcml0O1xyXG5cclxuICAgIC5wb3N0Y2FyZF9fdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc3RjYXJkX190YWdib3gge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3N0Y2FyZF9faW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgbWF4LWhlaWdodDogMTAwJTtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAucG9zdGNhcmRfX3RleHQge1xyXG4gICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubWVkaWEucG9zdGNhcmRfX3RleHQ6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYmFja2dyb3VuZDogIzE4MTUxZjtcclxuICAgICAgdG9wOiAtMjAlO1xyXG4gICAgICBoZWlnaHQ6IDEzMCU7XHJcbiAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIgLnBvc3RjYXJkX19pbWcge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMm4rMSkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDJuKzApIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWNoaWxkKDJuKzEpIC5wb3N0Y2FyZF9fdGV4dDo6YmVmb3JlIHtcclxuICAgICAgbGVmdDogLTEycHggIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNGRlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtY2hpbGQoMm4rMCkgLnBvc3RjYXJkX190ZXh0OjpiZWZvcmUge1xyXG4gICAgICByaWdodDogLTEycHggIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpe1xyXG5cdFx0LnBvc3RjYXJkX190ZXh0IHtcclxuICAgICAgcGFkZGluZzogMnJlbSAzLjVyZW07XHJcbiAgICB9XHJcblx0XHRcclxuXHRcdC5wb3N0Y2FyZF9fdGV4dDpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBcclxuICAgICAgdG9wOiAtMjAlO1xyXG4gICAgICBoZWlnaHQ6IDEzMCU7XHJcbiAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgfVxyXG5cdFxyXG4gIC5wb3N0Y2FyZC5kYXJrIHtcclxuXHRcdC5wb3N0Y2FyZF9fdGV4dDpiZWZvcmUge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAjMTgxNTFmO1xyXG5cdFx0fVxyXG4gIH1cclxuXHQucG9zdGNhcmQubGlnaHQge1xyXG5cdFx0LnBvc3RjYXJkX190ZXh0OmJlZm9yZSB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICNlMWU1ZWE7XHJcblx0XHR9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBDT0xPUlMgKi9cclxuLnBvc3RjYXJkIC5wb3N0Y2FyZF9fdGFnYm94IC5ncmVlbi5wbGF5OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAkbWFpbi1ncmVlbjtcclxuXHRjb2xvcjogYmxhY2s7XHJcbn1cclxuLmdyZWVuIC5wb3N0Y2FyZF9fdGl0bGU6aG92ZXIge1xyXG5cdGNvbG9yOiAkbWFpbi1ncmVlbjtcclxufVxyXG4uZ3JlZW4gLnBvc3RjYXJkX19iYXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRtYWluLWdyZWVuO1xyXG59XHJcbi5ncmVlbjo6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcblx0XHQtMzBkZWcsXHJcblx0XHQkbWFpbi1ncmVlbi1yZ2ItMDE1LFxyXG5cdFx0dHJhbnNwYXJlbnQgNTAlXHJcblx0KTtcclxufVxyXG4uZ3JlZW46bnRoLWNoaWxkKDJuKTo6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsICRtYWluLWdyZWVuLXJnYi0wMTUsIHRyYW5zcGFyZW50IDUwJSk7XHJcbn1cclxuXHJcbi5wb3N0Y2FyZCAucG9zdGNhcmRfX3RhZ2JveCAuYmx1ZS5wbGF5OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAkbWFpbi1ibHVlO1xyXG59XHJcbi5ibHVlIC5wb3N0Y2FyZF9fdGl0bGU6aG92ZXIge1xyXG5cdGNvbG9yOiAkbWFpbi1ibHVlO1xyXG59XHJcbi5ibHVlIC5wb3N0Y2FyZF9fYmFyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1ibHVlO1xyXG59XHJcbi5ibHVlOjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMzBkZWcsICRtYWluLWJsdWUtcmdiLTAxNSwgdHJhbnNwYXJlbnQgNTAlKTtcclxufVxyXG4uYmx1ZTpudGgtY2hpbGQoMm4pOjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgJG1haW4tYmx1ZS1yZ2ItMDE1LCB0cmFuc3BhcmVudCA1MCUpO1xyXG59XHJcblxyXG4ucG9zdGNhcmQgLnBvc3RjYXJkX190YWdib3ggLnJlZC5wbGF5OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAkbWFpbi1yZWQ7XHJcbn1cclxuLnJlZCAucG9zdGNhcmRfX3RpdGxlOmhvdmVyIHtcclxuXHRjb2xvcjogJG1haW4tcmVkO1xyXG59XHJcbi5yZWQgLnBvc3RjYXJkX19iYXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICRtYWluLXJlZDtcclxufVxyXG4ucmVkOjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMzBkZWcsICRtYWluLXJlZC1yZ2ItMDE1LCB0cmFuc3BhcmVudCA1MCUpO1xyXG59XHJcbi5yZWQ6bnRoLWNoaWxkKDJuKTo6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsICRtYWluLXJlZC1yZ2ItMDE1LCB0cmFuc3BhcmVudCA1MCUpO1xyXG59XHJcblxyXG4ucG9zdGNhcmQgLnBvc3RjYXJkX190YWdib3ggLnllbGxvdy5wbGF5OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kOiAkbWFpbi15ZWxsb3c7XHJcblx0Y29sb3I6IGJsYWNrO1xyXG59XHJcbi55ZWxsb3cgLnBvc3RjYXJkX190aXRsZTpob3ZlciB7XHJcblx0Y29sb3I6ICRtYWluLXllbGxvdztcclxufVxyXG4ueWVsbG93IC5wb3N0Y2FyZF9fYmFyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi15ZWxsb3c7XHJcbn1cclxuLnllbGxvdzo6YmVmb3JlIHtcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcblx0XHQtMzBkZWcsXHJcblx0XHQkbWFpbi15ZWxsb3ctcmdiLTAxNSxcclxuXHRcdHRyYW5zcGFyZW50IDUwJVxyXG5cdCk7XHJcbn1cclxuLnllbGxvdzpudGgtY2hpbGQoMm4pOjpiZWZvcmUge1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuXHRcdDMwZGVnLFxyXG5cdFx0JG1haW4teWVsbG93LXJnYi0wMTUsXHJcblx0XHR0cmFuc3BhcmVudCA1MCVcclxuXHQpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xyXG5cdC5ncmVlbjo6YmVmb3JlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuXHRcdFx0LTgwZGVnLFxyXG5cdFx0XHQkbWFpbi1ncmVlbi1yZ2ItMDE1LFxyXG5cdFx0XHR0cmFuc3BhcmVudCA1MCVcclxuXHRcdCk7XHJcblx0fVxyXG5cdC5ncmVlbjpudGgtY2hpbGQoMm4pOjpiZWZvcmUge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG5cdFx0XHQ4MGRlZyxcclxuXHRcdFx0JG1haW4tZ3JlZW4tcmdiLTAxNSxcclxuXHRcdFx0dHJhbnNwYXJlbnQgNTAlXHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0LmJsdWU6OmJlZm9yZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcblx0XHRcdC04MGRlZyxcclxuXHRcdFx0JG1haW4tYmx1ZS1yZ2ItMDE1LFxyXG5cdFx0XHR0cmFuc3BhcmVudCA1MCVcclxuXHRcdCk7XHJcblx0fVxyXG5cdC5ibHVlOm50aC1jaGlsZCgybik6OmJlZm9yZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoODBkZWcsICRtYWluLWJsdWUtcmdiLTAxNSwgdHJhbnNwYXJlbnQgNTAlKTtcclxuXHR9XHJcblxyXG5cdC5yZWQ6OmJlZm9yZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTgwZGVnLCAkbWFpbi1yZWQtcmdiLTAxNSwgdHJhbnNwYXJlbnQgNTAlKTtcclxuXHR9XHJcblx0LnJlZDpudGgtY2hpbGQoMm4pOjpiZWZvcmUge1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDgwZGVnLCAkbWFpbi1yZWQtcmdiLTAxNSwgdHJhbnNwYXJlbnQgNTAlKTtcclxuXHR9XHJcblx0XHJcblx0LnllbGxvdzo6YmVmb3JlIHtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuXHRcdFx0LTgwZGVnLFxyXG5cdFx0XHQkbWFpbi15ZWxsb3ctcmdiLTAxNSxcclxuXHRcdFx0dHJhbnNwYXJlbnQgNTAlXHJcblx0XHQpO1xyXG5cdH1cclxuXHQueWVsbG93Om50aC1jaGlsZCgybik6OmJlZm9yZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcblx0XHRcdDgwZGVnLFxyXG5cdFx0XHQkbWFpbi15ZWxsb3ctcmdiLTAxNSxcclxuXHRcdFx0dHJhbnNwYXJlbnQgNTAlXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_animations__WEBPACK_IMPORTED_MODULE_0__.fade]
    }
  });
}

/***/ }),

/***/ 1774:
/*!*******************************************************!*\
  !*** ./src/app/modules/general/talks/talks.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TalksModule: () => (/* binding */ TalksModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _talks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./talks.component */ 9099);
/* harmony import */ var _talks_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./talks-routing.module */ 3757);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _category_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.pipe */ 1614);
/* harmony import */ var _safe_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./safe.pipe */ 7272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);








class TalksModule {
  static #_ = this.ɵfac = function TalksModule_Factory(t) {
    return new (t || TalksModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: TalksModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _talks_routing_module__WEBPACK_IMPORTED_MODULE_1__.talksRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TalksModule, {
    declarations: [_talks_component__WEBPACK_IMPORTED_MODULE_0__.talksComponent, _category_pipe__WEBPACK_IMPORTED_MODULE_2__.CategoryPipe, _safe_pipe__WEBPACK_IMPORTED_MODULE_3__.SafePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _talks_routing_module__WEBPACK_IMPORTED_MODULE_1__.talksRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
    exports: [_talks_component__WEBPACK_IMPORTED_MODULE_0__.talksComponent]
  });
})();

/***/ }),

/***/ 5812:
/*!*********************************************************************!*\
  !*** ./src/app/modules/general/teaching/teaching-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   teachingRoutingModule: () => (/* binding */ teachingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _teaching_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teaching.component */ 6206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);




const routes = [{
  path: '',
  component: _teaching_component__WEBPACK_IMPORTED_MODULE_0__.teachingComponent,
  children: []
}];
class teachingRoutingModule {
  static #_ = this.ɵfac = function teachingRoutingModule_Factory(t) {
    return new (t || teachingRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: teachingRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](teachingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 6206:
/*!****************************************************************!*\
  !*** ./src/app/modules/general/teaching/teaching.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   teachingComponent: () => (/* binding */ teachingComponent)
/* harmony export */ });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../animations */ 1757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/seo/seo.service */ 4699);



class teachingComponent {
  constructor(seoService) {
    this.seoService = seoService;
    const content = 'Marieke - Teaching';
    const title = 'Marieke - Teaching';
    this.seoService.setMetaDescription(content);
    this.seoService.setMetaTitle(title);
  }
  static #_ = this.ɵfac = function teachingComponent_Factory(t) {
    return new (t || teachingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_seo_seo_service__WEBPACK_IMPORTED_MODULE_1__.SeoService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: teachingComponent,
    selectors: [["app-teaching"]],
    decls: 44,
    vars: 1,
    consts: [[1, "container", "py-2"]],
    template: function teachingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "p")(2, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Supervision Activities");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " 05/2023 -- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "SCGP, Stony Brook U.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Stony Brook, NY, USA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Supervision of project on generalized symmetries in holography for first-year PhD student Shihab Fadda. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Teaching");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Mathematical Institute, University of Oxford");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Oxford, UK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " RIGHT ALIGN 2020 -- 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "ul")(24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "String Theory I, class tutor, HT 2022.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "String Theory II, TA, class tutor, TT 2020, TT 2021.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Supersymmetry and Supergravity, TA, HT 2019.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Niels Bohr Institute, University of Copenhagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Copenhagen, DK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, " 2016 -- 2018");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ul")(38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Introduction to Gauge/Gravity Duality, class tutor, block 4 2018.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Analytical Mechanics, class tutor, block 1 2016.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Supersymmetry and Supergravity, TA, HT 2019.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@fade", undefined);
      }
    },
    styles: ["@media (min-width: 982px) {\n    .clear[_ngcontent-%COMP%] { \n        clear: both; \n        height: 0px; \n    }\n}\n@media only screen and (max-width: 981px) and (min-width: 292px)  {\n    .clear[_ngcontent-%COMP%] { \n        clear: both; \n        height: 250px; \n    }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmFsL3RlYWNoaW5nL3RlYWNoaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxXQUFXO0lBQ2Y7QUFDSjtBQUNBO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIChtaW4td2lkdGg6IDk4MnB4KSB7XHJcbiAgICAuY2xlYXIgeyBcclxuICAgICAgICBjbGVhcjogYm90aDsgXHJcbiAgICAgICAgaGVpZ2h0OiAwcHg7IFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgxcHgpIGFuZCAobWluLXdpZHRoOiAyOTJweCkgIHtcclxuICAgIC5jbGVhciB7IFxyXG4gICAgICAgIGNsZWFyOiBib3RoOyBcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4OyBcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_animations__WEBPACK_IMPORTED_MODULE_0__.fade]
    }
  });
}

/***/ }),

/***/ 8201:
/*!*************************************************************!*\
  !*** ./src/app/modules/general/teaching/teaching.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeachingModule: () => (/* binding */ TeachingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _teaching_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teaching.component */ 6206);
/* harmony import */ var _teaching_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teaching-routing.module */ 5812);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);




class TeachingModule {
  static #_ = this.ɵfac = function TeachingModule_Factory(t) {
    return new (t || TeachingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: TeachingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _teaching_routing_module__WEBPACK_IMPORTED_MODULE_1__.teachingRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TeachingModule, {
    declarations: [_teaching_component__WEBPACK_IMPORTED_MODULE_0__.teachingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _teaching_routing_module__WEBPACK_IMPORTED_MODULE_1__.teachingRoutingModule],
    exports: [_teaching_component__WEBPACK_IMPORTED_MODULE_0__.teachingComponent]
  });
})();

/***/ }),

/***/ 4699:
/*!*********************************************!*\
  !*** ./src/app/services/seo/seo.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeoService: () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);


class SeoService {
  constructor(meta, titleService) {
    this.meta = meta;
    this.titleService = titleService;
  }
  setMetaDescription(content) {
    this.meta.updateTag({
      name: 'description',
      content: content
    });
  }
  setMetaTitle(title) {
    this.titleService.setTitle(title);
  }
  static #_ = this.ɵfac = function SeoService_Factory(t) {
    return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.Title));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SeoService,
    factory: SeoService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  application: {
    name: 'angular-starter',
    angular: 'Angular 16.2.6',
    bootstrap: 'Bootstrap 5.3.2',
    fontawesome: 'Font Awesome 6.4.2'
  },
  urlMovies: './assets/params/json/mock/talks.json'
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map