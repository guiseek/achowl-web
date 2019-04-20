import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { INSTRUMENTS } from './../../../../core/constants/instruments';

@Component({
  selector: 'owl-musician-instruments-form',
  templateUrl: './musician-instruments-form.component.html',
  styleUrls: ['./musician-instruments-form.component.scss']
})
export class MusicianInstrumentsFormComponent implements OnInit {
  @Input() parentForm: FormGroup
  instruments = INSTRUMENTS
  constructor() { }
  get keys() { return Object.keys(INSTRUMENTS) }
  ngOnInit() {
  }

}
