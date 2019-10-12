import { Component, OnInit, Input } from '@angular/core';
import { IQuote } from '../model/quote.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.page.html',
  styleUrls: ['./quote.page.scss'],
})
export class QuotePage implements OnInit {

  @Input('quote') quote : IQuote
  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  onClose(flag : boolean = false) {
    this.modalCtrl.dismiss(flag);
  }

}
