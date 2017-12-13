import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuotesProvider} from '../../providers/quotes/quotes';

/**
 * Generated class for the CreateQuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-quote',
  templateUrl: 'create-quote.html',
})
export class CreateQuotePage {
  content;
  author;

  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesProvider: QuotesProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQuotePage');
  }

  onAddQuote(){
    this.quotesProvider.postQuote(this.content, this.author).subscribe(data => {
      console.log(data);
    });
  }

}
