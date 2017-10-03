webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_profile_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/my-profile/my-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






const routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_my_profile_my_profile_component__["a" /* MyProfileComponent */] },
            { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_4__dashboard_profile_profile_component__["a" /* ProfileComponent */] }
        ] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n  \n  "

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bucket_service__ = __webpack_require__("../../../../../src/app/bucket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_profile_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_my_profile_my_profile_component__ = __webpack_require__("../../../../../src/app/dashboard/my-profile/my-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modules





// Services


// Components





let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dashboard_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dashboard_my_profile_my_profile_component__["a" /* MyProfileComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__bucket_service__["a" /* BucketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bucket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BucketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let BucketService = class BucketService {
    constructor(http) {
        this.http = http;
        this.base = '/api/bucket';
        this.bucketsSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.buckets = this.bucketsSource.asObservable();
    }
    changeBuckets(buckets) {
        this.bucketsSource.next(buckets);
    }
    checkBucket(id) {
        return this.http.put(`${this.base}/${id}`, id)
            .map(response => response.json())
            .toPromise();
    }
    createBucket(bucket) {
        return this.http.post(`${this.base}`, bucket)
            .map(response => response.json())
            .toPromise();
    }
    getBuckets() {
        this.http.get(`${this.base}`)
            .map(response => response.json())
            .toPromise().then(buckets => {
            this.changeBuckets(buckets);
        });
    }
};
BucketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], BucketService);

var _a;
//# sourceMappingURL=bucket.service.js.map

/***/ }),

