import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'login',
  redirectTo: 'musico/auth/entrar'
},{
  path: '',
  loadChildren: './public/public.module#PublicModule'
}, {
  path: 'local',
  loadChildren: './place/place.module#PlaceModule'
}, {
  path: 'musico',
  loadChildren: './musician/musician.module#MusicianModule'
}, {
  path: 'prestador',
  loadChildren: './provider/provider.module#ProviderModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
