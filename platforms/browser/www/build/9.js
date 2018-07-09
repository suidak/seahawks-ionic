webpackJsonp([9],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCreatePageModule", function() { return ReportCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__report_create__ = __webpack_require__(369);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportCreatePageModule = (function () {
    function ReportCreatePageModule() {
    }
    ReportCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__report_create__["a" /* ReportCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__report_create__["a" /* ReportCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__report_create__["a" /* ReportCreatePage */]
            ]
        })
    ], ReportCreatePageModule);
    return ReportCreatePageModule;
}());

//# sourceMappingURL=report-create.module.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_FoundReports_FoundReports__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(231);
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
 * Generated class for the ReportCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReportCreatePage = (function () {
    function ReportCreatePage(nativeGeocoder, geolocation, navCtrl, viewCtrl, formBuilder, camera, foundReports) {
        var _this = this;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.foundReports = foundReports;
        this.fileread = false;
        this.form = formBuilder.group({
            profilePic: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            title: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(10)]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.latx = resp.coords.latitude;
            _this.longy = resp.coords.longitude;
            console.log(_this.latx);
            _this.nativeGeocoder.reverseGeocode(_this.latx, _this.longy)
                .then(function (result) { return console.log(JSON.stringify(result), _this.country = result.countryName.toLocaleLowerCase(), _this.city = result.administrativeArea, _this.street = result.thoroughfare, _this.zip = result.postalCode); })
                .catch(function (error) { return console.log(error); });
            //resp.coords.latitude
            // resp.coords.longitude
        }).catch(function (error) {
            console.log('Error getting location', error);
            _this.latx = 10.12;
            _this.longy = 10.12;
        });
    }
    ReportCreatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReportCreatePage');
    };
    ReportCreatePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.fileread = false;
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                sourceType: 1,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': data });
                _this.file = _this.form.controls['profilePic'].value;
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileread = true;
            this.fileInput.nativeElement.click();
        }
    };
    ReportCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        if (this.fileread) {
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                var imageData = readerEvent.target.result;
                _this.form.patchValue({ 'profilePic': imageData });
            };
            this.file = (event.target.files[0]);
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    ReportCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + 'data:image/jpg;base64,' + this.form.controls['profilePic'].value + ')';
    };
    /**
     * The user cancelled, so we dismiss without sending data back.
     */
    ReportCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    /**
      * The user is done and wants to create the item, so return it
      * back to the presenter.
      */
    ReportCreatePage.prototype.done = function () {
        var _this = this;
        if (!this.form.valid) {
            return;
        }
        this.foundreport = this.form.value;
        //geo
        /* let watch = this.geolocation.watchPosition();
         watch.subscribe((data) => {
          // data can be a set of coordinates, or an error (if an error occurred).
          // data.coords.latitude
          // data.coords.longitude
         });*/
        //geo
        if (this.fileread == true) {
            console.log("file Sending FileReader");
            console.log(this.file);
            this.foundReports.upload(this.form.controls['profilePic']).subscribe(function (resp) { return console.log(resp); }, function (err) {
                console.log('sending dismiss event');
                console.log(_this.latx);
                _this.foundreport.profilePic = err.error.text;
                _this.foundreport.localisation = { city: _this.city, street: _this.street, country: _this.country, zip: _this.zip, x: _this.latx, y: _this.longy };
                _this.foundreport.reporterUser = { id: 6 };
                _this.viewCtrl.dismiss(_this.foundreport);
            });
        }
        else {
            console.log("data Sending Camera");
            //console.log(this.file);
            this.foundReports.uploaddata(this.form.controls['profilePic'].value).subscribe(function (resp) {
                console.log(resp);
                console.log(_this.latx);
                _this.foundreport.profilePic = resp.text();
                _this.foundreport.localisation = { city: _this.city, street: _this.street, country: _this.country, zip: _this.zip, x: _this.latx, y: _this.longy };
                _this.foundreport.reporterUser = { id: 6 };
                _this.viewCtrl.dismiss(_this.foundreport);
            }, function (err) {
                console.log('sending dismiss event');
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ReportCreatePage.prototype, "fileInput", void 0);
    ReportCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'page-report-create',template:/*ion-inline-start:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\report-create\report-create.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <ion-title>{{ \'New Report\' | translate }}</ion-title>\n      <ion-buttons start>\n        <button ion-button (click)="cancel()">\n          <span color="primary" showWhen="ios">\n            {{ \'CANCEL_BUTTON\' | translate }}\n          </span>\n          <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-buttons end>\n        <button ion-button (click)="done()" [disabled]="!isReadyToSave" strong>\n          <span color="primary" showWhen="ios">\n            {{ \'DONE_BUTTON\' | translate }}\n          </span>\n          <ion-icon name="md-checkmark" showWhen="core,android,windows"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n    <form  [formGroup]="form" (ngSubmit)="addItem()" style="background-color:#1abc9c;" enctype="multipart/form-data">\n      <div style="background-color:#1abc9c;">\n      <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n      <div class="profile-image-wrapper" (click)="getPicture()" padding-bottom>\n        <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value" >\n          <ion-icon name="camera"></ion-icon>\n          <div>\n            {{ \'ITEM_CREATE_CHOOSE_IMAGE\' | translate }}\n          </div>\n        </div>\n        <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n      </div>\n    </div>\n      <ion-list>\n        <ion-item>\n          <ion-input type="text" placeholder="{{ \'ITEM_NAME_PLACEHOLDER\' | translate }}" formControlName="title"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type="text" placeholder="{{ \'ITEM_ABOUT_PLACEHOLDER\' | translate }}" formControlName="description"></ion-input>\n        </ion-item>\n      </ion-list>\n    </form>\n  </ion-content>'/*ion-inline-end:"D:\4TWIN2\CSA Angular\Angular Workspace\IonicSeahawks\src\pages\report-create\report-create.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1__providers_FoundReports_FoundReports__["a" /* FoundReports */]])
    ], ReportCreatePage);
    return ReportCreatePage;
}());

//# sourceMappingURL=report-create.js.map

/***/ })

});
//# sourceMappingURL=9.js.map