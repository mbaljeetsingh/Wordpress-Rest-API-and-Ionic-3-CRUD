import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesDetailPage } from './quotes-detail';

@NgModule({
  declarations: [
    QuotesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesDetailPage),
  ],
})
export class QuotesDetailPageModule {}
