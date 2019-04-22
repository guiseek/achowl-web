import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Band, AuthService, BandService } from '../../core';
import { switchMap, filter, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MusicianBandDialogComponent } from '../musician-components/dialogs/musician-band-dialog/musician-band-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'owl-musician-band',
  templateUrl: './musician-band.component.html',
  styleUrls: ['./musician-band.component.scss']
})
export class MusicianBandComponent implements OnInit {
  bands$: Observable<Band[]>
  band$: Observable<Band>
  currentBand = new FormControl()
  band: Band
  constructor(
    private auth: AuthService,
    private service: BandService,
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.bands$ = this.service.getBandsByUser(this.auth.currentAuth.uid)
    this.bands$.pipe(
        map(bands => {
          if (bands && !bands.length) {
            this.router.navigate(['configuracoes'])
          }
        })
      )

    // this.band$ = this.bands$.pipe(
    //   switchMap(bands => !!bands.length ? this.service.currentBand$ : of(null)),
    //   filter(band => band && band.members.hasOwnProperty(
    //     this.auth.currentAuth.uid
    //   )),
    //   map((currentBand: Band) => {
    //     console.log('currentBand: ', currentBand)
    //     this.currentBand.patchValue(currentBand)
    //     return currentBand
    //   }),
    //   switchMap((currentBand: Band) => {
    //     console.log('currentBand 2: ', currentBand)
    //     const source = this.service.getBandById(currentBand.id)
    //     return this.service.joinMembers(source)
    //     // return currentBand
    //   })
    // )

  }

  ngOnInit() {
    // this.route.data.subscribe((data: {band: Band}) => {
    //   console.log('data: ', data)
    //   this.band = data.band
    // })
  }
  
  onSwitchBand(band) {
    console.table(band)
    // if (!band) {
    //   this.openBandDialog()
    // }
    // if (band) {
    //   this.service.currentBand = band
    // }
  }
  // openBandDialog(data?: Band) {
  //   let band = data ? data : {
  //     creator: this.auth.currentAuth.uid
  //   }
  //   const dialogRef = this.dialog.open(MusicianBandDialogComponent, {
  //     width: '600px', data: band, panelClass: 'info-dialog'
  //   })
  //   const dialogSub = dialogRef.afterClosed().subscribe((response) => {
  //     console.log(response)
  //     if (response) {
  //       this.service.saveBand(response)
  //     } else {
  //       this.currentBand.patchValue(
  //         this.service.currentBand
  //       )
  //     }
  //     dialogSub.unsubscribe()
  //   })
  // }
}
