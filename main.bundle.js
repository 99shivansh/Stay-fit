webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./training/training.module": [
		"../../../../../src/app/training/training.module.ts",
		"training.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__ = __webpack_require__("../../../../../src/app/auth/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'training', loadChildren: './training/training.module#TrainingModule', canLoad: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__["a" /* AuthGuard */]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__auth_auth_guard__["a" /* AuthGuard */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n  height: 100%;\n}\n\nmat-sidenav {\n  width: 250px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav #sidenav role=\"navigation\">\n    <app-sidenav-list (closeSidenav)=\"sidenav.close()\"></app-sidenav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.initAuthListener();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navigation_header_header_component__ = __webpack_require__("../../../../../src/app/navigation/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigation_sidenav_list_sidenav_list_component__ = __webpack_require__("../../../../../src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__training_training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_ui_service__ = __webpack_require__("../../../../../src/app/shared/ui.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navigation_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__navigation_sidenav_list_sidenav_list_component__["a" /* SidenavListComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_17__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_reducer__["c" /* reducers */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_13__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14__training_training_service__["a" /* TrainingService */], __WEBPACK_IMPORTED_MODULE_16__shared_ui_service__["a" /* UIService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducers; });
/* unused harmony export getUiState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIsLoading; });
/* unused harmony export getAuthState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_ui_reducer__ = __webpack_require__("../../../../../src/app/shared/ui.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_reducer__ = __webpack_require__("../../../../../src/app/auth/auth.reducer.ts");



var reducers = {
    ui: __WEBPACK_IMPORTED_MODULE_1__shared_ui_reducer__["b" /* uiReducer */],
    auth: __WEBPACK_IMPORTED_MODULE_2__auth_auth_reducer__["a" /* authReducer */]
};
var getUiState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('ui');
var getIsLoading = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getUiState, __WEBPACK_IMPORTED_MODULE_1__shared_ui_reducer__["a" /* getIsLoading */]);
var getAuthState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('auth');
var getIsAuth = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getAuthState, __WEBPACK_IMPORTED_MODULE_2__auth_auth_reducer__["b" /* getIsAuth */]);


/***/ }),

/***/ "../../../../../src/app/auth/auth-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_AUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_UNAUTHENTICATED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SetAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SetUnauthenticated; });
var SET_AUTHENTICATED = '[Auth] Set Authenticated';
var SET_UNAUTHENTICATED = '[Auth] Set Unauthenticated';
var SetAuthenticated = /** @class */ (function () {
    function SetAuthenticated() {
        this.type = SET_AUTHENTICATED;
    }
    return SetAuthenticated;
}());

var SetUnauthenticated = /** @class */ (function () {
    function SetUnauthenticated() {
        this.type = SET_UNAUTHENTICATED;
    }
    return SetUnauthenticated;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_reducer__["a" /* getIsAuth */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* take */])(1));
    };
    AuthGuard.prototype.canLoad = function (route) {
        return this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_reducer__["a" /* getIsAuth */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* take */])(1));
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_routing_module__ = __webpack_require__("../../../../../src/app/auth/auth-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__auth_routing_module__["a" /* AuthRoutingModule */]
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = authReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getIsAuth; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_actions__ = __webpack_require__("../../../../../src/app/auth/auth.actions.ts");

var initialState = {
    isAuthenticated: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["a" /* SET_AUTHENTICATED */]:
            return {
                isAuthenticated: true
            };
        case __WEBPACK_IMPORTED_MODULE_0__auth_actions__["b" /* SET_UNAUTHENTICATED */]:
            return {
                isAuthenticated: false
            };
        default: {
            return state;
        }
    }
}
var getIsAuth = function (state) { return state.isAuthenticated; };


