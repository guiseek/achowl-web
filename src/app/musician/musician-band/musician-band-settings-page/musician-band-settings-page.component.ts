import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { GENRES, BandService, Band } from '../../../core';
import { Observable, of, EMPTY } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'owl-musician-band-settings-page',
  templateUrl: './musician-band-settings-page.component.html',
  styleUrls: ['./musician-band-settings-page.component.scss']
})
export class MusicianBandSettingsPageComponent implements OnInit {
  form = this.fb.group({
    id: [null, Validators.required],
    name: [null, [Validators.required, Validators.maxLength(100)]],
    description: [null, Validators.maxLength(1000)],
    creator: [null, Validators.required],
    genres: this.fb.group({})
  })
  band$: Observable<Band>
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: BandService
  ) {
    this.route.params.subscribe(params => {
      console.log(params)
      if (params.id) {
        console.log('params: ', params)
        this.band$ = this.service.getBandById(params.id)
          .pipe(
            map(band => {
              console.log('band: ', band)
              if (band) {
                return band
              }
            })
          )
      }
    })
  }
  get genres(): FormGroup { return this.form.get('genres') as FormGroup }

  ngOnInit() {
    // Object.keys(GENRES).map(i => {
    //   this.genres.addControl(i, this.fb.control(false))
    // })
  }

}
