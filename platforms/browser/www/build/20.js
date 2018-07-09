webpackJsonp([20],{

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailPageModule", function() { return ReportDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_time_ago_pipe__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report_detail__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ReportDetailPageModule = (function () {
    function ReportDetailPageModule() {
    }
    ReportDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__report_detail__["a" /* ReportDetailPage */],
                __WEBPACK_IMPORTED_MODULE_1_time_ago_pipe__["TimeAgoPipe"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__report_detail__["a" /* ReportDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__report_detail__["a" /* ReportDetailPage */]
            ]
        })
    ], ReportDetailPageModule);
    return ReportDetailPageModule;
}());

//# sourceMappingURL=report-detail.module.js.map

/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(0);
var TimeAgoPipe = (function () {
    function TimeAgoPipe(changeDetectorRef, ngZone) {
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
    }
    TimeAgoPipe.prototype.transform = function (value) {
        var _this = this;
        this.removeTimer();
        var d = new Date(value);
        var now = new Date();
        var seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
        var timeToUpdate = this.getSecondsUntilUpdate(seconds) * 1000;
        this.timer = this.ngZone.runOutsideAngular(function () {
            if (typeof window !== 'undefined') {
                return window.setTimeout(function () {
                    _this.ngZone.run(function () { return _this.changeDetectorRef.markForCheck(); });
                }, timeToUpdate);
            }
            return null;
        });
        var minutes = Math.round(Math.abs(seconds / 60));
        var hours = Math.round(Math.abs(minutes / 60));
        var days = Math.round(Math.abs(hours / 24));
        var months = Math.round(Math.abs(days / 30.416));
        var years = Math.round(Math.abs(days / 365));
        if (seconds <= 45) {
            return 'a few seconds ago';
        }
        else if (seconds <= 90) {
            return 'a minute ago';
        }
        else if (minutes <= 45) {
            return minutes + ' minutes ago';
        }
        else if (minutes <= 90) {
            return 'an hour ago';
        }
        else if (hours <= 22) {
            return hours + ' hours ago';
        }
        else if (hours <= 36) {
            return 'a day ago';
        }
        else if (days <= 25) {
            return days + ' days ago';
        }
        else if (days <= 45) {
            return 'a month ago';
        }
        else if (days <= 345) {
            return months + ' months ago';
        }
        else if (days <= 545) {
            return 'a year ago';
        }
        else {
            return years + ' years ago';
        }
    };
    TimeAgoPipe.prototype.ngOnDestroy = function () {
        this.removeTimer();
    };
    TimeAgoPipe.prototype.removeTimer = function () {
        if (this.timer) {
            window.clearTimeout(this.timer);
            this.timer = null;
        }
    };
    TimeAgoPipe.prototype.getSecondsUntilUpdate = function (seconds) {
        var min = 60;
        var hr = min * 60;
        var day = hr * 24;
        if (seconds < min) {
            return 2;
        }
        else if (seconds < hr) {
            return 30;
        }
        else if (seconds < day) {
            return 300;
        }
        else {
            return 3600;
        }
    };
    return TimeAgoPipe;
}());
TimeAgoPipe = __decorate([
    core_1.Pipe({
        name: 'timeAgo',
        pure: false
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef, core_1.NgZone])
], TimeAgoPipe);
exports.TimeAgoPipe = TimeAgoPipe;
//# sourceMappingURL=time-ago-pipe.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__ = __webpack_require__(235);
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
 * Generated class for the ReportDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportDetailPage = (function () {
    function ReportDetailPage(socialSharing, formBuilder, googleMaps, navCtrl, navParams, foundreports, platform) {
        var _this = this;
        this.socialSharing = socialSharing;
        this.googleMaps = googleMaps;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.foundreports = foundreports;
        this.platform = platform;
        this.dir = 'ltr';
        if (navParams.get("item") == null) {
            this.navCtrl.push('ListReportPage');
        }
        this.foundreport = navParams.get('item');
        foundreports.queryReviews(this.foundreport.id).subscribe(function (resp) {
            _this.reviews = resp;
        });
        this.dir = platform.dir();
        this.form = formBuilder.group({
            content: ['', __WEBPACK_IMPORTED_MODULE_0__angular_forms__["f" /* Validators */].minLength(10)]
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    ReportDetailPage.prototype.ionViewDidLoad = function () {
        /*this.socialSharing.canShareViaEmail().then(() => {
         // Share via email
        this.socialSharing.shareViaEmail('Body', 'Subject', ['kouertani25@yahoo.fr']).then(() => {
          // Success!
        }).catch(() => {
          // Error!
          console.log("not sent");
        });
        }).catch(() => {
    console.log("no permissions");
    });*/
        this.loadMap();
        console.log('ionViewDidLoad ReportDetailPage');
    };
    ReportDetailPage.prototype.closereview = function (reviewid) {
        this.foundreports.rightAnswer(reviewid).subscribe(function (resp) { return console.log(resp); }, function (err) { return console.log(err); });
    };
    ReportDetailPage.prototype.addReview = function () {
        if (!this.form.valid) {
            return;
        }
        this.review = this.form.value;
        this.review.reviewer = { id: 6 };
        this.review.foundReport = this.foundreport;
        var data = {
            content: this.form.controls["content"].value,
            reviewer: 6,
            foundReport: this.foundreport.id
        };
        console.log(data);
        this.foundreports.addReviewprovider(data).subscribe(function (rese) {
            console.log("yaatik sahha");
        }, function (err) {
            console.log("me mchtech sahha");
        });
    };
    ReportDetailPage.prototype.loadMap = function () {
        var _this = this;
        var mapOptions = {
            camera: {
                target: {
                    lat: this.foundreport.localisation.x,
                    lng: this.foundreport.localisation.y
                },
                zoom: 12,
                tilt: 30
            }
        };
        this.map = __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */].create('map_canvas', mapOptions);
        // Wait the MAP_READY before using any methods.
        this.map.one(__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY)
            .then(function () {
            console.log('Map is ready!');
            // Now you can use all methods safely.
            _this.map.addMarker({
                title: _this.foundreport.title,
                icon: 'green',
                animation: 'DROP',
                position: {
                    lat: _this.foundreport.localisation.x,
                    lng: _this.foundreport.localisation.y
                }
            })
                .then(function (marker) {
                marker.on(__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MARKER_CLICK)
                    .subscribe(function () {
                    console.log('clicked');
                });
            });
        });
    };
    ReportDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-report-detail',template:/*ion-inline-start:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\report-detail\report-detail.html"*/'<!--\n  Generated template for the ReportDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="secondary">\n    \n    <ion-title >{{foundreport.title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content no-bounce>\n    \n    <ion-slides pager="true" dir="{{dir}}">\n      <ion-slide>\n        <img src="http://172.19.7.43:18080/seahawks-web/{{foundreport.profilePic}}" class="slide-image" />\n        <h2 class="slide-title"> {{foundreport.title}}</h2>\n        <p>{{foundreport.description}}</p>\n      </ion-slide>\n      <ion-slide>\n        <div id="map_canvas" style="margin-top:50px;margin-right:auto;margin-left:auto;height: 260px; width: 260px;"></div>\n        <h4 class="slide-title">Found near {{foundreport.localisation.street}}, {{foundreport.localisation.country}}, {{foundreport.localisation.city}}</h4>\n       \n      </ion-slide>\n      <ion-slide>\n          <h2 class="slide-title">Reviews</h2>\n          <ion-list>\n              <ion-item *ngFor="let freview of reviews">\n                \n                 \n                  <h2>@{{freview.reviewer.login}}</h2>\n                  <p>{{freview.content}}</p><p>{{freview.reviewDate | timeAgo}}</p>\n                  \n          \n                \n                  <button *ngIf="foundreport.isClosed==false" ion-button item-end color="secondary" (click)="closereview(freview.id);">\n                    Right\n                \n                  </button>\n              </ion-item>\n              <ion-item>\n                \n              </ion-item>\n             \n                  <form  [formGroup]="form"  style="border-color:#1abc9c;">\n                      <ion-input type="text" placeholder="{{ Content | translate }}" formControlName="content"></ion-input>   \n                      <button ion-button item-end color="secondary" (click)="addReview()">\n                          Add\n                          \n                            </button>\n                        </form>\n             \n               \n            </ion-list>\n        </ion-slide>\n    </ion-slides>\n  </ion-content>\n'/*ion-inline-end:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\report-detail\report-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_maps__["a" /* GoogleMaps */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* FoundReports */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_platform_platform__["a" /* Platform */]])
    ], ReportDetailPage);
    return ReportDetailPage;
}());

//# sourceMappingURL=report-detail.js.map

/***/ })

});
//# sourceMappingURL=20.js.map