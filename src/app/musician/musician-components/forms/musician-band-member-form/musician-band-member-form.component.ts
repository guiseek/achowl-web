import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MusicianService } from './../../../../core/services/musician.service';
import { Observable, of } from 'rxjs';
import { Musician } from './../../../../core'
import { merge, filter, debounceTime, switchMap, map } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { INSTRUMENTS } from './../../../../core/constants/instruments';

@Component({
  selector: 'owl-musician-band-member-form',
  templateUrl: './musician-band-member-form.component.html',
  styleUrls: ['./musician-band-member-form.component.scss']
})
export class MusicianBandMemberFormComponent implements OnInit {
  @Input() musician: Musician
  @Input() parentForm: FormControl
  instruments = []
  get active() {
    return this.parentForm.get('active')
  }
  get instrument() {
    return this.parentForm.get('instrument')
  }
  ngOnInit() {
    if (this.musician) {
      console.log('ins: ', this.musician.instruments)
      let { instruments } = this.musician
      this.instruments = Object.keys(instruments)
        .filter(i => !!instruments[i])
        .map(i => {
          return {
            value: i,
            viewValue: INSTRUMENTS[i]
          }
        })
    }
  }
}
