import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Band, AuthService, BandService } from '../../../core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { MatSelectChange, MatDialog } from '@angular/material';
import { MusicianBandDialogComponent } from '../../musician-components/dialogs/musician-band-dialog/musician-band-dialog.component';
import { switchMap, filter, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'owl-musician-band-header',
  templateUrl: './musician-band-header.component.html',
  styleUrls: ['./musician-band-header.component.scss']
})
export class MusicianBandHeaderComponent implements OnInit {
  @Input()
  currentBand: FormControl
  bands$: Observable<Band[]>
  band$: Observable<Band>
  @Output() onSwitchBand = new EventEmitter<Band>()
  constructor(
    private auth: AuthService,
    private service: BandService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.bands$ = this.service.getBandsByUser(this.auth.currentAuth.uid)
    this.band$ = this.bands$.pipe(
      switchMap(bands => !!bands.length ? this.service.currentBand$ : of(null)),
      filter(band => band && band.members.hasOwnProperty(
        this.auth.currentAuth.uid
      )),
      map((currentBand: Band) => {
        // this.router.navigate(['/','musico','banda',currentBand.id], {relativeTo: this.route})
        console.log('currentBand: ', currentBand)
        this.currentBand.patchValue(currentBand)
        return currentBand
      }),
      switchMap((currentBand: Band) => {
        console.log('currentBand 2: ', currentBand)
        const source = this.service.getBandById(currentBand.id)
        return this.service.joinMembers(source)
        // return currentBand
      })
    )
  }
  ngOnInit() {
    // this.currentBand.patchValue(this.currentBand.value)
    // console.log('currentBand: ', this.currentBand)
  }
  checkCurrentBand(b1: Band, b2: Band): boolean {
    return b1 && b2 ? b1.id === b2.id : b1 === b2;
  }
  switchBand(selected: MatSelectChange) {
    this.onSwitchBand.emit(selected.value)
    if (!selected.value) {
      this.openBandDialog()
    }
    if (selected.value) {
      console.log('switch: ', selected.value)
      this.router.navigate(['/','musico','banda',selected.value.id])
      this.service.currentBand = selected.value
    }

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
}
