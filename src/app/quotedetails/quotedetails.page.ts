import { Component, OnInit } from '@angular/core';
import { IQuote } from '../model/quote.model';
import { QuoteService } from '../service/quote.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-quotedetails',
  templateUrl: './quotedetails.page.html',
  styleUrls: ['./quotedetails.page.scss'],
})

export class QuotedetailsPage implements OnInit {

  quote : {category : string, quotes : IQuote[], icon : string} = null;
  constructor(private quoteService : QuoteService, public alertController: AlertController) {

  }

  ionViewDidEnter() {
    this.quote = this.quoteService.getSelectedCategory()
    console.log(this.quote)
  }

  ngOnInit() {
  }

  onFavouriteClick(quote : IQuote) {
    this.quoteService.addQuoteInFavorite(quote)
  }

  onUnfavouriteClick(quote : IQuote) {
    this.quoteService.removeQuoteFromFavourite(quote)
  }

  async showRemovePopUp(quote : IQuote) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Would you like to remove this quote from Favourites?',
      buttons: [{text : 'Confirm',
                  handler: () => {
                    this.onUnfavouriteClick(quote);
                    console.log('Confirm pressed');
                  }
                }, {text : 'Cancel',
                  handler: () => {
                    console.log('Cancel pressed');
                  }
                }],
    });

    await alert.present();
  }

  async showAdditionPopUp(quote : IQuote) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Would you like to add this quote to Favourites?',
      buttons: [{text : 'Confirm',
                  handler: () => {
                    this.onFavouriteClick(quote);
                    console.log('Confirm pressed');
                  }
                }, {text : 'Cancel',
                    role :'Cancel',
                    handler: () => {
                    console.log('Cancel pressed');
                  }
                }],
    });

    await alert.present();
  }

  isQuoteSelected(quote : IQuote) {
    return this.quoteService.isQouteFavourite(quote);
  }

}