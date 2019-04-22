import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { CoreModule } from '../../core/core.module';
import { NgxMaskModule } from 'ngx-mask';
import { CustomMaterialModule } from '../../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MusicianProfileDialogComponent } from './dialogs/musician-profile-dialog/musician-profile-dialog.component';
import { MusicianAlbumDialogComponent } from './dialogs/musician-album-dialog/musician-album-dialog.component';
import { MusicianBandDialogComponent } from './dialogs/musician-band-dialog/musician-band-dialog.component';
import { MusicianAlbumTrackDialogComponent } from './dialogs/musician-album-track-dialog/musician-album-track-dialog.component';
import { MusicianAlbumsComponent } from './musician-albums/musician-albums.component';
import { MusicianAlbumTracksComponent } from './musician-album-tracks/musician-album-tracks.component';
import { MusicianProfileFormComponent } from './forms/musician-profile-form/musician-profile-form.component';
import { MusicianBandFormComponent } from './forms/musician-band-form/musician-band-form.component';
import { MusicianBandMemberFormComponent } from './forms/musician-band-member-form/musician-band-member-form.component';
import { MusicianBandMemberDialogComponent } from './dialogs/musician-band-member-dialog/musician-band-member-dialog.component';
import { MusicianInstrumentsFormComponent } from './forms/musician-instruments-form/musician-instruments-form.component';
import { MusicianGenresFormComponent } from './forms/musician-genres-form/musician-genres-form.component';
import { MusicianSearchComponent } from './musician-search/musician-search.component';
import { MusicianSearchDialogComponent } from './dialogs/musician-search-dialog/musician-search-dialog.component';
import { MusicianBandMemberComponent } from './musician-band-member/musician-band-member.component';
import { MusicianBandMembersComponent } from './musician-band-members/musician-band-members.component';
import { MusicianAlbumFormComponent } from './forms/musician-album-form/musician-album-form.component';
import { MusicianRepertoireComponent } from './musician-repertoire/musician-repertoire.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MusicianRepertoireFormComponent } from './forms/musician-repertoire-form/musician-repertoire-form.component';
import { MusicianBandMemberCardFormComponent } from './forms/musician-band-member-card-form/musician-band-member-card-form.component';

@NgModule({
  declarations: [
    MusicianProfileDialogComponent,
    MusicianAlbumDialogComponent,
    MusicianBandDialogComponent,
    MusicianAlbumTrackDialogComponent,
    MusicianAlbumsComponent,
    MusicianAlbumTracksComponent,
    MusicianProfileFormComponent,
    MusicianBandFormComponent,
    MusicianBandMemberFormComponent,
    MusicianBandMemberDialogComponent,
    MusicianInstrumentsFormComponent,
    MusicianGenresFormComponent,
    MusicianSearchComponent,
    MusicianSearchDialogComponent,
    MusicianBandMemberComponent,
    MusicianBandMembersComponent,
    MusicianAlbumFormComponent,
    MusicianRepertoireComponent,
    MusicianRepertoireFormComponent,
    MusicianBandMemberCardFormComponent
  ],
  imports: [
    CommonModule,
    // CoreModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    CustomMaterialModule,
    DragDropModule
  ],
  exports: [
    MusicianProfileDialogComponent,
    MusicianAlbumDialogComponent,
    MusicianBandDialogComponent,
    MusicianAlbumTrackDialogComponent,
    MusicianAlbumsComponent,
    MusicianAlbumTracksComponent,
    MusicianProfileFormComponent,
    MusicianBandFormComponent,
    MusicianBandMemberFormComponent,
    MusicianBandMemberDialogComponent,
    MusicianInstrumentsFormComponent,
    MusicianGenresFormComponent,
    MusicianSearchComponent,
    MusicianSearchDialogComponent,
    MusicianBandMemberComponent,
    MusicianBandMembersComponent,
    MusicianAlbumFormComponent,
    MusicianRepertoireComponent,
    MusicianRepertoireFormComponent,
    MusicianBandMemberCardFormComponent
  ]
})
export class MusicianComponentsModule { }
