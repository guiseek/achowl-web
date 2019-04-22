import { Component, OnInit, Input } from '@angular/core';
import { MusicianService, Band, BandService, MusicianMember } from '../../../core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'owl-musician-band-members',
  templateUrl: './musician-band-members.component.html',
  styleUrls: ['./musician-band-members.component.scss']
})
export class MusicianBandMembersComponent implements OnInit {
  @Input() band: Band
  members$: Observable<any>
  constructor(
    private service: BandService
  ) { }

  ngOnInit() {
    console.log('band: ', this.band)
    this.members$ = this.service.getMembers(this.band)
      // const source = this.service.getBandById(this.band.id)
      // this.members$ = this.service.getMembers(source)

    // .pipe(
      //   map(members => {
      //     console.log('call members:, ', Date.now())
      //   })
      // )
      // .subscribe(mids => {
      //   console.log('mids: ', mids)
      // })
    // map((currentBand: Band) => {
    //   console.log('currentBand 2: ', currentBand)
    //   const source = this.service.getBandById(currentBand.id)
    //   return this.service.joinMembers(source) as Observable<Band>
    //   // return currentBand
    // })

  }

}
