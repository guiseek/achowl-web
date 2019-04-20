import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'owl-musician-band-form',
  templateUrl: './musician-band-form.component.html',
  styleUrls: ['./musician-band-form.component.scss']
})
export class MusicianBandFormComponent implements OnInit {
  @Input() parentForm: FormGroup

  constructor() { }

  ngOnInit() {
  }

}
