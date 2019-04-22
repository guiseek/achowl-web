import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { Band } from './../../../../core';
import { MusicianSearchDialogComponent } from '../musician-search-dialog/musician-search-dialog.component';

@Component({
  selector: 'owl-musician-band-dialog',
  templateUrl: './musician-band-dialog.component.html',
  styleUrls: ['./musician-band-dialog.component.scss']
})
export class MusicianBandDialogComponent implements OnInit {
  form = this.fb.group({
    id: [],
    name: [null, [Validators.required, Validators.maxLength(100)]],
    description: [null, Validators.maxLength(1000)],
    creator: [null, Validators.required],
    members: this.fb.group({})
  })
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<MusicianBandDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Band
  ) { }
  get creator(): FormControl {
    return this.form.get('creator') as FormControl
  }
  get members(): FormGroup {
    return this.form.get('members') as FormGroup
  }
  get membersControls() {
    return Object.keys(this.members.controls)
  }
  searchMusician() {
    const dialogRef = this.dialog.open(MusicianSearchDialogComponent, {
      width: '400px'
    })
  }
  addMember(id: string) {
    const group = this.fb.group({
      instrument: [null, Validators.required],
      active: [true]
    })
    this.members.addControl(id, group)
  }
  ngOnInit() {
    let { id, ...data } = this.data
    this.form.patchValue(data)
    if (!id) {
      this.addMember(this.creator.value)
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onSave() {
    this.dialogRef.close(this.form.value)
  }
}
