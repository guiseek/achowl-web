import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Band } from './../../../../core';

@Component({
  selector: 'owl-musician-band-member-dialog',
  templateUrl: './musician-band-member-dialog.component.html',
  styleUrls: ['./musician-band-member-dialog.component.scss']
})
export class MusicianBandMemberDialogComponent implements OnInit {
  form = this.fb.group({
    id: [],
    name: [null, [Validators.required, Validators.maxLength(100)]],
    description: [null, [Validators.minLength(50), Validators.maxLength(1000)]],
    creator: [null, Validators.required],
    members: this.fb.group({})
  })
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MusicianBandMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Band
  ) { }

  addMember(musician) {
    console.log(musician)
    const group = this.fb.group({
      instrument: [null, Validators.required],
      active: [true]
    })
    this.members.addControl(musician.id, group)
  }
  pushMember(id, member) {
    const group = this.fb.group({
      instrument: [null, Validators.required],
      active: [true]
    })
    group.patchValue(member)
    this.members.addControl(id, group)
  }
  ngOnInit() {
    let { members, ...data } = this.data
    this.form.patchValue(data)
    if (members) {
      Object.keys(members).map(m => {
        this.pushMember(m, members[m])
      })
    }
  }

  get creator(): FormControl {
    return this.form.get('creator') as FormControl
  }
  get members(): FormGroup {
    return this.form.get('members') as FormGroup
  }
  get membersControls() {
    return Object.keys(this.members.controls)
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onSave() {
    this.dialogRef.close(this.form.value)
  }
}