/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_ui_service__ = __webpack_require__("../../../../../src/app/shared/ui.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_ui_actions__ = __webpack_require__("../../../../../src/app/shared/ui.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_actions__ = __webpack_require__("../../../../../src/app/auth/auth.actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(router, afAuth, trainingService, uiService, store) {
        this.router = router;
        this.afAuth = afAuth;
        this.trainingService = trainingService;
        this.uiService = uiService;
        this.store = store;
    }
    AuthService.prototype.initAuthListener = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__auth_actions__["c" /* SetAuthenticated */]());
                _this.router.navigate(['/training']);
            }
            else {
                _this.trainingService.cancelSubscriptions();
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_7__auth_actions__["d" /* SetUnauthenticated */]());
                _this.router.navigate(['/login']);
            }
        });
    };
    AuthService.prototype.registerUser = function (authData) {
        var _this = this;
        // this.uiService.loadingStateChanged.next(true);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__shared_ui_actions__["c" /* StartLoading */]());
        this.afAuth.auth
            .createUserWithEmailAndPassword(authData.email, authData.password)
            .then(function (result) {
            // this.uiService.loadingStateChanged.next(false);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__shared_ui_actions__["d" /* StopLoading */]());
        })
            .catch(function (error) {
            // this.uiService.loadingStateChanged.next(false);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__shared_ui_actions__["d" /* StopLoading */]());
            _this.uiService.showSnackbar(error.message, null, 3000);
        });
    };
    AuthService.prototype.login = function (authData) {
        var _this = this;
        // this.uiService.loadingStateChanged.next(true);
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__shared_ui_actions__["c" /* StartLoading */]());
        this.afAuth.auth
            .signInWithEmailAndPassword(authData.email, authData.password)
            .then(function (result) {
            // this.uiService.loadingStateChanged.next(false);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__shared_ui_actions__["d" /* StopLoading */]());
        })
            .catch(function (error) {
            // this.uiService.loadingStateChanged.next(false);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__shared_ui_actions__["d" /* StopLoading */]());
            _this.uiService.showSnackbar(error.message, null, 3000);
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__training_training_service__["a" /* TrainingService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_ui_service__["a" /* UIService */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\n  width: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <form\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center center\"\n    fxLayoutGap=\"10px\"\n    [formGroup]=\"loginForm\"\n    (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <input\n        type=\"email\"\n        matInput\n        placeholder=\"Your email\"\n        formControlName=\"email\">\n      <mat-hint>Please enter a valid email.</mat-hint>\n      <mat-error>Invalid or missing email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input\n        type=\"password\"\n        matInput\n        placeholder=\"Your password\"\n        formControlName=\"password\">\n      <mat-hint>Please enter your password.</mat-hint>\n      <mat-error>Missing password.</mat-error>\n    </mat-form-field>\n    <button *ngIf=\"!(isLoading$ | async)\" type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"loginForm.invalid\">Submit</button>\n    <mat-spinner *ngIf=\"isLoading$ | async\"></mat-spinner>\n  </form>\n</section>\n\n<!-- <ol>\n  <li>Add an email and password field (with Material Components of course)</li>\n  <li>Add validation (email => required and email, password => required)</li>\n  <li>Show errors and hints</li>\n  <li>Make form submittable and disable button if invalid</li>\n  <li>BONUS: Do all of that by using the reactive approach!</li>\n</ol> -->\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_ui_service__ = __webpack_require__("../../../../../src/app/shared/ui.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, uiService, store) {
        this.authService = authService;
        this.uiService = uiService;
        this.store = store;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.isLoading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__app_reducer__["b" /* getIsLoading */]);
        // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(
        //   isLoading => {
        //     this.isLoading = isLoading;
        //   }
        // );
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', {
                validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email]
            }),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', { validators: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required] })
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.authService.login({
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_ui_service__["a" /* UIService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\n  width: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"signup-form\">\n  <form fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <mat-form-field>\n      <input type=\"email\" matInput placeholder=\"Your email\" ngModel name=\"email\" email required #emailInput=\"ngModel\">\n      <mat-error *ngIf=\"emailInput.hasError('required')\">Field must not be empty.</mat-error>\n      <mat-error *ngIf=\"!emailInput.hasError('required')\">E-Mail is invalid.</mat-error>\n    </mat-form-field>\n    <mat-form-field hintLabel=\"Should be at least 6 characters long.\">\n      <input type=\"password\" matInput placeholder=\"Your password\" ngModel name=\"password\" required minlength=\"6\" #pwInput=\"ngModel\">\n      <mat-hint align=\"end\">{{ pwInput.value?.length }} / 6</mat-hint>\n      <mat-error>Has to be at least 6 characters long.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input matInput placeholder=\"Your birthdate\" [matDatepicker]=\"picker\" [max]=\"maxDate\" ngModel name=\"birthdate\" required>\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n    <mat-checkbox ngModel name=\"agree\" required color=\"primary\">Agree to Terms and Conditions.</mat-checkbox>\n    <button *ngIf=\"!(isLoading$ | async)\" type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"f.invalid\">Submit</button>\n    <mat-spinner *ngIf=\"isLoading$ | async\"></mat-spinner>\n  </form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_ui_service__ = __webpack_require__("../../../../../src/app/shared/ui.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, uiService, store) {
        this.authService = authService;
        this.uiService = uiService;
        this.store = store;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.isLoading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__app_reducer__["b" /* getIsLoading */]);
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    };
    SignupComponent.prototype.onSubmit = function (form) {
        this.authService.registerUser({
            email: form.value.email,
            password: form.value.password
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_ui_service__["a" /* UIService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBarModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatSnackBarModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none;\n  color: white;\n}\n\na:hover,\na:active {\n  color: lightgray;\n}\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.nav-caption {\n  display: inline-block;\n  padding-left: 6px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div fxHide.gt-xs>\n    <button mat-icon-button (click)=\"onToggleSidenav()\">\n      <mat-icon>menu</mat-icon>\n    </button>\n  </div>\n  <div>\n    <a routerLink=\"/\">Stay-fit</a>\n  </div>\n  <div fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide.xs>\n    <ul fxLayout fxLayoutGap=\"10px\" class=\"navigation-items\">\n      <li *ngIf=\"!(isAuth$ | async)\">\n        <a routerLink=\"/signup\">Signup</a>\n      </li>\n      <li *ngIf=\"!(isAuth$ | async)\">\n        <a routerLink=\"/login\">Login</a>\n      </li>\n      <li *ngIf=\"isAuth$ | async\">\n        <a routerLink=\"/training\">Training</a>\n      </li>\n      <li *ngIf=\"isAuth$ | async\">\n        <a style=\"cursor: pointer\" (click)=\"onLogout()\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store, authService) {
        this.store = store;
        this.authService = authService;
        this.sidenavToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.isAuth$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__app_reducer__["a" /* getIsAuth */]);
    };
    HeaderComponent.prototype.onToggleSidenav = function () {
        this.sidenavToggle.emit();
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/navigation/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/sidenav-list/sidenav-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n  text-decoration: none;\n  color: white;\n}\n\na:hover,\na:active {\n  color: lightgray;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/sidenav-list/sidenav-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <a mat-list-item routerLink=\"/signup\" (click)=\"onClose()\" *ngIf=\"!(isAuth$ | async)\">\n    <mat-icon>face</mat-icon>\n    <span class=\"nav-caption\">Signup</span>\n  </a>\n  <a mat-list-item routerLink=\"/login\" (click)=\"onClose()\" *ngIf=\"!(isAuth$ | async)\">\n    <mat-icon>input</mat-icon>\n    <span class=\"nav-caption\">Login</span>\n  </a>\n  <a mat-list-item routerLink=\"/training\" (click)=\"onClose()\" *ngIf=\"isAuth$ | async\">\n    <mat-icon>fitness_center</mat-icon>\n    <span class=\"nav-caption\">Training</span>\n  </a>\n  <mat-list-item>\n    <button mat-icon-button (click)=\"onLogout()\" *ngIf=\"isAuth$ | async\">\n      <mat-icon>eject</mat-icon>\n      <span class=\"nav-caption\">Logout</span>\n    </button>\n  </mat-list-item>\n</mat-nav-list>\n"

/***/ }),

