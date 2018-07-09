webpackJsonp([13],{

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundraiserSearchPageModule", function() { return FundraiserSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fundraiser_search__ = __webpack_require__(364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FundraiserSearchPageModule = (function () {
    function FundraiserSearchPageModule() {
    }
    FundraiserSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fundraiser_search__["a" /* FundraiserSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fundraiser_search__["a" /* FundraiserSearchPage */]),
            ],
        })
    ], FundraiserSearchPageModule);
    return FundraiserSearchPageModule;
}());

//# sourceMappingURL=fundraiser-search.module.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FundraiserSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_fundraisers_fundraiser_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_speech_recognition__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(119);
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
 * Generated class for the FundraiserSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FundraiserSearchPage = (function () {
    function FundraiserSearchPage(navCtrl, navParams, _fundraiserService, speechRecognition, plt, cd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fundraiserService = _fundraiserService;
        this.speechRecognition = speechRecognition;
        this.plt = plt;
        this.cd = cd;
        this.isRecording = false;
        this.searchTerm = "";
        this.data = [];
    }
    FundraiserSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FundraiserSearchPage');
    };
    FundraiserSearchPage.prototype.getAllFundraisers = function () {
        var _this = this;
        //subscribe will actually execute the http request
        this._fundraiserService.getAllFundraisers().subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.data = data;
            console.log("data : " + _this.data);
        });
    };
    FundraiserSearchPage.prototype.filterItems = function (ev) {
        var val = ev.target.value;
        if (this.searchTerm.length != 0) {
            this.data = this._fundraiserService.searchFundraisers({
                title: this.searchTerm
            });
            return;
        }
        if (!val || !val.trim()) {
            this.data = [];
            return;
        }
        this.data = this._fundraiserService.searchFundraisers({
            title: val
        });
    };
    FundraiserSearchPage.prototype.openDetails = function (item) {
        this.navCtrl.push('FundraiserDetailsPage', {
            item: item
        });
    };
    //speech recognition functions
    FundraiserSearchPage.prototype.isIos = function () {
        return this.plt.is('ios');
    };
    FundraiserSearchPage.prototype.stopListening = function () {
        var _this = this;
        this.speechRecognition.stopListening().then(function () {
            _this.isRecording = false;
        });
    };
    FundraiserSearchPage.prototype.startListening = function () {
        var _this = this;
        this.getPermission();
        var options = {
            language: 'en-US'
        };
        this.speechRecognition.startListening().subscribe(function (matches) {
            _this.matches = matches;
            _this.searchTerm = matches[0];
            _this.cd.detectChanges();
        });
        this.isRecording = true;
    };
    FundraiserSearchPage.prototype.getPermission = function () {
        var _this = this;
        this.speechRecognition.hasPermission()
            .then(function (hasPermission) {
            if (!hasPermission) {
                _this.speechRecognition.requestPermission();
            }
        });
    };
    FundraiserSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-fundraiser-search',template:/*ion-inline-start:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\fundraiser-search\fundraiser-search.html"*/'<!--\n  Generated template for the FundraiserSearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-toolbar color="secondary">\n        \n        <ion-title>Search</ion-title>\n        \n      </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n    <br>\n    <ion-searchbar [(ngModel)]="searchTerm" (input)="filterItems($event)">\n      \n    </ion-searchbar>\n    <ion-fab top right edge>\n      <button ion-fab mini color="primary" (click)="startListening()"><ion-icon name="mic"></ion-icon>\n      </button>\n    </ion-fab>\n    \n    <button ion-button full (click)="stopListening()" *ngIf="isIos()">Stop Listening</button>\n    \n  \n    <ion-card *ngIf="data.length < 0">\n        <p>No fundraisers found</p>\n    </ion-card>\n      <ion-card *ngFor="let f of data">\n          \n          <ion-item>\n            <ion-avatar item-start>\n             <!-- -->\n             <img src="{{ f.launcher.photo }}">\n            </ion-avatar>\n            <h2>{{f.title}}</h2>\n            <p>{{f.endDate | date}}</p>\n          </ion-item>\n        \n          <img src="{{f.location}}">\n        \n          <ion-card-content>\n            \n          </ion-card-content>\n        \n          <ion-row>\n            <ion-col>\n              <button ion-button icon-left clear small>\n                <ion-icon color="danger" name="heart"></ion-icon>\n                <div>Donate</div>\n              </button>\n            </ion-col>\n    \n            <ion-col>\n              <button (click)="openDetails(f)" ion-button icon-left clear small>\n                <ion-icon name="text"></ion-icon>\n                <div>Details</div>\n              </button>\n            </ion-col>\n            \n          </ion-row>\n        \n        </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\fundraiser-search\fundraiser-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__providers_fundraisers_fundraiser_service__["a" /* FundraiserService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_speech_recognition__["a" /* SpeechRecognition */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__angular_core__["ChangeDetectorRef"]])
    ], FundraiserSearchPage);
    return FundraiserSearchPage;
}());

//# sourceMappingURL=fundraiser-search.js.map

/***/ })

});
//# sourceMappingURL=13.js.map