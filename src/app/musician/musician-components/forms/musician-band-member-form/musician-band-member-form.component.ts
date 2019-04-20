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
  instrumentList = INSTRUMENTS
  @Input() id: string
  @Input() parentForm: FormControl
  instruments = []
  musician$: Observable<Musician>
  constructor(
    private fb: FormBuilder,
    private musician: MusicianService
  ) { }
  // get id() {
  //   return this.parentForm.get('id')
  // }
  // get instrument() {
  //   return this.parentForm.get('instrument')
  // }
  ngOnInit() {
    if (this.id) {
      this.musician$ = this.musician.getMusicianById(this.id)
        .pipe(map(m => {
          console.log('mus: ', m)
          this.instruments = Object.keys(m.instruments)
            .filter(i => !!m.instruments[i])
            .map(i => {
              return {
                value: i,
                viewValue: INSTRUMENTS[i]
              }
            })
          return m
        }))
    }
    console.log('parent: ', this.id, this.parentForm)
    // this.parentForm
  }
  // select(selected: MatAutocompleteSelectedEvent) {
  //   let { option } = selected
  //   console.log(option.value)
  //   if (option.value) {
  //     let { id, instruments } = option.value
  //     this.id.patchValue(id)
  //     console.log(instruments)
  //     console.log(Object.keys(instruments))
  //     this.instruments = Object.keys(instruments)
  //       .filter(i => !!instruments[i])
  //       .map(i => {
  //         return {
  //           value: i,
  //           viewValue: INSTRUMENTS[i]
  //         }
  //       })
  //   }
  // }
}
