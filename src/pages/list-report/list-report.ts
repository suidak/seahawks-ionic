import { FoundReports } from './../../providers/FoundReports/FoundReports';
import { FoundReport } from './../../models/FoundReport';
import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ListReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-report',
  templateUrl: 'list-report.html',
})
export class ListReportPage {
  reports: string = "All";
  currentFoundReports: FoundReport[];
  currentFoundReportsclosed: FoundReport[];
  currentFoundReportsurgent: FoundReport[];
  
  
  imagename : string;
  constructor(public navCtrl: NavController, public foundReports: FoundReports,public modalCtrl : ModalController,    public toastCtrl: ToastController,
  ) {
      this.foundReports.query().subscribe(resp=>{
      this.currentFoundReports=(resp);
    },(err)=>{
      console.log(err)
    }
  );
    this.foundReports.queryClosed().subscribe(resp=>{
      this.currentFoundReportsclosed=(resp);
    });
    this.foundReports.queryUrgent().subscribe(resp=>{
      this.currentFoundReportsurgent=(resp);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListReportPage');
  }
  addItem() {
    let addModal = this.modalCtrl.create('ReportCreatePage');
    addModal.onDidDismiss(foundreport => {
      if (foundreport) {
        this.foundReports.add(foundreport).subscribe(resp=> {
          console.log(resp);
          this.foundReports.query().subscribe(resp=>{
            this.currentFoundReports=(resp);
          },(err)=>{
            console.log(err)
          }
        );
          this.foundReports.queryClosed().subscribe(resp=>{
            this.currentFoundReportsclosed=(resp);
          });
          this.foundReports.queryUrgent().subscribe(resp=>{
            this.currentFoundReportsurgent=(resp);
          });
          let toast = this.toastCtrl.create({
            message: "Report Submitted, 21 Days until a Welfare Org Takes over.",
            duration: 8000,
            position: 'bottom'
          });
          toast.present();
        },err=>{
          console.log(err);
          this.foundReports.query().subscribe(resp=>{
            this.currentFoundReports=(resp);
          },(err)=>{
            console.log(err)
          }
        );
          this.foundReports.queryClosed().subscribe(resp=>{
            this.currentFoundReportsclosed=(resp);
          });
          this.foundReports.queryUrgent().subscribe(resp=>{
            this.currentFoundReportsurgent=(resp);
          });          let toast = this.toastCtrl.create({
            message: "No Report Submitted, 21 Days until a Welfare Org Takes over.",
            duration: 8000,
            position: 'bottom'
          });
          toast.present();
        });
      }
    })
    addModal.present();
  }
  openItem(item: FoundReport) {
    this.navCtrl.push('reportDetailPage', {
      item: item
    });
  }
}
