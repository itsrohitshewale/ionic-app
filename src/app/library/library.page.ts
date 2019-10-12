import { Component, OnInit } from '@angular/core';
import { IQuote } from '../model/quote.model';
import { QUOTES_DATA } from '../model/quotes';
import { Router } from '@angular/router';
import { QuoteService } from '../service/quote.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  quotes : { category : string, quotes: IQuote[], icon : string }[] = []
  
  constructor(private router : Router,
    private quoteService : QuoteService) { }

  ngOnInit() {
    this.quotes = QUOTES_DATA
  }
  onCategorySelect(quotes : {category : string, quotes : IQuote[], icon : string}) {
    this.quoteService.setSelectedCategory(quotes)
    this.router.navigate(['tabs/quotedetails'])
  
  }

}
