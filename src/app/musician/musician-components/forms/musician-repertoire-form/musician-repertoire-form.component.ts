import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, ElementRef, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { Subject } from 'rxjs';

class RepertoireSong {
  constructor(public artist: string, public song: string) { }
}
@Component({
  selector: 'owl-musician-repertoire-form',
  templateUrl: './musician-repertoire-form.component.html',
  styleUrls: ['./musician-repertoire-form.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: MusicianRepertoireFormComponent}],
  host: {
    '[class.example-floating]': 'shouldLabelFloat',
    '[id]': 'id',
    '[attr.aria-describedby]': 'describedBy',
  }
})
export class MusicianRepertoireFormComponent implements MatFormFieldControl<RepertoireSong>, OnDestroy {
  static nextId = 0
  @Input()
  parts: FormGroup
  stateChanges = new Subject<void>()
  focused = false
  ngControl = null
  errorState = false
  controlType = 'example-tel-input'
  id = `example-tel-input-${MusicianRepertoireFormComponent.nextId++}`
  describedBy = ''

  get empty() {
    const { value: { artist, song } } = this.parts

    return !artist && !song
  }

  get shouldLabelFloat() { return this.focused || !this.empty; }

  @Input()
  get placeholder(): string { return this._placeholder; }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean { return this._required; }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.parts.disable() : this.parts.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): RepertoireSong | null {
    const { value: { artist, song } } = this.parts;
    if (artist && song) {
      return new RepertoireSong(artist, song);
    }
    return null;
  }
  set value(music: RepertoireSong | null) {
    const { artist, song } = music || new RepertoireSong('', '')
    this.parts.setValue({ artist, song });
    this.stateChanges.next();
  }

  constructor(fb: FormBuilder, private fm: FocusMonitor, private elRef: ElementRef<HTMLElement>) {
    this.parts = fb.group({
      artist: '',
      song: ''
    });

    fm.monitor(elRef, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef);
  }

  setDescribedByIds(ids: string[]) {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent) {
    if ((event.target as Element).tagName.toLowerCase() != 'input') {
      this.elRef.nativeElement.querySelector('input')!.focus();
    }
  }
}
