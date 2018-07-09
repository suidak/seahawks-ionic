import { FoundReports } from './../../providers/FoundReports/FoundReports';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { FoundReport } from '../../models/FoundReport';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentFoundReports: FoundReport = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public foundReports: FoundReports) { }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.currentFoundReports = [];
      return;
    }
   
    this.currentFoundReports = this.foundReports.querySearch({
      title: val
    });
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: FoundReport) {
    this.navCtrl.push('ReportDetailPage', {
      item: item
    });
  }

}
