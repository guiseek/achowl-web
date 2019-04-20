import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AFSQuery } from '../firebase/afs-query';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class UserService extends FirestoreService {
  private path: string = 'users'
  user$: Observable<User>
  constructor(
    private auth: AuthService,
    public afs: AngularFirestore
  ) {
    super(afs)
    this.user$ = this.auth.authState$.pipe(
      switchMap(auth => auth ? this.doc<User>(`${this.path}/${auth.uid}`) : of(null))
    )
  }
  createUser(user: User) {
    return this.set<User>(this.path, user.uid, user)
    // let { uid } = await this.auth.createAuth(email, password)
    // console.log('uid: ', uid)
    // let account = await this.updateUser(uid, {
    //   email, ...data
    // })
    // console.log('account: ', account)
    // return account
  }
  getUserRef(uid: string) {
    return this.ref<User>(`${this.path}/${uid}`)
  }
  updateUser(user: User) {
    return this.update(this.path, user.uid, user)
  }
  find(query?: AFSQuery): Observable<User[]> {
    return this.collection<User>(this.path, query)
  }
  getUserById(uid: string) {
    return this.doc<User>(`${this.path}/${uid}`);
  }
  findUsers(text?: string): Observable<User[]> {
    const query = new AFSQuery()
    if (text) {
      query.orderBy = ['name', 'asc']
      query.startAt = text
      query.endAt = text + '\uf8ff'
    }
    return this.collection<User>(this.path, query)
  }
  genId() {
    return this.generatedId
  }
}
