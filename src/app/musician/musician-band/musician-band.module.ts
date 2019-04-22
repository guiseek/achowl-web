import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicianBandRoutingModule } from './musician-band-routing.module';
import { MusicianBandHeaderComponent } from './musician-band-header/musician-band-header.component';
import { MusicianBandNavigationComponent } from './musician-band-navigation/musician-band-navigation.component';
import { MusicianBandComponent } from './musician-band.component';
import { CustomMaterialModule } from '../../material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoreModule } from '../../core/core.module';
import { MusicianComponentsModule } from '../musician-components/musician-components.module';
import { MusicianBandMembersPageComponent } from './musician-band-members-page/musician-band-members-page.component';
import { MusicianBandCalendarPageComponent } from './musician-band-calendar-page/musician-band-calendar-page.component';
import { MusicianBandAlbumsPageComponent } from './musician-band-albums-page/musician-band-albums-page.component';
import { MusicianBandRepertoirePageComponent } from './musician-band-repertoire-page/musician-band-repertoire-page.component';
import { MusicianBandDialogComponent } from '../musician-components/dialogs/musician-band-dialog/musician-band-dialog.component';
import { MusicianBandMemberCardFormComponent } from '../musician-components/forms/musician-band-member-card-form/musician-band-member-card-form.component';
import { MusicianBandSettingsPageComponent } from './musician-band-settings-page/musician-band-settings-page.component';

@NgModule({
  declarations: [
    MusicianBandHeaderComponent,
    MusicianBandNavigationComponent,
    MusicianBandComponent,
    MusicianBandMembersPageComponent,
    MusicianBandCalendarPageComponent,
    MusicianBandAlbumsPageComponent,
    MusicianBandRepertoirePageComponent,
    MusicianBandSettingsPageComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    MusicianComponentsModule,
    MusicianBandRoutingModule
  ],
  entryComponents: [
    MusicianBandDialogComponent,
    MusicianBandMemberCardFormComponent
  ]
})
export class MusicianBandModule { }
