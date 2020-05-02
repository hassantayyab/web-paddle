import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { Credentials } from './authentication.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public afAuth: AngularFireAuth) { }

  signInGoogle() {
    return this.authLogin(new firebase.auth.GoogleAuthProvider());
  }

  signInFacebook() {
    return this.authLogin(new firebase.auth.FacebookAuthProvider());
  }

  signInRegular(credentials: Credentials) {
    const { email, password } = credentials;
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async authLogin(provider: any) {
    try {
      const result = await this.afAuth.signInWithPopup(provider)
      console.log('authLogin SUCCESS =>', result);
    } catch (error) {
      console.log(error);
    }
  }

  async signUpRegular(credentials: Credentials) {
    const { email, password } = credentials;
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      console.log('signUpRegular SUCCESS =>', result);
    } catch (error) {
      console.log(error);;
    }
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut() {
    try {
      const result = await this.afAuth.signOut();
      console.log('signOut SUCCESS =>', result);
    } catch (error) {
      console.log(error);
    }
  }

  private _setSession(authResult, profile) {
    // Save authentication data and update login status subject

  }
}
