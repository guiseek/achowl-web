import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicianLayoutComponent } from './musician-layout/musician-layout.component';
import { MusicianGuard } from '../core/guards/musician.guard';
import { MusicianDashboardPageComponent } from './musician-dashboard-page/musician-dashboard-page.component';
import { MusicianProfilePageComponent } from './musician-profile-page/musician-profile-page.component';
import { MusicianBandPageComponent } from './musician-band-page/musician-band-page.component';

const routes: Routes = [{
  path: 'auth',
  loadChildren: './musician-auth/musician-auth.module#MusicianAuthModule'
}, {
  path: '',
  component: MusicianLayoutComponent,
  canActivate: [MusicianGuard],
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'painel'
  }, {
    path: 'painel',
    // canActivate: [],
    component: MusicianDashboardPageComponent
  }, {
    path: 'perfil',
    // canActivate: [],
    component: MusicianProfilePageComponent
  }, {
    path: 'band',
    // canActivate: [],
    component: MusicianBandPageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicianRoutingModule { }
