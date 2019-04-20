import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Musician } from 'projects/achowl-web/src/app/core/interfaces/musician';

@Component({
  selector: 'owl-musician-profile-dialog',
  templateUrl: './musician-profile-dialog.component.html',
  styleUrls: ['./musician-profile-dialog.component.scss']
})
export class MusicianProfileDialogComponent implements OnInit {
  form = this.fb.group({
    id: [],
    name: [null, [Validators.required, Validators.maxLength(100)]],
    description: [null, [Validators.minLength(50), Validators.maxLength(500)]],
    vocalist: [false, Validators.required],
    instruments: [null, Validators.required],
    genres: [null, Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MusicianProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Musician
  ) { }

  ngOnInit() {
    // this.form.patchValue(this.data)
  }
  onCancel() {
    this.dialogRef.close()
  }
  onSubmit() {
    this.dialogRef.close(this.form.value)
  }
}
