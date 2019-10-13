import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { resolve } from 'dns';


@Injectable({
    providedIn : "root"
})
export class AuthService {

    private token: string = null

    register(email : string, password : string) {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                resolve("User has been registered successfully!");
            }).catch(err => reject(err.message));
        })
        
    }

    login(email : string, password : string) {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then(response => {
                firebase.auth().currentUser.getIdToken()
                .then (token => {
                    console.log(token)
                    this.token = token
                    resolve("User logged-in successfully!");
                })
                
            })
            .catch(err => reject(err.message));
        })
    }


    getToken() {
        return this.token;
    }

    isUserAuthenticated() {
        return this.token != null
    }
}