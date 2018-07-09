import { TimeAgoPipe } from 'time-ago-pipe';


// The translate loader needs to know where to load i18n files
// in Ionic';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListReportPage } from './list-report';

@NgModule({
  declarations: [
    ListReportPage,
    TimeAgoPipe
  ],
  imports: [
    IonicPageModule.forChild(ListReportPage),
    TranslateModule.forChild()
    
  ],
  exports: [
    ListReportPage
  ]
})
export class ListReportPageModule {}
