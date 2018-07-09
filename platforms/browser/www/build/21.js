webpackJsonp([21],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReportPageModule", function() { return ListReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_time_ago_pipe__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_time_ago_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_time_ago_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_report__ = __webpack_require__(366);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// The translate loader needs to know where to load i18n files
// in Ionic';




var ListReportPageModule = (function () {
    function ListReportPageModule() {
    }
    ListReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__list_report__["a" /* ListReportPage */],
                __WEBPACK_IMPORTED_MODULE_0_time_ago_pipe__["TimeAgoPipe"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__list_report__["a" /* ListReportPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__list_report__["a" /* ListReportPage */]
            ]
        })
    ], ListReportPageModule);
    return ListReportPageModule;
}());

//# sourceMappingURL=list-report.module.js.map

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

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_FoundReports_FoundReports__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
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
 * Generated class for the ListReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListReportPage = (function () {
    function ListReportPage(navCtrl, foundReports, modalCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.foundReports = foundReports;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.reports = "All";
        this.foundReports.query().subscribe(function (resp) {
            _this.currentFoundReports = (resp);
        }, function (err) {
            console.log(err);
        });
        this.foundReports.queryClosed().subscribe(function (resp) {
            _this.currentFoundReportsclosed = (resp);
        });
        this.foundReports.queryUrgent().subscribe(function (resp) {
            _this.currentFoundReportsurgent = (resp);
        });
    }
    ListReportPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListReportPage');
    };
    ListReportPage.prototype.addItem = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('ReportCreatePage');
        addModal.onDidDismiss(function (foundreport) {
            if (foundreport) {
                _this.foundReports.add(foundreport).subscribe(function (resp) {
                    console.log(resp);
                    _this.foundReports.query().subscribe(function (resp) {
                        _this.currentFoundReports = (resp);
                    }, function (err) {
                        console.log(err);
                    });
                    _this.foundReports.queryClosed().subscribe(function (resp) {
                        _this.currentFoundReportsclosed = (resp);
                    });
                    _this.foundReports.queryUrgent().subscribe(function (resp) {
                        _this.currentFoundReportsurgent = (resp);
                    });
                    var toast = _this.toastCtrl.create({
                        message: "Report Submitted, 21 Days until a Welfare Org Takes over.",
                        duration: 8000,
                        position: 'bottom'
                    });
                    toast.present();
                }, function (err) {
                    console.log(err);
                    _this.foundReports.query().subscribe(function (resp) {
                        _this.currentFoundReports = (resp);
                    }, function (err) {
                        console.log(err);
                    });
                    _this.foundReports.queryClosed().subscribe(function (resp) {
                        _this.currentFoundReportsclosed = (resp);
                    });
                    _this.foundReports.queryUrgent().subscribe(function (resp) {
                        _this.currentFoundReportsurgent = (resp);
                    });
                    var toast = _this.toastCtrl.create({
                        message: "No Report Submitted, 21 Days until a Welfare Org Takes over.",
                        duration: 8000,
                        position: 'bottom'
                    });
                    toast.present();
                });
            }
        });
        addModal.present();
    };
    ListReportPage.prototype.openItem = function (item) {
        this.navCtrl.push('reportDetailPage', {
            item: item
        });
    };
    ListReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-list-report',template:/*ion-inline-start:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\list-report\list-report.html"*/'<ion-header>\n  \n  <ion-navbar>    \n      <ion-title>{{ \'Reports\' | translate }}</ion-title>\n  \n      <ion-buttons end>\n        <button ion-button icon-only (click)="addItem()">\n          <ion-icon name="add" color="secondary"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="search()">\n            <ion-icon name="search" color="secondary"></ion-icon>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  <ion-content>\n      <div padding >\n        <ion-segment color="secondary" [(ngModel)]="reports">\n          <ion-segment-button value="All">\n            All\n          </ion-segment-button>\n          <ion-segment-button value="urgent">\n            Urgent\n          </ion-segment-button>\n          <ion-segment-button value="closed">\n            Closed\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n      \n      <div [ngSwitch]="reports">\n        <ion-list *ngSwitchCase="\'All\'">\n        \n  <ion-card  *ngFor="let f of currentFoundReports">\n    \n          <img src="http://192.168.1.4:18080/seahawks-web/{{f.profilePic}}">\n         \n    <ion-card-content style="padding:0px 0px;">\n        <ion-row style="background-color:#009688;padding-left:10px;padding-right:0px;">\n            \n            <ion-row style="padding-bottom:0px; padding-right:0px;display:flex;justify-content:space-between;width:100%;">\n                <img src="http://192.168.1.4:18080/seahawks-web/Assets/country/{{f.localisation.country}}.png" style="flex:10;width:30px;height:40px; padding-top:6px; padding-bottom:1px;" >                              \n                \n              <h4 style=" color:white;margin-left:0%;flex:70;" padding >\n                {{f.title}}\n              </h4>\n              <p padding align="right" style="flex:20;padding-right:5px; font-size:70%; color:white;left:0"  > \n                {{f.date | timeAgo}}\n              </p>\n            </ion-row>\n           \n        </ion-row>\n      </ion-card-content>\n      <ion-row>\n        {{f.descrition}}\n      </ion-row>\n          <ion-row >\n            <ion-col>\n              <button ion-button color="secondary" clear small icon-start>\n                  <ion-icon name=\'thumbs-up\'></ion-icon>\n                  12 reviews\n                </button>\n            </ion-col>\n            \n            <ion-col text-right>\n                <button ion-button color="secondary" clear small icon-start>\n                    <ion-icon name=\'at\'></ion-icon>\n                    {{f.reporterUser.login}}\n                  </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n          ...\n        </ion-list>\n      \n        <ion-list *ngSwitchCase="\'closed\'">\n          <ion-card  *ngFor="let fc of currentFoundReportsclosed">\n            \n                  <img src="http://192.168.1.4:18080/seahawks-web/{{fc.profilePic}}">\n                 \n                  <ion-card-content style="padding:0px 0px;">\n                      <ion-row style="background-color:#2ecc71;padding-left:10px;padding-right:0px;">\n                          \n                          <ion-row style="padding-bottom:0px; padding-right:0px;display:flex;justify-content:space-between;width:100%;">\n                              <img src="http://192.168.1.4:18080/seahawks-web/Assets/country/{{f.localisation.country}}.png" style="flex:10;width:30px;height:40px; padding-top:6px; padding-bottom:1px;" >                              \n                              \n                            <h4 style=" color:white;margin-left:0%;flex:70;" padding >\n                              {{fc.title}}\n                            </h4>\n                            <p padding align="right" style="flex:20;padding-right:5px; font-size:70%; color:white;left:0"  > \n                              {{fc.date | timeAgo}}\n                            </p>\n                          </ion-row>\n                         \n                      </ion-row>\n                    </ion-card-content>\n                  <ion-row >\n                    <ion-col>\n                      <button ion-button color="secondary" clear small icon-start>\n                          <ion-icon name=\'thumbs-up\'></ion-icon>\n                          12 reviews\n                        </button>\n                    </ion-col>\n                    \n                    <ion-col text-right>\n                        <button ion-button color="secondary" clear small icon-start>\n                            <ion-icon name=\'at\'></ion-icon>\n                            {{fc.reporterUser.login}}\n                          </button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card>\n          ...\n        </ion-list>\n        <ion-list *ngSwitchCase="\'urgent\'">\n          <ion-card  *ngFor="let fu of currentFoundReportsurgent">\n            \n                  <img style="max-height:360px!important;" src="http://192.168.1.4:18080/seahawks-web/{{fu.profilePic}}">\n                 \n                  <ion-card-content style="padding:0px 0px;">\n                      <ion-row style="background-color:#c0392b;padding-left:10px;padding-right:0px;">\n                          \n                          <ion-row style="padding-bottom:0px; padding-right:0px;display:flex;justify-content:space-between;width:100%;">\n                              <img src="http://192.168.1.4:18080/seahawks-web/assets/country/{{fu.localisation.country}}.png" style="flex:10;width:30px;height:40px; padding-top:6px; padding-bottom:1px;" >                              \n                              \n                            <h4 style=" color:white;margin-left:0%;flex:70;" padding >\n                              {{fu.title}}\n                            </h4>\n                            <p padding align="right" style="flex:20;padding-right:5px; font-size:70%; color:white;left:0"  > \n                              {{fu.date | timeAgo}}\n                            </p>nt\n                          </ion-row>\n                         \n                      </ion-row>\n                    </ion-card-content>\n                  <ion-row >\n                    <ion-col>\n                      <button ion-button color="secondary" clear small icon-start>\n                          <ion-icon name=\'thumbs-up\'></ion-icon>\n                          12 reviews\n                        </button>\n                    </ion-col>\n                    \n                    <ion-col text-right>\n                        <button ion-button color="secondary" clear small icon-start>\n                            <ion-icon name=\'at\'></ion-icon>\n                            {{fu.reporterUser.login}}\n                          </button>\n                    </ion-col>\n                  </ion-row>\n                </ion-card>\n          ...\n        </ion-list>\n      </div>\n    </ion-content>\n    \n    \n    '/*ion-inline-end:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\list-report\list-report.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_FoundReports_FoundReports__["a" /* FoundReports */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
    ], ListReportPage);
    return ListReportPage;
}());

//# sourceMappingURL=list-report.js.map

/***/ })

});
//# sourceMappingURL=21.js.map