import { OnInit, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'owl-musician-search-dialog',
  templateUrl: './musician-search-dialog.component.html',
  styleUrls: ['./musician-search-dialog.component.scss']
})
export class MusicianSearchDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<MusicianSearchDialogComponent>
  ) { }

  ngOnInit() {
  }
  onCancel(): void {
    this.dialogRef.close();
  }
  onSelect(musician) {
    this.dialogRef.close(musician)
  }

}
