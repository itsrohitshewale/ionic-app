import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private geoLocation : Geolocation, private alertController : AlertController) {}

  getLocation() {
    this.geoLocation.getCurrentPosition()
      .then(position => { 
        this.alertController.create({
          header : 'coordinates',
          message : `Latitude : ${position.coords.latitude} || Longitude : ${position.coords.longitude}`,
          buttons : ['Okay']
        }).then(alert => alert.present())
    }, err => console.log(err))
  }
}
