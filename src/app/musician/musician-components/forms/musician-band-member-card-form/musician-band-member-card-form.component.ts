import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'owl-musician-band-member-card-form',
  templateUrl: './musician-band-member-card-form.component.html',
  styleUrls: ['./musician-band-member-card-form.component.scss']
})
export class MusicianBandMemberCardFormComponent implements OnInit {
  
  form = this.fb.group({})
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

}
