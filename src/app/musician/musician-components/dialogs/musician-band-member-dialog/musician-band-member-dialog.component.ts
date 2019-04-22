import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Band, Musician, MusicianMember } from './../../../../core';

export interface Member {
  [prop: string]: {
    active: boolean
    instrument: string
  }
}
@Component({
  selector: 'owl-musician-band-member-dialog',
  templateUrl: './musician-band-member-dialog.component.html',
  styleUrls: ['./musician-band-member-dialog.component.scss']
})
export class MusicianBandMemberDialogComponent implements OnInit {
  // form = this.fb.group({
  //   id: [],
  //   name: [null, [Validators.required, Validators.maxLength(100)]],
  //   description: [null, Validators.maxLength(1000)],
  //   creator: [null, Validators.required],
  //   members: this.fb.group({})
  // })
  form = this.fb.group({
    active: [true],
    instrument: [null, Validators.required]
  })
  
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MusicianBandMemberDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Musician
    // @Inject(MAT_DIALOG_DATA) public data?: Band
  ) { }

  addMember(musician) {
    console.log('qwe? ', musician)
    // let id = Object.keys(musician)[0]
    const group = this.fb.group({
      instrument: [null, Validators.required],
      active: [true]
    })
    
    this.form.addControl(musician.id, group)
  }
  // pushMember(id, member) {
  //   const group = this.fb.group({
  //     instrument: [null, Validators.required],
  //     active: [true]
  //   })
  //   group.patchValue(member)
  //   this.members.addControl(id, group)
  // }
  ngOnInit() {
    console.log(this.data)
    if (this.data) {
      // this.form.addControl(this.data.id)
      // let id = Object.keys(this.data)[0]
      // this.addMember(this.data)
      console.log('this.data: ', this.data)
      // this.form.patchValue(this.data)
    }
    // let { members, ...data } = this.data
    // this.form.patchValue(data)
    // if (members) {
    //   Object.keys(members).map(m => {
    //     this.pushMember(m, members[m])
    //   })
    // }
  }

  get active(): FormControl {
    return this.form.get('active') as FormControl
  }
  get instrument(): FormControl {
    return this.form.get('instrument') as FormControl
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
    let obj = {}
    obj[this.data.id] = this.form.value
    this.dialogRef.close(obj)
  }
}
