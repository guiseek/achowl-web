import { Component, OnInit, Input } from '@angular/core';
import { MusicianMember, INSTRUMENTS } from '../../../core';

@Component({
  selector: 'owl-musician-band-member',
  templateUrl: './musician-band-member.component.html',
  styleUrls: ['./musician-band-member.component.scss']
})
export class MusicianBandMemberComponent implements OnInit {
  @Input() member: MusicianMember
  
  constructor() { }

  ngOnInit() {
  }
  get instrument() {
    return INSTRUMENTS[this.member.instrument]
  }

}
