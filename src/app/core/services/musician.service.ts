import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase/firestore.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AFSQuery } from '../firebase/afs-query';
import { Observable, BehaviorSubject, combineLatest, of } from 'rxjs';
import { Musician } from '../interfaces/musician';
import { Band } from '../interfaces/band';
import { switchMap, map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable()
export class MusicianService extends FirestoreService {
  private path: string = 'musicians'
  musician$: Observable<Musician>
  musicianRef: AngularFirestoreDocument<Musician>
  public musician: BehaviorSubject<Musician> = new BehaviorSubject(null)
  constructor(
    public afs: AngularFirestore,
    private auth: AuthService
  ) {
    super(afs)
    this.musician$ = this.auth.authState$.pipe(
      switchMap(auth => auth ? this.doc<Musician>(`${this.path}/${auth.uid}`) : of(null))
    )
  }
  // findUsersByBand(band$: Observable<Band>) {
  //   let band
  //   const joinKeys = {}
  //   return band$.pipe(
  //     switchMap(b => {
  //       band = b
  //       const uids = Array.from(new Set(b.members.map(v => v.uid)))
  //       const userDocs = uids.map(u => {
  //         this.afs.doc(`users/${u}`).valueChanges()
  //       })
  //       return userDocs.length ? combineLatest(userDocs) : of([])
  //     }),
  //     map(arr => {
  //       arr.forEach(v => (joinKeys[(<any>v).uid] = v))
  //       band.members = band.members.map(v => {
  //         return { ...v, user: joinKeys[v.uid] }
  //       })
  //       return band
  //     })
  //   )
  // }
  getMyBands(mid) {
    const query = new AFSQuery()
    query.where = [['creator', '==', mid]]
    return this.collection<Band>(this.path, query)

  }
  saveMusician(musician: Musician) {
    return this.set<Musician>(this.path, musician.id, musician)
  }
  createMusician(musician: Musician) {
    return this.set<Musician>(this.path, musician.id, musician)
  }
  getMusicianRef(uid: string) {
    return this.ref<Musician>(`${this.path}/${uid}`)
  }
  updateMusician(musician: Musician) {
    return this.update(this.path, musician.id, musician)
  }
  find(query?: AFSQuery): Observable<Musician[]> {
    return this.collection<Musician>(this.path, query)
  }
  getMusicianById(uid: string) {
    return this.doc<Musician>(`${this.path}/${uid}`);
  }
  findMusicians(text?: string): Observable<Musician[]> {
    const query = new AFSQuery()
    if (text) {
      query.orderBy = ['name', 'asc']
      query.startAt = text
      query.endAt = text + '\uf8ff'
    }
    return this.collection<Musician>(this.path, query)
  }
  genId() {
    return this.generatedId
  }
}
