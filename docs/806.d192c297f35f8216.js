"use strict";
(self["webpackChunkMarieke"] = self["webpackChunkMarieke"] || []).push([[806],{

/***/ 9524:
/*!****************************************************************************!*\
  !*** ./src/app/modules/general/outreach/mapping/mapping-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MappingRoutingModule: () => (/* binding */ MappingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5187);
/* harmony import */ var _mapping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping.component */ 3778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5879);




const routes = [{
  path: '',
  component: _mapping_component__WEBPACK_IMPORTED_MODULE_0__.MappingComponent,
  children: []
}];
class MappingRoutingModule {
  static #_ = this.ɵfac = function MappingRoutingModule_Factory(t) {
    return new (t || MappingRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MappingRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MappingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3778:
/*!***********************************************************************!*\
  !*** ./src/app/modules/general/outreach/mapping/mapping.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MappingComponent: () => (/* binding */ MappingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 5879);

class MappingComponent {
  static #_ = this.ɵfac = function MappingComponent_Factory(t) {
    return new (t || MappingComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MappingComponent,
    selectors: [["app-map"]],
    decls: 2,
    vars: 0,
    template: function MappingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "mapping works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }
  });
}

/***/ }),

/***/ 1806:
/*!********************************************************************!*\
  !*** ./src/app/modules/general/outreach/mapping/mapping.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MappingModule: () => (/* binding */ MappingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6814);
/* harmony import */ var _mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping-routing.module */ 9524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5879);



class MappingModule {
  static #_ = this.ɵfac = function MappingModule_Factory(t) {
    return new (t || MappingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MappingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.MappingRoutingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MappingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.MappingRoutingModule]
  });
})();

/***/ })

}]);