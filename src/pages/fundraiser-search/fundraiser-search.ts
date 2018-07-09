import { FundraiserService } from './../../providers/fundraisers/fundraiser.service';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the FundraiserSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fundraiser-search',
  templateUrl: 'fundraiser-search.html',
})
export class FundraiserSearchPage {
  matches: String[];
  isRecording = false;
  searchTerm="";

  data:any[]=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public _fundraiserService: FundraiserService,
    private speechRecognition: SpeechRecognition, 
    private plt: Platform, 
    private cd: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundraiserSearchPage');
  }

  getAllFundraisers() {
    //subscribe will actually execute the http request
    this._fundraiserService.getAllFundraisers().subscribe(data => {
      // Read the result field from the JSON response.
      this.data = data;
      console.log("data : "+this.data);
    });
  }

  filterItems(ev) {
    let val = ev.target.value;
    
    if(this.searchTerm.length != 0){
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
  }

 


  openDetails(item) {
    this.navCtrl.push('FundraiserDetailsPage', {
      item: item
    });
  }


  //speech recognition functions
  isIos() {
    return this.plt.is('ios');
  }
  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }
  startListening() {
    this.getPermission();
    let options = {
      language: 'en-US'
    }
    this.speechRecognition.startListening().subscribe(matches => {
      this.matches = matches;
      this.searchTerm = matches[0];
      this.cd.detectChanges();
    });
    this.isRecording = true;
  }

  
  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

}
