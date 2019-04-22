import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'owl-musician-album-form',
  templateUrl: './musician-album-form.component.html',
  styleUrls: ['./musician-album-form.component.scss']
})
export class MusicianAlbumFormComponent implements OnInit {
  @Input() parentForm: FormGroup
  constructor() { }

  ngOnInit() {
    console.log(this.parentForm)
  }

}
