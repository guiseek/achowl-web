import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

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
  createAuth(email: string, password: string): Promise<auth.UserCredential> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
  }
  emailLogin({ email, password }) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
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
