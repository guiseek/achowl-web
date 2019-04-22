import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Band, BandService } from '../../../core';
import { Observable } from 'rxjs';
import { MusicAlbum } from '../../../core/interfaces/music-album';

@Component({
  selector: 'owl-musician-albums',
  templateUrl: './musician-albums.component.html',
  styleUrls: ['./musician-albums.component.scss']
})
export class MusicianAlbumsComponent implements OnInit {
  @Input() band: Band
  albums$: Observable<MusicAlbum[]>
  @Output() onSelect = new EventEmitter<MusicAlbum>()
  constructor(
    private service: BandService
  ) { }

  ngOnInit() {
    if (this.band) {
      console.log('b: ',this.band)
      let { id, ...band } = this.band
      const bandRef = this.service.getBandRef(id)
      this.albums$ = this.service.getAlbumsByRef(bandRef.ref)
      this.albums$.subscribe(res => {
          console.log('res: ', res)
        })
    }
  }
  select(album: MusicAlbum) {
    this.onSelect.emit(album)
  }

}