/***/ "../../../../../src/app/navigation/sidenav-list/sidenav-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_reducer__ = __webpack_require__("../../../../../src/app/app.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(authService, store) {
        this.authService = authService;
        this.store = store;
        this.closeSidenav = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SidenavListComponent.prototype.ngOnInit = function () {
        this.isAuth$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__app_reducer__["a" /* getIsAuth */]);
    };
    SidenavListComponent.prototype.onClose = function () {
        this.closeSidenav.emit();
    };
    SidenavListComponent.prototype.onLogout = function () {
        this.onClose();
        this.authService.logout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SidenavListComponent.prototype, "closeSidenav", void 0);
    SidenavListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidenav-list',
            template: __webpack_require__("../../../../../src/app/navigation/sidenav-list/sidenav-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/sidenav-list/sidenav-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/ui.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return START_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return STOP_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StartLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StopLoading; });
var START_LOADING = '[UI] Start Loading';
var STOP_LOADING = '[UI] Stop Loading';
var StartLoading = /** @class */ (function () {
    function StartLoading() {
        this.type = START_LOADING;
    }
    return StartLoading;
}());

var StopLoading = /** @class */ (function () {
    function StopLoading() {
        this.type = STOP_LOADING;
    }
    return StopLoading;
}());



/***/ }),

