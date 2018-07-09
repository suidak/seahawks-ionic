webpackJsonp([2],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundraiserListPageModule", function() { return FundraiserListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fundraiser_list__ = __webpack_require__(362);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FundraiserListPageModule = (function () {
    function FundraiserListPageModule() {
    }
    FundraiserListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fundraiser_list__["a" /* FundraiserListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fundraiser_list__["a" /* FundraiserListPage */]),
            ],
        })
    ], FundraiserListPageModule);
    return FundraiserListPageModule;
}());

//# sourceMappingURL=fundraiser-list.module.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundraiserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_fundraisers_fundraiser_service__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__ = __webpack_require__(232);
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
 * Generated class for the FundraiserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FundraiserListPage = (function () {
    function FundraiserListPage(navCtrl, navParams, _fundraiserService, speechRecognition, plt, cd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fundraiserService = _fundraiserService;
        this.speechRecognition = speechRecognition;
        this.plt = plt;
        this.cd = cd;
        this.isRecording = false;
        this.data = [];
        this.getAllFundraisers();
    }
    FundraiserListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FundraiserListPage');
    };
    FundraiserListPage.prototype.getAllFundraisers = function () {
        var _this = this;
        //subscribe will actually execute the http request
        this._fundraiserService.getAllFundraisers().subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.data = data;
            console.log("data : " + _this.data);
        });
    };
    FundraiserListPage.prototype.openDetails = function (item) {
        this.navCtrl.push('FundraiserDetailsPage', {
            item: item
        });
    };
    //speech recognition functions
    FundraiserListPage.prototype.isIos = function () {
        return this.plt.is('ios');
    };
    FundraiserListPage.prototype.stopListening = function () {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
        });
    };
    FundraiserListPage.prototype.getPermission = function () {
        var _this = this;
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission();
            }
        });
    };
    FundraiserListPage.prototype.startListening = function () {
        var _this = this;
        var options = {
            language: 'en-US'
        };
        this.speechRecognition.startListening().subscribe(function (matches) {
            _this.matches = matches;
            _this.cd.detectChanges();
        });
        this.isRecording = true;
    };
    FundraiserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-fundraiser-list',template:/*ion-inline-start:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\fundraiser-list\fundraiser-list.html"*/'<!--\n  Generated template for the FundraiserListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-toolbar color="secondary">\n    \n    <ion-title center>Fundraisers</ion-title>\n    \n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-searchbar (ionInput)="filterItems($event)"></ion-searchbar>\n  <button ion-fab color="secondary" (click)="startListening()"><ion-icon name="mic"></ion-icon></button>\n  \n  <button ion-button full (click)="stopListening()" *ngIf="isIos()">Stop Listening</button>\n  \n  <ion-card>\n    <ion-card-header>This is what I understood...</ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item *ngFor="let match of matches">\n          {{ match }}\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n    <ion-card *ngFor="let f of data">\n        \n        <ion-item>\n          <ion-avatar item-start>\n            <img src="http://nathanrhale.com/wp-content/uploads/2015/01/round-avatar.png">\n          </ion-avatar>\n          <h2>{{f.title}}</h2>\n          <p>{{f.endDate | date}}</p>\n        </ion-item>\n      \n        <img src="{{f.location}}">\n      \n        <ion-card-content>\n          <p>\n            {{f.description}} TND Raised\n          </p>\n        </ion-card-content>\n      \n        <ion-row>\n          <ion-col>\n            <button ion-button icon-left clear small>\n              <ion-icon color="danger" name="heart"></ion-icon>\n              <div>Donate</div>\n            </button>\n          </ion-col>\n  \n          <ion-col>\n            <button (click)="openDetails(f)" ion-button icon-left clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>Details</div>\n            </button>\n          </ion-col>\n          \n        </ion-row>\n      \n      </ion-card>\n      \n\n</ion-content>\n'/*ion-inline-end:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\fundraiser-list\fundraiser-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_fundraisers_fundraiser_service__["a" /* FundraiserService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]])
    ], FundraiserListPage);
    return FundraiserListPage;
}());

//# sourceMappingURL=fundraiser-list.js.map

/***/ })

});
//# sourceMappingURL=2.js.map