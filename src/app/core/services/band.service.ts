import { Injectable } from '@angular/core';
import { FirestoreService } from '../firebase/firestore.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AFSQuery } from '../firebase/afs-query';
import { Observable, combineLatest, of, BehaviorSubject } from 'rxjs';
import { Band } from '../interfaces/band';
import { switchMap, map, merge, mergeMap, mergeMapTo, take } from 'rxjs/operators';
import { Musician } from '../interfaces/musician';
import { UserService } from './user.service';
import { firestore } from 'firebase/app';
import { MusicAlbum } from '../interfaces/music-album';
import { MusicianService } from './musician.service';

@Injectable()
export class BandService extends FirestoreService {
  private path: string = 'bands'
  band$: Observable<Band>

  private STORE_BAND_KEY: string = '_CURRENT_BAND'
  private store = localStorage;

  private _currentBand$: BehaviorSubject<Band>
    = new BehaviorSubject<Band>(<Band>JSON.parse(this.store.getItem(this.STORE_BAND_KEY)));

  public currentBand$: Observable<Band>;

  constructor(
    public afs: AngularFirestore,
    private user: UserService,
    private musician: MusicianService
  ) {
    super(afs)
    this.currentBand$ = this._currentBand$.asObservable();
    // this.band$ = this.auth.authState$.pipe(
    //   switchMap(auth => auth ? this.doc<User>(`${this.path}/${auth.uid}`) : of(null))
    // )
  }
  createBand(band: Band) {
    band.created = firestore.Timestamp.now()
    return this.add<Band>(this.path, band)
  }
  async saveBand(band: Band): Promise<void> {
    band.updated = firestore.Timestamp.now()
    if (!band.id) {
      band.id = this.generatedId
      band.created = firestore.Timestamp.now()
    }
    try {
      await this.set<Band>(this.path, band.id, band)
      this.currentBand = band
    } catch (err) {
      return err
    }
  }
  saveRepertoire({id, repertoire}) {
    console.log(id, repertoire)
    const ref = this.afs.collection(this.path).doc(id)
    return ref.update({
      updated: firestore.Timestamp.now(),
      repertoire
    })
    // return this.ref(`${this.path}/${id}`)
    //   .update({
    //     updated: firestore.Timestamp.now(),
    //     repertoire: firestore.FieldValue.arrayUnion(repertoire)
    //   })
  }
  getBandRef(id: string) {
    return this.ref<Band>(`${this.path}/${id}`)
  }
  async saveAlbum(album: MusicAlbum) {
    album.updated = firestore.Timestamp.now()
    if (!album.id) {
      album.id = this.generatedId
      album.created = firestore.Timestamp.now()
    }
    try {
      return await this.set<MusicAlbum>(`albums`, album.id, album)
    } catch (err) {
      return err
    }
  }
  getAlbumsByRef(ref: firebase.firestore.DocumentReference) {
    const query = new AFSQuery()
    query.where = [[`parentRef`, '==', ref]]
    console.log(query)
    return this.collection<MusicAlbum>('albums', query)
  }

  getMusicianBands() {
    return this.user.user$.pipe(
      switchMap(user => {
        const query = new AFSQuery()
        query.where = [ ['creator','==',user.uid] ]
        return this.collection<Band>(this.path, query)
      })
    )
  }
  getBandsByUser(uid: string) {
    const query = new AFSQuery()
    query.where = [[`members.${uid}.active`, '==', true]]
    return this.collection<Band>(this.path, query)
  }
  getMembers(band: Band) {
    let members = []
    return of([]).pipe(
      switchMap(() => {
        const mids = Array.from(
          new Set(
            Object.keys(band.members)
          )
        )
        const musicianDocs = mids.map(m =>
          this.afs.doc<Musician>(`musicians/${m}`).valueChanges()
        )
        return musicianDocs.length ? combineLatest(musicianDocs) : of([])
      }),
      map(arr => {
        // console.log('arr: ', arr)
        arr.forEach(v => (members[(<any>v).id] = v))
        members = Object.keys(band.members).map(mid => {
          let { name, phone, photo } = arr.find(m => m.id == mid)
          return Object.assign(
            band.members[mid],
            { name, phone, photo }
          )
        })
        console.log('arr: ', arr)
        return members;
        // return Object.keys(band.members).map(mid => {
        //   let { name, phone, photo } = arr.find(m => m.id == mid)
        //   return Object.assign(
        //     band.members[mid],
        //     { name, phone, photo }
        //   )
        // })
        // return arr
      })
    )
    // return members
  }
  joinMembers(band$: Observable<Band>) {
    let band: Band
    const joinKeys = {}
    return band$.pipe(
      switchMap(c => {
        band = c;
        const uids = Array.from(new Set(
          Object.keys(c.members).map(v => v)
        ))
        const userDocs = uids.map(u =>
          this.afs.doc<Musician>(`musicians/${u}`).valueChanges()
        );
        return userDocs.length ? combineLatest(userDocs) : of([]);
      }),
      map(arr => {
        // console.log('arr: ', arr)
        arr.forEach(v => (joinKeys[(<any>v).id] = v))
        band.musicians = Object.keys(band.members).map(mid => {
          let { name, phone, photo } = arr.find(m => m.id == mid)
          return Object.assign(
            band.members[mid],
            { name, phone, photo }
          )
        })
        // band.musicians = Object.keys(band.members).map(v => {
        //   return { ...band.members[v], member: joinKeys[v] };
        // });
        console.log('arr: ')
        return band;
      })
    );
  }
  findBandsByUser(musician$: Observable<Musician>) {
    let musician
    const joinKeys = {}
    console.log('$: ', musician$)
    return musician$.pipe(
      switchMap(m => {
        musician = m
        // console.log('mmmm: ', m)
        const ids = Array.from(new Set(m.bands.map(v => v)))
        const bandDocs = ids.map(u => {
          this.afs.doc(`bands/${u}`).valueChanges()
        })
        return bandDocs.length ? combineLatest(bandDocs) : of([])
      }),
      map(arr => {
        // console.log('asdasd: ', arr)
        arr.forEach(v => (joinKeys[(<any>v)] = v))
        musician.bands = musician.members.map(v => {
          return { ...v, user: joinKeys[v] }
        })
        // console.log('musician: ', musician)
        return musician
      })
    )
  }
  updateBand(band: Band) {
    return this.update(this.path, band.id, band)
  }
  find(query?: AFSQuery): Observable<Band[]> {
    return this.collection<Band>(this.path, query)
  }
  getBandById(id: string) {
    return this.doc<Band>(`${this.path}/${id}`);
  }
  findBands(text?: string): Observable<Band[]> {
    const query = new AFSQuery()
    if (text) {
      query.orderBy = ['name', 'asc']
      query.startAt = text
      query.endAt = text + '\uf8ff'
    }
    return this.collection<Band>(this.path, query)
  }
  genId() {
    return this.generatedId
  }
  get currentBand(): Band {
    return <Band>JSON.parse(this.store.getItem(this.STORE_BAND_KEY));
  }
  set currentBand(data: Band) {
    this.store.setItem(this.STORE_BAND_KEY, JSON.stringify(data));
    this._currentBand$.next(data);
  }
  clear() {
    this.store.removeItem(this.STORE_BAND_KEY);
  }
}
