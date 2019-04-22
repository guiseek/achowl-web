import { MapFeatures } from "./map-features";
import { MusicAlbum } from "./music-album";
import { firestore } from "firebase/app";
import { MusicianMember } from "./musician";

export interface BandMember {
  active: boolean
  instrument: string
}
export interface BandMembers {
  [id: string]: BandMember
}
export interface BandRepertoire {
  artist: string
  song: string
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
  price?: number
  repertoire?: BandRepertoire[]
  musicians?: MusicianMember[]
  albums?: MusicAlbum[]
  created?: firestore.Timestamp
  updated?: firestore.Timestamp
}