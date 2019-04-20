import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Musician } from '../../core/interfaces/musician';
import { MusicianService } from '../../core/services/musician.service';
import { AuthService } from '../../core/services/auth.service';
import { MatDialog } from '@angular/material';
// import { MusicianProfileDialogComponent } from '../musician-components/dialogs/musician-profile-dialog/musician-profile-dialog.component';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { INSTRUMENTS } from '../../core/constants/instruments';
import { GENRES } from '../../core/constants/genres';
import { delay, map } from 'rxjs/operators';
import { SnackService } from '../../shared/services/snack.service';

@Component({
  selector: 'owl-musician-profile-page',
  templateUrl: './musician-profile-page.component.html',
  styleUrls: ['./musician-profile-page.component.scss']
})
export class MusicianProfilePageComponent implements OnInit {
  musician$: Observable<Musician>
  form = this.fb.group({
    id: [],
    name: [null, [Validators.required, Validators.maxLength(100)]],
    phone: [],
    vocalist: [],
    description: [null, [Validators.minLength(50), Validators.maxLength(1000)]],
    instruments: this.fb.group({}),
    genres: this.fb.group({})
  })
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private snack: SnackService,
    private auth: AuthService,
    private service: MusicianService
  ) {
    this.musician$ = this.service.getMusicianById(
      this.auth.currentAuth.uid
    ).pipe(
      map(musician => {
        console.log('musician: ', musician)
        this.form.patchValue(musician)
        return musician
      })
    )
  }
  get instruments(): FormGroup { return this.form.get('instruments') as FormGroup }
  get genres(): FormGroup { return this.form.get('genres') as FormGroup }
  onSubmit() {
    console.log(this.form.value)
    if (this.form.valid) {
      this.service.saveMusician(this.form.value)
        .then(
          () => this.snack.open('Salvo', {
            action: 'Fechar',
            duration: 6000
          })
        )
    }
  }
  ngOnInit() {
    Object.keys(INSTRUMENTS).map(i => {
      this.instruments.addControl(i, this.fb.control(false))
    })
    Object.keys(GENRES).map(i => {
      this.genres.addControl(i, this.fb.control(false))
    })
  }
  openProfileDialog(musician?: Musician) {
    console.log(musician)
    // const dialogRef = this.dialog.open(MusicianProfileDialogComponent, {
    //   width: '500px'
    // })
    // const dialogRef = this.dialog.open(
    //   MusicianProfileDialogComponent,
    //   {
    //     data: musician,
    //     panelClass: 'info-dialog'
    //   }
    // )
    // dialogRef.afterClosed().subscribe(
    //   (response) => {
    //     console.log('musician: ', response)
    //   }
    // )
  }
}
