webpackJsonp([34],{

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundraiserDetailsPageModule", function() { return FundraiserDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fundraiser_details__ = __webpack_require__(361);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FundraiserDetailsPageModule = (function () {
    function FundraiserDetailsPageModule() {
    }
    FundraiserDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fundraiser_details__["a" /* FundraiserDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fundraiser_details__["a" /* FundraiserDetailsPage */]),
            ],
        })
    ], FundraiserDetailsPageModule);
    return FundraiserDetailsPageModule;
}());

//# sourceMappingURL=fundraiser-details.module.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundraiserDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FundraiserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FundraiserDetailsPage = (function () {
    function FundraiserDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.f = navParams.get('item');
    }
    FundraiserDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FundraiserDetailsPage');
    };
    FundraiserDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fundraiser-details',template:/*ion-inline-start:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\fundraiser-details\fundraiser-details.html"*/'<!--\n  Generated template for the FundraiserDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="secondary">\n        <ion-title center text-center>Details</ion-title>\n    </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n    \n    <ion-item>\n        <ion-icon name="heart" color="primary" item-start></ion-icon>\n        Raised\n        <ion-badge color="secondary" item-end>{{f.collectedDonations}} TND</ion-badge>\n      </ion-item>\n    <ion-item>\n        <ion-icon name="cash" color="primary" item-start></ion-icon>\n        Goal\n        <ion-badge color="secondary" item-end>{{f.goal}} TND</ion-badge>\n      </ion-item>\n      <ion-item>\n          <ion-icon name="pin" color="primary" item-start></ion-icon>\n          {{f.launcher.address.street}} {{f.launcher.address.city}} {{f.launcher.address.state}}\n          \n      </ion-item>\n      <ion-card>\n          \n          <img src="https://2.bp.blogspot.com/-54pIunDhkHw/V-3cwNl-XpI/AAAAAAAAF00/UufZTQtoXlcbMLoDpV_Y2zaqo5eZ30-dACLcB/s1600/says.com.jpg"/>\n          <ion-card-content>\n            <ion-card-title>\n              {{f.title}}\n              </ion-card-title>\n            <p>\n              {{f.description}}\n            </p>\n          </ion-card-content>\n          \n        </ion-card>\n        \n\n        \n\n          <ion-fab right bottom>\n              <button ion-fab color="light"><ion-icon name="arrow-dropleft"></ion-icon></button>\n              <ion-fab-list side="left">\n                <button ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n                <button ion-fab><ion-icon name="logo-twitter"></ion-icon></button>\n              \n                <button ion-fab><ion-icon name="logo-googleplus"></ion-icon></button>\n              </ion-fab-list>\n            </ion-fab>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\fundraiser-details\fundraiser-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], FundraiserDetailsPage);
    return FundraiserDetailsPage;
}());

//# sourceMappingURL=fundraiser-details.js.map

/***/ })

});
//# sourceMappingURL=34.js.map