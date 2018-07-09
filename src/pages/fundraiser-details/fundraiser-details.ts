import { Fundraiser } from './../../models/fundraiser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FundraiserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fundraiser-details',
  templateUrl: 'fundraiser-details.html',
})
export class FundraiserDetailsPage {

  f;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams) {
      this.f = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundraiserDetailsPage');
  }

}
