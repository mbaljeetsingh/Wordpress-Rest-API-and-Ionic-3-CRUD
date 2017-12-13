import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuotesProvider} from '../../providers/quotes/quotes';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quotes;

  constructor(public navCtrl: NavController, public navParams: NavParams, private quotesProvider: QuotesProvider) {
    this.quotesProvider.getQuotes().subscribe(data => {
      console.log(data);
      this.quotes = data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotesPage');
  }

  onShowQuoteDetail(quote){
    this.navCtrl.push('QuotesDetailPage', {quote: quote});
  }

  onGoToCreateQuote(){
    this.navCtrl.push('CreateQuotePage')
  }

}
