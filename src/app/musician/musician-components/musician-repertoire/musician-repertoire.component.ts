import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatSnackBar } from '@angular/material';
import { BandService } from '../../../core';

@Component({
  selector: 'owl-musician-repertoire',
  templateUrl: './musician-repertoire.component.html',
  styleUrls: ['./musician-repertoire.component.scss']
})
export class MusicianRepertoireComponent implements OnInit {
  @Input() parentForm: FormArray
  constructor(
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private service: BandService
  ) { }
  drop(event: CdkDragDrop<FormGroup[]>) {
    const dir = event.currentIndex > event.previousIndex ? 1 : -1;
    const from = event.previousIndex;
    const to = event.currentIndex;
    const temp = this.repertoire.at(from);
    for (let i = from; i * dir < to * dir; i = i + dir) {
      const current = this.repertoire.at(i + dir);
      this.repertoire.setControl(i, current);
    }
    this.repertoire.setControl(to, temp);
  }
  removeSong(position, music) {
    let undoAction = {
      position,
      music
    }
    this.repertoire.removeAt(position)
    const snackRef = this.snack.open('Item sendo removido, você tem 5 segundos para desfazer esta ação', 'Desfazer', {
      duration: 5000
    })
    snackRef.afterDismissed().subscribe(res => {
      console.log('dismissed', res)
      if (res.dismissedByAction) {
        this.repertoire.insert(undoAction.position, music)
      }
    })
  }
  ngOnInit() {
    // let { list, ...data } = this.parentForm.value
    // if (list) {
    //   list.forEach((item, i) => {
    //     this.list.insert(i, this.fb.control(item))
    //   })
    // }
  }
  get repertoire() {
    return this.parentForm.get('repertoire') as FormArray
  }
  createItem({artist, song}) {
    return this.fb.group({
      artist: [artist],
      song: [song]
    })
    // return this.fb.control(item)
  }
  addItem(item?) {
    this.repertoire.push(
      this.createItem(item)
    )
  }
}