/***/ "../../../../../src/app/shared/ui.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = uiReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getIsLoading; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ui_actions__ = __webpack_require__("../../../../../src/app/shared/ui.actions.ts");

var initialState = {
    isLoading: false
};
function uiReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__ui_actions__["a" /* START_LOADING */]:
            return {
                isLoading: true
            };
        case __WEBPACK_IMPORTED_MODULE_0__ui_actions__["b" /* STOP_LOADING */]:
            return {
                isLoading: false
            };
        default: {
            return state;
        }
    }
}
var getIsLoading = function (state) { return state.isLoading; };


/***/ }),

/***/ "../../../../../src/app/shared/ui.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UIService = /** @class */ (function () {
    function UIService(snackbar) {
        this.snackbar = snackbar;
    }
    UIService.prototype.showSnackbar = function (message, action, duration) {
        this.snackbar.open(message, action, {
            duration: duration
        });
    };
    UIService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBar */]])
    ], UIService);
    return UIService;
}());



/***/ }),

/***/ "../../../../../src/app/training/training.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET_AVAILABLE_TRAININGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_FINISHED_TRAININGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return START_TRAINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STOP_TRAINING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SetAvailableTrainings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SetFinishedTrainings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return StartTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return StopTraining; });
var SET_AVAILABLE_TRAININGS = '[Training] Set Available Trainings';
var SET_FINISHED_TRAININGS = '[Training] Set Finished Trainings';
var START_TRAINING = '[Training] Start Training';
var STOP_TRAINING = '[Training] Stop Training';
var SetAvailableTrainings = /** @class */ (function () {
    function SetAvailableTrainings(payload) {
        this.payload = payload;
        this.type = SET_AVAILABLE_TRAININGS;
    }
    return SetAvailableTrainings;
}());

var SetFinishedTrainings = /** @class */ (function () {
    function SetFinishedTrainings(payload) {
        this.payload = payload;
        this.type = SET_FINISHED_TRAININGS;
    }
    return SetFinishedTrainings;
}());

var StartTraining = /** @class */ (function () {
    function StartTraining(payload) {
        this.payload = payload;
        this.type = START_TRAINING;
    }
    return StartTraining;
}());

var StopTraining = /** @class */ (function () {
    function StopTraining() {
        this.type = STOP_TRAINING;
    }
    return StopTraining;
}());



/***/ }),

/***/ "../../../../../src/app/training/training.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["e"] = trainingReducer;
/* unused harmony export getTrainingState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAvailableExercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getFinishedExercises; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getActiveTraining; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getIsTraining; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__training_actions__ = __webpack_require__("../../../../../src/app/training/training.actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    availableExercises: [],
    finishedExercises: [],
    activeTraining: null
};
function trainingReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__training_actions__["a" /* SET_AVAILABLE_TRAININGS */]:
            return __assign({}, state, { availableExercises: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__training_actions__["b" /* SET_FINISHED_TRAININGS */]:
            return __assign({}, state, { finishedExercises: action.payload });
        case __WEBPACK_IMPORTED_MODULE_1__training_actions__["c" /* START_TRAINING */]:
            return __assign({}, state, { activeTraining: __assign({}, state.availableExercises.find(function (ex) { return ex.id === action.payload; })) });
        case __WEBPACK_IMPORTED_MODULE_1__training_actions__["d" /* STOP_TRAINING */]:
            return __assign({}, state, { activeTraining: null });
        default: {
            return state;
        }
    }
}
var getTrainingState = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["c" /* createFeatureSelector */])('training');
var getAvailableExercises = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getTrainingState, function (state) { return state.availableExercises; });
var getFinishedExercises = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getTrainingState, function (state) { return state.finishedExercises; });
var getActiveTraining = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getTrainingState, function (state) { return state.activeTraining; });
var getIsTraining = Object(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["d" /* createSelector */])(getTrainingState, function (state) { return state.activeTraining != null; });


