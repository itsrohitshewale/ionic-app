import { Component, OnInit } from '@angular/core';
import { IQuote } from '../model/quote.model';
import { QuoteService } from '../service/quote.service';
import { AlertController, ModalController } from '@ionic/angular';
import { QuotePage } from '../quote/quote.page';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  private favourites : IQuote[] = []

  constructor(private quoteService : QuoteService, 
    private alertController: AlertController, 
    private modalCtrl : ModalController) {   }

  ngOnInit() {
  }

  ionViewDidEnter() {
      this.favourites = this.quoteService.getFavourites();
      console.log(this.favourites)
  }

  async showRemovePopUp(quote : IQuote) {
    const alert = await this.alertController.create({
      header: '',
      subHeader: '',
      message: 'Would you like to remove this quote from Favourites?',
      buttons: [{text : 'Confirm',
                  handler: () => {
                    this.onUnfavouriteClick(quote);
                  }
                }, {text : 'Cancel',
                  handler: () => {
                  }
                }],
    });

    await alert.present();
  }

  onUnfavouriteClick(quote : IQuote) {
    this.quoteService.removeQuoteFromFavourite(quote)
  }

  populateModel() {
    this.favourites = this.quoteService.getFavourites();
  }

  onQuoteSelected(quote : IQuote) {
      this.modalCtrl.create({
        component : QuotePage,
        componentProps : {
          quote : quote 
        }
      }).then(modal => {
        modal.present();
        modal.onDidDismiss().then(resposne => {
          if (resposne.data) {
              this.quoteService.removeQuoteFromFavourite(quote)
              this.populateModel()
          }
        });
      })
  }
}
