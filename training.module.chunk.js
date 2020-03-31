webpackJsonp(["training.module"],{

/***/ "../../../../../src/app/training/current-training/current-training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".current-training {\n  padding: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/current-training/current-training.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"current-training\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n    <mat-progress-spinner mode=\"determinate\" [value]=\"progress\"></mat-progress-spinner>\n    <h1>{{ progress }}%</h1>\n    <p>Keep on going, you can do it!</p>\n    <button mat-raised-button color=\"accent\" (click)=\"onStop()\">Stop</button>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/training/current-training/current-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentTrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stop_training_component__ = __webpack_require__("../../../../../src/app/training/current-training/stop-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__training_reducer__ = __webpack_require__("../../../../../src/app/training/training.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CurrentTrainingComponent = /** @class */ (function () {
    function CurrentTrainingComponent(dialog, trainingService, store) {
        this.dialog = dialog;
        this.trainingService = trainingService;
        this.store = store;
        this.progress = 0;
    }
    CurrentTrainingComponent.prototype.ngOnInit = function () {
        this.startOrResumeTimer();
    };
    CurrentTrainingComponent.prototype.startOrResumeTimer = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_6__training_reducer__["a" /* getActiveTraining */]).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* take */])(1)).subscribe(function (ex) {
            var step = ex.duration / 100 * 1000;
            _this.timer = setInterval(function () {
                _this.progress = _this.progress + 1;
                if (_this.progress >= 100) {
                    _this.trainingService.completeExercise();
                    clearInterval(_this.timer);
                }
            }, step);
        });
    };
    CurrentTrainingComponent.prototype.onStop = function () {
        var _this = this;
        clearInterval(this.timer);
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__stop_training_component__["a" /* StopTrainingComponent */], {
            data: {
                progress: this.progress
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.trainingService.cancelExercise(_this.progress);
            }
            else {
                _this.startOrResumeTimer();
            }
        });
    };
    CurrentTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-current-training',
            template: __webpack_require__("../../../../../src/app/training/current-training/current-training.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/current-training/current-training.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__training_service__["a" /* TrainingService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], CurrentTrainingComponent);
    return CurrentTrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/current-training/stop-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StopTrainingComponent; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var StopTrainingComponent = /** @class */ (function () {
    function StopTrainingComponent(passedData) {
        this.passedData = passedData;
    }
    StopTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-stop-training',
            template: "<h1 mat-dialog-title>Are you sure?</h1>\n            <mat-dialog-content>\n              <p>You already got {{ passedData.progress }}%</p>\n            </mat-dialog-content>\n            <mat-dialog-actions>\n              <button mat-button [mat-dialog-close]=\"true\">Yes</button>\n              <button mat-button [mat-dialog-close]=\"false\">No</button>\n            </mat-dialog-actions>"
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], StopTrainingComponent);
    return StopTrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/new-training/new-training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-training {\n  padding: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/new-training/new-training.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"new-training\" fxLayout fxLayoutAlign=\"center\">\n  <form (ngSubmit)=\"onStartTraining(f)\" #f=\"ngForm\">\n    <mat-card fxFlex.xs=\"100%\" fxFlex=\"400px\">\n      <mat-card-title fxLayoutAlign=\"center\">Time to start a workout!</mat-card-title>\n      <mat-card-content fxLayoutAlign=\"center\">\n        <mat-form-field *ngIf=\"!(isLoading$ | async) && exercises$ | async\">\n          <mat-select placeholder=\"Choose Exercise\" ngModel name=\"exercise\" required>\n            <mat-option *ngFor=\"let exercise of exercises$ | async\" [value]=\"exercise.id\">\n              {{ exercise.name }}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n        <mat-spinner *ngIf=\"isLoading$ | async\"></mat-spinner>\n      </mat-card-content>\n      <mat-card-actions fxLayoutAlign=\"center\" *ngIf=\"!(isLoading$ | async)\">\n        <button *ngIf=\"exercises$ | async\" type=\"submit\" mat-button [disabled]=\"f.invalid\">Start</button>\n        <button *ngIf=\"!(exercises$ | async)\" type=\"button\" mat-button (click)=\"fetchExercises()\">Fetch Again</button>\n      </mat-card-actions>\n    </mat-card>\n  </form>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/training/new-training/new-training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_ui_service__ = __webpack_require__("../../../../../src/app/shared/ui.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_reducer__ = __webpack_require__("../../../../../src/app/training/training.reducer.ts");
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






var NewTrainingComponent = /** @class */ (function () {
    function NewTrainingComponent(trainingService, uiService, store) {
        this.trainingService = trainingService;
        this.uiService = uiService;
        this.store = store;
    }
    NewTrainingComponent.prototype.ngOnInit = function () {
        this.isLoading$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__app_reducer__["b" /* getIsLoading */]);
        this.exercises$ = this.store.select(__WEBPACK_IMPORTED_MODULE_4__training_reducer__["b" /* getAvailableExercises */]);
        this.fetchExercises();
    };
    NewTrainingComponent.prototype.fetchExercises = function () {
        this.trainingService.fetchAvailableExercises();
    };
    NewTrainingComponent.prototype.onStartTraining = function (form) {
        this.trainingService.startExercise(form.value.exercise);
    };
    NewTrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-training',
            template: __webpack_require__("../../../../../src/app/training/new-training/new-training.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/new-training/new-training.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__training_service__["a" /* TrainingService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_ui_service__["a" /* UIService */],
            __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], NewTrainingComponent);
    return NewTrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/past-trainings/past-trainings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/past-trainings/past-trainings.component.html":
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"center center\">\n  <mat-form-field fxFlex=\"40%\">\n    <input matInput type=\"text\" (keyup)=\"doFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n</div>\n\n<mat-table [dataSource]=\"dataSource\" matSort>\n  <ng-container matColumnDef=\"date\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Date</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.date | date }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Name</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.name }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"calories\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Calories</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.calories | number }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"duration\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>Duration</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.duration | number }}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"state\">\n    <mat-header-cell *matHeaderCellDef mat-sort-header>State</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{ element.state }}</mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n\n<mat-paginator [pageSize]=\"1\" [pageSizeOptions]=\"[1, 5, 10, 20]\">\n</mat-paginator>\n"

/***/ }),

