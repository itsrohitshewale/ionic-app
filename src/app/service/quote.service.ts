import { Injectable } from "@angular/core";
import { IQuote } from '../model/quote.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
    providedIn : "root"
})
export class QuoteService {
    selectedCategory : {category : string, quotes : IQuote[], icon : string} = null
    favourites : IQuote[] = [];

    constructor(private httpClient : HttpClient, 
        private authService : AuthService) {}

    getQuotesData() {
        return this.httpClient.get("https://infracoredova.firebaseio.com/quotes.json", 
        {
            params: new HttpParams().set('auth', this.authService.getToken())
        })
       
    }
    addQuoteInFavorite(quote : IQuote) {
        this.favourites = [...this.favourites, quote];
        console.log(this.favourites);
    }

    removeQuoteFromFavourite(quote : IQuote) {
        const position = this.favourites.findIndex(q => q.id === quote.id);
        this.favourites.splice(position, 1);
        console.log(this.favourites);
    }

    getSelectedCategory() {
        return this.selectedCategory
    }

    setSelectedCategory(quote : {category : string, quotes : IQuote[], icon : string}) {
        this.selectedCategory = quote;
    }

    isQouteFavourite(quote : IQuote) {
        const exist = this.favourites.find(q => q.id === quote.id)
        if (exist) {
            return true;
        } 
    }

    getFavourites() {
        return this.favourites;
    }
}