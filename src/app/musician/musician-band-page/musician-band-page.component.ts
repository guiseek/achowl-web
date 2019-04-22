import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
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
import { map, switchMap, filter } from 'rxjs/operators';
import { MusicAlbum } from '../../core/interfaces/music-album';
import { MusicianAlbumDialogComponent } from '../musician-components/dialogs/musician-album-dialog/musician-album-dialog.component';

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
  cards = [{
    icon: 'paper-list',
    title: 'Repertório',
    subtitle: 'Listas para shows',
    action: 'list'
  },
  {
    icon: 'calendar',
    title: 'Calendário',
    subtitle: 'Eventos marcados',
    action: 'calendar'
  }, {
    icon: 'people',
    title: 'Membros',
    subtitle: 'Participantes da banda',
    action: 'people'
  },
  {
    icon: 'album',
    title: 'Disco',
    subtitle: 'Cadastrar disco',
    action: 'newAlbum'
  },
  {
    icon: 'music',
    title: 'Músicas',
    subtitle: 'Adicione suas músicas',
    action: 'music'
  }]
  repertoireForm = this.fb.group({
    parentRef: [null, Validators.required],
    list: this.fb.array([])
  })

  constructor(
    private dialog: MatDialog,
    private snack: SnackService,
    private auth: AuthService,
    private musician: MusicianService,
    private service: BandService,
    private fb: FormBuilder
  ) {
    this.bands$ = this.service.getBandsByUser(this.auth.currentAuth.uid);

    this.band$ = this.bands$.pipe(
      switchMap(bands => !!bands.length ? this.service.currentBand$ : of(null)),
      filter(band => band && band.members.hasOwnProperty(
        this.auth.currentAuth.uid
      )),
      map((currentBand: Band) => {
        // console.log('currentBand: ', currentBand)
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
  switchBand(selected: MatSelectChange) {
    if (!selected.value) {
      this.openBandDialog()
    }
    if (selected.value) {
      this.service.currentBand = selected.value
    }
  }
  onCardClick(action: string, band) {
    console.log(action, band)
    // this.createAlbum(band)
    switch (action) {
      case 'people': return this.openMemberDialog(band)
      case 'newAlbum': return this.createAlbum(band)
    }
  }
  ngOnInit() {
    // this.service.currentBand$.subscribe(
    //   (changeBand) => {
    //     console.log('changeBand: ', changeBand)
    //     if (changeBand) {
    //       this.currentBand.patchValue(changeBand)
    //       const source = this.service.getBandById(changeBand.id)
    //       this.band$ = this.service.joinMembers(source)
    //     }
    //   }
    // )
  }
  onSelectAlbum(album) {
    console.table(album)
    this.openAlbumDialog(album)
  }
  createAlbum(band) {
    const bandRef = this.service.getBandRef(band.id)
    console.log(bandRef.ref)
    let album = {
      parentRef: bandRef.ref
    }
    this.openAlbumDialog(album)
  }
  openAlbumDialog(album: Partial<MusicAlbum> = {}) {
    const dialogRef = this.dialog.open(MusicianAlbumDialogComponent, {
      width: '600px', data: album, panelClass: 'info-dialog'
    })
    const dialogSub = dialogRef.afterClosed().subscribe((response) => {
      console.log(response)
      if (response) {
        this.service.saveAlbum(response)
      }
      dialogSub.unsubscribe()
    })

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
