import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FundraiserDetailsPage } from './fundraiser-details';

@NgModule({
  declarations: [
    FundraiserDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FundraiserDetailsPage),
  ],
})
export class FundraiserDetailsPageModule {}
