import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQuotePage } from './create-quote';

@NgModule({
  declarations: [
    CreateQuotePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQuotePage),
  ],
})
export class CreateQuotePageModule {}
