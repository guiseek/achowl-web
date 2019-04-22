import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicianBandComponent } from './musician-band.component';
import { MusicianBandMembersPageComponent } from './musician-band-members-page/musician-band-members-page.component';
import { MusicianBandRepertoirePageComponent } from './musician-band-repertoire-page/musician-band-repertoire-page.component';
import { MusicianBandCalendarPageComponent } from './musician-band-calendar-page/musician-band-calendar-page.component';
import { MusicianBandResolverService } from '../../core/services/musician-band-resolver.service';
import { MusicianBandSettingsPageComponent } from './musician-band-settings-page/musician-band-settings-page.component';

const routes: Routes = [{
  path: '',
  component: MusicianBandComponent,
  children: [{
    path: 'configuracoes',
    component: MusicianBandSettingsPageComponent
  }, {
    path: 'repertorio',
    component: MusicianBandRepertoirePageComponent
  }, {
    path: 'agenda',
    component: MusicianBandCalendarPageComponent
  }, {
    path: 'membros',
    component: MusicianBandMembersPageComponent
  }, {
    path: 'discos',
    component: MusicianBandCalendarPageComponent
  },{
    path: '',
    redirectTo: 'configuracoes',
    pathMatch: 'full'
  }]
}];
// , {
//   path: '',
//     redirectTo: 'repertorio',
//       pathMatch: 'full'
// }

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicianBandRoutingModule { }
