import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { fbErrorMessages } from '../firebase/error-messages';

@Injectable()
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
  ) { }
  get authState$(): Observable<firebase.User> {
    return this.afAuth.authState
  }
  get currentAuth() {
    return this.afAuth.auth.currentUser
  }
  createAuth(email: string, password: string): Promise<firebase.User> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email, password)
        .then(
          (auth) => resolve(auth.user),
          (error) => reject(fbErrorMessages[error.code])
        )
    })
  }
  emailLogin({ email, password }) {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
        .then(
          (auth) => resolve(auth.user),
          (error) => reject(fbErrorMessages[error.code])
        )
    })
  }
  googleLogin() {
    const provider = new auth.GoogleAuthProvider()
    return this.oAuthLogin(provider);
  }
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
  }
  signOut() {
    return this.afAuth.auth.signOut()
  }
}
