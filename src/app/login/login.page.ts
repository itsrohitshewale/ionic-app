import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string = "";
  password : string = "";
  private loading = this.loadingController.create({message: 'Loading...'});

  constructor(private authService : AuthService, 
    private toastController: ToastController,
    private router : Router, 
    private loadingController: LoadingController) { }

  ngOnInit() {
  }

  onRegister() {
    this.authService.register(this.email, this.password)
    .then(response => {
      this.presentToast(response);
    }, err => {
      this.presentToast(err);
    });
  }

  onLogin() {
    this.authService.login(this.email, this.password)
    .then(response => {
      this.presentToast(response);
      this.router.navigate(['tabs'])
    }, err => {
      this.presentToast(err);
    });
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }

  // async presentLoading() {
  //   this.loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  // }

}