/***/ "../../../../../src/app/training/past-trainings/past-trainings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastTrainingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__training_reducer__ = __webpack_require__("../../../../../src/app/training/training.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PastTrainingsComponent = /** @class */ (function () {
    function PastTrainingsComponent(trainingService, store) {
        this.trainingService = trainingService;
        this.store = store;
        this.displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTableDataSource */]();
    }
    PastTrainingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_4__training_reducer__["c" /* getFinishedExercises */]).subscribe(function (exercises) {
            _this.dataSource.data = exercises;
        });
        this.trainingService.fetchCompletedOrCancelledExercises();
    };
    PastTrainingsComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    PastTrainingsComponent.prototype.doFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatSort */])
    ], PastTrainingsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatPaginator */])
    ], PastTrainingsComponent.prototype, "paginator", void 0);
    PastTrainingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-past-trainings',
            template: __webpack_require__("../../../../../src/app/training/past-trainings/past-trainings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/past-trainings/past-trainings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__training_service__["a" /* TrainingService */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], PastTrainingsComponent);
    return PastTrainingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/training-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_component__ = __webpack_require__("../../../../../src/app/training/training.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__training_component__["a" /* TrainingComponent */] }
];
var TrainingRoutingModule = /** @class */ (function () {
    function TrainingRoutingModule() {
    }
    TrainingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        })
    ], TrainingRoutingModule);
    return TrainingRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/training/training.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/training/training.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-tab-group *ngIf=\"!(ongoingTraining$ | async)\">\n  <mat-tab label=\"New Exercise\">\n    <app-new-training></app-new-training>\n  </mat-tab>\n  <mat-tab label=\"Past Exercises\">\n    <app-past-trainings></app-past-trainings>\n  </mat-tab>\n</mat-tab-group>\n<app-current-training *ngIf=\"ongoingTraining$ | async\"></app-current-training>\n"

/***/ }),

/***/ "../../../../../src/app/training/training.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrainingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_service__ = __webpack_require__("../../../../../src/app/training/training.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__training_reducer__ = __webpack_require__("../../../../../src/app/training/training.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(trainingService, store) {
        this.trainingService = trainingService;
        this.store = store;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        this.ongoingTraining$ = this.store.select(__WEBPACK_IMPORTED_MODULE_3__training_reducer__["d" /* getIsTraining */]);
    };
    TrainingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-training',
            template: __webpack_require__("../../../../../src/app/training/training.component.html"),
            styles: [__webpack_require__("../../../../../src/app/training/training.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__training_service__["a" /* TrainingService */], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/training/training.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__training_component__ = __webpack_require__("../../../../../src/app/training/training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__current_training_current_training_component__ = __webpack_require__("../../../../../src/app/training/current-training/current-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__new_training_new_training_component__ = __webpack_require__("../../../../../src/app/training/new-training/new-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__past_trainings_past_trainings_component__ = __webpack_require__("../../../../../src/app/training/past-trainings/past-trainings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__current_training_stop_training_component__ = __webpack_require__("../../../../../src/app/training/current-training/stop-training.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__training_routing_module__ = __webpack_require__("../../../../../src/app/training/training-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__training_reducer__ = __webpack_require__("../../../../../src/app/training/training.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__training_component__["a" /* TrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_3__current_training_current_training_component__["a" /* CurrentTrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__new_training_new_training_component__["a" /* NewTrainingComponent */],
                __WEBPACK_IMPORTED_MODULE_5__past_trainings_past_trainings_component__["a" /* PastTrainingsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__current_training_stop_training_component__["a" /* StopTrainingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__training_routing_module__["a" /* TrainingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* StoreModule */].forFeature('training', __WEBPACK_IMPORTED_MODULE_9__training_reducer__["e" /* trainingReducer */])
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__current_training_stop_training_component__["a" /* StopTrainingComponent */]]
        })
    ], TrainingModule);
    return TrainingModule;
}());



/***/ })

});
//# sourceMappingURL=training.module.chunk.js.map