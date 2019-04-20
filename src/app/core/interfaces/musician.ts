import { MapFeatures } from "./map-features";
import { MusicAlbum } from "./music-album";
import { firestore } from "firebase/app";

export interface Musician {
  id: string
  name: string
  description: string
  vocalist: boolean
  instruments: MapFeatures
  genres: MapFeatures
  phone?: string
  photo?: string
  repertoire?: string[]
  albums?: MusicAlbum[]
  bands?: string[]
  created?: firestore.Timestamp
  updated?: firestore.Timestamp
}