/***/ }),

/***/ "../../../../../src/app/training/training.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_ui_service__ = __webpack_require__("../../../../../src/app/shared/ui.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_ui_actions__ = __webpack_require__("../../../../../src/app/shared/ui.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__training_actions__ = __webpack_require__("../../../../../src/app/training/training.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__training_reducer__ = __webpack_require__("../../../../../src/app/training/training.reducer.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TrainingService = /** @class */ (function () {
    function TrainingService(db, uiService, store) {
        this.db = db;
        this.uiService = uiService;
        this.store = store;
        this.fbSubs = [];
    }
    TrainingService.prototype.fetchAvailableExercises = function () {
        var _this = this;
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__shared_ui_actions__["c" /* StartLoading */]());
        this.fbSubs.push(this.db
            .collection('availableExercises')
            .snapshotChanges()
            .map(function (docArray) {
            // throw(new Error());
            return docArray.map(function (doc) {
                return {
                    id: doc.payload.doc.id,
                    name: doc.payload.doc.data().name,
                    duration: doc.payload.doc.data().duration,
                    calories: doc.payload.doc.data().calories
                };
            });
        })
            .subscribe(function (exercises) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__shared_ui_actions__["d" /* StopLoading */]());
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__training_actions__["e" /* SetAvailableTrainings */](exercises));
        }, function (error) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__shared_ui_actions__["d" /* StopLoading */]());
            _this.uiService.showSnackbar('Fetching Exercises failed, please try again later', null, 3000);
        }));
    };
    TrainingService.prototype.startExercise = function (selectedId) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__training_actions__["g" /* StartTraining */](selectedId));
    };
    TrainingService.prototype.completeExercise = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_7__training_reducer__["a" /* getActiveTraining */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* take */])(1)).subscribe(function (ex) {
            _this.addDataToDatabase(__assign({}, ex, { date: new Date(), state: 'completed' }));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__training_actions__["h" /* StopTraining */]());
        });
    };
    TrainingService.prototype.cancelExercise = function (progress) {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_7__training_reducer__["a" /* getActiveTraining */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* take */])(1)).subscribe(function (ex) {
            _this.addDataToDatabase(__assign({}, ex, { duration: ex.duration * (progress / 100), calories: ex.calories * (progress / 100), date: new Date(), state: 'completed' }));
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__training_actions__["h" /* StopTraining */]());
        });
    };
    TrainingService.prototype.fetchCompletedOrCancelledExercises = function () {
        var _this = this;
        this.fbSubs.push(this.db
            .collection('finishedExercises')
            .valueChanges()
            .subscribe(function (exercises) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__training_actions__["f" /* SetFinishedTrainings */](exercises));
        }));
    };
    TrainingService.prototype.cancelSubscriptions = function () {
        this.fbSubs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    TrainingService.prototype.addDataToDatabase = function (exercise) {
        this.db.collection('finishedExercises').add(exercise);
    };
    TrainingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_4__shared_ui_service__["a" /* UIService */],
            __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], TrainingService);
    return TrainingService;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".welcome {\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"welcome\" fxLayout=\"column\" fxLayout.gt-md=\"row\" fxLayoutGap.gt-md=\"20px\" fxLayoutAlign=\"center center\">\n  <section>\n    <h1>ACTIVITY</h1>\n    <p>Stay active and enjoy better health and more fun!</p>\n  </section>\n  <section>\n    <h1>COMMUNITY</h1>\n    <p>Get to know other people who share your passion!</p>\n  </section>\n  <section>\n    <h1>CHALLENGES</h1>\n    <p>Never stop! Dive into new challenges every day</p>\n  </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAofr6FU45fEpCMRwZtOOma1f-EYYQeObE",
        authDomain: "fitnessapp-8509d.firebaseapp.com",
        databaseURL: "https://fitnessapp-8509d.firebaseio.com",
        projectId: "fitnessapp-8509d",
        storageBucket: "fitnessapp-8509d.appspot.com",
        messagingSenderId: "331478031049",
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_18" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map