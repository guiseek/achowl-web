import { Component, Output, EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Musician, MusicianService } from '../../../core';
import { FormControl } from '@angular/forms';
import { merge, filter, debounceTime, switchMap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';

@Component({
  selector: 'owl-musician-search',
  templateUrl: './musician-search.component.html',
  styleUrls: ['./musician-search.component.scss']
})
export class MusicianSearchComponent {
  search = new FormControl()
  musicians$: Observable<Musician[]> = of([]).pipe(
    merge(this.search.valueChanges),
    filter(value => value.length > 1),
    debounceTime(300),
    switchMap(search => this.musician.findMusicians(search))
  )
  @Output() onSelect = new EventEmitter<Musician>()
  constructor(
    private musician: MusicianService
  ) { }
  displayFn(musician?: Musician): string | undefined {
    return musician ? musician.name : undefined;
  }
  select(selected: MatAutocompleteSelectedEvent) {
    this.onSelect.emit(selected.option.value)
  }
}
