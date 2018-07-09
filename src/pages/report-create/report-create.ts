import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { FoundReports } from './../../providers/FoundReports/FoundReports';
import { reportAddModel } from './../../models/reportAddModel';
import { FoundReport } from './../../models/FoundReport';
import { Camera } from '@ionic-native/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the ReportCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report-create',
  templateUrl: 'report-create.html',
})
export class ReportCreatePage {
  public file : File;
  @ViewChild('fileInput') fileInput;
  
    isReadyToSave: boolean;
    foundreport : reportAddModel;
    item: any;
    latx:number;
    longy:number;
    country:string;
    city:string;
    street:string;
    zip:string;
    form: FormGroup;
    fileread: boolean=false;
    imagepath:string;
  constructor(public nativeGeocoder: NativeGeocoder, public geolocation: Geolocation, public navCtrl: NavController, public viewCtrl: ViewController, formBuilder: FormBuilder, public camera: Camera,public foundReports: FoundReports) {
    this.form = formBuilder.group({
      profilePic: ['',Validators.required],
      title: ['', Validators.required],
      description: ['',Validators.minLength(10)]
    });
    
    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latx=resp.coords.latitude;
      this.longy=resp.coords.longitude;
      console.log(this.latx);
      this.nativeGeocoder.reverseGeocode(this.latx, this.longy)
      .then(
        (result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result),this.country=result.countryName.toLocaleLowerCase(),
        this.city=result.administrativeArea,this.street=result.thoroughfare,this.zip=result.postalCode
    
      )
    
      )
      .catch((error: any) => console.log(error));
    //resp.coords.latitude
    // resp.coords.longitude
   }).catch((error) => {
     console.log('Error getting location', error);
     this.latx=10.12;
     this.longy=10.12;
   });
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportCreatePage');
  }

  getPicture() {
    
    if (Camera['installed']()) {
      this.fileread=false;
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 96,
        encodingType : this.camera.EncodingType.JPEG ,
        mediaType : this.camera.MediaType.PICTURE ,
        sourceType: 1,
        targetHeight: 96
      }).then((data) => {
        this.form.patchValue({ 'profilePic': data });
        this.file= this.form.controls['profilePic'].value ;  
         

        
          
      }, (err) => {
        alert('Unable to take photo');
      })
    } else {
      this.fileread=true;
      this.fileInput.nativeElement.click();
    }
  }

  processWebImage(event) {
    if (this.fileread){
      let reader = new FileReader();
      reader.onload = (readerEvent) => {
  
        let imageData = (readerEvent.target as any).result;
        this.form.patchValue({ 'profilePic': imageData });
      };
      this.file = (event.target.files[0]);
  
      reader.readAsDataURL(event.target.files[0]);
    }
  
  }

  getProfileImageStyle() {
    return 'url(' +'data:image/jpg;base64,' +  this.form.controls['profilePic'].value + ')'
  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }
 /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.foundreport=this.form.value;
    //geo
  
    /* let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });*/
    //geo
    if(this.fileread==true){
      console.log("file Sending FileReader");
      console.log(this.file);
       this.foundReports.upload(this.form.controls['profilePic']).subscribe(
         resp=> console.log(resp), 
         err=> {
           console.log('sending dismiss event');
           console.log(this.latx);
           this.foundreport.profilePic=err.error.text;
         this.foundreport.localisation = { city: this.city,street:this.street,country:this.country,zip:this.zip,x:this.latx,y:this.longy };
         this.foundreport.reporterUser = {id:6};
         this.viewCtrl.dismiss(this.foundreport);
       });
    }else{
      console.log("data Sending Camera");
      //console.log(this.file);
       this.foundReports.uploaddata(this.form.controls['profilePic'].value).subscribe(
         resp=> {console.log(resp)
          console.log(this.latx);
          this.foundreport.profilePic=resp.text();
        this.foundreport.localisation = { city: this.city,street:this.street,country:this.country,zip:this.zip,x:this.latx,y:this.longy };
        this.foundreport.reporterUser = {id:6};
        this.viewCtrl.dismiss(this.foundreport); 
        }
          , 
         
         err=> {
           console.log('sending dismiss event');

       });
    }
   
    
  }
}
