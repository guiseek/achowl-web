import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicianAuthLayoutComponent } from './musician-auth-layout/musician-auth-layout.component';
import { MusicianSignInPageComponent } from './musician-sign-in-page/musician-sign-in-page.component';
import { MusicianSignUpPageComponent } from './musician-sign-up-page/musician-sign-up-page.component';

const routes: Routes = [{
  path: '',
  component: MusicianAuthLayoutComponent,
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'entrar'
    },
    {
      path: 'entrar',
      component: MusicianSignInPageComponent
    },
    {
      path: 'cadastrar',
      component: MusicianSignUpPageComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicianAuthRoutingModule { }
