"use strict";
(self["webpackChunkMarieke"] = self["webpackChunkMarieke"] || []).push([[396],{

/***/ 8325:
/*!****************************************************************************!*\
  !*** ./src/app/modules/general/outreach/mapping/mapping-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MappingRoutingModule: () => (/* binding */ MappingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _mapping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping.component */ 4409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);




const routes = [{
  path: '',
  component: _mapping_component__WEBPACK_IMPORTED_MODULE_0__.MappingComponent,
  children: []
}];
class MappingRoutingModule {
  static {
    this.ɵfac = function MappingRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MappingRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MappingRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MappingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4409:
/*!***********************************************************************!*\
  !*** ./src/app/modules/general/outreach/mapping/mapping.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MappingComponent: () => (/* binding */ MappingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7705);

class MappingComponent {
  static {
    this.ɵfac = function MappingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MappingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
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
}

/***/ }),

/***/ 396:
/*!********************************************************************!*\
  !*** ./src/app/modules/general/outreach/mapping/mapping.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MappingModule: () => (/* binding */ MappingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping-routing.module */ 8325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);



class MappingModule {
  static {
    this.ɵfac = function MappingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || MappingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MappingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.MappingRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MappingModule, {
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.MappingRoutingModule]
  });
})();

/***/ })

}]);