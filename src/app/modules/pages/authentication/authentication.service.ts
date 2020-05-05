import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User, Login } from './authentication.interface';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { ToasterService } from 'src/app/shared/modules/toaster/toaster.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { ToasterData } from 'src/app/shared/components/snackbar/snackbar-config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;
  displayName: string;
  user = new BehaviorSubject<any>(null);

  constructor(public afAuth: AngularFireAuth, private router: Router, private afs: AngularFirestore, private toaster$: ToasterService, private snackBar$: SnackbarService) {
    this.getUserData();
  }

  async signInGoogle() {
    const result: any = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    console.log('result =', result);

    const userData: User = {
      uid: result.user.uid,
      firstName: result.additionalUserInfo.profile.given_name,
      lastName: result.additionalUserInfo.profile.family_name,
      name: result.additionalUserInfo.profile.name,
      email: result.additionalUserInfo.profile.email,
      emailVerified: result.user.emailVerified,
      picture: result.additionalUserInfo.profile.picture,
    }

    this.setUserData(userData);
  }

  async signInFacebook() {
    const result: any = await this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    console.log('result =', result);

    const userData: User = {
      uid: result.user.uid,
      firstName: result.additionalUserInfo.profile.first_name,
      lastName: result.additionalUserInfo.profile.last_name,
      name: result.additionalUserInfo.profile.name,
      email: result.additionalUserInfo.profile.email,
      emailVerified: result.user.emailVerified,
      picture: result.additionalUserInfo.profile.picture.data.url
    }

    this.setUserData(userData);
  }

  async signInRegular(credentials: Login) {
    const { email, password, rememberMe } = credentials;
    if (rememberMe) this.onRemeberMe(credentials);
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      console.log('result =', result);
    } catch (error) {
      this.handleError(error);
    }
  }

  async signUpRegular(credentials: User) {
    const { email, password } = credentials;

    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.displayName = credentials.name;
      console.log('signUpRegular SUCCESS =>', result);
      credentials['uid'] = result.user.uid;
      this.setUserData(credentials);
    } catch (error) {
      this.handleError(error);
    }
  }

  setUserData(user: User) {
    console.log('setUserData =', user);
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      email: user.email,
      name: user.name,
      firstName: user.firstName,
      lastName: user.lastName,
      emailVerified: user.emailVerified,
      picture: user.picture
    }
    return userRef.set(userData, {
      merge: true
    })
  }

  getUserData() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        if (!JSON.parse(localStorage.getItem('user')) || (JSON.parse(localStorage.getItem('user')) == null)) {
          user.updateProfile({
            displayName: this.displayName
          })
          localStorage.setItem('user', JSON.stringify(this.userData));
          JSON.parse(localStorage.getItem('user'));
        } else {
          console.log('Already stored =', JSON.parse(localStorage.getItem('user')));
        }

        this.router.navigateByUrl('/home/dashboard');
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }

  get isAuthenticated(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    this.user.next(user);
    return user !== null;
  }

  sendVerificationEmail() {
    this.afAuth.authState.subscribe((user) => {
      user.sendEmailVerification();
      console.log('EMAIL Sent =>', user);
    })
  }

  async sendPasswordResetEmail(email: string) {
    return await this.afAuth.sendPasswordResetEmail(email);
  }

  onRemeberMe(credentials: Login) {
    const checked = credentials.rememberMe;

    localStorage.removeItem('credentials');

    if (checked) {
      localStorage.setItem('credentials', JSON.stringify(credentials));
    }
  }

  async signOut() {
    try {
      const result = await this.afAuth.signOut();
      console.log('signOut SUCCESS =>', result);
      localStorage.removeItem('user');
      this.router.navigateByUrl('/auth/login');
    } catch (error) {
      console.log(error);
    }
  }

  handleError(error) {
    console.log(error);
    // this.toaster$.show({
    //   type: 'warning',
    //   text: error.message
    // });

    const toasterData: ToasterData = {
      type: 'warning',
      message: error.message
    }

    this.snackBar$.show(toasterData);
  }
}
