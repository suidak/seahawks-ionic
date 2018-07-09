import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundraiserSearchPage } from './fundraiser-search';

@NgModule({
  declarations: [
    FundraiserSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(FundraiserSearchPage),
  ],
})
export class FundraiserSearchPageModule {}