/***/ "../../../../../src/app/bucket.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Bucket {
    constructor() {
        this.title = '';
        this.description = '';
        this.accomplished = false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Bucket;

//# sourceMappingURL=bucket.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Bucket List</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['']\" class=\"nav-link\" href=\"#\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)='logout()'  href=\"#\">Logout</a>\n      </li>\n    </ul>\n  \n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bucket_service__ = __webpack_require__("../../../../../src/app/bucket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let DashboardComponent = class DashboardComponent {
    constructor(userService, bucketService, router) {
        this.userService = userService;
        this.bucketService = bucketService;
        this.router = router;
        this.users = [];
    }
    ngOnInit() {
        this.userService.getCurrentUser().then((user) => {
            this.userService.changeCurrentUser(user);
            this.userService.getAllUsers();
            this.bucketService.getBuckets();
            console.log('User Logged in');
        }).catch(() => {
            this.router.navigate(['/']);
        });
    }
    logout() {
        this.userService.logout().then(() => {
            this.userService.changeUsers([]);
            this.userService.changeCurrentUser(null);
            this.bucketService.changeBuckets([]);
            this.router.navigate(['/']);
        });
    }
};
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__bucket_service__["a" /* BucketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__bucket_service__["a" /* BucketService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/my-profile/my-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/my-profile/my-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <div class='col-8 col-md-6 mt-4 offset-1'>\n      <h2>Welcome, {{getUserName()}}!</h2>\n  </div>\n</div>\n\n<div class='row'>\n  <div class='col-8 col-md-6 mt-4 offset-1'>\n    <h3>New Bucket</h3>\n    <div class=\"form-group\" style=\"color:red\">{{bucketError}}</div>\n    <div class=\"createBucket\">\n      <form (submit)=\"createBucket(bucketForm)\" #bucketForm=\"ngForm\">\n\n        <div class=\"form-group\">\n          <label>Title:</label>\n          <input type=\"text\" name=\"title\" [(ngModel)]=\"bucket.title\" required class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n          <label>Description:</label>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" [(ngModel)]=\"bucket.description\" name=\"description\" required id=\"description\" rows=\"3\"></textarea>\n          </div>\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"users\">\n          <select [(ngModel)]=\"bucket.tagged_user_id\" name=\"tagged_user_id\">\n              <option *ngFor = \"let user of getOtherUsers()\" [ngValue]=user._id>{{user.name}}\n              </option>\n           </select>\n        </div>\n        <input type=\"submit\" value=\"Add To List\" [disabled]=\"!bucketForm.form.valid\" class=\"btn btn-primary\">\n        \n      </form>\n    </div>\n\n  </div>\n</div>\n<div class='row'>\n  <div class='col-8 col-md-6 mt-4 offset-1'>\n\n    <p>Before I die I want to...</p>\n\n    <ul *ngFor='let bucket of buckets'>\n\n      <li><input [checked]=\"bucket.accomplished\" (change)=\"checkBucket(bucket._id)\" type=\"checkbox\" class=\"form-check-input\"> {{getName(bucket)}}{{bucket.title}} - {{bucket.description}} - {{bucket.createdAt | date}}</li>\n\n    </ul>\n\n    <p>List of other user (click to view profile)</p>\n\n    <ul *ngFor='let user of getOtherUsers()'>\n\n      <li><a href=\"#\" [routerLink]=\"['user', user._id]\">{{user.name}}</a></li>\n\n    </ul>\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/my-profile/my-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bucket_service__ = __webpack_require__("../../../../../src/app/bucket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bucket__ = __webpack_require__("../../../../../src/app/bucket.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let MyProfileComponent = class MyProfileComponent {
    constructor(bucketService, userService, router) {
        this.bucketService = bucketService;
        this.userService = userService;
        this.router = router;
        this.bucket = new __WEBPACK_IMPORTED_MODULE_4__bucket__["a" /* Bucket */]();
        this.buckets = [];
        this.users = [];
        this.bucketError = '';
        this.bucketError = '';
    }
    ngOnInit() {
        this.userService.allUsers.subscribe(users => this.users = users);
        this.userService.currentUser.subscribe(user => this.currentUser = user);
        this.bucketService.buckets.subscribe(buckets => {
            buckets.forEach(bucket => {
                if (bucket.owner_id === this.currentUser._id || bucket.tagged_user_id === this.currentUser._id) {
                    this.buckets.push(bucket);
                }
            });
        });
    }
    getUserName() {
        let result;
        this.users.forEach(user => {
            if (user._id === this.currentUser._id) {
                result = user.name;
            }
        });
        return result;
    }
    getOtherUsers() {
        const temp = [];
        this.users.forEach((user) => {
            if (user._id !== this.currentUser._id) {
                temp.push(user);
            }
        });
        return temp;
    }
    checkBucket(id) {
        console.log('check box');
        this.bucketService.checkBucket(id)
            .then((bucket) => {
            this.buckets.forEach((item, index) => {
                if (item._id === id) {
                    this.buckets[index] = bucket;
                }
            });
        }).catch(err => {
            console.log(err);
        });
    }
    createBucket(form) {
        this.bucketError = '';
        this.bucketService.createBucket(this.bucket)
            .then((bucket) => {
            form.reset();
            const temp = this.buckets.concat(bucket);
            this.buckets = [];
            this.bucketService.changeBuckets(temp);
        }).catch(err => {
            console.log(err);
            this.bucketError = 'Something went wrong. Please verify that the title is >= 5 characters and the description >= 10 characters. ';
        });
    }
    getName(bucket) {
        if (bucket.owner_id === this.currentUser._id) {
            return this.getTaggedNameById(bucket.tagged_user_id);
        }
        if (bucket.tagged_user_id === this.currentUser._id) {
            return this.getTaggedNameById(bucket.owner_id);
        }
        return '';
    }
    getTaggedNameById(id) {
        let result = '';
        this.users.forEach(user => {
            if (user._id === id) {
                result = user.name + ' | ';
            }
        });
        return result;
    }
};
MyProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-my-profile',
        template: __webpack_require__("../../../../../src/app/dashboard/my-profile/my-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/my-profile/my-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__bucket_service__["a" /* BucketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__bucket_service__["a" /* BucketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], MyProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=my-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n    list-style: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n  <div class='col-8 col-md-6 mt-4 offset-1'>\n      <h2>{{userName}}'s Bucket List</h2>\n  </div>\n</div>\n\n<div class='row'>\n  <div class='col-8 col-md-6 mt-4 offset-1'>\n\n    <p *ngIf=\"userBucketsFinished.length\">Done</p>\n\n    <ul *ngFor='let bucket of userBucketsFinished'>\n\n      <li><input disabled [checked]=\"bucket.accomplished\" type=\"checkbox\" class=\"form-check-input\">        \n        {{getName(bucket)}} {{bucket.title}} - {{bucket.description}} - {{bucket.createdAt | date}}\n      </li>\n\n    </ul>\n\n    <p *ngIf=\"userBucketsNotFinished.length\">Pending</p>\n\n    <ul *ngFor='let bucket of userBucketsNotFinished'>\n\n      <li><input disabled [checked]=\"bucket.accomplished\"  type=\"checkbox\" class=\"form-check-input\">  \n        {{getName(bucket)}} {{bucket.title}} - {{bucket.description}} - {{bucket.createdAt | date}}\n      </li>\n\n    </ul>\n\n  </div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bucket_service__ = __webpack_require__("../../../../../src/app/bucket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let ProfileComponent = class ProfileComponent {
    constructor(bucketService, userService, route) {
        this.bucketService = bucketService;
        this.userService = userService;
        this.route = route;
        this.userName = '';
        this.users = [];
        this.buckets = [];
        this.userBucketsFinished = [];
        this.userBucketsNotFinished = [];
    }
    ngOnInit() {
        this.bucketService.buckets.subscribe(buckets => this.buckets = buckets);
        this.userService.currentUser.subscribe(user => this.currentUser = user);
        this.userService.allUsers.subscribe(users => this.users = users);
        this.sub = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.userName = this.getTaggedNameById(this.id);
            this.userName = this.userName.slice(0, this.userName.length - 3);
            this.buckets.forEach(bucket => {
                if (bucket.owner_id === this.id || bucket.tagged_user_id === this.id) {
                    this.addtoCorrectBucketList(bucket);
                }
            });
        });
    }
    addtoCorrectBucketList(bucket) {
        if (bucket.accomplished) {
            this.userBucketsFinished.push(bucket);
        }
        else if (!bucket.accomplished) {
            this.userBucketsNotFinished.push(bucket);
        }
    }
    getUserName() {
        return this.getTaggedNameById(this.id);
    }
    ngOnDestroy() {
        this.userBucketsFinished = [];
        this.userBucketsNotFinished = [];
        this.sub.unsubscribe();
    }
    getName(bucket) {
        if (bucket.tagged_user_id === this.id) {
            return this.getTaggedNameById(bucket.owner_id);
        }
        return '';
    }
    getTaggedNameById(id) {
        let result = '';
        this.users.forEach(user => {
            if (user._id === id) {
                result = user.name + ' | ';
            }
        });
        return result;
    }
};
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/dashboard/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__bucket_service__["a" /* BucketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__bucket_service__["a" /* BucketService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='row'>\n  <div class='col-4 col-sm-3 mt-4 offset-1'>\n    <h3>Bucket Lists</h3>\n    \n    <div class=\"registerLogin\">\n      <form (submit)=\"registerLogin()\" #loginForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label>Name:</label>\n            <input type=\"name\" name=\"name\" [(ngModel)]=\"user.name\" required class=\"form-control\">\n        </div>\n       \n        <input type=\"submit\" value=\"Enter\" [disabled]=\"!loginForm.form.valid\" class=\"btn btn-primary\">\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let HomeComponent = class HomeComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__user__["a" /* User */]();
        this.errorMessages = [];
    }
    ngOnInit() {
        this.userService.logout();
    }
    registerLogin() {
        this.userService.registerLogin(this.user)
            .then((user) => {
            console.log('DASHBAORD!');
            this.router.navigate(['/dashboard']);
        }).catch(err => console.log(err));
    }
    handleErrors(errors) {
        this.errorMessages = Array.isArray(errors) ? errors : [errors.message];
    }
};
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.base = '/api/user';
        this.allUsersSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        this.allUsers = this.allUsersSource.asObservable();
        this.currentUserSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.currentUser = this.currentUserSource.asObservable();
    }
    changeUsers(allUsers) {
        this.allUsersSource.next(allUsers);
    }
    changeCurrentUser(currentUser) {
        this.currentUserSource.next(currentUser);
    }
    getCurrentUser() {
        return this.http.get(`${this.base}`)
            .map(response => response.json())
            .toPromise();
    }
    getAllUsers() {
        this.http.get(`${this.base}/list`)
            .map(response => response.json())
            .toPromise().then(users => {
            this.changeUsers(users);
        });
    }
    registerLogin(user) {
        return this.http.post(`${this.base}`, user)
            .map(response => response.json())
            .toPromise();
    }
    logout() {
        return this.http.delete(`${this.base}`)
            .map(response => response.json())
            .toPromise();
    }
};
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class User {
    constructor() {
        this.name = '';
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = User;

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(err => console.log(err));
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map