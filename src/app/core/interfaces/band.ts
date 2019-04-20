import { MapFeatures } from "./map-features";
import { MusicAlbum } from "./music-album";
import { firestore } from "firebase/app";
export interface BandMember {
  active: boolean
  instrument: string
}
export interface BandMembers {
  [id: string]: BandMember
}
export interface Band {
  id: string
  name: string
  description: string
  creator: string
  members: BandMembers
  genres: MapFeatures
  phone?: string
  photo?: string
  repertoire?: string[]
  albums?: MusicAlbum[]
  created?: firestore.Timestamp
  updated?: firestore.Timestamp
}