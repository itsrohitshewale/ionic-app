import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QuoteService } from './service/quote.service';
import { QuotePage } from './quote/quote.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AuthService } from './service/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './service/login.service';


@NgModule({
  declarations: [AppComponent, QuotePage],
  entryComponents: [QuotePage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    Geolocation,
    StatusBar,
    SplashScreen,
    QuoteService,
    LoginService,
    AuthService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
