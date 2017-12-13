import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuotesPage } from './quotes';

@NgModule({
  declarations: [
    QuotesPage,
  ],
  imports: [
    IonicPageModule.forChild(QuotesPage),
  ],
})
export class QuotesPageModule {}
