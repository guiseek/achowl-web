import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicianRoutingModule } from './musician-routing.module';
import { MusicianLayoutComponent } from './musician-layout/musician-layout.component';
import { CoreModule } from '../core/core.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CustomMaterialModule } from '../material.module';
import { MusicianHeaderComponent } from './musician-layout/musician-header/musician-header.component';
import { MusicianNavigationComponent } from './musician-layout/musician-navigation/musician-navigation.component';
import { MusicianProfilePageComponent } from './musician-profile-page/musician-profile-page.component';
import { MusicianDashboardPageComponent } from './musician-dashboard-page/musician-dashboard-page.component';
import { MusicianBandPageComponent } from './musician-band-page/musician-band-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MusicianComponentsModule } from './musician-components/musician-components.module';
import { MusicianProfileDialogComponent } from './musician-components/dialogs/musician-profile-dialog/musician-profile-dialog.component';
import { MusicianProfileFormComponent } from './musician-components/forms/musician-profile-form/musician-profile-form.component';
import { SharedModule } from '../shared/shared.module';
import { MusicianBandDialogComponent } from './musician-components/dialogs/musician-band-dialog/musician-band-dialog.component';
import { MusicianSearchDialogComponent } from './musician-components/dialogs/musician-search-dialog/musician-search-dialog.component';
import { MusicianBandMemberDialogComponent } from './musician-components/dialogs/musician-band-member-dialog/musician-band-member-dialog.component';
import { MusicianAlbumDialogComponent } from './musician-components/dialogs/musician-album-dialog/musician-album-dialog.component';

@NgModule({
  declarations: [
    MusicianLayoutComponent,
    MusicianHeaderComponent,
    MusicianNavigationComponent,
    MusicianDashboardPageComponent,
    MusicianProfilePageComponent,
    MusicianBandPageComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    CustomMaterialModule,
    MusicianRoutingModule,
    MusicianComponentsModule,
    LayoutModule,
  ],
  entryComponents: [
    MusicianProfileDialogComponent,
    MusicianBandDialogComponent,
    MusicianProfileFormComponent,
    MusicianSearchDialogComponent,
    MusicianBandMemberDialogComponent,
    MusicianAlbumDialogComponent
  ]
})
export class MusicianModule { }
