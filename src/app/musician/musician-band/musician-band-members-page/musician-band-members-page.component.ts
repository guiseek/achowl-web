import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Band, BandService, Musician, MusicianService } from '../../../core';
import { map } from 'rxjs/operators';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MusicianBandMemberDialogComponent } from '../../musician-components/dialogs/musician-band-member-dialog/musician-band-member-dialog.component';
import { SnackService } from '../../../shared/services/snack.service';

@Component({
  selector: 'owl-musician-band-members-page',
  templateUrl: './musician-band-members-page.component.html',
  styleUrls: ['./musician-band-members-page.component.scss']
})
export class MusicianBandMembersPageComponent implements OnInit {
  band$: Observable<Band>
  creator$: Observable<Musician>
  membersForm = this.fb.group({
    id: [],
    members: this.fb.group({})
  })
  repertoireForm = this.fb.group({
    id: [null, Validators.required],
    members: this.fb.array([])
  })
  newMemberForm = this.fb.group({
    artist: [null, Validators.required],
    song: [null, Validators.required]
  })
  band: Band
  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private musician: MusicianService,
    private service: BandService,
    private snack: SnackService
  ) {
    this.route.parent.params.subscribe(params => {
      console.log('params: ', params)
      const source = this.service.getBandById(params.id)
        .pipe(
          map(band => {
            this.band = band
            return band
          })
        )
      this.band$ = this.service.joinMembers(source)
        .pipe(
          map(band => {
            this.getCreator(band.creator)
            // this.band = band
            return band
          })
        )
    })
    console.log('id: ', this.route.parent.snapshot.params)
  }
  get members(): FormGroup {
    return this.membersForm.get('members') as FormGroup
  }

  onSelectMember(member) {
    console.log('member: ', member)
    let dialogRef = this.dialog.open(MusicianBandMemberDialogComponent, {
      width: '400px', data: member, panelClass: 'info-dialog'
    })
    const dialogSub = dialogRef.afterClosed()
      .subscribe((response) => {
        console.log('asd: ',response)
        let members = Object.assign(this.service.currentBand.members, response)
        console.log('members: ', Object.assign(this.service.currentBand, { members: response }))
        // console.log(Object.assign(this.band, {
        //   members: response
        // }))
        if (response) {
          this.service.saveBand(
            Object.assign(this.service.currentBand, { members: response})
          ).then(() => {
            this.snack.open('Membro salvo', 'Fechar')
          })
        }
        dialogSub.unsubscribe()
      })
  }
  addMember(musician) {
    console.log(musician)
    const group = this.fb.group({
      instrument: [null, Validators.required],
      active: [true]
    })
    this.members.addControl(musician.id, group)
  }

  getCreator(id:string) {
    this.creator$ = this.musician.getMusicianById(id)
  }
  ngOnInit() {
  }

}
