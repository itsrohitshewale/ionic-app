import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoginService implements CanActivate {
    
    constructor(private router : Router, private authService : AuthService) {
    }

    canActivate() {
        if(!this.authService.isUserAuthenticated()) {
            this.router.navigate(['login'])
            return false;
        } else {
            return true;
        }
    }

}