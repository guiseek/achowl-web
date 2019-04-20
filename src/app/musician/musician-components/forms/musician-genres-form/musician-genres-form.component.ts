import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GENRES } from './../../../../core/constants/genres';

@Component({
  selector: 'owl-musician-genres-form',
  templateUrl: './musician-genres-form.component.html',
  styleUrls: ['./musician-genres-form.component.scss']
})
export class MusicianGenresFormComponent {
  @Input() parentForm: FormGroup
  genres = GENRES
  get keys() { return Object.keys(GENRES) }
}
