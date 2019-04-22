import { MusicTrack } from "./music-track";
import { firestore } from "firebase";
// import { DocumentReference } from "@angular/fire/firestore";
export interface MusicAlbum {
  id: string
  parentRef: firebase.firestore.DocumentReference
  name: string
  description: string
  tracks: MusicTrack[]
  year: number
  cover?: string
  created?: firestore.Timestamp
  updated?: firestore.Timestamp
}