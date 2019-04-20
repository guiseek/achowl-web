import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { INSTRUMENTS } from './../../../../core/constants/instruments';
import { GENRES } from './../../../../core/constants/genres';

@Component({
  selector: 'owl-musician-profile-form',
  templateUrl: './musician-profile-form.component.html',
  styleUrls: ['./musician-profile-form.component.scss']
})
export class MusicianProfileFormComponent implements OnInit {
  @Input() parentForm: FormGroup
  instrumentList = INSTRUMENTS
  genreList = GENRES
  ngOnInit() {
    console.log(this.instrumentList)
    // console.log(this.instruments)
  }
  get instrumentKeys() {
    return Object.keys(INSTRUMENTS)
  }
  get genreKeys() {
    return Object.keys(GENRES)
  }

  get genres(): FormGroup { return this.parentForm.get('genres') as FormGroup }
  get instruments(): FormGroup { return this.parentForm.get('instruments') as FormGroup }
}
