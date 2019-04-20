import { Component, OnInit, Input } from '@angular/core';
import { BandMember, Musician } from '../../../core';

@Component({
  selector: 'owl-musician-band-member',
  templateUrl: './musician-band-member.component.html',
  styleUrls: ['./musician-band-member.component.scss']
})
export class MusicianBandMemberComponent implements OnInit {
  @Input() musician: {
    active: boolean
    instrument: string
    member: Musician
  }
  constructor() { }

  ngOnInit() {
  }

}
