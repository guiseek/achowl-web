import { MusicTrack } from "./music-track";
export interface MusicAlbum {
  name: string
  tracks: MusicTrack[]
  year: number
  cover?: string
}