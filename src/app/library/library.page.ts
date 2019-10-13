import { Component, OnInit } from '@angular/core';
import { IQuote } from '../model/quote.model';
import { Router } from '@angular/router';
import { QuoteService } from '../service/quote.service';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {

  quotes : { category : string, quotes: IQuote[], icon : string }[] = []
  
  constructor(private router : Router,
    private quoteService : QuoteService,
    private authService : AuthService) { }

  ngOnInit() {
    
    this.quoteService.getQuotesData()
    .subscribe(response => {
      this.quotes = <{ category : string, quotes: IQuote[], icon : string }[]> response;
      console.log(response)
    })
  }

  onCategorySelect(quotes : {category : string, quotes : IQuote[], icon : string}) {
    this.quoteService.setSelectedCategory(quotes)
    this.router.navigate(['tabs/quotedetails'])
  }

}
