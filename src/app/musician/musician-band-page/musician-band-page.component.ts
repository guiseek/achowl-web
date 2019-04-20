import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Musician } from '../../core/interfaces/musician';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatSelectChange } from '@angular/material';
import { SnackService } from '../../shared/services/snack.service';
import { MusicianService } from '../../core/services/musician.service';
import { AuthService } from '../../core/services/auth.service';
import { BandService } from '../../core/services/band.service';
import { Band } from '../../core/interfaces/band';
import { MusicianBandDialogComponent } from '../musician-components/dialogs/musician-band-dialog/musician-band-dialog.component';
import { MusicianBandMemberDialogComponent } from '../musician-components/dialogs/musician-band-member-dialog/musician-band-member-dialog.component';

export interface DropdownBand {
  value: string
  viewValue: string
}
@Component({
  selector: 'owl-musician-band-page',
  templateUrl: './musician-band-page.component.html',
  styleUrls: ['./musician-band-page.component.scss']
})
export class MusicianBandPageComponent implements OnInit {
  musician$: Observable<Musician>
  currentBand = new FormControl()
  bands$: Observable<Band[]>
  band$: Observable<Band>
  constructor(
    private dialog: MatDialog,
    private snack: SnackService,
    private auth: AuthService,
    private musician: MusicianService,
    private service: BandService,
  ) {
    this.bands$ = this.service.getBandsByUser(this.auth.currentAuth.uid)
  }
  ngOnInit() {
    this.service.currentBand$.subscribe(
      (changeBand) => {
        console.log('changeBand: ', changeBand)
        if (changeBand) {
          this.currentBand.patchValue(changeBand)
          const source = this.service.getBandById(changeBand.id)
          this.band$ = this.service.joinMembers(source)
        }
      }
    )
  }
  onSelect(musician) {
    console.log(musician)
  }

  switchBand(selected: MatSelectChange) {
    if (!selected.value) {
      this.openBandDialog()
    }
    if (selected.value) {
      this.service.currentBand = selected.value
    }
  }
  openMemberDialog(band: Band) {
    console.log('band: ', band)
    const dialogRef = this.dialog.open(MusicianBandMemberDialogComponent, {
      width: '600px', data: band, panelClass: 'info-dialog'
    })
    const dialogSub = dialogRef.afterClosed().subscribe((response) => {
      console.log(response)
      if (response) {
        this.service.saveBand(response)
      }
      dialogSub.unsubscribe()
    })

  }
  openBandDialog(data?: Band) {
    let band = data ? data : {
      creator: this.auth.currentAuth.uid
    }
    const dialogRef = this.dialog.open(MusicianBandDialogComponent, {
      width: '600px', data: band, panelClass: 'info-dialog'
    })
    const dialogSub = dialogRef.afterClosed().subscribe((response) => {
      console.log(response)
      if (response) {
        this.service.saveBand(response)
      } else {
        this.currentBand.patchValue(
          this.service.currentBand
        )
      }
      dialogSub.unsubscribe()
    })
  }
  checkCurrentBand(b1: Band, b2: Band): boolean {
    return b1 && b2 ? b1.id === b2.id : b1 === b2;
  }
}
