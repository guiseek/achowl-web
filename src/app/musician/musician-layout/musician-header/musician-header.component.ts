import { Component, OnInit } from '@angular/core';
import { MusicianService, AuthService, Musician } from '../../../core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { MusicianProfileDialogComponent } from '../../musician-components/dialogs/musician-profile-dialog/musician-profile-dialog.component';

@Component({
  selector: 'owl-musician-header',
  templateUrl: './musician-header.component.html',
  styleUrls: ['./musician-header.component.scss']
})
export class MusicianHeaderComponent implements OnInit {
  musician$: Observable<Musician>
  constructor(
    public auth: AuthService,
    public musician: MusicianService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.musician$ = this.musician.musician$.pipe(
      map((musician) => {
        console.log('mus: ', musician)
        if (musician && !musician.name) {
          this.openProfileDialog(musician)
        }
        // this.musician.getMusicianRef(musician.id)
        //   .valueChanges()
        //   .subscribe(res => console.log(res))
        return musician
      })
    )
  }
  openProfileDialog(musician: Musician) {
    const dialogRef = this.dialog.open(MusicianProfileDialogComponent, {
      width: '600px',
      data: musician,
      panelClass: 'info-dialog',
      disableClose: true
    })
    const dialogSub = dialogRef.afterClosed()
      .subscribe((response) => {
        this.musician.saveMusician(response)
          .then(() => this.router.navigateByUrl('/musico/perfil'))
        console.log('response: ', response)
        dialogSub.unsubscribe()
      })
  }
  signOut() {
    this.auth.signOut()
      .then(() => this.router.navigateByUrl('/login'))
  }

}
