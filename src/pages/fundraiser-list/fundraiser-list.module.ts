import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundraiserListPage } from './fundraiser-list';

@NgModule({
  declarations: [
    FundraiserListPage,
  ],
  imports: [
    IonicPageModule.forChild(FundraiserListPage),
  ],
})
export class FundraiserListPageModule {}
