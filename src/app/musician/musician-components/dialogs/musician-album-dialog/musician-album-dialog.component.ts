import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { MusicAlbum } from './../../../../core/interfaces/music-album';

@Component({
  selector: 'owl-musician-album-dialog',
  templateUrl: './musician-album-dialog.component.html',
  styleUrls: ['./musician-album-dialog.component.scss']
})
export class MusicianAlbumDialogComponent implements OnInit {
  form = this.fb.group({
    id: [],
    name: [null, [Validators.required, Validators.maxLength(100)]],
    description: [null, [Validators.minLength(50), Validators.maxLength(1000)]],
    year: [null, Validators.required]
    // creator: [null, Validators.required],
    // members: this.fb.group({})
  })
  parentRef
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<MusicianAlbumDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: MusicAlbum
  ) { }
  ngOnInit() {
    console.log(this.data)
    let { id, parentRef, ...data } = this.data
    console.log(id, parentRef, data)
    this.parentRef = parentRef
    this.form.patchValue(data)
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onSave() {
    this.dialogRef.close(
      Object.assign(
        this.form.value,
        {
          parentRef: this.parentRef
        }
      )
    )
  }
}
