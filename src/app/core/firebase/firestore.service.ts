import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase/app';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AFSQuery } from './afs-query';


@Injectable()
export class FirestoreService {

  constructor(
    protected afs: AngularFirestore, 
    private storage?: AngularFireStorage
  ) {
  }
  
  protected doc<T>(path: string): Observable<T> {
    return this.afs.doc<T>(`${path}`).snapshotChanges().pipe(
      map(change => {
        return Object.assign({}, change.payload.data(), {id: change.payload.id});
      }));
  }
  protected ref<T>(path: string): AngularFirestoreDocument<T> {
    return this.afs.doc<T>(path)
  }
  protected collection<T>(path: string, query?: AFSQuery): Observable<T[]> {
    return this.afs.collection<T>(`${path}`, ref => query ? query.exec(ref) : ref).snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => Object.assign({}, c.payload.doc.data(), {id: c.payload.doc.id}));
    }));
  }
  protected prepare<T>(path: string): Observable<T> {
    const id = this.generatedId;
    return this.afs.doc<T>(`${path}/${id}`).snapshotChanges().pipe(
      map(change => {
        return Object.assign({}, change.payload.data(), {id: change.payload.id});
      }));
  }
  protected add<T>(path: string, data: any) {
    const id = this.generatedId;
    return this.afs.doc<T>(`${path}/${id}`).set({id, ...data});
  }

  protected set<T>(path: string, id: string, data: any, merge: boolean = true) {
    return this.afs.doc<T>(`${path}/${id}`).set(data, {merge: merge});
  }

  protected update<T>(path: string, id: string, data: any) {
    return this.afs.doc<T>(`${path}/${id}`).update(data);
  }

  protected delete(path: string, id: string) {
    return this.afs.doc(`${path}/${id}`).delete();
  }
  protected create<T>(path: string, data: any) {
    return this.afs.collection<T>(path).add(data)
  }
  protected async deleteCol(path: string) {
    const batch = this.afs.firestore.batch();
    const qs = await this.afs.collection(path).ref.get();
    qs.forEach(doc => batch.delete(doc.ref));
    return batch.commit();
  }

  protected get generatedId() {
    return this.afs.createId();
  }

  protected get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

  protected get batch() {
    return this.afs.firestore.batch();
  }
  
  uploadFile(file: any, fileName: string, path: string = 'images') {
    return this.storage.upload(`${path}/${fileName}`, file);
  }
}